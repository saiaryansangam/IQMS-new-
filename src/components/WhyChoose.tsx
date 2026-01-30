import { Cloud, Zap, Settings, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    {
      icon: Cloud,
      title: 'Cloud-Based & Scalable',
      description: 'Access from anywhere, scale effortlessly as you grow'
    },
    {
      icon: Zap,
      title: 'Easy to Use UI',
      description: 'Intuitive interface that requires minimal training'
    },
    {
      icon: Settings,
      title: 'Configurable Workflows',
      description: 'Customize processes to match your unique requirements'
    },
    {
      icon: TrendingUp,
      title: 'Faster Audits & Approvals',
      description: 'Reduce cycle times by up to 70% with automation'
    },
    {
      icon: CheckCircle,
      title: '100% Compliance Readiness',
      description: 'Stay audit-ready with built-in regulatory controls'
    },
    {
      icon: Sparkles,
      title: 'AI-Ready Platform',
      description: 'Future-proof with intelligent insights and predictions'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our IQMS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with a platform built for modern quality management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-blue-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Quality Management?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations achieving operational excellence with IQMS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white/20">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
