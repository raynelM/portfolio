"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

import ResumeModal from "@/components/common/ResumeModal";

export function HomeHeroSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, type: "spring" }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: 3 }}
                transition={{ type: "spring", stiffness: 320 }}
                className="relative h-64 w-64 overflow-hidden rounded-full shadow-2xl ring-4 ring-primary/20 md:h-80 md:w-80"
              >
                <Image
                  src="/profile.jpg"
                  alt="Raynel profile photo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 16rem, 20rem"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -right-2 -bottom-2 h-24 w-24 rounded-full bg-primary opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.28, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="flex max-w-xl flex-col items-center space-y-6 text-center md:items-start md:text-left"
            >
              <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary/60 bg-clip-text md:text-6xl">
                Hello, I&apos;m Raynel
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                BSIT 3rd Year Student | Web Developer
              </p>
              <p className="text-lg text-muted-foreground">
                Passionate about creating beautiful and functional web
                applications using modern technologies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open("/madelo_resume.pdf", "_blank")}
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                >
                  <FileText className="h-5 w-5" />
                  View Resume
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsResumeOpen(true)}
                  className="rounded-lg border border-border bg-card px-6 py-3 font-semibold shadow-sm transition-colors hover:bg-accent"
                >
                  Quick preview
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}
