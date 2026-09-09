import { createFileRoute } from "@tanstack/react-router";
import { Download, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { downloadCsv, toCsv } from "@/lib/csv";

export const Route = createFileRoute("/admin/participants")({
  component: ParticipantsAdmin,
});

function ParticipantsAdmin() {
  const { registrations } = useAdmin();
  const [query, setQuery] = useState("");

  const participants = useMemo(
    () =>
      registrations.flatMap((r) => [
        { ...r.leader, role: "Leader", registrationId: r.id, college: r.college, team: r.teamName },
        ...r.members.map((m) => ({
          ...m,
          role: "Member",
          registrationId: r.id,
          college: r.college,
          team: r.teamName,
        })),
      ]),
    [registrations],
  );

  const rows = participants.filter((p) => {
    const q = query.trim().toLowerCase();
    return q.length === 0 || [p.name, p.email, p.college, p.registrationId].join(" ").toLowerCase().includes(q);
  });

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Participants"
        description={`${participants.length} individual participants across all registrations.`}
        actions={
          <Button
            variant="outline"
            onClick={() =>
              downloadCsv(
                "evitron-participants.csv",
                toCsv(
                  rows.map((p) => ({
                    registration_id: p.registrationId,
                    name: p.name,
                    role: p.role,
                    email: p.email,
                    phone: p.phone,
                    year: p.year,
                    department: p.department,
                    college: p.college,
                    team: p.team,
                  })),
                ),
              )
            }
          >
            <Download className="size-4" /> Export CSV
          </Button>
        }
      />

      <div className="panel p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            maxLength={80}
            placeholder="Search participants"
            className="pl-9"
          />
        </div>
      </div>

      <div className="panel overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Registration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((p) => (
              <TableRow key={`${p.registrationId}-${p.email}`}>
                <TableCell className="text-sm">
                  {p.name}
                  <span className="block text-xs text-muted-foreground">
                    {p.department} · {p.year}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={p.role === "Leader" ? "default" : "secondary"}>{p.role}</Badge>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {p.email}
                  <span className="block">{p.phone}</span>
                </TableCell>
                <TableCell className="max-w-48 truncate text-sm">{p.college}</TableCell>
                <TableCell className="text-sm">{p.team}</TableCell>
                <TableCell className="font-mono text-xs">{p.registrationId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
