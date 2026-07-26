'use client';

import { X, ExternalLink, CheckCircle2, Layers, Cpu, AlertCircle, Sparkles } from 'lucide-react';

export interface CaseStudyData {
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  techStack: string[];
  problem: string;
  solution: string;
  architectureHighlights: string[];
  keyChallengesAndWins: { challenge: string; solution: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData | null;
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-teal-500/5 p-6 sm:p-8 space-y-8 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-all"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 border-b border-slate-800 pb-6 pr-10">
          <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING CASE STUDY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-100">
            {caseStudy.title}
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            {caseStudy.subtitle}
          </p>

          {/* Quick Meta Stats */}
          <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500">ROLE:</span> <span className="text-slate-200">{caseStudy.role}</span>
            </div>
            <div>
              <span className="text-slate-500">TIMELINE:</span> <span className="text-slate-200">{caseStudy.duration}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-teal-400" /> Key Technologies Used
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {caseStudy.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-md bg-slate-950 text-teal-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Problem & Solution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/60 border border-slate-800/80 p-5 rounded-xl">
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> The Core Problem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-800/80 pt-4 md:pt-0 md:pl-6">
            <h4 className="text-xs font-mono text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> Engineered Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Design Highlights */}
        <div className="space-y-3">
          <h3 className="text-sm font-mono text-teal-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" /> System Architecture &amp; Key Features
          </h3>
          <ul className="space-y-2">
            {caseStudy.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="text-teal-400 mt-0.5">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Technical Wins */}
        {caseStudy.keyChallengesAndWins.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-teal-400 uppercase tracking-wider">
              Technical Challenges &amp; Trade-offs
            </h3>
            <div className="space-y-3">
              {caseStudy.keyChallengesAndWins.map((item, idx) => (
                <div key={idx} className="bg-slate-950/40 border border-slate-800 rounded-lg p-4 space-y-1.5">
                  <p className="text-xs font-semibold text-slate-200">
                    <span className="text-amber-400">Challenge:</span> {item.challenge}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-teal-400 font-medium">How I solved it:</span> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer Links */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs font-medium text-slate-300 bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
          >
            Close Window [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}