/**
 * test/agent-pool/agent-pool.test.ts – Tests for agent pool initialisation and session management.
 *
 * Verifies createAgentPool(), session creation, AGENTS.md loading,
 * config persistence, and workspace directory setup.
 */

import { expect, test, afterEach } from "bun:test";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { getAttachmentRegistry } from "../../src/agent-pool/attachments.js";
import { getTestWorkspace, importFresh, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("agent pool aggregates streamed text and writes logs", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");

  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
    async prompt(_prompt: string) {
      const deltas = ["Hello", " ", "world"];
      for (const delta of deltas) {
        for (const listener of this.listeners) {
          listener({
            type: "message_update",
            assistantMessageEvent: { type: "text_delta", delta },
          });
        }
      }
    }
    async abort() {}
    dispose() {}
  }

  const pool = new AgentPool({
    createSession: async () => new StubSession() as any,
  });

  const result = await pool.runAgent("test", "web:default");
  expect(result.status).toBe("success");
  expect(result.result).toBe("Hello world");
  expect(process.env.PICLAW_CHAT_JID).toBeUndefined();

  const logsDir = (pool as any).logsDir || join(process.env.PICLAW_WORKSPACE || ws.workspace, "logs");
  const logFiles = readdirSync(logsDir).filter((f) => f.startsWith("agent-") && f.endsWith(".log"));
  expect(logFiles.length).toBeGreaterThan(0);
  const latest = logFiles.sort().slice(-1)[0];
  const content = readFileSync(join(logsDir, latest), "utf8");
  expect(content).toContain("Hello world");
});

test("agent pool honors timeout overrides", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");

  let abortCalled = false;
  class StubSession {
    private listeners: Array<(event: any) => void> = [];
    subscribe(listener: (event: any) => void) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter((l) => l !== listener);
      };
    }
    async prompt(_prompt: string) {
      await Bun.sleep(20);
    }
    async abort() {
      abortCalled = true;
    }
    dispose() {}
  }

  const pool = new AgentPool({
    createSession: async () => new StubSession() as any,
  });

  const timedOut = await pool.runAgent("test", "web:default", { timeoutMs: 5 });
  expect(timedOut.status).toBe("error");
  expect(abortCalled).toBe(true);

  abortCalled = false;
  const ok = await pool.runAgent("test", "web:default", { timeoutMs: 0 });
  expect(ok.status).toBe("success");
  expect(abortCalled).toBe(false);
});

test("agent pool clears attachments when a run errors", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");
  const attachments = getAttachmentRegistry();
  attachments.clear("web:default");

  class StubSession {
    subscribe(_listener: (event: any) => void) {
      return () => {};
    }
    async prompt(_prompt: string) {
      attachments.register("web:default", {
        id: 1,
        name: "file.txt",
        contentType: "text/plain",
        size: 5,
        kind: "file",
        sourcePath: "/tmp/file.txt",
      });
      throw new Error("boom");
    }
    async abort() {}
    dispose() {}
  }

  const pool = new AgentPool({
    createSession: async () => new StubSession() as any,
  });

  const result = await pool.runAgent("test", "web:default", { timeoutMs: 0 });
  expect(result.status).toBe("error");
  expect(result.attachments).toBeUndefined();
  expect(attachments.take("web:default").length).toBe(0);
});

test("agent pool evicts idle sessions and recreates them", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");

  let createCalls = 0;
  let disposed = 0;

  class StubSession {
    subscribe(_listener: (event: any) => void) {
      return () => {};
    }
    async prompt(_prompt: string) {}
    async abort() {}
    dispose() {
      disposed += 1;
    }
  }

  const pool = new AgentPool({
    createSession: async () => {
      createCalls += 1;
      return new StubSession() as any;
    },
  });

  await pool.runAgent("test", "web:default", { timeoutMs: 0 });
  expect(createCalls).toBe(1);

  const entry = (pool as any).pool.get("web:default");
  entry.lastUsed = Date.now() - 11 * 60 * 1000;
  (pool as any).evictIdle();

  expect(disposed).toBe(1);
  expect((pool as any).pool.has("web:default")).toBe(false);

  await pool.runAgent("test", "web:default", { timeoutMs: 0 });
  expect(createCalls).toBe(2);

  await pool.shutdown();
});

test("agent pool can run a side prompt with the current model and thinking level", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");

  const seen: Array<{ model: string; reasoning: unknown; prompt: string }> = [];
  class StubSession {
    model = {
      provider: "openai",
      id: "gpt-test",
      api: "openai-responses",
      reasoning: true,
      input: ["text"],
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 128000,
      maxTokens: 8192,
    };
    thinkingLevel = "high";
    subscribe(_listener: (event: any) => void) {
      return () => {};
    }
    async prompt(_prompt: string) {}
    async abort() {}
    dispose() {}
  }

  const pool = new AgentPool({
    createSession: async () => new StubSession() as any,
    modelRegistry: {
      getApiKey: async () => "test-key",
      find: () => undefined,
      getAll: () => [],
      getAvailable: () => [],
    } as any,
    sideStreamSimple: (_model: any, context: any, options: any) => {
      seen.push({
        model: `${_model.provider}/${_model.id}`,
        reasoning: options?.reasoning,
        prompt: context.messages[0].content[0].text,
      });
      return (async function* () {
        yield { type: "thinking_delta", delta: "plan" } as any;
        yield { type: "text_delta", delta: "answer" } as any;
        yield {
          type: "done",
          reason: "stop",
          message: {
            role: "assistant",
            content: [{ type: "text", text: "answer" }],
            api: "openai-responses",
            provider: "openai",
            model: "gpt-test",
            usage: { input: 10, output: 5, cacheRead: 0, cacheWrite: 0, totalTokens: 15, cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 } },
            stopReason: "stop",
            timestamp: Date.now(),
          },
        } as any;
      })() as any;
    },
  });

  const result = await pool.runSidePrompt("web:default", "Side question");
  expect(result.status).toBe("success");
  expect(result.result).toBe("answer");
  expect(result.thinking).toBe("plan");
  expect(result.model).toBe("openai/gpt-test");
  expect(seen).toEqual([{ model: "openai/gpt-test", reasoning: "high", prompt: "Side question" }]);
});

test("agent pool reports side prompt errors when no model is active", async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({ PICLAW_WORKSPACE: ws.workspace, PICLAW_STORE: ws.store, PICLAW_DATA: ws.data });

  const { AgentPool } = await importFresh<typeof import("../src/agent-pool.js")>("../src/agent-pool.js");

  class StubSession {
    model = null;
    subscribe(_listener: (event: any) => void) {
      return () => {};
    }
    async prompt(_prompt: string) {}
    async abort() {}
    dispose() {}
  }

  const pool = new AgentPool({
    createSession: async () => new StubSession() as any,
  });

  const result = await pool.runSidePrompt("web:default", "Side question");
  expect(result.status).toBe("error");
  expect(result.error).toContain("No active model selected");
});
