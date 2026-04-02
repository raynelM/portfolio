"use client";

import { BlogCategoryCardsSection } from "@/components/features/blog/BlogCategoryCardsSection";
import { BlogIndexHeaderSection } from "@/components/features/blog/BlogIndexHeaderSection";
import { BlogPostCardsSection } from "@/components/features/blog/BlogPostCardsSection";
import type { BlogPost } from "@/lib/data/blogs";

type Props = { posts: BlogPost[] };

export function BlogIndexPageSections({ posts }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-16">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <BlogIndexHeaderSection />
        <BlogCategoryCardsSection />
        <BlogPostCardsSection posts={posts} />
      </div>
    </div>
  );
}
