---
id: message-timeline-pdf-attachment-previews-do-not-render
title: Message timeline PDF attachment previews do not render
status: inbox
created: 2026-03-17
updated: 2026-03-17
tags:
  - work-item
  - kanban
  - web
  - timeline
  - pdf
  - attachments
owner: pi
---

# Message timeline PDF attachment previews do not render

## Summary

PDF attachment previews are not rendering in the message timeline.

## Updates

### 2026-03-17
- Ticket created from user report.
- Needs reproduction steps, scope confirmation, and root-cause triage.

## Notes

Likely areas to inspect:
- web timeline rendering pipeline for attachment/content blocks
- PDF preview pane/card integration for timeline posts
- attachment metadata/content block parsing differences between timeline and pane viewers

## Links

- `piclaw/web/src/components/timeline.ts`
- `piclaw/web/src/components/post-content.ts`
- `piclaw/web/src/panes/pdf-viewer-pane.ts`
