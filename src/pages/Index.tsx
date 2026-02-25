import { Link } from "react-router-dom";
import { ArrowRight, Bot, Workflow, Server, Network, BrainCircuit, Zap, Shield, BarChart3, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ParticleCosmos from "@/components/ui/particle-cosmos";
import AnimatedPipeline from "@/components/ui/animated-pipeline";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  return (
    <Layout>
      <SEO
        title="CyrusSaaS - Agentic AI Studio"
        description="We architect and deploy multi-agent AI infrastructures that automate operations, workflows, and digital labor."
        keywords="CyrusSaaS, Agentic AI, AI Studio, Multi-Agent Systems, AI Infrastructure, Workflow Automation"
        canonicalUrl="/"
      />

      {/* ═══════════════════════════════════════════════════
          HERO — Three.js Particle Cosmos
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleCosmos />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background z-[1]" />

        <div className="container relative z-10 pt-20 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-gold/30 bg-gold/5 text-gold mb-10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="text-sm font-medium tracking-[0.15em]">AGENTIC AI STUDIO</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.95] tracking-tight"
            >
              We Build
              <br />
              <span className="gradient-gold">Autonomous</span>
              <br />
              <span className="text-foreground/60">Intelligence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Multi-agent AI systems that automate your operations,
              replace manual workflows, and deploy a digital workforce
              that works 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold h-14 px-10 text-base rounded-xl shadow-[0_0_30px_rgba(200,160,80,0.3)]"
              >
                <Link to="/contact">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/15 hover:bg-white/5 h-14 px-10 text-base backdrop-blur-sm rounded-xl"
              >
                <Link to="/ai-studio">
                  Try AI Studio
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LIVE PIPELINE — Animated Workflow
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,160,80,0.04)_0%,transparent_60%)]" />
        <div className="container relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold/70 font-mono text-xs tracking-[0.2em] mb-4 block">HOW IT WORKS</span>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                The Agent Pipeline
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                Watch how a single query flows through our multi-agent architecture
                to deliver autonomous results.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <AnimatedPipeline className="max-w-5xl mx-auto px-4" />
          </FadeIn>

          {/* Pipeline stats */}
          <FadeIn delay={0.4}>
            <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 gap-8">
              {[
                { value: "<200ms", label: "Agent Response" },
                { value: "∞", label: "Parallel Tasks" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-gold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CAPABILITIES — Asymmetric Layout (No Cards!)
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-navy-dark relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-light/50 blur-[120px] rounded-full" />

        <div className="container relative z-10">
          <FadeIn>
            <span className="text-gold/70 font-mono text-xs tracking-[0.2em] mb-4 block">WHAT WE BUILD</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-20">
              Systems, Not Software
            </h2>
          </FadeIn>

          {/* Staggered feature blocks */}
          <div className="space-y-20">
            {[
              {
                icon: BrainCircuit,
                title: "Multi-Agent Orchestration",
                description: "Purpose-built agents that coordinate, delegate, and execute complex workflows autonomously. Each agent has its own memory, tool access, and decision-making logic.",
                detail: "Orchestrator → Planner → Executor → Validator",
                align: "left" as const,
              },
              {
                icon: Workflow,
                title: "Workflow Automation Engine",
                description: "Map your entire operational workflow. We replace every manual touchpoint with an intelligent agent that handles decisions, exceptions, and escalations.",
                detail: "Trigger → Classify → Route → Act → Report",
                align: "right" as const,
              },
              {
                icon: Bot,
                title: "Digital Employee Deployment",
                description: "Full-time AI employees for HR, Sales, Ops, and Support. They learn, adapt, and work 24/7 with persistent memory across all interactions.",
                detail: "Always On · Always Learning · Always Working",
                align: "left" as const,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`flex items-start gap-12 max-w-4xl ${item.align === "right" ? "ml-auto" : ""}`}>
                  <div className={`flex-shrink-0 ${item.align === "right" ? "order-2" : ""}`}>
                    <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-gold" />
                    </div>
                  </div>
                  <div className={item.align === "right" ? "text-right order-1" : ""}>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">{item.description}</p>
                    <div className="inline-block px-4 py-2 bg-card/50 border border-white/5 rounded-lg">
                      <code className="text-gold/80 text-sm font-mono">{item.detail}</code>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SOLUTIONS — Bento Grid Layout
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <FadeIn>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="text-gold/70 font-mono text-xs tracking-[0.2em] mb-4 block">SOLUTIONS</span>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground">
                  Deploy Today
                </h2>
              </div>
              <Button
                asChild
                variant="outline"
                className="border-white/10 hover:border-gold/30 hidden md:flex"
              >
                <Link to="/solutions">
                  View All Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Bento grid — not uniform cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Large feature */}
            <FadeIn className="md:col-span-7">
              <div className="group relative h-full min-h-[280px] rounded-2xl border border-white/5 bg-card/30 p-8 overflow-hidden hover:border-gold/30 transition-all duration-500">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-all duration-700" />
                <Network className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">AI Sales Agent</h3>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  Autonomous lead qualification, outreach campaigns, CRM updates,
                  and meeting scheduling — all running without human intervention.
                </p>
                <div className="mt-6 flex gap-2">
                  {["Lead Scoring", "Multi-Channel", "CRM Sync"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Stacked smaller features */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <FadeIn delay={0.1}>
                <div className="group relative rounded-2xl border border-white/5 bg-card/30 p-6 overflow-hidden hover:border-gold/30 transition-all duration-500">
                  <Bot className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">AI HR Assistant</h3>
                  <p className="text-muted-foreground text-sm">
                    Onboarding, policy Q&A, leave management, and employee analytics — all autonomous.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="group relative rounded-2xl border border-white/5 bg-card/30 p-6 overflow-hidden hover:border-gold/30 transition-all duration-500">
                  <BrainCircuit className="h-8 w-8 text-gold mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Knowledge & RAG</h3>
                  <p className="text-muted-foreground text-sm">
                    Deploy RAG systems spanning your entire knowledge base with semantic search.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom row — 3 items */}
            <FadeIn delay={0.15} className="md:col-span-4">
              <div className="group relative rounded-2xl border border-white/5 bg-card/30 p-6 overflow-hidden hover:border-gold/30 transition-all duration-500 h-full">
                <Zap className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Ops Automation</h3>
                <p className="text-muted-foreground text-sm">
                  Pipeline monitoring, incident response, and auto-remediation for your infra.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.25} className="md:col-span-4">
              <div className="group relative rounded-2xl border border-white/5 bg-card/30 p-6 overflow-hidden hover:border-gold/30 transition-all duration-500 h-full">
                <Shield className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Secure by Design</h3>
                <p className="text-muted-foreground text-sm">
                  SOC 2 compliant, encrypted, sandboxed execution environments with audit trails.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.35} className="md:col-span-4">
              <div className="group relative rounded-2xl border border-white/5 bg-card/30 p-6 overflow-hidden hover:border-gold/30 transition-all duration-500 h-full">
                <BarChart3 className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Observability</h3>
                <p className="text-muted-foreground text-sm">
                  Real-time monitoring, anomaly detection, and escalation protocols built-in.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY US — Split panel
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-gold/70 font-mono text-xs tracking-[0.2em] mb-4 block">WHY CYRUSSAAS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                We Don't Build Chatbots.
                <br />
                <span className="gradient-gold">We Engineer Infrastructure.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Architecture First", desc: "We design the full agent system before writing a line of code." },
                  { title: "Production Grade", desc: "Enterprise security, monitoring, and reliability built into every deployment." },
                  { title: "Custom Agent Memory", desc: "Persistent vector memory so your agents remember, learn, and improve." },
                  { title: "End-to-End Ownership", desc: "From discovery to deployment to monitoring — we own the entire stack." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-1 h-full min-h-[40px] bg-gold/30 rounded-full group-hover:bg-gold transition-colors" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* System status terminal */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />
                <div className="relative bg-black border border-white/10 rounded-2xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="text-xs text-muted-foreground ml-2 font-mono">cyrus-agent-system</span>
                  </div>
                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm space-y-3">
                    {[
                      { cmd: "$ cyrus status --all", color: "text-muted-foreground" },
                      { cmd: "├── ORCHESTRATOR     [ACTIVE]", color: "text-emerald-400" },
                      { cmd: "├── AGENT_POOL       [6 READY]", color: "text-white" },
                      { cmd: "├── VECTOR_MEMORY    [SYNCED]", color: "text-emerald-400" },
                      { cmd: "├── TOOL_REGISTRY    [12 TOOLS]", color: "text-white" },
                      { cmd: "├── SECURITY         [ENCRYPTED]", color: "text-gold" },
                      { cmd: "└── UPTIME           [99.97%]", color: "text-emerald-400" },
                      { cmd: "", color: "" },
                      { cmd: "$ cyrus deploy --env production", color: "text-muted-foreground" },
                      { cmd: "✓ System healthy. All agents operational.", color: "text-gold" },
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={line.color}
                      >
                        {line.cmd}
                      </motion.div>
                    ))}
                    <motion.span
                      className="inline-block w-2 h-4 bg-gold/70"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CTA — Full width
      ═══════════════════════════════════════════════════ */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Ready to Deploy
                <br />
                <span className="gradient-gold">Intelligence?</span>
              </h2>
              <p className="text-muted-foreground text-xl mb-10">
                Stop hiring for tasks. Start deploying agents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-navy-dark hover:bg-gold-light font-bold h-14 px-10 text-lg rounded-xl shadow-[0_0_30px_rgba(200,160,80,0.3)]"
                >
                  <Link to="/contact">
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/15 hover:bg-white/5 h-14 px-10 text-lg rounded-xl"
                >
                  <Link to="/ai-studio">
                    Chat with Cyrus AI
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
