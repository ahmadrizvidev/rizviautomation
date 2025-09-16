// components/Preloader.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ scale: 0.9, rotateX: -20, opacity: 0 }}
            animate={{ scale: 1, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Logo Container with Pulse */}
            <motion.div
              className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#00FFFF] to-[#00FF99] flex items-center justify-center shadow-[0_0_40px_rgba(0,255,200,0.6)]"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,255,200,0.4)",
                  "0 0 50px rgba(0,255,200,0.8)",
                  "0 0 20px rgba(0,255,200,0.4)",
                ],
                scale: [1, 1.1, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Zap className="w-8 h-8 text-[#0a0a0a]" />
            </motion.div>

            {/* Brand Name */}
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,200,0.5)]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Rizvi Automation
            </motion.span>

            {/* Futuristic Progress Bar */}
            <motion.div
              className="w-40 h-1 bg-gray-800 rounded-full overflow-hidden mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="h-1 bg-gradient-to-r from-[#00FFFF] to-[#00FF99]"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
