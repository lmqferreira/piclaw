#!/usr/bin/env bash
# scripts/docker/build-piclaw-package.sh – Build piclaw .tgz and install globally.
#
# Runs bun update, tsc, bun pack, then `bun add -g` to let bun handle
# the global install layout under $BUN_INSTALL.
#
# Build pipeline:
#   1. `bun run build`     – tsc: type-checks and emits dist/ (legacy; nothing
#                            uses dist/ at runtime since bun runs .ts directly)
#   2. `bun run build:web` – Copies web/src/*.ts to web/static/js/*.js and
#                            bundles vendored CodeMirror via `bun build --minify`
#   3. `bun pm pack`       – Creates the tarball for global install
#
# TODO: Replace the copy-based build:web with `bun build --minify` to produce
#   a single minified app.bundle.js. Vendor libs (preact-htm, codemirror,
#   katex, marked, mermaid) should stay as separate pre-built files.
#
# TODO: Exclude dist/ from the tarball (add to .npmignore or use package.json
#   "files" field). The bin entry points to src/index.ts, not dist/.
#
# TODO: Auth-gate the app bundle. Currently /static/ is whitelisted past auth
#   in request-router-service.ts, so the full app JS is served to
#   unauthenticated users. login.html is already self-contained. Either move
#   the bundle behind an auth-gated path or split the static whitelist.
set -euo pipefail

export BUN_INSTALL="${BUN_INSTALL:-/usr/local/lib/bun}"
export PATH="$BUN_INSTALL/bin:/home/linuxbrew/.linuxbrew/bin:$PATH"

cd /home/agent/piclaw

bun update
bun install
bun run build
bun run build:web

rm -f piclaw-*.tgz
PACK_DIR="$(mktemp -d)"
bun pm pack --outdir "$PACK_DIR"

TARBALL="$(find "$PACK_DIR" -maxdepth 1 -name 'piclaw-*.tgz' | head -n1)"
if [ -z "$TARBALL" ] || [ ! -f "$TARBALL" ]; then
  TARBALL="$(find . -maxdepth 1 -name 'piclaw-*.tgz' | head -n1)"
fi
if [ -z "$TARBALL" ] || [ ! -f "$TARBALL" ]; then
  echo "piclaw tarball not found" >&2
  exit 1
fi

# Use an absolute path so bun add -g works reliably under sudo/buildkit.
TARBALL="$(realpath "$TARBALL")"

sudo BUN_INSTALL="$BUN_INSTALL" "$BUN_INSTALL/bin/bun" add -g "$TARBALL"

rm -f "$TARBALL"
rm -rf "$PACK_DIR"

# Ensure world-readable after install
sudo chmod -R a+rX "$BUN_INSTALL"

# Symlink piclaw into /usr/local/bin if bun placed it under $BUN_INSTALL/bin
if [ -f "$BUN_INSTALL/bin/piclaw" ]; then
  sudo ln -sf "$BUN_INSTALL/bin/piclaw" /usr/local/bin/piclaw
fi
