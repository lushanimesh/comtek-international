import constructionImg from "@/assets/industry-construction.jpg";
import paintsImg from "@/assets/industry-paints.jpg";
import pvcImg from "@/assets/industry-pvc.jpg";
import rubberImg from "@/assets/industry-rubber.jpg";
import cosmeticsImg from "@/assets/industry-cosmetics.jpg";

const industries = [
  {
    name: "Construction Chemicals",
    description: "High-performance additives for tile adhesives, skim coats, self-leveling compounds, mortars, and concrete products.",
    image: constructionImg,
    products: ["RDP", "Water Retention Agents", "Starch Ether", "Accelerators", "Pigments"],
  },
  {
    name: "Paints & Coatings",
    description: "Complete range of additives and raw materials for industrial and decorative paint applications.",
    image: paintsImg,
    products: ["Pigments", "Binders", "Thickeners", "Defoamers", "UV Stabilizers"],
  },
  {
    name: "PVC & Plastics",
    description: "Specialty additives ensuring stability, strength, and longevity of plastic products.",
    image: pvcImg,
    products: ["Heat Stabilizers", "Impact Modifiers", "Titanium Dioxide", "UV Stabilizers"],
  },
  {
    name: "Rubber Industry",
    description: "Eco-friendly solutions to enhance mechanical properties, appearance, and processing efficiency.",
    image: rubberImg,
    products: ["Carbon Black", "Non-Carbon Fillers", "Pigments", "Processing Aids"],
  },
  {
    name: "Cosmetics & Personal Care",
    description: "High-quality cosmetic additives supporting innovation in the personal care industry.",
    image: cosmeticsImg,
    products: ["TiO2 Pigments", "Thickeners", "Fragrances", "Specialty Additives"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Specialized Solutions for Every Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We supply a comprehensive range of specialty chemicals that enhance performance, durability, and quality across multiple industrial sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-comtek-sm card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-primary-foreground">
                  {industry.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.slice(0, 4).map((product) => (
                    <span
                      key={product}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
