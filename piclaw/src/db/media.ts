/**
 * db/media.ts – CRUD operations for the `media` and `message_media` tables.
 *
 * Manages binary file storage (images, documents, attachments) uploaded via
 * the web channel. Each media record can be linked to one or more messages
 * through the `message_media` join table.
 *
 * Consumers:
 *   - db/messages.ts uses attach/get/delete helpers when storing or removing
 *     messages that carry media attachments.
 *   - channels/web/media-service.ts calls createMedia() when handling uploads.
 *   - channels/web/handlers/media.ts calls getMediaById() to serve files.
 *   - agent-pool/attachments.ts uses getMediaInfoById() to describe
 *     attachments in the agent's context window.
 */

import { getDb } from "./connection.js";
import type { MediaRecord } from "./types.js";

/**
 * Link a set of media records to a message row.
 * Called by db/messages.ts after inserting/updating a message with attachments.
 */
export function attachMediaToMessage(messageRowId: number, mediaIds: number[]): void {
  if (mediaIds.length === 0) return;
  const db = getDb();
  const stmt = db.prepare("INSERT OR IGNORE INTO message_media (message_rowid, media_id) VALUES (?, ?)");
  for (const mediaId of mediaIds) {
    stmt.run(messageRowId, mediaId);
  }
}

/**
 * Return the sorted list of media IDs attached to a single message.
 * Called by buildInteraction() in db/messages.ts.
 */
export function getMediaIdsForMessage(messageRowId: number): number[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT media_id FROM message_media WHERE message_rowid = ? ORDER BY media_id")
    .all(messageRowId) as Array<{ media_id: number }>;
  return rows.map((row) => row.media_id);
}

/**
 * Return the distinct set of media IDs attached to any of the given message rows.
 * Used by deleteThreadByRowId() in db/messages.ts before bulk deletion.
 */
export function getMediaIdsForMessages(messageRowIds: number[]): number[] {
  if (messageRowIds.length === 0) return [];
  const db = getDb();
  const placeholders = messageRowIds.map(() => "?").join(",");
  const rows = db
    .prepare(`SELECT DISTINCT media_id FROM message_media WHERE message_rowid IN (${placeholders})`)
    .all(...messageRowIds) as Array<{ media_id: number }>;
  return rows.map((row) => row.media_id);
}

/**
 * Delete media records that are no longer referenced by any message.
 * Called after message deletion to clean up orphaned blobs.
 * Returns the number of media records deleted.
 */
export function deleteUnreferencedMedia(mediaIds: number[]): number {
  if (mediaIds.length === 0) return 0;
  const db = getDb();
  const placeholders = mediaIds.map(() => "?").join(",");
  const res = db
    .prepare(`DELETE FROM media WHERE id IN (${placeholders}) AND id NOT IN (SELECT media_id FROM message_media)`)
    .run(...mediaIds);
  return Number(res.changes || 0);
}

/**
 * Insert a new media record (file upload) and return its auto-increment ID.
 * Called by channels/web/media-service.ts on file upload.
 */
export function createMedia(
  filename: string,
  contentType: string,
  data: Uint8Array,
  thumbnail: Uint8Array | null,
  metadata: Record<string, any> | null
): number {
  const db = getDb();
  const res = db
    .prepare(
      `INSERT INTO media (filename, content_type, data, thumbnail, metadata)
       VALUES (?, ?, ?, ?, ?)`
    )
    .run(filename, contentType, data, thumbnail, metadata ? JSON.stringify(metadata) : null);
  return Number(res.lastInsertRowid || 0);
}

/**
 * Fetch a full media record (including binary data) by ID.
 * Used by channels/web/handlers/media.ts to serve file downloads.
 */
export function getMediaById(id: number): MediaRecord | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT id, filename, content_type, data, thumbnail, metadata, created_at FROM media WHERE id = ?")
    .get(id) as {
      id: number;
      filename: string;
      content_type: string;
      data: Uint8Array;
      thumbnail: Uint8Array | null;
      metadata: string | null;
      created_at: string;
    } | undefined;
  if (!row) return undefined;
  return {
    id: row.id,
    filename: row.filename,
    content_type: row.content_type,
    data: row.data,
    thumbnail: row.thumbnail,
    metadata: row.metadata ? JSON.parse(row.metadata) : null,
    created_at: row.created_at,
  };
}

/**
 * Fetch media metadata (without the binary data/thumbnail blobs) by ID.
 * Used by agent-pool/attachments.ts to describe files in the agent prompt
 * without loading potentially large blobs into memory.
 */
export function getMediaInfoById(id: number): Omit<MediaRecord, "data" | "thumbnail"> | undefined {
  const db = getDb();
  const row = db
    .prepare("SELECT id, filename, content_type, metadata, created_at FROM media WHERE id = ?")
    .get(id) as {
      id: number;
      filename: string;
      content_type: string;
      metadata: string | null;
      created_at: string;
    } | undefined;
  if (!row) return undefined;
  return {
    id: row.id,
    filename: row.filename,
    content_type: row.content_type,
    metadata: row.metadata ? JSON.parse(row.metadata) : null,
    created_at: row.created_at,
  };
}
