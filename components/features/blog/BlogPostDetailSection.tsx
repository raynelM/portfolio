"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/data/blogs";
import {
  categoryLabelForPath,
  categoryPathToHref,
} from "@/lib/data/blogs";

type Props = { post: BlogPost };

export function BlogPostDetailSection({ post }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Button>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <Link
              href={categoryPathToHref(post.categoryPath)}
              className={cn(badgeVariants({ variant: "secondary" }))}
            >
              {categoryLabelForPath(post.categoryPath)}
            </Link>
            <time
              dateTime={post.publishedAt}
              className="text-sm text-muted-foreground"
            >
              {post.publishedAt}
            </time>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {post.title}
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="rounded-xl border border-border bg-card/50 p-6 shadow-sm md:p-8">
            <div className="whitespace-pre-wrap text-base leading-relaxed text-foreground/90">
              {post.content}
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
