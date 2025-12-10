import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import comtekLogo from "@/assets/comtek-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container-width flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+94777599946" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+94 77 759 9946</span>
            </a>
            <a href="mailto:info@comtek.lk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@comtek.lk</span>
            </a>
          </div>
          <span className="text-xs opacity-80">Serving Industries Since 2001</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container-width py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={comtekLogo} 
              alt="COMTEK International" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors underline-animation ${
                  isActive(link.href) 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`py-2 transition-colors ${
                    isActive(link.href) 
                      ? "text-primary font-medium" 
                      : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
