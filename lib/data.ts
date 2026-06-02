// Portfolio data store.

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  behance?: string;
}

export interface RoleDetails {
  title: string;
  tagline: string;
  bio: string;
  skillsHighlight: string;
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
  role: string | Record<string, string>;
  description: string | Record<string, string>;
  tech: string[];
  github: string;
  demo: string;
}

export interface DesignItem {
  title: string;
  type: "Mockup" | "Wireframe" | "User Flow";
  figmaUrl?: string;
  imageUrl?: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  roles: Record<string, RoleDetails>;
  skillCategories: SkillCategory[];
  certificates: Certificate[];
  projects: Project[];
  designItems: DesignItem[];
}

// Portfolio content details

export const portfolioData: PortfolioData = {
  profile: {
    name: "Supachai Pattanateeradej",
    role: "Frontend Engineer & UX/UI Designer",
    bio: "A Computer Science student at Kasetsart University specializing in bridging the gap between product design systems and robust engineering. Proficient in crafting accessible, responsive web/mobile layouts and optimizing client-side application state structures.",
    email: "supachai.pattanateeradej@gmail.com",
    github: "https://github.com/SkyBlueFox",
    linkedin: "https://www.linkedin.com/in/supachai-pattanateeradej-a2a848381",
    behance: "https://www.behance.net/gallery/237289527/Jorney",
  },

  roles: {
    all: {
      title: "Frontend Engineer & UX/UI Designer",
      tagline: "Bridging Code and Human-Centered Design",
      bio: "A Computer Science student at Kasetsart University specializing in bridging the gap between product design systems and robust engineering. Proficient in crafting accessible, responsive web/mobile layouts and optimizing client-side application state structures.",
      skillsHighlight: "",
    },
    uxui: {
      title: "UX/UI Designer",
      tagline: "Designing Meaningful Digital Journeys",
      bio: "A Computer Science student at Kasetsart University focusing on UX research, wireframing, high-fidelity prototyping, and design system engineering. Dedicated to removing design debt and crafting accessible interfaces.",
      skillsHighlight: "UX/UI Design",
    },
    frontend: {
      title: "Frontend Developer",
      tagline: "Engineering Interactive Web & Mobile Experiences",
      bio: "A Computer Science student at Kasetsart University specializing in SvelteKit, React, Next.js, and Flutter. Focused on building responsive, component-driven interfaces and optimizing client-side application states.",
      skillsHighlight: "Frontend & Mobile",
    },
    web: {
      title: "Web Developer",
      tagline: "Building Secure & Relational Web Applications",
      bio: "A Computer Science student at Kasetsart University designing full-stack systems with Laravel PHP, MySQL, and RESTful API integrations. Experienced in role-based access control and high-performance backend pipelines.",
      skillsHighlight: "Backend & Systems",
    },
  },

  skillCategories: [
    {
      label: "UX/UI Design",
      skills: ["Figma", "Wireframing", "High-Fi Prototyping", "Design Systems", "Component Libraries"],
    },
    {
      label: "Frontend & Mobile",
      skills: ["SvelteKit", "React", "Next.js", "Tailwind CSS", "Flutter", "Dart"],
    },
    {
      label: "Backend & Systems",
      skills: ["Laravel", "PHP", "Java", "MySQL", "RESTful APIs", "Git Workflow"],
    },
  ],

  certificates: [
    {
      title: "Dakok x AWS GameCraft Workshop",
      issuer: "Amazon Web Services",
      year: "2025",
      url: "#",
    },
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
  ],

  projects: [
    {
      title: "CS Cloth (E-Commerce Platform)",
      role: "Full-Stack Engineer (Team of 2)",
      description: "Engineered a comprehensive web application utilizing a reactive SvelteKit frontend paired with a secure Laravel REST API. Implemented strict Role-Based Access Control (RBAC) and data permissions within conditional Q&A database layers.",
      tech: ["SvelteKit", "Laravel", "PHP", "Tailwind CSS", "MySQL"],
      github: "https://github.com/SkyBlueFox/CS-Cloth.git",
      demo: "",
    },
    {
      title: "HR Management System",
      role: {
        all: "Project Lead & Full-Stack Developer (Team of 6)",
        uxui: "Project Lead & UX/UI Designer (Team of 6)",
        frontend: "Project Lead & Lead Frontend Developer (Team of 3)",
        web: "Project Lead & Full-Stack Web Developer (Team of 6)",
      },
      description: {
        all: "Led systems analysis, Figma prototyping, and responsive Tailwind UI rendering for a team, converting complex HR workforce directories into normalized, clean grid layouts.",
        uxui: "Architected internal HR dashboard workflows. Converted complex workforce tracking tables into user-centric grid layouts and designed high-fidelity wireframes in Figma.",
        frontend: "Spearheaded modular Tailwind CSS UI architecture and core component rendering, aligning visual specifications with clean execution paths.",
        web: "Supervised end-to-end systems analysis, backend database schema normalization, and synchronization pipelines between server APIs and responsive user control panels.",
      },
      tech: ["Figma", "Tailwind CSS", "JavaScript", "SQL", "Systems Analysis"],
      github: "https://github.com/SkyBlueFox/SA_HR_Management_Group6.git",
      demo: "",
    },
    {
      title: "HomeBase (Smart Home App)",
      role: "UI/UX Implementation & Consultant (Team of 10)",
      description: "Co-engineered a modular cross-platform mobile frontend using Flutter. Managed design-to-code workflow conversions closely with visual designers to eliminate design debt and optimize fluid responsive widget hierarchies.",
      tech: ["Flutter", "Dart", "Figma", "Component-Driven UI"],
      github: "https://github.com/SkyBlueFox/HomeBase_Frontend.git",
      demo: "",
    },
    {
      title: "Art Toy Bid App (Auction Application)",
      role: "UI/UX & Full-Stack Developer (Team of 2)",
      description: "Programmed a high-concurrency mobile auction app featuring synchronous countdown architecture and live-stream state loops. Integrated touch-optimized components and client debounce filters to safeguard system payloads.",
      tech: ["Flutter", "Dart", "Figma Layouts", "API Synchronization"],
      github: "https://github.com/SkyBlueFox/ArtToyBidApp.git",
      demo: "",
    },
  ],

  designItems: [
    {
      title: "Jorney Mobile Application Case Study",
      type: "Mockup",
      figmaUrl: "https://www.behance.net/gallery/237289527/Jorney",
      description: "An end-to-end mobile visual ecosystem focused on comprehensive typography guidelines, accessible contrast states, and strict WCAG compliance standards.",
    },
    {
      title: "HomeBase Domestic Dashboard Blueprint",
      type: "Wireframe",
      figmaUrl: "https://github.com/SkyBlueFox/HomeBase_Frontend.git",
      description: "Information architecture and layouts converting complex automation backend telemetries into clean, intuitive, and glanceable grid interfaces.",
    },
    {
      title: "Art Toy Auction Interactivity States",
      type: "User Flow",
      figmaUrl: "https://github.com/SkyBlueFox/ArtToyBidApp.git",
      description: "Deliberate user mapping configurations handling synchronous real-time error messages, dynamic loading states, and edge-case bidding actions.",
    },
  ],
};