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
      title: 'Document Control',
      features: [
        'Centralized document repository',
        'Version control & approval workflows',
        'Controlled & uncontrolled copies'
      ],
      color: 'from-emerald-400 to-cyan-600'
    },
    {
      icon: Target,
      title: 'CAPA Management',
      features: [
        'Corrective & preventive actions',
        'Root cause analysis',
        'Effectiveness verification'
      ],
      color: 'from-amber-400 to-orange-600'
    },
    {
      icon: BookOpen,
      title: 'Training Management',
      features: [
        'Training plans & schedules',
        'Employee competency tracking',
        'Course assignments',
        'Training effectiveness evaluation'
      ],
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: GitBranch,
      title: 'Risk Management',
      features: [
        'Risk identification & assessment',
        'Risk mitigation strategies',
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
    <section id="core-modules" className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
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
            Comprehensive Quality Management
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            All the essential modules you need to manage quality, compliance, and operational excellence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
