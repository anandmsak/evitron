import { createFileRoute } from "@tanstack/react-router";
import { Download, Eye, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEventBySlug } from "@/data/events";
import type { Registration } from "@/data/registrations";
import { downloadCsv, toCsv } from "@/lib/csv";
import { formatDateTime, money } from "@/lib/format";

export const Route = createFileRoute("/admin/registrations")({
  component: RegistrationsPage,
});

function RegistrationsPage() {
  const { registrations, events } = useAdmin();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [eventSlug, setEventSlug] = useState("all");
  const [open, setOpen] = useState<Registration | null>(null);

  const rows = useMemo(
    () =>
      registrations.filter((r) => {
        const q = query.trim().toLowerCase();
        const matchesQuery =
          q.length === 0 ||
          [r.id, r.leader.name, r.leader.email, r.college, r.teamName]
            .join(" ")
            .toLowerCase()
            .includes(q);
        const matchesStatus = status === "all" || r.paymentStatus === status;
        const matchesEvent = eventSlug === "all" || r.eventSlugs.includes(eventSlug);
        return matchesQuery && matchesStatus && matchesEvent;
      }),
    [registrations, query, status, eventSlug],
  );

  const exportCsv = () => {
    downloadCsv(
      "evitron-registrations.csv",
      toCsv(
        rows.map((r) => ({
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
          payment_ref: r.paymentRef,
        })),
      ),
    );
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Registrations"
        description={`${rows.length} of ${registrations.length} records shown.`}
        actions={
          <Button onClick={exportCsv} variant="outline">
            <Download className="size-4" /> Export CSV
          </Button>
        }
      />

      <div className="panel grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
        <div className="relative min-w-0">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ID, name, email, college"
            className="pl-9"
            maxLength={80}
          />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-full sm:w-40">
            <SelectValue placeholder="Payment status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
        <Select value={eventSlug} onValueChange={setEventSlug}>
          <SelectTrigger className="w-full sm:w-52">
            <SelectValue placeholder="Event" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All events</SelectItem>
            {events.map((e) => (
              <SelectItem key={e.id} value={e.slug}>
                {e.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="panel overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Leader</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Events</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono text-xs">{r.id}</TableCell>
                <TableCell>
                  <span className="block text-sm">{r.leader.name}</span>
                  <span className="block text-xs text-muted-foreground">{r.leader.email}</span>
                </TableCell>
                <TableCell className="max-w-48 truncate text-sm">{r.college}</TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {r.eventSlugs.map((s) => getEventBySlug(s)?.title ?? s).join(", ")}
                </TableCell>
                <TableCell className="text-right text-sm tabular-nums">{money(r.amount)}</TableCell>
                <TableCell>
                  <StatusBadge status={r.paymentStatus} />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" aria-label="View" onClick={() => setOpen(r)}>
                    <Eye className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="py-10 text-center text-sm text-muted-foreground">
                  No registrations match these filters.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Sheet open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          {open && (
            <>
              <SheetHeader>
                <SheetTitle className="font-display text-metal-gradient">{open.id}</SheetTitle>
                <SheetDescription>Registered {formatDateTime(open.createdAt)}</SheetDescription>
              </SheetHeader>
              <div className="space-y-4 px-4 pb-6 text-sm">
                <Detail label="Leader" value={open.leader.name} />
                <Detail label="Email" value={open.leader.email} />
                <Detail label="Phone" value={open.leader.phone} />
                <Detail label="College" value={open.college} />
                <Detail label="Department / Year" value={`${open.leader.department} · ${open.leader.year}`} />
                <Detail label="Team" value={open.teamName} />
                <Separator />
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Members</p>
                  <ul className="mt-1 space-y-1">
                    {open.members.length === 0 && <li className="text-muted-foreground">Solo entry</li>}
                    {open.members.map((m) => (
                      <li key={m.email}>
                        {m.name} — {m.email}
                      </li>
                    ))}
                  </ul>
                </div>
                <Separator />
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Events</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {open.eventSlugs.map((s) => (
                      <Badge key={s} variant="outline" className="border-primary/40 text-primary">
                        {getEventBySlug(s)?.title ?? s}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Separator />
                <Detail label="Amount" value={money(open.amount)} />
                <Detail label="Payment reference" value={open.paymentRef} />
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">Status</span>
                  <StatusBadge status={open.paymentStatus} />
                </div>
                <Detail label="Checked in" value={open.checkedIn ? "Yes" : "Not yet"} />
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

function StatusBadge({ status }: { status: Registration["paymentStatus"] }) {
  if (status === "paid") return <Badge className="bg-primary/20 text-primary">Paid</Badge>;
  if (status === "pending") return <Badge variant="secondary">Pending</Badge>;
  return <Badge variant="destructive">Failed</Badge>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      <p className="truncate text-foreground">{value || "—"}</p>
    </div>
  );
}
