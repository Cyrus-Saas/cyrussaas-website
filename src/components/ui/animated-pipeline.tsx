import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface PipelineStep {
  label: string;
  icon: string;
  description: string;
}

const defaultSteps: PipelineStep[] = [
  { label: "Input", icon: "📥", description: "User query or trigger event" },
  { label: "Orchestrator", icon: "🧠", description: "Routes to specialized agents" },
  { label: "Agent Pool", icon: "🤖", description: "Executes assigned tasks" },
  { label: "Tools & APIs", icon: "🔧", description: "Interfaces with external systems" },
  { label: "Memory", icon: "💾", description: "Stores context & decisions" },
  { label: "Output", icon: "📤", description: "Delivers results & actions" },
];

interface AnimatedPipelineProps {
  steps?: PipelineStep[];
  className?: string;
}

const AnimatedPipeline = ({ steps = defaultSteps, className }: AnimatedPipelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [dataPackets, setDataPackets] = useState<number[]>([]);

  // Sequential step activation
  useEffect(() => {
    if (!isInView) return;
    const timers: NodeJS.Timeout[] = [];
    steps.forEach((_, i) => {
      timers.push(setTimeout(() => setActiveStep(i), 400 + i * 500));
    });
    return () => timers.forEach(clearTimeout);
  }, [isInView, steps]);

  // Continuous data flow animation
  useEffect(() => {
    if (!isInView || activeStep < steps.length - 1) return;
    const interval = setInterval(() => {
      setDataPackets((prev) => {
        const next = [...prev, Date.now()];
        return next.slice(-5); // Keep max 5 packets
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isInView, activeStep, steps.length]);

  return (
    <div ref={containerRef} className={`relative ${className || ""}`}>
      {/* Pipeline track */}
      <div className="relative flex items-center justify-between">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2">
          <div className="relative h-full w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold/60 via-gold to-gold/60"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            />
            {/* Flowing data packets */}
            {dataPackets.map((id) => (
              <motion.div
                key={id}
                className="absolute top-1/2 -translate-y-1/2 w-6 h-1 rounded-full bg-gold shadow-[0_0_8px_rgba(200,160,80,0.8)]"
                initial={{ left: "-2%", opacity: 1 }}
                animate={{ left: "102%", opacity: [1, 1, 0.5] }}
                transition={{ duration: 3, ease: "linear" }}
              />
            ))}
          </div>
        </div>

        {/* Steps */}
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={activeStep >= i ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Node */}
            <motion.div
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-xl md:text-2xl border transition-all duration-500 ${
                activeStep >= i
                  ? "bg-navy-dark border-gold/50 shadow-[0_0_20px_rgba(200,160,80,0.2)]"
                  : "bg-card/50 border-white/10"
              }`}
              whileHover={{ scale: 1.1, borderColor: "rgba(200,160,80,0.8)" }}
            >
              {step.icon}
              {/* Pulse ring on active */}
              {activeStep === i && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-gold/40"
                  animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Label */}
            <span className={`mt-3 text-xs md:text-sm font-semibold transition-colors duration-500 ${
              activeStep >= i ? "text-gold" : "text-muted-foreground"
            }`}>
              {step.label}
            </span>

            {/* Description */}
            <span className="mt-1 text-[10px] md:text-xs text-muted-foreground text-center max-w-[80px] md:max-w-[100px] leading-tight">
              {step.description}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedPipeline;
