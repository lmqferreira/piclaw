import { describe, expect, test } from 'bun:test';

import {
  buildComposeStatusDotClass,
  buildTurnDotClass,
  shouldShowRunningStatusDot,
} from '../../web/src/ui/status-dot.js';

describe('status dot helpers', () => {
  test('builds turn-dot classes with optional queued and pulsing modifiers', () => {
    expect(buildTurnDotClass()).toBe('turn-dot');
    expect(buildTurnDotClass({ steerQueued: true })).toBe('turn-dot turn-dot-queued');
    expect(buildTurnDotClass({ pulsing: true })).toBe('turn-dot turn-dot-pulsing');
    expect(buildTurnDotClass({ steerQueued: true, pulsing: true })).toBe('turn-dot turn-dot-queued turn-dot-pulsing');
  });

  test('builds compose status-dot classes with optional pulsing modifier', () => {
    expect(buildComposeStatusDotClass()).toBe('compose-inline-status-dot');
    expect(buildComposeStatusDotClass({ pulsing: true })).toBe('compose-inline-status-dot compose-inline-status-dot-pulsing');
  });

  test('hides running status dots for tool execution rows and last-activity rows', () => {
    expect(shouldShowRunningStatusDot({ type: 'tool_call' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'tool_status' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'tool_call' }, { isLastActivity: true })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'error' })).toBe(true);
    expect(shouldShowRunningStatusDot({ type: 'plan' })).toBe(true);
    expect(shouldShowRunningStatusDot({ type: 'waiting' }, { isLastActivity: true })).toBe(false);
  });
});
