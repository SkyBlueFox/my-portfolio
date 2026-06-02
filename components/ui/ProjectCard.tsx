// Individual project card displaying info, tech badges, and source/demo links.

import { ExternalLink, Briefcase } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/data";
import Badge from "./Badge";

const FigmaIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 scale-95"
  >
    <path
      d="M19 0V19C19 24.242 14.758 28.5 9.5 28.5C4.242 28.5 0 24.242 0 19C0 13.758 4.242 9.5 9.5 9.5H19V0Z"
      fill="#F24E1E"
    />
    <path
      d="M19 0H28.5C33.758 0 38 4.242 38 9.5C38 14.758 33.758 19 28.5 19H19V0Z"
      fill="#FF7262"
    />
    <path
      d="M19 19H28.5C33.758 19 38 23.242 38 28.5C38 33.758 33.758 38 28.5 38C23.242 38 19 33.758 19 28.5V19Z"
      fill="#A259FF"
    />
    <path
      d="M9.5 19H19V38H9.5C4.242 38 0 33.758 0 28.5C0 23.242 4.242 19 9.5 19Z"
      fill="#1ABCFE"
    />
    <path
      d="M0 47.5C0 42.242 4.242 38 9.5 38H19V47.5C19 52.758 14.758 57 9.5 57C4.242 57 0 52.758 0 47.5Z"
      fill="#0ACF83"
    />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  selectedRole?: "all" | "uxui" | "frontend" | "web";
}

export default function ProjectCard({ project, selectedRole = "all" }: ProjectCardProps) {
  const resolvedRole = typeof project.role === "string"
    ? project.role
    : (project.role[selectedRole] || project.role["all"] || project.role["frontend"]);

  const resolvedDescription = typeof project.description === "string"
    ? project.description
    : (project.description[selectedRole] || project.description["all"] || project.description["frontend"]);

  return (
    <article className="card-shimmer group relative flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/[0.02] dark:hover:shadow-emerald-400/[0.02] transition-all duration-300 ease-out shadow-sm shadow-slate-100/50 dark:shadow-none">


      <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-200">
        {project.title}
      </h3>


      <div className="flex items-center gap-1.5 mb-4">
        <Briefcase size={11} className="text-slate-400 dark:text-slate-600 shrink-0" aria-hidden="true" />
        <span className="font-mono-custom text-xs text-slate-600 dark:text-slate-500 tracking-wide">
          {resolvedRole}
        </span>
      </div>


      <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5 min-h-[90px] md:min-h-[70px]">
        {resolvedDescription}
      </p>


      <ul
        className="flex flex-wrap gap-2 mb-5"
        role="list"
        aria-label="Technologies used"
      >
        {project.tech.map((t) => (
          <li key={t}>
            <Badge label={t} variant="tech" />
          </li>
        ))}
      </ul>


      <div className="flex items-center gap-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <FiGithub size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-12" />
          View Code (GitHub)
        </a>
        {project.demo && project.demo !== "" && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label={project.demo.includes("figma.com") ? `Open ${project.title} Figma prototype` : `Open ${project.title} live demo`}
          >
            {project.demo.includes("figma.com") ? (
              <>
                <FigmaIcon size={11} />
                Figma Prototype
              </>
            ) : (
              <>
                <ExternalLink size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Live Demo
              </>
            )}
          </a>
        )}
      </div>
    </article>
  );
}