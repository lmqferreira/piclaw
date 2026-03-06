const piAiPath = "/home/azureuser/piclaw/piclaw/node_modules/@mariozechner/pi-ai/dist/index.js";
const piCodingPath = "/home/azureuser/piclaw/piclaw/node_modules/@mariozechner/pi-coding-agent/dist/index.js";

// @ts-ignore
const jitiMod = await import("/home/azureuser/piclaw/piclaw/node_modules/@mariozechner/jiti/lib/jiti.mjs");
const createJiti = jitiMod.createJiti ?? jitiMod.default;

const j = createJiti(import.meta.url, {
  alias: {
    "@mariozechner/pi-ai": piAiPath,
    "@mariozechner/pi-coding-agent": piCodingPath,
  },
});

try {
  const ext = await j.import("/home/azureuser/.pi/agent/extensions/azure-openai/index.ts");
  console.log("✅ Loaded OK, default export type:", typeof ext.default);
} catch (e: any) {
  console.error("❌ Load error:", e.message?.slice(0, 600));
  console.error(e.stack?.split("\n").slice(1,5).join("\n"));
}
