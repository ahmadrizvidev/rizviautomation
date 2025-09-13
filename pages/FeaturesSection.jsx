import { motion } from "motion/react";
import { Clock, Zap, Calendar } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "🕒 24/7 Availability",
    description: "AI never sleeps, always ready to answer.",
    gradient: "from-[#00FFFF] to-[#00FF99]"
  },
  {
    icon: Zap,
    title: "⚡ Instant Response",
    description: "Follows up with leads in under 30 seconds.",
    gradient: "from-[#FF00FF] to-[#00FFFF]"
  },
  {
    icon: Calendar,
    title: "📅 Smart Scheduling",
    description: "Books calls & appointments directly to your calendar.",
    gradient: "from-[#00FF99] to-[#FF00FF]"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
              Why Businesses Trust Our AI Receptionist
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Advanced AI technology that transforms how you handle customer interactions and never lets a lead slip away.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 255, 255, 0.3)"
              }}
              className="group p-8 rounded-2xl relative overflow-hidden backdrop-blur-md border border-[#00FFFF]/20 hover:border-[#00FFFF]/60 transition-all duration-300"
              style={{
                background: "rgba(26, 26, 26, 0.4)",
                backdropFilter: "blur(10px)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Glassmorphism Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-2xl`}
                animate={{
                  opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              {/* Neon Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{
                  borderColor: "#00FFFF",
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.6)"
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 mx-auto`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-black" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#00FFFF] transition-colors text-center">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/0 to-[#FF00FF]/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient.replace('from-', '').replace(' to-', ', ')}/10)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00FFFF] rounded-full opacity-30"
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}