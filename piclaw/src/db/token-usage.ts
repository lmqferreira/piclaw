/**
 * db/token-usage.ts – Records LLM token consumption and cost per agent run.
 *
 * After each agent turn completes, the agent pool (agent-pool/usage.ts)
 * calls storeTokenUsage() to persist the token counts, cost breakdown, and
 * model/provider metadata.
 *
 * Consumers:
 *   - agent-pool/usage.ts calls storeTokenUsage() after every agent run.
 *   - agent-control/handlers/info.ts queries the table for `/usage` reports.
 *   - The token-chart skill reads the table to generate usage visualisations.
 */

import { getDb } from "./connection.js";

/**
 * Shape of a single token-usage record to be persisted.
 * Maps 1:1 to the `token_usage` table columns.
 */
export interface TokenUsageRecord {
  /** Chat JID the agent run belonged to. */
  chat_jid: string;
  /** ISO-8601 timestamp of the agent run. */
  run_at: string;
  /** Number of input (prompt) tokens consumed. */
  input_tokens: number;
  /** Number of output (completion) tokens generated. */
  output_tokens: number;
  /** Tokens served from the provider's prompt cache. */
  cache_read_tokens: number;
  /** Tokens written into the provider's prompt cache. */
  cache_write_tokens: number;
  /** Sum of all token categories. */
  total_tokens: number;
  /** Dollar cost attributed to input tokens. */
  cost_input: number;
  /** Dollar cost attributed to output tokens. */
  cost_output: number;
  /** Dollar cost attributed to cache-read tokens. */
  cost_cache_read: number;
  /** Dollar cost attributed to cache-write tokens. */
  cost_cache_write: number;
  /** Total dollar cost for the run. */
  cost_total: number;
  /** Model identifier (e.g. "claude-sonnet-4-20250514"). */
  model?: string | null;
  /** Provider name (e.g. "anthropic"). */
  provider?: string | null;
  /** API variant used (e.g. "messages", "chat"). */
  api?: string | null;
  /** Number of conversational turns in the run. */
  turns?: number | null;
}

/** Insert a token-usage record for a completed agent run. */
export function storeTokenUsage(record: TokenUsageRecord): void {
  const db = getDb();
  db.prepare(
    `INSERT INTO token_usage (
      chat_jid,
      run_at,
      input_tokens,
      output_tokens,
      cache_read_tokens,
      cache_write_tokens,
      total_tokens,
      cost_input,
      cost_output,
      cost_cache_read,
      cost_cache_write,
      cost_total,
      model,
      provider,
      api,
      turns
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    record.chat_jid,
    record.run_at,
    record.input_tokens,
    record.output_tokens,
    record.cache_read_tokens,
    record.cache_write_tokens,
    record.total_tokens,
    record.cost_input,
    record.cost_output,
    record.cost_cache_read,
    record.cost_cache_write,
    record.cost_total,
    record.model ?? null,
    record.provider ?? null,
    record.api ?? null,
    record.turns ?? null
  );
}
