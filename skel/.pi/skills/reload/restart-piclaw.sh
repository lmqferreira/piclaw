#!/bin/bash
# Restart piclaw: kill old process, exec into new one.
#
# Usage: restart-piclaw.sh [OLD_PID] [-- CMD...]
#   OLD_PID  PID to kill first (default: read from /tmp/piclaw.pid)
#   CMD      command to run (default: piclaw --port 3000)
#
# Launch detached:
#   nohup setsid /path/to/restart-piclaw.sh </dev/null >>/tmp/restart-piclaw-force.log 2>&1 &
#
# Uses exec to replace itself with piclaw, so this script's PID
# becomes piclaw's PID. Only one process, no wrapper zombies.

export PATH="/home/agent/.bun/bin:/home/linuxbrew/.linuxbrew/bin:$PATH"
export BUN_INSTALL="/home/agent/.bun"

PIDFILE=/tmp/piclaw.pid

# Parse args
OLD_PID=""
if [ $# -ge 1 ] && [ "$1" != "--" ]; then
  OLD_PID="$1"
  shift
fi
[ "${1:-}" = "--" ] && shift

if [ $# -eq 0 ]; then
  set -- piclaw --port 3000
fi

# Fall back to pidfile
if [ -z "$OLD_PID" ] && [ -f "$PIDFILE" ]; then
  OLD_PID=$(cat "$PIDFILE" 2>/dev/null || true)
fi

echo ""
echo "[reload] === $(date -Iseconds) ==="

# Kill old piclaw
if [ -n "$OLD_PID" ] && kill -0 "$OLD_PID" 2>/dev/null; then
  echo "[reload] Stopping old piclaw ($OLD_PID)..."
  kill "$OLD_PID" 2>/dev/null || true
  for i in $(seq 1 10); do
    kill -0 "$OLD_PID" 2>/dev/null || break
    sleep 0.5
  done
  if kill -0 "$OLD_PID" 2>/dev/null; then
    echo "[reload] Force-killing $OLD_PID"
    kill -9 "$OLD_PID" 2>/dev/null || true
    sleep 1
  fi
  echo "[reload] Old process stopped"
fi

# Write PID and exec
echo $$ > "$PIDFILE"
echo "[reload] Starting: $* (PID $$)"
exec "$@"
