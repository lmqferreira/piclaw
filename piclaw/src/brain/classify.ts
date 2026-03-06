import { readFileSync, writeFileSync } from "fs";

const AUTH_FILE = "/home/azureuser/.pi/agent/auth.json";
const COPILOT_MODEL = "gpt-4o";
const COPILOT_HEADERS = {
  "User-Agent": "GitHubCopilotChat/0.35.0",
  "Editor-Version": "vscode/1.107.0",
  "Editor-Plugin-Version": "copilot-chat/0.35.0",
  "Copilot-Integration-Id": "vscode-chat",
};

function getBaseUrlFromToken(token: string): string {
  const m = token.match(/proxy-ep=([^;]+)/);
  if (m) return `https://${m[1].replace(/^proxy\./, "api.")}`;
  return "https://api.individual.githubcopilot.com";
}

async function getCopilotToken(): Promise<{ token: string; baseUrl: string }> {
  const auth = JSON.parse(readFileSync(AUTH_FILE, "utf8"));
  const creds = auth["github-copilot"];

  if (creds.access && creds.expires && Date.now() < creds.expires) {
    return { token: creds.access, baseUrl: getBaseUrlFromToken(creds.access) };
  }

  const res = await fetch("https://api.github.com/copilot_internal/v2/token", {
    headers: { Accept: "application/json", Authorization: `Bearer ${creds.refresh}`, ...COPILOT_HEADERS },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`Copilot token error: ${res.status}`);
  const data = (await res.json()) as { token: string; expires_at: number };

  const newCreds = { ...creds, access: data.token, expires: data.expires_at * 1000 - 5 * 60 * 1000 };
  auth["github-copilot"] = newCreds;
  writeFileSync(AUTH_FILE, JSON.stringify(auth, null, 2));
  return { token: newCreds.access, baseUrl: getBaseUrlFromToken(newCreds.access) };
}

const CLASSIFY_SYSTEM = `You are a second brain classifier. Classify the input into exactly one category.

Categories:
- people: RELATIONSHIP CONTEXT about a specific person — things that make future interactions richer (personality, what matters to them, how they communicate, what's happening in their life). NOT tasks that happen to involve a person.
- projects: tasks, work items, goals with multiple steps or a next action required
- ideas: observations, insights, concepts, things to explore
- admin: one-off logistics, appointments, reminders, simple to-dos (including tasks that involve a person but are fundamentally logistical)

CRITICAL DISTINCTION — people vs admin/projects:
✅ people: "João is 17 and loves technology and investing" → context about who João is
✅ people: "Miguel mentioned he's struggling at work" → relationship note
✅ people: "Nanda tends to escalate when feeling unheard" → interaction insight
❌ NOT people: "call João about the iPad" → this is admin (a task involving João)
❌ NOT people: "João received the iPad" → this is admin (a logistical fact)
❌ NOT people: "fix Clara's laptop" → this is projects (a task involving Clara)

Return ONLY valid JSON with this exact structure (no markdown, no explanation):
{
  "category": "people|projects|ideas|admin",
  "name": "short title (max 8 words)",
  "fields": {
    // For people: "context" (how you know them / what happened), "follow_up" (what to do next)
    // For projects: "status" (active/waiting/someday), "next_action" (literal next step), "notes"
    // For ideas: "one_liner" (core insight in one sentence), "notes"
    // For admin: "due" (date if mentioned, else ""), "notes"
  },
  "confidence": 0.0-1.0
}`;

export type ResolveResult =
  | { type: "match"; id: number; name: string; category: string }
  | { type: "ambiguous"; candidates: { id: number; name: string; category: string }[] }
  | { type: "not_found" };

export async function resolveEntryByQuery(
  query: string,
  entries: { id: number; name: string; original: string; category: string }[]
): Promise<ResolveResult> {
  if (entries.length === 0) return { type: "not_found" };

  const entryList = entries
    .map(e => `${e.id}|${e.category}|${e.name}|${e.original.slice(0, 80)}`)
    .join("\n");

  const { token, baseUrl } = await getCopilotToken();

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...COPILOT_HEADERS,
    },
    body: JSON.stringify({
      model: COPILOT_MODEL,
      messages: [
        {
          role: "system",
          content: `You are a second brain entry resolver. Given a user query and a list of entries, find which entry the user is referring to.

Each entry is formatted as: ID|category|name|original_text

Rules:
- The user may write in Portuguese or English, with typos, missing accents, or partial words
- If exactly one entry clearly matches the query, return: {"type":"match","id":<number>}
- If two or more entries could plausibly match and it is genuinely ambiguous, return: {"type":"ambiguous","ids":[<id1>,<id2>,...]}
- If no entry matches at all, return: {"type":"not_found"}
- Lean toward "match" — only return "ambiguous" if you truly cannot decide

Return ONLY valid JSON, no explanation.`,
        },
        {
          role: "user",
          content: `Query: "${query}"\n\nEntries:\n${entryList}`,
        },
      ],
      temperature: 0.1,
      max_tokens: 100,
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (!res.ok) throw new Error(`AI resolve failed: ${res.status}`);
  const data = (await res.json()) as any;
  const raw = (data.choices?.[0]?.message?.content ?? "").trim();
  const cleaned = raw.replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/, "").trim();
  const parsed = JSON.parse(cleaned);

  if (parsed.type === "match") {
    const entry = entries.find(e => e.id === parsed.id);
    if (!entry) return { type: "not_found" };
    return { type: "match", id: entry.id, name: entry.name, category: entry.category };
  }

  if (parsed.type === "ambiguous") {
    const candidates = (parsed.ids as number[])
      .map(id => entries.find(e => e.id === id))
      .filter(Boolean)
      .map(e => ({ id: e!.id, name: e!.name, category: e!.category }));
    return { type: "ambiguous", candidates };
  }

  return { type: "not_found" };
}

export interface ClassifyResult {
  category: "people" | "projects" | "ideas" | "admin";
  name: string;
  fields: Record<string, string>;
  confidence: number;
}

export async function classifyThought(text: string): Promise<ClassifyResult> {
  const { token, baseUrl } = await getCopilotToken();

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...COPILOT_HEADERS,
    },
    body: JSON.stringify({
      model: COPILOT_MODEL,
      messages: [
        { role: "system", content: CLASSIFY_SYSTEM },
        { role: "user", content: text },
      ],
      temperature: 0.1,
      max_tokens: 300,
    }),
    signal: AbortSignal.timeout(20000),
  });

  if (!res.ok) throw new Error(`AI classification failed: ${res.status}`);
  const data = (await res.json()) as any;
  const raw = data.choices?.[0]?.message?.content ?? "";

  const cleaned = raw
    .replace(/^```(?:json)?\n?/i, "").replace(/\n?```$/, "") // strip markdown fences
    .replace(/\/\/[^\n]*/g, "")                               // strip // comments
    .replace(/\/\*[\s\S]*?\*\//g, "")                        // strip /* */ comments
    .trim();
  const parsed = JSON.parse(cleaned);

  const VALID_CATEGORIES = ["people", "projects", "ideas", "admin"] as const;
  const category = VALID_CATEGORIES.includes(parsed.category)
    ? parsed.category
    : "admin";

  return {
    category,
    name: parsed.name ?? "Untitled",
    fields: parsed.fields ?? {},
    confidence: typeof parsed.confidence === "number" ? parsed.confidence : 0.8,
  };
}
