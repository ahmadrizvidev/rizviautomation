"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import AIDemoModal from "../components/AIDemoModal";
import GlobalStyles from "../components/GlobalStyles";
import Preloader from "@/components/Preloader";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent white flash
    document.body.style.backgroundColor = "#0a0f1c";
    document.documentElement.style.backgroundColor = "#0a0f1c";

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Show preloader for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (loading) return <Preloader />; // Show preloader while loading

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#0a0a0a] to-[#000000] text-white overflow-x-hidden">
      <GlobalStyles />
      <Navigation onGetStartedClick={() => setShowModal(true)} />

      <main>
        {/* HeroSection with smooth entrance animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroSection scrollY={scrollY} onBookDemoClick={() => setShowModal(true)} />
        </motion.div>

        {/* Other sections render immediately */}
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
