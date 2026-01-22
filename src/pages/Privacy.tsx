import Layout from "@/components/Layout";
import { Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Lock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Data Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            {/* <p className="text-lg text-muted-foreground mb-4">
              (DPDP Act 2023 + International Compliance)
            </p> */}
            <p className="text-sm text-muted-foreground mb-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="border border-border">
              <CardContent className="p-8">
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information Collected</h2>
                  <p className="text-muted-foreground mb-4">We may collect:</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Name, email, phone</li>
                    <li>Company information</li>
                    <li>Payment and billing details</li>
                    <li>SaaS login data</li>
                    <li>Technical credentials</li>
                    <li>Source code and deployment access</li>
                    <li>Sensitive business and integration data</li>
                  </ul>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Purpose of Processing</h2>
                  <p className="text-muted-foreground mb-6">
                    Data is processed for service delivery, billing, communication, deployment, compliance, security, and improvement of our products.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Legal Basis</h2>
                  <p className="text-muted-foreground mb-6">
                    Processing is based on consent, contractual necessity, and legal compliance under DPDP Act 2023 and applicable global regulations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing</h2>
                  <p className="text-muted-foreground mb-6">
                    Data may be shared with hosting providers, cloud platforms, payment gateways, analytics services, and legal authorities when required by law.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. International Transfer</h2>
                  <p className="text-muted-foreground mb-6">
                    Data may be transferred and processed outside India with appropriate safeguards.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Security Measures</h2>
                  <p className="text-muted-foreground mb-6">
                    We implement industry‑standard technical and organizational security practices. However, no system is 100% breach‑proof.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Data Retention</h2>
                  <p className="text-muted-foreground mb-6">
                    Data is retained as long as required for contractual, legal, and operational purposes.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. User Rights</h2>
                  <p className="text-muted-foreground mb-6">
                    Clients may request access, correction, deletion, or withdrawal of consent, subject to legal and contractual limitations.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-6">
                    We are not liable for breaches caused by third‑party infrastructure beyond our reasonable control.
                  </p>

                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Updates</h2>
                  <p className="text-muted-foreground">
                    This policy may be updated periodically. Continued use constitutes acceptance of revisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-8 gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                <Link to="/contact">
                  Contact Data Officer
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

export default Privacy;
