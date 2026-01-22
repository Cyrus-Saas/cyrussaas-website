import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src="/footer-logo.png"
                alt="CyrusSaaS Logo"
                className="h-8 w-auto"
              />
            </Link>

            <p className="text-primary-foreground/80 max-w-md mb-6">
              Empowering startups and growing companies to scale efficiently with
              custom IT solutions and MicroSaaS integrations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/cyrussaas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="CyrusSaaS LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/cyrussaas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="CyrusSaaS Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* TikTok (custom SVG, lucide doesn’t include TikTok) */}
              <a
                href="https://www.tiktok.com/@cyrussaas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="CyrusSaaS TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M16.6 5.82c.41.37.86.67 1.35.89v2.49c-.49.03-.98-.05-1.44-.23a4.17 4.17 0 0 1-1.16-.69v5.6a4.3 4.3 0 1 1-4.3-4.3c.16 0 .32.01.47.03v2.5a1.8 1.8 0 1 0 1.83 1.8V1h2.36c.05.48.26.94.59 1.32Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/microsaas" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  MicroSaaS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/policy" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Company Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">
              Contact
            </h4>

            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a
                  href="mailto:cyrussaas@gmail.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  cyrussaas@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+919337903728"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 93379 03728
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} CyrusSaaS. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Built for scale. Designed for growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
