import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection({ onBookDemoClick }) {
  const backgroundShapes = [
    {
      className:
        "absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#00FFFF]/10 to-[#FF00FF]/10 blur-3xl",
      animation: {
        animate: { scale: [1, 1.2, 1], rotate: [0, 180, 360] },
        transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      className:
        "absolute bottom-10 right-10 w-48 h-48 rounded-full bg-gradient-to-r from-[#00FF99]/10 to-[#00FFFF]/10 blur-3xl",
      animation: {
        animate: { scale: [1.2, 1, 1.2], rotate: [360, 180, 0] },
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
      },
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Glow Waves */}
      <div className="absolute inset-0">
        {backgroundShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={shape.className}
            animate={shape.animation.animate}
            transition={shape.animation.transition}
          />
        ))}

        {/* Moving Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-full"
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#00FFFF] via-[#00FF99] to-[#FF00FF] bg-clip-text text-transparent">
              Stop Missing Leads. Start Closing More Clients Today.
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Ready to never miss another opportunity? Let our AI receptionist
            handle every call and booking while you focus on closing deals.
          </p>
          <motion.button
            className="px-12 py-5 bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#00FF99] text-black font-bold rounded-full text-xl relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(255, 0, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={''}
          >
            <span className="relative z-10 flex items-center">
              
             📅 Book a Meeting
              <ArrowRight className="w-6 h-6 ml-2" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00FF99] via-[#00FFFF] to-[#FF00FF]"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}