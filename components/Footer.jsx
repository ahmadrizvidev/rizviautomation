import { motion } from "motion/react";
import { Zap, Linkedin, Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#00FFFF]/20 bg-gradient-to-b from-[#0a0f1c] via-[#0a0a0a] to-[#000000]">
      {/* Glowing Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo + Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#00FFFF] to-[#00FF99] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#0a0a0a]" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
                Rizvi Automation – AI Receptionist
              </span>
            </div>
            <p className="text-white/70 text-sm font-medium">
              Your 24/7 AI Receptionist
            </p>
          </div>

          {/* Center: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {[
                "Home",
                "Features",
                "How It Works",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-white/60 hover:text-[#00FFFF] transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", name: "LinkedIn" },
                { icon: Github, href: "#", name: "GitHub" },
                { icon: Twitter, href: "#", name: "Twitter" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#00FFFF]/20 flex items-center justify-center text-white/60 hover:text-[#00FFFF] hover:border-[#00FFFF]/60 transition-all duration-300"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-[#00FFFF]/10 pt-8">
          <div className="text-center">
            <p className="text-white/50 text-sm">
              © 2025 Rizvi Automation. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FFFF]/5 to-transparent opacity-20" />
    </footer>
  );
}