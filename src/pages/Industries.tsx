import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - COMTEK International | Chemical Solutions</title>
        <meta name="description" content="COMTEK serves construction, paints & coatings, PVC & plastics, rubber, and cosmetics industries with high-performance specialty chemicals and additives." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32">
          <IndustriesSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Industries;
