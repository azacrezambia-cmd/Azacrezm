import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoSrc from '../../Public/Executive/Logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Events', href: '#events' },
    { name: 'Membership', href: '#membership' },
    { name: 'Executive Board', href: '#board' },
    { name: 'Contact', href: '#contact' },
    { name: 'Portal', href: '#dashboard' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="AzACRE Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-2xl tracking-tight leading-none ${isScrolled ? 'text-emerald-deep' : 'text-white'}`}>
              AzACRE
            </span>
            <span className={`text-[9px] uppercase tracking-widest font-serif mt-0.5 ${isScrolled ? 'text-[#b87333]' : 'text-orange-light'}`}>
              Zambia Legacy Beyond Borders
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-orange-light ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#membership"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isScrolled
                ? 'bg-emerald-primary text-white hover:bg-emerald-deep'
                : 'bg-white text-emerald-primary hover:bg-emerald-light hover:-translate-y-0.5'
            }`}
          >
            Join Now
          </a>
        </div>

        <button
          className={`lg:hidden p-2 -mr-2 ${isScrolled ? 'text-emerald-deep' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 font-medium text-lg hover:text-orange-warm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center bg-emerald-primary text-white px-6 py-3 rounded-xl font-semibold"
          >
            Join Now
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
