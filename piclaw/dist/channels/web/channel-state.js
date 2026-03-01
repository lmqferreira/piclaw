import { getRouterState, setRouterState } from "../../db.js";
export class WebChannelState {
    stateKey;
    lastAgentTimestamp = {};
    queuedFollowupPlaceholders = new Map();
    constructor(stateKey) {
        this.stateKey = stateKey;
    }
    load() {
        const data = getRouterState(this.stateKey);
        try {
            const parsed = data ? JSON.parse(data) : {};
            this.lastAgentTimestamp = parsed && typeof parsed === "object" ? parsed : {};
        }
        catch {
            this.lastAgentTimestamp = {};
        }
    }
    save() {
        setRouterState(this.stateKey, JSON.stringify(this.lastAgentTimestamp));
    }
    enqueueFollowupPlaceholder(chatJid, rowId) {
        const existing = this.queuedFollowupPlaceholders.get(chatJid) ?? [];
        existing.push(rowId);
        this.queuedFollowupPlaceholders.set(chatJid, existing);
    }
    consumeFollowupPlaceholder(chatJid) {
        const queue = this.queuedFollowupPlaceholders.get(chatJid);
        if (!queue || queue.length === 0)
            return null;
        const next = queue.shift() ?? null;
        if (!queue.length)
            this.queuedFollowupPlaceholders.delete(chatJid);
        return next;
    }
}
