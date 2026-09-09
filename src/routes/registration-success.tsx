import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Download } from "lucide-react";
import { useEffect, useState } from "react";

import { MockQr } from "@/components/site/MockQr";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getEventBySlug } from "@/data/events";
import type { Registration } from "@/data/registrations";
import { siteSettings } from "@/data/site";
import { formatDateTime, money } from "@/lib/format";
import { clearDraft } from "@/services/registrationService";

export const Route = createFileRoute("/registration-success")({
  head: () => ({
    meta: [
      { title: "Registration Confirmed — EVITRON 2K26" },
      {
        name: "description",
        content:
          "Your EVITRON 2K26 registration is confirmed. Save your registration ID and entry pass, and download the summary.",
      },
      { property: "og:title", content: "Registration Confirmed — EVITRON 2K26" },
      { property: "og:description", content: "See you on 08 October 2026." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const [reg, setReg] = useState<Registration | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.sessionStorage.getItem("evitron:last-registration");
    if (raw) {
      try {
        setReg(JSON.parse(raw) as Registration);
        clearDraft();
      } catch {
        setReg(null);
      }
    }
  }, []);

  const download = () => {
    if (!reg) return;
    const lines = [
      `EVITRON 2K26 — Registration Summary`,
      `${siteSettings.college} | ${siteSettings.department}`,
      ``,
      `Registration ID: ${reg.id}`,
      `Registered on: ${formatDateTime(reg.createdAt)}`,
      `Leader: ${reg.leader.name} (${reg.leader.email}, ${reg.leader.phone})`,
      `College: ${reg.college}`,
      `Team: ${reg.teamName}`,
      `Members: ${reg.members.map((m) => m.name).join(", ") || "—"}`,
      `Events: ${reg.eventSlugs.map((s) => getEventBySlug(s)?.title ?? s).join(", ")}`,
      `Amount paid: ${money(reg.amount)} (${reg.paymentRef})`,
      ``,
      `Symposium date: 08/10/2026`,
      `${siteSettings.perksNote}`,
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${reg.id}-evitron2k26.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!reg) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-2xl px-4 py-24 text-center">
          <h1 className="font-display text-2xl font-bold text-metal-gradient">No confirmation found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Complete a registration to see your confirmation and entry pass.
          </p>
          <Button asChild className="mt-6">
            <Link to="/register">Start registration</Link>
          </Button>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 hero-aura" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center">
          <CheckCircle2 className="mx-auto size-12 text-primary" />
          <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            <span className="text-metal-gradient">REGISTRATION CONFIRMED</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Keep this registration ID and pass ready at the registration desk on 08/10/2026.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-3xl gap-6 px-4 py-12 md:grid-cols-[minmax(0,1fr)_auto]">
        <section className="panel p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Registration ID</p>
          <p className="font-display text-2xl font-bold text-metal-gradient">{reg.id}</p>

          <Separator className="my-5" />
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <Item label="Leader" value={reg.leader.name} />
            <Item label="Email" value={reg.leader.email} />
            <Item label="College" value={reg.college} />
            <Item label="Team" value={reg.teamName} />
            <Item label="Participants" value={String(reg.members.length + 1)} />
            <Item label="Amount paid" value={money(reg.amount)} />
            <Item label="Payment reference" value={reg.paymentRef} />
            <Item label="Registered on" value={formatDateTime(reg.createdAt)} />
          </dl>

          <Separator className="my-5" />
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Events</p>
          <ul className="mt-2 space-y-1 text-sm text-foreground/85">
            {reg.eventSlugs.map((s) => (
              <li key={s}>{getEventBySlug(s)?.title ?? s}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={download}>
              <Download className="size-4" /> Download summary
            </Button>
            <Button asChild variant="outline">
              <Link to="/events">Browse events</Link>
            </Button>
          </div>
        </section>

        <aside className="panel flex flex-col items-center gap-3 p-6">
          <MockQr value={reg.id} size={188} />
          <p className="text-center text-xs text-muted-foreground">
            Entry pass placeholder.
            <br />
            Scanning goes live in a later phase.
          </p>
        </aside>
      </div>
    </SiteLayout>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
      <dd className="truncate text-sm text-foreground">{value}</dd>
    </div>
  );
}
