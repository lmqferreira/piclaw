export async function handlePost(channel, req, isReply, chatJid) {
    let data;
    try {
        data = await req.json();
    }
    catch {
        return channel.json({ error: "Invalid JSON" }, 400);
    }
    if (!data.content)
        return channel.json({ error: "Missing 'content' field" }, 400);
    if (isReply && !data.thread_id)
        return channel.json({ error: "Missing 'thread_id' field" }, 400);
    const mediaIds = Array.isArray(data.media_ids)
        ? data.media_ids.map((id) => Number(id)).filter((id) => Number.isFinite(id))
        : [];
    const interaction = channel.storeMessage(chatJid, data.content, false, mediaIds);
    if (!interaction)
        return channel.json({ error: "Failed to store message" }, 500);
    if (isReply && data.thread_id)
        interaction.data.thread_id = Number(data.thread_id);
    channel.broadcastEvent(isReply ? "new_reply" : "new_post", interaction);
    return channel.json(interaction, 201);
}
