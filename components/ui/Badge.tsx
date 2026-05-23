// components/ui/Badge.tsx
// Minimal pill primitive used by Skills and ProjectCard.
// variant="skill"  → emerald, larger, with icon (used in Skills section)
// variant="tech"   → blue, compact  (used inside project cards)

import { Code2 } from "lucide-react";

interface BadgeProps {
  label: string;
  variant?: "skill" | "tech";
}

export default function Badge({ label, variant = "tech" }: BadgeProps) {
  if (variant === "skill") {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 text-sm font-mono-custom hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-500/5 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 ease-out cursor-default">
        <Code2 size={11} className="text-emerald-600 dark:text-emerald-500/50 shrink-0" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono-custom bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25 hover:bg-blue-500/15 hover:border-blue-500/40 transition-all duration-200 ease-out">
      {label}
    </span>
  );
}