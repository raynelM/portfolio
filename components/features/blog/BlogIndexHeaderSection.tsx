"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export function BlogIndexHeaderSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10 text-center md:mb-14"
    >
      <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary md:h-14 md:w-14" />
      <h1 className="mb-3 text-4xl font-bold tracking-tight text-transparent bg-gradient-to-r from-primary to-primary/70 bg-clip-text md:text-5xl">
        Blog
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        Short notes across IT topics—web, cloud, security, data, and more. Use
        categories in the navbar or the cards below.
      </p>
    </motion.div>
  );
}
