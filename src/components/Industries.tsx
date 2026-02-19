export default function Industries() {
  const industries = [
    {
      imgSrc: '/images/manufacturing.jpg',
      name: 'Manufacturing',
      color: 'from-blue-800 to-blue-600'
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
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
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
          {industries.map((industry) => {
            return (
              <div key={industry.name} className="group flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 relative`}>
                  <img src={industry.imgSrc} alt={industry.name} className="w-full h-full object-cover" />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl blur-xl"
                       style={{backgroundImage: `linear-gradient(to right, ${industry.color.split(' ')[0].replace('from-', '#')}, ${industry.color.split(' ')[1].replace('to-', '#')})`}} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{industry.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
