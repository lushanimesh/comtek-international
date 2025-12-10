import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - COMTEK International | Specialty Chemical Experts</title>
        <meta name="description" content="Learn about COMTEK INTERNATIONAL's journey since 2001, our vision, mission, and commitment to delivering world-class chemical solutions in Sri Lanka." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32">
          <AboutSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default About;
