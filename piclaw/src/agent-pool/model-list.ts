import { Type, type Static } from "@sinclair/typebox";
import type {
  AgentToolResult,
  AgentToolUpdateCallback,
  ExtensionContext,
  ModelRegistry,
  ToolDefinition,
} from "@mariozechner/pi-coding-agent";
import type { Model } from "@mariozechner/pi-ai";

const ListModelsSchema = Type.Object({
  query: Type.Optional(
    Type.String({ description: "Filter by provider/modelId substring (case-insensitive)." })
  ),
  limit: Type.Optional(Type.Integer({ description: "Max results (1-200).", minimum: 1, maximum: 200 })),
  offset: Type.Optional(Type.Integer({ description: "Offset for pagination.", minimum: 0 })),
});

type ListModelsParams = Static<typeof ListModelsSchema>;

type ModelListEntry = {
  id: string;
  provider: string;
  label: string;
  reasoning?: boolean;
  context_window?: number;
};

type ListModelsDetails = {
  total: number;
  count: number;
  offset: number;
  limit: number;
  current_model?: string | null;
  models: ModelListEntry[];
};

function clampNumber(value: number | undefined, fallback: number, min: number, max: number): number {
  if (!Number.isFinite(value)) return fallback;
  const num = Number(value);
  if (Number.isNaN(num)) return fallback;
  return Math.min(Math.max(num, min), max);
}

function buildEntry(model: Model<any>): ModelListEntry {
  return {
    id: model.id,
    provider: model.provider,
    label: `${model.provider}/${model.id}`,
    reasoning: model.reasoning || undefined,
    context_window: model.contextWindow || undefined,
  };
}

export function createModelListTool(
  modelRegistry: ModelRegistry,
  getCurrentModel: () => Model<any> | undefined
): ToolDefinition<typeof ListModelsSchema, ListModelsDetails> {
  return {
    name: "list_models",
    label: "list_models",
    description: "List available models in the registry.",
    parameters: ListModelsSchema,
    execute: async (
      _toolCallId: string,
      params: ListModelsParams,
      _signal?: AbortSignal,
      _onUpdate?: AgentToolUpdateCallback<ListModelsDetails>,
      _ctx?: ExtensionContext
    ): Promise<AgentToolResult<ListModelsDetails>> => {
      modelRegistry.refresh();
      const available = modelRegistry.getAvailable();
      const seen = new Map<string, Model<any>>();
      for (const model of available) {
        const key = `${model.provider}/${model.id}`;
        if (!seen.has(key)) {
          seen.set(key, model);
        }
      }

      const query = params.query?.trim().toLowerCase();
      let entries = Array.from(seen.values()).map(buildEntry);
      if (query) {
        entries = entries.filter((entry) => entry.label.toLowerCase().includes(query));
      }
      entries.sort((a, b) => a.label.localeCompare(b.label));

      const limit = clampNumber(params.limit, 100, 1, 200);
      const offset = clampNumber(params.offset, 0, 0, Math.max(entries.length, 0));
      const page = entries.slice(offset, offset + limit);
      const current = getCurrentModel();
      const currentLabel = current ? `${current.provider}/${current.id}` : null;

      const details: ListModelsDetails = {
        total: entries.length,
        count: page.length,
        offset,
        limit,
        current_model: currentLabel,
        models: page,
      };

      if (page.length === 0) {
        const message = query
          ? `No models found matching "${params.query}".`
          : "No available models found.";
        return {
          content: [{ type: "text", text: message }],
          details,
        };
      }

      const header = query
        ? `Available models (filtered): ${page.length} of ${entries.length}.`
        : `Available models: ${page.length} of ${entries.length}.`;
      const lines = page.map((entry) => {
        const suffix = entry.label === currentLabel ? " (current)" : "";
        return `• ${entry.label}${suffix}`;
      });

      return {
        content: [{ type: "text", text: `${header}\n${lines.join("\n")}` }],
        details,
      };
    },
  };
}
