// app/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Home page entry point — a lean Server Component.
// Imports portfolioData once, destructures, and passes typed props.
// Zero business logic or state here; this file is pure composition.
// ─────────────────────────────────────────────────────────────────────────────

import { portfolioData } from "@/lib/data";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SkillsAndCertificates from "@/components/sections/SkillsAndCertificates";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  const { profile, skillCategories, certificates, projects } = portfolioData;

  return (
    <>
      {/* Navbar is "use client" — needs scroll + mobile menu state */}
      <Navbar githubUrl={profile.github} authorName={profile.name} />

      <main>
        <Hero profile={profile} />

        <SkillsAndCertificates
          skillCategories={skillCategories}
          certificates={certificates}
        />

        <Projects projects={projects} />

        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
    </>
  );
}