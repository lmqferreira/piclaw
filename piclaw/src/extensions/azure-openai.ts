/**
 * azure-openai – registers Azure OpenAI models as a provider using the VM's
 * managed identity (IMDS token) for authentication.
 *
 * Uses a self-contained streaming implementation with the standard OpenAI client
 * (not AzureOpenAI) so the IMDS bearer token is sent as "Authorization: Bearer"
 * rather than the "api-key" header that AzureOpenAI uses.
 *
 * Required env vars (set in piclaw.service):
 *   AOAI_BASE_URL   – e.g. https://piclaw-aoai.openai.azure.com/openai/v1
 *   AOAI_RESOURCE   – token audience, default https://cognitiveservices.azure.com/
 */
import type { ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";
import OpenAI from "openai";
import { createAssistantMessageEventStream, supportsXhigh } from "@mariozechner/pi-ai";
import {
  convertResponsesMessages,
  convertResponsesTools,
  processResponsesStream,
} from "@mariozechner/pi-ai/dist/providers/openai-responses-shared.js";
import { buildBaseOptions, clampReasoning } from "@mariozechner/pi-ai/dist/providers/simple-options.js";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PROVIDER = "azure-openai";
const BASE_URL = process.env.AOAI_BASE_URL || "https://piclaw-aoai.openai.azure.com/openai/v1";
const IMDS_URL = "http://169.254.169.254/metadata/identity/oauth2/token";
const IMDS_API_VERSION = "2018-02-01";
const RESOURCE = process.env.AOAI_RESOURCE || "https://cognitiveservices.azure.com/";
const CACHE_DIR = process.env.AOAI_TOKEN_CACHE_DIR || "/workspace/.piclaw/cache";
const CACHE_FILE = process.env.AOAI_TOKEN_CACHE_FILE || `${CACHE_DIR}/aoai-token.json`;
const SKEW_SECONDS = Number(process.env.AOAI_TOKEN_SKEW_SECONDS || "300");

// Include our provider name in the tool-call provider set so tool calls are handled correctly
const TOOL_CALL_PROVIDERS = new Set(["openai", "openai-codex", "opencode", PROVIDER]);

const MODELS = [
  {
    id: "gpt-4.1",
    name: "Azure GPT-4.1",
    reasoning: false,
    contextWindow: 1047576,
    maxTokens: 32768,
  },
  {
    id: "o4-mini",
    name: "Azure o4-mini",
    reasoning: true,
    contextWindow: 200000,
    maxTokens: 16000,
  },
] as const;

interface TokenCache {
  accessToken?: string;
  expiresOn?: string;
  expiresOnEpoch?: number;
}

function readCache(): TokenCache {
  try {
    return JSON.parse(readFileSync(CACHE_FILE, "utf-8")) as TokenCache;
  } catch {
    return {};
  }
}

function isTokenValid(cache: TokenCache): boolean {
  if (!cache.accessToken || !cache.expiresOnEpoch) return false;
  return cache.expiresOnEpoch - Math.floor(Date.now() / 1000) > SKEW_SECONDS;
}

function writeCache(token: string, expiresOn: string | undefined, expiresOnEpoch: number): void {
  mkdirSync(CACHE_DIR, { recursive: true });
  writeFileSync(CACHE_FILE, JSON.stringify({ accessToken: token, expiresOn, expiresOnEpoch }, null, 2) + "\n");
}

async function fetchToken(): Promise<TokenCache> {
  const url = `${IMDS_URL}?api-version=${IMDS_API_VERSION}&resource=${encodeURIComponent(RESOURCE)}`;
  const res = await fetch(url, { headers: { Metadata: "true" } });
  if (!res.ok) throw new Error(`IMDS failed (${res.status})`);
  const data = (await res.json()) as { access_token?: string; expires_on?: string };
  if (!data.access_token) throw new Error("IMDS: missing access_token");
  let epoch = Number(data.expires_on ?? "");
  if (!Number.isFinite(epoch) || epoch <= 0) epoch = Math.floor(Date.now() / 1000) + 3300;
  writeCache(data.access_token, data.expires_on, epoch);
  return { accessToken: data.access_token, expiresOn: data.expires_on, expiresOnEpoch: epoch };
}

async function ensureToken(): Promise<TokenCache> {
  const cached = readCache();
  if (isTokenValid(cached)) return cached;
  try {
    return await fetchToken();
  } catch (err) {
    console.error("[azure-openai] Token refresh failed:", err);
    return cached;
  }
}

/**
 * Stream using the standard OpenAI client (not AzureOpenAI).
 * This sends the bearer token as "Authorization: Bearer <token>" which is what
 * the Azure IMDS managed identity token requires.
 */
function streamAzureOpenAIResponses(model: any, context: any, options: any) {
  const stream = createAssistantMessageEventStream();

  (async () => {
    const output: any = {
      role: "assistant" as const,
      content: [] as any[],
      api: model.api,
      provider: model.provider,
      model: model.id,
      usage: {
        input: 0,
        output: 0,
        cacheRead: 0,
        cacheWrite: 0,
        totalTokens: 0,
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
      },
      stopReason: "stop",
      timestamp: Date.now(),
    };

    try {
      const apiKey = options?.apiKey || "";
      const headers = { ...(model.headers ?? {}) };
      if (options?.headers) Object.assign(headers, options.headers);

      // Use standard OpenAI() so the token goes in "Authorization: Bearer"
      const client = new OpenAI({
        apiKey,
        baseURL: model.baseUrl,
        dangerouslyAllowBrowser: true,
        defaultHeaders: headers,
      });

      const messages = convertResponsesMessages(model, context, TOOL_CALL_PROVIDERS);
      const params: Record<string, any> = {
        model: model.id,
        input: messages,
        stream: true,
        prompt_cache_key: options?.sessionId,
        text: { format: { type: "text" }, verbosity: "medium" },
      };

      if (options?.maxTokens) params.max_output_tokens = options.maxTokens;
      if (options?.temperature !== undefined) params.temperature = options.temperature;
      if (context.tools) params.tools = convertResponsesTools(context.tools);

      if (model.reasoning && (options?.reasoningEffort || options?.reasoningSummary)) {
        params.reasoning = {
          effort: options?.reasoningEffort || "medium",
          summary: options?.reasoningSummary || "auto",
        };
        params.include = ["reasoning.encrypted_content"];
      }

      console.log(`[azure-openai] Creating stream for ${model.id}, baseUrl=${model.baseUrl}, apiKey=${(apiKey || "").slice(0, 8)}...`);
      const openaiStream = await client.responses.create(
        params,
        options?.signal ? { signal: options.signal } : undefined
      ) as any;

      console.log(`[azure-openai] Stream created, type=${typeof openaiStream}, constructor=${openaiStream?.constructor?.name}`);
      stream.push({ type: "start", partial: output });
      await processResponsesStream(openaiStream, output, stream as any, model);

      console.log(`[azure-openai] processResponsesStream done. content=${output.content.length} blocks, stopReason=${output.stopReason}`);
      for (const block of output.content) {
        console.log(`[azure-openai]   block: type=${block.type}, text=${(block.text || "").length} chars`);
      }

      if (options?.signal?.aborted) throw new Error("Request was aborted");
      if (output.stopReason === "aborted" || output.stopReason === "error") {
        throw new Error(`Stream error: stopReason=${output.stopReason}, errorMessage=${(output as any).errorMessage}`);
      }

      stream.push({ type: "done", reason: output.stopReason, message: output });
      stream.end();
    } catch (error) {
      const errDetails = error instanceof Error ? { message: error.message, name: error.name, status: (error as any).status, code: (error as any).code, body: (error as any).body, cause: (error as any).cause?.message } : error; console.error(`[azure-openai] Stream error for ${model.id}:`, JSON.stringify(errDetails, null, 2));
      for (const block of output.content) delete (block as any).index;
      output.stopReason = options?.signal?.aborted ? "aborted" : "error";
      (output as any).errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      stream.push({ type: "error", reason: output.stopReason, error: output });
      stream.end();
    }
  })();

  return stream;
}

function streamSimpleAzureOpenAIResponses(model: any, context: any, options: any) {
  const apiKey = options?.apiKey;
  if (!apiKey) throw new Error(`No API key for provider: ${model.provider}`);

  const base = buildBaseOptions(model, options, apiKey);
  const reasoningEffort = supportsXhigh(model)
    ? options?.reasoning
    : clampReasoning(options?.reasoning);

  return streamAzureOpenAIResponses(model, context, { ...base, reasoningEffort });
}

function registerProvider(pi: ExtensionAPI, token: string) {
  pi.registerProvider(PROVIDER, {
    baseUrl: BASE_URL,
    api: "azure-openai",
    apiKey: token,
    streamSimple: streamSimpleAzureOpenAIResponses as any,
    models: MODELS.map((m) => ({
      id: m.id,
      name: m.name,
      reasoning: m.reasoning,
      input: ["text"] as ["text"],
      contextWindow: m.contextWindow,
      maxTokens: m.maxTokens,
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    })),
  });
  console.log(`[azure-openai] Provider registered: ${MODELS.map((m) => m.id).join(", ")}`);
}

export const azureOpenAI: ExtensionFactory = async (pi: ExtensionAPI) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const refresh = async () => {
    if (timer) { clearTimeout(timer); timer = null; }
    const cache = await ensureToken();
    if (cache.accessToken) {
      registerProvider(pi, cache.accessToken);
    } else {
      console.error("[azure-openai] No token — check managed identity has 'Cognitive Services OpenAI User' role.");
    }
    const delayMs = cache.expiresOnEpoch
      ? Math.max(60, cache.expiresOnEpoch - Math.floor(Date.now() / 1000) - SKEW_SECONDS) * 1000
      : 60_000;
    timer = setTimeout(() => void refresh(), delayMs);
  };

  pi.on("session_start", () => void refresh());
  pi.on("session_shutdown", () => { if (timer) { clearTimeout(timer); timer = null; } });

  await refresh();
};
