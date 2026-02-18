import { Shield, Lock, FileCheck, Eye } from 'lucide-react';

export default function RoleBasedAccess() {
<<<<<<< HEAD
=======
  const roles = [
    'Super Admin',
    'Admin',
    'Auditor',
    'Reviewer',
    'Approver',
    'Employee'
  ];

>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
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
<<<<<<< HEAD
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              SECURITY
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
=======
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
            Role-based access control with comprehensive security features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
<<<<<<< HEAD
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img src="/images/new.jpg" alt="User Roles" className="w-full h-full object-cover" />
=======
            <h3 className="text-2xl font-bold mb-6">User Roles</h3>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => (
                <div
                  key={role}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <p className="font-semibold">{role}</p>
                </div>
              ))}
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
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
<<<<<<< HEAD
                    className="flex items-start gap-4 bg-white rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
=======
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{feature.title}</h4>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
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
