import { describe, expect, test } from "bun:test";
import { getDataRateLimitRule } from "../../../src/channels/web/http/rate-limit-rules.js";
import { getRouteFlags, shouldSkipAuthCheck } from "../../../src/channels/web/http/route-flags.js";

describe("web http route classification", () => {
  test("classifies auth endpoints and static/public assets", () => {
    const authReq = new Request("https://example.com/auth/verify", { method: "POST" });
    const authFlags = getRouteFlags(authReq, "/auth/verify");
    expect(authFlags.isAuthVerify).toBe(true);
    expect(authFlags.isAuthEndpoint).toBe(true);
    expect(authFlags.isMutating).toBe(true);

    const staticReq = new Request("https://example.com/static/dist/login.bundle.js", { method: "GET" });
    const staticFlags = getRouteFlags(staticReq, "/static/dist/login.bundle.js");
    expect(staticFlags.isStaticAsset).toBe(true);
    expect(staticFlags.isPublicStatic).toBe(true);
    expect(shouldSkipAuthCheck(staticFlags, false)).toBe(true);
  });

  test("classifies favicon/apple and non-public assets correctly", () => {
    const faviconReq = new Request("https://example.com/favicon.ico", { method: "GET" });
    const faviconFlags = getRouteFlags(faviconReq, "/favicon.ico");
    expect(faviconFlags.isFavicon).toBe(true);
    expect(shouldSkipAuthCheck(faviconFlags, false)).toBe(true);

    const appReq = new Request("https://example.com/static/dist/app.bundle.js", { method: "GET" });
    const appFlags = getRouteFlags(appReq, "/static/dist/app.bundle.js");
    expect(appFlags.isStaticAsset).toBe(true);
    expect(appFlags.isPublicStatic).toBe(false);
    expect(shouldSkipAuthCheck(appFlags, false)).toBe(false);
  });

  test("maps data rate-limit rules by method and pathname", () => {
    expect(getDataRateLimitRule("POST", "/post")?.bucket).toBe("data/post");
    expect(getDataRateLimitRule("PATCH", "/post/123")?.bucket).toBe("data/post_update");
    expect(getDataRateLimitRule("POST", "/agent/abc/message")?.bucket).toBe("data/agent_message");
    expect(getDataRateLimitRule("POST", "/agent/queue-remove")?.bucket).toBe("data/agent_queue");
    expect(getDataRateLimitRule("POST", "/agent/queue-steer")?.bucket).toBe("data/agent_queue");
    expect(getDataRateLimitRule("POST", "/agent/branch-fork")?.bucket).toBe("data/agent_branch");
    expect(getDataRateLimitRule("POST", "/agent/branch-rename")?.bucket).toBe("data/agent_branch");
    expect(getDataRateLimitRule("POST", "/agent/branch-prune")?.bucket).toBe("data/agent_branch");
    expect(getDataRateLimitRule("POST", "/agent/peer-message")?.bucket).toBe("data/agent_peer");
    expect(getDataRateLimitRule("POST", "/agent/thought/visibility")?.bucket).toBe("data/agent_ui");
    expect(getDataRateLimitRule("POST", "/agent/respond")?.bucket).toBe("data/agent_ui");
    expect(getDataRateLimitRule("POST", "/agent/card-action")?.bucket).toBe("data/agent_ui");
    expect(getDataRateLimitRule("POST", "/agent/side-prompt")?.bucket).toBe("data/agent_side_prompt");
    expect(getDataRateLimitRule("POST", "/agent/side-prompt/stream")?.bucket).toBe("data/agent_side_prompt");
    expect(getDataRateLimitRule("POST", "/workspace/attach")?.bucket).toBe("data/workspace_attach");
    expect(getDataRateLimitRule("POST", "/workspace/visibility")?.bucket).toBe("data/workspace_ui");
    expect(getDataRateLimitRule("DELETE", "/workspace/file")?.bucket).toBe("data/write");
    expect(getDataRateLimitRule("PUT", "/workspace/file")?.bucket).toBe("data/write");
    expect(getDataRateLimitRule("GET", "/workspace/file")).toBeNull();
  });
});
