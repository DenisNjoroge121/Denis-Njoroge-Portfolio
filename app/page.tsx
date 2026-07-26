import Link from 'next/link';
import { Mail, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-teal-500 selection:text-slate-900">
      {/* Background Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight hover:text-teal-400 transition-colors flex items-center gap-2">
            <Terminal className="w-5 h-5 text-teal-400" />
            <span>DevPortfolio<span className="text-teal-400">.</span></span>
          </Link>
          
          <nav className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-slate-100 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-100 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-100 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-slate-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="py-24 md:py-32 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 max-w-3xl leading-tight">
            Building software solutions for the web <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400">&amp; mobile.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
            Full-stack developer specializing in scalable web applications, modern APIs, and cross-platform mobile experiences.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-teal-400 text-slate-950 font-semibold text-sm hover:bg-teal-300 transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-700 bg-slate-900/50 text-slate-200 font-medium text-sm hover:border-slate-500 hover:bg-slate-800/50 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links with SVG Brand Icons */}
          <div className="flex items-center gap-5 pt-6 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:hello@example.com" className="hover:text-teal-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Portfolio Sections */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs font-mono text-slate-400">
        <p>© {new Date().getFullYear()} — Built with Next.js &amp; Tailwind CSS.</p>
      </footer>
    </div>
  );
}