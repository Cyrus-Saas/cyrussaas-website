import Layout from "@/components/Layout";
import { FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
    return (
        <Layout>
            <section className="py-20 md:py-28 bg-gradient-to-br from-secondary/50 via-transparent to-primary/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
                            <FileText className="h-4 w-4 mr-2" />
                            <span className="text-sm font-medium">Transparency & Scope</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            Service <span className="text-accent">Terms</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Please read these terms carefully regarding our services, pricing, and project scope.
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
                                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Transparency & Scope of Services</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        At CyrusSaaS, we believe in crystal clear communication. To ensure there is no confusion, please understand
                                        the distinct difference between our <strong>Standard Packaged Solutions</strong> and <strong>Custom Enterprise Development</strong>.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Entry-Level Pricing (e.g., ₹9,999):</strong> This covers strictly template-based, rapid-deployment websites.
                                            It is perfect for businesses needing a quick digital presence without complex custom logic.
                                        </li>
                                        <li>
                                            <strong>Custom Development:</strong> If your business requires unique UI/UX, specific scaling capabilities, or complex backend logic,
                                            this falls under custom development. The pricing will be higher to reflect the dedicated engineering resources,
                                            premium facility, and specialized attention your project receives.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Help You Grow</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        Our goal is not just to build software, but to build your business. We act as your growth partners by providing:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Scalable Architecture:</strong> We design systems that can handle your growth from day one, ensuring you don't face technical debt later.
                                        </li>
                                        <li>
                                            <strong>Premium Service Quality:</strong> Unlike freelance marketplaces, we offer a managed agency experience with verified code quality,
                                            security audits, and reliable support.
                                        </li>
                                        <li>
                                            <strong>Business-First Approach:</strong> We align our technical decisions with your business goals, offering advice on how to leverage
                                            technology for maximum ROI.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Pricing Policy & Quotations</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        We offer a premium, packaged service that guarantees results.
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Why Higher for Custom?</strong> Custom solutions require senior architects and designers to craft a unique product.
                                            Our pricing reflects the high caliber of talent and facility we dedicate to your project.
                                        </li>
                                        <li>
                                            <strong>Quotation Process:</strong> For any requirement outside our Standard Packaged Solutions, we will provide a detailed,
                                            transparent quotation after a discovery call. This quote is final and inclusive of the premium support and quality assurance we promise.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">4. SEO & Search Rankings Disclaimer</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <p className="text-muted-foreground mb-4">
                                        Regarding our SEO services and the mention of "Rank 1 on Google":
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Provisional Goal:</strong> Reaching "Rank 1" is a target objective we aim for through rigorous optimization.
                                            However, this is <strong>not a legally binding guarantee</strong>.
                                        </li>
                                        <li>
                                            <strong>Visibility Improvement:</strong> Our ₹6,999/month plan is designed to significantly increase your website's visibility,
                                            traffic, and search presence using industry-standard best practices.
                                        </li>
                                        <li>
                                            <strong>External Factors:</strong> Search engine algorithms (like Google's) change frequently and depend on hundreds of factors beyond our control (competitor activity, domain age, etc.).
                                            While we maximize your chances, we cannot guarantee specific ranking positions.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Payments & Refunds</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                                        <li>
                                            <strong>Payment Schedule:</strong> A 50% non-refundable deposit is required to commence work. The remaining balance is due prior to final project handover.
                                        </li>
                                        <li>
                                            <strong>Refund Policy:</strong> Once development has commenced, the initial deposit is non-refundable as it covers our resource allocation and setup costs.
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                         <div className="flex justify-center pt-8 gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-gold-dark">
                                <Link to="/contact">
                                    Start Your Project
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

export default TermsOfService;
