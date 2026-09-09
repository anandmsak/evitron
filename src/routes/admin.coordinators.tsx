import { createFileRoute } from "@tanstack/react-router";
import { Plus, X } from "lucide-react";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/admin/coordinators")({
  component: CoordinatorsAdmin,
});

function CoordinatorsAdmin() {
  const { coordinators, events, assignCoordinator, unassignCoordinator } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Coordinators"
        description="Assign faculty and student coordinators to each event."
      />

      <div className="panel p-5">
        <h2 className="font-display text-base font-bold text-metal-gradient">Team directory</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map((c) => (
            <div key={c.id} className="rounded-lg border border-border p-4">
              <p className="text-sm font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.designation ?? c.role}</p>
              {c.phone && <p className="mt-1 text-xs text-primary">{c.phone}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {events.map((e) => {
          const assigned = e.coordinatorIds;
          const available = coordinators.filter((c) => !assigned.includes(c.id));
          return (
            <div key={e.id} className="panel grid gap-3 p-5 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold text-metal-gradient">{e.title}</p>
                <p className="truncate text-xs text-muted-foreground">{e.subtitle}</p>
              </div>
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                {assigned.map((id) => {
                  const c = coordinators.find((x) => x.id === id);
                  if (!c) return null;
                  return (
                    <Badge key={id} variant="secondary" className="gap-1 pr-1">
                      {c.name}
                      <button
                        onClick={() => unassignCoordinator(e.id, id)}
                        aria-label={`Remove ${c.name} from ${e.title}`}
                        className="rounded p-0.5 hover:bg-muted"
                      >
                        <X className="size-3" />
                      </button>
                    </Badge>
                  );
                })}
                {assigned.length === 0 && (
                  <span className="text-xs text-muted-foreground">No coordinator assigned</span>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="outline" disabled={available.length === 0}>
                      <Plus className="size-3.5" /> Assign
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {available.map((c) => (
                      <DropdownMenuItem key={c.id} onClick={() => assignCoordinator(e.id, c.id)}>
                        {c.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
