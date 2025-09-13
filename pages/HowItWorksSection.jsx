"use client";
import { motion } from "framer-motion";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Customer calls / submits inquiry",
    description: "AI answers instantly",
    color: "#00FFFF"
  },
  {
    icon: MessageSquare,
    step: "2", 
    title: "AI qualifies & follows up",
    description: "in seconds",
    color: "#FF00FF"
  },
  {
    icon: CalendarCheck,
    step: "3",
    title: "Appointments auto-scheduled",
    description: "on your calendar",
    color: "#00FF99"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="howitworks" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent drop-shadow-[0_0_10px_#00FFFF]">
              Simple, Smart, Seamless
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our AI receptionist works in three simple steps to capture and convert every lead.
          </p>
        </motion.div>

        {/* Connecting Line */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#00FF99] rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="text-center relative"
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                style={{ perspective: "1000px" }}
              >
                {/* Step Circle */}
                <motion.div className="relative mb-8">
                  <motion.div
                    className="w-24 h-24 rounded-full mx-auto relative flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                      border: `2px solid ${step.color}60`,
                      boxShadow: `0 0 25px ${step.color}40`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${step.color}40`,
                        `0 0 40px ${step.color}80`,
                        `0 0 20px ${step.color}40`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <span className="text-3xl font-bold" style={{ color: step.color }}>
                      {step.step}
                    </span>
                  </motion.div>

                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}20`, border: `1px solid ${step.color}` }}
                    animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <step.icon size={22} style={{ color: step.color }} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold leading-tight" style={{ color: step.color }}>
                  {step.title}
                </h3>
                <p className="text-white/70 text-lg">{step.description}</p>

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, particleIndex) => {
                    const randomX = Math.random() * 40 - 20;
                    const randomY = Math.random() * 40 - 20;
                    return (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: step.color,
                          left: `${50 + randomX}%`,
                          top: `${50 + randomY}%`
                        }}
                        animate={{
                          x: [0, randomX, 0],
                          y: [0, randomY, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: particleIndex * 0.5 + index * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/80 mb-6">
            Ready to see it in action?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] text-black font-bold rounded-full text-lg relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Watch Live Demo</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FF99]"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}