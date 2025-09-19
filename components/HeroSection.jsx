import { motion } from "motion/react";

const AnimatedBackgroundShape = ({ className, animation, scrollY, scrollFactor }) => (
  <motion.div
    className={className}
    animate={animation.animate}
    transition={animation.transition}
    style={{ transform: `translateY(${scrollY * scrollFactor}px)` }}
  />
);

export default function HeroSection({ scrollY, onBookDemoClick }) {
  const backgroundShapes = [
    {
      className:
        "absolute top-20 left-5 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-r from-[#00FFFF]/20 to-[#00FF99]/20 blur-xl",
      animation: {
        animate: { y: [0, -50, 0], rotate: [0, 180, 360] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.2,
    },
    {
      className:
        "absolute top-40 right-5 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 rounded-lg bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 blur-xl",
      animation: {
        animate: { y: [0, 30, 0], rotate: [0, -180, -360] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.15,
    },
    {
      className:
        "absolute bottom-40 left-1/4 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-gradient-to-r from-[#00FF99]/15 to-[#FF00FF]/15 blur-2xl",
      animation: {
        animate: { x: [0, 50, 0], scale: [1, 1.2, 1] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.1,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Shapes */}
      <div className="absolute inset-0">
        {backgroundShapes.map((shape, index) => (
          <AnimatedBackgroundShape key={index} {...shape} scrollY={scrollY} />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Headline */}
          <motion.h1
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#00FF99] to-[#FF00FF] bg-clip-text text-transparent">
              Never Miss a Lead Again
            </span>
            <br />
            <span
              className="text-white"
              style={{ fontSize: "clamp(1.2rem, 4vw, 3rem)" }}
            >
              with Your 24/7
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              AI Receptionist
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-white/80 mx-auto"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", lineHeight: "1.6" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Our AI answers every call, books appointments, and sends instant
            follow-ups — so you close more clients while focusing on what you do
            best.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00FFFF] to-[#00FF99] text-black font-bold rounded-full text-base sm:text-lg relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookDemoClick}
            >
              🚀 See AI in Action
            </motion.button>

            <motion.a
              href="https://calendly.com/rizviautomations/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#FF00FF] text-[#FF00FF] font-bold rounded-full text-base sm:text-lg hover:bg-[#FF00FF] hover:text-black transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 0, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Book a Meeting
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
