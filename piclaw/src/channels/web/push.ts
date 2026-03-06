import webpush from "web-push";
import { getDb } from "../../db.js";
import { readJsonConfig, writeJsonConfig } from "../../core/config-store.js";
import { PICLAW_CONFIG_PATH } from "../../core/config.js";

// ── VAPID setup ───────────────────────────────────────────────────────────────
export function initVapid(): void {
  const config = readJsonConfig(PICLAW_CONFIG_PATH);
  const vapid = config.vapid as { publicKey?: string; privateKey?: string; subject?: string } | undefined;
  if (!vapid?.publicKey || !vapid?.privateKey) return;
  webpush.setVapidDetails(
    vapid.subject || "mailto:admin@luisfelab.com",
    vapid.publicKey,
    vapid.privateKey
  );
}

export function getVapidPublicKey(): string | null {
  const config = readJsonConfig(PICLAW_CONFIG_PATH);
  const vapid = config.vapid as { publicKey?: string } | undefined;
  return vapid?.publicKey ?? null;
}

// ── DB: push_subscriptions table ─────────────────────────────────────────────
export function ensurePushTable(): void {
  const db = getDb();
  db.exec(`
    CREATE TABLE IF NOT EXISTS push_subscriptions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      endpoint TEXT UNIQUE NOT NULL,
      p256dh TEXT NOT NULL,
      auth TEXT NOT NULL,
      user_agent TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

// ── Subscription management ───────────────────────────────────────────────────
export function saveSubscription(sub: {
  endpoint: string;
  keys: { p256dh: string; auth: string };
  userAgent?: string;
}): void {
  const db = getDb();
  db.prepare(`
    INSERT INTO push_subscriptions (endpoint, p256dh, auth, user_agent)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(endpoint) DO UPDATE SET
      p256dh = excluded.p256dh,
      auth = excluded.auth,
      user_agent = excluded.user_agent
  `).run(sub.endpoint, sub.keys.p256dh, sub.keys.auth, sub.userAgent ?? null);
}

export function removeSubscription(endpoint: string): void {
  getDb().prepare("DELETE FROM push_subscriptions WHERE endpoint = ?").run(endpoint);
}

function getAllSubscriptions(): Array<{ endpoint: string; p256dh: string; auth: string }> {
  return getDb()
    .prepare("SELECT endpoint, p256dh, auth FROM push_subscriptions")
    .all() as Array<{ endpoint: string; p256dh: string; auth: string }>;
}

// ── Send a push notification to all subscribers ───────────────────────────────
export async function sendPushNotification(payload: {
  title: string;
  body: string;
  icon?: string;
  tag?: string;
  url?: string;
}): Promise<void> {
  const subs = getAllSubscriptions();
  if (subs.length === 0) return;

  const data = JSON.stringify(payload);
  const stale: string[] = [];

  await Promise.allSettled(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          data,
          { TTL: 3600 }
        );
      } catch (err: unknown) {
        const status = (err as { statusCode?: number }).statusCode;
        if (status === 404 || status === 410) {
          stale.push(sub.endpoint); // subscription expired
        }
      }
    })
  );

  // Clean up expired subscriptions
  for (const endpoint of stale) removeSubscription(endpoint);
}
