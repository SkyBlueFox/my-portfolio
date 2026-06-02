// Client navbar component handling responsive navigation, dark/light theme, and active link highlight on scroll.

"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Design", href: "#design" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

interface NavbarProps {
  githubUrl: string;
  authorName: string;
}

export default function Navbar({ githubUrl, authorName }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle background blur and track current active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Force About highlight when at the very top
      if (window.scrollY < 50) {
        setActiveHash("#about");
        return;
      }

      // Force Contact highlight when scrolled to absolute bottom
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setActiveHash("#contact");
        return;
      }

      const sections = NAV_LINKS.map(({ href }) =>
        document.querySelector<HTMLElement>(href)
      );
      const current = sections.reduce<string>((acc, el) => {
        if (!el) return acc;
        const { top } = el.getBoundingClientRect();
        return top <= 100 ? "#" + el.id : acc;
      }, "");
      setActiveHash(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 header-anim ${scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-900/50 shadow-md shadow-slate-200/5 dark:shadow-black/10"
          : "bg-transparent"
        }`}
    >
      <nav
        className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >

        <a
          href="#about"
          aria-label="Back to top"
          onClick={() => setActiveHash("#about")}
          className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-800 dark:text-slate-100 hover:opacity-90 transition-opacity flex items-center gap-0.5"
        >
          <span className="bg-gradient-to-r from-sky-600 to-emerald-500 dark:from-sky-400 dark:to-emerald-400 bg-clip-text text-transparent">
            supachai
          </span>
          <span className="text-emerald-500 dark:text-sky-400 animate-pulse">.</span>
        </a>


        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeHash === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setActiveHash(href)}
                  className={`text-[13px] font-medium tracking-wide transition-all duration-200 px-3 py-1.5 rounded-full ${isActive
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 dark:bg-sky-400/10 font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/50"
                    }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>


        <div className="flex items-center gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:border-sky-500/30 dark:hover:border-emerald-500/30 transition-all shadow-xs hover:shadow-sm active:scale-95 flex items-center justify-center"
          >
            <FiGithub size={18} />
          </a>


          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 hover:border-sky-500/30 dark:hover:border-emerald-500/30 transition-all shadow-xs hover:shadow-sm active:scale-95 cursor-pointer flex items-center justify-center"
          >
            <Sun size={18} className="hidden dark:block text-slate-600 dark:text-emerald-400" />
            <Moon size={18} className="block dark:hidden text-slate-600" />
          </button>


          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>


      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200/50 dark:border-slate-900/50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-5 ${
          menuOpen ? "max-h-[350px] opacity-100 pb-5" : "max-h-0 opacity-0 pb-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1 pt-3" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => {
                  setActiveHash(href);
                  setMenuOpen(false);
                }}
                className="block py-2.5 px-4 rounded-xl font-medium text-[14px] text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-900/50 transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}