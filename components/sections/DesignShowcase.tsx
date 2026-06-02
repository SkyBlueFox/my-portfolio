// Showcase of UI/UX designs and wireframes.

import { ExternalLink, LayoutGrid, Layers, GitCommit } from "lucide-react";
import type { DesignItem } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const FigmaIcon = ({ size = 12 }: { size?: number }) => (
  <svg
    width={size}
    height={size * 1.5}
    viewBox="0 0 38 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M19 0V19C19 24.242 14.758 28.5 9.5 28.5C4.242 28.5 0 24.242 0 19C0 13.758 4.242 9.5 9.5 9.5H19V0Z"
      fill="#F24E1E"
    />
    <path
      d="M19 0H28.5C33.758 0 38 4.242 38 9.5C38 14.758 33.758 19 28.5 19H19V0Z"
      fill="#FF7262"
    />
    <path
      d="M19 19H28.5C33.758 19 38 23.242 38 28.5C38 33.758 33.758 38 28.5 38C23.242 38 19 33.758 19 28.5V19Z"
      fill="#A259FF"
    />
    <path
      d="M9.5 19H19V38H9.5C4.242 38 0 33.758 0 28.5C0 23.242 4.242 19 9.5 19Z"
      fill="#1ABCFE"
    />
    <path
      d="M0 47.5C0 42.242 4.242 38 9.5 38H19V47.5C19 52.758 14.758 57 9.5 57C4.242 57 0 52.758 0 47.5Z"
      fill="#0ACF83"
    />
  </svg>
);

interface DesignShowcaseProps {
  designItems: DesignItem[];
  selectedRole: "all" | "uxui" | "frontend" | "web";
}

const getDesignRelevance = (title: string): string[] => {
  if (title.includes("Jorney")) return ["uxui", "frontend"];
  if (title.includes("HomeBase")) return ["uxui", "web"];
  if (title.includes("Art Toy")) return ["uxui", "web"];
  return ["uxui", "frontend", "web"];
};

export default function DesignShowcase({ designItems, selectedRole }: DesignShowcaseProps) {
  return (
    <section id="design" aria-label="Design Showcase" className="py-24 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Design Showcase" />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Design projects"
        >
          {designItems.map((item, idx) => {
            const isFeatured = idx === 0;
            const isFullWidth = idx === 2;

            const gridSpan = isFeatured
              ? "sm:col-span-2 lg:col-span-2"
              : isFullWidth
              ? "sm:col-span-2 lg:col-span-3"
              : "sm:col-span-1 lg:col-span-1";

            const relevance = getDesignRelevance(item.title);
            const isRelevant = selectedRole === "all" || relevance.includes(selectedRole);

            return (
              <li 
                key={item.title} 
                className={`${gridSpan} transition-all duration-300 ${
                  isRelevant 
                    ? "opacity-100 scale-100 blur-none" 
                    : "opacity-30 scale-[0.98] blur-[0.4px] hover:opacity-100 hover:scale-100 hover:blur-none"
                }`}
              >
                <div className={`group relative flex rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 hover:border-slate-400 dark:hover:border-slate-600 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 ease-out p-5 h-full shadow-sm shadow-slate-100/50 dark:shadow-none ${
                  isFullWidth ? "flex-col lg:flex-row gap-6 items-center" : "flex-col"
                }`}>

                  <div className={`relative rounded-xl bg-slate-200/70 dark:bg-slate-950/70 border border-slate-300/40 dark:border-slate-800/40 overflow-hidden flex items-center justify-center group-hover:border-emerald-500/30 transition-colors shrink-0 ${
                    isFullWidth
                      ? "w-full md:w-[35%] aspect-video"
                      : "w-full aspect-video mb-4"
                  }`}>
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full relative overflow-hidden select-none bg-slate-950/20 dark:bg-slate-950/60 flex flex-col justify-between p-3.5">
                        {item.type === "Mockup" && (
                          <div className="w-full h-full flex flex-col justify-between">
                            <div className="flex items-center justify-between border-b border-slate-300/20 dark:border-slate-800/60 pb-1.5">
                              <span className="text-[8px] font-mono-custom text-emerald-600 dark:text-emerald-500/80 font-semibold">9:41</span>
                              <div className="flex gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                              </div>
                            </div>
                            <div className="flex-1 flex items-end gap-3 justify-center py-2.5">
                              <div className="w-3 bg-gradient-to-t from-emerald-600/30 to-emerald-400/80 rounded-t-sm h-[60%] animate-pulse" />
                              <div className="w-3 bg-gradient-to-t from-emerald-600/30 to-emerald-400/80 rounded-t-sm h-[35%]" />
                              <div className="w-3 bg-gradient-to-t from-emerald-600/30 to-emerald-400/80 rounded-t-sm h-[80%] animate-pulse" style={{ animationDelay: "150ms" }} />
                              <div className="w-3 bg-gradient-to-t from-emerald-600/30 to-emerald-400/80 rounded-t-sm h-[50%]" />
                            </div>
                            <div className="flex items-center justify-between border-t border-slate-300/20 dark:border-slate-800/60 pt-1.5">
                              <span className="text-[7px] font-mono-custom text-slate-400 dark:text-slate-500 uppercase tracking-widest">ECO MONITOR</span>
                              <span className="text-[8px] font-semibold text-emerald-600 dark:text-emerald-400">84%</span>
                            </div>
                          </div>
                        )}

                        {item.type === "Wireframe" && (
                          <div className="w-full h-full flex flex-col justify-between border border-dashed border-slate-300 dark:border-slate-800 rounded-lg p-2.5 bg-slate-100/30 dark:bg-slate-950/40">
                            <div className="flex items-center gap-1.5">
                              <LayoutGrid size={10} className="text-slate-400 dark:text-slate-600" />
                              <span className="text-[7px] font-mono-custom text-slate-450 dark:text-slate-600 uppercase tracking-wider">wireframe_grid_v2</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 flex-1 my-2">
                              <div className="border border-slate-300 dark:border-slate-800 border-dashed rounded flex flex-col justify-center items-center relative overflow-hidden bg-slate-200/20 dark:bg-slate-900/20">
                                <span className="text-[6px] font-mono-custom text-slate-400 dark:text-slate-700">W-1</span>
                              </div>
                              <div className="border border-slate-300 dark:border-slate-800 border-dashed rounded flex flex-col justify-center items-center relative overflow-hidden bg-slate-200/20 dark:bg-slate-900/20 col-span-2">
                                <span className="text-[6px] font-mono-custom text-slate-400 dark:text-slate-700">CONSOLE_PANEL</span>
                              </div>
                            </div>
                            <div className="h-1.5 w-12 bg-slate-300 dark:bg-slate-800 rounded-sm" />
                          </div>
                        )}

                        {item.type === "User Flow" && (
                          <div className="w-full h-full flex items-center justify-center p-2 bg-slate-100/30 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800/80 rounded-lg">
                            <div className="flex items-center gap-1.5">
                              <div className="px-2 py-1 rounded bg-sky-500/5 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/25 flex flex-col items-center">
                                <span className="text-[7px] font-semibold text-sky-700 dark:text-sky-400 uppercase">Start</span>
                              </div>
                              <span className="text-slate-300 dark:text-slate-700 text-[8px] font-bold">→</span>
                              <div className="px-2 py-1 rounded bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 flex flex-col items-center">
                                <span className="text-[7px] font-semibold text-emerald-700 dark:text-emerald-400 uppercase">Onboard</span>
                              </div>
                              <span className="text-slate-300 dark:text-slate-700 text-[8px] font-bold">→</span>
                              <div className="px-2 py-1 rounded bg-teal-500/5 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/25 flex flex-col items-center">
                                <span className="text-[7px] font-semibold text-teal-700 dark:text-teal-400 uppercase">Success</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-mono-custom font-semibold tracking-wider bg-slate-900/80 text-emerald-400 dark:bg-slate-950/80 uppercase">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex-1 w-full flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 dark:border-slate-800/80">
                      <a
                        href={item.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer"
                        aria-label={item.figmaUrl?.includes("behance.net") ? `View ${item.title} Behance case study` : `View ${item.title} Figma file`}
                      >
                        {item.figmaUrl?.includes("behance.net") ? (
                          <span className="font-bold font-mono-custom text-[10px] bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-950 px-1 py-0.5 rounded mr-0.5 select-none shrink-0 scale-95 leading-none">Bē</span>
                        ) : (
                          <FigmaIcon size={10} />
                        )}
                        {item.figmaUrl?.includes("behance.net") ? "View Behance Case Study" : "View Figma File"}
                      </a>
                      <ExternalLink size={10} className="text-slate-400 dark:text-slate-700" />
                    </div>
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
