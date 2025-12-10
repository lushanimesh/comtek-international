import { MapPin, Phone, Globe } from "lucide-react";

const GlobalPresence = () => {
  return (
    <section id="global" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Global Presence</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Serving You Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            COMTEK sources products from leading manufacturers across India, China, Europe, and North America, ensuring customers benefit from the highest-quality materials at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sri Lanka HQ */}
          <div className="bg-card p-8 rounded-2xl shadow-comtek-md border border-primary/20 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Sri Lanka - Headquarters</h3>
                <p className="text-sm text-muted-foreground">COMTEK INTERNATIONAL (PVT) LTD</p>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                No. 176, Brookland Estate, Thaldiyawala Road, 10150, Sri Lanka
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                +94 77 759 9946
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Oversees international sourcing, quality control, export operations, and customer support across South Asia.
              </p>
            </div>
          </div>

          {/* Canada Office */}
          <div className="bg-card p-8 rounded-2xl shadow-comtek-md border border-border animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Canada - North America Office</h3>
                <p className="text-sm text-muted-foreground">COMTEK GLOBAL SOURCING INC.</p>
              </div>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                Toronto, Ontario, Canada
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                +1 437 260 9897 / +1 437 254 8112
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Manages North American sales, customer development, and coordination with suppliers for seamless service.
              </p>
            </div>
          </div>
        </div>

        {/* Sourcing network */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h4 className="font-semibold text-foreground mb-4">Global Sourcing Network</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["India", "China", "Germany", "United Kingdom", "Netherlands", "North America"].map((country) => (
              <span
                key={country}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
