import { Beaker, Droplets, Palette, Shield, Sparkles, Layers } from "lucide-react";

const productCategories = [
  {
    icon: Palette,
    name: "Pigments",
    items: ["Titanium Dioxide (TiO2)", "Carbon Black", "Iron Oxides", "Azo Dyes"],
  },
  {
    icon: Droplets,
    name: "Binders & Resins",
    items: ["Alkyd Resins", "Epoxy Resins", "Acrylic Emulsions", "Polyurethane Binders"],
  },
  {
    icon: Beaker,
    name: "Rheology Modifiers",
    items: ["Thickeners", "Dispersing Agents", "Emulsifiers", "Defoamers"],
  },
  {
    icon: Layers,
    name: "Construction Additives",
    items: ["Re-Dispersible Polymer Powder", "Water Retention Agents", "Starch Ether", "Accelerators"],
  },
  {
    icon: Shield,
    name: "Stabilizers",
    items: ["UV Stabilizers", "Heat Stabilizers", "Anti-Skinning Agents", "Efflorescence Control"],
  },
  {
    icon: Sparkles,
    name: "Specialty Products",
    items: ["Impact Modifiers", "Mold Release Agents", "Fragrances", "White Cement"],
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Product Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With decades of experience in Europe and Asia's chemical industries, we bring world-leading additives to elevate product performance to international standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-card p-6 rounded-2xl shadow-comtek-sm card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Service highlights */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground animate-fade-up">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Technical Support", desc: "Expert guidance for material selection" },
              { title: "Fast Delivery", desc: "Island-wide distribution network" },
              { title: "Ex-Stock Availability", desc: "Large inventory for quick fulfillment" },
              { title: "Quality Assurance", desc: "Strict safety and quality standards" },
            ].map((service, index) => (
              <div key={index}>
                <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                <p className="text-sm opacity-80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
