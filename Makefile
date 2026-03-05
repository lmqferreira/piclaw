# Makefile – Top-level build/dev targets for the piclaw project.
#
# Targets:
#   vendor         – Bundle vendored CodeMirror (minified ESM).
#   build-web      – Copy web frontend TS sources to static/js/.
#   build-ts       – Compile TypeScript to dist/.
#   build-piclaw   – Full build: vendor + build-web + build-ts.
#   pack           – Pack piclaw into a .tgz (depends on build-piclaw).
#   local-install  – Pack, install globally, and restart (full cycle).
#   lint/test      – Run ESLint and bun test suite.
#   up/down/enter  – Docker Compose lifecycle helpers.
#   sync-version   – Sync package.json version to VERSION file.
#   bump-*         – Version bump helpers.
#   push           – Push commits and current tag to origin.

IMAGE ?= pibox
TAG ?= latest
FULL_IMAGE := $(IMAGE):$(TAG)
REGISTRY ?= ghcr.io
GHCR_OWNER ?= $(shell whoami)
GHCR_IMAGE := $(REGISTRY)/$(GHCR_OWNER)/$(IMAGE):$(TAG)

GLOBAL_PKG := /home/agent/.bun/install/global/package.json
GLOBAL_LOCK := /home/agent/.bun/install/global/bun.lock
PI_AGENT_VERSION ?= ^0.55.4

.PHONY: help up down enter build build-piclaw build-web build-ts vendor pack \
        local-install restart lint test test-coverage \
        dual-tag tag-ghcr sync-version bump-minor bump-patch push

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

# ── Docker ────────────────────────────────────────────────────────────

up: ## Start the container in detached mode
	docker compose up -d

down: ## Stop and remove the container
	docker compose down

enter: ## Enter the running container as agent
	docker exec -u agent -it pibox bash

build: ## Build Docker image
	docker build -t $(FULL_IMAGE) .

# ── Build pipeline ───────────────────────────────────────────────────

vendor: ## Bundle vendored CodeMirror (minified ESM)
	cd piclaw && bun build web/src/vendor/codemirror-entry.ts \
		--target=browser --format=esm --minify \
		--outfile web/static/js/vendor/codemirror.js
	@ls -lh piclaw/web/static/js/vendor/codemirror.js

build-web: ## Copy web TS sources to static/js/
	cd piclaw && bun run build:web

build-ts: ## Compile TypeScript to dist/
	cd piclaw && bun run build

build-piclaw: vendor build-web build-ts ## Full build: vendor + web + ts

# ── Pack & install ───────────────────────────────────────────────────

pack: build-piclaw ## Pack piclaw into a .tgz
	cd piclaw && bun pm pack
	@ls -lh piclaw/piclaw-*.tgz

restart: ## Restart piclaw via supervisorctl
	supervisorctl restart piclaw 2>/dev/null || true
	@sleep 2
	@supervisorctl status piclaw 2>/dev/null || true

local-install: pack ## Pack, install globally, and restart piclaw
	@set -e; \
	VERSION=$$(jq -r .version piclaw/package.json); \
	TGZ="$$(realpath piclaw/piclaw-$${VERSION}.tgz)"; \
	echo "[local-install] Installing v$${VERSION} globally..."; \
	printf '{"dependencies":{"@mariozechner/pi-coding-agent":"$(PI_AGENT_VERSION)","piclaw":"%s"}}\n' \
		"$$TGZ" > $(GLOBAL_PKG); \
	rm -f $(GLOBAL_LOCK); \
	BUN_INSTALL_CACHE_DIR=/tmp/bun-cache bun install -g "$$TGZ" \
		--registry https://registry.npmjs.org; \
	rm -f "$$TGZ"; \
	echo "[local-install] Restarting piclaw..."; \
	$(MAKE) restart; \
	echo "[local-install] Done (v$${VERSION})"

# ── Quality ──────────────────────────────────────────────────────────

lint: ## Lint piclaw sources
	cd piclaw && bun run lint

test: ## Run piclaw tests
	cd piclaw && bun run test

test-coverage: ## Run piclaw tests with coverage
	cd piclaw && bun run test:coverage

# ── Versioning ───────────────────────────────────────────────────────

sync-version: ## Sync piclaw/package.json version with VERSION
	@set -e; \
	VERSION=$$(cat VERSION); \
	tmp=$$(mktemp); \
	jq --arg version "$$VERSION" '.version=$$version' piclaw/package.json > $$tmp; \
	mv $$tmp piclaw/package.json; \
	echo "Synced piclaw/package.json to version $$VERSION"

bump-minor: ## Bump minor version, build, commit, and tag
	@OLD=$$(cat VERSION); \
	MAJOR=$$(echo $$OLD | cut -d. -f1); \
	MINOR=$$(echo $$OLD | cut -d. -f2); \
	NEW="$$MAJOR.$$((MINOR + 1)).0"; \
	echo $$NEW > VERSION; \
	$(MAKE) sync-version; \
	$(MAKE) build-piclaw; \
	git add VERSION piclaw/package.json piclaw/dist piclaw/web/static/js; \
	git commit -m "Bump version to $$NEW"; \
	git tag "v$$NEW"; \
	echo "Bumped version: $$OLD -> $$NEW (tagged v$$NEW)"

bump-patch: ## Bump patch version, build, commit, and tag
	@OLD=$$(cat VERSION); \
	MAJOR=$$(echo $$OLD | cut -d. -f1); \
	MINOR=$$(echo $$OLD | cut -d. -f2); \
	PATCH=$$(echo $$OLD | cut -d. -f3); \
	NEW="$$MAJOR.$$MINOR.$$((PATCH + 1))"; \
	echo $$NEW > VERSION; \
	$(MAKE) sync-version; \
	$(MAKE) build-piclaw; \
	git add VERSION piclaw/package.json piclaw/dist piclaw/web/static/js; \
	git commit -m "Bump version to $$NEW"; \
	git tag "v$$NEW"; \
	echo "Bumped version: $$OLD -> $$NEW (tagged v$$NEW)"

# ── Release ──────────────────────────────────────────────────────────

push: ## Push commits and current tag to origin
	@TAG=$$(git describe --tags --exact-match 2>/dev/null); \
	git push origin main; \
	if [ -n "$$TAG" ]; then \
		echo "Pushing tag $$TAG..."; \
		git push origin "$$TAG"; \
	else \
		echo "No tag on current commit"; \
	fi

dual-tag: build ## Tag image as ghcr.io/<user>/<image>:<tag>
	docker tag $(FULL_IMAGE) $(GHCR_IMAGE)

tag-ghcr: dual-tag ## Convenience alias for dual-tag
