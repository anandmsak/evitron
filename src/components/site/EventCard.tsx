import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Users, Clock } from "lucide-react";

import { categoryMeta, type SymposiumEvent } from "@/data/events";
import { Badge } from "@/components/ui/badge";

export function EventCard({ event }: { event: SymposiumEvent }) {
  return (
    <Link
      to="/events/$slug"
      params={{ slug: event.slug }}
      className="panel group flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:glow-ring"
    >
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-bold tracking-wide text-metal-gradient">
            {event.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{event.subtitle}</p>
        </div>
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <p className="text-sm text-foreground/80">{event.tagline}</p>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
        <Badge variant="outline" className="border-primary/40 text-primary">
          {categoryMeta[event.category].label}
        </Badge>
        <span className="inline-flex items-center gap-1">
          <Users className="size-3.5 shrink-0" />
          {event.teamSize.min === event.teamSize.max
            ? `${event.teamSize.max} member`
            : `${event.teamSize.min}-${event.teamSize.max} members`}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3.5 shrink-0" />
          {event.duration}
        </span>
      </div>
    </Link>
  );
}
