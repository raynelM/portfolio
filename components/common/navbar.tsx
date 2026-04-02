"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  blogCategories,
  categoryPathToHref,
} from "@/lib/data/blogs";

const mainNav = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 rounded-lg bg-accent"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const blogOpen =
    pathname === "/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/categories/");

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main"
      >
        <Link
          href="/home"
          className="text-xl font-bold text-foreground"
        >
          raynelM
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => (
            <NavLink
              key={item.path}
              href={item.path}
              label={item.name}
              isActive={pathname === item.path}
            />
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`gap-1 rounded-lg px-3 text-sm font-medium ${
                  blogOpen
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Blog
                <ChevronDown className="h-4 w-4 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuLabel>Posts</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/blog">All articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog/archive">Date archive</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>IT categories</DropdownMenuLabel>
              {blogCategories.map((c) => (
                <DropdownMenuItem key={c.slugPath.join("/")} asChild>
                  <Link href={categoryPathToHref(c.slugPath)}>{c.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-2 pl-2 border-l border-border">
            <ModeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === item.path
                    ? "bg-accent text-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Blog
            </p>
            <Link
              href="/blog"
              className="rounded-lg px-3 py-2 text-sm text-foreground"
            >
              All articles
            </Link>
            <Link
              href="/blog/archive"
              className="rounded-lg px-3 py-2 text-sm text-foreground"
            >
              Date archive
            </Link>
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Categories
            </p>
            {blogCategories.map((c) => (
              <Link
                key={c.slugPath.join("/")}
                href={categoryPathToHref(c.slugPath)}
                className="rounded-lg px-3 py-2 text-sm text-foreground"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
