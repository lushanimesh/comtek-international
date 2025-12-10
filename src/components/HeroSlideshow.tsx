import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Your Trusted Partner in Specialty Chemicals",
    subtitle: "Leading Sri Lankan distributor serving paints, coatings, construction, PVC, rubber, and cosmetics industries since 2001.",
  },
  {
    image: hero2,
    title: "Premium Quality Pigments & Additives",
    subtitle: "Titanium dioxide, carbon black, iron oxides, and a comprehensive range of high-performance raw materials.",
  },
  {
    image: hero3,
    title: "Reliable Supply & Fast Delivery",
    subtitle: "Large ex-stock availability with efficient island-wide distribution network across Sri Lanka.",
  },
];

const HeroSlideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-[70vh] md:h-[80vh]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-width section-padding">
                  <div className="max-w-2xl animate-fade-up">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="secondary" size="lg" asChild>
                        <a href="#products">Explore Products</a>
                      </Button>
                      <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10" asChild>
                        <a href="#about">Learn More</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-all hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground hover:bg-background/40 transition-all hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="container-width py-6 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: "20+", label: "Years of Excellence" },
              { value: "5", label: "Industries Served" },
              { value: "100+", label: "Quality Products" },
              { value: "2", label: "Global Offices" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;
