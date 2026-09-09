// src/routes/events.$slug.tsx
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarClock, MapPin, Phone, Trophy, Users } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryMeta } from "@/data/events";
import type { Coordinator } from "@/data/site";
import { appDataStore, useAppData } from "@/services/appDataStore";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = appDataStore.getEventBySlug(params.slug);
    if (!event) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Event not found — EVITRON 2K26" }, { name: "robots", content: "noindex" }],
      };
    }
    const event = appDataStore.getEventBySlug(loaderData.slug);
    if (!event) {
      return {
        meta: [{ title: "Event not found — EVITRON 2K26" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${event.title} — ${event.subtitle} | EVITRON 2K26`;
    return {
      meta: [
        { title },
        { name: "description", content: event.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: event.tagline },
      ],
    };
  },
  notFoundComponent: EventNotFound,
  component: EventDetail,
});

function EventNotFound() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-metal-gradient">Event not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This event is not part of EVITRON 2K26, or the link has changed.
        </p>
        <Button asChild className="mt-6">
          <Link to="/events">Back to all events</Link>
        </Button>
      </div>
    </SiteLayout>
  );
}

function EventDetail() {
  const { slug } = Route.useLoaderData();
  const { events, coordinators } = useAppData();
  const event = events.find((e) => e.slug === slug);

  if (!event) return <EventNotFound />;

  const coords = event.coordinatorIds
    .map((id) => coordinators.find((c) => c.id === id))
    .filter(Boolean) as Coordinator[];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
        <div className="absolute inset-0 hero-aura opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <Link to="/events" className="text-xs uppercase tracking-[0.2em] text-primary hover:underline">
            ← All events
          </Link>
          <Badge variant="outline" className="ml-3 border-primary/40 text-primary">
            {categoryMeta[event.category].label}
          </Badge>
          <h1 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            <span className="text-metal-gradient">{event.title}</span>
          </h1>
          <p className="mt-2 text-base text-foreground/85">{event.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">{event.description}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="panel inline-flex items-center gap-2 px-4 py-2">
              <Users className="size-4 shrink-0 text-primary" />
              {event.teamSize.min === event.teamSize.max
                ? `${event.teamSize.max} participant`
                : `${event.teamSize.min}–${event.teamSize.max} members`}
            </span>
            <span className="panel inline-flex items-center gap-2 px-4 py-2">
              <CalendarClock className="size-4 shrink-0 text-primary" />
              {event.duration}
            </span>
            <span className="panel inline-flex items-center gap-2 px-4 py-2">
              <MapPin className="size-4 shrink-0 text-primary" />
              {event.venue}
            </span>
          </div>

          <Button asChild size="lg" className="mt-8">
            <Link to="/register">Register for this event</Link>
          </Button>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-10">
          <section>
            <h2 className="font-display text-xl font-bold text-metal-gradient">Rules</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {event.rules.map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="min-w-0">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-metal-gradient">Schedule</h2>
            <ol className="mt-4 space-y-3">
              {event.schedule.map((s) => (
                <li key={s.time} className="panel grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-4">
                  <span className="shrink-0 font-display text-sm font-semibold text-primary">{s.time}</span>
                  <span className="min-w-0 text-sm text-foreground/85">{s.item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-muted-foreground">
              Timings are indicative and will be confirmed closer to the symposium.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-metal-gradient">Prizes</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/85">
              {event.prizes.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <Trophy className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0">{p}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-metal-gradient">FAQ</h2>
            <Accordion type="single" collapsible className="mt-3">
              {event.faq.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="panel p-6">
            <h2 className="font-display text-lg font-bold text-metal-gradient">Event coordinators</h2>
            <ul className="mt-4 space-y-4">
              {coords.map((c) => (
                <li key={c.id}>
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.role}</p>
                  {c.phone && (
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="mt-1 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <Phone className="size-3.5 shrink-0" />
                      {c.phone}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel p-6">
            <h2 className="font-display text-lg font-bold text-metal-gradient">Selection rule</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              One technical event is mandatory, plus either one non-technical event or one workshop.
            </p>
          </div>
        </aside>
      </div>
    </SiteLayout>
  );
}