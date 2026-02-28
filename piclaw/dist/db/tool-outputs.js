import { getDb } from "./connection.js";
export function storeToolOutput(record) {
    const db = getDb();
    db.prepare(`INSERT OR REPLACE INTO tool_outputs (id, created_at, source, size_bytes, line_count, summary, path)
     VALUES (?, ?, ?, ?, ?, ?, ?)`).run(record.id, record.created_at, record.source ?? null, record.size_bytes ?? null, record.line_count ?? null, record.summary ?? null, record.path ?? null);
}
export function insertToolOutputChunk(outputId, content) {
    const db = getDb();
    db.prepare("INSERT INTO tool_outputs_fts (content, output_id) VALUES (?, ?)")
        .run(content, outputId);
}
export function getToolOutputById(id) {
    const db = getDb();
    return db.prepare("SELECT * FROM tool_outputs WHERE id = ?").get(id);
}
export function deleteToolOutputById(id) {
    const db = getDb();
    db.prepare("DELETE FROM tool_outputs WHERE id = ?").run(id);
    db.prepare("DELETE FROM tool_outputs_fts WHERE output_id = ?").run(id);
}
export function deleteToolOutputsBefore(cutoffIso) {
    const db = getDb();
    const rows = db
        .prepare("SELECT * FROM tool_outputs WHERE created_at < ?")
        .all(cutoffIso);
    for (const row of rows) {
        deleteToolOutputById(row.id);
    }
    return rows;
}
export function searchToolOutputSnippets(outputId, query, limit = 5) {
    const db = getDb();
    const stmt = db.prepare("SELECT snippet(tool_outputs_fts, 0, '[', ']', '…', 12) as snippet FROM tool_outputs_fts WHERE tool_outputs_fts MATCH ? AND output_id = ? LIMIT ?");
    const rows = stmt.all(query, outputId, limit);
    return rows.map((row) => row.snippet);
}
