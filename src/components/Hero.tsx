import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                ISO Compliant • Cloud-Based • Enterprise Ready
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              All-in-One Integrated Quality Management System
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Manage audits, documents, CAPA, training & compliance from one powerful platform.
              Streamline operations and achieve 100% regulatory readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Overview
              </button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free 30-day trial
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">IQ</span>
                  </div>
                  <p className="text-gray-600 font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
