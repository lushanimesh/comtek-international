import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProductsSection from "@/components/ProductsSection";
import GlobalPresence from "@/components/GlobalPresence";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>COMTEK International - Specialty Chemical Distributor in Sri Lanka</title>
        <meta name="description" content="COMTEK INTERNATIONAL (PVT) LTD is a leading Sri Lankan distributor of specialty chemicals and raw materials for paints, coatings, construction, PVC, rubber, and cosmetics industries since 2001." />
        <meta name="keywords" content="specialty chemicals, chemical distributor, Sri Lanka, paints, coatings, construction chemicals, PVC additives, rubber chemicals, cosmetic ingredients" />
        <link rel="canonical" href="https://comtek.lk" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSlideshow />
        <AboutSection />
        <IndustriesSection />
        <ProductsSection />
        <GlobalPresence />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
