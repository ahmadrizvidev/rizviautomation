import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X } from "lucide-react";

export default function AIDemoModal({ showModal, setShowModal }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !name || !consentChecked || loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/test-vapi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phoneNumber, name }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      alert("Demo request submitted! We'll contact you soon.");
      setShowModal(false);
      setName("");
      setPhoneNumber("");
      setConsentChecked(false);
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
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 max-w-md w-full border-2 border-[#00FFFF]/30"
            style={{ boxShadow: "0 0 50px rgba(0, 255, 255, 0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] to-[#00FF99] bg-clip-text text-transparent">
                  Book Your AI Demo
                </span>
              </h3>
              <p className="text-white/80">
                Get a personalized demonstration of our AI automation solutions.
              </p>
            </div>

            <form onSubmit={handleDemoSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-white/80 mb-2">Full Name</label>
                <motion.input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border-2 border-[#00FFFF]/30 rounded-lg text-white focus:border-[#00FFFF] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                  required
                  whileFocus={{
                    borderColor: "#00FFFF",
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                  }}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-white/80 mb-2">Phone Number</label>
                <motion.input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border-2 border-[#00FFFF]/30 rounded-lg text-white focus:border-[#00FFFF] focus:outline-none transition-colors"
                  placeholder="Enter your phone number"
                  required
                  whileFocus={{
                    borderColor: "#00FFFF",
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                  }}
                />
              </div>

              {/* Consent */}
              <div className="flex items-start space-x-3">
                <motion.input
                  type="checkbox"
                  id="consent"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-1 w-5 h-5 text-[#00FFFF] bg-[#2a2a2a] border-[#00FFFF]/30 rounded focus:ring-[#00FFFF]"
                  required
                  whileTap={{ scale: 0.9 }}
                />
                <label
                  htmlFor="consent"
                  className="text-white/80 text-sm leading-relaxed"
                >
                  I agree to share my number for demo purposes and understand that
                  Rizvi Automation may contact me regarding their services.
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#00FFFF] to-[#00FF99] text-black font-bold rounded-lg"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                disabled={!name || !phoneNumber || !consentChecked || loading}
              >
                <span className="flex items-center justify-center">
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </span>
              </motion.button>
            </form>

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
