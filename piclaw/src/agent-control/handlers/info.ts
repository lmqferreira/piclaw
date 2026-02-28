import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../../agent-control-types.js";
import { formatCompactNumber, formatCurrency } from "../../agent-control-helpers.js";

type StateCommand = Extract<AgentControlCommand, { type: "state" }>;
type StatsCommand = Extract<AgentControlCommand, { type: "stats" }>;
type ContextCommand = Extract<AgentControlCommand, { type: "context" }>;
type LastCommand = Extract<AgentControlCommand, { type: "last" }>;
type CommandsCommand = Extract<AgentControlCommand, { type: "commands" }>;

export async function handleState(session: AgentSession, _command: StateCommand): Promise<AgentControlResult> {
  const modelLabel = session.model ? `${session.model.provider}/${session.model.id}` : "none";
  const steeringCount = session.getSteeringMessages().length;
  const followUpCount = session.getFollowUpMessages().length;
  const lines = [
    `Model: ${modelLabel}`,
    `Thinking level: ${session.thinkingLevel}${session.supportsThinking() ? "" : " (thinking off)"}`,
    `Streaming: ${session.isStreaming ? "yes" : "no"}`,
    `Compacting: ${session.isCompacting ? "yes" : "no"}`,
    `Retrying: ${session.isRetrying ? "yes" : "no"}`,
    `Auto-compaction: ${session.autoCompactionEnabled ? "on" : "off"}`,
    `Auto-retry: ${session.autoRetryEnabled ? "on" : "off"}`,
    `Steering mode: ${session.steeringMode}`,
    `Follow-up mode: ${session.followUpMode}`,
    `Pending messages: ${session.pendingMessageCount} (steer ${steeringCount}, follow-up ${followUpCount})`,
    `Session id: ${session.sessionId}`,
    `Session name: ${session.sessionName || "none"}`,
    `Session file: ${session.sessionFile || "none"}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleStats(session: AgentSession, _command: StatsCommand): Promise<AgentControlResult> {
  const stats = session.getSessionStats();
  const tokens = stats.tokens;
  const lines = [
    "Session stats:",
    `• Messages: ${stats.userMessages} user, ${stats.assistantMessages} assistant, ${stats.toolResults} tool results (${stats.totalMessages} total)`,
    `• Tool calls: ${stats.toolCalls}`,
    `• Tokens: input ${formatCompactNumber(tokens.input)}, output ${formatCompactNumber(tokens.output)}, cache read ${formatCompactNumber(tokens.cacheRead)}, cache write ${formatCompactNumber(tokens.cacheWrite)}, total ${formatCompactNumber(tokens.total)}`,
    `• Cost: ${formatCurrency(stats.cost)}`,
  ];
  return { status: "success", message: lines.join("\n") };
}

export async function handleContext(session: AgentSession, _command: ContextCommand): Promise<AgentControlResult> {
  const usage = session.getContextUsage();
  if (!usage) {
    return { status: "error", message: "Context usage unavailable (no model configured)." };
  }
  if (usage.tokens === null) {
    return {
      status: "success",
      message: `Context usage: unknown. Context window: ${formatCompactNumber(usage.contextWindow)}.`,
    };
  }
  const percent = usage.percent ?? (usage.tokens / usage.contextWindow) * 100;
  return {
    status: "success",
    message: `Context usage: ${formatCompactNumber(usage.tokens)} / ${formatCompactNumber(usage.contextWindow)} (${percent.toFixed(1)}%).`,
  };
}

export async function handleLast(session: AgentSession, _command: LastCommand): Promise<AgentControlResult> {
  const last = session.getLastAssistantText();
  if (!last) {
    return { status: "error", message: "No assistant messages yet." };
  }
  return { status: "success", message: `Last assistant response:\n\n${last}` };
}

export async function handleCommands(session: AgentSession, _command: CommandsCommand): Promise<AgentControlResult> {
  const lines: string[] = ["Available commands:"];
  const addLine = (name: string, description?: string) => {
    const suffix = description ? ` - ${description}` : "";
    lines.push(`• ${name}${suffix}`);
  };

  addLine("/model", "Select model or list available models");
  addLine("/cycle-model", "Cycle to the next available model");
  addLine("/thinking", "Show or set thinking level");
  addLine("/cycle-thinking", "Cycle thinking level");
  addLine("/state", "Show current session state");
  addLine("/stats", "Show session token and cost stats");
  addLine("/context", "Show context window usage");
  addLine("/last", "Show last assistant response");
  addLine("/compact", "Manually compact the session");
  addLine("/auto-compact", "Toggle auto-compaction");
  addLine("/auto-retry", "Toggle auto-retry");
  addLine("/abort", "Abort the current response");
  addLine("/abort-retry", "Abort retry backoff");
  addLine("/abort-bash", "Abort running bash command");
  addLine("/shell", "Run a shell command and return output");
  addLine("/bash", "Run a shell command and add output to context");
  addLine("/queue", "Queue a follow-up message (one-at-a-time)");
  addLine("/queue-all", "Queue a follow-up message (batch all)");
  addLine("/steering-mode", "Set steering mode (all|one)");
  addLine("/followup-mode", "Set follow-up mode (all|one)");
  addLine("/session-name", "Set or show the session name");
  addLine("/new-session", "Start a new session");
  addLine("/switch-session", "Switch to a session file");
  addLine("/fork", "Fork from a previous message");
  addLine("/forks", "List forkable messages");
  addLine("/tree", "List the session tree (default tail 10) and navigate branches");
  addLine("/label", "Set or clear a label on a tree entry");
  addLine("/labels", "List labeled entries");
  addLine("/agent-name", "Set or show the agent display name");
  addLine("/agent-avatar", "Set or show the agent avatar URL");
  addLine("/export-html", "Export session to HTML");
  addLine("/restart", "Restart the agent and stop subprocesses");
  addLine("/commands", "List available commands");

  const extensionRunner = session.extensionRunner;
  if (extensionRunner) {
    const extCommands = extensionRunner.getRegisteredCommandsWithPaths();
    for (const entry of extCommands) {
      const name = entry.command?.name;
      if (!name) continue;
      const description = entry.command.description || `extension (${entry.extensionPath})`;
      addLine(`/${name}`, description);
    }
  }

  for (const template of session.promptTemplates) {
    const description = template.description || "prompt template";
    addLine(`/${template.name}`, description);
  }

  const skills = session.resourceLoader.getSkills().skills;
  for (const skill of skills) {
    const description = skill.description || "skill";
    addLine(`/skill:${skill.name}`, description);
  }

  return {
    status: "success",
    message: lines.join("\n"),
  };
}
