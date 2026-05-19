interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20">
      {children}
    </span>
  );
}