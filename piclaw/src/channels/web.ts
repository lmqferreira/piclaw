import { extname, resolve } from "path";

import { AgentQueue } from "../queue.js";
import type { AgentPool } from "../agent-pool.js";
import { initTheme } from "@mariozechner/pi-coding-agent";
import type { AgentSession, AgentSessionEvent, ExtensionUIContext, Theme } from "@mariozechner/pi-coding-agent";
import { ASSISTANT_AVATAR, ASSISTANT_NAME, WEB_HOST, WEB_IDLE_TIMEOUT, WEB_PORT } from "../config.js";
import { handleMedia, handleMediaInfo, handleMediaUpload } from "./web/handlers/media.js";
import {
  attachMediaToMessage,
  clampWebContent,
  deleteMessageByRowId,
  getMessageByRowId,
  getMessagesByHashtag,
  getRouterState,
  getTimeline,
  hasOlderMessages,
  searchMessages,
  setRouterState,
  storeChatMetadata,
  storeMessage,
} from "../db.js";
import type { InteractionRow } from "../db.js";
import type { NewMessage } from "../types.js";

const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";
const STATIC_DIR = resolve(import.meta.dir, "..", "..", "web", "static");
const DOCS_DIR = resolve(import.meta.dir, "..", "..", "docs");

const encoder = new TextEncoder();

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
};

const createFallbackTheme = (): Theme => {
  const passthrough = (text: string) => text;
  const identity = () => passthrough;
  return {
    name: "web",
    sourcePath: undefined,
    fg: (_color: string, text: string) => text,
    bg: (_color: string, text: string) => text,
    bold: passthrough,
    italic: passthrough,
    underline: passthrough,
    inverse: passthrough,
    strikethrough: passthrough,
    getFgAnsi: (_color: string) => "",
    getBgAnsi: (_color: string) => "",
    getColorMode: () => "truecolor",
    getThinkingBorderColor: () => identity(),
    getBashModeBorderColor: () => identity(),
  } as unknown as Theme;
};

export interface WebChannelOpts {
  queue: AgentQueue;
  agentPool: AgentPool;
}

interface PendingClient {
  controller: ReadableStreamDefaultController<Uint8Array>;
  heartbeat: Timer;
}

export class WebChannel {
  queue: AgentQueue;
  agentPool: AgentPool;
  server: ReturnType<typeof Bun.serve> | null = null;
  lastAgentTimestamp: Record<string, string> = {};
  clients: Set<PendingClient> = new Set();
  pendingUiRequests = new Map<string, { resolve: (value: any) => void; reject: (err: Error) => void; timeoutId: ReturnType<typeof setTimeout>; kind: string }>();
  uiRequestCounter = 0;
  editorTextByChat = new Map<string, string>();
  fallbackTheme = createFallbackTheme();

  constructor(opts: WebChannelOpts) {
    this.queue = opts.queue;
    this.agentPool = opts.agentPool;
    if (typeof (this.agentPool as any).setSessionBinder === "function") {
      (this.agentPool as any).setSessionBinder((session: AgentSession, chatJid: string) =>
        this.bindSessionUiContext(session, chatJid)
      );
    }
  }

  async start(): Promise<void> {
    this.loadState();
    try { initTheme(); } catch {}
    this.server = Bun.serve({
      hostname: WEB_HOST,
      port: WEB_PORT,
      idleTimeout: WEB_IDLE_TIMEOUT,
      fetch: (req) => this.handleRequest(req),
    });
    console.log(`[web] UI listening on http://${WEB_HOST}:${WEB_PORT}`);
  }

  async stop(): Promise<void> {
    for (const client of this.clients) {
      clearInterval(client.heartbeat);
      try { client.controller.close(); } catch {}
    }
    this.clients.clear();
    for (const pending of this.pendingUiRequests.values()) {
      clearTimeout(pending.timeoutId);
      try { pending.reject(new Error("Web channel stopped")); } catch {}
    }
    this.pendingUiRequests.clear();
    this.server?.stop(true);
    this.server = null;
  }

  async sendMessage(chatJid: string, text: string): Promise<void> {
    const interaction = this.storeMessage(chatJid, text, true, []);
    if (interaction) {
      this.broadcastEvent("agent_response", {
        ...interaction,
        agent_name: ASSISTANT_NAME,
        agent_avatar: ASSISTANT_AVATAR || null,
      });
    }
  }

  loadState(): void {
    const data = getRouterState(STATE_KEY);
    try {
      this.lastAgentTimestamp = data ? JSON.parse(data) : {};
    } catch {
      this.lastAgentTimestamp = {};
    }
  }

  saveState(): void {
    setRouterState(STATE_KEY, JSON.stringify(this.lastAgentTimestamp));
  }

  async handleRequest(req: Request): Promise<Response> {
    const { handleWebRequest } = await import("./web/request-router.js");
    return handleWebRequest(this, req);
  }

  handleAgents(): Response {
    return this.json({
      agents: [
        {
          id: DEFAULT_AGENT_ID,
          name: ASSISTANT_NAME,
          description: `${ASSISTANT_NAME} agent`,
          status: "running",
          actions: [],
          avatar_url: ASSISTANT_AVATAR || null,
        },
      ],
    });
  }

  handleTimeline(limit: number, before?: number): Response {
    const posts = getTimeline(DEFAULT_CHAT_JID, limit, before ?? undefined);
    const oldestId = posts.length > 0 ? posts[0].id : null;
    const hasMore = oldestId !== null && posts.length === limit && hasOlderMessages(DEFAULT_CHAT_JID, oldestId);
    return this.json({ posts, limit, has_more: hasMore });
  }

  handleHashtag(tag: string, limit: number, offset: number): Response {
    const posts = getMessagesByHashtag(DEFAULT_CHAT_JID, tag, limit, offset);
    return this.json({ hashtag: tag, posts, limit, offset });
  }

  handleSearch(query: string, limit: number, offset: number): Response {
    if (!query) return this.json({ error: "Missing 'q' parameter" }, 400);
    const results = searchMessages(DEFAULT_CHAT_JID, query, limit, offset);
    return this.json({ query, results, limit, offset });
  }

  handleThread(id: number | null): Response {
    if (!id) return this.json({ error: "Thread not found" }, 404);
    const thread = getMessageByRowId(DEFAULT_CHAT_JID, id);
    if (!thread) return this.json({ error: "Thread not found" }, 404);
    return this.json({ thread: [thread] });
  }

  handleDeletePost(id: number | null): Response {
    if (!id) return this.json({ error: "Post not found" }, 404);
    const deleted = deleteMessageByRowId(DEFAULT_CHAT_JID, id);
    if (deleted) {
      this.broadcastEvent("interaction_deleted", { ids: [id] });
    }
    return this.json({ deleted: deleted ? 1 : 0, ids: deleted ? [id] : [] });
  }

  handleSse(): Response {
    let clientRef: PendingClient | null = null;

    const stream = new ReadableStream<Uint8Array>({
      start: (controller) => {
        const heartbeat = setInterval(() => {
          try {
            controller.enqueue(encoder.encode(": heartbeat\n\n"));
          } catch {
            clearInterval(heartbeat);
            if (clientRef) this.clients.delete(clientRef);
          }
        }, 30000);
        clientRef = { controller, heartbeat };
        this.clients.add(clientRef);
        controller.enqueue(encoder.encode("event: connected\ndata: {}\n\n"));
      },
      cancel: () => {
        if (clientRef) {
          clearInterval(clientRef.heartbeat);
          this.clients.delete(clientRef);
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  }

  broadcastEvent(eventType: string, data: unknown): void {
    const payload = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
    const bytes = encoder.encode(payload);
    for (const client of this.clients) {
      try {
        client.controller.enqueue(bytes);
      } catch {
        clearInterval(client.heartbeat);
        this.clients.delete(client);
      }
    }
  }

  async bindSessionUiContext(session: AgentSession, chatJid: string): Promise<void> {
    if (!chatJid.startsWith("web:")) return;

    const waitForIdle = async (): Promise<void> => {
      if (!session.isStreaming) return;
      await new Promise<void>((resolve) => {
        const unsub = session.subscribe((event) => {
          if (event.type === "agent_end") {
            unsub();
            resolve();
          }
        });
      });
    };

    const uiContext = this.createUiContext(chatJid);
    await session.bindExtensions({
      uiContext,
      commandContextActions: {
        waitForIdle,
        newSession: async (options) => {
          const ok = await session.newSession(options);
          return { cancelled: !ok };
        },
        fork: async (entryId) => {
          const result = await session.fork(entryId);
          return { cancelled: result.cancelled };
        },
        navigateTree: async (targetId, options) => {
          const result = await session.navigateTree(targetId, options);
          return { cancelled: result.cancelled };
        },
        switchSession: async (sessionPath) => {
          const ok = await session.switchSession(sessionPath);
          return { cancelled: !ok };
        },
        reload: () => session.reload(),
      },
      onError: (error) => {
        console.error("[web] Extension error:", error);
        this.broadcastEvent("extension_ui_error", error);
      },
    });
  }

  createUiContext(chatJid: string): ExtensionUIContext {
    const fallbackTheme = this.fallbackTheme;
    const requestUiResponse = async (
      kind: string,
      payload: Record<string, unknown>,
      timeoutMs = 120000
    ): Promise<unknown> => {
      const requestId = `ui-${Date.now()}-${++this.uiRequestCounter}`;
      return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          this.pendingUiRequests.delete(requestId);
          this.broadcastEvent("extension_ui_timeout", { request_id: requestId, kind, chat_jid: chatJid });
          resolve(undefined);
        }, timeoutMs);

        this.pendingUiRequests.set(requestId, { resolve, reject, timeoutId, kind });
        this.broadcastEvent("extension_ui_request", {
          request_id: requestId,
          kind,
          chat_jid: chatJid,
          ...payload,
        });
      });
    };

    return {
      select: async (title, options, opts) => {
        const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
        const result = await requestUiResponse("select", { title, options, opts }, timeoutMs);
        return typeof result === "string" ? result : undefined;
      },
      confirm: async (title, message, opts) => {
        const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
        const result = await requestUiResponse("confirm", { title, message, opts }, timeoutMs);
        return Boolean(result);
      },
      input: async (title, placeholder, opts) => {
        const timeoutMs = typeof opts?.timeout === "number" ? opts.timeout : 120000;
        const result = await requestUiResponse("input", { title, placeholder, opts }, timeoutMs);
        return typeof result === "string" ? result : undefined;
      },
      notify: (message, type) => {
        this.broadcastEvent("extension_ui_notify", { chat_jid: chatJid, message, type });
      },
      onTerminalInput: () => () => {},
      setStatus: (key, text) => {
        this.broadcastEvent("extension_ui_status", { chat_jid: chatJid, key, text });
      },
      setWorkingMessage: (message) => {
        this.broadcastEvent("extension_ui_working", { chat_jid: chatJid, message });
      },
      setWidget: (key, content, options) => {
        if (Array.isArray(content)) {
          this.broadcastEvent("extension_ui_widget", { chat_jid: chatJid, key, content, options });
        }
      },
      setFooter: () => {},
      setHeader: () => {},
      setTitle: (title) => {
        this.broadcastEvent("extension_ui_title", { chat_jid: chatJid, title });
      },
      custom: async (_factory, _options) => {
        const result = await requestUiResponse("custom", { title: "Custom UI" });
        return result as any;
      },
      pasteToEditor: (text) => {
        const current = this.editorTextByChat.get(chatJid) || "";
        const updated = current + text;
        this.editorTextByChat.set(chatJid, updated);
        this.broadcastEvent("extension_ui_editor_text", { chat_jid: chatJid, text: updated });
      },
      setEditorText: (text) => {
        this.editorTextByChat.set(chatJid, text);
        this.broadcastEvent("extension_ui_editor_text", { chat_jid: chatJid, text });
      },
      getEditorText: () => this.editorTextByChat.get(chatJid) || "",
      editor: async (title, prefill) => {
        const result = await requestUiResponse("editor", { title, prefill });
        return typeof result === "string" ? result : undefined;
      },
      setEditorComponent: () => {},
      get theme() {
        return fallbackTheme;
      },
      getAllThemes: () => [],
      getTheme: (_name) => undefined,
      setTheme: (_nextTheme) => ({ success: false, error: "UI theme switching not available" }),
      getToolsExpanded: () => false,
      setToolsExpanded: () => {},
    };
  }

  async handlePost(req: Request, isReply: boolean): Promise<Response> {
    const { handlePost } = await import("./web/handlers/posts.js");
    return handlePost(this, req, isReply, DEFAULT_CHAT_JID);
  }

  async handleAgentRespond(req: Request): Promise<Response> {
    let data: { request_id?: string; outcome?: unknown };
    try {
      data = await req.json();
    } catch {
      return this.json({ error: "Invalid JSON" }, 400);
    }

    if (!data.request_id) return this.json({ error: "Missing request_id" }, 400);

    const pending = this.pendingUiRequests.get(data.request_id);
    if (pending) {
      clearTimeout(pending.timeoutId);
      this.pendingUiRequests.delete(data.request_id);
      pending.resolve(data.outcome);
      return this.json({ status: "ok" });
    }

    return this.json({ status: "unknown_request" });
  }

  async handleAgentMessage(req: Request, pathname: string): Promise<Response> {
    const { handleAgentMessage } = await import("./web/handlers/agent.js");
    return handleAgentMessage(this, req, pathname, DEFAULT_CHAT_JID, DEFAULT_AGENT_ID);
  }

  async processChat(chatJid: string, agentId: string): Promise<void> {
    const { processChat } = await import("./web/handlers/agent.js");
    return processChat(this, chatJid, agentId);
  }

  storeMessage(chatJid: string, content: string, isBot: boolean, mediaIds: number[]): InteractionRow | null {
    const timestamp = new Date().toISOString();
    const msg: NewMessage = {
      id: `web-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      chat_jid: chatJid,
      sender: isBot ? "web-agent" : "web-user",
      sender_name: isBot ? ASSISTANT_NAME : "You",
      content,
      timestamp,
      is_from_me: false,
      is_bot_message: isBot,
    };

    const rowId = storeMessage(msg);
    if (rowId <= 0) return null;

    if (mediaIds.length > 0) {
      attachMediaToMessage(rowId, mediaIds);
    }

    storeChatMetadata(chatJid, timestamp, "Web");

    const interaction = getMessageByRowId(chatJid, rowId);
    if (interaction) {
      interaction.data.agent_id = DEFAULT_AGENT_ID;
      return interaction;
    }

    const { content: safeContent, meta } = clampWebContent(content);
    return {
      id: rowId,
      timestamp,
      data: {
        type: isBot ? "agent_response" : "user_message",
        content: safeContent,
        content_meta: meta,
        agent_id: DEFAULT_AGENT_ID,
        media_ids: mediaIds,
      },
    };
  }

  async handleMediaUpload(req: Request): Promise<Response> {
    return handleMediaUpload(this, req);
  }

  handleMedia(id: number, thumbnail: boolean): Response {
    return handleMedia(this, id, thumbnail);
  }

  handleMediaInfo(id: number): Response {
    return handleMediaInfo(this, id);
  }

  async serveStatic(relPath: string): Promise<Response> {
    const filePath = resolve(STATIC_DIR, relPath);
    if (!filePath.startsWith(STATIC_DIR)) return this.json({ error: "Not found" }, 404);

    const file = Bun.file(filePath);
    if (!(await file.exists())) return this.json({ error: "Not found" }, 404);

    const contentType = MIME_TYPES[extname(filePath)] || "application/octet-stream";
    return new Response(file, {
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  async serveDocsStatic(relPath: string): Promise<Response> {
    const filePath = resolve(DOCS_DIR, relPath);
    if (!filePath.startsWith(DOCS_DIR)) return this.json({ error: "Not found" }, 404);

    const file = Bun.file(filePath);
    if (!(await file.exists())) return this.json({ error: "Not found" }, 404);

    const contentType = MIME_TYPES[extname(filePath)] || "application/octet-stream";
    return new Response(file, {
      headers: {
        "Content-Type": contentType,
      },
    });
  }

  json(data: unknown, status = 200): Response {
    return new Response(JSON.stringify(data), {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  clampInt(value: string | null, fallback: number, min: number, max: number): number {
    const parsed = value ? parseInt(value, 10) : fallback;
    if (Number.isNaN(parsed)) return fallback;
    return Math.min(Math.max(parsed, min), max);
  }

  parseOptionalInt(value: string | null): number | null {
    if (!value) return null;
    const parsed = parseInt(value, 10);
    return Number.isNaN(parsed) ? null : parsed;
  }
}
