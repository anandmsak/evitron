import { createFileRoute } from "@tanstack/react-router";

import { EventCard } from "@/components/site/EventCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { categoryMeta, eventsByCategory, type EventCategory } from "@/data/events";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events — EVITRON 2K26 | Technical, Workshops, Non-Technical" },
      {
        name: "description",
        content:
          "All EVITRON 2K26 events: Techpaper, Evolvex, Tracktron, Silicon 2 GDS, Embedded System, Virtual Instrumentation, Mind Maze, Promptify, Memix and Detective 404.",
      },
      { property: "og:title", content: "Events — EVITRON 2K26" },
      {
        property: "og:description",
        content: "Ten events across technical, workshop and non-technical tracks on 08 October 2026.",
      },
    ],
  }),
  component: EventsPage,
});

const categories: EventCategory[] = ["technical", "workshop", "non-technical"];

function EventsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="text-metal-gradient">EVENTS</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Ten events across three tracks. Select one technical event, and add either one non-technical event
            or one workshop.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section
          key={cat}
          className={i % 2 === 1 ? "border-y border-border/70 bg-surface/30" : undefined}
        >
          <div className="mx-auto max-w-6xl px-4 py-14">
            <SectionHeading
              eyebrow={`Track ${i + 1}`}
              title={categoryMeta[cat].label}
              description={categoryMeta[cat].blurb}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {eventsByCategory(cat).map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </SiteLayout>
  );
}
