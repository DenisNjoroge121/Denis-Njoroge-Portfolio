'use client';

import { useState } from 'react';
import { FolderGit2, ExternalLink, BookOpen } from 'lucide-react';
import CaseStudyModal, { CaseStudyData } from './CaseStudyModal';

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

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudyData;
}

interface ProjectsProps {
  projects?: Project[];
}

export default function Projects({ projects = [] }: ProjectsProps) {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyData | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <FolderGit2 className="w-6 h-6 text-teal-400" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Check if projects array is empty */}
        {projects.length === 0 ? (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-xl">
            <p className="text-slate-400 text-sm font-mono">
              No projects passed to component or projects array is empty.
            </p>
          </div>
        ) : (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all shadow-lg"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-950 text-teal-400 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-teal-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.caseStudy && (
                    <button
                      onClick={() => setActiveCaseStudy(project.caseStudy || null)}
                      className="inline-flex items-center gap-1.5 ml-auto text-xs font-mono text-teal-400 hover:text-teal-300 font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Case Study</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Case Study Modal Trigger */}
      <CaseStudyModal
        isOpen={!!activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        caseStudy={activeCaseStudy}
      />
    </section>
  );
}