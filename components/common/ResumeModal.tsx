"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeContent = `
    RAYNEL MADELO
    BSIT 3rd Year Student | Web Developer
    
    CONTACT INFORMATION
    Email: raynelmadelo@gmail.com
    GitHub: raynelM
    
    EDUCATION
    Bachelor of Science in Information Technology (BSIT)
    Currently in 3rd Year
    
    SKILLS
    • HTML - Proficient in creating semantic and accessible web structures
    • CSS - Skilled in styling, layouts, and responsive design
    • JavaScript - Strong understanding of ES6+ and modern JavaScript
    • React - Experience building interactive user interfaces
    • Next.js - Knowledgeable in server-side rendering and React framework
    • Express.js - Capable of building RESTful APIs and backend services
    
    TECHNICAL SKILLS
    Frontend Development: HTML, CSS, JavaScript, React, Next.js
    Backend Development: Express.js, Node.js
    Version Control: Git, GitHub
    
    PROJECTS
    • Portfolio Website - Built with Next.js and React
    • Study apps and dashboards - Practice projects for coursework
    
    ABOUT
    Passionate about web development and creating innovative digital solutions.
    Always eager to learn new technologies and apply them to build real-world
    applications that make a difference.
  `;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-lg bg-card shadow-2xl md:inset-8 lg:inset-16"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-xl font-semibold">My Resume</h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-2 transition-colors hover:bg-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-8">
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground">
                {resumeContent}
              </pre>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
