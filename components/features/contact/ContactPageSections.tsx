"use client";

import { motion } from "framer-motion";
import { Mail, Github, Send } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "raynelmadelo@gmail.com",
    link: "mailto:raynelmadelo@gmail.com",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "raynelM",
    link: "https://github.com/raynelM",
    color: "text-gray-500 dark:text-gray-300",
    bgColor: "bg-gray-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, type: "spring" as const, stiffness: 120 },
  },
};

export function ContactPageSections() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -120 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.55, type: "spring" }}
            className="mb-4 inline-block"
          >
            <Send className="h-14 w-14 text-primary md:h-16 md:w-16" />
          </motion.div>
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-primary to-primary/60 bg-clip-text md:text-5xl">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Let&apos;s connect and work together on amazing projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-xl border border-border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.55 }}
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${item.bgColor}`}
                >
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </motion.div>
                <h3 className="mb-2 text-xl font-semibold">{item.label}</h3>
                <p className="text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.value}
                </p>
                <motion.div
                  className="mt-4 h-1 rounded-full bg-gradient-to-r from-primary to-primary/60"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                />
              </motion.a>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-12 text-center text-muted-foreground"
        >
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </motion.p>
      </div>
    </div>
  );
}
