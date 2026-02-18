import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "IQMS transformed our audit process from weeks to days. The automation and real-time tracking have been game-changers for our compliance team.",
      author: "Sarah Chen",
      role: "Quality Manager",
      company: "Global Pharma Inc.",
      metric: "70% faster audits",
      rating: 5
    },
    {
      quote: "We achieved ISO 9001 certification 3 months ahead of schedule. The document control and CAPA modules made compliance preparation seamless.",
      author: "Michael Rodriguez",
      role: "Operations Director",
      company: "Precision Manufacturing",
      metric: "100% audit success",
      rating: 5
    },
    {
      quote: "Training compliance went from our biggest headache to our strongest asset. The system automatically tracks certifications and sends timely reminders.",
      author: "Jennifer Park",
      role: "HR Director",
      company: "MedTech Solutions",
      metric: "98% training compliance",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Trusted by Quality Leaders
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how organizations like yours are achieving compliance excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:-translate-y-2 group animate-on-scroll fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              
              <Quote className="w-10 h-10 text-blue-500 mb-6 group-hover:text-blue-600 transition-colors" />
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-4 inline-block bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll scale-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-6 py-3 rounded-full border border-blue-200 shadow-lg">
            <span className="font-semibold">500+ organizations</span>
            <span className="text-blue-500">•</span>
            <span className="font-semibold">50+ countries</span>
            <span className="text-blue-500">•</span>
            <span className="font-semibold">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
