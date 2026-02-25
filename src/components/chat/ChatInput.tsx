import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
    onSend: (message: string) => void;
    disabled?: boolean;
}

const ChatInput = ({ onSend, disabled }: ChatInputProps) => {
    const [input, setInput] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + "px";
        }
    }, [input]);

    const handleSend = () => {
        const trimmed = input.trim();
        if (!trimmed || disabled) return;
        onSend(trimmed);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="border-t border-white/10 bg-card/50 p-4 backdrop-blur">
            <div className="max-w-4xl mx-auto flex items-end gap-3">
                <div className="flex-grow relative">
                    <textarea
                        ref={textareaRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Describe your business workflow or ask about AI agent integration..."
                        rows={1}
                        disabled={disabled}
                        className="w-full resize-none rounded-xl border border-white/10 bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
                    />
                </div>
                <Button
                    onClick={handleSend}
                    disabled={!input.trim() || disabled}
                    className="bg-gold text-navy-dark hover:bg-gold-light h-11 w-11 p-0 rounded-xl flex-shrink-0"
                >
                    <Send className="h-4 w-4" />
                </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-2 max-w-4xl mx-auto">
                Powered by Gemini · CyrusSaaS Agentic AI Studio
            </p>
        </div>
    );
};

export default ChatInput;
