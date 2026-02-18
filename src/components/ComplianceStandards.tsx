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
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <p className="text-gray-600 font-medium">Designed to meet global quality & regulatory standards</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {standards.map((standard) => (
            <div
              key={standard}
              className="flex items-center justify-center px-6 py-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <span className="text-gray-700 font-semibold text-lg">{standard}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
