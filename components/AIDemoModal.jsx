import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X } from "lucide-react";

export default function AIDemoModal({ showModal, setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [demoType, setDemoType] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const demoOptions = ["Law Firms", "Real Estate", "Dentists"];

  const formatPhoneNumber = (input) => {
    let digits = input.replace(/\D/g, "");
    digits = digits.slice(0, 10);
    return `+1${digits}`;
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber || !demoType || loading) return;

    const formattedNumber = formatPhoneNumber(phoneNumber);
    if (!/^\+1\d{10}$/.test(formattedNumber)) {
      alert("Please enter a valid 10-digit US phone number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/test-vapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formattedNumber, name, email, demoType }),
      });
      await response.json();

      // Professional B2B success message
      setSuccessMessage(
        "✅ Thank you! Your demo request has been received. Our AI receptionist will reach out within 30 seconds to showcase how this can benefit your business."
      );

      // Clear form
      setName("");
      setEmail("");
      setPhoneNumber("");
      setDemoType("");

      // Auto-close modal after success message
      setTimeout(() => {
        setSuccessMessage("");
        setShowModal(false);
      }, 4500);
    } catch (error) {
      console.error("Error submitting demo request:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-[#00FFFF]/30"
            style={{ boxShadow: "0 0 50px rgba(0, 255, 255, 0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
                  AI Demo
                </span>
              </h3>
              <p className="text-white/80 text-sm sm:text-base">
                Enter your details and our AI receptionist will call you back in
                10–30 seconds.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              {/* Demo Type */}
              <div>
                <label className="block text-white/80 mb-2 text-sm">
                  Choose Demo
                </label>
                <div className="flex gap-3 flex-wrap">
                  {demoOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() => setDemoType(option)}
                      className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                        demoType === option
                          ? "bg-[#00FFFF] text-black border-[#00FFFF]"
                          : "bg-[#2a2a2a] text-white/80 border-[#00FFFF]/30"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-[#2a2a2a] border-2 border-[#00FFFF]/30 rounded-lg text-white focus:border-[#00FFFF] focus:outline-none transition-colors text-sm sm:text-base"
                required
              />

              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Business Email"
                className="w-full px-4 py-3 bg-[#2a2a2a] border-2 border-[#00FFFF]/30 rounded-lg text-white focus:border-[#00FFFF] focus:outline-none transition-colors text-sm sm:text-base"
                required
              />

              {/* Phone Number */}
              <div className="flex items-center">
                <span className="px-3 py-3 bg-[#2a2a2a] border-2 border-r-0 border-[#00FFFF]/30 rounded-l-lg text-white text-sm sm:text-base">
                  +1
                </span>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Phone Number"
                  className="flex-1 px-4 py-3 bg-[#2a2a2a] border-2 border-l-0 border-[#00FFFF]/30 rounded-r-lg text-white focus:border-[#00FFFF] focus:outline-none transition-colors text-sm sm:text-base"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!name || !email || !phoneNumber || !demoType || loading}
                className="w-full py-3 bg-gradient-to-r from-[#00FFFF] to-[#00FF99] text-black font-bold rounded-lg text-sm sm:text-base"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <span className="flex items-center justify-center">
                    <Check className="w-4 h-4 mr-2" />
                    Submit
                  </span>
                )}
              </motion.button>
            </form>

            {/* Success Toast */}
            <AnimatePresence>
              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#00FF99]/20 text-white px-6 py-3 rounded-lg font-medium shadow-lg backdrop-blur-md text-sm sm:text-base"
                >
                  {successMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Close Button */}
            <motion.button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
