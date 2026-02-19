import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/images/qms2.jpg")'}} />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      
      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-blue-400/30 animate-fade-in-up">
                ISO Compliant • Cloud-Based • Enterprise Ready
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-2xl animate-fade-in-up animation-delay-200">
              All-in-One Integrated Quality Management System
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed font-medium drop-shadow-lg animate-fade-in-up animation-delay-400">
              Manage audits, documents, CAPA, training & compliance from one powerful platform.
              Streamline operations and achieve 100% regulatory readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 border border-blue-500/20">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-200 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Free 30-day trial
              </div>
            </div>
          </div>
          <div className="relative flex justify-center animate-fade-in-up animation-delay-1000">
            <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-3 flex flex-col items-center w-full max-w-md border border-white/20">
              <img 
                src="/images/qms.jpg" 
                alt="QMS Dashboard Preview" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}
