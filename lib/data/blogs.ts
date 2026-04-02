export type BlogCategory = {
  /** URL segments under /categories/ — no leading “categories” in app logic */
  slugPath: string[];
  title: string;
  description: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  categoryPath: string[];
  content: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slugPath: ["web-development"],
    title: "Web Development",
    description: "Frontend frameworks, accessibility, and modern UI patterns.",
  },
  {
    slugPath: ["cloud-computing"],
    title: "Cloud Computing",
    description: "Scalable infrastructure, platforms, and managed services.",
  },
  {
    slugPath: ["cybersecurity"],
    title: "Cybersecurity",
    description: "Threat modeling, secure design, and defensive practices.",
  },
  {
    slugPath: ["data-science"],
    title: "Data Science & Analytics",
    description: "Datasets, visualization, and insight-driven decisions.",
  },
  {
    slugPath: ["networking"],
    title: "Networking",
    description: "Protocols, routing, and reliable connectivity.",
  },
  {
    slugPath: ["devops"],
    title: "DevOps",
    description: "CI/CD, automation, and observable systems.",
  },
  {
    slugPath: ["software-engineering"],
    title: "Software Engineering",
    description: "Architecture, quality, and maintainable codebases.",
  },
  {
    slugPath: ["cloud-computing", "aws"],
    title: "AWS (nested path demo)",
    description: "Catch-all example: posts under cloud-computing/aws.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "react-server-components-primer",
    title: "React Server Components: A Primer for Web Developers",
    excerpt:
      "Why moving work to the server can shrink bundles and speed up first paint.",
    publishedAt: "2026-01-15",
    categoryPath: ["web-development"],
    content: `Server Components let you fetch and render on the server without shipping large client trees. Pair them with client islands for interactivity where it matters.

**Takeaways**
- Keep data access close to the source of truth.
- Use client components for hooks and browser APIs.
- Measure with real devices, not just desktop Lighthouse runs.`,
  },
  {
    slug: "css-container-queries",
    title: "Container Queries in Production CSS",
    excerpt:
      "Styling components based on their container—not only the viewport.",
    publishedAt: "2026-02-02",
    categoryPath: ["web-development"],
    content: `Container queries shift responsive design from page-level breakpoints to component-level constraints. That means cards and sidebars can adapt independently.

Start by defining a container with \`container-type: inline-size\`, then use \`@container\` rules. Fallbacks still matter for older browsers if you support them.`,
  },
  {
    slug: "kubernetes-basics-student-notes",
    title: "Kubernetes Basics: Pods, Services, and Deployments",
    excerpt:
      "A concise map of core objects when learning cloud-native orchestration.",
    publishedAt: "2026-01-22",
    categoryPath: ["cloud-computing"],
    content: `Kubernetes schedules containers across a cluster. **Pods** are the smallest deployable units. **Services** provide stable networking. **Deployments** manage rollouts and replica counts.

For learning, minikube or kind on a laptop is enough to practice manifests and \`kubectl\` workflows.`,
  },
  {
    slug: "zero-trust-overview",
    title: "Zero Trust: Less Perimeter, More Verification",
    excerpt:
      "Why “trust but verify” became “never trust, always verify” in IT.",
    publishedAt: "2026-03-01",
    categoryPath: ["cybersecurity"],
    content: `Zero Trust assumes breach: every request is authenticated and authorized with least privilege. Micro-segmentation and strong identity (MFA, device posture) reduce blast radius.

It is a model, not a single product—map controls to your actual data flows.`,
  },
  {
    slug: "sql-for-analysts",
    title: "SQL Patterns That Survive Real Dashboards",
    excerpt:
      "CTEs, window functions, and sane joins for analytics workloads.",
    publishedAt: "2026-02-18",
    categoryPath: ["data-science"],
    content: `Readable SQL ages better than clever SQL. Prefer **CTEs** to name intermediate steps. Use **window functions** for rankings and running totals without self-join explosion.

Validate with row counts and spot checks before publishing a metric.`,
  },
  {
    slug: "tcp-vs-udp-study-guide",
    title: "TCP vs UDP: When Reliability Beats Speed",
    excerpt:
      "A networking study guide for exams and interviews.",
    publishedAt: "2026-01-08",
    categoryPath: ["networking"],
    content: `TCP provides ordered delivery, retransmissions, and flow control—great for HTTP and file transfer. UDP is fire-and-forget—common for real-time media where late packets are useless.

Know the handshake, congestion basics, and where each fits.`,
  },
  {
    slug: "github-actions-cache",
    title: "Faster CI with Caching in GitHub Actions",
    excerpt:
      "Cut pipeline time using dependency and build caches responsibly.",
    publishedAt: "2026-03-10",
    categoryPath: ["devops"],
    content: `Cache keys should include lockfiles and OS images. Invalidate when dependencies change. Watch cache size—huge caches can slow uploads more than they save.

Pair caching with parallel jobs and smaller test slices.`,
  },
  {
    slug: "solid-principles-refresher",
    title: "SOLID in TypeScript Services",
    excerpt:
      "A practical refresher on maintainable modules in app code.",
    publishedAt: "2026-02-27",
    categoryPath: ["software-engineering"],
    content: `SOLID is not dogma—it is friction reduction. **Single Responsibility** keeps modules easy to test. **Dependency Inversion** lets you swap implementations (e.g. email vs SMS).

Apply where complexity actually lives; avoid interfaces for one-liners.`,
  },
  {
    slug: "aws-iam-least-privilege",
    title: "IAM Least Privilege on AWS",
    excerpt:
      "Scoped policies and roles under the cloud-computing/aws path.",
    publishedAt: "2026-03-20",
    categoryPath: ["cloud-computing", "aws"],
    content: `Start from deny-by-default service control policies where appropriate, then grant narrow actions on specific resources. Use **roles** for workloads, not long-lived keys.

Review access quarterly; stale permissions are a common breach path.`,
  },
];

export function categoryPathToHref(path: string[]): string {
  return `/categories/${path.map(encodeURIComponent).join("/")}`;
}

export function categoryLabelForPath(path: string[]): string {
  const key = path.join("/");
  const found = blogCategories.find((c) => c.slugPath.join("/") === key);
  return found?.title ?? path.join(" / ");
}

export function getCategoryBySlugSegments(
  slugSegments: string[]
): BlogCategory | undefined {
  const key = slugSegments.join("/");
  return blogCategories.find((c) => c.slugPath.join("/") === key);
}

export function postsMatchingCategoryPath(slugSegments: string[]): BlogPost[] {
  const key = slugSegments.join("/");
  return blogPosts.filter((p) => p.categoryPath.join("/") === key);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function parsePostDate(iso: string): Date {
  return new Date(iso + "T12:00:00");
}

export function postsMatchingArchiveDate(
  dateParts: string[] | undefined
): BlogPost[] {
  if (!dateParts || dateParts.length === 0) {
    return [...blogPosts].sort(
      (a, b) => parsePostDate(b.publishedAt).getTime() - parsePostDate(a.publishedAt).getTime()
    );
  }
  const [y, m] = dateParts;
  const year = parseInt(y, 10);
  if (Number.isNaN(year)) return [];
  return blogPosts.filter((p) => {
    const d = parsePostDate(p.publishedAt);
    if (d.getFullYear() !== year) return false;
    if (m !== undefined) {
      const month = parseInt(m, 10);
      if (Number.isNaN(month)) return false;
      return d.getMonth() + 1 === month;
    }
    return true;
  });
}
