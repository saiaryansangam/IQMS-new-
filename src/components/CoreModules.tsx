import { ShieldCheck, FileCheck, Target, BookOpen, GitBranch, Building2 } from 'lucide-react';

export default function CoreModules() {
  const modules = [
    {
      icon: ShieldCheck,
      title: 'Audit Management',
      features: [
        'Plan, schedule, assign & close audits',
        'Internal & external audits',
        'Audit reports & findings'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Document Management',
      features: [
        'Version control',
        'Review & approval workflow',
        'Controlled & uncontrolled copies'
      ],
      color: 'from-emerald-400 to-cyan-600'
    },
    {
      icon: Target,
      title: 'CAPA Management',
      features: [
        'Root cause analysis',
        'Corrective & preventive actions',
        'Effectiveness tracking'
      ],
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: BookOpen,
      title: 'Training Management',
      features: [
        'Employee training matrix',
        'Course assignments',
        'Training effectiveness evaluation'
      ],
      color: 'from-amber-400 to-orange-600'
    },
    {
      icon: GitBranch,
      title: 'Change Control',
      features: [
        'Track changes',
        'Risk assessment',
        'Approval workflows'
      ],
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: Building2,
      title: 'Supplier & Risk Management',
      features: [
        'Supplier evaluations',
        'Risk registers',
        'Vendor compliance tracking'
      ],
      color: 'from-blue-500 to-indigo-600'
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
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              CORE MODULES
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Core Modules Overview
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to streamline quality management in one integrated platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{backgroundImage: `linear-gradient(to right, ${module.color.split(' ')[0].replace('from-', '#')}, ${module.color.split(' ')[1].replace('to-', '#')})`}} />
                
                <div className="relative rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl h-full"
                     style={{backgroundColor: `hsla(${idx * 60}, 70%, 97%, 1)`}}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 group-hover:text-gray-800 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
