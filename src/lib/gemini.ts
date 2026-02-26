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

const FALLBACK_API_KEYS = [
  "AIzaSyCUuLfxuwA19ILtBjuWTZFUlPe1y7tA0JA",
  "AIzaSyAv6VA8VBLwWwVY5Q_hsj2iQITyJ_CvBDs",
  "AIzaSyDTp1JrJ_p5SP_uJOJFCmiufuC_kz-UvW4",
  "AIzaSyD6Q-h3nRkphE3Jwcj0dBj58l2Wxj_qnko",
  "AIzaSyBjn_P092p8E4X6tzroNFyNs0IB8M1Ha5k",
  "AIzaSyCXGzIXnozdB3lyl9aWyUBwFE7bRZbapJ8",
  "AIzaSyB_ARFf5fXKhKov4UhvIgSoErZRezv-_hk",
  "AIzaSyAppRzFzqSwbmFIAitnUkM9VPXuP7U15Zc"
];

let currentKeyIndex = 0;

function getAvailableApiKeys(): string[] {
  const keys: string[] = [];
  const envKey = import.meta.env?.VITE_GEMINI_API_KEY;
  if (envKey) {
    keys.push(envKey);
  }
  keys.push(...FALLBACK_API_KEYS);
  
  if (keys.length === 0) {
    throw new Error("No Gemini API keys configured.");
  }
  
  return Array.from(new Set(keys));
}

export async function streamChatCompletion(
  messages: ChatMessage[],
  config: GeminiConfig,
  onChunk: (text: string) => void,
  onDone: () => void,
  onError: (error: Error) => void,
): Promise<void> {
  try {
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

    const keys = getAvailableApiKeys();
    let attempt = 0;
    let streamSuccess = false;
    let lastError: Error | null = null;

    while (attempt < keys.length && !streamSuccess) {
      const apiKey = keys[currentKeyIndex];
      const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${config.model}:streamGenerateContent?alt=sse&key=${apiKey}`;

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          if (response.status === 429) {
            console.warn(`Gemini API rate limit (429) hit for key at index ${currentKeyIndex}. Remaining attempts: ${keys.length - attempt - 1}`);
            lastError = new Error(`Gemini API error (429): Rate limit exceeded.`);
            currentKeyIndex = (currentKeyIndex + 1) % keys.length;
            attempt++;
            continue;
          } else {
            throw new Error(`Gemini API error (${response.status}): ${errorBody}`);
          }
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

        streamSuccess = true;
        onDone();
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        // Throw immediately on non-429 error
        throw lastError;
      }
    } // end while

    if (!streamSuccess && lastError) {
      throw lastError;
    }

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
