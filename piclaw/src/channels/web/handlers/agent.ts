import type { AgentSessionEvent } from "@mariozechner/pi-coding-agent";
import type { WebChannel } from "../../web.js";
import { ASSISTANT_AVATAR, ASSISTANT_NAME, TRIGGER_PATTERN } from "../../../config.js";
import { parseControlCommand } from "../../../agent-control.js";
import { getMessagesSince } from "../../../db.js";
import { detectChannel, formatMessages, formatOutbound } from "../../../router.js";

export async function handleAgentMessage(
  channel: WebChannel,
  req: Request,
  pathname: string,
  chatJid: string,
  defaultAgentId: string
): Promise<Response> {
  const agentId = pathname.split("/")[2] || defaultAgentId;
  let data: { content?: string; thread_id?: number | null; media_ids?: number[] };
  try {
    data = await req.json();
  } catch {
    return channel.json({ error: "Invalid JSON" }, 400);
  }

  if (!data.content) return channel.json({ error: "Missing 'content' field" }, 400);

  const mediaIds = Array.isArray(data.media_ids)
    ? data.media_ids.map((id) => Number(id)).filter((id) => Number.isFinite(id))
    : [];

  const interaction = channel.storeMessage(chatJid, data.content, false, mediaIds);

  if (!interaction) return channel.json({ error: "Failed to store message" }, 500);

  channel.broadcastEvent("new_post", interaction);

  const markCommandHandled = () => {
    if (interaction?.timestamp) {
      channel.lastAgentTimestamp[chatJid] = interaction.timestamp;
      channel.saveState();
    }
  };

  const command = parseControlCommand(data.content, TRIGGER_PATTERN);
  if (command) {
    const result = await channel.agentPool.applyControlCommand(chatJid, command);
    const formatted = formatOutbound(result.message, "web");
    if (formatted) await channel.sendMessage(chatJid, formatted);
    markCommandHandled();
    return channel.json(
      { user_message: interaction, thread_id: data.thread_id ?? interaction.id, command: result },
      201
    );
  }

  // If message looks like an extension slash command (starts with '/'), execute it directly
  const trimmed = (data.content || "").trim();
  if (trimmed.startsWith("/")) {
    const cmdResult = await channel.agentPool.applySlashCommand(chatJid, trimmed);
    try {
      const formatted = formatOutbound(cmdResult.message || "", "web");
      if (formatted) await channel.sendMessage(chatJid, formatted);
    } catch (e) {
      console.error('[web] Failed to send slash command response:', e);
    }
    markCommandHandled();
    return channel.json(
      { user_message: interaction, thread_id: data.thread_id ?? interaction.id, command: cmdResult },
      201
    );
  }

  const steerResult = await channel.agentPool.queueStreamingMessage(chatJid, data.content, "steer");
  if (steerResult.queued) {
    markCommandHandled();
    return channel.json(
      {
        user_message: interaction,
        thread_id: data.thread_id ?? interaction.id,
        queued: "steer",
      },
      201
    );
  }

  if (steerResult.error) {
    console.warn(`[web] Failed to queue steering message: ${steerResult.error}`);
  }

  channel.queue.enqueue(async () => {
    await processChat(channel, chatJid, agentId);
  }, `chat:${chatJid}`);

  return channel.json({ user_message: interaction, thread_id: data.thread_id ?? interaction.id }, 201);
}

export async function processChat(channel: WebChannel, chatJid: string, agentId: string): Promise<void> {
  const since = channel.lastAgentTimestamp[chatJid] || "";
  const messages = getMessagesSince(chatJid, since, ASSISTANT_NAME);
  if (messages.length === 0) return;

  const channelName = detectChannel(chatJid);
  const prompt = formatMessages(messages, channelName);
  const prevCursor = channel.lastAgentTimestamp[chatJid] || "";
  channel.lastAgentTimestamp[chatJid] = messages[messages.length - 1].timestamp;
  channel.saveState();

  const threadId = messages[messages.length - 1].timestamp;
  let thoughtBuffer = "";
  let draftBuffer = "";
  const toolTitles = new Map<string, string>();

  const THOUGHT_PREVIEW_LINES = 8;
  const DRAFT_PREVIEW_LINES = 8;
  const PREVIEW_MAX_CHARS_PER_LINE = 160;

  const countSoftLines = (line: string, maxChars: number): number => {
    if (!line) return 1;
    return Math.max(1, Math.ceil(line.length / maxChars));
  };

  const buildPreview = (text: string, maxLines: number): { preview: string; totalLines: number } => {
    const value = (text || "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    if (!value) return { preview: "", totalLines: 0 };
    const rawLines = value.split("\n");
    const totalLines = rawLines.reduce((acc, line) => acc + countSoftLines(line, PREVIEW_MAX_CHARS_PER_LINE), 0);
    const previewLines = rawLines.slice(0, maxLines);
    return { preview: previewLines.join("\n"), totalLines };
  };

  const extractToolArgs = (args: unknown): Record<string, unknown> | null => {
    if (!args) return null;
    if (typeof args === "string") {
      try {
        const parsed = JSON.parse(args);
        if (parsed && typeof parsed === "object") return parsed as Record<string, unknown>;
      } catch {
        return null;
      }
    }
    if (typeof args === "object") {
      const record = args as Record<string, unknown>;
      const nested =
        (record.arguments as Record<string, unknown> | undefined) ||
        (record.input as Record<string, unknown> | undefined) ||
        (record.params as Record<string, unknown> | undefined) ||
        (record.parameters as Record<string, unknown> | undefined) ||
        (record.args as Record<string, unknown> | undefined) ||
        (record.payload as Record<string, unknown> | undefined);
      return nested ?? record;
    }
    return null;
  };

  const formatToolTitle = (toolName: string, args: unknown): string => {
    const record = extractToolArgs(args);
    if (!record) return toolName;
    let detail: string | null = null;

    const command = record.command;
    if (typeof command === "string") detail = command;

    if (!detail && Array.isArray(record.commands)) {
      detail = record.commands.filter((item) => typeof item === "string").join(" && ");
    }

    const path = record.path || record.filePath || record.target;
    if (!detail && typeof path === "string") detail = path;

    if (!detail && Array.isArray(record.paths)) {
      detail = record.paths.filter((item) => typeof item === "string").join(", ");
    }

    const filename = record.fileName || record.filename || record.file;
    if (!detail && typeof filename === "string") detail = filename;

    const url = record.url;
    if (!detail && typeof url === "string") detail = url;

    const query = record.query;
    if (!detail && typeof query === "string") detail = query;

    if (!detail) return toolName;

    const normalized = detail.replace(/\s+/g, " ").trim();
    const maxLen = 120;
    const clipped = normalized.length > maxLen ? `${normalized.slice(0, maxLen)}…` : normalized;
    return `${toolName}: ${clipped}`;
  };

  const rememberToolTitle = (toolCallId: string, toolName: string, args: unknown): string => {
    const title = formatToolTitle(toolName, args);
    toolTitles.set(toolCallId, title);
    return title;
  };

  const lookupToolTitle = (toolCallId: string, toolName: string, args?: unknown): string => {
    return toolTitles.get(toolCallId) ?? formatToolTitle(toolName, args);
  };

  const turnId = `turn-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const withAgentProfile = (payload: Record<string, unknown>) => ({
    ...payload,
    agent_name: ASSISTANT_NAME,
    agent_avatar: ASSISTANT_AVATAR || null,
  });

  channel.broadcastEvent("agent_status", withAgentProfile({
    thread_id: threadId,
    agent_id: agentId,
    type: "thinking",
    title: "Thinking...",
    turn_id: turnId,
  }));

  const output = await channel.agentPool.runAgent(prompt, chatJid, {
    onEvent: (event: AgentSessionEvent) => {
      if (event.type === "message_update") {
        const messageEvent = event.assistantMessageEvent;
        if (messageEvent.type === "thinking_start") {
          thoughtBuffer = "";
        }
        if (messageEvent.type === "thinking_delta") {
          thoughtBuffer += messageEvent.delta;
          const { preview, totalLines } = buildPreview(thoughtBuffer, THOUGHT_PREVIEW_LINES);
          channel.broadcastEvent("agent_thought", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            text: preview,
            total_lines: totalLines,
            turn_id: turnId,
          }));
        }
        if (messageEvent.type === "thinking_end") {
          thoughtBuffer = messageEvent.content || thoughtBuffer;
          const { preview, totalLines } = buildPreview(thoughtBuffer, THOUGHT_PREVIEW_LINES);
          channel.broadcastEvent("agent_thought", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            text: preview,
            total_lines: totalLines,
            turn_id: turnId,
          }));
        }
        if (messageEvent.type === "toolcall_end") {
          const title = rememberToolTitle(
            messageEvent.toolCall.id,
            messageEvent.toolCall.name,
            messageEvent.toolCall.arguments
          );
          channel.broadcastEvent("agent_status", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            type: "tool_call",
            title,
            turn_id: turnId,
          }));
        }
        if (messageEvent.type === "text_start") {
          draftBuffer = "";
          channel.broadcastEvent("agent_draft", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            text: "",
            total_lines: 0,
            kind: "draft",
            mode: "replace",
            turn_id: turnId,
          }));
          channel.broadcastEvent("agent_draft_delta", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            delta: "",
            reset: true,
            turn_id: turnId,
          }));
        }
        if (messageEvent.type === "text_delta") {
          draftBuffer += messageEvent.delta;
          const { preview, totalLines } = buildPreview(draftBuffer, DRAFT_PREVIEW_LINES);
          channel.broadcastEvent("agent_draft", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            text: preview,
            total_lines: totalLines,
            kind: "draft",
            mode: "replace",
            turn_id: turnId,
          }));
          channel.broadcastEvent("agent_draft_delta", withAgentProfile({
            thread_id: threadId,
            agent_id: agentId,
            delta: messageEvent.delta,
            turn_id: turnId,
          }));
        }
      }

      if (event.type === "tool_execution_start") {
        const title = rememberToolTitle(event.toolCallId, event.toolName, event.args);
        channel.broadcastEvent("agent_status", withAgentProfile({
          thread_id: threadId,
          agent_id: agentId,
          type: "tool_call",
          title,
          turn_id: turnId,
        }));
      }

      if (event.type === "tool_execution_update") {
        const title = lookupToolTitle(event.toolCallId, event.toolName, event.args);
        channel.broadcastEvent("agent_status", withAgentProfile({
          thread_id: threadId,
          agent_id: agentId,
          type: "tool_status",
          title,
          status: "Working...",
          turn_id: turnId,
        }));
      }

      if (event.type === "tool_execution_end") {
        const title = lookupToolTitle(event.toolCallId, event.toolName);
        toolTitles.delete(event.toolCallId);
        channel.broadcastEvent("agent_status", withAgentProfile({
          thread_id: threadId,
          agent_id: agentId,
          type: "tool_status",
          title,
          status: event.isError ? "Failed" : "Done",
          turn_id: turnId,
        }));
      }
    },
  });

  if (output.status === "error") {
    channel.lastAgentTimestamp[chatJid] = prevCursor;
    channel.saveState();
    channel.broadcastEvent("agent_status", withAgentProfile({
      thread_id: threadId,
      agent_id: agentId,
      type: "error",
      title: output.error || "Agent error",
      turn_id: turnId,
    }));
    return;
  }

  if (output.result) {
    const text = formatOutbound(output.result, channelName);
    if (text) {
      const interaction = channel.storeMessage(chatJid, text, true, []);
      if (interaction) {
        channel.broadcastEvent("agent_response", {
          ...interaction,
          agent_name: ASSISTANT_NAME,
          agent_avatar: ASSISTANT_AVATAR || null,
        });
      }
    }
  }

  channel.broadcastEvent("agent_status", withAgentProfile({
    thread_id: threadId,
    agent_id: agentId,
    type: "done",
    turn_id: turnId,
  }));
}
