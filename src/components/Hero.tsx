import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hero-bg" style={{backgroundImage: 'url("/images/qms2.jpg")'}} />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90 hero-overlay" />
      
      {/* Animated overlay effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/20 via-transparent to-transparent hero-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-transparent hero-glow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block hero-badge">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-blue-400/30">
                ISO Compliant • Cloud-Based • Enterprise Ready
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl hero-title">
              All-in-One Integrated Quality Management System
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed font-medium drop-shadow-lg hero-subtitle">
              Manage audits, documents, CAPA, training & compliance from one powerful platform.
              Streamline operations and achieve 100% regulatory readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 hero-buttons">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-blue-500/20">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-200 hero-features">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full hero-dot"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full hero-dot"></div>
                Free 30-day trial
              </div>
            </div>
          </div>
          <div className="relative flex justify-center hero-image">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-3 flex flex-col items-center w-full max-w-md border border-white/20 hero-image-container">
              <img 
                src="/images/qms.jpg" 
                alt="QMS Dashboard Preview" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Hero Animations */}
      <style>{`
        /* Initial page load animations */
        @keyframes hero-bg-pan {
          0% {
            transform: scale(1.1) translateX(-5%);
            filter: blur(2px);
          }
          50% {
            transform: scale(1.05) translateX(0%);
            filter: blur(1px);
          }
          100% {
            transform: scale(1) translateX(0%);
            filter: blur(0px);
          }
        }

        @keyframes hero-overlay-fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes hero-pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }

        @keyframes hero-glow-move {
          0%, 100% {
            opacity: 0;
            transform: translateX(-10%) translateY(-10%);
          }
          50% {
            opacity: 0.2;
            transform: translateX(0%) translateY(0%);
          }
        }

        @keyframes hero-slide-up {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
            filter: blur(4px);
          }
          50% {
            opacity: 0.8;
            transform: translateY(20px) scale(0.98);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes hero-slide-right {
          0% {
            opacity: 0;
            transform: translateX(80px) scale(0.9);
            filter: blur(6px);
          }
          50% {
            opacity: 0.7;
            transform: translateX(30px) scale(0.95);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0px);
          }
        }

        @keyframes hero-scale-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
            filter: blur(8px);
          }
          50% {
            opacity: 0.6;
            transform: scale(0.9);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }

        @keyframes hero-dot-pulse {
          0%, 100% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes hero-rotate-3d {
          0% {
            opacity: 0;
            transform: perspective(1000px) rotateY(-30deg) rotateX(15deg) scale(0.8);
            filter: blur(4px);
          }
          50% {
            opacity: 0.7;
            transform: perspective(1000px) rotateY(-10deg) rotateX(5deg) scale(0.95);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }

        /* Apply animations */
        .hero-bg {
          animation: hero-bg-pan 2s ease-out forwards;
        }

        .hero-overlay {
          animation: hero-overlay-fade 1.5s ease-out forwards;
        }

        .hero-pulse {
          animation: hero-pulse-slow 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hero-glow {
          animation: hero-glow-move 6s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .hero-badge {
          animation: hero-slide-up 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }

        .hero-title {
          animation: hero-slide-up 1.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .hero-subtitle {
          animation: hero-slide-up 1.4s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 0.7s;
          opacity: 0;
        }

        .hero-buttons {
          animation: hero-scale-in 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 0.9s;
          opacity: 0;
        }

        .hero-features {
          animation: hero-slide-up 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 1.1s;
          opacity: 0;
        }

        .hero-dot {
          animation: hero-dot-pulse 2s ease-out forwards;
          animation-delay: 1.3s;
        }

        .hero-image {
          animation: hero-slide-right 1.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        .hero-image-container {
          animation: hero-rotate-3d 1.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        /* Smooth transitions for hover states */
        .hero-badge span,
        .hero-title,
        .hero-subtitle,
        .hero-buttons button,
        .hero-image img {
          transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .hero-bg,
          .hero-overlay,
          .hero-pulse,
          .hero-glow,
          .hero-badge,
          .hero-title,
          .hero-subtitle,
          .hero-buttons,
          .hero-features,
          .hero-dot,
          .hero-image,
          .hero-image-container {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>
    </section>
  );
}
