import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import OpenAI from "openai";
import { AssistantMessageEventStream, supportsXhigh } from "@mariozechner/pi-ai";
import {
  convertResponsesMessages,
  convertResponsesTools,
  processResponsesStream,
} from "@mariozechner/pi-ai/dist/providers/openai-responses-shared.js";
import { buildBaseOptions, clampReasoning } from "@mariozechner/pi-ai/dist/providers/simple-options.js";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const PROVIDER = "azure-openai";
const MODEL_ID = process.env.AOAI_MODEL_ID || "gpt-4.1";
const MODEL_NAME = process.env.AOAI_MODEL_NAME || `Azure ${MODEL_ID}`;
const BASE_URL = process.env.AOAI_BASE_URL || "https://{RESOURCE}.openai.azure.com/openai/v1";
const IMDS_URL = "http://169.254.169.254/metadata/identity/oauth2/token";
const IMDS_API_VERSION = "2018-02-01";
const RESOURCE = process.env.AOAI_RESOURCE || "https://cognitiveservices.azure.com/";
const CACHE_DIR = process.env.AOAI_TOKEN_CACHE_DIR || "/workspace/.piclaw/cache";
const CACHE_FILE = process.env.AOAI_TOKEN_CACHE_FILE || `${CACHE_DIR}/aoai-token.json`;
const SKEW_SECONDS = Number(process.env.AOAI_TOKEN_SKEW_SECONDS || "300");
const TOOL_CALL_PROVIDERS = new Set(["openai", "openai-codex", "opencode", PROVIDER]);

interface TokenCache {
  accessToken?: string;
  expiresOn?: string;
  expiresOnEpoch?: number;
}

function readCache(): TokenCache {
  try {
    const raw = readFileSync(CACHE_FILE, "utf-8");
    return JSON.parse(raw) as TokenCache;
  } catch {
    return {};
  }
}

function isTokenValid(cache: TokenCache): boolean {
  if (!cache.accessToken || !cache.expiresOnEpoch) return false;
  const now = Math.floor(Date.now() / 1000);
  return cache.expiresOnEpoch - now > SKEW_SECONDS;
}

function writeCache(token: string, expiresOn: string | undefined, expiresOnEpoch: number): void {
  mkdirSync(CACHE_DIR, { recursive: true });
  const payload: TokenCache = { accessToken: token, expiresOn, expiresOnEpoch };
  writeFileSync(CACHE_FILE, `${JSON.stringify(payload, null, 2)}\n`);
}

async function fetchTokenFromImds(): Promise<TokenCache> {
  const url = `${IMDS_URL}?api-version=${IMDS_API_VERSION}&resource=${encodeURIComponent(RESOURCE)}`;
  const response = await fetch(url, {
    headers: {
      Metadata: "true",
    },
  });
  if (!response.ok) {
    throw new Error(`IMDS token request failed (${response.status})`);
  }
  const data = (await response.json()) as {
    access_token?: string;
    expires_on?: string;
  };

  if (!data.access_token) {
    throw new Error("IMDS token response missing access_token");
  }

  const expiresRaw = data.expires_on || "";
  let expiresOnEpoch = Number(expiresRaw);
  if (!Number.isFinite(expiresOnEpoch)) {
    const parsed = Date.parse(expiresRaw);
    if (Number.isFinite(parsed)) {
      expiresOnEpoch = Math.floor(parsed / 1000);
    }
  }
  if (!Number.isFinite(expiresOnEpoch) || expiresOnEpoch <= 0) {
    expiresOnEpoch = Math.floor(Date.now() / 1000) + 3300;
  }

  writeCache(data.access_token, expiresRaw, expiresOnEpoch);
  return { accessToken: data.access_token, expiresOn: expiresRaw, expiresOnEpoch };
}

async function ensureToken(): Promise<TokenCache> {
  const cached = readCache();
  if (isTokenValid(cached)) return cached;

  try {
    return await fetchTokenFromImds();
  } catch (error) {
    console.error("[azure-openai] Failed to refresh token via IMDS:", error);
    return cached;
  }
}

function streamAzureOpenAIResponses(model: any, context: any, options: any) {
  const stream = new AssistantMessageEventStream();

  (async () => {
    const output = {
      role: "assistant",
      content: [],
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
      const headers = { ...model.headers };
      if (options?.headers) {
        Object.assign(headers, options.headers);
      }

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

      if (options?.maxTokens) {
        params.max_output_tokens = options?.maxTokens;
      }
      if (options?.temperature !== undefined) {
        params.temperature = options?.temperature;
      }
      if (context.tools) {
        params.tools = convertResponsesTools(context.tools);
      }

      if (model.reasoning) {
        if (options?.reasoningEffort || options?.reasoningSummary) {
          params.reasoning = {
            effort: options?.reasoningEffort || "medium",
            summary: options?.reasoningSummary || "auto",
          };
          params.include = ["reasoning.encrypted_content"];
        } else if (String(model.name).toLowerCase().startsWith("gpt-5")) {
          messages.push({
            role: "developer",
            content: [
              {
                type: "input_text",
                text: "# Juice: 0 !important",
              },
            ],
          });
        }
      }

      const openaiStream = await client.responses.create(
        params,
        options?.signal ? { signal: options.signal } : undefined
      );

      stream.push({ type: "start", partial: output });
      await processResponsesStream(openaiStream, output, stream, model);

      if (options?.signal?.aborted) {
        throw new Error("Request was aborted");
      }
      if (output.stopReason === "aborted" || output.stopReason === "error") {
        throw new Error("An unknown error occurred");
      }

      stream.push({ type: "done", reason: output.stopReason, message: output });
      stream.end();
    } catch (error) {
      for (const block of output.content) delete (block as any).index;
      output.stopReason = options?.signal?.aborted ? "aborted" : "error";
      output.errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      stream.push({ type: "error", reason: output.stopReason, error: output });
      stream.end();
    }
  })();

  return stream;
}

function streamSimpleAzureOpenAIResponses(model: any, context: any, options: any) {
  const apiKey = options?.apiKey;
  if (!apiKey) {
    throw new Error(`No API key for provider: ${model.provider}`);
  }

  const base = buildBaseOptions(model, options, apiKey);
  const reasoningEffort = supportsXhigh(model) ? options?.reasoning : clampReasoning(options?.reasoning);

  return streamAzureOpenAIResponses(model, context, {
    ...base,
    reasoningEffort,
  });
}

function registerProvider(pi: ExtensionAPI, token: string) {
  pi.registerProvider(PROVIDER, {
    baseUrl: BASE_URL,
    api: "openai-responses",
    apiKey: token,
    streamSimple: streamSimpleAzureOpenAIResponses,
    models: [
      {
        id: MODEL_ID,
        name: MODEL_NAME,
        reasoning: true,
        input: ["text"],
        contextWindow: 200000,
        maxTokens: 64000,
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      },
    ],
  });
}

export default function (pi: ExtensionAPI) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  const scheduleNext = (expiresOnEpoch?: number) => {
    if (timer) clearTimeout(timer);
    const now = Math.floor(Date.now() / 1000);
    const delaySeconds = expiresOnEpoch ? Math.max(60, expiresOnEpoch - now - SKEW_SECONDS) : 60;
    timer = setTimeout(() => void refresh(), delaySeconds * 1000);
  };

  const refresh = async () => {
    const cache = await ensureToken();
    if (cache.accessToken) {
      registerProvider(pi, cache.accessToken);
    }
    scheduleNext(cache.expiresOnEpoch);
  };

  pi.on("session_start", () => {
    void refresh();
  });

  pi.on("session_shutdown", () => {
    if (timer) clearTimeout(timer);
  });

  void refresh();
}
