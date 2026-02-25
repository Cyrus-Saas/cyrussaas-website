import { Bot, User } from "lucide-react";
import type { ChatMessage as ChatMessageType } from "@/lib/gemini";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatMessageProps {
  message: ChatMessageType;
  isStreaming?: boolean;
}

const ChatMessage = ({ message, isStreaming }: ChatMessageProps) => {
  if (message.role === "system") return null;

  const isUser = message.role === "user";

  return (
    <div className={`flex gap-4 py-6 px-4 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center border border-gold/30">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-gold/15 text-foreground border border-gold/20"
            : "bg-card/80 text-foreground border border-white/5"
        }`}
      >
        <div className="prose prose-invert prose-sm max-w-none break-words leading-relaxed">
          {isUser ? (
            <div className="whitespace-pre-wrap">{message.content}</div>
          ) : (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content + (isStreaming ? " ▍" : "")}
            </ReactMarkdown>
          )}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 text-foreground flex items-center justify-center border border-white/10">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
