import { BlogArchivePageSections } from "@/components/features/blog/BlogArchivePageSections";
import { blogPosts, postsMatchingArchiveDate } from "@/lib/data/blogs";

type Props = { params: Promise<{ date?: string[] }> };

export default async function BlogArchivePage({ params }: Props) {
  const { date } = await params;
  const posts = postsMatchingArchiveDate(date);
  const archiveYearOptions = Array.from(
    new Set(blogPosts.map((p) => p.publishedAt.slice(0, 4)))
  ).sort((a, b) => b.localeCompare(a));

  let filterDescription =
    "Showing every article, sorted newest first. Use the buttons to narrow by year.";
  if (date?.length === 1) {
    filterDescription = `Posts published in ${date[0]}.`;
  }
  if (date?.length === 2) {
    const [y, m] = date;
    filterDescription = `Posts published in ${y}-${m.padStart(2, "0")}.`;
  }

  return (
    <BlogArchivePageSections
      posts={posts}
      filterDescription={filterDescription}
      dateParts={date}
      archiveYearOptions={archiveYearOptions}
    />
  );
}
