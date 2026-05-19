import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import { portfolioData } from '@/lib/data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-800">
      <SectionHeader
        title="Featured Projects"
        subtitle="Some of the recent work I've done."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}