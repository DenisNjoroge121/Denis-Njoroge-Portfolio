import { Code2, ExternalLink, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

const projectsData: Project[] = [
  {
    title: "Novara — Business Management System",
    description: "An end-to-end enterprise platform featuring automated workflow management, real-time analytics dashboards, and AI-assisted financial data processing.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS", "Vercel"],
    githubUrl: "https://github.com",
    badge: "Flagship",
  },
  {
    title: "CivicPing — Community Reporting App",
    description: "A civic reporting suite enabling citizens to log neighborhood infrastructure issues directly via an automated Telegram bot integration.",
    tags: ["Node.js", "OpenAI", "Telegraf", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://t.me",
  },
  {
    title: "AgriSchedule — Farm Management Platform",
    description: "A lightweight USSD and SMS micro-SaaS aiding smallholder farmers with crop cultivation tracking, harvesting alerts, and market price insights.",
    tags: ["Django", "Python", "USSD API", "PostgreSQL"],
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/80">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-mono">
            <Code2 className="w-4 h-4" />
            <span>02. FEATURED WORK</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
            Selected Projects &amp; Systems
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            A showcase of web applications, APIs, and mobile solutions built for performance and scalability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-teal-500/5"
            >
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <Layers className="w-5 h-5" />
                  </div>

                  {project.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-teal-400/10 border border-teal-400/30 text-teal-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Footer Info: Tags & Action Links */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                <div className="flex items-center gap-4 pt-1 text-slate-400">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-teal-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                      aria-label={`${project.title} GitHub Source Code`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-teal-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
                      aria-label={`${project.title} Live Application`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}