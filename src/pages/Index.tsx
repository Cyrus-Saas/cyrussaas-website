import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <span className="text-sm font-medium">B2B Technology Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scale Your Business with{" "}
              <span className="text-accent">Enterprise-Ready</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              CyrusSaaS helps startups and growing companies scale efficiently through 
              custom IT solutions and MicroSaaS integrations that enhance your existing platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/it-services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CyrusSaaS?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver solutions that drive measurable business outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Scalability</h3>
                <p className="text-muted-foreground">
                  Solutions designed to grow with your business, from startup to enterprise scale.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Reliability</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade infrastructure and robust architectures you can depend on.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Efficiency</h3>
                <p className="text-muted-foreground">
                  Reduce costs and improve profitability with optimized workflows and automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Two Verticals */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Verticals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Two specialized approaches to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IT Services Card */}
            <Card className="relative overflow-hidden border-2 border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary text-primary-foreground mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">IT Services</h3>
                <p className="text-muted-foreground mb-6">
                  Custom software development and project-based solutions tailored to your 
                  unique business requirements. We build applications, platforms, and systems 
                  that power your operations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Custom Application Development
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Platform Engineering
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Full Project Delivery
                  </li>
                </ul>
                <Button asChild variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                  <Link to="/it-services">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* MicroSaaS Card */}
            <Card className="relative overflow-hidden border-2 border-border hover:border-accent/50 transition-colors group">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent text-accent-foreground mb-6">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">MicroSaaS Products</h3>
                <p className="text-muted-foreground mb-6">
                  Subscription-based tools designed to integrate seamlessly with your existing 
                  SaaS platforms. Modular, scalable, and built to enhance your product's capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Third-Party Integrations
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Subscription Model
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                    Revenue & Automation Tools
                  </li>
                </ul>
                <Button asChild variant="outline" className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors">
                  <Link to="/microsaas">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Scale Your Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Let's discuss how CyrusSaaS can help you achieve your growth objectives 
              with the right technology solutions.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
