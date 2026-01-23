import { Link } from "react-router-dom";
import { ArrowRight, Code, Server, Database, Workflow, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const ITServices = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      price: "₹9,999",
      description: "Professional websites tailored to your business needs.",
    },
    {
      icon: Server,
      title: "Mobile App Development",
      price: "₹49,999",
      description: "Feature-rich mobile applications for iOS and Android.",
    },
    {
      icon: Workflow,
      title: "Game Development",
      price: "₹79,999",
      description: "Immersive gaming experiences and interactive solutions.",
    },
    {
      icon: Database,
      title: "SEO Services",
      price: "₹6,999",
      period: "/month",
      description: "Optimize your site for Rank 1* on Google searches.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We dive deep into understanding your business, challenges, and objectives to define the perfect solution.",
    },
    {
      step: "02",
      title: "Design",
      description: "Our team architects a comprehensive solution with clear specifications and technical roadmap.",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates, ensuring you're always in the loop as your product takes shape.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Thorough testing, deployment, and handoff with full documentation and ongoing support options.",
    },
  ];


  return (
    <Layout>
      <SEO 
        title="IT Services & Pricing - CyrusSaaS"
        description="Custom Software Development starting at ₹9,999. Enterprise-grade Mobile Apps, Web Platforms, and Rank 1 SEO services tailored for your growth."
        keywords="IT Services, Web Development, Mobile Apps, SEO, Pricing, Custom Software"
        canonicalUrl="/it-services"
      />
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Code className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">IT Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Custom Software Solutions for{" "}
              <span className="text-accent">Growing Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We build enterprise-grade applications and platforms tailored to your unique
              requirements. From concept to deployment, we deliver solutions that drive
              real business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <a href="tel:9337903728">
                  Call Us Now: +91 93379 03728
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services & Pricing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing for high-quality development services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-border hover:border-accent/50 hover:shadow-lg transition-all flex flex-col h-full">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-baseline mb-1">
                      <span className="text-sm text-muted-foreground mr-2">Starting from</span>
                      <span className="text-4xl md:text-5xl font-bold text-accent">
                        {service.price}
                        <span className="text-accent/60 text-2xl">*</span>
                      </span>
                      {service.period && <span className="text-sm text-muted-foreground ml-1">{service.period}</span>}
                    </div>
                    <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-accent  decoration-dotted">
                      * Terms and conditions apply
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach that ensures quality, transparency, and on-time delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-lg p-6 h-full border border-border">
                  <span className="text-4xl font-bold text-gold-dark mb-4 block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Partner with CyrusSaaS?
              </h2>
              <p className="text-muted-foreground mb-8">
                We don't just build software—we build partnerships. Our team becomes an
                extension of yours, dedicated to your success.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated project team with senior developers",
                  "Transparent communication and regular updates",
                  "Scalable architectures for future growth",
                  "Post-launch support and maintenance options",
                  "Industry best practices and modern technologies",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
              <Users className="h-12 w-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ready to Build?</h3>
              <p className="text-primary-foreground/80 mb-6">
                Whether you have a detailed specification or just an idea, we're here to
                help bring your vision to life.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-gold-dark w-full">
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServices;
