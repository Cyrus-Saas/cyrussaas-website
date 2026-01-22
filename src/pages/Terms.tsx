import Layout from "@/components/Layout";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
    return (
        <Layout>
            <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/50 via-transparent to-primary/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                            <FileText className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">Legal Contract</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Terms and <span className="text-accent">Conditions</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-4">
                            CyrusSaaS (a pre‑incorporation entity, proposed to be incorporated as CyrusSaaS Private Limited)
                        </p>
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
                                    <p className="text-muted-foreground mb-6">
                                        These Terms and Conditions (“Terms”) constitute a legally binding agreement under the Indian Contract Act, 1872 and the Information Technology Act, 2000, between:
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        <strong>CyrusSaaS</strong>, a pre‑incorporation entity proposed to be incorporated as CyrusSaaS Private Limited, having its principal place of business at Bhubaneswar, Odisha, India (“Company”, “We”, “Us”, “Our”)
                                    </p>
                                    <p className="text-muted-foreground mb-6">
                                        and
                                    </p>
                                    <p className="text-muted-foreground mb-8">
                                        Any individual, company, or entity engaging our services or using our website or products (“Client”, “You”, “Your”).
                                    </p>
                                    <p className="text-muted-foreground mb-8">
                                        By accessing our website, executing a proposal, making payment, or using our services, you agree to be bound by these Terms.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Scope of Services</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We provide IT consulting, software development, MicroSaaS products, AI solutions, integrations, deployment, maintenance, and related professional services. The exact scope shall be defined in written proposals, Statements of Work (SOW), or invoices.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Electronic Contract Validity</h2>
                                    <p className="text-muted-foreground mb-6">
                                        This agreement is an electronic record under Section 10A of the Information Technology Act, 2000 and is legally enforceable without physical signatures.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Intellectual Property</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Upon full payment, the Client shall own the final deliverables created specifically for them.
                                        CyrusSaaS retains ownership of all pre‑existing code, frameworks, libraries, methodologies, templates, tools, and generic components.
                                        We retain the right to reuse non‑confidential technical know‑how and generalized code structures.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Confidentiality</h2>
                                    <p className="text-muted-foreground mb-6">
                                        All business information, source code, credentials, system access, data, and trade secrets shared shall be treated as confidential. This obligation survives termination.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Protection</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We shall process personal and sensitive data in accordance with the Digital Personal Data Protection Act, 2023 (India) and applicable international data protection laws. Third‑party hosting and cloud providers may process data as sub‑processors.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation of Liability</h2>
                                    <p className="text-muted-foreground mb-6">
                                        To the maximum extent permitted by law, our total liability arising out of any claim shall be limited to the total fees paid by the Client for the specific service giving rise to the claim.
                                        We shall not be liable for indirect, consequential, incidental, or loss‑of‑profit damages.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">7. No Guarantee</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We provide services on a best‑effort basis. No guarantee is made regarding revenue, user growth, SEO rankings, business success, uptime, or market performance.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">8. Third‑Party Services</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We are not responsible for failures, downtime, pricing changes, security breaches, or policy changes of third‑party platforms including but not limited to cloud providers, APIs, payment gateways, and software tools.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">9. Force Majeure</h2>
                                    <p className="text-muted-foreground mb-6">
                                        We shall not be liable for delays or failures caused by events beyond reasonable control including natural disasters, government actions, internet outages, war, pandemics, labor strikes, or infrastructure failures.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">10. No Partnership or Employment</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Nothing herein creates a partnership, joint venture, or employment relationship. We act solely as an independent contractor.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">11. Indemnity</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Client agrees to indemnify and hold CyrusSaaS harmless against claims arising from Client content, data, misuse of services, or violation of law.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">12. Termination</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Either party may terminate for breach with written notice. Outstanding payments remain payable upon termination.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">13. Arbitration</h2>
                                    <p className="text-muted-foreground mb-6">
                                        All disputes shall be resolved by arbitration under the Arbitration and Conciliation Act, 1996.
                                        Seat and venue of arbitration: Bhubaneswar, Odisha, India.
                                        Language: English.
                                        The arbitral award shall be final and binding.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">14. Governing Law & Jurisdiction</h2>
                                    <p className="text-muted-foreground">
                                        These Terms shall be governed by the laws of India. Courts at Bhubaneswar, Odisha shall have exclusive jurisdiction for interim relief and enforcement.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-center pt-8 gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                                <Link to="/contact">
                                    Agree & Start Project
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

export default Terms;
