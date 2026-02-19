import { Award } from 'lucide-react';

export default function ComplianceStandards() {
  const standards = [
    'ISO 9001',
    'ISO 14001',
    'ISO 45001',
    'ISO 22000',
    'IATF 16949'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100/30 to-cyan-50/20 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <p className="text-gray-600 font-medium">Designed to meet global quality & regulatory standards</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {standards.map((standard, index) => (
            <div
              key={standard}
              className={`group flex items-center justify-center px-8 py-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                index === 0 ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 hover:border-blue-400' :
                index === 1 ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-300 hover:border-cyan-400' :
                index === 2 ? 'bg-gradient-to-br from-teal-100 to-teal-200 border-teal-300 hover:border-teal-400' :
                index === 3 ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-300 hover:border-indigo-400' :
                'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300 hover:border-purple-400'
              }`}
            >
              <span className={`font-bold text-lg ${
                index === 0 ? 'text-blue-800 group-hover:text-blue-900' :
                index === 1 ? 'text-cyan-800 group-hover:text-cyan-900' :
                index === 2 ? 'text-teal-800 group-hover:text-teal-900' :
                index === 3 ? 'text-indigo-800 group-hover:text-indigo-900' :
                'text-purple-800 group-hover:text-purple-900'
              }`}>{standard}</span>
              
              {/* Subtle icon badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Award className="w-3 h-3 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
