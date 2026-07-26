export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack application addressing a specific problem.",
    tags: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
    image: "/projects/project-one.png",
  },
];