// Reusable badge component supporting larger skill badges and smaller tech stack tags.

import { Code2 } from "lucide-react";

interface BadgeProps {
  label: string;
  variant?: "skill" | "tech";
}

export default function Badge({ label, variant = "tech" }: BadgeProps) {
  if (variant === "skill") {
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300/90 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-slate-200 text-sm font-medium hover:border-emerald-500/60 dark:hover:border-emerald-400/60 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-gradient-to-tr hover:from-emerald-500/[0.04] hover:to-sky-500/[0.04] dark:hover:from-emerald-500/[0.08] dark:hover:to-sky-500/[0.08] hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(16,185,129,0.12)] dark:hover:shadow-[0_4px_16px_rgba(52,211,153,0.18)] transition-all duration-300 ease-out cursor-default">
        <Code2 size={11} className="text-emerald-600 dark:text-emerald-500/50 shrink-0" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50/70 dark:bg-blue-500/[0.06] text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 hover:bg-blue-100/80 dark:hover:bg-blue-500/20 hover:border-blue-400/60 dark:hover:border-blue-400/40 hover:text-blue-800 dark:hover:text-blue-300 hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-[0_2px_8px_rgba(59,130,246,0.12)] dark:hover:shadow-[0_2px_8px_rgba(96,165,250,0.22)] transition-all duration-300 ease-out cursor-default">
      {label}
    </span>
  );
}