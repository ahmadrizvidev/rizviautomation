export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
      
      * {
        font-family: 'Inter', sans-serif;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        background: linear-gradient(to bottom, #0a0f1c, #0a0a0a, #000000);
        overflow-x: hidden;
      }

      /* Custom Scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: #1a1a1a;
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #00FFFF, #00FF99);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #00FF99, #FF00FF);
      }

      /* Enhanced Animations */
      @keyframes neonPulse {
        0%, 100% {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }
        50% {
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.6);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }

      @keyframes shimmer {
        0% {
          background-position: -1000px 0;
        }
        100% {
          background-position: 1000px 0;
        }
      }

      @keyframes hologramFlicker {
        0%, 100% {
          opacity: 1;
          filter: brightness(1);
        }
        50% {
          opacity: 0.8;
          filter: brightness(1.2);
        }
      }

      .animate-shimmer {
        background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
        background-size: 1000px 100%;
        animation: shimmer 2s infinite;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      .animate-neon-pulse {
        animation: neonPulse 2s ease-in-out infinite;
      }

      .animate-hologram {
        animation: hologramFlicker 3s ease-in-out infinite;
      }

      /* Glassmorphism Effect */
      .glass {
        background: rgba(26, 26, 26, 0.4);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 255, 255, 0.2);
      }

      /* 3D Transform Utilities */
      .preserve-3d {
        transform-style: preserve-3d;
      }

      .perspective-1000 {
        perspective: 1000px;
      }

      /* Enhanced Gradient Backgrounds */
      .gradient-radial {
        background: radial-gradient(circle at center, #0a0f1c 0%, #0a0a0a 50%, #000000 100%);
      }

      /* Text Glow Effect */
      .text-glow {
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
      }

      /* Button Hover Enhancements */
      .btn-3d {
        transform-style: preserve-3d;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .btn-3d:hover {
        transform: translateY(-2px) rotateX(5deg);
      }

      /* Modal 3D Effects */
      .modal-3d {
        transform-style: preserve-3d;
        perspective: 1000px;
      }

      /* Neon Border Animation */
      @keyframes neonBorder {
        0%, 100% {
          box-shadow: 0 0 5px rgba(0, 255, 255, 0.5), 
                      0 0 10px rgba(0, 255, 255, 0.3), 
                      0 0 15px rgba(0, 255, 255, 0.2);
        }
        50% {
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 
                      0 0 20px rgba(0, 255, 255, 0.6), 
                      0 0 30px rgba(0, 255, 255, 0.4);
        }
      }

      .animate-neon-border {
        animation: neonBorder 2s ease-in-out infinite;
      }

      /* Holographic Card Effect */
      .holographic-card {
        background: linear-gradient(45deg, 
          rgba(0, 255, 255, 0.1) 0%, 
          rgba(255, 0, 255, 0.1) 25%, 
          rgba(0, 255, 153, 0.1) 50%, 
          rgba(255, 0, 255, 0.1) 75%, 
          rgba(0, 255, 255, 0.1) 100%);
        background-size: 400% 400%;
        animation: holographicShift 3s ease infinite;
      }

      @keyframes holographicShift {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    `}</style>
  );
}