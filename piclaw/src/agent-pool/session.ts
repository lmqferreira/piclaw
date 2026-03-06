import { mkdirSync } from "fs";
import { join } from "path";
import {
  type AgentSession,
  createAgentSession,
  DefaultResourceLoader,
  getAgentDir,
  SessionManager,
  type AuthStorage,
  type ModelRegistry,
  type SettingsManager,
} from "@mariozechner/pi-coding-agent";

import { SESSIONS_DIR, WORKSPACE_DIR } from "../core/config.js";
import { builtinExtensionFactories } from "../extensions/index.js";
import { loadSessionLeaf, loadSessionName } from "./session-position.js";

export function ensureSessionDir(chatJid: string): string {
  const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
  mkdirSync(chatSessionDir, { recursive: true });
  return chatSessionDir;
}

export async function createDefaultSession(
  chatJid: string,
  options: {
    authStorage: AuthStorage;
    modelRegistry: ModelRegistry;
    settingsManager: SettingsManager;
    tools: unknown[];
  }
): Promise<AgentSession> {
  const chatSessionDir = ensureSessionDir(chatJid);
  const resourceLoader = new DefaultResourceLoader({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    settingsManager: options.settingsManager,
    extensionFactories: builtinExtensionFactories,
  });
  await resourceLoader.reload();

  // Flush any provider registrations queued by extension factories (e.g. azure-openai)
  // into the model registry BEFORE createAgentSession calls findInitialModel.
  // Without this, dynamic providers are invisible during model selection and the
  // session always falls back to the github-copilot default.
  const extensionsResult = resourceLoader.getExtensions();
  console.error(`[agent-pool] Extensions loaded: ${extensionsResult.extensions.length}, errors: ${extensionsResult.errors.length}`);
  for (const { path, error } of extensionsResult.errors ?? []) {
    console.error(`[agent-pool] Extension load error: ${path}: ${error}`);
  }
  for (const ext of extensionsResult.extensions ?? []) {
    console.error(`[agent-pool] Extension active: ${ext.path}`);
  }
  const { runtime } = extensionsResult;
  for (const { name, config } of (runtime as any).pendingProviderRegistrations ?? []) {
    options.modelRegistry.registerProvider(name, config);
  }

  const { session } = await createAgentSession({
    cwd: WORKSPACE_DIR,
    agentDir: getAgentDir(),
    authStorage: options.authStorage,
    modelRegistry: options.modelRegistry,
    settingsManager: options.settingsManager,
    resourceLoader,
    sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
    tools: options.tools as any,
  });

  // After session restore, the session may have reverted to a previously saved model
  // (e.g. github-copilot from an old model_change record in the session file).
  // If settings specify a different preferred model, honour settings over the session history.
  const preferredProvider = options.settingsManager.getDefaultProvider?.() ?? (options.settingsManager as any).settings?.defaultProvider;
  const preferredModel    = options.settingsManager.getDefaultModel?.()    ?? (options.settingsManager as any).settings?.defaultModel;
  if (preferredProvider && preferredModel) {
    const current = session.model;
    if (!current || current.provider !== preferredProvider || current.id !== preferredModel) {
      const target = options.modelRegistry.find(preferredProvider, preferredModel);
      if (target) {
        try {
          await session.setModel(target);
          console.log(`[agent-pool] Overrode restored model with settings default: ${preferredProvider}/${preferredModel}`);
        } catch (err) {
          console.warn(`[agent-pool] Could not apply settings default model: ${err}`);
        }
      }
    }
  }

  // Restore persisted session tree position (leaf ID) and session name across restarts.
  const savedLeaf = loadSessionLeaf(chatJid);
  if (savedLeaf) {
    const currentLeaf = session.sessionManager.getLeafId();
    if (currentLeaf !== savedLeaf) {
      try {
        const result = await session.navigateTree(savedLeaf);
        if (!result.cancelled) {
          console.log(`[agent-pool] Restored session position for ${chatJid}: ${savedLeaf}`);
        } else {
          console.warn(`[agent-pool] Could not restore session position for ${chatJid} (cancelled) — leaf may no longer exist`);
        }
      } catch (err) {
        console.warn(`[agent-pool] Could not restore session position for ${chatJid}:`, err);
      }
    }
  }

  const savedName = loadSessionName(chatJid);
  if (savedName && !session.sessionName) {
    try {
      session.setSessionName(savedName);
      console.log(`[agent-pool] Restored session name for ${chatJid}: "${savedName}"`);
    } catch (err) {
      console.warn(`[agent-pool] Could not restore session name for ${chatJid}:`, err);
    }
  }

  return session;
}

export function sanitiseJid(jid: string): string {
  return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
