// components/ui/SectionHeader.tsx
// Shared numbered heading used in every content section.
// One place to change the typographic system for all sections at once.

interface SectionHeaderProps {
  index: string; // e.g. "01"
  title: string;
}

export default function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono-custom text-xs text-emerald-600 dark:text-emerald-500/75 tracking-[0.2em] select-none">
        {index}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
        {title}
      </h2>
      {/* Decorative rule fills remaining width on sm+ */}
      <div
        aria-hidden="true"
        className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800/80 to-transparent"
      />
    </div>
  );
}