import React, { useState, useEffect } from 'react';
import { PortfolioProfile } from '../data/portfolioData';
import { FileText, Send, SlidersHorizontal, Menu, X } from 'lucide-react';

interface NavbarProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume, onOpenCustomize }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Biography', href: '#biography' },
    { name: 'Skills', href: '#skills' },
    { name: 'Trajectory', href: '#trajectory' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap"
        >
          {profile.name}
        </a>

        {/* Zone 2: 4-5 Clean Nav links with hover underline */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 text-slate-300 hover:text-white transition-colors duration-150 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCustomize}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors border border-slate-800"
            title="Customize Portfolio Profile"
            aria-label="Customize Portfolio Data"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white rounded-lg border border-slate-700/80 transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            Resume
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shadow-blue-500/20 transition-colors whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            Get in Touch
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCustomize}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors border border-slate-800"
            aria-label="Customize Profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0d0f17]/98 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex justify-center items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800 rounded-lg border border-slate-700"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              Resume View
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex justify-center items-center gap-2 px-3 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
