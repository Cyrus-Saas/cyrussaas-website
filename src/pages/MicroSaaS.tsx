import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Bot,
  Workflow,
  Network,
  Cpu,
  BrainCircuit,
  Cog,
  Shield,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ParticleCosmos from "@/components/ui/particle-cosmos";

const MicroSaaS = () => {
  return (
    <Layout>
      <SEO
        title="AI Agent Studio - CyrusSaaS"
        description="The Agentic AI Studio. We design, build, and deploy multi-agent AI systems that become your autonomous digital workforce."
        keywords="AI Agent Studio, Agentic AI, Digital Workforce, AI Orchestration, Multi-Agent Platform"
        canonicalUrl="/studio"
      />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <ParticleCosmos />
        <div className="container relative z-10 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold mb-8 shadow-[0_0_15px_rgba(200,160,80,0.2)]">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium tracking-wide">THE AGENTIC AI STUDIO</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Your AI Workforce,{" "}
              <span className="text-transparent bg-clip-text gradient-gold">
                Engineered
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We don't just build chatbots. We architect complete autonomous agent systems —
              from workflow mapping to production deployment — that replace manual operational roles
              with intelligent, self-coordinating digital employees.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold h-12 px-8 text-base"
              >
                <Link to="/contact">
                  Start Your AI Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 h-12 px-8 text-base backdrop-blur-sm"
              >
                <Link to="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* The Studio Process */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How the Studio Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A rigorous, architecture-first methodology. From mapping your operational
              workflows to deploying a self-managing agent fleet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discover & Map",
                icon: Workflow,
                desc: "We map your existing workflows, identify automation opportunities, and define the agent architecture.",
              },
              {
                step: "02",
                title: "Design & Architect",
                icon: Layers,
                desc: "Agent roles, tool registries, memory systems, and orchestration logic — all designed before a line of code.",
              },
              {
                step: "03",
                title: "Build & Integrate",
                icon: Cpu,
                desc: "We build each agent, connect your APIs, integrate your tools, and wire it all into the orchestrator.",
              },
              {
                step: "04",
                title: "Deploy & Monitor",
                icon: BarChart3,
                desc: "Production deployment with real-time monitoring, error recovery, and continuous optimization.",
              },
            ].map((item, idx) => (
              <Card
                key={idx}
                className="bg-card/50 border-white/10 hover:border-gold/30 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold/50 font-mono text-sm font-bold">{item.step}</span>
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="py-24 bg-navy-dark relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,160,80,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Our Agents Can Do
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Each agent in the system is purpose-built with specific capabilities,
              memory, and tool access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: "Autonomous Task Execution",
                desc: "Agents that independently plan, execute, and verify multi-step tasks without human intervention.",
              },
              {
                icon: Network,
                title: "Inter-Agent Communication",
                desc: "Agents coordinate with each other, share context, and delegate subtasks across the system.",
              },
              {
                icon: BrainCircuit,
                title: "Persistent Memory",
                desc: "Long-term memory via vector databases. Agents remember past interactions, decisions, and context.",
              },
              {
                icon: Cog,
                title: "Tool & API Usage",
                desc: "Agents use your existing tools — APIs, databases, CRMs, file systems — as their operational interface.",
              },
              {
                icon: Shield,
                title: "Secure Execution",
                desc: "Sandboxed execution environments with role-based access, audit trails, and encrypted communication.",
              },
              {
                icon: BarChart3,
                title: "Self-Monitoring",
                desc: "Built-in observability. Agents report their status, flag anomalies, and trigger escalation protocols.",
              },
            ].map((cap, idx) => (
              <div
                key={idx}
                className="bg-card/30 border border-white/5 rounded-xl p-6 hover:border-gold/20 transition-colors"
              >
                <cap.icon className="h-8 w-8 text-gold mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">{cap.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Agentic Advantage Stats */}
      <section className="py-24 bg-background relative">
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
            The Agentic Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "100%", label: "Autonomous Operation" },
              { stat: "24/7", label: "Always-On Digital Workforce" },
              { stat: "10x", label: "Faster Workflow Execution" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-white/10 hover:border-gold/30 transition-colors">
                <CardContent className="p-8 text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text gradient-gold mb-3">
                    {item.stat}
                  </div>
                  <p className="text-muted-foreground font-medium">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold-bg opacity-10 mix-blend-overlay" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Your Digital Workforce Today
            </h2>
            <p className="text-white/80 text-xl mb-10">
              Stop hiring for tasks. Start deploying agents.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy-dark hover:bg-gold-light font-bold h-14 px-10 text-lg shadow-[0_0_20px_rgba(200,160,80,0.3)]"
            >
              <Link to="/contact">
                Initiate Your Project
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicroSaaS;
