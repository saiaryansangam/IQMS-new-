import { Building2, Upload, FileCheck, Shield, Users2, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: Building2, title: 'Configure your company & sites', description: 'Set up organizational structure, locations, and user roles', color: 'from-blue-500 to-blue-600' },
    { icon: Upload, title: 'Upload documents & define workflows', description: 'Import existing documents and customize approval processes', color: 'from-green-500 to-green-600' },
    { icon: FileCheck, title: 'Conduct audits & record findings', description: 'Execute audits with digital checklists and automated reports', color: 'from-purple-500 to-purple-600' },
    { icon: Shield, title: 'Raise CAPA & track actions', description: 'Identify issues and manage corrective actions to closure', color: 'from-orange-500 to-orange-600' },
    { icon: Users2, title: 'Monitor training & compliance', description: 'Track employee certifications and training effectiveness', color: 'from-red-500 to-red-600' },
    { icon: TrendingUp, title: 'Generate reports & dashboards', description: 'Access real-time analytics and compliance scorecards', color: 'from-teal-500 to-teal-600' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Subtle Background Elements */}
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
            How IQMS Works
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get started in minutes with our intuitive workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="group relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{backgroundImage: `linear-gradient(to right, ${step.color.split(' ')[0].replace('from-', '#')}, ${step.color.split(' ')[1].replace('to-', '#')})`}} />
                
                <div className="relative rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl h-full"
                     style={{backgroundColor: `hsla(${idx * 60}, 70%, 97%, 1)`}}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-gray-400">{idx + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                  <p className="text-gray-700 group-hover:text-gray-800 transition-colors">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
