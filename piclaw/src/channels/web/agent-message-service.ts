/**
 * web/agent-message-service.ts – Stores agent responses as timeline posts.
 *
 * After an agent run completes, this service persists the response as a
 * message in the database and broadcasts it to SSE clients.
 *
 * Consumers: channels/web.ts calls this after agent runs complete.
 */

import type { WebChannel } from "../web.js";
import type { InteractionRow } from "../../db.js";
import { normalizeMediaIds } from "./posts-service.js";

export interface AgentMessagePayload {
  content?: string;
  thread_id?: number | null;
  media_ids?: number[];
  content_blocks?: unknown[];
  link_previews?: unknown[];
}

export async function parseAgentMessageRequest(req: Request): Promise<{
  payload?: AgentMessagePayload;
  error?: string;
}> {
  try {
    const data = (await req.json()) as AgentMessagePayload;
    return { payload: data };
  } catch {
    return { error: "Invalid JSON" };
  }
}

export function normalizeAgentMessagePayload(payload: AgentMessagePayload): {
  content?: string;
  threadId?: number | null;
  mediaIds: number[];
  contentBlocks?: unknown[];
  linkPreviews?: unknown[];
} {
  return {
    content: payload.content,
    threadId: payload.thread_id ?? null,
    mediaIds: normalizeMediaIds(payload.media_ids),
    contentBlocks: Array.isArray(payload.content_blocks) ? payload.content_blocks : undefined,
    linkPreviews: Array.isArray(payload.link_previews) ? payload.link_previews : undefined,
  };
}

export function storeAgentUserMessage(
  channel: WebChannel,
  chatJid: string,
  payload: {
    content: string;
    mediaIds: number[];
    contentBlocks?: unknown[];
    linkPreviews?: unknown[];
  }
): InteractionRow | null {
  return channel.storeMessage(chatJid, payload.content, false, payload.mediaIds, {
    contentBlocks: payload.contentBlocks,
    linkPreviews: payload.linkPreviews,
  });
}
