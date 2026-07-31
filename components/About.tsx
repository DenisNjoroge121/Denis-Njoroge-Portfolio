'use client';

import Image from 'next/image';
import { User, GraduationCap, Code2, Rocket, MapPin, Terminal, BookOpen, Award, ExternalLink } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  isOngoing?: boolean;
  coursework?: string;
}

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
}

// 1. UPDATE YOUR EDUCATION HERE
const educationData: EducationItem[] = [
  {
    degree: "B.Sc. Computer Science",
    institution: "Kenyatta University",
    period: "2025 — Present",
    isOngoing: true,
    coursework: "Data Structures & Algorithms, Database Management Systems (PostgreSQL), Software Architecture, Object-Oriented Design, and Data Communications.",
  },
  {
    degree: "Software Development",
    institution: "Power Learning Project (PLP)",
    period: "2026 — Present",
    isOngoing: true,
    coursework: "Design, code and deploy funcional application, Modern Frameworks like React or Angular, Database Systems (PostgreSQL), Engineering tools like Git and GitHub for version control, and Backend using Node.js",
  },
  // {
  //   degree: "Diploma / Certificate Title 3",
  //   institution: "Institution Name",
  //   period: "2026 — Present",
  //   isOngoing: true,
  //   coursework: "Add key topics, tools, or subjects studied here.",
  // },
  // {
  //   degree: "Prior Qualification / High School",
  //   institution: "School Name",
  //   period: "Completed Year",
  //   isOngoing: false,
  //   coursework: "Key achievements or focus areas.",
  // },
];

// 2. UPDATE YOUR CERTIFICATES HERE
const certificatesData: Certificate[] = [
  {
    title: "Introduction to Relational Databases",
    issuer: "DataCamp",
    date: "2026",
    credentialUrl: "https://datacamp.com",
    skills: ["PostgreSQL", "Relational Design", "SQL Queries", "Data Modeling"],
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    credentialUrl: "https://cisco.com",
    skills: ["Access Control", "Threat Landscape", "CIA Triad"],
  },
  // {
  //   title: "Certificate Title 3",
  //   issuer: "Issuer / Platform",
  //   date: "2026",
  //   credentialUrl: "https://example.com",
  //   skills: ["Skill 1", "Skill 2", "Skill 3"],
  // },
];

export default function About() {
  const timeline = [
    {
      year: "Present",
      role: "Full-Stack & Mobile Developer",
      description: "Building scalable web platforms using React, Next.js, and Django, alongside cross-platform mobile apps with React Native (Expo).",
      icon: Code2,
    },
    {
      year: "2026 to present",
      role: "Computer Science Studies",
      description: "Deepening core computer science concepts including database design, networking, algorithms, and software engineering.",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photo, Bio, Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header with Photo and Quick Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-xl shadow-teal-500/10 shrink-0 bg-slate-900 flex items-center justify-center">
                <Image
                  src="/profile.jpg"
                  alt="Profile Headshot"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <User className="w-12 h-12 text-slate-600" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  Full-Stack &amp; Mobile Engineer
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Combining formal computer science fundamentals with modern JavaScript and Python frameworks.
                </p>
                <div className="pt-1 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    <span>React • Django • Next.js • Expo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Bio Paragraphs */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base font-normal">
              <p>
                I’m a developer driven by the challenge of transforming ideas into production-ready software. Whether designing intuitive user interfaces or architecting secure backend APIs, I focus on writing clean, maintainable code.
              </p>
              <p>
                My core tech stack revolves around <span className="text-teal-400 font-medium">React, Next.js, Django, and React Native</span>. I enjoy tackling backend structures with relational databases like PostgreSQL while maintaining smooth, responsive user experiences on the frontend.
              </p>
            </div>

            {/* EDUCATION SECTION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>Education &amp; Academic Background</span>
              </div>

              <div className="space-y-3">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2 relative overflow-hidden hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 border-b border-slate-800/80 pb-2.5">
                      <div>
                        <h4 className="text-base font-bold text-slate-100">{edu.degree}</h4>
                        <p className="text-xs text-slate-400 font-medium">{edu.institution}</p>
                      </div>
                      <span
                        className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border shrink-0 ${
                          edu.isOngoing
                            ? 'text-teal-300 bg-teal-500/10 border-teal-500/30'
                            : 'text-slate-400 bg-slate-950 border-slate-800'
                        }`}
                      >
                        {edu.isOngoing ? 'Ongoing' : edu.period}
                      </span>
                    </div>

                    {edu.coursework && (
                      <div className="pt-1">
                        <p className="text-xs text-slate-400 leading-relaxed">
                          <span className="text-slate-300 font-medium">Focus: </span>
                          {edu.coursework}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS SECTION */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-teal-400 tracking-wider uppercase">
                <Award className="w-4 h-4" />
                <span>Certifications &amp; Training</span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {certificatesData.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-teal-500/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h5 className="text-sm font-bold text-slate-200">{cert.title}</h5>
                        <p className="text-xs text-slate-400">{cert.issuer} • {cert.date}</p>
                      </div>

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs font-mono text-teal-400 hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-slate-800/60">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Journey & Milestones Timeline */}
          <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 relative lg:sticky lg:top-24">
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