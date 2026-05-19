import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { portfolioData } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-800">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="The tools I use to build modern web applications."
      />
      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, index) => (
          <Badge key={index}>{skill}</Badge>
        ))}
      </div>
    </section>
  );
}