import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  P
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dietitian</h3>
                <p className="text-primary font-semibold">Poonam Sagar</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80">
              Transform your life with expert nutrition guidance and
              personalized diet plans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/weightloss"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link
                  href="/pcod"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  PCOD Management
                </Link>
              </li>
              <li>
                <Link
                  href="/wedding"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Wedding Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Therapeutic Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get Started</h4>
            <p className="text-secondary-foreground/80 mb-4">
              Ready to start your health journey?
            </p>
            <Button variant="default" className="w-full">
              Book Free Consultation
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 Dietitian Poonam Sagar. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://facebook.com"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              href="https://youtube.com"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
