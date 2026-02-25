import { useState, useEffect, useRef, useCallback } from "react";
import { BrainCircuit, PanelLeftClose, PanelRightClose, PanelLeft, PanelRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import ChatSettings from "@/components/chat/ChatSettings";
import SessionList from "@/components/chat/SessionList";
import { streamChatCompletion, DEFAULT_CONFIG, type ChatMessage as ChatMsgType, type GeminiConfig } from "@/lib/gemini";
import { CYRUS_SYSTEM_PROMPT } from "@/lib/system-prompt";
import {
    getAllSessions,
    getSession,
    createSession,
    updateSession,
    deleteSession,
    getActiveSessionId,
    setActiveSessionId,
    generateSessionTitle,
    type ChatSession,
} from "@/lib/chat-store";
import { Link } from "react-router-dom";

const AIStudio = () => {
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [activeSession, setActiveSession] = useState<ChatSession | null>(null);
    const [config, setConfig] = useState<GeminiConfig>(DEFAULT_CONFIG);
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamContent, setStreamContent] = useState("");
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Load sessions on mount
    useEffect(() => {
        const allSessions = getAllSessions();
        setSessions(allSessions);
        const activeId = getActiveSessionId();
        if (activeId) {
            const session = getSession(activeId);
            if (session) {
                setActiveSession(session);
                return;
            }
        }
        // No active session, create one
        if (allSessions.length === 0) {
            handleNewSession();
        } else {
            setActiveSession(allSessions[0]);
            setActiveSessionId(allSessions[0].id);
        }
    }, []);

    // Scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [activeSession?.messages, streamContent]);

    const refreshSessions = useCallback(() => {
        setSessions(getAllSessions());
    }, []);

    const handleNewSession = useCallback(() => {
        const session = createSession();
        setActiveSession(session);
        refreshSessions();
    }, [refreshSessions]);

    const handleSelectSession = useCallback((id: string) => {
        const session = getSession(id);
        if (session) {
            setActiveSession(session);
            setActiveSessionId(id);
        }
    }, []);

    const handleDeleteSession = useCallback(
        (id: string) => {
            deleteSession(id);
            const remaining = getAllSessions();
            setSessions(remaining);
            if (activeSession?.id === id) {
                if (remaining.length > 0) {
                    setActiveSession(remaining[0]);
                    setActiveSessionId(remaining[0].id);
                } else {
                    handleNewSession();
                }
            }
        },
        [activeSession, handleNewSession]
    );

    const handleSendMessage = useCallback(
        async (content: string) => {
            if (!activeSession || isStreaming) return;

            const userMessage: ChatMsgType = { role: "user", content };
            const updatedMessages = [...activeSession.messages, userMessage];

            // Update session with user message
            const updatedSession: ChatSession = {
                ...activeSession,
                messages: updatedMessages,
                title: activeSession.messages.length === 0 ? generateSessionTitle([userMessage]) : activeSession.title,
            };
            updateSession(updatedSession);
            setActiveSession(updatedSession);
            refreshSessions();

            // Build the full messages array with system prompt
            const apiMessages: ChatMsgType[] = [
                { role: "system", content: CYRUS_SYSTEM_PROMPT },
                ...updatedMessages,
            ];

            setIsStreaming(true);
            setStreamContent("");

            let fullResponse = "";

            await streamChatCompletion(
                apiMessages,
                config,
                (chunk) => {
                    fullResponse += chunk;
                    setStreamContent(fullResponse);
                },
                () => {
                    // On done — save the assistant message
                    const assistantMessage: ChatMsgType = { role: "assistant", content: fullResponse };
                    const finalSession: ChatSession = {
                        ...updatedSession,
                        messages: [...updatedMessages, assistantMessage],
                    };
                    updateSession(finalSession);
                    setActiveSession(finalSession);
                    refreshSessions();
                    setIsStreaming(false);
                    setStreamContent("");
                },
                (error) => {
                    console.error("Stream error:", error);
                    const errorMessage: ChatMsgType = {
                        role: "assistant",
                        content: `⚠️ **Error**: ${error.message}\n\nPlease check your Gemini API key in the \`.env\` file and try again.`,
                    };
                    const finalSession: ChatSession = {
                        ...updatedSession,
                        messages: [...updatedMessages, errorMessage],
                    };
                    updateSession(finalSession);
                    setActiveSession(finalSession);
                    refreshSessions();
                    setIsStreaming(false);
                    setStreamContent("");
                }
            );
        },
        [activeSession, isStreaming, config, refreshSessions]
    );

    const displayMessages = activeSession?.messages.filter((m) => m.role !== "system") || [];

    return (
        <>
            <SEO
                title="AI Studio - CyrusSaaS"
                description="CyrusSaaS AI Studio — Chat with our AI Strategy Consultant powered by Gemini. Get personalized agentic AI integration plans for your business."
                keywords="AI Studio, AI Chat, Gemini, Agentic AI Consulting, CyrusSaaS"
                canonicalUrl="/ai-studio"
            />

            <div className="h-screen flex flex-col bg-background overflow-hidden">
                {/* Top Bar */}
                <header className="h-14 border-b border-white/10 bg-black/80 backdrop-blur flex items-center justify-between px-4 flex-shrink-0 z-20">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground h-8 w-8 p-0"
                            onClick={() => setLeftSidebarOpen(!leftSidebarOpen)}
                        >
                            {leftSidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
                        </Button>
                        <Link to="/" className="flex items-center gap-2">
                            <BrainCircuit className="h-5 w-5 text-gold" />
                            <span className="font-semibold text-foreground text-sm hidden sm:inline">CyrusSaaS</span>
                        </Link>
                        <span className="text-white/20">|</span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-gold" />
                            AI Studio
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground hidden md:inline font-mono">
                            {config.model} · t={config.temperature}
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground h-8 w-8 p-0"
                            onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                        >
                            {rightSidebarOpen ? <PanelRightClose className="h-4 w-4" /> : <PanelRight className="h-4 w-4" />}
                        </Button>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex-grow flex overflow-hidden">
                    {/* Left Sidebar — Sessions */}
                    {leftSidebarOpen && (
                        <aside className="w-64 border-r border-white/10 bg-card/30 flex-shrink-0 overflow-hidden">
                            <SessionList
                                sessions={sessions}
                                activeSessionId={activeSession?.id || null}
                                onSelectSession={handleSelectSession}
                                onNewSession={handleNewSession}
                                onDeleteSession={handleDeleteSession}
                            />
                        </aside>
                    )}

                    {/* Center — Chat */}
                    <main className="flex-grow flex flex-col overflow-hidden min-w-0">
                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto">
                            {displayMessages.length === 0 && !isStreaming ? (
                                // Empty state
                                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 border border-gold/20">
                                        <BrainCircuit className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground mb-3">Cyrus AI Studio</h2>
                                    <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
                                        I'm your AI Strategy Consultant. Tell me about your business and I'll design
                                        a personalized agentic AI integration plan for you.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
                                        {[
                                            "How can AI agents automate my HR operations?",
                                            "Design a multi-agent system for my sales pipeline",
                                            "What's the best AI architecture for customer support?",
                                            "How to replace manual data entry with AI agents?",
                                        ].map((prompt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleSendMessage(prompt)}
                                                className="text-left text-xs p-3 rounded-xl border border-white/10 bg-card/50 text-muted-foreground hover:border-gold/30 hover:text-foreground transition-colors"
                                            >
                                                {prompt}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="max-w-4xl mx-auto w-full">
                                    {displayMessages.map((msg, idx) => (
                                        <ChatMessage key={idx} message={msg} />
                                    ))}
                                    {isStreaming && streamContent && (
                                        <ChatMessage
                                            message={{ role: "assistant", content: streamContent }}
                                            isStreaming={true}
                                        />
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <ChatInput onSend={handleSendMessage} disabled={isStreaming} />
                    </main>

                    {/* Right Sidebar — Settings */}
                    {rightSidebarOpen && (
                        <aside className="w-72 border-l border-white/10 bg-card/30 flex-shrink-0 overflow-hidden">
                            <ChatSettings config={config} onChange={setConfig} />
                        </aside>
                    )}
                </div>
            </div>
        </>
    );
};

export default AIStudio;
