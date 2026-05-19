import { portfolioData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-500 border-t border-slate-800 text-sm">
      <p>© {new Date().getFullYear()} {portfolioData.profile.name}. Built with Next.js & Tailwind CSS.</p>
    </footer>
  );
}