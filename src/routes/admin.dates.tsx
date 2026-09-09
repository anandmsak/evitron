import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/admin/dates")({
  component: DatesAdmin,
});

function DatesAdmin() {
  const { dates, updateDate } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Important dates"
        description="Symposium day, registration close and abstract submission deadline."
        actions={<Button onClick={() => toast.success("Dates saved (mock state).")}>Save</Button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {dates.map((d) => (
          <div key={d.id} className="panel space-y-3 p-5">
            <div>
              <Label htmlFor={`label-${d.id}`}>Label</Label>
              <Input
                id={`label-${d.id}`}
                value={d.label}
                maxLength={60}
                onChange={(e) => updateDate(d.id, { label: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor={`date-${d.id}`}>Date</Label>
              <Input
                id={`date-${d.id}`}
                type="date"
                value={d.date.slice(0, 10)}
                onChange={(e) => updateDate(d.id, { date: e.target.value })}
                className="mt-1.5"
              />
            </div>
            <p className="text-xs text-muted-foreground">Shown on site as {formatDate(d.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
