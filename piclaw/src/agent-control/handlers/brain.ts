import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../../agent-control/agent-control-types.js";
import { classifyThought, resolveEntryByQuery } from "../../brain/classify.js";
import {
  insertEntry,
  getRecentEntries,
  getCategoryStats,
  formatEntryForDigest,
  markEntryDone,
  markEntryArchived,
  findEntriesByName,
  getAllActiveEntries,
  getDuplicateGroups,
  archiveDuplicates,
  writeUndoLog,
  applyUndo,
  updateEntryCategory,
  getEntryById,
} from "../../brain/db.js";

type CaptureCommand = Extract<AgentControlCommand, { type: "capture" }>;
type SbCommand = Extract<AgentControlCommand, { type: "sb" }>;

const CATEGORY_EMOJI: Record<string, string> = {
  people: "👤",
  projects: "🪜",
  ideas: "💡",
  admin: "📋",
};

const SUBCOMMANDS = ["ls", "list", "done", "archive", "fix", "undo", "stats", "review", "capture", "show", "nudge"];
const VALID_CATEGORIES = ["people", "projects", "ideas", "admin"];

const CATEGORY_ALIASES: Record<string, string> = {
  people: "people", pe: "people", ppl: "people",
  projects: "projects", pr: "projects", prj: "projects",
  ideas: "ideas", id: "ideas",
  admin: "admin", adm: "admin",
};

function resolveSubcommand(input: string): string | null {
  const lower = input.toLowerCase();
  const matches = SUBCOMMANDS.filter(s => s.startsWith(lower));
  return matches.length === 1 ? matches[0] : null;
}

// ── /capture ──────────────────────────────────────────────────────────────────

export async function handleCapture(
  session: AgentSession,
  command: CaptureCommand
): Promise<AgentControlResult> {
  const text = command.text?.trim();
  if (!text) {
    return {
      status: "error",
      message: "Usage: /capture <thought>\nExamples:\n  /capture call the lawyer about divorce meeting\n  /capture João needs football boots size 42\n  /capture idea: use piclaw to track workouts",
    };
  }

  let result;
  try {
    result = await classifyThought(text);
  } catch (err) {
    return {
      status: "error",
      message: `Classification failed: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const chatJid = process.env.PICLAW_CHAT_JID || "web:default";
  const status = result.confidence < 0.6 ? "needs_review" : "filed";

  insertEntry({
    original: text,
    category: result.category,
    name: result.name,
    fields: result.fields,
    confidence: result.confidence,
    status,
    chat_jid: chatJid,
  });

  const emoji = CATEGORY_EMOJI[result.category] ?? "📥";
  const confPct = Math.round(result.confidence * 100);
  const f = result.fields;
  const fieldLines: string[] = [];
  if (f.context) fieldLines.push(`  → Context: ${f.context}`);
  if (f.follow_up) fieldLines.push(`  → Follow-up: ${f.follow_up}`);
  if (f.next_action) fieldLines.push(`  → Next: ${f.next_action}`);
  if (f.status) fieldLines.push(`  → Status: ${f.status}`);
  if (f.one_liner) fieldLines.push(`  → ${f.one_liner}`);
  if (f.due) fieldLines.push(`  → Due: ${f.due}`);
  if (f.notes) fieldLines.push(`  → Notes: ${f.notes}`);

  const reviewNote = status === "needs_review" ? "\n⚠️ Low confidence — flagged for review." : "";
  const detailBlock = fieldLines.length > 0 ? "\n" + fieldLines.join("\n") : "";

  return {
    status: "success",
    message: `${emoji} Filed as **${result.category}**: ${result.name} (${confPct}%)${detailBlock}${reviewNote}`,
  };
}

// ── /sb ───────────────────────────────────────────────────────────────────────

export async function handleSb(
  _session: AgentSession,
  command: SbCommand
): Promise<AgentControlResult> {
  const raw = (command.args ?? "").trim();
  const tokens = raw.split(/\s+/).filter(Boolean);

  if (tokens.length === 0) {
    return {
      status: "success",
      message: [
        "**Second Brain** — commands:",
        "",
        "`/sb ls [category|dup]` — list entries (categories: people, projects, ideas, admin)",
        "`/sb done <name>` — mark done",
        "`/sb ar <name>` — archive",
        "`/sb fix dup [category]` — archive all duplicates",
        "`/sb undo` — undo last action",
        "`/sb stats` — counts by category",
        "`/sb nudge` — fire the daily brain digest now",
        "",
        "Subcommands can be abbreviated: `ar`=archive, `do`=done, `fi`=fix, `un`=undo, `st`=stats",
        "",
        "Capture new thoughts with: `/capture <thought>`",
      ].join("\n"),
    };
  }

  const subRaw = tokens[0];
  const subArgs = tokens.slice(1).join(" ").trim();
  const sub = resolveSubcommand(subRaw);

  // If not a subcommand, check if it's a category shortcut: /sb projects, /sb prj, /sb adm, etc.
  if (!sub) {
    const categoryMatch = CATEGORY_ALIASES[subRaw.toLowerCase()]
      ?? VALID_CATEGORIES.find(c => c.startsWith(subRaw.toLowerCase()) &&
           VALID_CATEGORIES.filter(x => x.startsWith(subRaw.toLowerCase())).length === 1);
    if (categoryMatch) {
      // Route to ls <category>
      const entries = getRecentEntries(30, categoryMatch);
      const dupGroups = getDuplicateGroups();
      const dupNames = new Set(dupGroups.map(g => g.name.toLowerCase()));

      if (entries.length === 0) {
        return { status: "success", message: `No active entries in "${categoryMatch}". Use /capture to add thoughts.` };
      }

      const lines = [`**${CATEGORY_EMOJI[categoryMatch] ?? "📁"} ${categoryMatch} (last 30 days)**`, ""];
      for (const entry of entries.slice(0, 25)) {
        const isDup = dupNames.has(entry.name.toLowerCase());
        const dupGroup = isDup ? dupGroups.find(g => g.name.toLowerCase() === entry.name.toLowerCase()) : null;
        const dupCount = dupGroup ? dupGroup.ids.length : 1;
        const f = typeof entry.fields === "string" ? JSON.parse(entry.fields) : entry.fields as any;
        const noNextAction = entry.category === "projects" && !f.next_action;
        const ageDays = Math.floor((Date.now() - new Date(entry.created_at).getTime()) / 86400000);
        const isStale = ageDays >= 7;

        const tags: string[] = [];
        if (isDup) tags.push(`⚠️ ×${dupCount} duplicate`);
        if (noNextAction) tags.push("⚠️ no next action");
        if (isStale && !isDup) tags.push(`🕐 ${ageDays}d`);

        lines.push(`${CATEGORY_EMOJI[entry.category] ?? "•"} **${entry.name}**${tags.length ? " " + tags.join(" ") : ""}`);
        if (f.next_action) lines.push(`  → Next: ${f.next_action}`);
        else if (f.notes) lines.push(`  → ${f.notes.slice(0, 80)}`);

        const suggestions: string[] = [];
        if (isDup) suggestions.push(`/sb fix dup ${categoryMatch}`);
        else if (isStale) suggestions.push(`/sb do ${entry.name.toLowerCase().slice(0, 30)}  |  /sb ar ${entry.name.toLowerCase().slice(0, 30)}`);
        if (noNextAction) suggestions.push(`/capture next action for ${entry.name.toLowerCase().slice(0, 30)}: [what]`);
        if (suggestions.length > 0) lines.push(`  ↳ ${suggestions.join("  ")}`);
        lines.push("");
      }
      if (entries.length > 25) lines.push(`…and ${entries.length - 25} more.`);
      return { status: "success", message: lines.join("\n") };
    }

    return {
      status: "error",
      message: `Unknown subcommand "${subRaw}". Valid: ${SUBCOMMANDS.join(", ")}\nCategory shortcuts: /sb people (pe, ppl) | /sb projects (pr, prj) | /sb ideas (id) | /sb admin (adm)`,
    };
  }

  // ── capture shortcut ─────────────────────────────────────────────────────────
  if (sub === "capture") {
    return handleCapture(_session, { type: "capture", text: subArgs || undefined, raw: command.raw });
  }

  // ── ls ──────────────────────────────────────────────────────────────────────
  if (sub === "ls" || sub === "list") {
    // /sb ls dup — show only duplicates
    if (subArgs === "dup" || subArgs === "duplicates") {
      return handleLsDup();
    }

    const category = VALID_CATEGORIES.includes(subArgs.toLowerCase()) ? subArgs.toLowerCase() : undefined;
    const dupGroups = getDuplicateGroups();
    const dupNames = new Set(dupGroups.map(g => g.name.toLowerCase()));

    // ── /sb list — grouped by category ───────────────────────────────────────
    if (sub === "list" && !category) {
      const entries = getRecentEntries(30);
      if (entries.length === 0) {
        return { status: "success", message: "No active entries. Use /capture to add thoughts." };
      }
      const grouped: Record<string, typeof entries> = { people: [], projects: [], ideas: [], admin: [] };
      for (const e of entries) {
        if (grouped[e.category]) grouped[e.category].push(e);
      }
      const lines = ["**Second Brain**", ""];
      for (const cat of VALID_CATEGORIES as string[]) {
        const group = grouped[cat];
        if (!group || group.length === 0) continue;
        lines.push(`### ${CATEGORY_EMOJI[cat] ?? "📁"} ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${group.length})`);
        for (const entry of group) {
          const isDup = dupNames.has(entry.name.toLowerCase());
          const dupGroup = isDup ? dupGroups.find(g => g.name.toLowerCase() === entry.name.toLowerCase()) : null;
          const dupCount = dupGroup ? dupGroup.ids.length : 1;
          const f = typeof entry.fields === "string" ? JSON.parse(entry.fields) : entry.fields as any;
          const noNextAction = entry.category === "projects" && !f.next_action;
          const ageDays = Math.floor((Date.now() - new Date(entry.created_at).getTime()) / 86400000);
          const isStale = ageDays >= 7;
          const tags: string[] = [];
          if (isDup) tags.push(`⚠️ ×${dupCount}`);
          if (noNextAction) tags.push("⚠️ no next action");
          if (isStale && !isDup) tags.push(`🕐 ${ageDays}d`);
          lines.push(`- **${entry.name}**${tags.length ? " " + tags.join(" ") : ""}`);
          if (f.next_action) lines.push(`  → ${f.next_action}`);
          else if (f.notes) lines.push(`  → ${f.notes.slice(0, 80)}`);
        }
        lines.push("");
      }
      lines.push("━━━");
      lines.push("Tip: `/sb ls` for time-sorted view | `/sb show <name>` for full detail");
      return { status: "success", message: lines.join("\n") };
    }

    // ── /sb ls — flat time-sorted list (original behaviour) ──────────────────
    const days = category ? 30 : 7;
    const entries = getRecentEntries(days, category);

    if (entries.length === 0) {
      const scope = category ? `"${category}"` : "the last 7 days";
      return { status: "success", message: `No active entries in ${scope}. Use /capture to add thoughts.` };
    }

    const title = category
      ? `**${CATEGORY_EMOJI[category] ?? "📁"} ${category} (last 30 days)**`
      : `**Second Brain — last 7 days**`;

    const lines = [title, ""];
    for (const entry of entries.slice(0, 25)) {
      const isDup = dupNames.has(entry.name.toLowerCase());
      const dupGroup = isDup ? dupGroups.find(g => g.name.toLowerCase() === entry.name.toLowerCase()) : null;
      const dupCount = dupGroup ? dupGroup.ids.length : 1;

      const f = typeof entry.fields === "string" ? JSON.parse(entry.fields) : entry.fields as any;
      const noNextAction = entry.category === "projects" && !f.next_action;
      const ageMs = Date.now() - new Date(entry.created_at).getTime();
      const ageDays = Math.floor(ageMs / 86400000);
      const isStale = ageDays >= 7;

      const tags: string[] = [];
      if (isDup) tags.push(`⚠️ ×${dupCount} duplicate`);
      if (noNextAction) tags.push("⚠️ no next action");
      if (isStale && !isDup) tags.push(`🕐 ${ageDays}d`);

      lines.push(`${CATEGORY_EMOJI[entry.category] ?? "•"} **${entry.name}**${tags.length ? " " + tags.join(" ") : ""}`);

      if (f.next_action) lines.push(`  → Next: ${f.next_action}`);
      if (f.notes && !f.next_action) lines.push(`  → ${f.notes.slice(0, 80)}`);

      // Suggested actions
      const suggestions: string[] = [];
      if (isDup) suggestions.push(`/sb fix dup${category ? " " + entry.category : ""}`);
      else if (isStale) suggestions.push(`/sb do ${entry.name.toLowerCase().slice(0, 30)}  |  /sb ar ${entry.name.toLowerCase().slice(0, 30)}`);
      if (noNextAction) suggestions.push(`/capture next action for ${entry.name.toLowerCase().slice(0, 30)}: [what]`);
      if (suggestions.length > 0) lines.push(`  ↳ ${suggestions.join("  ")}`);

      lines.push("");
    }

    if (entries.length > 25) lines.push(`…and ${entries.length - 25} more.`);
    lines.push("━━━");
    lines.push("Tip: `/sb ls dup` to see all duplicates | `/sb fix dup` to clean them all");
    return { status: "success", message: lines.join("\n") };
  }

  // ── stats ────────────────────────────────────────────────────────────────────
  if (sub === "stats") {
    const stats = getCategoryStats();
    const total = Object.values(stats).reduce((a, b) => a + b, 0);
    const dups = getDuplicateGroups().reduce((n, g) => n + g.ids.length - 1, 0);
    if (total === 0) return { status: "success", message: "No entries yet. Use /capture <thought> to start." };
    const lines = ["**Second Brain — stats (last 30 days)**", ""];
    for (const [cat, count] of Object.entries(stats)) {
      lines.push(`${CATEGORY_EMOJI[cat] ?? "•"} ${cat}: ${count}`);
    }
    lines.push(`\nTotal: ${total}`);
    if (dups > 0) lines.push(`⚠️ ${dups} duplicate entries → /sb fix dup`);
    return { status: "success", message: lines.join("\n") };
  }

  // ── undo ─────────────────────────────────────────────────────────────────────
  if (sub === "undo") {
    const result = applyUndo();
    if (!result) return { status: "error", message: "Nothing to undo." };
    return {
      status: "success",
      message: `↩️ Undone: **${result.action}** — ${result.restored} entr${result.restored === 1 ? "y" : "ies"} restored to filed.`,
    };
  }

  // ── fix ──────────────────────────────────────────────────────────────────────
  if (sub === "fix") {
    const fixTokens = subArgs.split(/\s+/).filter(Boolean);
    const fixSub = fixTokens[0]?.toLowerCase();
    const fixArg = fixTokens.slice(1).join(" ").trim();

    if (!fixSub) {
      return {
        status: "error",
        message: "Usage:\n  `/sb fix dup [category]` — archive duplicates\n  `/sb fix cat <name> <category>` — change category of an entry",
      };
    }

    // fix dup
    if (fixSub.startsWith("dup")) {
      const category = VALID_CATEGORIES.includes(fixArg) ? fixArg : undefined;
      const result = archiveDuplicates(category);
      if (result.archived === 0) {
        const scope = category ? ` in ${category}` : "";
        return { status: "success", message: `✅ No duplicates found${scope}.` };
      }
      return {
        status: "success",
        message: `🔁 Fixed ${result.groups} duplicate group${result.groups === 1 ? "" : "s"} — ${result.archived} entr${result.archived === 1 ? "y" : "ies"} archived, ${result.kept} kept.\n↩️ Undo with: \`/sb undo\``,
      };
    }

    // fix cat <name> <category>
    if (fixSub.startsWith("cat")) {
      // Parse: everything before the last word is the name, last word is the new category
      // Also support: "fix cat <name> → <category>"
      const arrowSplit = fixArg.split(/\s*→\s*|\s*->\s*/);
      let entryQuery: string;
      let newCategory: string;

      if (arrowSplit.length === 2) {
        entryQuery = arrowSplit[0].trim();
        newCategory = arrowSplit[1].trim().toLowerCase();
      } else {
        // Last token is the category
        const parts = fixArg.split(/\s+/);
        newCategory = parts[parts.length - 1].toLowerCase();
        entryQuery = parts.slice(0, -1).join(" ").trim();
      }

      if (!entryQuery || !newCategory) {
        return {
          status: "error",
          message: "Usage: `/sb fix cat <entry name> <category>`\nExample: `/sb fix cat joao ipad admin`\nOr: `/sb fix cat joão ipad → admin`\nCategories: people, projects, ideas, admin",
        };
      }

      if (!VALID_CATEGORIES.includes(newCategory)) {
        return {
          status: "error",
          message: `Unknown category "${newCategory}". Valid: ${VALID_CATEGORIES.join(", ")}`,
        };
      }

      // Find the entry
      const likeMatches = findEntriesByName(entryQuery);
      let targetEntry: { id: number; name: string; category: string } | null = null;

      if (likeMatches.length === 1) {
        targetEntry = { id: likeMatches[0].id, name: likeMatches[0].name, category: likeMatches[0].category };
      } else {
        const allEntries = getAllActiveEntries();
        let resolved;
        try {
          resolved = await resolveEntryByQuery(entryQuery, allEntries);
        } catch {
          if (likeMatches.length > 1) {
            const list = likeMatches.slice(0, 5).map((e: any) => `• [${e.category}] ${e.name}`).join("\n");
            return { status: "success", message: `Multiple matches — be more specific:\n${list}` };
          }
          return { status: "error", message: `No entries found matching "${entryQuery}". Try \`/sb ls\`.` };
        }

        if (resolved.type === "not_found") {
          return { status: "error", message: `No entries found matching "${entryQuery}". Try \`/sb ls\`.` };
        }
        if (resolved.type === "ambiguous") {
          const list = resolved.candidates.slice(0, 5).map(e => `• [${e.category}] ${e.name}`).join("\n");
          return { status: "success", message: `Ambiguous — did you mean one of these?\n${list}` };
        }
        targetEntry = resolved;
      }

      if (targetEntry.category === newCategory) {
        return { status: "success", message: `ℹ️ **${targetEntry.name}** is already in ${newCategory}.` };
      }

      writeUndoLog("fix_cat", [targetEntry.id], [{ id: targetEntry.id, status: "filed", category: targetEntry.category }]);
      updateEntryCategory(targetEntry.id, newCategory);

      return {
        status: "success",
        message: `✏️ Moved: **${targetEntry.name}** [${targetEntry.category} → ${newCategory}]\n↩️ Undo with: \`/sb undo\``,
      };
    }

    return {
      status: "error",
      message: "Usage:\n  `/sb fix dup [category]` — archive duplicates\n  `/sb fix cat <name> <category>` — change category",
    };
  }

  // ── show ─────────────────────────────────────────────────────────────────────
  if (sub === "show") {
    if (!subArgs) {
      return { status: "error", message: "Usage: `/sb show <name>`\nExample: `/sb show joão`" };
    }

    // Fast path: LIKE match
    const likeMatches = findEntriesByName(subArgs);
    let entry = likeMatches.length === 1 ? getEntryById(likeMatches[0].id) : null;

    // Multiple LIKE matches with same name → show first (likely duplicates)
    if (!entry && likeMatches.length > 1) {
      const uniqueNames = new Set(likeMatches.map((e: any) => e.name.toLowerCase()));
      if (uniqueNames.size === 1) {
        entry = getEntryById(likeMatches[0].id);
      }
    }

    // LLM fuzzy fallback
    if (!entry) {
      const allEntries = getAllActiveEntries();
      if (allEntries.length === 0) {
        return { status: "error", message: "No active entries." };
      }
      let resolved;
      try {
        resolved = await resolveEntryByQuery(subArgs, allEntries);
      } catch {
        if (likeMatches.length > 1) {
          const list = likeMatches.slice(0, 5).map((e: any) => `• [${e.category}] ${e.name}`).join("\n");
          return { status: "success", message: `Multiple matches — be more specific:\n${list}` };
        }
        return { status: "error", message: `No entries found matching "${subArgs}".` };
      }
      if (resolved.type === "not_found") {
        return { status: "error", message: `No entries found matching "${subArgs}". Try \`/sb ls\`.` };
      }
      if (resolved.type === "ambiguous") {
        const list = resolved.candidates.slice(0, 5).map(e => `• [${e.category}] ${e.name}`).join("\n");
        return { status: "success", message: `Ambiguous — did you mean:\n${list}` };
      }
      entry = getEntryById(resolved.id);
    }

    if (!entry) {
      return { status: "error", message: `Entry not found.` };
    }

    const emoji = CATEGORY_EMOJI[entry.category] ?? "•";
    const raw_fields = entry.fields as any;
    const f = typeof raw_fields === "string" ? JSON.parse(raw_fields) : raw_fields;
    const ageDays = Math.floor((Date.now() - new Date(entry.created_at).getTime()) / 86400000);
    const ageStr = ageDays === 0 ? "today" : ageDays === 1 ? "yesterday" : `${ageDays} days ago`;

    const lines = [
      `${emoji} **${entry.name}** [${entry.category}]`,
      `━━━`,
    ];

    // Show all non-empty fields
    const fieldOrder =
      entry.category === "people"   ? ["context", "follow_up", "notes"] :
      entry.category === "projects" ? ["status", "next_action", "notes"] :
      entry.category === "ideas"    ? ["one_liner", "notes"] :
                                      ["due", "notes"];

    for (const key of fieldOrder) {
      if (f[key]) lines.push(`**${key.replace("_", " ")}:** ${f[key]}`);
    }

    // Any extra fields not in the standard order
    for (const [key, val] of Object.entries(f)) {
      if (!fieldOrder.includes(key) && val) lines.push(`**${key}:** ${val}`);
    }

    lines.push(`━━━`);
    lines.push(`📅 Filed ${ageStr}  ·  Status: ${entry.status}  ·  ID: #${entry.id}`);
    lines.push(`**Original:** _${entry.original.slice(0, 120)}${entry.original.length > 120 ? "…" : ""}_`);

    if (likeMatches.length > 1) {
      // Only warn about duplicates if the name field itself matches — not just original text
      const nameMatches = likeMatches.filter((e: any) => e.name.toLowerCase().includes(subArgs.toLowerCase()));
      if (nameMatches.length > 1) {
        lines.push(`⚠️ ${nameMatches.length} entries with this name — showing newest. Use \`/sb fix dup\` to clean.`);
      }
    }

    return { status: "success", message: lines.join("\n") };
  }

  // ── review ───────────────────────────────────────────────────────────────────
  if (sub === "review") {
    return { status: "error", message: "⏳ /sb review is not implemented yet." };
  }

  // ── nudge ─────────────────────────────────────────────────────────────────────
  if (sub === "nudge") {
    try {
      const proc = Bun.spawnSync(
        ["bun", "run", "/workspace/scripts/brain-digest.ts"],
        { cwd: "/home/azureuser/piclaw/piclaw", env: process.env }
      );
      if (proc.exitCode !== 0) {
        const stderr = new TextDecoder().decode(proc.stderr);
        return { status: "error", message: `Nudge failed: ${stderr.slice(0, 200)}` };
      }
      return { status: "success", message: "🧠 Brain nudge sent." };
    } catch (err) {
      return { status: "error", message: `Nudge error: ${err instanceof Error ? err.message : String(err)}` };
    }
  }

  // ── done / archive ───────────────────────────────────────────────────────────
  if (sub === "done" || sub === "archive") {
    const isArchive = sub === "archive";
    const verb = isArchive ? "archived" : "marked done";
    const emoji = isArchive ? "🗄️" : "✅";
    const newStatus = isArchive ? "archived" : "done";

    if (!subArgs) {
      return {
        status: "error",
        message: `Usage: /sb ${sub} <name or partial text>\nExample: /sb ${sub} laundry`,
      };
    }

    // Fast path: LIKE match
    const likeMatches = findEntriesByName(subArgs);

    if (likeMatches.length === 1) {
      const entry = likeMatches[0];
      writeUndoLog(sub, [entry.id], [{ id: entry.id, status: entry.status }]);
      const ok = isArchive ? markEntryArchived(entry.id) : markEntryDone(entry.id);
      return {
        status: ok ? "success" : "error",
        message: ok
          ? `${emoji} ${verb}: **${entry.name}** [${entry.category}]\n↩️ Undo with: \`/sb undo\``
          : `Failed to update entry #${entry.id}.`,
      };
    }

    // All matches same name → mark all (duplicate case)
    if (likeMatches.length > 1) {
      const uniqueNames = new Set(likeMatches.map((e: any) => e.name.toLowerCase()));
      if (uniqueNames.size === 1) {
        const prevStates = likeMatches.map((e: any) => ({ id: e.id, status: e.status }));
        writeUndoLog(sub, likeMatches.map((e: any) => e.id), prevStates);
        let count = 0;
        for (const entry of likeMatches) {
          const ok = isArchive ? markEntryArchived(entry.id) : markEntryDone(entry.id);
          if (ok) count++;
        }
        return {
          status: "success",
          message: `${emoji} ${verb} ${count} entr${count === 1 ? "y" : "ies"}: **${likeMatches[0].name}** [${likeMatches[0].category}]\n↩️ Undo with: \`/sb undo\``,
        };
      }
    }

    // LLM fuzzy path
    const allEntries = getAllActiveEntries();
    if (allEntries.length === 0) {
      return { status: "error", message: "No active entries. Use /capture to add thoughts." };
    }

    let resolved;
    try {
      resolved = await resolveEntryByQuery(subArgs, allEntries);
    } catch {
      if (likeMatches.length > 1) {
        const list = likeMatches.slice(0, 5).map((e: any) => `• [${e.category}] ${e.name}`).join("\n");
        return { status: "success", message: `Multiple matches — be more specific:\n${list}` };
      }
      return { status: "error", message: `No entries found matching "${subArgs}". Try \`/sb ls\`.` };
    }

    if (resolved.type === "not_found") {
      return { status: "error", message: `No entries found matching "${subArgs}". Try \`/sb ls\`.` };
    }

    if (resolved.type === "ambiguous") {
      const list = resolved.candidates.slice(0, 5).map(e => `• [${e.category}] ${e.name}`).join("\n");
      return { status: "success", message: `Ambiguous — did you mean one of these?\n${list}` };
    }

    writeUndoLog(sub, [resolved.id], [{ id: resolved.id, status: "filed" }]);
    const ok = isArchive ? markEntryArchived(resolved.id) : markEntryDone(resolved.id);
    return {
      status: ok ? "success" : "error",
      message: ok
        ? `${emoji} ${verb}: **${resolved.name}** [${resolved.category}]\n↩️ Undo with: \`/sb undo\``
        : `Failed to update entry #${resolved.id}.`,
    };
  }

  return { status: "error", message: "Unknown error in /sb handler." };
}

// ── helper: /sb ls dup ────────────────────────────────────────────────────────

function handleLsDup(): AgentControlResult {
  const groups = getDuplicateGroups();
  if (groups.length === 0) {
    return { status: "success", message: "✅ No duplicates found." };
  }
  const lines = [`**Duplicates (${groups.reduce((n, g) => n + g.ids.length, 0)} entries in ${groups.length} groups)**`, ""];
  for (const g of groups) {
    lines.push(`${CATEGORY_EMOJI[g.category] ?? "•"} **${g.name}** [${g.category}] ×${g.ids.length}`);
    lines.push(`  ↳ /sb fix dup ${g.category}`);
    lines.push("");
  }
  lines.push("Fix all at once: `/sb fix dup`");
  return { status: "success", message: lines.join("\n") };
}
