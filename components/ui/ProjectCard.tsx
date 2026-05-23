// components/ui/ProjectCard.tsx
// Self-contained project card. Uses <article> for correct HTML semantics.
// All interactivity is pure CSS (hover states) — stays a Server Component.

import { ExternalLink, Briefcase } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/data";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card-shimmer group relative flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 hover:bg-slate-200/60 dark:hover:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-emerald-500/[0.02] dark:hover:shadow-emerald-400/[0.02] transition-all duration-300 ease-out">

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Role badge */}
      <div className="flex items-center gap-1.5 mb-4">
        <Briefcase size={11} className="text-slate-400 dark:text-slate-600 shrink-0" aria-hidden="true" />
        <span className="font-mono-custom text-xs text-slate-500 tracking-wide">
          {project.role}
        </span>
      </div>

      {/* Description — flex-1 pushes tech + links to bottom */}
      <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
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

      {/* Action links */}
      <div className="flex items-center gap-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <FiGithub size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-12" />
          View Code (GitHub)
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label={`Open ${project.title} live demo`}
        >
          <ExternalLink size={13} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          Live Demo
        </a>
      </div>
    </article>
  );
}