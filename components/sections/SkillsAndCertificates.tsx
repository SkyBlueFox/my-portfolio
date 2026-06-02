// Section presenting skill categories and badges.

import type { SkillCategory } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

interface SkillsProps {
  skillCategories: SkillCategory[];
  selectedRole: "all" | "uxui" | "frontend" | "web" | "mobile";
}

export default function Skills({ skillCategories, selectedRole }: SkillsProps) {
  return (
    <section id="skills" aria-label="Skills" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isHighlighted = 
              (selectedRole === "uxui" && category.label === "UX/UI Design") ||
              (selectedRole === "frontend" && category.label === "Frontend & Mobile") ||
              (selectedRole === "mobile" && category.label === "Frontend & Mobile") ||
              (selectedRole === "web" && category.label === "Backend & Systems");

            return (
              <div 
                key={category.label}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isHighlighted 
                    ? "bg-sky-500/[0.02] dark:bg-emerald-500/[0.02] border-sky-500/40 dark:border-emerald-500/40 shadow-lg shadow-sky-500/[0.01] dark:shadow-emerald-500/[0.01] scale-[1.02] ring-1 ring-sky-500/20 dark:ring-emerald-500/20" 
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                      isHighlighted ? "text-sky-600 dark:text-emerald-400" : "text-slate-800 dark:text-slate-300"
                    }`}>
                      {category.label}
                    </p>
                    {isHighlighted && (
                      <span className="text-[10px] font-mono-custom font-bold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-sky-500/20 dark:border-emerald-500/20">
                        Active Role
                      </span>
                    )}
                  </div>
                  
                  <ul className="flex flex-wrap gap-2" role="list" aria-label={`${category.label} skills`}>
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Badge label={skill} variant="skill" />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}