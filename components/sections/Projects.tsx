// Section rendering the grid of featured projects.

import type { Project } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsProps {
  projects: Project[];
  selectedRole: "all" | "uxui" | "frontend" | "web" | "mobile";
}

const getProjectRelevance = (title: string): string[] => {
  if (title.includes("CS Cloth")) return ["frontend", "web"];
  if (title.includes("HomeBase")) return ["uxui", "frontend", "mobile"];
  if (title.includes("Art Toy")) return ["uxui", "frontend", "web", "mobile"];
  if (title.includes("HR Management")) return ["uxui", "frontend", "web"];
  return ["uxui", "frontend", "web", "mobile"];
};

export default function Projects({ projects, selectedRole }: ProjectsProps) {
  return (
    <section id="projects" aria-label="Projects" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Projects" />


        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          role="list"
          aria-label="Project list"
        >
          {projects.map((project) => {
            const relevance = getProjectRelevance(project.title);
            const isRelevant = selectedRole === "all" || relevance.includes(selectedRole);

            return (
              <li 
                key={project.title}
                className="transition-all duration-300"
              >
                <ProjectCard 
                  project={project} 
                  selectedRole={selectedRole} 
                  isHighlighted={isRelevant && selectedRole !== "all"}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}