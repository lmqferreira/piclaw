/**
 * runtime/composition.ts – runtime core composition and signal binding helpers.
 */

import { AgentPool } from "../agent-pool.js";
import { DATA_DIR } from "../core/config.js";
import { AgentQueue } from "../queue.js";
import { RuntimeState } from "./state.js";

export interface RuntimeCoreServices {
  queue: AgentQueue;
  agentPool: AgentPool;
  state: RuntimeState;
}

export interface RuntimeCoreFactoryDeps {
  dataDir?: string;
  createQueue?: () => AgentQueue;
  createAgentPool?: () => AgentPool;
  createState?: (dataDir: string) => RuntimeState;
}

/** Build fresh runtime core services for a single process run. */
export function createRuntimeCoreServices(deps: RuntimeCoreFactoryDeps = {}): RuntimeCoreServices {
  const dataDir = deps.dataDir ?? DATA_DIR;
  const createQueue = deps.createQueue ?? (() => new AgentQueue());
  const createAgentPool = deps.createAgentPool ?? (() => new AgentPool());
  const createState = deps.createState ?? ((dir) => new RuntimeState(dir));

  return {
    queue: createQueue(),
    agentPool: createAgentPool(),
    state: createState(dataDir),
  };
}

export type RuntimeShutdownHandler = (signal: string) => Promise<void>;

export interface RuntimeSignalRegistrar {
  on(event: "SIGTERM" | "SIGINT", listener: () => void): void;
}

/** Register SIGTERM/SIGINT handlers for graceful runtime shutdown. */
export function registerRuntimeShutdownSignals(
  registrar: RuntimeSignalRegistrar,
  shutdown: RuntimeShutdownHandler
): void {
  registrar.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
  registrar.on("SIGINT", () => {
    void shutdown("SIGINT");
  });
}
