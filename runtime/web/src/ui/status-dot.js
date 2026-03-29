// @ts-nocheck

export function buildTurnDotClass({ steerQueued = false, pulsing = false } = {}) {
    const classes = ['turn-dot'];
    if (steerQueued) classes.push('turn-dot-queued');
    if (pulsing) classes.push('turn-dot-pulsing');
    return classes.join(' ');
}

export function buildComposeStatusDotClass({ pulsing = false } = {}) {
    const classes = ['compose-inline-status-dot'];
    if (pulsing) classes.push('compose-inline-status-dot-pulsing');
    return classes.join(' ');
}

export function shouldShowRunningStatusDot(status, { isLastActivity = false } = {}) {
    if (isLastActivity) return false;
    const type = typeof status?.type === 'string' ? status.type : '';
    return type !== 'tool_call' && type !== 'tool_status';
}
