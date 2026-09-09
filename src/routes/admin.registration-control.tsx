import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/registration-control")({
  component: RegistrationControl,
});

function RegistrationControl() {
  const { settings, updateSettings } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Registration control"
        description="Open or close registrations and set the seat cap."
      />

      <div className="panel space-y-5 p-5">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <div className="min-w-0">
            <p className="font-display text-base font-bold text-metal-gradient">Registrations</p>
            <p className="text-sm text-muted-foreground">
              When closed, the public register page shows a notice instead of the form.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Badge variant={settings.registrationOpen ? "default" : "destructive"}>
              {settings.registrationOpen ? "Open" : "Closed"}
            </Badge>
            <Switch
              checked={settings.registrationOpen}
              aria-label="Toggle registrations"
              onCheckedChange={(v) => {
                updateSettings({ registrationOpen: v });
                toast.success(v ? "Registrations opened." : "Registrations closed.");
              }}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="cap">Seat cap</Label>
            <Input
              id="cap"
              type="number"
              min={0}
              value={settings.seatCap}
              onChange={(e) => updateSettings({ seatCap: Number(e.target.value) })}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="fee-control">Fee per participant (₹)</Label>
            <Input
              id="fee-control"
              type="number"
              min={0}
              value={settings.feePerParticipant}
              onChange={(e) => updateSettings({ feePerParticipant: Number(e.target.value) })}
              className="mt-1.5"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="closed-note">Closed notice</Label>
          <Textarea
            id="closed-note"
            rows={3}
            maxLength={300}
            value={settings.closedNotice}
            onChange={(e) => updateSettings({ closedNotice: e.target.value })}
            className="mt-1.5"
          />
        </div>
      </div>
    </div>
  );
}
