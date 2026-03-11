import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="Akhand Bharat Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-gray-900 dark:text-white">
                Akhand Bharat
              </span>
              <span className="text-xs font-medium text-primary uppercase tracking-widest">
                Parishad Akhada Peeth
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Home Page
            </Link>
            <Link
              to="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/gaushala"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Our Gaushala
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/donate"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-bold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary-dark shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span>Donate Now</span>
              <span className="material-icons ml-2 text-sm group-hover:animate-pulse">
                volunteer_activism
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
            >
              <span className="material-icons text-3xl">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-primary/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              Home Page
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/gaushala"
              className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              Our Gaushala
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="block px-3 py-2 rounded-md text-center text-white bg-primary hover:bg-primary-dark font-bold transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
