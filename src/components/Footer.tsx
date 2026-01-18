import { Link } from "react-router-dom";

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
  src="/cyrussaas-logo.png"
  alt="CyrusSaaS Logo"
  className="h-8 w-auto"
/>
            </Link>
            <p className="text-primary-foreground/80 max-w-md">
              Empowering startups and growing companies to scale efficiently with
              custom IT solutions and MicroSaaS integrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Quick Links</h4>
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="mailto:cyrussaas@gmail.com" className="hover:text-accent transition-colors">
                  cyrussaas@gmail.com
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
