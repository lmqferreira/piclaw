import { getRouterState, setRouterState } from "../../db.js";

export class WebChannelState {
  lastAgentTimestamp: Record<string, string> = {};
  queuedFollowupPlaceholders = new Map<string, number[]>();

  constructor(private stateKey: string) {}

  load(): void {
    const data = getRouterState(this.stateKey);
    try {
      const parsed = data ? JSON.parse(data) : {};
      this.lastAgentTimestamp = parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      this.lastAgentTimestamp = {};
    }
  }

  save(): void {
    setRouterState(this.stateKey, JSON.stringify(this.lastAgentTimestamp));
  }

  enqueueFollowupPlaceholder(chatJid: string, rowId: number): void {
    const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
    existing.push(rowId);
    this.queuedFollowupPlaceholders.set(chatJid, existing);
  }

  consumeFollowupPlaceholder(chatJid: string): number | null {
    const queue = this.queuedFollowupPlaceholders.get(chatJid);
    if (!queue || queue.length === 0) return null;
    const next = queue.shift() ?? null;
    if (!queue.length) this.queuedFollowupPlaceholders.delete(chatJid);
    return next;
  }
}
