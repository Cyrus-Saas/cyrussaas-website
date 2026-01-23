import Layout from "@/components/Layout";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Policy = () => {
    return (
        <Layout>
            <SEO
                title="Company Policies - CyrusSaaS"
                description="CyrusSaaS Company Policy. Operational rules for payments, refunds, support, and delivery timelines. Ensure smooth collaboration."
                keywords="Company Policy, Refund Policy, Payment Terms, Support Policy"
                canonicalUrl="/policy"
            />
            <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                            <ShieldCheck className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">Operational Rules</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Company <span className="text-accent">Policies</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-4">
                            (Payment, Operations, Support)
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
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">1. Payment Terms</h2>
                                    <p className="text-muted-foreground mb-6">
                                        A non‑refundable advance (minimum 50%) is required before work commencement. Remaining payments must be cleared before final delivery or deployment.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">2. Refund & Cancellation</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Deposits are non‑refundable once work begins. Mid‑project cancellation does not entitle refund for completed milestones.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">3. Delivery & Timelines</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Timelines depend on timely client inputs. Delays caused by client shall proportionally extend delivery schedules.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">4. Support & Warranty</h2>
                                    <p className="text-muted-foreground mb-6">
                                        A limited bug‑fix warranty of 30 days is provided. Third‑party changes, server issues, or external API failures are excluded.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">5. Scope Creep</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Any work outside agreed scope shall be treated as additional and billed separately.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">6. Maintenance</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Ongoing support after warranty requires a maintenance agreement or hourly billing.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">7. Communication</h2>
                                    <p className="text-muted-foreground mb-6">
                                        Official communication channels are email, ticketing systems, or authorized messaging platforms. Business hours: Monday–Friday, 10:00 AM – 6:00 PM IST.
                                    </p>

                                    <h2 className="text-2xl font-bold mb-4 text-foreground">8. Portfolio Rights</h2>
                                    <p className="text-muted-foreground">
                                        Unless restricted by NDA, CyrusSaaS may showcase completed projects in its portfolio.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex justify-center pt-8 gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                                <Link to="/contact">
                                    Start a Project
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

export default Policy;
