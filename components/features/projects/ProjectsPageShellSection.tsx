"use client";

import { ProjectsGridSection } from "@/components/features/projects/ProjectsGridSection";
import { ProjectsHeroSection } from "@/components/features/projects/ProjectsHeroSection";

export function ProjectsPageShellSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ProjectsHeroSection />
        <ProjectsGridSection />
      </div>
    </div>
  );
}
