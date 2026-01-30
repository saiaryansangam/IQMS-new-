import { Settings, Upload, ClipboardCheck, AlertTriangle, Users, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Settings,
      title: 'Configure your company & sites',
      description: 'Set up organizational structure, locations, and user roles'
    },
    {
      icon: Upload,
      title: 'Upload documents & define workflows',
      description: 'Import existing documents and customize approval processes'
    },
    {
      icon: ClipboardCheck,
      title: 'Conduct audits & record findings',
      description: 'Execute audits with digital checklists and automated reports'
    },
    {
      icon: AlertTriangle,
      title: 'Raise CAPA & track actions',
      description: 'Identify issues and manage corrective actions to closure'
    },
    {
      icon: Users,
      title: 'Monitor training & compliance',
      description: 'Track employee certifications and training effectiveness'
    },
    {
      icon: BarChart3,
      title: 'Generate reports & dashboards',
      description: 'Access real-time analytics and compliance scorecards'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How IQMS Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intuitive workflow
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 transform -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-blue-100">{idx + 1}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
