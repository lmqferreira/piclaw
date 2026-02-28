import { createMedia, getMediaById, getMediaInfoById } from "../../../db.js";
export async function handleMediaUpload(channel, req) {
    let form;
    try {
        form = await req.formData();
    }
    catch {
        return channel.json({ error: "Invalid form data" }, 400);
    }
    const file = form.get("file");
    if (!(file instanceof File))
        return channel.json({ error: "Missing file" }, 400);
    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const mediaId = createMedia(file.name || "upload", file.type || "application/octet-stream", data, null, { size: file.size });
    return channel.json({ id: mediaId, filename: file.name, size: file.size });
}
export function handleMedia(channel, id, thumbnail) {
    const media = getMediaById(id);
    if (!media)
        return channel.json({ error: "Media not found" }, 404);
    const blob = thumbnail && media.thumbnail ? media.thumbnail : media.data;
    const buffer = blob.buffer.slice(blob.byteOffset, blob.byteOffset + blob.byteLength);
    const body = new Blob([buffer], { type: media.content_type });
    return new Response(body, {
        headers: {
            "Content-Type": media.content_type,
        },
    });
}
export function handleMediaInfo(channel, id) {
    const info = getMediaInfoById(id);
    if (!info)
        return channel.json({ error: "Media not found" }, 404);
    return channel.json(info);
}
