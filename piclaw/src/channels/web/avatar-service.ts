import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "fs";
import { resolve, extname } from "path";
import { fileURLToPath } from "url";

import { WORKSPACE_DIR } from "../../core/config.js";
import { contentTypeForPath } from "./workspace/file-utils.js";

export type AvatarKind = "agent" | "user";

interface AvatarMeta {
  source: string;
  file: string;
  contentType: string;
  updatedAt: string;
}

const AVATAR_DIR = resolve(WORKSPACE_DIR, ".piclaw", "avatars");

const EXT_TO_TYPE: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const TYPE_TO_EXT: Record<string, string> = {
  "image/png": ".png",
  "image/jpeg": ".jpg",
  "image/jpg": ".jpg",
  "image/gif": ".gif",
  "image/webp": ".webp",
  "image/svg+xml": ".svg",
  "image/x-icon": ".ico",
  "image/vnd.microsoft.icon": ".ico",
};

function normalizeContentType(value: string | null | undefined): string {
  return (value || "").split(";")[0].trim().toLowerCase();
}

function guessContentTypeFromExtension(ext: string): string {
  return EXT_TO_TYPE[ext.toLowerCase()] || "application/octet-stream";
}

function guessExtension(contentType: string, source: string): string {
  const normalized = normalizeContentType(contentType);
  const byType = TYPE_TO_EXT[normalized];
  if (byType) return byType;
  const ext = extname(source.split("?")[0]);
  if (ext) return ext;
  return ".img";
}

function readMeta(kind: AvatarKind): AvatarMeta | null {
  const metaPath = resolve(AVATAR_DIR, `${kind}.json`);
  if (!existsSync(metaPath)) return null;
  try {
    const parsed = JSON.parse(readFileSync(metaPath, "utf-8"));
    if (parsed && typeof parsed === "object") {
      const record = parsed as AvatarMeta;
      if (record.source && record.file && record.contentType) return record;
    }
  } catch {
    return null;
  }
  return null;
}

function writeMeta(kind: AvatarKind, meta: AvatarMeta): void {
  const metaPath = resolve(AVATAR_DIR, `${kind}.json`);
  mkdirSync(AVATAR_DIR, { recursive: true });
  writeFileSync(metaPath, `${JSON.stringify(meta, null, 2)}\n`, "utf-8");
}

function cleanupFile(pathname: string | undefined): void {
  if (!pathname) return;
  try {
    if (existsSync(pathname)) rmSync(pathname);
  } catch {
    // ignore
  }
}

async function loadRemoteAvatar(source: string): Promise<{ data: Uint8Array; contentType: string } | null> {
  const response = await fetch(source);
  if (!response.ok) return null;
  const contentType = normalizeContentType(response.headers.get("content-type"));
  if (contentType && !contentType.startsWith("image/")) return null;
  const buffer = new Uint8Array(await response.arrayBuffer());
  return {
    data: buffer,
    contentType: contentType || "application/octet-stream",
  };
}

function loadLocalAvatar(source: string): { data: Uint8Array; contentType: string } | null {
  const path = source.startsWith("file://") ? fileURLToPath(source) : source;
  if (!existsSync(path)) return null;
  const data = readFileSync(path);
  const contentType = contentTypeForPath(path);
  return { data: new Uint8Array(data), contentType };
}

function loadDataAvatar(source: string): { data: Uint8Array; contentType: string } | null {
  const match = source.match(/^data:([^;,]+)?(;base64)?,(.*)$/i);
  if (!match) return null;
  const contentType = normalizeContentType(match[1] || "application/octet-stream");
  if (contentType && !contentType.startsWith("image/")) return null;
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || "";
  try {
    const raw = isBase64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf-8");
    return { data: new Uint8Array(raw), contentType: contentType || "application/octet-stream" };
  } catch {
    return null;
  }
}

async function loadAvatarSource(source: string): Promise<{ data: Uint8Array; contentType: string } | null> {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    return await loadRemoteAvatar(source);
  }
  if (source.startsWith("data:")) {
    return loadDataAvatar(source);
  }
  return loadLocalAvatar(source);
}

export async function ensureAvatarCache(kind: AvatarKind, source: string): Promise<AvatarMeta | null> {
  if (!source) return null;

  const existing = readMeta(kind);
  if (existing && existing.source === source && existsSync(existing.file)) {
    return existing;
  }

  const loaded = await loadAvatarSource(source);
  if (!loaded) return null;

  const extension = guessExtension(loaded.contentType, source);
  const filePath = resolve(AVATAR_DIR, `${kind}${extension}`);
  mkdirSync(AVATAR_DIR, { recursive: true });
  writeFileSync(filePath, Buffer.from(loaded.data));

  if (existing && existing.file !== filePath) {
    cleanupFile(existing.file);
  }

  const contentType = normalizeContentType(loaded.contentType) || guessContentTypeFromExtension(extension);
  const meta: AvatarMeta = {
    source,
    file: filePath,
    contentType,
    updatedAt: new Date().toISOString(),
  };
  writeMeta(kind, meta);
  return meta;
}

export async function buildAvatarResponse(kind: AvatarKind, source: string, req: Request): Promise<Response | null> {
  if (!source) return null;

  const meta = await ensureAvatarCache(kind, source);
  if (!meta) {
    if (source.startsWith("http://") || source.startsWith("https://")) {
      return Response.redirect(source, 302);
    }
    return null;
  }

  const file = Bun.file(meta.file);
  if (!(await file.exists())) return null;
  const size = file.size ?? 0;
  const headers: Record<string, string> = {
    "Content-Type": meta.contentType || "application/octet-stream",
    "Content-Length": String(size),
    "Cache-Control": "no-store",
  };

  if (req.method === "HEAD") {
    return new Response(null, { status: 200, headers });
  }

  return new Response(file, { status: 200, headers });
}

export function resolveAvatarUrl(kind: AvatarKind, source?: string | null): string | null {
  if (!source) return null;
  return `/avatar/${kind}`;
}
