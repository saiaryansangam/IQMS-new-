<<<<<<< HEAD
export default function Industries() {
  const industries = [
    {
      imgSrc: '/images/manufacturing.jpg',
      name: 'Manufacturing',
      color: 'from-blue-800 to-blue-600'
    },
    {
      imgSrc: '/images/pharma.jpg',
=======
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
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
      name: 'Pharmaceuticals',
      color: 'from-teal-500 to-teal-600'
    },
    {
<<<<<<< HEAD
      imgSrc: '/images/health.jpg',
=======
      icon: Heart,
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
      name: 'Healthcare',
      color: 'from-red-500 to-red-600'
    },
    {
<<<<<<< HEAD
      imgSrc: '/images/food.jpg',
      name: 'Food & Beverage',
      color: 'from-orange-500 to-orange-600'
    },
   
    {
      imgSrc: '/images/IT.jpg',
=======
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
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
      name: 'IT & Services',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
<<<<<<< HEAD
    <section id="industries" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
           
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Trusted by organizations across diverse sectors for quality management excellence
          </p>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {industries.map((industry, index) => {
            return (
              <div key={industry.name} className="group flex flex-col items-center text-center animate-on-scroll fade-up" 
                   style={{animationDelay: `${index * 100}ms`}}>
                <div className={`w-24 h-24 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative`}>
                  <img src={industry.imgSrc} alt={industry.name} className="w-full h-full object-cover" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                       style={{backgroundImage: `linear-gradient(to right, ${industry.color.split(' ')[0].replace('from-', '#')}, ${industry.color.split(' ')[1].replace('to-', '#')})`}} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors" 
                    style={{animationDelay: `${index * 100 + 150}ms`}}>{industry.name}</h3>
=======
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
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
