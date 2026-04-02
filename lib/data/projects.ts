export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
};

/** Dummy portfolio projects — intentionally no category field. */
export const projects: Project[] = [
  {
    id: "p1",
    title: "StudyFlow Planner",
    description:
      "A semester planner with drag-and-drop tasks, deadlines, and export to calendar.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    id: "p2",
    title: "Campus Lost & Found",
    description:
      "Photo listings with moderated submissions and email notifications for matches.",
    stack: ["React", "Express", "PostgreSQL"],
    href: "#",
  },
  {
    id: "p3",
    title: "API Health Dashboard",
    description:
      "Latency charts and uptime checks for student-built microservices in one view.",
    stack: ["Next.js", "Chart.js", "REST"],
    href: "#",
  },
  {
    id: "p4",
    title: "Secure File Drop",
    description:
      "Time-limited upload links with virus scanning hooks and size quotas.",
    stack: ["Node.js", "AWS S3", "ClamAV"],
    href: "#",
  },
  {
    id: "p5",
    title: "IT Helpdesk Lite",
    description:
      "Ticket intake, priority labels, and a simple knowledge base for lab assistants.",
    stack: ["Next.js", "Prisma", "SQLite"],
    href: "#",
  },
  {
    id: "p6",
    title: "Inventory RFID Bridge",
    description:
      "Reads scanner events, normalizes SKUs, and syncs counts to a spreadsheet export.",
    stack: ["Python", "FastAPI", "Redis"],
    href: "#",
  },
];
