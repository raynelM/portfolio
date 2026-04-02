import { notFound } from "next/navigation";

import { CategoryBrowseSection } from "@/components/features/blog/CategoryBrowseSection";
import {
  getCategoryBySlugSegments,
  postsMatchingCategoryPath,
} from "@/lib/data/blogs";

type Props = { params: Promise<{ slug: string[] }> };

export async function generateStaticParams() {
  const { blogCategories } = await import("@/lib/data/blogs");
  return blogCategories.map((c) => ({ slug: c.slugPath }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const meta = getCategoryBySlugSegments(slug);
  const title = meta?.title ?? slug.join(" / ");
  return { title: `${title} | Categories` };
}

export default async function CategoryCatchAllPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) notFound();

  const posts = postsMatchingCategoryPath(slug);
  const meta = getCategoryBySlugSegments(slug);

  const title =
    meta?.title ??
    slug.map((s) => decodeURIComponent(s)).join(" / ");
  const description =
    meta?.description ??
    "Posts filed under this category path.";

  return (
    <CategoryBrowseSection
      title={title}
      description={description}
      pathLabel={slug.map((s) => encodeURIComponent(s)).join("/")}
      posts={posts}
    />
  );
}
