import { Link } from "react-router-dom";
import { ArrowRight, Layers, Sparkles, Puzzle, Rocket, Lightbulb, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const MicroSaaS = () => {
  const benefits = [
    {
      icon: Puzzle,
      title: "Seamless Integration",
      description: "Tools designed to plug directly into your existing SaaS platforms without disruption.",
    },
    {
      icon: Sparkles,
      title: "Enhanced Capabilities",
      description: "Add powerful features to your product without building from scratch.",
    },
    {
      icon: Clock,
      title: "Subscription Model",
      description: "Predictable costs with flexible subscription plans that scale with your needs.",
    },
  ];


  return (
    <Layout>
      <SEO 
        title="MicroSaaS Solutions - CyrusSaaS"
        description="Agentic AI Ready Integrations. Empower your business with digital employees and automated workflows. Future-proof your SaaS today."
        keywords="MicroSaaS, Agentic AI, Automation, Digital Employees, SaaS Integrations"
        canonicalUrl="/microsaas"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
        <div className="container">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Agentic AI Ready Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scale Faster, Bigger, Better with{" "}
              <span className="text-accent">Agentic AI Ready</span> MicroSaaS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Future-proof your business with modular integrations designed for the era of Digital Employees. 
              We utilize Agentic AI to help you scale operations without increasing manual workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                <Link to="/contact">
                  Transform Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Value Prop Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building the Foundation for the Agentic Future
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our MicroSaaS solutions are architected to seamlessly integrate with future Agentic AI systems,
              enabling autonomous workflows and digital workforce scaling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Card className="border border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-6">
                  <Rocket className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Scale Faster & Bigger</h3>
                <p className="text-muted-foreground">
                  Accelerate growth with tools that automate complex processes, allowing you to expand 
                  operations without the bottleneck of traditional hiring.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-6">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Agentic AI Ready</h3>
                <p className="text-muted-foreground">
                  Every solution we build is pre-configured to interact with Agentic AI, serving as the 
                  hands and eyes for your future digital employees.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border hover:border-accent/50 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-6">
                  <Puzzle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Digital Employee Integration</h3>
                <p className="text-muted-foreground">
                  Replace manual tasks with intelligent automated workflows. Our ready-made integrations 
                  act as the toolkit for your virtual workforce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon / Call to Action Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-dashed border-accent/50 bg-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Make Your Company Agentic AI Ready
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Don't just build for today. Architect for a future where your SaaS product interacts 
                seamlessly with autonomous agents. Let's build your "Agentic AI Ready" ecosystem together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                  <Link to="/contact">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom Value Prop */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
              The Agentic Advantage
            </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">AI Integration Ready</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">0</div>
                <p className="text-muted-foreground">Manual Employees Needed for Integrated Tasks</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">10x</div>
                <p className="text-muted-foreground">Faster Scaling Velocity</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </Layout>
    );
};

export default MicroSaaS;
