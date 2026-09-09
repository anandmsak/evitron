import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, ListChecks, Users, Wallet } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { categoryMeta } from "@/data/events";
import { registrationTrend } from "@/data/registrations";
import { money } from "@/lib/format";

export const Route = createFileRoute("/admin/")({
  component: Dashboard,
});

function Dashboard() {
  const { registrations, events } = useAdmin();

  const paid = registrations.filter((r) => r.paymentStatus === "paid");
  const participants = registrations.reduce((sum, r) => sum + r.members.length + 1, 0);
  const revenue = paid.reduce((sum, r) => sum + r.amount, 0);
  const pending = registrations.filter((r) => r.paymentStatus !== "paid").length;

  const perEvent = events.map((e) => ({
    name: e.title,
    count: registrations.filter((r) => r.eventSlugs.includes(e.slug)).length,
  }));

  const categoryTotals = (["technical", "workshop", "non-technical"] as const).map((cat) => ({
    name: categoryMeta[cat].label,
    count: events
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + registrations.filter((r) => r.eventSlugs.includes(e.slug)).length, 0),
  }));

  const metrics = [
    { label: "Registrations", value: String(registrations.length), icon: ListChecks },
    { label: "Participants", value: String(participants), icon: Users },
    { label: "Revenue collected", value: money(revenue), icon: IndianRupee },
    { label: "Payments pending", value: String(pending), icon: Wallet },
  ];

  return (
    <div className="space-y-6">
      <AdminPageHeader title="Dashboard" description="Live snapshot of EVITRON 2K26 registrations (mock data)." />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="panel p-5">
            <m.icon className="size-5 shrink-0 text-primary" />
            <p className="mt-3 font-display text-2xl font-bold text-metal-gradient">{m.value}</p>
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="font-display text-base font-bold text-metal-gradient">Registrations over time</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={registrationTrend}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={12} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Line type="monotone" dataKey="count" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="panel p-5">
          <h2 className="font-display text-base font-bold text-metal-gradient">Entries per track</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryTotals}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Bar dataKey="count" fill="var(--chart-2)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="panel p-5">
        <h2 className="font-display text-base font-bold text-metal-gradient">Entries per event</h2>
        <ul className="mt-4 space-y-3">
          {perEvent.map((e) => (
            <li key={e.name} className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)_auto] items-center gap-3">
              <span className="truncate text-sm text-foreground/85">{e.name}</span>
              <span className="h-2 rounded-full bg-muted">
                <span
                  className="block h-2 rounded-full bg-primary"
                  style={{ width: `${Math.min(100, e.count * 20)}%` }}
                />
              </span>
              <span className="shrink-0 text-sm tabular-nums text-muted-foreground">{e.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
