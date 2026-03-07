#!/usr/bin/env bun
/**
 * index.ts – Application entry point.
 *
 * Checks for CLI sub-commands (keychain, --help, --version) first.
 * If none match, starts the full runtime (database, channels, agent pool,
 * IPC watcher, task scheduler, and web server).
 */

// Patch console.log/warn/error to prepend ISO 8601 timestamps on every line.
// This ensures /var/log/piclaw.log is always correlated to wall-clock time.
(function patchConsole() {
  const ts = () => new Date().toISOString();
  const _log   = console.log.bind(console);
  const _warn  = console.warn.bind(console);
  const _error = console.error.bind(console);
  console.log   = (...args) => _log(ts(),   ...args);
  console.warn  = (...args) => _warn(ts(),  ...args);
  console.error = (...args) => _error(ts(), ...args);
})();

import { handleCliOptions } from "./cli.js";
import { main } from "./runtime.js";

const handled = await handleCliOptions();
if (handled) {
  process.exit(0);
}

main().catch((err) => {
  console.error("[piclaw] Fatal:", err);
  process.exit(1);
});
