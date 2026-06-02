// Section heading component with a clean layout and accent prefix.

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12 select-none">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">
        <span className="text-emerald-500 font-mono-custom text-lg font-normal mr-2">/</span>
        {title}
      </h2>

      <div
        aria-hidden="true"
        className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-800/40 to-transparent"
      />
    </div>
  );
}