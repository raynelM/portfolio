"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/data/blogs";
import {
  categoryLabelForPath,
  categoryPathToHref,
} from "@/lib/data/blogs";

type Props = { posts: BlogPost[] };

export function BlogPostCardsSection({ posts }: Props) {
  return (
    <section aria-labelledby="recent-posts-heading">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="recent-posts-heading"
          className="text-2xl font-semibold tracking-tight"
        >
          Recent articles
        </h2>
        <Button variant="link" className="h-auto p-0 text-primary" asChild>
          <Link href="/blog/archive">Filter by date →</Link>
        </Button>
      </div>
      <ul className="grid list-none gap-6 p-0 sm:grid-cols-2">
        {posts.map((post, i) => (
          <motion.li
            key={post.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <Card className="flex h-full flex-col border-border/80">
              <CardHeader>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Link
                    href={categoryPathToHref(post.categoryPath)}
                    className={cn(
                      badgeVariants({ variant: "outline" }),
                      "transition-colors hover:bg-accent"
                    )}
                  >
                    {categoryLabelForPath(post.categoryPath)}
                  </Link>
                  <time
                    dateTime={post.publishedAt}
                    className="text-xs text-muted-foreground"
                  >
                    {post.publishedAt}
                  </time>
                </div>
                <CardTitle className="text-xl leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1" />
              <CardFooter>
                <Button variant="secondary" size="sm" asChild>
                  <Link href={`/blog/${post.slug}`}>Read article</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
