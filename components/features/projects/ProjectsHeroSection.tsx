"use client";

import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

export function ProjectsHeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <div className="mb-4 inline-block">
        <FolderKanban className="mx-auto h-14 w-14 text-primary md:h-16 md:w-16" />
      </div>
      <h1 className="mb-3 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text md:text-5xl">
        Projects
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Selected builds and coursework prototypes—dummy entries for layout and
        navigation practice.
      </p>
    </motion.div>
  );
}
