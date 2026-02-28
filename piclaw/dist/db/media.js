import { getDb } from "./connection.js";
export function attachMediaToMessage(messageRowId, mediaIds) {
    if (mediaIds.length === 0)
        return;
    const db = getDb();
    const stmt = db.prepare("INSERT OR IGNORE INTO message_media (message_rowid, media_id) VALUES (?, ?)");
    for (const mediaId of mediaIds) {
        stmt.run(messageRowId, mediaId);
    }
}
export function getMediaIdsForMessage(messageRowId) {
    const db = getDb();
    const rows = db
        .prepare("SELECT media_id FROM message_media WHERE message_rowid = ? ORDER BY media_id")
        .all(messageRowId);
    return rows.map((row) => row.media_id);
}
export function createMedia(filename, contentType, data, thumbnail, metadata) {
    const db = getDb();
    const res = db
        .prepare(`INSERT INTO media (filename, content_type, data, thumbnail, metadata)
       VALUES (?, ?, ?, ?, ?)`)
        .run(filename, contentType, data, thumbnail, metadata ? JSON.stringify(metadata) : null);
    return Number(res.lastInsertRowid || 0);
}
export function getMediaById(id) {
    const db = getDb();
    const row = db
        .prepare("SELECT id, filename, content_type, data, thumbnail, metadata, created_at FROM media WHERE id = ?")
        .get(id);
    if (!row)
        return undefined;
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
export function getMediaInfoById(id) {
    const db = getDb();
    const row = db
        .prepare("SELECT id, filename, content_type, metadata, created_at FROM media WHERE id = ?")
        .get(id);
    if (!row)
        return undefined;
    return {
        id: row.id,
        filename: row.filename,
        content_type: row.content_type,
        metadata: row.metadata ? JSON.parse(row.metadata) : null,
        created_at: row.created_at,
    };
}
