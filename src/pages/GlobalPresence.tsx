import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import GlobalPresenceSection from "@/components/GlobalPresence";
import Footer from "@/components/Footer";

const GlobalPresence = () => {
  return (
    <>
      <Helmet>
        <title>Global Presence - COMTEK International | Sri Lanka & Canada</title>
        <meta name="description" content="COMTEK operates from Sri Lanka headquarters and COMTEK GLOBAL SOURCING INC. in Toronto, Canada, serving customers across South Asia and North America." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32">
          <GlobalPresenceSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default GlobalPresence;
