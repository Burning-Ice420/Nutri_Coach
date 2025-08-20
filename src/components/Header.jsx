import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Weight Loss", href: "/weightloss" },
    { name: "PCOD", href: "/pcod" },
    { name: "Wedding Plan", href: "/wedding" },
    { name: "Therapeutic Plan", href: "/therapeutic" },
    // { name: "All Plans", href: "/allplans" },
    { name: "Contact us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
             
              <div>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={85}
                  height={85}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
          
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
