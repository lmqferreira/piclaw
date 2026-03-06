// @ts-nocheck
// Web Push registration module
// Auto-loaded by app.js — registers service worker and handles push subscription

const PUSH_STORAGE_KEY = 'piclaw_push_subscribed';

async function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

async function getVapidPublicKey() {
  const res = await fetch('/api/push/vapid-public-key');
  if (!res.ok) return null;
  const { publicKey } = await res.json();
  return publicKey || null;
}

async function subscribe(registration, publicKey) {
  const applicationServerKey = await urlBase64ToUint8Array(publicKey);
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey,
  });
  await fetch('/api/push/subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription.toJSON()),
  });
  localStorage.setItem(PUSH_STORAGE_KEY, '1');
  console.log('[push] Subscribed to push notifications');
  return subscription;
}

export async function initPush() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.log('[push] Push not supported in this browser');
    return;
  }

  try {
    const publicKey = await getVapidPublicKey();
    if (!publicKey) {
      console.log('[push] VAPID key not available — push disabled');
      return;
    }

    // Register service worker
    const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    await navigator.serviceWorker.ready;

    // Check existing subscription
    const existing = await registration.pushManager.getSubscription();
    if (existing) {
      // Re-register on server in case it was lost (e.g. after data wipe)
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(existing.toJSON()),
      });
      localStorage.setItem(PUSH_STORAGE_KEY, '1');
      console.log('[push] Existing subscription confirmed');
      return;
    }

    // Only prompt if not already dismissed
    if (Notification.permission === 'denied') return;

    if (Notification.permission === 'granted') {
      await subscribe(registration, publicKey);
      return;
    }

    // Show a subtle prompt after a short delay (avoid prompting immediately on load)
    setTimeout(async () => {
      if (document.hidden) return; // don't prompt if tab not visible
      showPushPrompt(registration, publicKey);
    }, 3000);
  } catch (err) {
    console.warn('[push] Init error:', err);
  }
}

function showPushPrompt(registration, publicKey) {
  // Create a non-intrusive banner at the bottom of the page
  const banner = document.createElement('div');
  banner.id = 'push-prompt';
  banner.style.cssText = `
    position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
    background: #1e2732; border: 1px solid #38444d; border-radius: 12px;
    padding: 12px 16px; display: flex; align-items: center; gap: 12px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 0.875rem; color: #e7e9ea; z-index: 9999;
    box-shadow: 0 4px 20px rgba(0,0,0,0.4); max-width: 340px;
    animation: slideUp 0.3s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `@keyframes slideUp { from { opacity:0; transform: translateX(-50%) translateY(20px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }`;
  document.head.appendChild(style);

  banner.innerHTML = `
    <span style="font-size:1.3rem">🔔</span>
    <span style="flex:1">Enable notifications from PiClaw?</span>
    <button id="push-allow" style="background:#1d9bf0;border:none;border-radius:9999px;color:#fff;padding:6px 14px;font-size:0.8rem;font-weight:700;cursor:pointer">Allow</button>
    <button id="push-deny" style="background:transparent;border:none;color:#8b98a5;padding:6px 8px;font-size:0.8rem;cursor:pointer">✕</button>
  `;

  document.body.appendChild(banner);

  document.getElementById('push-allow').addEventListener('click', async () => {
    banner.remove();
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      await subscribe(registration, publicKey);
    }
  });

  document.getElementById('push-deny').addEventListener('click', () => {
    banner.remove();
  });

  // Auto-dismiss after 15 seconds
  setTimeout(() => banner.remove(), 15000);
}
