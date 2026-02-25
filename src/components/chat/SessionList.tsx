import { Plus, MessageSquare, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ChatSession } from "@/lib/chat-store";

interface SessionListProps {
    sessions: ChatSession[];
    activeSessionId: string | null;
    onSelectSession: (id: string) => void;
    onNewSession: () => void;
    onDeleteSession: (id: string) => void;
}

const SessionList = ({
    sessions,
    activeSessionId,
    onSelectSession,
    onNewSession,
    onDeleteSession,
}: SessionListProps) => {
    const formatTime = (ts: number) => {
        const d = new Date(ts);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        if (diffMins < 1) return "Just now";
        if (diffMins < 60) return `${diffMins}m ago`;
        const diffHours = Math.floor(diffMins / 60);
        if (diffHours < 24) return `${diffHours}h ago`;
        return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <div className="h-full flex flex-col">
            <div className="p-3 border-b border-white/5">
                <Button
                    onClick={onNewSession}
                    className="w-full bg-gold/10 text-gold hover:bg-gold/20 border border-gold/20 h-9 text-sm"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    New Chat
                </Button>
            </div>

            <div className="flex-grow overflow-y-auto p-2 space-y-1">
                {sessions.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground text-xs">
                        No conversations yet
                    </div>
                ) : (
                    sessions.map((session) => (
                        <div
                            key={session.id}
                            className={`group flex items-center gap-2 rounded-lg px-3 py-2.5 cursor-pointer transition-colors ${activeSessionId === session.id
                                    ? "bg-gold/10 border border-gold/20"
                                    : "hover:bg-white/5 border border-transparent"
                                }`}
                            onClick={() => onSelectSession(session.id)}
                        >
                            <MessageSquare className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                            <div className="flex-grow min-w-0">
                                <p className="text-xs font-medium text-foreground truncate">
                                    {session.title}
                                </p>
                                <p className="text-[10px] text-muted-foreground">
                                    {formatTime(session.updatedAt)}
                                </p>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteSession(session.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-destructive"
                            >
                                <Trash2 className="h-3 w-3" />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SessionList;
