// Grid layout for certificates and courses.

import { Award, ExternalLink } from "lucide-react";
import type { Certificate } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section id="certificates" aria-label="Certificates" className="py-24 px-5 sm:px-8 bg-slate-950/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Certificates" />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          role="list"
          aria-label="Certificates grid"
        >
          {certificates.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50/50 dark:hover:bg-slate-900/60 transition-all duration-200 cursor-pointer shadow-sm shadow-slate-100/50 dark:shadow-none"
                aria-label={`${cert.title} from ${cert.issuer} (${cert.year})`}
              >

                <div className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Award size={14} className="text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                </div>


                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {cert.title}
                  </p>
                  <p className="font-mono-custom text-xs text-slate-600 dark:text-slate-500 mt-1">
                    {cert.issuer} · {cert.year}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 mt-2 font-medium group-hover:underline">
                    View Credential
                    <ExternalLink size={10} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
