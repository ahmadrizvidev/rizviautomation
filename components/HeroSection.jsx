import { motion } from "motion/react";
import { Play, Calendar } from "lucide-react";

const AnimatedBackgroundShape = ({
  className,
  animation,
  scrollY,
  scrollFactor,
}) => (
  <motion.div
    className={className}
    animate={animation.animate}
    transition={animation.transition}
    style={{
      transform: `translateY(${scrollY * scrollFactor}px)`,
    }}
  />
);

export default function HeroSection({ scrollY, onBookDemoClick }) {
  const backgroundShapes = [
    {
      className:
        "absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-[#00FFFF]/20 to-[#00FF99]/20 blur-xl",
      animation: {
        animate: { y: [0, -50, 0], rotate: [0, 180, 360] },
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.2,
    },
    {
      className:
        "absolute top-40 right-20 w-24 h-24 rounded-lg bg-gradient-to-r from-[#FF00FF]/20 to-[#00FFFF]/20 blur-xl",
      animation: {
        animate: { y: [0, 30, 0], rotate: [0, -180, -360] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.15,
    },
    {
      className:
        "absolute bottom-40 left-1/3 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FF99]/15 to-[#FF00FF]/15 blur-2xl",
      animation: {
        animate: { x: [0, 50, 0], scale: [1, 1.2, 1] },
        transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
      },
      scrollFactor: 0.1,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        {backgroundShapes.map((shape, index) => (
          <AnimatedBackgroundShape key={index} {...shape} scrollY={scrollY} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#00FF99] to-[#FF00FF] bg-clip-text text-transparent">
              Never Miss a Lead Again
            </span>
            <br />
            <span className="text-white">with Your 24/7</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent">
              AI Receptionist
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            AI that answers every call, books appointments, and follows up in 30
            seconds — so you close more clients while you sleep.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-[#00FFFF] to-[#00FF99] text-black font-bold rounded-full text-lg relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onBookDemoClick}
            >
              <span className="relative z-10 flex items-center">
                🚀 Book Live AI Demo
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00FF99] to-[#00FFFF]"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="https://calendly.com/your-calendar"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-[#FF00FF] text-[#FF00FF] font-bold rounded-full text-lg hover:bg-[#FF00FF] hover:text-black transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(255, 0, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">📅 Book a Meeting</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}