import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "IQMS transformed our audit process from weeks to days. The automation and real-time tracking have been game-changers for our compliance team.",
      author: "Sarah Chen",
      role: "Quality Manager",
      company: "Global Pharma Inc.",
      metric: "70% faster audits"
    },
    {
      quote: "We achieved ISO 9001 certification 3 months ahead of schedule. The document control and CAPA modules made compliance preparation seamless.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Precision Manufacturing",
      metric: "100% audit success"
    },
    {
      quote: "Training compliance went from our biggest headache to our strongest asset. The system automatically tracks certifications and sends timely reminders.",
      author: "Jennifer Park",
      role: "HR Director",
      company: "MedTech Solutions",
      metric: "98% training compliance"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-blue-100/50 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Quality Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations like yours are achieving compliance excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quote icon with enhanced styling */}
              <div className="relative">
                <Quote className="w-12 h-12 text-blue-500 mb-6 group-hover:text-blue-600 transition-colors" />
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-100 rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
              
              {/* Enhanced quote text */}
              <p className="text-gray-700 mb-6 leading-relaxed relative z-10 text-lg group-hover:text-gray-800 transition-colors">
                "{testimonial.quote}"
              </p>
              
              {/* Enhanced author section */}
              <div className="border-t border-blue-100 pt-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Enhanced metric badge */}
                <div className="mt-4 inline-block bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all duration-300">
                  {testimonial.metric}
                </div>
              </div>
              
              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-blue-200 text-blue-700 px-8 py-4 rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <span className="font-bold">500+ organizations</span>
            </div>
            <span className="text-blue-400">•</span>
            <div className="flex items-center gap-2">
              <span className="font-bold">50+ countries</span>
            </div>
            <span className="text-blue-400">•</span>
            <div className="flex items-center gap-2">
              <span className="font-bold">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
