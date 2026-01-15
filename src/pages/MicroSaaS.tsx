import { Link } from "react-router-dom";
import { ArrowRight, Layers, Sparkles, Puzzle, Rocket, Lightbulb, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

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
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-accent/5 via-transparent to-primary/5">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Layers className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">MicroSaaS Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Modular Tools to{" "}
              <span className="text-accent">Supercharge</span> Your SaaS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Subscription-based MicroSaaS integrations that enhance your existing platforms. 
              Improve revenue, automation, and reduce long-term maintenance costs.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Card className="border-2 border-dashed border-accent/50 bg-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 text-accent mb-6">
                <Rocket className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Products Launching Soon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our MicroSaaS products are currently under development. We're building powerful, 
                modular tools that will seamlessly integrate with popular SaaS platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                  <Link to="/contact">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    Share Your Product Idea
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get First-Hand Experience
              </h2>
              <p className="text-muted-foreground mb-6">
                Have a MicroSaaS product idea? Share it with us and be among the first to 
                experience our upcoming tools. We're looking for early adopters who want to:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Shape product features based on real-world needs",
                  "Access exclusive early-bird pricing",
                  "Influence our product roadmap",
                  "Get priority support and onboarding",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The MicroSaaS Advantage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Why leading SaaS companies choose modular integrations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-muted-foreground">Reduced development time with ready-made integrations</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">60%</div>
                <p className="text-muted-foreground">Lower maintenance costs compared to custom builds</p>
              </CardContent>
            </Card>
            <Card className="text-center border border-border hover:border-accent/50 transition-colors">
              <CardContent className="pt-8 pb-8">
                <div className="text-4xl font-bold text-accent mb-2">2x</div>
                <p className="text-muted-foreground">Faster time-to-market for new features</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Lightbulb className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Have a MicroSaaS Idea?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              We're always looking for innovative integration ideas. Share your vision 
              and let's explore how we can bring it to life together.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
              <Link to="/contact">
                Share Your Idea
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MicroSaaS;
