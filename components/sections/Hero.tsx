import { portfolioData } from '@/lib/data';

export default function Hero() {
  const { name, role, bio } = portfolioData.profile;

  return (
    <section id="about" className="py-24 sm:py-32 flex flex-col justify-center min-h-[80vh]">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-7xl mb-6">
        Hi, I'm <span className="text-emerald-500">{name.split(' ')[0]}</span>.
      </h1>
      <h2 className="text-2xl font-medium text-slate-300 sm:text-3xl mb-8">
        {role}
      </h2>
      <p className="max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
        {bio}
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg bg-slate-800 text-slate-100 font-bold hover:bg-slate-700 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}