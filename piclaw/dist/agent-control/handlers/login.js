/**
 * agent-control/handlers/login.ts – Provider authentication via /login and /logout.
 *
 * Card-driven authentication flow for AI model providers.
 * Works without a running model — all UI is hardcoded adaptive cards.
 *
 * Flow:
 *   /login  → posts a provider status card with login/logout actions
 *   /logout → same card, focused on logged-in providers
 *
 * Card submissions trigger OAuth flows or API key storage via the
 * adaptive card action handler in web.ts.
 */
/** Known providers that support direct API key authentication. */
const API_KEY_PROVIDERS = [
    { id: "anthropic", name: "Anthropic", envVar: "ANTHROPIC_API_KEY" },
    { id: "openai", name: "OpenAI", envVar: "OPENAI_API_KEY" },
    { id: "google", name: "Google AI", envVar: "GOOGLE_API_KEY" },
    { id: "azure", name: "Azure OpenAI", envVar: "AZURE_OPENAI_API_KEY" },
];
function getAuthStorage(session, modelRegistry) {
    const registry = session.modelRegistry ?? modelRegistry;
    return registry?.authStorage ?? null;
}
function getProviderStatus(authStorage) {
    const oauthProviders = authStorage.getOAuthProviders();
    const apiKeyIds = new Set(API_KEY_PROVIDERS.map((p) => p.id));
    const seen = new Set();
    const result = [];
    for (const p of oauthProviders) {
        seen.add(p.id);
        const cred = authStorage.get(p.id);
        result.push({
            id: p.id,
            name: p.name,
            authType: cred?.type === "oauth" ? "oauth" : cred?.type === "api_key" ? "api_key" : "none",
            hasOAuth: true,
            hasApiKey: apiKeyIds.has(p.id),
        });
    }
    for (const p of API_KEY_PROVIDERS) {
        if (seen.has(p.id))
            continue;
        seen.add(p.id);
        const cred = authStorage.get(p.id);
        result.push({
            id: p.id,
            name: p.name,
            authType: cred?.type === "api_key" ? "api_key" : cred?.type === "oauth" ? "oauth" : "none",
            hasOAuth: false,
            hasApiKey: true,
        });
    }
    return result;
}
function buildStatusEmoji(info) {
    if (info.authType === "oauth")
        return "✓ OAuth";
    if (info.authType === "api_key")
        return "✓ API key";
    return "—";
}
function buildProviderCardPayload(providers) {
    const body = [
        {
            type: "TextBlock",
            text: "Provider Authentication",
            weight: "Bolder",
            size: "Medium",
        },
        {
            type: "TextBlock",
            text: "Select a provider, choose an auth method, and submit.",
            wrap: true,
        },
    ];
    // Provider facts showing current status
    const facts = providers.map((p) => ({
        title: p.name,
        value: buildStatusEmoji(p),
    }));
    body.push({
        type: "FactSet",
        facts,
        spacing: "medium",
    });
    // Provider picker
    const providerChoices = providers.map((p) => ({
        title: `${p.name}${p.authType !== "none" ? ` (${buildStatusEmoji(p)})` : ""}`,
        value: p.id,
    }));
    body.push({
        type: "TextBlock",
        text: "Provider",
        weight: "Bolder",
        spacing: "medium",
    }, {
        type: "Input.ChoiceSet",
        id: "provider",
        style: "compact",
        choices: providerChoices,
        value: providers[0]?.id || "",
    });
    // Action picker
    const actionChoices = [
        { title: "Login with OAuth", value: "oauth" },
        { title: "Enter API key", value: "api_key" },
        { title: "Logout", value: "logout" },
    ];
    body.push({
        type: "TextBlock",
        text: "Action",
        weight: "Bolder",
        spacing: "medium",
    }, {
        type: "Input.ChoiceSet",
        id: "action",
        style: "compact",
        choices: actionChoices,
        value: "api_key",
    });
    // API key input (masked)
    body.push({
        type: "TextBlock",
        text: "API Key (only needed for \"Enter API key\" action)",
        spacing: "medium",
        isSubtle: true,
        wrap: true,
    }, {
        type: "Input.Text",
        id: "api_key",
        placeholder: "sk-...",
        style: "password",
    });
    return {
        type: "AdaptiveCard",
        version: "1.5",
        body,
        actions: [
            {
                type: "Action.Submit",
                title: "Submit",
                data: { intent: "provider-auth" },
            },
        ],
    };
}
/** Build the adaptive_card content block for the provider auth card. */
function buildProviderAuthCard(providers) {
    return {
        type: "adaptive_card",
        card_id: `provider-auth-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: "Provider authentication card.",
        payload: buildProviderCardPayload(providers),
    };
}
/** Handle /login — post provider auth card. */
export async function handleLogin(session, modelRegistry, _command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage) {
        return { status: "error", message: "Auth storage is not available." };
    }
    const providers = getProviderStatus(authStorage);
    if (providers.length === 0) {
        return { status: "error", message: "No authentication providers available." };
    }
    const card = buildProviderAuthCard(providers);
    return {
        status: "success",
        message: "Provider authentication",
        contentBlocks: [card],
    };
}
/** Handle /logout — same card, but message hints at logout. */
export async function handleLogout(session, modelRegistry, _command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage) {
        return { status: "error", message: "Auth storage is not available." };
    }
    const providers = getProviderStatus(authStorage);
    const loggedIn = providers.filter((p) => p.authType !== "none");
    if (loggedIn.length === 0) {
        return { status: "success", message: "No providers are currently logged in." };
    }
    const card = buildProviderAuthCard(providers);
    return {
        status: "success",
        message: "Provider authentication — select a provider and choose Logout",
        contentBlocks: [card],
    };
}
/**
 * Process a provider-auth card submission.
 *
 * Called from the adaptive card action handler when a card with
 * `intent: "provider-auth"` is submitted.
 *
 * Returns a result message to post back to the timeline.
 */
export async function processProviderAuthSubmission(session, modelRegistry, data) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage) {
        return { status: "error", message: "Auth storage is not available." };
    }
    const providerId = String(data.provider || "").trim();
    const action = String(data.action || "").trim();
    const apiKey = String(data.api_key || "").trim();
    if (!providerId) {
        return { status: "error", message: "No provider selected." };
    }
    const providers = getProviderStatus(authStorage);
    const provider = providers.find((p) => p.id === providerId);
    const providerName = provider?.name || providerId;
    if (action === "logout") {
        const cred = authStorage.get(providerId);
        if (!cred) {
            return { status: "error", message: `**${providerName}** is not logged in.` };
        }
        authStorage.set(providerId, undefined);
        authStorage.reload();
        return { status: "success", message: `✓ Logged out from **${providerName}**.` };
    }
    if (action === "api_key") {
        if (!apiKey) {
            return { status: "error", message: "API key cannot be empty." };
        }
        authStorage.set(providerId, { type: "api_key", key: apiKey });
        authStorage.reload();
        return { status: "success", message: `✓ API key stored for **${providerName}**. Use \`/model\` to select a model.` };
    }
    if (action === "oauth") {
        if (!provider?.hasOAuth) {
            return { status: "error", message: `**${providerName}** does not support OAuth. Use API key instead.` };
        }
        return await runOAuthLogin(authStorage, providerId, providerName);
    }
    return { status: "error", message: `Unknown action: ${action}` };
}
/** Run the OAuth login flow with manual-paste callbacks. */
async function runOAuthLogin(authStorage, providerId, providerName) {
    let authUrl = "";
    let authInstructions = "";
    try {
        const loginPromise = authStorage.login(providerId, {
            onAuth: (info) => {
                authUrl = info.url;
                authInstructions = info.instructions || "";
            },
            onProgress: () => { },
            onPrompt: async () => "",
            onManualCodeInput: () => {
                // The callback server won't work for remote browsers.
                // We can't do interactive paste in this flow yet, so we let
                // the callback server try and fail gracefully.
                return new Promise((_resolve, reject) => {
                    setTimeout(() => reject(new Error("Manual code input not supported in web flow yet")), 120_000);
                });
            },
        });
        await loginPromise;
        authStorage.reload();
        return {
            status: "success",
            message: `✓ Successfully logged in to **${providerName}** via OAuth. Use \`/model\` to select a model.`,
        };
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (authUrl) {
            const lines = [
                `OAuth for **${providerName}** needs manual completion:`,
                "",
                `1. Open this URL: ${authUrl}`,
                authInstructions ? `   ${authInstructions}` : "",
                `2. Complete login in your browser`,
                `3. If the callback didn't work, copy the redirect URL and use:`,
                `   \`/login ${providerId}\` then try OAuth again after setting up a tunnel`,
                "",
                `Error: ${msg}`,
            ].filter(Boolean);
            return { status: "error", message: lines.join("\n") };
        }
        return { status: "error", message: `Failed to login to **${providerName}**: ${msg}` };
    }
}
