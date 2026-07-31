'use client';

import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-start py-16">
      
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono mb-6">
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <span>Available for Software Engineering Opportunities</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
        Building high-impact <br />
        <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Web &amp; Mobile Applications.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
        Computer Science student and full-stack developer specializing in <span className="text-slate-200 font-medium">React, Next.js, Django, and React Native</span>. Focused on clean architecture, reliable backends, and responsive user experiences.
      </p>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        
        {/* ANIMATED RESUME DOWNLOAD BUTTON */}
        <a
          href="/resume.pdf"
          download="Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
        >
          {/* Light sweep hover effect */}
          <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

          {/* Download Icon */}
          <Download className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:scale-110" />
          
          <span className="relative z-10 font-semibold tracking-wide">Download Resume</span>
        </a>

        {/* Contact Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-300 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 hover:text-white transition-all duration-300"
        >
          <Mail className="w-4 h-4 text-slate-400" />
          <span>Get in Touch</span>
        </a>

      </div>

      {/* Quick Social Links */}
      <div className="mt-12 flex items-center gap-5 text-slate-400">
        <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Connect:</span>
        
        {/* GitHub Icon (Inline SVG) */}
        <a
          href="https://github.com/DenisNjoroge121/"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
          aria-label="GitHub Profile"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn Icon (Inline SVG) */}
        <a
          href="www.linkedin.com/in/denis-njoroge-121d"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-teal-500/30 transition-all"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>

      </div>

    </section>
  );
}