'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add subtle background blur when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-slate-100 font-extrabold text-lg tracking-tight"
        >
          <div className="p-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400 group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <span>Portfolio<span className="text-teal-400">.</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-slate-400 hover:text-teal-400 transition-colors font-mono text-xs uppercase tracking-wider"
            >
              <span className="text-teal-500/60 mr-1">0{idx + 1}.</span> {link.name}
            </a>
          ))}

          {/* Nav Resume Button */}
          <a
            href="/resume.pdf"
            download="Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/30 hover:bg-teal-500/20 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-teal-400 font-mono text-sm uppercase tracking-wider"
              >
                <span className="text-teal-400 mr-2">0{idx + 1}.</span> {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download="Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-mono text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors mt-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}