/**
 * web/sse.ts – Server-Sent Events (SSE) primitives.
 *
 * Provides low-level SSE stream creation, event encoding, client
 * lifecycle management, and broadcast helpers.
 *
 * Consumers: web/sse-hub.ts builds on these primitives.
 */

const encoder = new TextEncoder();

/** An SSE client waiting to be registered (response + controller). */
export interface PendingClient {
  controller: ReadableStreamDefaultController<Uint8Array>;
  heartbeat: Timer;
}

/** Interface for a container that holds SSE client lists. */
export interface SseClientContainer {
  clients: Set<PendingClient>;
}

/** Create an SSE response stream and register the client. */
export function handleSse(channel: SseClientContainer): Response {
  let clientRef: PendingClient | null = null;

  const stream = new ReadableStream<Uint8Array>({
    start: (controller) => {
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(": heartbeat\n\n"));
        } catch {
          clearInterval(heartbeat);
          if (clientRef) channel.clients.delete(clientRef);
        }
      }, 30000);
      clientRef = { controller, heartbeat };
      channel.clients.add(clientRef);
      controller.enqueue(encoder.encode("event: connected\ndata: {}\n\n"));
    },
    cancel: () => {
      if (clientRef) {
        clearInterval(clientRef.heartbeat);
        channel.clients.delete(clientRef);
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

/** Encode and send an SSE event to all connected clients. */
export function broadcastEvent(channel: SseClientContainer, eventType: string, data: unknown): void {
  const payload = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
  const bytes = encoder.encode(payload);
  for (const client of channel.clients) {
    try {
      client.controller.enqueue(bytes);
    } catch {
      clearInterval(client.heartbeat);
      channel.clients.delete(client);
    }
  }
}
