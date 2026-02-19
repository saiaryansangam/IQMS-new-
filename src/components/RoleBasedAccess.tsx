import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

export default function RoleBasedAccess() {
  const features = [
    {
      icon: Shield,
      title: 'Role-Based Access Control',
      description: 'Granular permissions for every user role'
    },
    {
      icon: FileCheck,
      title: 'Audit Logs',
      description: 'Complete trail of all system activities'
    },
    {
      icon: Eye,
      title: 'E-Signatures',
      description: '21 CFR Part 11 compliant digital signatures'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all sensitive data'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Role-based access control with comprehensive security features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img src="/images/new.jpg" alt="User Roles" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Security Features</h3>
            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
