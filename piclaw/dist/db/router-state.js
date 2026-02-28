import { getDb } from "./connection.js";
export function getRouterState(key) {
    const db = getDb();
    const row = db.prepare("SELECT value FROM router_state WHERE key = ?").get(key);
    return row?.value;
}
export function setRouterState(key, value) {
    const db = getDb();
    db.prepare("INSERT OR REPLACE INTO router_state (key, value) VALUES (?, ?)").run(key, value);
}
