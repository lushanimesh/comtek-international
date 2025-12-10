import { CheckCircle2, Target, Eye } from "lucide-react";

const AboutSection = () => {
  const values = [
    "Superior quality products",
    "Genuine, customer-first service",
    "Technical reliability",
    "Financial stability",
    "Sustainable long-term partnerships",
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-width">
        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="animate-fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Leading Specialty Chemical Distributor in Sri Lanka
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              COMTEK INTERNATIONAL (PVT) LTD is a leading Sri Lankan distributor of specialty chemicals and raw materials, serving the paints and coatings, construction chemicals, PVC, rubber, and cosmetics industries. Since our establishment in 2001, we have built a strong reputation for reliability, technical expertise, efficient delivery, and consistent product quality.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For over two decades, we have partnered with globally recognized manufacturers to supply advanced additives such as dispersants, thickeners, binders, alkyd and epoxy resins, defoamers, impact modifiers, UV stabilizers, pigments, and a wide range of performance-enhancing raw materials.
            </p>

            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <p className="opacity-90 leading-relaxed mb-6">
                Founded in 2001, COMTEK INTERNATIONAL (PVT) LTD began as a focused supplier to Sri Lanka's textile sector. Over the years, we expanded our product portfolio and diversified our expertise across major industrial segments.
              </p>
              <p className="opacity-90 leading-relaxed">
                Today, our footprint extends beyond Sri Lanka with the establishment of COMTEK GLOBAL SOURCING INC. in Toronto, Canada—marking our entry into the North American market.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl shadow-comtek-sm card-hover animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the preferred supplier of specialty chemicals in Sri Lanka and the region, recognized for quality, trust, and technical excellence.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-comtek-sm card-hover animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To meet Sri Lanka's demand for high-quality, eco-friendly specialty chemicals by delivering superior products, exceptional service, and sustainable solutions—while empowering industries to create safer, more environmentally responsible end products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
