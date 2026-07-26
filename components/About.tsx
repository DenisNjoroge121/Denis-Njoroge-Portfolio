import { User, GraduationCap, Code2, Rocket, MapPin, Terminal } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: "Present",
      role: "Full-Stack & Mobile Developer",
      description: "Building scalable web platforms using React, Next.js, and Django, alongside cross-platform mobile apps with React Native.",
      icon: Code2,
    },
    {
      year: "2026",
      role: "Computer Science Studies",
      description: "Deepening knowledge in software engineering principles, database systems, networking, and algorithms.",
      icon: GraduationCap,
    },
    {
      year: "Early Projects",
      role: "First Lines of Code",
      description: "Started crafting web applications, mastering HTML, CSS, JavaScript, and database management fundamentals.",
      icon: Rocket,
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80">
      <div className="space-y-12">
        {/* Section Heading */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-teal-400 text-sm font-mono">
            <User className="w-4 h-4" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-100">
            Passionate about building functional, high-impact software.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Bio Column */}
          <div className="md:col-span-7 space-y-4 text-slate-300 leading-relaxed text-base font-normal">
            <p>
              I’m a developer driven by the challenge of transforming ideas into production-ready software. Whether designing intuitive user interfaces or architecting secure backend APIs, I focus on writing clean, maintainable code.
            </p>
            <p>
              My core stack revolves around modern web and mobile ecosystems—primarily <span className="text-teal-400 font-medium">React, Next.js, Django, and React Native</span>. I enjoy tackling complex backend structures with relational databases like PostgreSQL while maintaining seamless user experiences on the frontend.
            </p>
            <p>
              Outside of building projects, I explore new technologies, participate in collaborative software builds, and constantly refine my understanding of system design and network engineering.
            </p>

            {/* Quick Details Badge */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-teal-400" />
                <span>Full-Stack &amp; Mobile Focus</span>
              </div>
            </div>
          </div>

          {/* Timeline / Experience Card */}
          <div className="md:col-span-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative">
            <h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
              <span>Journey &amp; Milestones</span>
            </h3>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-slate-950 border border-teal-500/40 flex items-center justify-center text-teal-400 z-10">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-teal-400 font-semibold">{item.year}</span>
                        <span className="text-slate-600">•</span>
                        <h4 className="text-sm font-semibold text-slate-200">{item.role}</h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}