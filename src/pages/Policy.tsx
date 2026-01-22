import Layout from "@/components/Layout";
import { ShieldCheck, ArrowRight, Clock, RefreshCcw, Wallet, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Policy = () => {
    return (
        <Layout>
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
                            Clear rules for a smooth partnership. Please read how we work regarding payments, support, and revisions.
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
                                <div className="flex items-center gap-3 mb-4">
                                    <Wallet className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">1. Payment Policy</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        We structure our payments to ensure commitment from both sides.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Deposit:</strong> A <strong>50% non-refundable deposit</strong> is required to secure your slot in our development schedule and commence work.
                                        </li>
                                        <li>
                                            <strong>Milestone Payments:</strong> For projects exceeding ₹50,000, we may structure payments in milestones (e.g., 50% Deposit, 25% Beta Release, 25% Final Handover).
                                        </li>
                                        <li>
                                            <strong>Final Balance:</strong> The remaining balance is strictly due <strong>prior to the final handover</strong> of credentials, source code, or deployment to your live server.
                                        </li>
                                        <li>
                                            <strong>Late Fees:</strong> Invoices overdue by more than 7 days may incur a late fee of 5% of the outstanding balance.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <RefreshCcw className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">2. Refund & Cancellation Policy</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        We commit resources the moment you sign up.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Initial Deposit:</strong> Because we reserve time and turn away other work to focus on your project, the initial 50% deposit is <strong>non-refundable</strong> once the project kick-off meeting has occurred.
                                        </li>
                                        <li>
                                            <strong>Mid-Project Cancellation:</strong> If you choose to cancel the project after development has started but before completion, you will not be billed for the final balance. However, no refunds will be issued for amounts already paid.
                                        </li>
                                        <li>
                                            <strong>Our Right to Cancel:</strong> If a project is stalled for more than 30 days due to lack of client response, we reserve the right to cancel the contract. A re-initiation fee may apply to resume work.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">3. Support & Warranty</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        We stand by our code.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>30-Day Bug-Fix Warranty:</strong> We provide a 30-day warranty period starting from the date of final delivery. During this time, we will fix any bugs or errors in our code at no extra cost.
                                        </li>
                                        <li>
                                            <strong>Exclusions:</strong> This warranty <strong>does not cover</strong> issues caused by:
                                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                                <li>Third-party plugin updates or API changes.</li>
                                                <li>Hosting server issues or downtime.</li>
                                                <li>Modifications made to the code by you or another developer.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Maintenance Plans:</strong> After 30 days, support is available via our hourly rate or a monthly maintenance retainer.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <RefreshCcw className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">4. Revisions & "Scope Creep"</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <div className="mb-4">
                                        <p className="text-muted-foreground">
                                            We want you to love the result, but we must respect the project scope.
                                        </p>
                                    </div>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Included Revisions:</strong> Our standard packages include <strong>two (2) rounds of revisions</strong> during the design phase.
                                        </li>
                                        <li>
                                            <strong>Out of Scope:</strong> Requests that add new features, pages, or complex functionality not agreed upon in the initial quote will be treated as "Scope Creep." These will be quoted separately and billed as an add-on.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">5. Client Responsibilities</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        To hit your deadline, we need your help.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Assets:</strong> You agree to provide all necessary text, images, logos, and credentials within <strong>7 days</strong> of our request.
                                        </li>
                                        <li>
                                            <strong>Delays:</strong> If we are waiting on your feedback or assets for more than 7 days, the project timeline will be paused and extended accordingly. We are not responsible for missed deadlines caused by client delays.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <MessageSquare className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">6. Communication & Office Hours</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            <strong>Support Channels:</strong> Our primary support channels are Email and WhatsApp.
                                        </li>
                                        <li>
                                            <strong>Response Time:</strong> We aim to respond to all inquiries within <strong>24 hours</strong> during business days.
                                        </li>
                                        <li>
                                            <strong>Office Hours:</strong> Mon-Fri, 10:00 AM - 6:00 PM IST. We do not deploy major updates on Fridays to ensure weekend stability.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="h-6 w-6 text-accent" />
                                    <h2 className="text-2xl font-bold text-foreground">7. Portfolio Rights</h2>
                                </div>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        Unless a Non-Disclosure Agreement (NDA) is signed, CyrusSaaS retains the right to feature your project in our portfolio and social media as a case study of our work.
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
                            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                                <Link to="/terms">
                                    View Legal Terms
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
