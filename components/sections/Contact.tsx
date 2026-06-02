// Simple contact info section linking to email and social profiles.

import { Mail, Send } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import type { Profile } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

interface ContactProps {
  profile: Profile;
}

const SOCIAL_LINKS = (profile: Profile) => [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    display: profile.email,
    Icon: Mail,
    external: false,
    primary: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    display: "github.com/SkyBlueFox",
    Icon: FiGithub,
    external: true,
    primary: false,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    display: "linkedin.com/in/supachai-pattanateeradej",
    Icon: FiLinkedin,
    external: true,
    primary: false,
  },
];

export default function Contact({ profile }: ContactProps) {
  const links = SOCIAL_LINKS(profile);

  return (
    <section id="contact" aria-label="Contact" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Contact" />

        <div className="max-w-lg">
          <p className="text-slate-800 dark:text-slate-400 text-base leading-relaxed mb-10">
            I&apos;m actively seeking frontend internship roles. If you&apos;d
            like to discuss an opportunity or just say hello, feel free to reach
            out through any of the channels below.
          </p>


          <ul className="flex flex-col gap-3" role="list">
            {links.map(({ label, href, display, Icon, external, primary }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={`${label}: ${display}`}
                  className={`group flex items-center gap-3.5 px-5 py-4 rounded-xl border transition-all duration-200 cursor-pointer shadow-sm shadow-slate-100/50 dark:shadow-none ${primary
                      ? "border-emerald-300/80 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/30 hover:bg-emerald-100/40 dark:hover:bg-emerald-950/50 hover:border-emerald-400 dark:hover:border-emerald-700/60"
                      : "border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600"
                    }`}
                >
                  <Icon
                    size={16}
                    className={`shrink-0 transition-colors ${primary
                        ? "text-emerald-700 dark:text-emerald-500 group-hover:text-emerald-800 dark:group-hover:text-emerald-400"
                        : "text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200"
                      }`}
                    aria-hidden="true"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-500 tracking-wider uppercase mb-0.5">
                      {label}
                    </p>
                    <p className={`text-sm font-semibold truncate transition-colors ${primary
                        ? "text-emerald-800 dark:text-emerald-300 group-hover:text-emerald-900 dark:group-hover:text-emerald-200"
                        : "text-slate-900 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-slate-100"
                      }`}>
                      {display}
                    </p>
                  </div>
                  <Send
                    size={12}
                    className="shrink-0 text-slate-400 dark:text-slate-700 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}