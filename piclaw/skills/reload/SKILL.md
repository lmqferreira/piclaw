---
name: reload
description: Reinstall piclaw from workspace source and force-restart the running process. Use after making code changes to piclaw.
---

# Reload Piclaw (force)

Reinstall the piclaw package from workspace source and restart the running process
immediately (no waiting for the current pi invocation). This is a force hot-reload —
the new process takes over on the same port.

## Steps

1. Upgrade dependencies in the workspace:
   ```bash
   cd /workspace/piclaw/piclaw
   bun update
   ```

2. Install the updated package globally from a clean directory (avoids lockfile duplication):
   ```bash
   cd /tmp
   bun add -g --no-save file:/workspace/piclaw/piclaw
   ```

3. Find the running piclaw PID:
   ```bash
   PICLAW_PID=$(pgrep -f 'bun.*piclaw.*--port' | head -1)
   ```

4. Determine the piclaw command line (preserves flags like --port):
   ```bash
   PICLAW_CMD=$(cat /proc/$PICLAW_PID/cmdline | tr '\0' ' ')
   ```

5. Launch the force-restart script as a fully detached process. The script:
   - Waits briefly so the last response can flush
   - Sends SIGTERM to piclaw and waits for it to die
   - Starts a new piclaw with the same command line

   ```bash
   cat > /tmp/restart-piclaw-force.sh << 'SCRIPT'
   #!/bin/bash
   set -e
   PICLAW_PID=$1
   shift 1
   PICLAW_CMD="$@"

   # Brief delay to allow the last response to flush
   echo "[reload] Waiting 3s before restart"
   sleep 3

   # Kill old piclaw
   echo "[reload] Stopping old piclaw ($PICLAW_PID)..."
   kill "$PICLAW_PID" 2>/dev/null || true
   for i in $(seq 1 10); do
     kill -0 "$PICLAW_PID" 2>/dev/null || break
     sleep 0.5
   done
   kill -9 "$PICLAW_PID" 2>/dev/null || true
   sleep 1

   # Start new piclaw
   echo "[reload] Starting new piclaw: $PICLAW_CMD"
   exec $PICLAW_CMD
   SCRIPT
   chmod +x /tmp/restart-piclaw-force.sh

   nohup setsid /tmp/restart-piclaw-force.sh "$PICLAW_PID" $PICLAW_CMD \
     </dev/null >/tmp/restart-piclaw-force.log 2>&1 &
   disown
   ```

6. Confirm the restart script is running:
   ```bash
   echo "Force restart scheduled. Piclaw will restart shortly."
   ```

## Important Notes

- The restart script waits briefly before killing the process so the final message can flush.
- There will be a brief (~3s) gap where piclaw is down during the restart.
- The new piclaw inherits the same command-line flags as the old one.
- WhatsApp session state persists across restarts (stored in SQLite + auth dir).
- If something goes wrong, check `/tmp/restart-piclaw-force.log`.
