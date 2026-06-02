"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SkillsAndCertificates from "@/components/sections/SkillsAndCertificates";
import DesignShowcase from "@/components/sections/DesignShowcase";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export type RoleType = "all" | "uxui" | "frontend" | "web";

export default function Page() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("all");
  const { profile, roles, skillCategories, certificates, projects, designItems } = portfolioData;

  return (
    <>
      {/* Navbar with scroll effect and mobile drawer */}
      <Navbar githubUrl={profile.github} authorName={profile.name} />

      <main>
        <Hero 
          profile={profile} 
          roles={roles} 
          selectedRole={selectedRole} 
          setSelectedRole={setSelectedRole} 
        />

        <SkillsAndCertificates 
          skillCategories={skillCategories} 
          selectedRole={selectedRole}
        />

        <DesignShowcase 
          designItems={designItems} 
          selectedRole={selectedRole}
        />

        <Projects 
          projects={projects} 
          selectedRole={selectedRole}
        />

        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} />
      <ScrollToTop />
    </>
  );
}