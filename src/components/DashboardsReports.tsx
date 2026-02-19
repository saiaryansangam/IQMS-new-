import { BarChart3, TrendingUp, Clock, Award, FileSpreadsheet, Sparkles } from 'lucide-react';

export default function DashboardsReports() {
  const reports = [
    {
      icon: BarChart3,
      title: 'Audit Status Overview',
      description: 'Real-time tracking of all audit activities and completion rates'
    },
    {
      icon: Clock,
      title: 'CAPA Aging Reports',
      description: 'Monitor overdue actions and identify bottlenecks instantly'
    },
    {
      icon: TrendingUp,
      title: 'Training Completion Rates',
      description: 'Track employee training progress and certification status'
    },
    {
      icon: Award,
      title: 'Compliance Scorecards',
      description: 'Comprehensive view of organizational compliance metrics'
    },
    {
      icon: FileSpreadsheet,
      title: 'Export to PDF / Excel',
      description: 'Generate customizable reports in multiple formats'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="/images/qmsnew.jpg" 
        alt="Dashboard Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Lighter overlay for better background visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 via-gray-900/30 to-gray-900/40"></div>
      
      {/* Premium Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating sparkles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-pulse premium-sparkle"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300 rounded-full animate-pulse premium-sparkle delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse premium-sparkle delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-cyan-300 rounded-full animate-pulse premium-sparkle delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-300 rounded-full animate-pulse premium-sparkle delay-1500"></div>
        
        {/* Large blur elements for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Premium light rays */}
        <div className="absolute inset-0 premium-rays"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-lg premium-badge">
            <Sparkles className="w-5 h-5 text-yellow-300 premium-sparkle-icon" />
            <span className="text-white font-bold text-sm tracking-wide">PREMIUM ANALYTICS</span>
          </div>
          <h2 className="text-5xl lg:text-4xl font-bold text-white leading-tight premium-title">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Dashboards & Reports
            </span>
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto premium-description">
            Make data-driven decisions with powerful analytics and real-time insights that transform your quality management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 dashboard-cards">
              {reports.map((report, index) => {
                const Icon = report.icon;
                return (
                  <div
                    key={report.title}
                    className="group flex items-start gap-4 p-6 bg-gradient-to-r from-white/15 via-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-white/30 hover:from-white/20 hover:via-white/15 hover:to-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl premium-card"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {/* Premium Icon with enhanced effects */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 premium-icon">
                      <Icon className="w-8 h-8 text-white" />
                      {/* Icon shine effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-500 opacity-40 animate-ping"></div>
                    </div>
                    
                    {/* Enhanced Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300 premium-card-title">
                        {report.title}
                      </h3>
                      <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 premium-card-desc">
                        {report.description}
                      </p>
                    </div>
                    
                    {/* Premium hover effects */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 premium-glow"></div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 premium-shine"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* This space is intentionally left empty since the background image covers the entire section */}
          </div>
        </div>
      </div>
      
      {/* Premium Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -2000px 0;
          }
          100% {
            background-position: 2000px 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        @keyframes premiumRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes lightRay {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 0.1;
          }
        }
        
        /* Header animations */
        .dashboard-header {
          animation: slideInLeft 1.2s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          opacity: 0;
        }
        
        .premium-badge {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(20px);
        }
        
        .premium-sparkle-icon {
          animation: premiumRotate 4s linear infinite;
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.6));
        }
        
        .premium-title {
          filter: drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3));
        }
        
        .premium-description {
          filter: drop-shadow(0 2px 10px rgba(255, 255, 255, 0.2));
        }
        
        /* Card animations */
        .dashboard-cards > div {
          animation: fadeInUp 0.8s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          opacity: 0;
        }
        
        .dashboard-cards > div:nth-child(1) { animation-delay: 0.2s; }
        .dashboard-cards > div:nth-child(2) { animation-delay: 0.4s; }
        .dashboard-cards > div:nth-child(3) { animation-delay: 0.6s; }
        .dashboard-cards > div:nth-child(4) { animation-delay: 0.8s; }
        .dashboard-cards > div:nth-child(5) { animation-delay: 1.0s; }
        
        .premium-card {
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .premium-icon {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
        }
        
        .premium-card-title {
          filter: drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3));
        }
        
        .premium-card-desc {
          filter: drop-shadow(0 1px 4px rgba(255, 255, 255, 0.2));
        }
        
        .premium-glow {
          backdrop-filter: blur(10px);
        }
        
        .premium-shine {
          background: linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.4) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        /* Background effects */
        .premium-sparkle {
          animation: sparkle 3s ease-in-out infinite;
          filter: blur(1px);
        }
        
        .premium-rays {
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          animation: lightRay 20s linear infinite;
        }
        
        /* Enhanced hover effects */
        .premium-card:hover .premium-icon {
          box-shadow: 0 0 35px rgba(59, 130, 246, 0.6);
        }
        
        .premium-card:hover {
          backdrop-filter: blur(25px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .premium-title {
            font-size: 2.5rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .dashboard-header,
          .dashboard-cards > div,
          .premium-sparkle-icon,
          .premium-sparkle,
          .premium-rays,
          .premium-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
