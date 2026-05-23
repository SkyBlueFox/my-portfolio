// components/sections/Projects.tsx
// Server Component — delegates card layout to <ProjectCard>.

import type { Project } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" aria-label="Projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="02" title="Projects" />

        {/* 1 col mobile → 2 col md+ */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Project list"
        >
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}