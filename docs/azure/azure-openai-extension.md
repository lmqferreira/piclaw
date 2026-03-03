# Azure OpenAI extension (piclaw)

This note documents a small piclaw extension that registers an `azure-openai` provider using Azure Managed Identity (IMDS) and the OpenAI Responses API.

## Purpose

- Provide an Azure OpenAI provider (`azure-openai`) for piclaw using managed identity (no Azure CLI dependency).
- Stream Responses API output with tool-call ID normalisation.
- Force a text output format so responses are not “reasoning-only”.

## Key design choices

- **Managed identity token** via Azure IMDS (no `az` CLI dependency).
- **Token cache** written to `${AOAI_TOKEN_CACHE_DIR}` with a refresh skew.
- **OpenAI client** from the `openai` package, configured with the Azure Responses API base URL.
- **Tool-call ID normalisation** uses `convertResponsesMessages` from `@mariozechner/pi-ai` and includes `azure-openai` in the allowed provider set.
- **Thinking level support** maps `/thinking` settings to `reasoning.effort` (clamped for xhigh when needed).
- **Text output forcing** via `text: { format: { type: "text" }, verbosity: "medium" }` to ensure output appears (not just reasoning blocks).

## Provider registration

- Provider ID: `azure-openai`
- Model ID: `AOAI_MODEL_ID` (default `gpt-4.1`)
- Base URL: `AOAI_BASE_URL` (example: `https://{RESOURCE}.openai.azure.com/openai/v1`)
- API type: `openai-responses`

Registered by `registerProvider()`:

```ts
const MODEL_ID = process.env.AOAI_MODEL_ID || "gpt-4.1";
const MODEL_NAME = process.env.AOAI_MODEL_NAME || `Azure ${MODEL_ID}`;
const BASE_URL = process.env.AOAI_BASE_URL || "https://{RESOURCE}.openai.azure.com/openai/v1";

pi.registerProvider("azure-openai", {
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
```

## Token handling

### Token cache format

```json
{
  "accessToken": "...",
  "expiresOn": "2026-03-04 12:05:41.000000",
  "expiresOnEpoch": 1772625941
}
```

### IMDS fetch

- URL: `http://169.254.169.254/metadata/identity/oauth2/token`
- API version: `2018-02-01`
- Resource: `https://cognitiveservices.azure.com/` (override with `AOAI_RESOURCE`)
- Header: `Metadata: true`

## Streaming and message conversion

### Normalising tool-call IDs

Uses `convertResponsesMessages(model, context, TOOL_CALL_PROVIDERS)` with:

```ts
const TOOL_CALL_PROVIDERS = new Set([
  "openai",
  "openai-codex",
  "opencode",
  "azure-openai",
]);
```

This ensures IDs conform to Responses API constraints (64-char limit for `call_id` / `id` parts).

### Text output forcing

The Azure Responses API can return only reasoning items unless a text output format is provided. The extension injects:

```ts
text: { format: { type: "text" }, verbosity: "medium" }
```

### Thinking levels

- Thinking level is passed via `options.reasoning` and clamped if necessary (`xhigh` → `high` unless model supports xhigh).
- If `reasoningEffort` / `reasoningSummary` are present, the extension sets:

```ts
reasoning: { effort: ..., summary: ... }
include: ["reasoning.encrypted_content"]
```

- If not explicitly set and the model is GPT‑5, it injects a developer instruction to suppress hidden reasoning.

## Environment variables

- `AOAI_BASE_URL` – Azure OpenAI Responses API base URL
- `AOAI_MODEL_ID` – model deployment ID
- `AOAI_MODEL_NAME` – model display name
- `AOAI_RESOURCE` – resource URI for IMDS token fetch (default `https://cognitiveservices.azure.com/`)
- `AOAI_TOKEN_CACHE_DIR` – cache directory (default `/workspace/.piclaw/cache`)
- `AOAI_TOKEN_CACHE_FILE` – cache file path (default `${AOAI_TOKEN_CACHE_DIR}/aoai-token.json`)
- `AOAI_TOKEN_SKEW_SECONDS` – refresh skew in seconds (default `300`)

## Files and paths

- **Extension source**: `~/.pi/agent/extensions/azure-openai-token.ts`
- **Token cache**: `${AOAI_TOKEN_CACHE_DIR}/aoai-token.json`

## Troubleshooting

- If model output is missing: verify the `text` format block is being injected.
- If tool call errors appear: ensure `TOOL_CALL_PROVIDERS` includes `azure-openai` and that `convertResponsesMessages` is used.
- If tokens fail: check IMDS connectivity (`curl -H Metadata:true http://169.254.169.254/...`).
- If model missing from `/model`: ensure the extension loads and that `openai` + `@mariozechner/pi-ai` are installed.
