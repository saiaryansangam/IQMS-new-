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
    <section className="py-24 bg-gray-50">
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
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <Quote className="w-10 h-10 text-blue-500 mb-6" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonial.metric}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full">
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
