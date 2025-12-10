import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import comtekLogo from "@/assets/comtek-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={comtekLogo} 
                alt="COMTEK International" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading Sri Lankan distributor of specialty chemicals and raw materials, serving industries since 2001.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/industries" className="opacity-80 hover:opacity-100 transition-opacity">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/products" className="opacity-80 hover:opacity-100 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold mb-4">Industries</h4>
            <ul className="space-y-3 text-sm">
              {["Construction Chemicals", "Paints & Coatings", "PVC & Plastics", "Rubber", "Cosmetics"].map((industry) => (
                <li key={industry}>
                  <span className="opacity-80">{industry}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>No. 176, Brookland Estate, Thaldiyawala Road, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4" />
                <span>+94 77 759 9946</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span>info@comtek.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-80">
            © {currentYear} COMTEK INTERNATIONAL (PVT) LTD. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
