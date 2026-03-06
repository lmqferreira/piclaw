import { Database } from "bun:sqlite";
import { resolve } from "path";
import { mkdirSync } from "fs";
import { DATA_DIR } from "../core/config.js";
const DB_PATH = resolve(DATA_DIR, "brain.db");
let _db = null;
export function getDb() {
    if (_db)
        return _db;
    mkdirSync(DATA_DIR, { recursive: true });
    _db = new Database(DB_PATH);
    _db.run("PRAGMA journal_mode=WAL");
    _db.run(`
    CREATE TABLE IF NOT EXISTS brain_entries (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      original    TEXT    NOT NULL,
      category    TEXT    NOT NULL,
      name        TEXT    NOT NULL DEFAULT '',
      fields      TEXT    NOT NULL DEFAULT '{}',
      confidence  REAL    NOT NULL DEFAULT 0,
      status      TEXT    NOT NULL DEFAULT 'filed',
      chat_jid    TEXT    NOT NULL DEFAULT '',
      created_at  DATETIME NOT NULL DEFAULT (datetime('now'))
    )
  `);
    _db.run(`
    CREATE TABLE IF NOT EXISTS undo_log (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      action      TEXT    NOT NULL,
      entry_ids   TEXT    NOT NULL DEFAULT '[]',
      prev_states TEXT    NOT NULL DEFAULT '[]',
      created_at  DATETIME NOT NULL DEFAULT (datetime('now'))
    )
  `);
    return _db;
}
export function insertEntry(entry) {
    const db = getDb();
    const stmt = db.prepare(`INSERT INTO brain_entries (original, category, name, fields, confidence, status, chat_jid)
     VALUES (?, ?, ?, ?, ?, ?, ?)`);
    const result = stmt.run(entry.original, entry.category, entry.name, JSON.stringify(entry.fields), entry.confidence, entry.status, entry.chat_jid);
    return result.lastInsertRowid;
}
export function getRecentEntries(limitDays = 7, category) {
    const db = getDb();
    const baseQuery = `SELECT * FROM brain_entries
    WHERE created_at >= datetime('now', '-${limitDays} days')
    AND status NOT IN ('archived', 'done')
    ${category ? `AND category = ?` : ""}
    ORDER BY created_at DESC`;
    const rows = category
        ? db.prepare(baseQuery).all(category)
        : db.prepare(baseQuery).all();
    return rows.map(parseRow);
}
export function markEntryDone(id) {
    const db = getDb();
    const result = db.prepare(`UPDATE brain_entries SET status = 'done' WHERE id = ?`).run(id);
    return result.changes > 0;
}
export function markEntryArchived(id) {
    const db = getDb();
    const result = db.prepare(`UPDATE brain_entries SET status = 'archived' WHERE id = ?`).run(id);
    return result.changes > 0;
}
export function findEntriesByName(query) {
    const db = getDb();
    const rows = db.prepare(`
    SELECT * FROM brain_entries
    WHERE (LOWER(name) LIKE ? OR LOWER(original) LIKE ?)
    AND status NOT IN ('archived')
    ORDER BY created_at DESC
    LIMIT 10
  `).all(`%${query.toLowerCase()}%`, `%${query.toLowerCase()}%`);
    return rows.map(parseRow);
}
export function getCategoryStats() {
    const db = getDb();
    const rows = db.prepare(`
    SELECT category, COUNT(*) as count FROM brain_entries
    WHERE created_at >= datetime('now', '-30 days')
    GROUP BY category
  `).all();
    const stats = {};
    for (const row of rows)
        stats[row.category] = row.count;
    return stats;
}
export function getAllActiveEntries() {
    const db = getDb();
    const rows = db.prepare(`
    SELECT id, name, original, category FROM brain_entries
    WHERE status NOT IN ('archived', 'done')
    ORDER BY created_at DESC
    LIMIT 200
  `).all();
    return rows;
}
export function getDuplicateGroups() {
    const db = getDb();
    const rows = db.prepare(`
    SELECT LOWER(name) as lname, category, COUNT(*) as cnt, GROUP_CONCAT(id ORDER BY id DESC) as ids
    FROM brain_entries
    WHERE status NOT IN ('archived', 'done')
    GROUP BY LOWER(name), category
    HAVING cnt > 1
  `).all();
    return rows.map(r => ({
        name: r.lname,
        category: r.category,
        ids: String(r.ids).split(",").map(Number),
    }));
}
export function archiveDuplicates(category) {
    const db = getDb();
    const groups = getDuplicateGroups().filter(g => !category || g.category === category);
    let archived = 0;
    const prevStates = [];
    for (const group of groups) {
        // Keep the newest (first id in DESC order), archive the rest
        const toArchive = group.ids.slice(1);
        for (const id of toArchive) {
            const row = db.prepare("SELECT id, status FROM brain_entries WHERE id = ?").get(id);
            if (row)
                prevStates.push({ id: row.id, status: row.status });
            db.prepare("UPDATE brain_entries SET status = 'archived' WHERE id = ?").run(id);
            archived++;
        }
    }
    if (prevStates.length > 0) {
        writeUndoLog("fix_dup", prevStates.map(s => s.id), prevStates);
    }
    return { archived, kept: groups.length, groups: groups.length };
}
export function updateEntryCategory(id, category) {
    const db = getDb();
    const result = db.prepare("UPDATE brain_entries SET category = ? WHERE id = ?").run(category, id);
    return result.changes > 0;
}
export function writeUndoLog(action, entryIds, prevStates) {
    const db = getDb();
    db.prepare("DELETE FROM undo_log").run();
    db.prepare("INSERT INTO undo_log (action, entry_ids, prev_states) VALUES (?, ?, ?)").run(action, JSON.stringify(entryIds), JSON.stringify(prevStates));
}
export function applyUndo() {
    const db = getDb();
    const log = db.prepare("SELECT * FROM undo_log ORDER BY id DESC LIMIT 1").get();
    if (!log)
        return null;
    const prevStates = JSON.parse(log.prev_states);
    for (const s of prevStates) {
        db.prepare("UPDATE brain_entries SET status = ? WHERE id = ?").run(s.status, s.id);
        if (s.category) {
            db.prepare("UPDATE brain_entries SET category = ? WHERE id = ?").run(s.category, s.id);
        }
    }
    db.prepare("DELETE FROM undo_log").run();
    return { action: log.action, restored: prevStates.length };
}
export function getEntryById(id) {
    const db = getDb();
    return db.prepare("SELECT * FROM brain_entries WHERE id = ?").get(id) ?? null;
}
export function getAllActiveContext() {
    const db = getDb();
    const rows = db.prepare(`
    SELECT * FROM brain_entries
    WHERE status != 'archived'
    ORDER BY created_at DESC
    LIMIT 200
  `).all();
    return rows.map(parseRow).map(formatEntryForDigest).join("\n");
}
function parseRow(row) {
    return {
        ...row,
        fields: (() => { try {
            return JSON.parse(row.fields);
        }
        catch {
            return {};
        } })(),
    };
}
export function formatEntryForDigest(e) {
    const f = e.fields;
    const parts = [`[${e.category.toUpperCase()}] ${e.name}`];
    if (f.context)
        parts.push(`  Context: ${f.context}`);
    if (f.follow_up)
        parts.push(`  Follow-up: ${f.follow_up}`);
    if (f.next_action)
        parts.push(`  Next: ${f.next_action}`);
    if (f.status)
        parts.push(`  Status: ${f.status}`);
    if (f.one_liner)
        parts.push(`  Idea: ${f.one_liner}`);
    if (f.due)
        parts.push(`  Due: ${f.due}`);
    if (f.notes)
        parts.push(`  Notes: ${f.notes}`);
    parts.push(`  (captured ${e.created_at.slice(0, 10)})`);
    return parts.join("\n");
}
