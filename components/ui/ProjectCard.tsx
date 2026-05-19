import Badge from './Badge';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="flex flex-col p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((techItem, index) => (
          <Badge key={index}>{techItem}</Badge>
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
        >
          GitHub →
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}