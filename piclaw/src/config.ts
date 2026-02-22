import { resolve } from "path";
import { readEnvFile } from "./env.js";

const envConfig = readEnvFile(["ASSISTANT_NAME", "PUSHOVER_APP_TOKEN", "PUSHOVER_USER_KEY", "PUSHOVER_DEVICE", "PUSHOVER_PRIORITY", "PUSHOVER_SOUND"]);

export const ASSISTANT_NAME = process.env.ASSISTANT_NAME || envConfig.ASSISTANT_NAME || "PiClaw";
export const POLL_INTERVAL = 2000;
export const SCHEDULER_POLL_INTERVAL = 60000;

// All paths are env-configurable so they work with any volume layout.
// Defaults assume /workspace is the persistent external volume.
export const WORKSPACE_DIR = resolve(process.env.PICLAW_WORKSPACE || "/workspace");
export const STORE_DIR = resolve(process.env.PICLAW_STORE || `${WORKSPACE_DIR}/.piclaw/store`);
export const DATA_DIR = resolve(process.env.PICLAW_DATA || `${WORKSPACE_DIR}/.piclaw/data`);

export const AGENT_TIMEOUT = parseInt(process.env.AGENT_TIMEOUT || "600000", 10); // 10min default
export const IPC_POLL_INTERVAL = 1000;

const CLI_ARGS = process.argv.slice(2);

function readCliArg(name: string, alias?: string): string | undefined {
  const names = [name, alias].filter(Boolean) as string[];
  for (let i = 0; i < CLI_ARGS.length; i += 1) {
    const arg = CLI_ARGS[i];
    for (const flag of names) {
      if (arg === flag) {
        return CLI_ARGS[i + 1];
      }
      if (arg.startsWith(`${flag}=`)) {
        return arg.slice(flag.length + 1);
      }
    }
  }
  return undefined;
}

function parsePort(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

const ENV_WEB_PORT = parseInt(process.env.PICLAW_WEB_PORT || "8080", 10);
const CLI_WEB_PORT = readCliArg("--port", "-p");
const CLI_WEB_HOST = readCliArg("--host");
const ENV_WEB_IDLE_TIMEOUT = parseInt(process.env.PICLAW_WEB_IDLE_TIMEOUT || "0", 10);
const CLI_WEB_IDLE_TIMEOUT = readCliArg("--idle-timeout");

export const WEB_PORT = parsePort(CLI_WEB_PORT, ENV_WEB_PORT);
export const WEB_HOST = CLI_WEB_HOST || process.env.PICLAW_WEB_HOST || "0.0.0.0";
export const WEB_IDLE_TIMEOUT = parsePort(CLI_WEB_IDLE_TIMEOUT, ENV_WEB_IDLE_TIMEOUT);

export const SESSIONS_DIR = resolve(DATA_DIR, "sessions");

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const TRIGGER_PATTERN = new RegExp(`(?:^|\\s)@${escapeRegex(ASSISTANT_NAME)}\\b`, "i");
export const TIMEZONE = process.env.TZ || Intl.DateTimeFormat().resolvedOptions().timeZone;

// Pushover notification channel
export const PUSHOVER_APP_TOKEN = process.env.PUSHOVER_APP_TOKEN || envConfig.PUSHOVER_APP_TOKEN || "";
export const PUSHOVER_USER_KEY = process.env.PUSHOVER_USER_KEY || envConfig.PUSHOVER_USER_KEY || "";
export const PUSHOVER_DEVICE = process.env.PUSHOVER_DEVICE || envConfig.PUSHOVER_DEVICE || "";
export const PUSHOVER_PRIORITY = parseInt(process.env.PUSHOVER_PRIORITY || envConfig.PUSHOVER_PRIORITY || "0", 10);
export const PUSHOVER_SOUND = process.env.PUSHOVER_SOUND || envConfig.PUSHOVER_SOUND || "";
