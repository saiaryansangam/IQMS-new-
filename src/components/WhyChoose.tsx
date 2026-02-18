export default function WhyChoose() {
  const benefits = [
    {
      imgSrc: '/images/cloud.jpg',
      title: 'Cloud-Based & Scalable',
      description: 'Access from anywhere, scale effortlessly as you grow',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      imgSrc: '/images/ui.jpg',
      title: 'Easy to Use UI',
      description: 'Intuitive interface that requires minimal training',
      color: 'from-emerald-400 to-cyan-600'
    },
    {
      imgSrc: '/images/workflow.jpg',
      title: 'Configurable Workflows',
      description: 'Customize processes to match your unique requirements',
      color: 'from-pink-500 to-rose-600'
    },
    {
      imgSrc: '/images/Audit.png',
      title: 'Faster Audits & Approvals',
      description: 'Reduce cycle times by up to 70% with automation',
      color: 'from-amber-400 to-orange-600'
    },
    {
      imgSrc: '/images/complience.png',
      title: '100% Compliance Readiness',
      description: 'Stay audit-ready with built-in regulatory controls',
      color: 'from-teal-500 to-green-600'
    },
    {
      imgSrc: '/images/security.png',
      title: 'Robust Security',
      description: 'Protect your data with industry-leading security protocols',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
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
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our IQMS?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the difference with a platform built for modern quality management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            return (
              <div key={benefit.title} className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{backgroundImage: `linear-gradient(to right, ${benefit.color.split(' ')[0].replace('from-', '#')}, ${benefit.color.split(' ')[1].replace('to-', '#')})`}} />
                
                <div className="relative rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl h-full overflow-hidden"
                     style={{backgroundColor: `hsla(${idx * 60}, 70%, 97%, 1)`}}>
                  {/* Image takes top half */}
                  <div className="h-48 overflow-hidden">
                    <img src={benefit.imgSrc} alt={benefit.title} className="w-full h-full object-cover" />
                  </div>
                  {/* Text takes bottom half */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                    <p className="text-gray-700 group-hover:text-gray-800 transition-colors">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
