import { getDb } from "./connection.js";

/**
 * Persist a web session token so it survives process restarts.
 *
 * `expiresAt` is a Unix timestamp in milliseconds (same unit as Date.now()).
 */
export function insertWebSession(token: string, expiresAt: number): void {
  const db = getDb();
  db.prepare("INSERT OR REPLACE INTO web_sessions (token, expires_at) VALUES (?, ?)").run(token, expiresAt);
}

/**
 * Look up a session token.
 * Returns the `expires_at` ms timestamp, or `undefined` if not found.
 */
export function getWebSession(token: string): number | undefined {
  const db = getDb();
  const row = db.prepare("SELECT expires_at FROM web_sessions WHERE token = ?").get(token) as
    | { expires_at: number }
    | undefined;
  return row?.expires_at;
}

/**
 * Delete a single session token (logout).
 */
export function deleteWebSession(token: string): void {
  const db = getDb();
  db.prepare("DELETE FROM web_sessions WHERE token = ?").run(token);
}

/**
 * Delete all sessions that have already expired.
 * Call this on startup and periodically to keep the table lean.
 */
export function pruneExpiredWebSessions(nowMs = Date.now()): void {
  const db = getDb();
  db.prepare("DELETE FROM web_sessions WHERE expires_at <= ?").run(nowMs);
}

/**
 * Load all non-expired sessions as a Map<token, expiresAt>.
 * Used to warm the in-memory cache on startup.
 */
export function loadActiveWebSessions(nowMs = Date.now()): Map<string, number> {
  const db = getDb();
  const rows = db.prepare("SELECT token, expires_at FROM web_sessions WHERE expires_at > ?").all(nowMs) as Array<{
    token: string;
    expires_at: number;
  }>;
  const map = new Map<string, number>();
  for (const row of rows) {
    map.set(row.token, row.expires_at);
  }
  return map;
}
