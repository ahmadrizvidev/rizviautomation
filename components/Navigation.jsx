import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  "Home",
  "Features",
  "How It Works",
  "Testimonials",
  "Contact",
];

export default function Navigation({ onGetStartedClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "backdrop-blur-md bg-[#0a0a0a]/90 border-b border-[#00FFFF]/30 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#00FF99] flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#0a0a0a]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
                Rizvi Automation – AI Receptionist
              </span>
              <div className="h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#00FF99] rounded-full" />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="relative text-white/80 hover:text-[#00FFFF] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {item}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#00FFFF] to-[#00FF99]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full text-black font-semibold relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 0, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onGetStartedClick}
            >
              <span className="relative z-10">Book Demo</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#00FFFF]/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg text-white/80 hover:text-[#00FFFF] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] rounded-full text-black font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onGetStartedClick();
                  setMobileMenuOpen(false);
                }}
              >
                Book Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}