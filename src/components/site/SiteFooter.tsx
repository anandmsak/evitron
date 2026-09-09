import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

import { siteSettings } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="font-display text-lg font-bold tracking-wider text-metal-gradient">
            {siteSettings.eventName}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{siteSettings.tagline}</p>
          <p className="mt-4 text-sm text-foreground/80">{siteSettings.college}</p>
          <p className="text-sm text-muted-foreground">{siteSettings.department}</p>
          <p className="text-sm text-muted-foreground">{siteSettings.association}</p>
          <p className="mt-3 inline-flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            {siteSettings.address}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/events" className="hover:text-foreground">
                All events
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-foreground">
                Register
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-foreground">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Reach us</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${siteSettings.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="size-4 shrink-0" />
                {siteSettings.email}
              </a>
            </li>
            <li>
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Instagram className="size-4 shrink-0" />
                {siteSettings.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 text-center">
          <p className="font-display text-sm tracking-[0.3em] text-metal-gradient">{siteSettings.motto}</p>
          <p className="text-xs text-muted-foreground">{siteSettings.mottoSub}</p>
        </div>
      </div>
    </footer>
  );
}
