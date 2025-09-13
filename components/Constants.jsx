import { Brain, Cpu, Sparkles, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

export const portfolioProjects = [
  {
    title: "AI Lead Follow-Up System",
    category: "Lead Automation",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    description:
      "30-second automated lead response system with personalized AI messaging",
  },
  {
    title: "Smart CRM Integration",
    category: "Business Automation",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    description:
      "End-to-end customer relationship management with intelligent automation",
  },
  {
    title: "Conversion Optimization Platform",
    category: "AI Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    description:
      "Real-time conversion tracking and AI-powered optimization recommendations",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow Inc",
    content:
      "Our AI receptionist never misses a call. Lead response time went from hours to 30 seconds!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Sales Director, Global Solutions",
    content:
      "We're booking 3x more appointments since implementing the AI receptionist. Game changer!",
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Business Owner, StartupVision",
    content:
      "24/7 availability means we capture leads even while sleeping. ROI was immediate.",
    rating: 5,
  },
];

export const aboutFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Lead Management",
    description:
      "Intelligent automation that responds to prospects in 30 seconds, ensuring no lead ever goes cold.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "Future-proof solutions using the latest AI, machine learning, and automation technologies.",
  },
  {
    icon: Sparkles,
    title: "Innovation Without Limits",
    description:
      "We don't just automate — we revolutionize how businesses connect with their customers.",
  },
];

export const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 255, 153, 0.2)",
    }}
    className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#00FF99]/20 hover:border-[#00FF99]/40 transition-all duration-300 relative"
  >
    <Quote className="w-8 h-8 text-[#00FF99] mb-4" />
    <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
      ))}
    </div>
    <div>
      <h4 className="font-bold text-white">{testimonial.name}</h4>
      <p className="text-white/60 text-sm">{testimonial.role}</p>
    </div>
  </motion.div>
);

export const PortfolioCard = ({ project, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{
      y: -15,
      rotateY: 5,
      boxShadow: "0 25px 50px rgba(255, 0, 255, 0.3)",
    }}
    className="group rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#FF00FF]/20 hover:border-[#FF00FF]/60 transition-all duration-300"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#00FFFF] to-[#00FF99] text-black rounded-full mb-3">
        {project.category}
      </span>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#00FFFF] transition-colors">
        {project.title}
      </h3>
      <p className="text-white/70 text-sm">{project.description}</p>
    </div>
  </motion.div>
);

export const AboutFeatureCard = ({ feature, index }) => {
  const Icon = feature.icon; // ✅ assign to capitalized variable
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)",
      }}
      className="p-8 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-300"
    >
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#00FF99] flex items-center justify-center mb-6"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-8 h-8 text-black" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
      <p className="text-white/70">{feature.description}</p>
    </motion.div>
  );
};
