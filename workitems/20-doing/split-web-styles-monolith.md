---
id: split-web-styles-monolith
title: Split the web styles monolith into layered stylesheets
status: doing
priority: low
created: 2026-03-29
updated: 2026-03-29
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - css
  - quality
owner: pi
blocked-by: []
---

# Split the web styles monolith into layered stylesheets

## Summary

`runtime/web/static/css/styles.css` is now one of the largest remaining source files in the repo and materially exceeds the umbrella quality target.

The file currently mixes theme tokens, app-shell layout, workspace/tree chrome, editor/tab-strip rules, compose/timeline/post styling, markdown/content rendering, overlays/modals, and global responsive breakpoints in one stylesheet.

A fresh assessment puts the file at roughly **6663 lines**, with several already-visible seam clusters:

- theme/reset/base globals
- app shell + workspace sidebar/tree/preview chrome
- editor pane + tab strip + markdown preview + dock + zen mode + CodeMirror theme
- compose/search/footer/timeline shell
- post/markdown/adaptive-card/link-preview/content rendering
- agent-status / thinking / request modal / global overlays
- image + attachment + floating-widget overlays
- end-of-file responsive viewport breakpoints

The safest implementation is to keep the current build/runtime contract unchanged and turn `styles.css` into an **ordered manifest** that imports smaller partials without renaming selectors or changing selector specificity in the first tranche.

## Acceptance Criteria

- [ ] `runtime/web/static/css/styles.css` is reduced to a thin ordered manifest or equivalent import entrypoint.
- [ ] The monolithic rules are split into a small set of purpose-based stylesheets with clear ownership boundaries.
- [ ] Existing selector names and runtime CSS loading contracts stay unchanged in the first tranche.
- [ ] No visual regressions are introduced in the main chat UI and major panes.
- [ ] Build/static serving behavior stays unchanged.
- [ ] Manual verification notes are recorded for the touched UI surfaces.

## Implementation Paths

### Path A — Ordered manifest + layered partials (recommended)
Keep `runtime/web/src/styles/app.css` and the emitted `/static/dist/app.bundle.css` contract unchanged. Replace most of `runtime/web/static/css/styles.css` with a small ordered set of `@import` statements so the cascade stays explicit while the source becomes maintainable.

Recommended target file set:

1. `runtime/web/static/css/styles.css` — manifest only, import order + section map
2. `runtime/web/static/css/base.css` — variables, theme overrides, reset, base elements, shared animations/utilities
3. `runtime/web/static/css/shell.css` — app shell, container/header, floating buttons, generic shell affordances
4. `runtime/web/static/css/workspace.css` — workspace sidebar, tree, preview, splitters, popout/workspace chrome
5. `runtime/web/static/css/editor.css` — tab strip, editor body, markdown preview pane, dock, zen mode, CodeMirror styling
6. `runtime/web/static/css/chat.css` — search/header chips, compose box, compose metadata, queue/footer, timeline shell
7. `runtime/web/static/css/content.css` — posts, markdown rendering, tables/code blocks, adaptive cards, link previews, generated-widget launch cards
8. `runtime/web/static/css/agent.css` — agent status, thinking panels, autoresearch charts, request modal, loading/connection states
9. `runtime/web/static/css/overlays.css` — image modal, attachment preview modal, floating widget pane, body-level overlay chrome
10. `runtime/web/static/css/responsive.css` — global viewport breakpoints and remaining cross-surface responsive overrides

Why this is the safest path:

- preserves the current bundle entrypoint (`runtime/web/src/styles/app.css`)
- preserves lazy-loaded dedicated files like `kanban.css` and `mindmap.css`
- keeps cascade order explicit instead of relying on filesystem/import accidents
- allows a mostly mechanical move-first pass before any visual cleanup work

### Path B — Component-adjacent extraction
Move rules toward feature/component-specific CSS files near the consuming web component/pane first, then add a shared base layer later.

Why this is not preferred for tranche one:

- larger import graph change surface
- higher risk of order/specificity regressions
- mixes architecture cleanup with CSS ownership redesign
- more likely to collide with ongoing app-shell decomposition work

### Path C — Semantic redesign during split
Use the split as an opportunity to normalize selector names, dedupe legacy rules, and rework responsive behavior.

Reject for this ticket’s first implementation pass:

- too much risk for a quality/refactor ticket
- makes regressions harder to localize
- obscures whether failures come from file movement or behavior changes

## Test Plan

- [ ] Run `bun run build:web` after the import-manifest conversion and again after the final extraction pass.
- [ ] Run `bun run check:stale-dist` after the final CSS import graph settles.
- [ ] Smoke-check authenticated web UI in these states:
  - [ ] chat-only view
  - [ ] editor-open split view
  - [ ] workspace tree + preview
  - [ ] markdown preview pane
  - [ ] compose box with attachments / queue / active-agent pill
  - [ ] timeline posts with markdown tables, code blocks, adaptive cards, and link previews
  - [ ] agent status / thinking / autoresearch panel
  - [ ] image modal and attachment preview modal
  - [ ] floating widget pane / overlay surfaces
  - [ ] mobile-width layout
- [ ] Record visual verification notes and any remaining cleanup follow-ups in `## Updates`.

## Definition of Done

- [ ] `styles.css` is no longer the sole large stylesheet body and instead acts as a stable manifest or equivalent thin entry layer.
- [ ] New partials have clear ownership boundaries and comments documenting what belongs where.
- [ ] The main web UI still renders correctly after the split.
- [ ] Validation evidence is recorded in `## Updates`.
- [ ] Any post-split cleanup intentionally deferred (dedupe, selector normalization, visual polish) is explicitly listed.

## Notes

### Current assessment

- `runtime/web/src/styles/app.css` currently imports `../../static/css/styles.css`, so the safest split point is **inside** `runtime/web/static/css/` without changing the app bundle entrypoint.
- `runtime/web/static/index.html` consumes `/static/dist/app.bundle.css`; that contract should remain untouched.
- `mindmap.css` and `kanban.css` are already separate and loaded on demand by pane code; they should remain separate rather than being reabsorbed into this split.
- The existing monolith already contains useful section markers, which means the split can be done mostly as a **structured move** rather than a semantic rewrite.
- The biggest regression risk is **cascade/order drift**, not file creation itself.

### Proposed source-to-target mapping

| Current seam | Approx current line range | Proposed target file |
|---|---:|---|
| Theme tokens, dark/light overrides, reset, base layout primitives | `1–171` | `base.css` |
| App shell, container, shared shell layout | `172–~430` | `shell.css` |
| Workspace sidebar/tree/preview/splitters | `~431–1231` | `workspace.css` |
| Editor pane, tab strip, markdown preview, dock, zen mode, CodeMirror | `1232–2272` | `editor.css` |
| Search/header utility bits + compose UI | `2273–3391` | `chat.css` |
| Timeline/posts/markdown/adaptive cards/link previews/content blocks | `3392–4943` | `content.css` |
| Agent status/thinking/autoresearch/request-modal/loading/connection | `4944–6075` | `agent.css` |
| Image modal, attachment preview, floating widget overlays | `6076–6396` | `overlays.css` |
| Global viewport breakpoints and desktop/mobile tuning | `6397–end` | `responsive.css` |

Approximate ranges are intentional; exact cut points should follow section comments and be adjusted only when a selector clearly belongs with a neighboring cluster.

### Concrete execution steps

1. **Create the manifest skeleton**
   - Convert `runtime/web/static/css/styles.css` into a documented manifest with ordered imports.
   - Keep imports in this order:
     1. `base.css`
     2. `shell.css`
     3. `workspace.css`
     4. `editor.css`
     5. `chat.css`
     6. `content.css`
     7. `agent.css`
     8. `overlays.css`
     9. `responsive.css`
   - Do not change `runtime/web/src/styles/app.css` in this ticket unless bundling requires a minimal path tweak.

2. **Move global foundations first**
   - Extract variables, theme overrides, reset, root sizing, body/app shell primitives, and shared keyframes/utilities into `base.css`.
   - Ensure any variable consumed later (`--chat-surface-*`, theme colors, font stacks, shared radii, shared shadows) remains defined before later imports.

3. **Move layout chrome without selector changes**
   - Extract shell chrome to `shell.css`.
   - Extract workspace/sidebar/tree/preview/splitters to `workspace.css`.
   - Keep existing class names untouched.
   - Do not mix in editor/tab-strip rules yet.

4. **Move editor-focused rules as one tranche**
   - Extract tab strip, context menu, editor body/status, markdown preview panel, dock panel, zen mode, CodeMirror theme overrides into `editor.css`.
   - Keep `prefers-color-scheme` and `[data-theme]` overrides adjacent to the owning editor rules so theme logic does not get split across files unnecessarily.

5. **Move chat and content separately**
   - Extract compose/search/footer/meta/timeline-shell rules into `chat.css`.
   - Extract posts/markdown tables/code blocks/adaptive cards/link previews/widget-launch cards into `content.css`.
   - Keep the recent markdown table/header anti-collapse rules with the rest of markdown table styling in `content.css`.

6. **Move overlays and agent surfaces last**
   - Extract agent status / thinking / request modal / loading / connection styles into `agent.css`.
   - Extract image modal / attachment preview / floating widget overlay chrome into `overlays.css`.
   - Preserve current z-index ordering and fixed-position rules exactly during the first pass.

7. **Consolidate responsive rules carefully**
   - Move the end-of-file global mobile/tablet/desktop blocks into `responsive.css`.
   - Keep narrowly scoped local media queries next to their owning partial when they are component-specific and order-sensitive (for example small feature-local layout tweaks), unless they clearly belong in the global responsive layer.

8. **Stabilize and document boundaries**
   - Add short banner comments at the top of each new partial describing ownership and exclusions.
   - Note explicitly that `kanban.css`, `mindmap.css`, and `katex.bundle.css` are out of scope for this split.

9. **Only after the split is stable, create follow-up cleanup tickets**
   - selector deduping
   - shared utility extraction
   - any visual polish/regression cleanup found during verification

### Non-goals for this ticket

- Renaming selectors or converting to a new naming convention
- Re-theming or redesigning surfaces while files are moving
- Absorbing `kanban.css` / `mindmap.css` into the shared web stylesheet stack
- Rewriting the CSS architecture around component-local CSS modules

## Updates

### 2026-03-29
- Board reassessment: retained in `20-doing` instead of promoting to review because the structural split is landed but one last smoke pass is still warranted for richer content/overlay surfaces.
- Current status after reassessment:
  - `runtime/web/static/css/styles.css` is already a thin `16`-line manifest
  - the layered partial split is in place and validated by `bun run build:web` plus `bun run check:stale-dist`
  - desktop/mobile/editor-open/attachment-preview smoke coverage is recorded under `generated/css-smoke/`, `generated/css-smoke-deep/`, and `generated/css-smoke-overlays/`
- Remaining review gap before promotion:
  - recheck a timeline with true inline image-modal click-through plus markdown/adaptive-card/link-preview-heavy content so the split can move to review with stronger visual confidence
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-29
- Began the first implementation tranche on branch `feature/split-web-styles-monolith` using the ordered-manifest approach.
- Converted `runtime/web/static/css/styles.css` into a thin ordered manifest importing:
  - `base.css`
  - `shell.css`
  - `workspace.css`
  - `editor.css`
  - `chat.css`
  - `content.css`
  - `agent.css`
  - `overlays.css`
  - `responsive.css`
- Performed a move-first extraction of the existing rules into those partials without renaming selectors or changing the bundle entrypoint (`runtime/web/src/styles/app.css` remains unchanged).
- Current stylesheet sizes after the split:
  - `styles.css` → 16 lines
  - `base.css` → 177 lines
  - `shell.css` → 128 lines
  - `workspace.css` → 944 lines
  - `editor.css` → 1020 lines
  - `chat.css` → 1152 lines
  - `content.css` → 1558 lines
  - `agent.css` → 1138 lines
  - `overlays.css` → 327 lines
  - `responsive.css` → 274 lines
- Validation so far:
  - `bun run build:web`
  - `bun run check:stale-dist`
- Performed an initial Playwright smoke pass against the live web UI on desktop and mobile widths:
  - desktop: app shell, container, compose box, timeline, workspace sidebar, and agent status all present
  - mobile: app shell, container, compose box, timeline, workspace sidebar, and agent status all present
- Performed a follow-up Playwright interaction pass and confirmed the editor-open state still renders after the split:
  - clicked `AGENTS.md` from the workspace sidebar
  - confirmed `.editor-pane-container` and `.tab-strip` appeared
  - compose box and timeline remained present while the editor pane opened
  - selected workspace row state remained visible
- Performed an overlay-focused Playwright smoke pass:
  - attachment preview modal opened successfully from a timeline attachment preview control
  - confirmed `.attachment-preview-modal` / `.attachment-preview-shell` rendered with the expected title for the selected file
  - no inline post-content images were present in the current timeline snapshot, so true image-modal click-through coverage is still pending on a chat that contains clickable inline images
- Captured smoke artifacts under `generated/css-smoke/`, `generated/css-smoke-deep/`, and `generated/css-smoke-overlays/` for follow-up review.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-29
- Performed a fresh split assessment before coding the refactor.
- Confirmed the current monolith is about `6663` lines and already has natural section boundaries that map cleanly to a manifest-driven extraction plan.
- Confirmed the safest contract is to keep `runtime/web/src/styles/app.css` and `/static/dist/app.bundle.css` unchanged, and split under `runtime/web/static/css/` instead.
- Defined a concrete target file map: `base.css`, `shell.css`, `workspace.css`, `editor.css`, `chat.css`, `content.css`, `agent.css`, `overlays.css`, and `responsive.css`, with `styles.css` reduced to an ordered manifest.
- Explicitly scoped tranche-one work to **move-first, no selector renames**, because cascade/order stability is the main risk surface.
- Expanded the test plan into a surface-by-surface smoke checklist covering compose, timeline, markdown rendering, overlays, agent panels, and mobile layout.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Lane change: `10-next` → `20-doing` by user request so the CSS split can be staged in parallel with the app-shell decomposition follow-up.
- Chosen implementation path: **Path A — Layered stylesheet split**.
- No code changes started yet in this tranche; the active implementation focus is currently on `continue-decompose-web-app-shell` first.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

### 2026-03-29
- Created from the umbrella follow-up list so the oversized CSS monolith is tracked as a real ticket instead of a placeholder note.
- This is a P3 quality item, not a prerequisite for the already-closed structural runtime refactors.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `runtime/web/src/styles/app.css`
- `runtime/web/static/css/styles.css`
- `runtime/web/static/css/kanban.css`
- `runtime/web/static/css/mindmap.css`
- `runtime/web/static/index.html`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
