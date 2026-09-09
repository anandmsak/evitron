import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { coordinators, siteSettings } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EVITRON 2K26 Coordinators | ECE, MEC" },
      {
        name: "description",
        content:
          "Contact the EVITRON 2K26 team: faculty coordinator Dr. M. Ravikumar, student coordinators Anandha Krishnan P and Sri Sarvesan M G, evitron26@gmail.com.",
      },
      { property: "og:title", content: "Contact — EVITRON 2K26" },
      { property: "og:description", content: "Faculty and student coordinators, email and Instagram." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const groups = [
    { label: "Convenor", list: coordinators.filter((c) => c.kind === "convenor") },
    { label: "Faculty Co-ordinators", list: coordinators.filter((c) => c.kind === "faculty") },
    { label: "Student Coordinators", list: coordinators.filter((c) => c.kind === "student") },
  ];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="text-metal-gradient">CONTACT</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Reach the organising team for registration, abstracts, workshops or campus logistics.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 lg:grid-cols-3">
        {groups.map((g) => (
          <section key={g.label} className="panel p-6">
            <h2 className="font-display text-lg font-bold text-metal-gradient">{g.label}</h2>
            <ul className="mt-4 space-y-5">
              {g.list.map((c) => (
                <li key={c.id}>
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.designation ?? c.role}</p>
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
          </section>
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2">
        <section className="panel p-6">
          <h2 className="font-display text-lg font-bold text-metal-gradient">Write to us</h2>
          <a
            href={`mailto:${siteSettings.email}`}
            className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail className="size-4 shrink-0" />
            {siteSettings.email}
          </a>
          <a
            href={siteSettings.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Instagram className="size-4 shrink-0" />
            {siteSettings.instagram}
          </a>
        </section>
        <section className="panel p-6">
          <h2 className="font-display text-lg font-bold text-metal-gradient">Venue</h2>
          <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              {siteSettings.college}
              <br />
              {siteSettings.address}
            </span>
          </p>
        </section>
      </div>
    </SiteLayout>
  );
}
