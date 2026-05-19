import SectionHeader from '../ui/SectionHeader';
import { portfolioData } from '@/lib/data';

export default function Contact() {
  const { email, github, linkedin } = portfolioData.profile;

  return (
    <section id="contact" className="py-20 border-t border-slate-800 mb-20">
      <SectionHeader
        title="Get In Touch"
        subtitle="Currently looking for an internship opportunity. My inbox is always open!"
      />
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href={`mailto:${email}`}
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/50 hover:bg-emerald-500 hover:text-slate-950 transition-all"
        >
          Email Me
        </a>
        <a
          href={github} target="_blank" rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-slate-800 text-slate-100 font-bold hover:bg-slate-700 transition-colors"
        >
          GitHub
        </a>
        <a
          href={linkedin} target="_blank" rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-slate-800 text-slate-100 font-bold hover:bg-slate-700 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}