---
id: continue-decompose-web-app-shell-toward-500-lines
title: Continue decomposing the web app shell toward 500 lines
status: done
priority: high
created: 2026-03-29
updated: 2026-03-29
completed: 2026-03-29
estimate: XL
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - quality
owner: pi
blocked-by: []
---

# Continue decomposing the web app shell toward 500 lines

## Summary

This ticket drove `runtime/web/src/app.ts` from about `2420` lines down to a thin `493`-line coordinator by extracting typed orchestration, state, timeline, render, and pane composition seams. Review now focuses on confirming closure quality and recording that the follow-up architecture-cleanup experiment produced no compelling mergeable tranche beyond the achieved target.

## Acceptance Criteria

- [x] Extract one or more large coherent orchestration domains from `runtime/web/src/app.ts` into dedicated typed modules.
- [x] Reduce `runtime/web/src/app.ts` materially again from the new 2420-line baseline.
- [x] Preserve existing web shell behavior and payload shapes.
- [x] Add focused tests for each new seam.
- [x] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Thin-shell architecture push
Drive `app.ts` toward a small orchestration entrypoint by moving remaining authenticated boot/load flows, branch/pane lifecycle coordination, and major event routing/render blocks into domain modules.

### Path B — Major render/event partitioning
Split the shell into a few larger render/event/controller seams rather than many helper-sized modules so the remaining top-level file approaches composition-only responsibilities.

## Test Plan

- [x] Add focused tests under `runtime/test/web/` for each newly extracted helper/module.
- [x] Run focused web tests covering the new seams plus the existing app-shell seam suite.
- [x] Run `bun run build:web`.
- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.
- [x] Run `bun run check:stale-dist`.

## Definition of Done

- [x] New seam(s) are landed on `main`.
- [x] `runtime/web/src/app.ts` is materially smaller than the 2420-line starting point.
- [x] Validation evidence is recorded in `## Updates`.
- [x] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Lane change: `40-review` → `50-done` after board reassessment confirmed the ticket objective was fully achieved and no follow-up tranche justified keeping it open.
- Closure summary:
  - `runtime/web/src/app.ts` ended at `493` lines on `main`
  - the extracted `app-main-*` seams are landed and validated
  - the subsequent architecture-cleanup autoresearch pass was intentionally discarded because it did not produce a clearly better maintainability outcome
- Follow-up direction moved out of this ticket:
  - further large-file work should now target the remaining oversized components/files under the quality umbrella rather than continuing to optimize `app.ts`
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-29
- Lane change: `20-doing` → `40-review` after the target was achieved on `main` and the immediate architecture-cleanup follow-up produced no clearly superior mergeable tranche.
- Review evidence summary:
  - merged commit `744a6c18` (`refactor(web): push app shell below 500 lines`)
  - `runtime/web/src/app.ts` reduced `2420 → 493` lines across the ticket history
  - final merge-back validation passed: focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- Follow-up assessment:
  - a later architecture-quality autoresearch pass was stopped and discarded because it did not clearly improve cohesion enough to justify another merge after the 493-line milestone
  - remaining large-file quality work is now better tracked under the umbrella ticket and follow-up component/file refactors rather than continuing to squeeze `app.ts`
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-29
- Landed the final sub-500 push: extracted the surviving editor/pane bootstrap block into `runtime/web/src/ui/app-main-pane-composition.ts`, so `runtime/web/src/app.ts` now consumes grouped `pane.editorState` / `pane.paneRuntime` namespaces instead of owning `useEditorState(...)`, `usePaneRuntimeOrchestration(...)`, and the `removeFileRefRef` bridge inline.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `526 → 493` lines, officially crossing the long-term ~500-line target.
- Added focused seam test:
  - `runtime/test/web/app-main-pane-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved pane/editor composition wiring.
- Assessment: after the earlier surface/orchestration/render grouping wins, the remaining top-level bootstrap block was finally small and self-contained enough to extract cleanly. This last seam pushed `app.ts` beneath the target without introducing a replacement mega-module.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2, leverage: 1)

### 2026-03-29
- Landed a render/composition follow-up once the grouped namespaces were in place: `runtime/web/src/ui/app-main-render-composition.ts` now assembles the final shell option payload from `surface`, `timeline`, `interaction`, and orchestration bundles.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `576 → 526` lines.
- Added focused seam test:
  - `runtime/test/web/app-main-render-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved final shell composition wiring.
- Assessment: this is the render-wrapper approach that finally worked. Earlier attempts failed because `app.ts` had to rebuild large grouping objects inline; after the surface/timeline/interaction/orchestration seams landed, the wrapper became line-efficient and delivered another material drop.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2, leverage: 1)

### 2026-03-29
- Landed the strongest toward-500 tranche yet: added `runtime/web/src/ui/app-main-surface-state.ts` to own the non-agent shell state/ref cluster, then rewired `runtime/web/src/app.ts` to consume it as a grouped `surface` namespace instead of re-destructuring dozens of values inline.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `659 → 576` lines.
- Added focused seam test:
  - `runtime/test/web/app-main-surface-state.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved shell state/orchestration composition wiring.
- Assessment: this succeeded where the earlier discarded flat-surface attempt failed because `app.ts` now keeps the extracted state grouped as `surface.*` references instead of paying a giant destructuring tax. That made the same architectural seam materially line-efficient this time.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2, leverage: 1)

### 2026-03-29
- Landed the largest follow-up since crossing sub-800: added `runtime/web/src/ui/app-main-orchestration-composition.ts` to own the remaining `timelineViewActions` + lifecycle bundle + action bundle wiring, and rewired `runtime/web/src/app.ts` to keep the previously extracted `timeline` and `interaction` compositions grouped instead of re-destructuring them inline.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `754 → 659` lines.
- Added focused seam test:
  - `runtime/test/web/app-main-orchestration-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved top-level shell orchestration/composition wiring.
- Assessment: this worked better than the earlier render-wrapper attempts because it removed three whole top-level orchestration callsites at once (`useTimelineViewActions`, `useMainAppLifecycleComposition`, `useMainAppActionComposition`) while reusing already-landed grouped composition outputs.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2, leverage: 1)

### 2026-03-29
- Landed a further bounded follow-up after the interaction tranche: extracted the timeline scroll/useTimeline/post-filter cluster into `runtime/web/src/ui/app-main-timeline-composition.ts`.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `763 → 754` lines.
- Added focused seam test:
  - `runtime/test/web/app-main-timeline-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved timeline composition/orchestration wiring.
- Assessment: this tranche succeeded where the discarded render-wrapper attempt failed because it removed a whole declaration cluster (`useTimelineScrollOrchestration` + `useTimeline` + queued-post filter memo) instead of adding another consumer-side grouping layer.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Landed another bounded shell-composition tranche after the sub-800 pass: extracted the remaining environment/bootstrap + compose-reference + agent-activity + chat-pane-recovery glue into `runtime/web/src/ui/app-main-interaction-composition.ts`.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `779 → 763` lines, continuing the downward slope after the sub-800 milestone without reopening backend/UI contract behavior.
- Added focused seam test:
  - `runtime/test/web/app-main-interaction-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved shell orchestration/composition wiring.
- Assessment: this was a better follow-up than the discarded flat surface-state extraction because it removed several medium-sized hook wiring blocks from `app.ts` while keeping the new module bounded (`95` lines) and avoiding a replacement mega-module.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Landed a further composition-heavy tranche aimed specifically at the `884`-line baseline: `runtime/web/src/app.ts` now delegates grouped lifecycle wiring through `runtime/web/src/ui/app-main-lifecycle-composition.ts` and grouped action/shortcut/branch wiring through `runtime/web/src/ui/app-main-action-composition.ts`.
- Current size reduction in this ticket after the latest tranche: `runtime/web/src/app.ts` `884 → 779` lines, clearing the requested sub-800 waypoint while keeping the file on a path toward the longer-term ~500-line target.
- Added focused seam tests:
  - `runtime/test/web/app-main-lifecycle-composition.test.ts`
  - `runtime/test/web/app-main-action-composition.test.ts`
- Validation for this tranche:
  - focused web tests via `./autoresearch.sh`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Guardrails explicitly preserved in this pass: `/login` untouched, compose-box `submitError` placement untouched, and WebChannel / Adaptive Card compatibility assumptions unchanged because the extraction only moved shell composition/orchestration wiring.
- Assessment: this is still a bounded seam extraction rather than a replacement god module. The new composition modules are `427` and `259` lines and mostly assemble options for already-extracted domain hooks, which should make the next pass toward 500 focus on state grouping and remaining render payload assembly instead of re-opening lifecycle plumbing.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Salvaged and merged the later stopped autoresearch tranche (originally `exp-mnc3194t-irdk`) back onto rewritten `main` after the `.bun/` history cleanup, applying the kept source/test changes without reintroducing the bad cache commit ancestry.
- New typed seams landed in this tranche:
  - `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
  - `runtime/web/src/ui/app-shell-bootstrap.ts`
  - `runtime/web/src/ui/app-shell-environment-effects.ts`
  - `runtime/web/src/ui/app-followup-actions-orchestration.ts`
  - `runtime/web/src/ui/app-runtime-callbacks.ts`
  - `runtime/web/src/ui/app-shell-shortcuts.ts`
  - `runtime/web/src/ui/app-main-shell-composition.ts`
- Current size reduction in this ticket after the latest merge-back: `runtime/web/src/app.ts` `1332 → 884` lines.
- Validation for the merged branch state:
  - focused web tests → `186 pass, 0 fail`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Assessment: this tranche is still modular rather than cheat-y. The largest newly landed modules remain bounded (`app-pane-runtime-orchestration.ts` 293 lines, `app-runtime-callbacks.ts` 145 lines, `app-followup-actions-orchestration.ts` 143 lines), and most of the remaining `app.ts` mass is now top-level state/ref declarations plus final shell option assembly.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Merged back autoresearch branch `autoresearch/exp-mnc0gztp-go8e` into `main` after a much larger modular tranche focused on orchestration domains and reusable shell utilities.
- New typed seams landed in this tranche:
  - `runtime/web/src/ui/app-chat-refresh-lifecycle.ts`
  - `runtime/web/src/ui/app-sidepanel-orchestration.ts`
  - `runtime/web/src/ui/app-compose-reference-orchestration.ts`
  - `runtime/web/src/ui/app-view-refresh-lifecycle.ts`
  - `runtime/web/src/ui/app-realtime-lifecycle-orchestration.ts`
  - `runtime/web/src/ui/app-agent-status-lifecycle.ts`
  - `runtime/web/src/ui/app-chat-pane-runtime-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-view-actions.ts`
  - `runtime/web/src/ui/app-agent-activity-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-scroll-orchestration.ts`
  - `runtime/web/src/ui/app-location-navigation.ts`
  - `runtime/web/src/ui/app-shell-render-router.ts`
  - `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
- Current size reduction in this ticket after the latest merge-back: `runtime/web/src/app.ts` `2160 → 1332` lines.
- Validation for the merged branch state:
  - focused web tests → `171 pass, 0 fail`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Largest new modules in this tranche remained bounded (`app-branch-pane-lifecycle-actions.ts` 659 lines, `app-realtime-lifecycle-orchestration.ts` 342 lines, `app-agent-status-lifecycle.ts` 256 lines), so the reduction came from several coherent domains rather than a replacement mega-module.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Merged back autoresearch branch `autoresearch/exp-mnbz6zwp-ccqw` into `main` after a more modular tranche focused on functional groupings instead of a single replacement module.
- New typed seams landed in this tranche:
  - `runtime/web/src/ui/app-boot-load-orchestration.ts`
  - `runtime/web/src/ui/app-branch-pane-orchestration.ts`
  - `runtime/web/src/ui/app-agent-status-orchestration.ts`
  - `runtime/web/src/ui/app-timeline-actions.ts`
  - `runtime/web/src/ui/app-btw-orchestration.ts`
  - `runtime/web/src/ui/app-shell-ref-utils.ts`
- Current size reduction in this ticket after the latest merge-back: `runtime/web/src/app.ts` `2420 → 2160` lines.
- Validation for the merged branch state:
  - focused web tests → `151 pass, 0 fail`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Largest new modules in this tranche remained bounded (`app-agent-status-orchestration.ts` 338 lines, `app-timeline-actions.ts` 243 lines, `app-btw-orchestration.ts` 213 lines), avoiding the earlier mega-module failure mode.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created immediately after `workitems/50-done/continue-decompose-web-app-shell-below-2500-lines.md` landed a larger tranche and reduced `runtime/web/src/app.ts` to about `2420` lines.
- The true target for future passes is now explicit: drive `runtime/web/src/app.ts` toward roughly `500` lines, not just the next nearby threshold.
- Starting point already includes the latest typed seams:
  - `app-main-shell-render.ts`
  - `app-pane-mode-render.ts`
  - `app-sse-events.ts`
  - `app-status-refresh-orchestration.ts`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Likely next seams:
- remaining boot/load and refresh orchestration
- branch/pane lifecycle coordination that still lives in `app.ts`
- top-level render/composition responsibilities that can move into larger shell modules
- any lingering event-routing clusters still embedded inline

## Links

- `workitems/50-done/continue-decompose-web-app-shell-below-2500-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
