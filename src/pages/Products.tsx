import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products - COMTEK International | Specialty Chemicals & Raw Materials</title>
        <meta name="description" content="Explore COMTEK's comprehensive range of specialty chemicals including pigments, binders, additives, and performance-enhancing raw materials for various industries." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32">
          <ProductsSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Products;
