import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:flex sm:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src="/logo.png"
            alt="EVITRON 2K26 logo"
            className="h-9 w-auto shrink-0 rounded object-contain"
            width={120}
            height={36}
          />
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-wider text-metal-gradient">
              {siteSettings.eventName}
            </span>
            <span className="block truncate text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              ECE × VELOCITY
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link to="/register">Register</Link>
          </Button>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-border/70 px-4 pb-4 pt-2 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-muted-foreground data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2 w-full">
            <Link to="/register" onClick={() => setOpen(false)}>
              Register now
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}