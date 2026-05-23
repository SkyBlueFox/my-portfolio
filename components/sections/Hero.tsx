// components/sections/Hero.tsx
// Full-viewport About section. Purely presentational — Server Component.
// Name splits into first / last; surname gets the gradient treatment.

import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { Profile } from "@/lib/data";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="about"
      aria-label="About"
      className="relative min-h-screen flex flex-col items-center justify-center dot-grid px-5 sm:px-8 pt-16 overflow-hidden"
    >
      {/* Ambient decorative glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-emerald-500/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-blue-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl w-full text-center">

        {/* Availability badge */}
        <div
          className="anim-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 mb-8 hover:scale-[1.03] hover:border-emerald-500/40 transition-transform duration-300 cursor-default"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-mono-custom text-xs text-emerald-400 tracking-wider">
            Open to Internship Opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="anim-in font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-4"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block text-slate-900 dark:text-slate-100">{firstName}</span>
          <span className="block gradient-name">{lastName}</span>
        </h1>

        {/* Role */}
        <p
          className="anim-in font-mono-custom text-xs sm:text-sm text-slate-500 tracking-widest uppercase mt-6 mb-6"
          style={{ animationDelay: "160ms" }}
        >
          &lt;{profile.role} /&gt;
        </p>

        {/* Bio */}
        <p
          className="anim-in text-slate-650 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={{ animationDelay: "240ms" }}
        >
          {profile.bio}
        </p>

        {/* CTAs */}
        <div
          className="anim-in flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 cursor-pointer"
          >
            View Projects
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Contact Me
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <FiGithub size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:rotate-12" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <FiLinkedin size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-mono-custom text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </div>
    </section>
  );
}