import { ClipboardCheck, FileText, AlertCircle, GraduationCap, RefreshCw, Users } from 'lucide-react';

export default function CoreModules() {
  const modules = [
    {
      icon: ClipboardCheck,
      title: 'Audit Management',
      features: [
        'Plan, schedule, assign & close audits',
        'Internal & external audits',
        'Audit reports & findings'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Document Management',
      features: [
        'Version control',
        'Review & approval workflow',
        'Controlled & uncontrolled copies'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: AlertCircle,
      title: 'CAPA Management',
      features: [
        'Root cause analysis',
        'Corrective & preventive actions',
        'Effectiveness tracking'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Training Management',
      features: [
        'Employee training matrix',
        'Course assignments',
        'Training effectiveness evaluation'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: RefreshCw,
      title: 'Change Control',
      features: [
        'Track changes',
        'Risk assessment',
        'Approval workflows'
      ],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Supplier & Risk Management',
      features: [
        'Supplier evaluations',
        'Risk registers',
        'Vendor compliance tracking'
      ],
      color: 'from-slate-500 to-slate-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Core Modules Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to streamline quality management in one integrated platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
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
