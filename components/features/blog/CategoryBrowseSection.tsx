"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/data/blogs";

type Props = {
  title: string;
  description: string;
  pathLabel: string;
  posts: BlogPost[];
};

export function CategoryBrowseSection({
  title,
  description,
  pathLabel,
  posts,
}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Layers className="h-8 w-8" />
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Category
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              {description}
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Path: /categories/{pathLabel}
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/blog">All articles</Link>
          </Button>
        </motion.div>

        {posts.length === 0 ? (
          <p className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
            No posts in this category yet.
          </p>
        ) : (
          <ul className="grid list-none gap-6 p-0 sm:grid-cols-2">
            {posts.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-muted-foreground"
                    >
                      {post.publishedAt}
                    </time>
                  </CardFooter>
                </Card>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
