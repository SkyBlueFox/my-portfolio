// Landing page hero section highlighting status, name, bio, and main links.

import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import type { Profile, RoleDetails } from "@/lib/data";

interface HeroProps {
  profile: Profile;
  roles: Record<string, RoleDetails>;
  selectedRole: "all" | "uxui" | "frontend" | "web";
  setSelectedRole: (role: "all" | "uxui" | "frontend" | "web") => void;
}

export default function Hero({ profile, roles, selectedRole, setSelectedRole }: HeroProps) {
  const [firstName, ...rest] = profile.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="about"
      aria-label="About"
      className="relative min-h-screen flex flex-col items-center justify-center dot-grid px-5 sm:px-8 pt-16 overflow-hidden"
    >

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-emerald-500/[0.05] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-blue-500/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl w-full text-center">

        <div className="anim-in flex justify-center mb-6" style={{ animationDelay: "0ms" }}>
          <div className="relative group cursor-default">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-emerald-500 blur-sm opacity-35 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative w-20 h-20 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center font-display text-xl font-bold text-slate-800 dark:text-slate-100 shadow-md">
              SP
            </div>
          </div>
        </div>

        <div
          className="anim-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 mb-6 hover:scale-[1.03] hover:border-emerald-500/40 transition-transform duration-300 cursor-default"
          style={{ animationDelay: "80ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="font-mono-custom text-xs text-emerald-700 dark:text-emerald-400 tracking-wider">
            Open to Internship Opportunities
          </span>
        </div>

        {/* Role Selector Tabs */}
        <div 
          className="anim-in flex flex-wrap justify-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-xl max-w-lg mx-auto mb-8 shadow-inner"
          style={{ animationDelay: "120ms" }}
        >
          {[
            { id: "all", label: "All Perspectives" },
            { id: "uxui", label: "🎨 UX/UI Design" },
            { id: "frontend", label: "⚡ Frontend Dev" },
            { id: "web", label: "🌐 Web Dev" },
          ].map((tab) => {
            const isActive = selectedRole === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-emerald-400 shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>


        <h1
          className="anim-in font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none tracking-tight mb-4"
          style={{ animationDelay: "160ms" }}
        >
          <span className="block text-slate-900 dark:text-slate-100">{firstName}</span>
          <span className="block gradient-name">{lastName}</span>
        </h1>


        <p
          className="anim-in font-mono-custom text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase mt-6 mb-1"
          style={{ animationDelay: "240ms" }}
        >
          {roles[selectedRole]?.title || profile.role}
        </p>

        <p
          className="anim-in font-display text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mb-6"
          style={{ animationDelay: "280ms" }}
        >
          {roles[selectedRole]?.tagline}
        </p>


        <p
          className="anim-in text-slate-700 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10 min-h-[90px] md:min-h-[70px]"
          style={{ animationDelay: "320ms" }}
        >
          {roles[selectedRole]?.bio || profile.bio}
        </p>


        <div
          className="anim-in flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "400ms" }}
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
          {profile.behance && (
            <a
              href={profile.behance}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance profile"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <FaBehance size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:scale-110" /> Behance
            </a>
          )}
        </div>
      </div>


      <div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="font-mono-custom text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={13} className="animate-bounce" />
      </div>
    </section>
  );
}