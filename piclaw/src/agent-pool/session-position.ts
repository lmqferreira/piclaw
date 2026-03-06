/**
 * Persists and restores the active session tree position (leaf ID + session name)
 * for each chat JID across process restarts.
 *
 * Storage: router_state table, keys:
 *   session_leaf:<chatJid>  → leafId string
 *   session_name:<chatJid>  → session name string
 */

import { getRouterState, setRouterState, deleteRouterState } from "../db/router-state.js";

function leafKey(chatJid: string): string {
  return `session_leaf:${chatJid}`;
}

function nameKey(chatJid: string): string {
  return `session_name:${chatJid}`;
}

/** Persist the current leaf ID for a chat. Pass null to clear. */
export function saveSessionLeaf(chatJid: string, leafId: string | null): void {
  try {
    if (leafId) {
      setRouterState(leafKey(chatJid), leafId);
    } else {
      deleteRouterState(leafKey(chatJid));
    }
  } catch (err) {
    console.warn(`[session-position] Failed to save leaf for ${chatJid}:`, err);
  }
}

/** Load the persisted leaf ID for a chat. Returns null if none stored. */
export function loadSessionLeaf(chatJid: string): string | null {
  try {
    return getRouterState(leafKey(chatJid)) ?? null;
  } catch {
    return null;
  }
}

/** Persist the session name for a chat. Pass empty string to clear. */
export function saveSessionName(chatJid: string, name: string): void {
  try {
    if (name) {
      setRouterState(nameKey(chatJid), name);
    } else {
      deleteRouterState(nameKey(chatJid));
    }
  } catch (err) {
    console.warn(`[session-position] Failed to save session name for ${chatJid}:`, err);
  }
}

/** Load the persisted session name for a chat. Returns null if none stored. */
export function loadSessionName(chatJid: string): string | null {
  try {
    return getRouterState(nameKey(chatJid)) ?? null;
  } catch {
    return null;
  }
}
