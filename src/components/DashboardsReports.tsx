import { BarChart3, TrendingUp, Clock, Award, FileSpreadsheet } from 'lucide-react';

export default function DashboardsReports() {
  const reports = [
    {
      icon: BarChart3,
      title: 'Audit Status Overview',
      description: 'Real-time tracking of all audit activities and completion rates'
    },
    {
      icon: Clock,
      title: 'CAPA Aging Reports',
      description: 'Monitor overdue actions and identify bottlenecks instantly'
    },
    {
      icon: TrendingUp,
      title: 'Training Completion Rates',
      description: 'Track employee training progress and certification status'
    },
    {
      icon: Award,
      title: 'Compliance Scorecards',
      description: 'Comprehensive view of organizational compliance metrics'
    },
    {
      icon: FileSpreadsheet,
      title: 'Export to PDF / Excel',
      description: 'Generate customizable reports in multiple formats'
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
              ANALYTICS
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Dashboards & Reports
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Make data-driven decisions with powerful analytics and real-time insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              {reports.map((report) => {
                const Icon = report.icon;
                return (
                  <div
                    key={report.title}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600">{report.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-100">
              <img 
                src="/images/report.jpg" 
                alt="Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
