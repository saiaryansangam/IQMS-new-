import { ArrowRight, CheckCircle, Sparkles, Shield, Clock } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <img 
        src="/images/fotternew.jpg" 
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/30 to-teal-900/40"></div>
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-blue-100 font-semibold text-sm">LIMITED TIME OFFER</span>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Start Your Compliance Journey Today
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Join the leading organizations that trust IQMS for quality management excellence. Transform your compliance processes with our all-in-one platform.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                </div>
                <span className="text-lg">No credit card required</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                </div>
                <span className="text-lg">30-day free trial</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                </div>
                <span className="text-lg">Setup in minutes</span>
              </div>
            </div>

            {/* Expert CTA */}
            <div className="pt-4">
              <button className="text-blue-100 hover:text-white transition-colors font-medium underline underline-offset-4 hover:underline-offset-8">
                Or talk to an expert →
              </button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:order-2">
            <div className="relative">
              {/* Form Container - No white background */}
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group transform hover:scale-[1.02]"
                >
                  <Shield className="w-5 h-5" />
                  Book a Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 flex items-center justify-center gap-4 text-blue-100 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>Quick setup</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Secure</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
