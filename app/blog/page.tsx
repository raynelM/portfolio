import { BlogIndexPageSections } from "@/components/features/blog/BlogIndexPageSections";
import { blogPosts, parsePostDate } from "@/lib/data/blogs";

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) =>
      parsePostDate(b.publishedAt).getTime() -
      parsePostDate(a.publishedAt).getTime()
  );

  return <BlogIndexPageSections posts={posts} />;
}
