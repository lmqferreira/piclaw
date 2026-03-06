/**
 * db/webauthn.ts – Storage helpers for WebAuthn passkey credentials.
 *
 * Stores registered credentials, counters, and one-time enrolment tokens.
 * Designed for a single-user default now, but user_id is included to allow
 * multi-user support later without breaking schema.
 */

import { randomBytes } from "node:crypto";
import { getDb } from "./connection.js";

export const DEFAULT_PASSKEY_USER_ID = "default";

export interface WebauthnCredential {
  id: number;
  user_id: string;
  rp_id: string;
  credential_id: string;
  public_key: string;
  sign_count: number;
  transports: string | null;
  created_at: string;
  last_used_at: string | null;
}

export interface WebauthnEnrollment {
  token: string;
  user_id: string;
  created_at: string;
  expires_at: string;
}

export function createWebauthnEnrollment(userId = DEFAULT_PASSKEY_USER_ID, ttlSeconds = 5 * 60): WebauthnEnrollment {
  const db = getDb();
  const token = randomBytes(24).toString("base64url");
  const createdAt = new Date().toISOString();
  const expiresAt = new Date(Date.now() + ttlSeconds * 1000).toISOString();
  db.prepare(
    "INSERT INTO webauthn_enrollments (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)"
  ).run(token, userId, createdAt, expiresAt);
  return { token, user_id: userId, created_at: createdAt, expires_at: expiresAt };
}

export function getWebauthnEnrollment(token: string): WebauthnEnrollment | null {
  const db = getDb();
  const row = db
    .prepare("SELECT token, user_id, created_at, expires_at FROM webauthn_enrollments WHERE token = ?")
    .get(token) as WebauthnEnrollment | undefined;
  if (!row) return null;
  const expiresAt = Date.parse(row.expires_at);
  if (!Number.isNaN(expiresAt) && expiresAt <= Date.now()) {
    db.prepare("DELETE FROM webauthn_enrollments WHERE token = ?").run(token);
    return null;
  }
  return row;
}

export function consumeWebauthnEnrollment(token: string): WebauthnEnrollment | null {
  const db = getDb();
  const row = db
    .prepare("SELECT token, user_id, created_at, expires_at FROM webauthn_enrollments WHERE token = ?")
    .get(token) as WebauthnEnrollment | undefined;
  if (!row) return null;
  const now = Date.now();
  const expiresAt = Date.parse(row.expires_at);
  db.prepare("DELETE FROM webauthn_enrollments WHERE token = ?").run(token);
  if (!Number.isNaN(expiresAt) && expiresAt <= now) return null;
  return row;
}

export function listWebauthnCredentials(userId = DEFAULT_PASSKEY_USER_ID): WebauthnCredential[] {
  const db = getDb();
  return db
    .prepare(
      "SELECT id, user_id, rp_id, credential_id, public_key, sign_count, transports, created_at, last_used_at " +
        "FROM webauthn_credentials WHERE user_id = ? ORDER BY created_at ASC"
    )
    .all(userId) as WebauthnCredential[];
}

export function getWebauthnCredentialsForRpId(userId: string, rpId: string): WebauthnCredential[] {
  const db = getDb();
  return db
    .prepare(
      "SELECT id, user_id, rp_id, credential_id, public_key, sign_count, transports, created_at, last_used_at " +
        "FROM webauthn_credentials WHERE user_id = ? AND rp_id = ? ORDER BY created_at ASC"
    )
    .all(userId, rpId) as WebauthnCredential[];
}

export function getWebauthnCredentialById(credentialId: string): WebauthnCredential | null {
  const db = getDb();
  const row = db
    .prepare(
      "SELECT id, user_id, rp_id, credential_id, public_key, sign_count, transports, created_at, last_used_at " +
        "FROM webauthn_credentials WHERE credential_id = ?"
    )
    .get(credentialId) as WebauthnCredential | undefined;
  return row ?? null;
}

export function findWebauthnCredentialsByPrefix(userId: string, prefix: string): WebauthnCredential[] {
  const db = getDb();
  return db
    .prepare(
      "SELECT id, user_id, rp_id, credential_id, public_key, sign_count, transports, created_at, last_used_at " +
        "FROM webauthn_credentials WHERE user_id = ? AND credential_id LIKE ? ORDER BY created_at ASC"
    )
    .all(userId, `${prefix}%`) as WebauthnCredential[];
}

export function storeWebauthnCredential(input: {
  user_id: string;
  rp_id: string;
  credential_id: string;
  public_key: string;
  sign_count: number;
  transports?: string | null;
}): void {
  const db = getDb();
  db.prepare(
    "INSERT OR REPLACE INTO webauthn_credentials (user_id, rp_id, credential_id, public_key, sign_count, transports, created_at, last_used_at) " +
      "VALUES (?, ?, ?, ?, ?, ?, COALESCE((SELECT created_at FROM webauthn_credentials WHERE credential_id = ?), CURRENT_TIMESTAMP), CURRENT_TIMESTAMP)"
  ).run(
    input.user_id,
    input.rp_id,
    input.credential_id,
    input.public_key,
    input.sign_count,
    input.transports ?? null,
    input.credential_id
  );
}

export function updateWebauthnCredentialCounter(credentialId: string, signCount: number): void {
  const db = getDb();
  db.prepare(
    "UPDATE webauthn_credentials SET sign_count = ?, last_used_at = CURRENT_TIMESTAMP WHERE credential_id = ?"
  ).run(signCount, credentialId);
}

export function deleteWebauthnCredential(credentialId: string): void {
  const db = getDb();
  db.prepare("DELETE FROM webauthn_credentials WHERE credential_id = ?").run(credentialId);
}
