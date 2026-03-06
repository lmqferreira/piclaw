import { readFileSync } from "fs";
import { writeFileSync, unlinkSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
const CONFIG_PATH = process.env.PICLAW_CONFIG || "/workspace/.piclaw/config.json";
function getGroqKey() {
    try {
        const cfg = JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
        return cfg.groqApiKey || null;
    }
    catch {
        return null;
    }
}
/**
 * Transcribe an audio buffer using Groq Whisper API.
 * Returns the transcribed text, or null if transcription fails.
 */
export async function transcribeAudio(buffer, mimeType = "audio/ogg") {
    const apiKey = getGroqKey();
    if (!apiKey) {
        console.error("[transcribe] No Groq API key in config.json");
        return null;
    }
    // Write buffer to a temp file
    const ext = mimeType.includes("ogg") ? "ogg"
        : mimeType.includes("mp4") ? "mp4"
            : mimeType.includes("mpeg") || mimeType.includes("mp3") ? "mp3"
                : mimeType.includes("webm") ? "webm"
                    : "ogg";
    const tmpFile = join(tmpdir(), `piclaw_voice_${Date.now()}.${ext}`);
    writeFileSync(tmpFile, buffer);
    try {
        const formData = new FormData();
        const blob = new Blob([readFileSync(tmpFile)], { type: mimeType });
        formData.append("file", blob, `voice.${ext}`);
        formData.append("model", "whisper-large-v3-turbo");
        formData.append("response_format", "text");
        // Hint: user primarily speaks Portuguese
        formData.append("language", "pt");
        const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
            body: formData,
        });
        if (!response.ok) {
            const err = await response.text();
            console.error("[transcribe] Groq API error:", response.status, err);
            return null;
        }
        const text = (await response.text()).trim();
        return text || null;
    }
    catch (err) {
        console.error("[transcribe] Failed:", err);
        return null;
    }
    finally {
        try {
            unlinkSync(tmpFile);
        }
        catch { }
    }
}
