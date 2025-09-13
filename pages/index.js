import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import AIDemoModal from "../components/AIDemoModal";
import GlobalStyles from "../components/GlobalStyles";

export default function RizviAutomationPage() {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#0a0a0a] to-[#000000] text-white overflow-x-hidden">
      <GlobalStyles />
      <Navigation onGetStartedClick={() => setShowModal(true)} />

      <main>
        <HeroSection
          scrollY={scrollY}
          onBookDemoClick={() => setShowModal(true)}
        />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToActionSection onBookDemoClick={() => setShowModal(true)} />
      </main>

      <Footer />

      <AIDemoModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}