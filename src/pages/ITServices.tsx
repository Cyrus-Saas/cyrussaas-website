import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Bot,
  MessageSquare,
  Users,
  Zap,
  Cpu,
  Network,
  CheckCircle2,
  Workflow,
  Server,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ParticleCosmos from "@/components/ui/particle-cosmos";

const ITServices = () => {
  const solutions = [
    {
      icon: Users,
      title: "AI HR Assistant",
      description:
        "Autonomous onboarding, policy lookups, internal communications, and employee support. A fully memory-enabled agent that handles your HR workflows 24/7.",
      features: ["Smart Onboarding", "Policy Q&A", "Leave Management", "Employee Analytics"],
    },
    {
      icon: MessageSquare,
      title: "AI Sales Agent",
      description:
        "Qualify leads, execute autonomous outreach campaigns, negotiate parameters, and book meetings directly into your CRM pipeline.",
      features: ["Lead Qualification", "Outreach Automation", "CRM Integration", "Meeting Scheduling"],
    },
    {
      icon: Zap,
      title: "AI Ops Automation",
      description:
        "Connect disparate SaaS tools. Let agents monitor data pipelines, trigger alerts, and resolve common infrastructure incidents autonomously.",
      features: ["Pipeline Monitoring", "Incident Response", "SaaS Integration", "Auto-Remediation"],
    },
    {
      icon: BrainCircuit,
      title: "Knowledge & RAG Systems",
      description:
        "Deploy robust Retrieval-Augmented Generation systems spanning your entire company's internal documentation and knowledge base.",
      features: ["Vector Search", "Document Ingestion", "Semantic Q&A", "Multi-Source RAG"],
    },
    {
      icon: Network,
      title: "Multi-Agent Orchestration",
      description:
        "Design and deploy coordinated multi-agent systems where specialized agents collaborate to execute complex, multi-step enterprise workflows.",
      features: ["Agent Coordination", "Task Routing", "Memory Sharing", "Error Recovery"],
    },
    {
      icon: Cpu,
      title: "Custom AI Development",
      description:
        "End-to-end custom AI system development: from architecture design through deployment, monitoring, and continuous optimization.",
      features: ["Architecture Design", "Model Integration", "API Development", "Production Deployment"],
    },
  ];

  return (
    <Layout>
      <SEO
        title="AI Solutions - CyrusSaaS"
        description="Production-ready AI agent solutions for enterprise. From HR assistants to multi-agent orchestration systems, we deploy autonomous AI that works."
        keywords="AI Solutions, AI Agents, HR AI, Sales AI, RAG Systems, Multi-Agent Systems"
        canonicalUrl="/solutions"
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <ParticleCosmos />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold mb-8">
              <BrainCircuit className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium tracking-wide">AI SOLUTIONS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Production-Ready{" "}
              <span className="text-transparent bg-clip-text gradient-gold">
                AI Agent Systems
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Pre-architected intelligent systems tailored to your departmental needs.
              Each solution is designed for enterprise-grade security, scalability, and
              autonomous operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold text-navy-dark hover:bg-gold-light font-semibold h-12 px-8 text-base"
              >
                <Link to="/contact">
                  Book AI Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-background relative border-t border-white/5">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Intelligent Systems, Deployed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each solution is a fully autonomous agent system — architected, tested,
              and production-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, idx) => (
              <Card
                key={idx}
                className="bg-card/50 border-white/10 hover:border-gold/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(200,160,80,0.08)] group flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-light text-gold mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    <solution.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {solution.description}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-xs px-3 py-1 rounded-full border border-white/10 text-muted-foreground bg-white/5"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-24 bg-navy-dark relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,45,60,0.4)_0%,transparent_100%)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Enterprise Engineering Standards
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every AI solution we deploy follows rigorous engineering standards.
                We treat agent systems as critical infrastructure, not experiments.
              </p>
              <div className="space-y-4">
                {[
                  "SOC 2 compliant data handling",
                  "Private model deployment options",
                  "99.9% uptime SLA available",
                  "End-to-end encryption",
                  "Custom agent memory & state management",
                  "Real-time monitoring & observability",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full" />
              <Card className="bg-black/80 border-white/10 backdrop-blur-xl relative z-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                <CardContent className="p-8 space-y-6">
                  <div className="text-center mb-4">
                    <span className="text-gold font-mono text-xs tracking-widest">AGENT ARCHITECTURE</span>
                  </div>
                  {[
                    { label: "ORCHESTRATOR", status: "ACTIVE", color: "text-emerald-400" },
                    { label: "AGENT POOL", status: "6 READY", color: "text-white" },
                    { label: "VECTOR MEMORY", status: "SYNCED", color: "text-emerald-400" },
                    { label: "TOOL REGISTRY", status: "12 TOOLS", color: "text-white" },
                    { label: "SECURITY", status: "ENCRYPTED", color: "text-gold" },
                  ].map((row, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-muted-foreground font-mono text-sm">{row.label}</span>
                      <span className={`${row.color} font-mono text-sm`}>{row.status}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Deploy Intelligence?
            </h2>
            <p className="text-muted-foreground text-xl mb-10">
              Let's architect the autonomous systems your enterprise needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gold text-navy-dark hover:bg-gold-light font-bold h-14 px-10 text-lg shadow-[0_0_20px_rgba(200,160,80,0.3)]"
            >
              <Link to="/contact">
                Initiate Strategy Call
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServices;
