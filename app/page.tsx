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
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel'],
    githubUrl: 'https://github.com/yourusername/novara',
    liveUrl: 'https://novara-app.com', // Replace with your live URL if available
    caseStudy: {
      title: 'Novara — Business Management System',
      subtitle: 'Architecting a scalable, multi-tenant platform for streamlined business operations.',
      role: 'Full-Stack Developer & Technical Lead',
      duration: '4 Months',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Vercel', 'OpenAI API'],
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
      githubUrl: 'https://github.com/yourusername/novara',
      liveUrl: 'https://novara-app.com'
    }
  },
  {
    id: 'civicping',
    title: 'CivicPing — Civic Reporting Application',
    description: 'An automated civic reporting tool built with Telegram bot capabilities and LLM-assisted context extraction for rapid issue logging.',
    tags: ['Node.js', 'MCP SDK', 'OpenAI API', 'Telegraf', 'Telegram API'],
    githubUrl: 'https://github.com/yourusername/civicping',
    caseStudy: {
      title: 'CivicPing — Civic Reporting Application',
      subtitle: 'Leveraging Model Context Protocol and Telegram bots for instant community issue tracking.',
      role: 'Backend & AI Engineer',
      duration: '2 Months',
      techStack: ['Node.js', 'Model Context Protocol (MCP) SDK', 'OpenAI API', 'Telegraf'],
      problem: 'Citizens face friction when reporting local infrastructure issues (like potholes or water outages) through traditional web forms, leading to underreported civic problems.',
      solution: 'Built a chat-first reporting pipeline through Telegram that allows users to send unstructured messages, photos, or locations, using LLM context processing to extract structured event data.',
      architectureHighlights: [
        'Implemented the Model Context Protocol (MCP) SDK to standardize tool calling and context propagation between the user interface and backend models.',
        'Constructed a resilient event handler using Telegraf to process asynchronous incoming Telegram webhook payloads without dropping incoming reports.'
      ],
      keyChallengesAndWins: [
        {
          challenge: 'Extracting clean, structured JSON data (location, category, severity) from messy, conversational chat inputs.',
          solution: 'Configured OpenAI function calling and strict JSON Schema validation rules to guarantee valid payload structures before database insertion.'
        }
      ],
      githubUrl: 'https://github.com/yourusername/civicping'
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