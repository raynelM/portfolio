"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data/projects";

export function ProjectsGridSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
        >
          <Card className="flex h-full flex-col border-border/80 transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.href}>
                  View details
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
