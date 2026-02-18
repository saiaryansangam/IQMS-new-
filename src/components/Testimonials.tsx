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
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how organizations are transforming their quality management with IQMS
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 relative"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-10">
                <Quote className="w-8 h-8 text-blue-600" />
              </div>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Metric */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="text-sm font-bold text-blue-600">{testimonial.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
