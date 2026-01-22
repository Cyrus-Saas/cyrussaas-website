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
                            These terms constitute a legally binding agreement between you ("Client") and CyrusSaaS ("Agency").
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
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        By hiring CyrusSaaS, paying a deposit, or using our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Scope of Services</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        We provide two distinct categories of service:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Standard Packaged Solutions:</strong> Template-based, rapid-deployment websites with fixed features.
                                        </li>
                                        <li>
                                            <strong>Custom Enterprise Development:</strong> Tailored software solutions with unique UI/UX, specific scaling capabilities, and custom backend logic.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Intellectual Property (IP) Rights</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Client Ownership:</strong> Upon full payment of all invoices, the Client is granted full ownership of the final website/software output.
                                        </li>
                                        <li>
                                            <strong>Agency Rights:</strong> CyrusSaaS retains valid ownership of underlying technologies, generic code snippets, libraries, and developer tools used to build the project.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Limitation of Liability</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        To the maximum extent permitted by applicable law:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            CyrusSaaS shall <strong>not be liable</strong> for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses.
                                        </li>
                                        <li>
                                            Our total cumulative liability for any claim arising out of or relating to these terms or the services shall not exceed the total amount actually paid by you to us for the specific service giving rise to the claim.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Indemnification</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        You agree to indemnify and hold harmless CyrusSaaS and its employees from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from: (a) your use of the services; (b) any content/data provided by you; or (c) your violation of any third-party rights.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Governing Law & Jurisdiction</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any legal suit, action, or proceeding arising out of or related to these Terms shall be instituted exclusively in the courts of <strong>Bhubaneswar, Odisha</strong>.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Third-Party Services Disclaimer</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground">
                                        Our services may involve integrations with third-party tools (e.g., Google, AWS, Payment Gateways, Hosting Providers). We are not responsible for the availability, accuracy, performance, or pricing changes of these third-party services. Any costs associated with third-party services are the sole responsibility of the Client.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">8. SEO & Rankings Disclaimer</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        While we employ industry-standard best practices for Search Engine Optimization (SEO):
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        <li>
                                            We <strong>do not guarantee</strong> any specific search engine ranking, position, or traffic numbers. "Rank 1" mentions are target objectives, not contractual promises.
                                        </li>
                                        <li>
                                            Search engine algorithms change frequently, and factors such as domain authority, competition, and content quality play a significant role beyond technical optimization.
                                        </li>
                                    </ul>
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
                            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                                <Link to="/policy">
                                    View Company Policy
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
