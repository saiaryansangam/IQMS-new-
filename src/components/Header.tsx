import { Menu, X } from 'lucide-react';
<<<<<<< HEAD
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header style when scrolled past hero section
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOW IQMS WORKS', href: '#how-it-works' },
    { name: 'WHY CHOOSE US', href: '#why-choose-us' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'INDUSTRIES', href: '#industries' },
    { name: 'CORE MODULES', href: '#core-modules' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 ${
              isScrolled ? 'bg-gradient-to-br from-blue-600 to-teal-600' : 'bg-gradient-to-br from-blue-600 to-teal-600'
            }`}>
              <span className="text-xl font-bold text-white">IQ</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>IQMS</span>
=======
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Resources', href: '#resources' },
    { name: 'Pricing', href: '#pricing' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">IQ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">IQMS</span>
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
<<<<<<< HEAD
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    const headerOffset = 80; // Height of fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
=======
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
<<<<<<< HEAD
            <button className={`font-medium transition-colors duration-300 ${
              isScrolled ? 'text-gray-900 hover:text-blue-600' : 'text-white/90 hover:text-white'
            }`}>
              Sign In
            </button>
            <button className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg border ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 border-blue-500/30' 
                : 'bg-blue-600 text-white hover:bg-blue-700 border-blue-500/30'
            }`}>
=======
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm">
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
<<<<<<< HEAD
              <X className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} />
=======
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
            )}
          </button>
        </div>

        {isMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden py-6 bg-gray-900/95 backdrop-blur-md rounded-b-2xl mx-4">
=======
          <div className="lg:hidden py-6 border-t border-gray-100">
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
<<<<<<< HEAD
                  className="text-white/90 hover:text-white font-medium transition-colors py-2"
=======
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
<<<<<<< HEAD
              <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
                <button className="text-white/90 hover:text-white font-medium transition-colors text-left">
=======
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left">
>>>>>>> 228373a9ba89f1c0a20d6d3454de17b4a8a0ac92
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
