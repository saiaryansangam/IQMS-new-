export default function Industries() {
  const industries = [
    {
      imgSrc: '/images/manufacturing.jpg',
      name: 'Manufacturing',
      color: 'from-blue-500 to-blue-600'
    },
    {
      imgSrc: '/images/pharma.jpg',
      name: 'Pharmaceuticals',
      color: 'from-teal-500 to-teal-600'
    },
    {
      imgSrc: '/images/health.jpg',
      name: 'Healthcare',
      color: 'from-red-500 to-red-600'
    },
    {
      imgSrc: '/images/food.jpg',
      name: 'Food & Beverage',
      color: 'from-orange-500 to-orange-600'
    },
    
    {
      imgSrc: '/images/IT.jpg',
      name: 'IT & Services',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by organizations across diverse sectors for quality management excellence
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {industries.map((industry) => {
            return (
              <div
                key={industry.name}
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-blue-50 transition-all flex-shrink-0"
              >
                {/* Circular Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-5 shadow-lg group-hover:shadow-xl transition-all">
                  <img 
                    src={industry.imgSrc} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Text below image */}
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
