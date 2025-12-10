import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - COMTEK International | Get in Touch</title>
        <meta name="description" content="Contact COMTEK INTERNATIONAL for specialty chemical inquiries. Reach our Sri Lanka headquarters or Canada office for quotes and technical support." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32">
          <ContactSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Contact;
