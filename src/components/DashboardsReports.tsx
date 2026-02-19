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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dashboards & Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-bold">Compliance Dashboard</h4>
                  <span className="text-green-300 text-sm">Live</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Audits Completed</span>
                      <span className="text-white font-bold">89%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Training Compliance</span>
                      <span className="text-white font-bold">94%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">CAPA Effectiveness</span>
                      <span className="text-white font-bold">92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-teal-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
