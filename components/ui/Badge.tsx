// Reusable badge component supporting larger skill badges and smaller tech stack tags.

import { Code2 } from "lucide-react";

interface BadgeProps {
  label: string;
  variant?: "skill" | "tech";
}

export default function Badge({ label, variant = "tech" }: BadgeProps) {
  if (variant === "skill") {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300/90 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-slate-200 text-sm font-medium hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/5 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-md hover:shadow-emerald-500/5 dark:hover:shadow-emerald-400/5 transition-all duration-300 ease-out cursor-default">
        <Code2 size={11} className="text-emerald-600 dark:text-emerald-500/50 shrink-0" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/25 hover:bg-blue-100/60 dark:hover:bg-blue-500/15 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200 ease-out">
      {label}
    </span>
  );
}