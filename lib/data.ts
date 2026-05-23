// lib/data.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Swap the static export for a fetch() / CMS call later without touching
// any component import sites.
// ─────────────────────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  url?: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface PortfolioData {
  profile: Profile;
  skillCategories: SkillCategory[];
  certificates: Certificate[];
  projects: Project[];
}

// ─── Content ──────────────────────────────────────────────────────────────────

export const portfolioData: PortfolioData = {
  profile: {
    name: "Supachai Pattanateeradej",
    role: "Frontend Developer Intern",
    bio: "Computer Science student passionate about building fast, accessible, and clean web applications. Experienced in modern JavaScript frameworks and collaborative IT development.",
    email: "your.email@gmail.com",
    github: "https://github.com/SkyBlueFox",
    linkedin:
      "https://www.linkedin.com/in/supachai-pattanateeradej-a2a848381",
  },

  skillCategories: [
    {
      label: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      label: "Languages",
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python"],
    },
    {
      label: "Tooling",
      skills: ["Git", "GitHub", "Figma", "VS Code"],
    },
  ],

  certificates: [
    {
      title: "AWS Cloud Practitioner Essentials Workshop",
      issuer: "Amazon Web Services",
      year: "2024",
      url: "#",
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Coursera × Meta",
      year: "2024",
      url: "#",
    },
    {
      title: "CS50's Introduction to Computer Science",
      issuer: "Harvard / edX",
      year: "2023",
      url: "#",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      url: "#",
    },
  ],

  projects: [
    {
      title: "IT Security & Networking Lab",
      role: "Frontend Developer",
      description:
        "Internal dashboard for network traffic visualization and security log monitoring. Implemented responsive design for system administrators with real-time chart updates.",
      tech: ["Next.js", "Tailwind CSS", "Recharts", "TypeScript"],
      github: "https://github.com/yourusername/project-one",
      demo: "https://project-one.vercel.app",
    },
    {
      title: "Smart Workspace Dashboard",
      role: "UI Engineer",
      description:
        "Front-end interface showcasing analytics and resource allocation for modern eco-friendly workspaces. Optimized for Core Web Vitals with a perfect Lighthouse score.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Chart.js"],
      github: "https://github.com/yourusername/project-two",
      demo: "https://project-two.vercel.app",
    },
  ],
};