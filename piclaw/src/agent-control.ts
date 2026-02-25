import type { ThinkingLevel } from "@mariozechner/pi-agent-core";
import type { Model } from "@mariozechner/pi-ai";
import type { AgentSession, ModelRegistry } from "@mariozechner/pi-coding-agent";

export type AgentControlCommand =
  | {
      type: "model";
      provider?: string;
      modelId?: string;
      raw: string;
    }
  | {
      type: "thinking";
      level?: string;
      raw: string;
    };

export interface AgentControlResult {
  status: "success" | "error";
  message: string;
}

const THINKING_LEVELS: ThinkingLevel[] = ["off", "minimal", "low", "medium", "high", "xhigh"];

function stripTrigger(text: string, triggerPattern?: RegExp): string {
  if (!triggerPattern) return text.trim();
  const flags = triggerPattern.flags.includes("g") ? triggerPattern.flags : `${triggerPattern.flags}g`;
  const pattern = new RegExp(triggerPattern.source, flags);
  return text.replace(pattern, " ").trim();
}

export function parseControlCommand(text: string, triggerPattern?: RegExp): AgentControlCommand | null {
  if (!text) return null;
  const cleaned = stripTrigger(text, triggerPattern);
  if (!cleaned.startsWith("/")) return null;

  const [command, ...rest] = cleaned.split(/\s+/);
  const args = rest.join(" ").trim();

  if (command.toLowerCase() === "/model") {
    const tokens = args.split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
      return { type: "model", raw: cleaned };
    }

    const [first, ...remaining] = tokens;
    if (first && first.includes("/")) {
      const [provider, ...modelParts] = first.split("/");
      const modelId = modelParts.join("/");
      return {
        type: "model",
        provider: provider || undefined,
        modelId: modelId || undefined,
        raw: cleaned,
      };
    }

    if (remaining.length > 0) {
      return {
        type: "model",
        provider: first,
        modelId: remaining.join(" "),
        raw: cleaned,
      };
    }

    return {
      type: "model",
      modelId: first,
      raw: cleaned,
    };
  }

  if (command.toLowerCase() === "/thinking") {
    const level = args.split(/\s+/).filter(Boolean)[0];
    return {
      type: "thinking",
      level: level || undefined,
      raw: cleaned,
    };
  }

  return null;
}

function normalizeModelMatch(models: Model<any>[], provider: string, modelId: string): Model<any> | undefined {
  const providerLower = provider.toLowerCase();
  const modelLower = modelId.toLowerCase();
  return models.find((model) => model.provider.toLowerCase() === providerLower && model.id.toLowerCase() === modelLower);
}

export async function applyControlCommand(
  session: AgentSession,
  modelRegistry: ModelRegistry,
  command: AgentControlCommand
): Promise<AgentControlResult> {
  if (command.type === "model") {
    modelRegistry.refresh();

    if (!command.modelId) {
      const available = modelRegistry.getAvailable();
      if (available.length === 0) {
        return {
          status: "error",
          message: "No models available. Configure API keys in your Pi settings, then try /model again.",
        };
      }

      const modelNames = Array.from(
        new Set(available.map((model) => `${model.provider}/${model.id}`))
      ).sort((a, b) => a.localeCompare(b));

      return {
        status: "success",
        message: [
          "Available models:",
          ...modelNames.map((name) => `• ${name}`),
          "Use /model <provider>/<modelId> to switch.",
        ].join("\n"),
      };
    }

    const models = modelRegistry.getAll();
    let selected: Model<any> | undefined;

    if (command.provider) {
      selected = normalizeModelMatch(models, command.provider, command.modelId);
      if (!selected) {
        return {
          status: "error",
          message: `Model not found: ${command.provider}/${command.modelId}.`,
        };
      }
    } else {
      const matches = models.filter((model) => model.id.toLowerCase() === command.modelId!.toLowerCase());
      if (matches.length === 0) {
        return {
          status: "error",
          message: `Model not found: ${command.modelId}.`,
        };
      }
      if (matches.length > 1) {
        const providers = matches.map((model) => `${model.provider}/${model.id}`).join(", ");
        return {
          status: "error",
          message: `Model "${command.modelId}" matches multiple providers: ${providers}. Use /model <provider>/<modelId>.`,
        };
      }
      selected = matches[0];
    }

    try {
      await session.setModel(selected);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      return { status: "error", message };
    }

    const thinkingNote = session.supportsThinking()
      ? ` Thinking level: ${session.thinkingLevel}.`
      : " Thinking is off for this model.";

    return {
      status: "success",
      message: `Model set to ${selected.provider}/${selected.id}.${thinkingNote}`,
    };
  }

  if (!session.model) {
    return {
      status: "error",
      message: "No model selected yet. Use /model to pick one first.",
    };
  }

  const requestedRaw = command.level?.toLowerCase() || "";
  if (!requestedRaw) {
    return {
      status: "error",
      message: `Usage: /thinking <${THINKING_LEVELS.join("|")}>.`,
    };
  }

  if (!THINKING_LEVELS.includes(requestedRaw as ThinkingLevel)) {
    const available = session.getAvailableThinkingLevels().join(", ");
    return {
      status: "error",
      message: `Unknown thinking level: ${command.level}. Available: ${available}.`,
    };
  }

  session.setThinkingLevel(requestedRaw as ThinkingLevel);
  const applied = session.thinkingLevel;

  if (!session.supportsThinking()) {
    return {
      status: requestedRaw === "off" ? "success" : "error",
      message: "Current model does not support thinking levels. Thinking is off.",
    };
  }

  const note = applied !== requestedRaw ? ` (requested ${requestedRaw})` : "";
  return {
    status: "success",
    message: `Thinking level set to ${applied}${note}.`,
  };
}
