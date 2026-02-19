import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOW IQMS WORKS', href: '#How IQMS WORKS' },
    { name: 'WHY CHOOSE US', href: '#WHY CHOOSE US' },
    { name: 'TESTIMONIALS', href: '#TESTIMONIALS' },
    { name: 'INDUSTRIES', href: '#INDUSTRIES' },
    { name: 'CORE MODULES', href: '#CORE MODULES' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-teal-600' 
                : 'bg-gradient-to-br from-blue-600 to-teal-600'
            }`}>
              <span className="text-xl font-bold text-white">IQ</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>IQMS</span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className={`font-medium transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg border border-blue-500/30">
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden py-6 rounded-b-2xl mx-4 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white shadow-lg border border-gray-200' 
              : 'bg-gray-900/95 backdrop-blur-md'
          }`}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors py-2 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className={`flex flex-col gap-3 pt-4 border-t transition-colors duration-300 ${
                isScrolled 
                  ? 'border-gray-200' 
                  : 'border-white/20'
              }`}>
                <button className={`font-medium transition-colors text-left ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
