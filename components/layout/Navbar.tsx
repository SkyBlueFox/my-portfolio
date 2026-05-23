// components/layout/Navbar.tsx
// ─────────────────────────────────────────────────────────────────────────────
// "use client" — needs useState + useEffect for:
//   1. Scroll-triggered frosted background
//   2. Mobile hamburger menu open/close
//   3. Dark/Light mode toggle placeholder
// ─────────────────────────────────────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills & Certificates", href: "#skills" },
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

  // ── Scroll: frost navbar + update active link ──────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  const initials = authorName
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 shadow-lg shadow-slate-200/20 dark:shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <nav
        className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#about"
          aria-label="Back to top"
          className="font-mono-custom text-sm font-medium text-emerald-500 dark:text-emerald-400 tracking-[0.2em] hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
        >
          {initials}
          <span className="cursor-blink text-slate-400 dark:text-slate-600">_</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeHash === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`font-mono-custom text-xs uppercase tracking-widest transition-colors ${isActive
                      ? "text-emerald-500 dark:text-emerald-400"
                      : "text-slate-500 hover:text-slate-850 dark:hover:text-slate-200"
                    }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-1.5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all"
          >
            <FiGithub size={16} />
          </a>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all cursor-pointer"
          >
            {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 transition-all cursor-pointer"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 px-5 pb-5">
          <ul className="flex flex-col gap-1 pt-3" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleNavClick}
                  className="block py-2.5 px-3 rounded-lg font-mono-custom text-xs uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}