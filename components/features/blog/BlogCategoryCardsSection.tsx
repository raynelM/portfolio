"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  blogCategories,
  categoryPathToHref,
} from "@/lib/data/blogs";

export function BlogCategoryCardsSection() {
  return (
    <section className="mb-14" aria-labelledby="blog-categories-heading">
      <h2
        id="blog-categories-heading"
        className="mb-6 text-2xl font-semibold tracking-tight"
      >
        Browse by IT field
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogCategories.map((cat, i) => (
          <motion.div
            key={cat.slugPath.join("/")}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
          >
            <Link
              href={categoryPathToHref(cat.slugPath)}
              className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
            >
              <Card className="h-full border-border/80 transition-all group-hover:border-primary/40 group-hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-lg">
                    {cat.title}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </CardTitle>
                  <CardDescription>{cat.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
