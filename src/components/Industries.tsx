import { Factory, Pill, Heart, UtensilsCrossed, Car, Monitor } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Pill,
      name: 'Pharmaceuticals',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Heart,
      name: 'Healthcare',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: UtensilsCrossed,
      name: 'Food & Beverage',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Car,
      name: 'Automotive',
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: Monitor,
      name: 'IT & Services',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by organizations across diverse sectors for quality management excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{industry.name}</h3>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
