import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AVAILABLE_MODELS, type GeminiConfig } from "@/lib/gemini";
import { Settings, Thermometer, Hash, Cpu, FileText } from "lucide-react";

interface ChatSettingsProps {
    config: GeminiConfig;
    onChange: (config: GeminiConfig) => void;
}

const ChatSettings = ({ config, onChange }: ChatSettingsProps) => {
    return (
        <div className="h-full overflow-y-auto p-4 space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Settings className="h-4 w-4 text-gold" />
                <h3 className="font-semibold text-foreground text-sm">Model Settings</h3>
            </div>

            {/* Model Selector */}
            <div className="space-y-2">
                <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Cpu className="h-3 w-3" /> Model
                </Label>
                <Select
                    value={config.model}
                    onValueChange={(val) => onChange({ ...config, model: val })}
                >
                    <SelectTrigger className="bg-background border-white/10 text-sm">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                        {AVAILABLE_MODELS.map((m) => (
                            <SelectItem key={m.id} value={m.id}>
                                {m.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Temperature */}
            <div className="space-y-3">
                <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Thermometer className="h-3 w-3" /> Temperature
                    <span className="ml-auto text-gold font-mono">{config.temperature.toFixed(1)}</span>
                </Label>
                <Slider
                    value={[config.temperature]}
                    onValueChange={([val]) => onChange({ ...config, temperature: val })}
                    min={0}
                    max={2}
                    step={0.1}
                    className="w-full"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Precise</span>
                    <span>Creative</span>
                </div>
            </div>

            {/* Max Tokens */}
            <div className="space-y-2">
                <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Hash className="h-3 w-3" /> Max Tokens
                </Label>
                <Input
                    type="number"
                    value={config.max_tokens}
                    onChange={(e) =>
                        onChange({ ...config, max_tokens: Math.max(100, Math.min(8192, parseInt(e.target.value) || 4096)) })
                    }
                    className="bg-background border-white/10 text-sm font-mono"
                    min={100}
                    max={8192}
                />
            </div>

            {/* System Prompt Info */}
            <div className="space-y-2 pt-4 border-t border-white/5">
                <Label className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <FileText className="h-3 w-3" /> System Prompt
                </Label>
                <div className="bg-background/50 border border-white/5 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        <span className="text-gold font-medium">Cyrus AI</span> — CyrusSaaS AI Strategy Consultant.
                        Provides genuine agentic AI consulting while representing CyrusSaaS capabilities and guiding toward strategy sessions.
                    </p>
                </div>
            </div>

            {/* Info */}
            <div className="bg-gold/5 border border-gold/10 rounded-lg p-3 mt-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                    💡 Lower temperature = more focused, deterministic responses.
                    Higher temperature = more creative, varied responses.
                </p>
            </div>
        </div>
    );
};

export default ChatSettings;
