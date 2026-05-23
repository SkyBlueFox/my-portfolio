// components/sections/SkillsAndCertificates.tsx
// Server Component. Two sub-sections:
//   1. Categorised skill badges
//   2. Certificate cards in a responsive grid

import { Award, ExternalLink } from "lucide-react";
import type { SkillCategory, Certificate } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

interface SkillsAndCertificatesProps {
  skillCategories: SkillCategory[];
  certificates: Certificate[];
}

export default function SkillsAndCertificates({
  skillCategories,
  certificates,
}: SkillsAndCertificatesProps) {
  return (
    <section id="skills" aria-label="Skills and Certificates" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader index="01" title="Skills & Certificates" />

        {/* ── Skill categories ── */}
        <div className="space-y-8 mb-20">
          {skillCategories.map((category) => (
            <div key={category.label}>
              {/* Category label */}
              <p className="font-mono-custom text-xs text-slate-600 uppercase tracking-widest mb-3">
                {category.label}
              </p>
              {/* Badges */}
              <ul className="flex flex-wrap gap-2.5" role="list" aria-label={`${category.label} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <Badge label={skill} variant="skill" />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Certificates sub-section ── */}
        <div>
          <h3 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
            <Award size={18} className="text-emerald-600 dark:text-emerald-500" aria-hidden="true" />
            Certificates &amp; Activities
          </h3>

          {/* 1 col on mobile, 2 on sm+  */}
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            role="list"
            aria-label="Certificates"
          >
            {certificates.map((cert) => (
              <li key={cert.title}>
                <a
                  href={cert.url ?? "#"}
                  target={cert.url && cert.url !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-200/50 dark:hover:bg-slate-900/60 transition-all duration-200 cursor-pointer"
                  aria-label={`${cert.title} from ${cert.issuer} (${cert.year})`}
                >
                  {/* Icon column */}
                  <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Award size={14} className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  </div>

                  {/* Text column */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {cert.title}
                    </p>
                    <p className="font-mono-custom text-xs text-slate-500 mt-1">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>

                  {/* External link indicator */}
                  {cert.url && cert.url !== "#" && (
                    <ExternalLink
                      size={12}
                      className="shrink-0 mt-1 text-slate-400 dark:text-slate-700 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}