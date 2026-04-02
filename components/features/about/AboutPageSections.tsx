"use client";

import { motion } from "framer-motion";
import { Code, GraduationCap, Sparkles } from "lucide-react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "Express.js", level: 65 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export function AboutPageSections() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <GraduationCap className="mx-auto mb-4 h-14 w-14 text-primary md:h-16 md:w-16" />
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary/60 bg-clip-text md:text-5xl">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            Get to know more about my journey and skills
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border bg-card p-6 shadow-lg"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.55 }}
                className="rounded-lg bg-primary/10 p-3"
              >
                <Sparkles className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h2 className="mb-3 text-2xl font-semibold">Who I Am</h2>
                <p className="leading-relaxed text-muted-foreground">
                  I&apos;m a <strong>BSIT 3rd Year Student</strong> passionate
                  about web development and creating innovative digital
                  solutions. I love learning new technologies and applying them
                  to build real-world applications that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border bg-card p-6 shadow-lg"
          >
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.55 }}
                className="rounded-lg bg-primary/10 p-3"
              >
                <Code className="h-6 w-6 text-primary" />
              </motion.div>
              <div className="flex-1">
                <h2 className="mb-6 text-2xl font-semibold">My Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.06 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 0.9,
                            delay: index * 0.06 + 0.2,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-xl border border-border bg-card p-6 shadow-lg"
          >
            <h2 className="mb-4 text-2xl font-semibold">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "Express.js"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.28,
                      delay: index * 0.05,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="rounded-lg bg-primary/10 px-4 py-2 font-medium text-primary"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
