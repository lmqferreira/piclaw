---
name: reload
description: Reinstall piclaw from workspace source and hot-restart the running process. Use after making code changes to piclaw.
---

# Reload Piclaw

Reinstall the piclaw package from workspace source and restart the running process
without losing connectivity. This is a hot-reload — the new process takes over on the
same port.

## Steps

1. Install the updated package globally:
   ```bash
   cd /workspace/piclaw/piclaw && bun add -g ./
   ```

2. Find the running piclaw and pi PIDs:
   ```bash
   PICLAW_PID=$(pgrep -f 'bun.*piclaw.*--port' | head -1)
   PI_PID=$(pgrep -P "$PICLAW_PID" | head -1)
   ```

3. Determine the piclaw command line (preserves flags like --port):
   ```bash
   PICLAW_CMD=$(cat /proc/$PICLAW_PID/cmdline | tr '\0' ' ')
   ```

4. Launch the restart script as a fully detached process. The script:
   - Waits for the pi process (the current agent invocation) to exit
   - Sends SIGTERM to piclaw and waits for it to die
   - Starts a new piclaw with the same command line

   ```bash
   cat > /tmp/restart-piclaw.sh << 'SCRIPT'
   #!/bin/bash
   set -e
   PI_PID=$1
   PICLAW_PID=$2
   shift 2
   PICLAW_CMD="$@"

   # Wait for pi to finish (it's generating the response right now)
   echo "[reload] Waiting for pi ($PI_PID) to exit..."
   while kill -0 "$PI_PID" 2>/dev/null; do sleep 0.2; done
   echo "[reload] pi exited"

   # Give piclaw a moment to process pi's output and send the response
   sleep 2

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
   chmod +x /tmp/restart-piclaw.sh

   nohup setsid /tmp/restart-piclaw.sh "$PI_PID" "$PICLAW_PID" $PICLAW_CMD \
     </dev/null >/tmp/restart-piclaw.log 2>&1 &
   disown
   ```

5. Confirm the restart script is running:
   ```bash
   echo "Restart scheduled. New piclaw will start after this response is sent."
   ```

## Important Notes

- The restart happens AFTER the current pi invocation completes, so the user gets
  their response before the switchover.
- There will be a brief (~3s) gap where piclaw is down during the restart.
- The new piclaw inherits the same command-line flags as the old one.
- WhatsApp session state persists across restarts (stored in SQLite + auth dir).
- If something goes wrong, check `/tmp/restart-piclaw.log`.
