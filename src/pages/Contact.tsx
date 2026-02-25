import { useState } from "react";
import { Mail, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ParticleCosmos from "@/components/ui/particle-cosmos";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  contactNumber: z.string().trim().min(7, "Please enter a valid phone number").max(20, "Phone number must be less than 20 characters"),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw0YgaM1mf6ntHtAD7JdvLECQ5NAOsgGtHcoysWikRD_b5Bd4Sz8Xut4BBUVS0b5RkR/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Request Submitted!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Us - CyrusSaaS"
        description="Book your AI strategy session. Contact CyrusSaaS to discuss autonomous AI systems, multi-agent deployments, and digital workforce solutions."
        keywords="Contact CyrusSaaS, AI Strategy, Book Consultation, AI Agent Deployment"
        canonicalUrl="/contact"
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <ParticleCosmos />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Book Your{" "}
              <span className="text-transparent bg-clip-text gradient-gold">
                AI Strategy
              </span>{" "}
              Session
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to deploy autonomous systems? Let's discuss how agentic AI
              can transform your operations.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Reach out for AI strategy consultations, project inquiries, or partnership discussions.
                </p>
              </div>

              <Card className="bg-card border-white/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:cyrussaas@gmail.com"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      cyrussaas@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-white/10">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gold/10 text-gold flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 9337903728</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick info card */}
              <Card className="bg-navy-dark border-white/10 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">What Happens Next?</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-mono text-xs mt-0.5">01</span>
                      <span>We review your requirements within 24 hours</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-mono text-xs mt-0.5">02</span>
                      <span>Schedule a strategy call to map your workflows</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gold font-mono text-xs mt-0.5">03</span>
                      <span>Deliver a custom AI architecture proposal</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-white/10">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`bg-background border-white/10 focus:border-gold ${errors.fullName ? "border-destructive" : ""}`}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-destructive">{errors.fullName}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`bg-background border-white/10 focus:border-gold ${errors.email ? "border-destructive" : ""}`}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactNumber">Contact Number *</Label>
                        <Input
                          id="contactNumber"
                          name="contactNumber"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className={`bg-background border-white/10 focus:border-gold ${errors.contactNumber ? "border-destructive" : ""}`}
                        />
                        {errors.contactNumber && (
                          <p className="text-sm text-destructive">{errors.contactNumber}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="AI Agent Deployment"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`bg-background border-white/10 focus:border-gold ${errors.subject ? "border-destructive" : ""}`}
                        />
                        {errors.subject && (
                          <p className="text-sm text-destructive">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Describe the workflows you'd like to automate, the scale of your operations, and your timeline..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-background border-white/10 focus:border-gold ${errors.message ? "border-destructive" : ""}`}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gold text-navy-dark hover:bg-gold-light font-semibold h-12 text-base"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Strategy Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
