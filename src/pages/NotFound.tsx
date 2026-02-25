import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <SEO
        title="Page Not Found - CyrusSaaS"
        description="Page not found."
        noindex={true}
      />
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[120px]" />
      
      <div className="text-center relative z-10">
        <h1 className="mb-2 text-8xl font-bold text-transparent bg-clip-text gradient-gold">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Signal Lost</p>
        <p className="mb-8 text-muted-foreground">The page you're looking for doesn't exist in this system.</p>
        <Button asChild className="bg-gold text-navy-dark hover:bg-gold-light font-medium">
          <Link to="/">
            Return to Base
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
