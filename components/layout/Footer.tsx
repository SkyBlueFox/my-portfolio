// components/layout/Footer.tsx
// Server Component — no interactivity needed.

import { Gauge } from "lucide-react";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-slate-800/50 py-8 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="font-mono-custom text-xs text-slate-700 order-2 sm:order-1">
          &copy; {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.
        </p>

        {/* Lighthouse Performance Badge */}
        <div
          aria-label="Google Lighthouse Performance Score: 100"
          className="order-1 sm:order-2 flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-emerald-900/60 bg-emerald-950/40 text-emerald-400"
        >
          <Gauge size={14} className="shrink-0" aria-hidden="true" />
          <span className="font-mono-custom text-xs tracking-wide">
            Lighthouse Performance
          </span>
          {/* Score pill */}
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-slate-950 font-display font-bold text-xs">
            100
          </span>
        </div>
      </div>
    </footer>
  );
}