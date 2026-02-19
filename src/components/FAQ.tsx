import { ChevronDown, Shield, Clock, Users, Settings, HelpCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this ISO compliant?",
      answer: "Yes. Our QMS platform is designed to support ISO 9001 and other quality standards by aligning with core requirements such as document control, audit management, CAPA tracking, risk management, and process monitoring.\n\nThe system helps organizations maintain structured documentation, audit trails, version control, and performance tracking — making ISO compliance easier to deal and maintain.\n\nNote: Certification is issued by accredited bodies, but our software simplifies preparation and compliance management.",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      category: "Compliance"
    },
    {
      question: "How secure is data?",
      answer: "We prioritize data security at every level. Our platform includes:\n\n• Role-based access control\n• Encrypted data transmission (HTTPS/SSL)\n• Secure cloud infrastructure\n• Regular backups\n• Audit logs for activity tracking\n\nYour data is protected against unauthorized access, loss, or breaches, ensuring confidentiality and integrity.",
      icon: Shield,
      color: "from-green-500 to-green-600",
      category: "Security"
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation time depends on your organization's size and complexity.\n\nTypical timeline:\n\n• Small businesses: 1–2 weeks\n• Mid-sized companies: 2–4 weeks\n• Enterprise setups: 4–6 weeks\n\nOur onboarding process includes setup, workflow configuration, user training, and initial data migration to ensure a smooth transition.",
      icon: Clock,
      color: "from-orange-500 to-orange-600",
      category: "Implementation"
    },
    {
      question: "Do you offer support?",
      answer: "Yes. We provide:\n\n• Email & chat support\n• Dedicated onboarding assistance\n• Product documentation & tutorials\n• Ongoing technical support\n\nEnterprise plans also include priority support and dedicated account management.",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      category: "Support"
    },
    {
      question: "Can we customize workflows?",
      answer: "Absolutely. Our QMS platform allows you to customize workflows to match your internal processes.\n\nYou can configure:\n\n• Approval hierarchies\n• Audit workflows\n• CAPA processes\n• Document control flows\n• Role permissions\n\nThis flexibility ensures the system adapts to your organization — not the other way around.",
      icon: Settings,
      color: "from-teal-500 to-teal-600",
      category: "Customization"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our QMS platform, implementation, and support
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                className="group relative"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* FAQ Card */}
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'border-blue-300 shadow-xl' 
                      : 'border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6">
                    {/* Question Header */}
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${faq.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                          </div>
                          
                          {/* Chevron */}
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive 
                              ? 'bg-blue-100 text-blue-600 rotate-180' 
                              : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                          }`}>
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                        
                        {/* Answer */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          isActive ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-4 border-t border-gray-100">
                            <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect on Active */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl -z-10 blur-xl"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
          opacity: 0;
        }
        
        .group:nth-child(1) { animation-delay: 0.1s; }
        .group:nth-child(2) { animation-delay: 0.2s; }
        .group:nth-child(3) { animation-delay: 0.3s; }
        .group:nth-child(4) { animation-delay: 0.4s; }
        .group:nth-child(5) { animation-delay: 0.5s; }
        
        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
