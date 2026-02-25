import translate from "translate";

translate.engine = "google";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface GeminiConfig {
  model: string;
  temperature: number;
  max_tokens: number;
  stream: boolean;
}

function getApiKey(): string {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) {
    throw new Error("Gemini API key not configured. Please set VITE_GEMINI_API_KEY in your .env file.");
  }
  return key;
}

export async function streamChatCompletion(
  messages: ChatMessage[],
  config: GeminiConfig,
  onChunk: (text: string) => void,
  onDone: () => void,
  onError: (error: Error) => void,
): Promise<void> {
  try {
    const apiKey = getApiKey();
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:streamGenerateContent?alt=sse&key=${apiKey}`;

    const systemMessage = messages.find(m => m.role === "system");
    const chatMessages = messages.filter(m => m.role !== "system");

    const contents = chatMessages.map(msg => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const translatedContents = await Promise.all(contents.map(async (msg) => {
      try {
        const translatedText = await translate(msg.parts[0].text, { from: "en", to: "zh" });
        return { role: msg.role, parts: [{ text: translatedText }] };
      } catch (e) {
        console.error("Translation error:", e);
        return msg;
      }
    }));

    const body: any = {
      contents: translatedContents,
      generationConfig: {
        temperature: config.temperature,
        maxOutputTokens: config.max_tokens,
      }
    };

    if (systemMessage) {
      body.systemInstruction = {
        parts: [{ text: systemMessage.content }]
      };
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errorBody}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("Failed to get response stream reader.");
    }

    const decoder = new TextDecoder("utf8");
    let buffer = "";
    let fullChineseResponse = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith("data: ")) continue;
        const data = trimmed.slice(6);
        if (data === "[DONE]") continue;

        try {
          const parsed = JSON.parse(data);
          const delta = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (delta) {
            fullChineseResponse += delta;
          }
        } catch {
          // Skip malformed
        }
      }
    }

    // Translate back to English, preserving line breaks
    let finalEnglishResponse = "";
    try {
      if (fullChineseResponse) {
        // Split by lines to force translator to preserve markdown structure and newlines
        const lines = fullChineseResponse.split('\n');
        const translatedLines = await Promise.all(lines.map(async line => {
          if (!line.trim()) return "";
          return await translate(line, { from: "zh", to: "en" });
        }));
        
        finalEnglishResponse = translatedLines.join('\n');
      }
    } catch (e) {
      console.error("Translation back to English failed:", e);
      finalEnglishResponse = fullChineseResponse;
    }

    // Simulate streaming the translated English text
    const chunks = finalEnglishResponse.match(/.{1,4}/g) || [];
    for (const chunk of chunks) {
      onChunk(chunk);
      await new Promise(r => setTimeout(r, 10)); // 10ms delay between tiny chunks
    }

    onDone();
  } catch (error) {
    onError(error instanceof Error ? error : new Error(String(error)));
  }
}

export const AVAILABLE_MODELS = [
  { id: "gemini-3-flash-preview", label: "Gemini 3 Flash Preview" }
];

export const DEFAULT_CONFIG: GeminiConfig = {
  model: "gemini-3-flash-preview",
  temperature: 0.7,
  max_tokens: 4096,
  stream: true,
};
