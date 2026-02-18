<<<<<<< HEAD
import { ArrowRight, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                GET STARTED TODAY
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Start Your Compliance Journey Today
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Join the leading organizations that trust IQMS for quality management excellence. Transform your compliance process in minutes.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Quick Setup</h4>
                  <p className="text-blue-200 text-sm">Get started in minutes, not weeks</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Enterprise Security</h4>
                  <p className="text-blue-200 text-sm">Bank-level data protection</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">30-Day Free Trial</h4>
                  <p className="text-blue-200 text-sm">No credit card required</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="text-blue-300 hover:text-white transition-colors font-medium flex items-center gap-2">
                Or talk to an expert
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Free Demo</h3>
                <p className="text-gray-600">See how IQMS can transform your quality management</p>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="Acme Corporation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No credit card</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
=======
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Start Your Compliance Journey Today
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join the leading organizations that trust IQMS for quality management excellence
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
          <form className="max-w-xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-blue-100">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>30-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>Setup in minutes</span>
          </div>
        </div>

        <div className="mt-12">
          <button className="text-white underline hover:text-blue-100 transition-colors">
            Or talk to an expert →
          </button>
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
        </div>
      </div>
    </section>
  );
}
