import { getDb } from "./connection.js";
import type { ToolOutputRecord } from "./types.js";

export function storeToolOutput(record: ToolOutputRecord): void {
  const db = getDb();
  db.prepare(
    `INSERT OR REPLACE INTO tool_outputs (id, created_at, source, size_bytes, line_count, summary, path)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(
    record.id,
    record.created_at,
    record.source ?? null,
    record.size_bytes ?? null,
    record.line_count ?? null,
    record.summary ?? null,
    record.path ?? null
  );
}

export function insertToolOutputChunk(outputId: string, content: string): void {
  const db = getDb();
  db.prepare("INSERT INTO tool_outputs_fts (content, output_id) VALUES (?, ?)")
    .run(content, outputId);
}

export function getToolOutputById(id: string): ToolOutputRecord | undefined {
  const db = getDb();
  return db.prepare("SELECT * FROM tool_outputs WHERE id = ?").get(id) as ToolOutputRecord | undefined;
}

export function deleteToolOutputById(id: string): void {
  const db = getDb();
  db.prepare("DELETE FROM tool_outputs WHERE id = ?").run(id);
  db.prepare("DELETE FROM tool_outputs_fts WHERE output_id = ?").run(id);
}

export function deleteToolOutputsBefore(cutoffIso: string): ToolOutputRecord[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM tool_outputs WHERE created_at < ?")
    .all(cutoffIso) as ToolOutputRecord[];
  for (const row of rows) {
    deleteToolOutputById(row.id);
  }
  return rows;
}

export function searchToolOutputSnippets(outputId: string, query: string, limit = 5): string[] {
  const db = getDb();
  const stmt = db.prepare(
    "SELECT snippet(tool_outputs_fts, 0, '[', ']', '…', 12) as snippet FROM tool_outputs_fts WHERE tool_outputs_fts MATCH ? AND output_id = ? LIMIT ?"
  );
  const rows = stmt.all(query, outputId, limit) as Array<{ snippet: string }>;
  return rows.map((row) => row.snippet);
}
