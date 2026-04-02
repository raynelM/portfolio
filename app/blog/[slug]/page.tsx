import { notFound } from "next/navigation";

import { BlogPostDetailSection } from "@/components/features/blog/BlogPostDetailSection";
import { blogPosts, getPostBySlug } from "@/lib/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} | Blog` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostDetailSection post={post} />;
}
