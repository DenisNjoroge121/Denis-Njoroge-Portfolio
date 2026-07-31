import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects, { Project } from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-100 max-w-6xl mx-auto px-6 sm:px-12 space-y-20 pt-20">
        <Hero />
        <About />
        <Projects projects={featuredProjects} />
        <Skills />
        <Contact />
      </main>
    </>
  );
}



const featuredProjects: Project[] = [
  {
    id: 'novara',
    title: 'Novara — Business Management System',
    description: 'A full-stack business management platform designed to centralize operations, automate routine tasks, and deliver AI-driven analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Vercel'],
    githubUrl: 'https://github.com/DenisNjoroge121/novara-ops-hub.git',
    liveUrl: 'https://novarabms.lovable.app', // Replace with your live URL if available
    caseStudy: {
      title: 'Novara — Business Management System',
      subtitle: 'Architecting a scalable, multi-tenant platform for streamlined business operations.',
      role: 'Full-Stack Developer & Technical Lead',
      duration: '4 Months',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Vercel', 'OpenAI API'],
      problem: 'Small and medium-sized enterprises often rely on fragmented tools for inventory, user management, and sales reporting, leading to data silos and manual overhead.',
      solution: 'Engineered a unified SaaS platform featuring a modular backend architecture, persistent relational database storage, and integrated AI capabilities to summarize business metrics automatically.',
      architectureHighlights: [
        'Designed a normalized PostgreSQL relational schema to ensure strict data integrity across client entities.',
        'Built a RESTful backend using Node.js to decoupled business logic from the React dashboard interface.',
        'Deployed the frontend on Vercel for fast global edge rendering, backed by cloud hosting on AWS.'
      ],
      keyChallengesAndWins: [
        {
          challenge: 'Synthesizing complex multi-table operational data into actionable summaries for business owners.',
          solution: 'Integrated AI analytical endpoints that parse raw sales and activity metrics into automated natural-language summary reports.'
        },
        {
          challenge: 'Maintaining responsiveness while processing heavy database aggregations.',
          solution: 'Indexed primary and foreign key lookups in PostgreSQL and restructured complex join queries, cutting dashboard loading times drastically.'
        }
      ],
      githubUrl: 'https://github.com/DenisNjoroge121/novara-ops-hub.git',
      liveUrl: 'https://novarabms.lovable.app'
    }
  },
  {
    id: 'civicping',
    title: 'Novara Budget App — Managing your funds application',
    description: 'An application used to plan your monthly income by putting the expenses you incure everyday, the amount of money you save (includes ticking if saved and have a timeline for reaching the target) and it does the balance.',
    tags: ['Node.js', 'React Native', 'Expo', 'Supabase'],
    githubUrl: 'https://github.com/DenisNjoroge121/Novara-BudgetApp.git',
    caseStudy: {
      title: 'Novara Budget App — Managing your funds application',
      subtitle: 'Managing your funds in a smarter way.',
      role: 'Backend & AI Engineer',
      duration: '2 Months',
      techStack: ['Node.js', 'React Native', 'Expo', 'Supabase'],
      problem: 'Many times people just use money without planning it which sometimes leads to overspending and not being aware how the money was spent.',
      solution: 'Built an application that help users to put their monthly income and add expenses, their savings and goals to achieve when saving or investing their money. The app comes with timeline that user can put to accomplish their goals by suggesting amount of money they will be saving per week/month.',
      architectureHighlights: [
        'Engineered a real-time ledger calculation engine in Node.js to instantaneously balance monthly income against dynamic, daily expense inputs.',
        'Integrated Supabase real-time listeners and database triggers to track savings goal updates and dynamically recalculate timeline progress.'
      ],
      keyChallengesAndWins: [
        {
          challenge: 'Calculating precise, adaptive weekly and monthly savings recommendations when user income or daily expense habits fluctuated unexpectedly.',
          solution: 'Developed a time-series forecasting algorithm that recalibrates the required savings velocity based on historical spending leakages and remaining timeline days.'
        }
      ],
      githubUrl: 'https://github.com/DenisNjoroge121/Novara-BudgetApp.git'
    }
  },
  {
    id: 'ussd-agri-saas',
    title: 'AgriSchedule — USSD/SMS Micro-SaaS',
    description: 'A low-bandwidth platform enabling smallholder farmers to track crop cultivation schedules and harvest timings over USSD and SMS.',
    tags: ['Python', 'Django', 'USSD API', 'SMS Gateway', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/agri-ussd-saas',
    caseStudy: {
      title: 'AgriSchedule — USSD/SMS Micro-SaaS',
      subtitle: 'Delivering agricultural scheduling tools to feature phones in low-connectivity regions.',
      role: 'Backend Engineer',
      duration: '2 Months',
      techStack: ['Django', 'PostgreSQL', 'Africa\'s Talking USSD API', 'Celery', 'Redis'],
      problem: 'Smallholder farmers in rural areas often lack smartphone access and reliable mobile internet, leaving them without automated guidance for optimal planting and harvesting windows.',
      solution: 'Developed a lightweight USSD/SMS engine that allows farmers to interact with a session-based menu on any feature phone to log crops, receive tailored advice, and schedule automated SMS alerts.',
      architectureHighlights: [
        'Optimized Django database models and query sets for low-latency HTTP callback responses expected by USSD gateways (sub-500ms response targets).',
        'Implemented an asynchronous task queue using Celery and Redis to handle batch scheduling and dispatching of time-sensitive SMS reminders.'
      ],
      keyChallengesAndWins: [
        {
          challenge: 'Managing strict session timeouts (typically 30 seconds per step) imposed by telecom USSD gateways.',
          solution: 'Designed a lightweight, stateful session key-value cache in Redis to maintain user navigation state across multi-step USSD prompt trees.'
        }
      ],
      githubUrl: 'https://github.com/yourusername/agri-ussd-saas'
    }
  }
];