import { Terminal, Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: { name: string; level?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    icon: Layout,
    skills: [
      { name: "React / Next.js" },
      { name: "React Native (Expo)" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5 / CSS3 / JavaScript" },
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      { name: "Python / Django" },
      { name: "Node.js / Express" },
      { name: "RESTful APIs" },
      { name: "Java" },
      { name: "Authentication (JWT, OAuth)" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL" },
      { name: "Relational Database Design" },
      { name: "SQL Query Optimization" },
      { name: "ORMs (Prisma, Django ORM)" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub" },
      { name: "Linux / Bash" },
      { name: "Vercel / AWS Basics" },
      { name: "Postman / API Testing" },
      { name: "VS Code" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800/80">
      <div className="space-y-12">
        
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-mono">
            <Terminal className="w-4 h-4" />
            <span>03. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl text-base">
            The languages, frameworks, and developer tools I work with to design and deliver full-stack software systems.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 space-y-5 hover:border-slate-700/80 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="flex items-center gap-2 text-slate-300 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}