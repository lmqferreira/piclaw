# `piclaw` — A `pi`-based general-purpose agent

![PiClaw](docs/icon-256.png)

PiClaw is a Docker-based sandbox for running the [Pi Coding Agent](https://github.com/badlogic/pi-mono) in an isolated Debian environment. It bundles `piclaw` — a web-first orchestrator built on the Pi SDK with persistent sessions, a streaming web UI, and scheduled tasks. WhatsApp is optional. Inspired by [agentbox](https://github.com/rcarmo/agentbox) and [nanoclaw](https://github.com/qwibitai/nanoclaw).

## Highlights

![Demo Animation](docs/demo.gif)

- **Streaming web UI** — real-time token-by-token updates over SSE, with Markdown, KaTeX, and Mermaid rendering
- **Workspace explorer** — file tree sidebar with previews, file reference pills, and downloads
- **Disk usage starburst** — folder-size visualization with hover details and drill-down
- **Code editor** — built-in CodeMirror 6 with syntax highlighting for 12 languages, search/replace, and save
- **Persistent storage** — SQLite-backed messages, media, tasks, token usage, and encrypted keychain
- **Skills** — setup, debugging, Playwright, scheduling, charts, web search, and more
- **Passkeys + TOTP authentication** — optional WebAuthn passkeys with TOTP fallback (iOS/Android webapp support)
- **WhatsApp** — optional secondary channel

## Quick Start

```bash
make build    # Build the Docker image
make up       # Start the container (supervisord launches piclaw)
```

Open `http://localhost:8080` in your browser. To use `pi` interactively instead:

```bash
docker exec -u agent -it piclaw bash
cd /workspace && pi
```

### Setting up provider credentials

The easiest way to set up model/provider credentials is from the **terminal pane** in the web UI:

1. Open the web UI.
2. Click the **terminal** button to open the terminal pane.
3. Run `pi /login`.
4. Follow the provider flow:
   - for OAuth/device-login providers, complete the browser/device-code sign-in
   - for API-key-based providers, enter or configure the required key/secret as prompted

This stores credentials in the agent profile inside the container, so the web UI and tools can reuse them afterwards.

If you prefer, you can do the same via `docker exec` or `/shell <command>` in the web UI. See [docs/configuration.md](docs/configuration.md) for details.

## Web UI

The UI is single-user, mobile-friendly, and streams updates over SSE:

- **Thought/Draft panels** — visible during streaming
- **Live steering** — send follow-ups while the agent is still responding
- **File attachments** with download links
- **Link previews** via server-side OpenGraph fetch
- **Multi-turn threading** — subsequent turns are visually threaded under the first
- **Themes + tinting** — presets plus `/theme` and `/tint` commands (Solarized auto light/dark)
- **Terminal pane** — open a shell inside the container for setup tasks like running `pi /login` to add provider credentials
- **Mobile-first layout** with webapp manifest

### Workspace explorer

The sidebar shows a file tree of `/workspace` with auto-refresh. Click a file to preview it or add a **file reference pill** to the next prompt. Drag and drop files onto the tree to upload them. It also includes a **folder-size starburst** preview with hover details and drill-down.

### Code editor

Click the **pencil icon** on any text file preview (up to 256 KB) to open the built-in editor. It appears as a resizable centre pane between the sidebar and the chat.

- **12 languages** — JS/TS (JSX/TSX), Python, Go, JSON, CSS, HTML, YAML, SQL, XML/SVG, Markdown, Shell
- **Search and replace** — Cmd/Ctrl+F and Cmd/Ctrl+H
- **Save** — Cmd/Ctrl+S or the Save button; dirty state is tracked
- **Line wrapping**, line numbers, and active line highlight
- **Vendored bundle** (~245 KB gzip) — no external CDN dependencies

## Volumes

| Mount | Container path | Contents |
|-------|---------------|----------|
| Home | `/config` | Agent home (`.pi/`, `.gitconfig`, `.bashrc`) |
| Workspace | `/workspace` | Projects, piclaw state, notes |

**Never delete** `/workspace/.piclaw/store/messages.db` — it holds all chat history, media, and tasks.

## Configuration

Key environment variables:

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_WEB_PORT` | `8080` | Web UI port |
| `PICLAW_WEB_TOTP_SECRET` | _(empty)_ | Base32 TOTP secret; enables login gate |
| `PICLAW_WEB_PASSKEY_MODE` | `totp-fallback` | Passkey mode: `totp-fallback`, `passkey-only`, or `totp-only` |
| `PICLAW_ASSISTANT_NAME` | `PiClaw` | Display name in the UI |
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypted secret storage |

For the full list (TLS, reverse proxies, timeouts, Pushover, WhatsApp, keychain, external workspaces), see [docs/configuration.md](docs/configuration.md).

### Reverse proxies / tunnels

If piclaw is running behind a reverse proxy or tunnel (for example Cloudflare Tunnel, Caddy, or Nginx TLS termination), enable proxy trust:

```bash
PICLAW_TRUST_PROXY=1
```

See [docs/reverse-proxy.md](docs/reverse-proxy.md) for the full operator guide, required forwarded headers, Cloudflare Tunnel example, generic reverse-proxy examples, and troubleshooting notes.

## Development

```bash
make build-piclaw    # Full build: vendor bundle + web assets + TypeScript
make vendor          # Rebuild CodeMirror vendor bundle only
make lint            # ESLint
make test            # Run all tests
make local-install   # Pack, install globally, and restart piclaw
```

Tests use the Bun runner (`cd piclaw && bun test`). Sequential mode is recommended for SQLite safety (`--max-concurrency=1`).

## CI / Release

Pushing a version tag triggers `.github/workflows/publish.yml` — multi-arch builds (amd64 + arm64) published to GHCR.

```bash
make bump-patch   # bump patch version, commit, and tag
make bump-minor   # bump minor version, commit, and tag
make push         # push commits + tag → triggers CI
```

## Container runtime

PiClaw works with any OCI-compliant runtime:

- **Docker** / Docker Desktop — primary target
- **Apple Containers** (macOS 26+)
- **Podman**, **nerdctl**, etc.

## Documentation

- [Configuration](docs/configuration.md) — all env vars, TOTP, TLS, keychain, Pushover, WhatsApp
- [Reverse proxy / Cloudflare Tunnel](docs/reverse-proxy.md) — trust-proxy setup, forwarded headers, examples, troubleshooting
- [Architecture](docs/architecture.md) — codebase layout and design decisions
- [Storage model](docs/storage.md) — SQLite schema and data lifecycle
- [Runtime flows](docs/runtime-flows.md) — message processing, queue/steering, and crash recovery
- [Tools and skills](docs/tools-and-skills.md) — built-in tools and skill catalogue
- [Keychain](docs/keychain.md) — encrypted secret storage
- [WhatsApp](docs/whatsapp.md) — optional WhatsApp integration
- [Turn mechanism audit](docs/turn-mechanism-audit.md) — full-stack audit: state machine, queue/steering, crash recovery, client architecture

## Credits

- [rcarmo/agentbox](https://github.com/rcarmo/agentbox)
- [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

## Licence

MIT
