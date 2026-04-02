"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarRange } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/data/blogs";
import { categoryLabelForPath, categoryPathToHref } from "@/lib/data/blogs";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  posts: BlogPost[];
  filterDescription: string;
  dateParts: string[] | undefined;
  /** All years that exist in the blog (for quick filters regardless of current filter). */
  archiveYearOptions: string[];
};

export function BlogArchivePageSections({
  posts,
  filterDescription,
  dateParts,
  archiveYearOptions,
}: Props) {
  const years = archiveYearOptions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <CalendarRange className="mb-4 h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Blog archive
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {filterDescription}
          </p>
          {dateParts && dateParts.length > 0 && (
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Scoped segments: {dateParts.join(" / ")}
            </p>
          )}
        </motion.div>

        <section
          className="mb-12 rounded-xl border border-border bg-card/40 p-4 md:p-6"
          aria-label="Quick date filters"
        >
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Jump to year
          </h2>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="secondary" asChild>
              <Link href="/blog/archive">All dates</Link>
            </Button>
            {years.map((y) => (
              <Button key={y} size="sm" variant="outline" asChild>
                <Link href={`/blog/archive/${y}`}>{y}</Link>
              </Button>
            ))}
          </div>
        </section>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No posts match this date filter.
          </p>
        ) : (
          <ul className="grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Card className="h-full border-border/80">
                  <CardHeader>
                    <div className="mb-2 flex flex-wrap gap-2">
                      <Link
                        href={categoryPathToHref(post.categoryPath)}
                        className={cn(
                          badgeVariants({ variant: "outline" }),
                          "text-xs"
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
                    <CardTitle className="text-lg leading-snug">
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
                    <Button variant="link" className="h-auto p-0" asChild>
                      <Link href={`/blog/${post.slug}`}>Read →</Link>
                    </Button>
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
