export default function WhyChoose() {
  const benefits = [
    {
      imgSrc: '/images/cloud.jpg',
      title: 'Cloud-Based & Scalable',
      description: 'Access from anywhere, scale effortlessly as you grow'
    },
    {
      imgSrc: '/images/ui.jpg',
      title: 'Easy to Use UI',
      description: 'Intuitive interface that requires minimal training'
    },
    {
      imgSrc: '/images/workflow.jpg',
      title: 'Configurable Workflows',
      description: 'Customize processes to match your unique requirements'
    },
    {
      imgSrc: '/images/Audit.png',
      title: 'Faster Audits & Approvals',
      description: 'Reduce cycle times by up to 70% with automation'
    },
    {
      imgSrc: '/images/complience.png',
      title: '100% Compliance Readiness',
      description: 'Stay audit-ready with built-in regulatory controls'
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
          {benefits.map((benefit) => {
            return (
              <div
                key={benefit.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
              >
                {/* Image takes top half */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.imgSrc} 
                    alt={benefit.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Text takes bottom half */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}
