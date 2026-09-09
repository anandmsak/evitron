import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/ui/button";
import { downloadCsv, toCsv } from "@/lib/csv";

export const Route = createFileRoute("/admin/exports")({
  component: ExportsAdmin,
});

function ExportsAdmin() {
  const { registrations, events } = useAdmin();

  const exports = [
    {
      title: "All registrations",
      description: "One row per registration with leader, events, amount and payment status.",
      run: () =>
        downloadCsv(
          "evitron-registrations.csv",
          toCsv(
            registrations.map((r) => ({
              id: r.id,
              created_at: r.createdAt,
              leader: r.leader.name,
              email: r.leader.email,
              phone: r.leader.phone,
              college: r.college,
              team: r.teamName,
              participants: r.members.length + 1,
              events: r.eventSlugs.join(" | "),
              amount: r.amount,
              payment_status: r.paymentStatus,
            })),
          ),
        ),
    },
    {
      title: "Participants",
      description: "One row per person, including team members.",
      run: () =>
        downloadCsv(
          "evitron-participants.csv",
          toCsv(
            registrations.flatMap((r) =>
              [r.leader, ...r.members].map((p, i) => ({
                registration_id: r.id,
                role: i === 0 ? "Leader" : "Member",
                name: p.name,
                email: p.email,
                phone: p.phone,
                year: p.year,
                department: p.department,
                college: r.college,
              })),
            ),
          ),
        ),
    },
    {
      title: "Event-wise counts",
      description: "Registration count per event, useful for hall allocation.",
      run: () =>
        downloadCsv(
          "evitron-event-counts.csv",
          toCsv(
            events.map((e) => ({
              event: e.title,
              category: e.category,
              venue: e.venue,
              registrations: registrations.filter((r) => r.eventSlugs.includes(e.slug)).length,
            })),
          ),
        ),
    },
    {
      title: "Payments",
      description: "Transaction references with amounts and status.",
      run: () =>
        downloadCsv(
          "evitron-payments.csv",
          toCsv(
            registrations.map((r) => ({
              payment_ref: r.paymentRef,
              registration_id: r.id,
              amount: r.amount,
              status: r.paymentStatus,
              created_at: r.createdAt,
            })),
          ),
        ),
    },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader title="Exports" description="Download CSV snapshots of the current mock data." />

      <div className="grid gap-4 md:grid-cols-2">
        {exports.map((x) => (
          <div key={x.title} className="panel flex flex-col gap-3 p-5">
            <h2 className="font-display text-base font-bold text-metal-gradient">{x.title}</h2>
            <p className="text-sm text-muted-foreground">{x.description}</p>
            <Button className="mt-auto self-start" variant="outline" onClick={x.run}>
              <Download className="size-4" /> Download CSV
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
