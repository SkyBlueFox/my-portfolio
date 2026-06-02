// Individual project card displaying info, tech badges, and source/demo links.

import { ExternalLink, Briefcase } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import type { Project } from "@/lib/data";
import Badge from "./Badge";

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
            aria-label={`Open ${project.title} live demo`}
          >
            <ExternalLink size={14} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}