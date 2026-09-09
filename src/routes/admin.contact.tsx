import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/admin/contact")({
  component: ContactAdmin,
});

function ContactAdmin() {
  const { settings, updateSettings, coordinators } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Contact settings"
        description="Public email, social handles and venue details."
        actions={<Button onClick={() => toast.success("Contact details saved (mock state).")}>Save</Button>}
      />

      <div className="panel grid gap-4 p-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-email">Contact email</Label>
          <Input
            id="c-email"
            type="email"
            value={settings.email}
            maxLength={120}
            onChange={(e) => updateSettings({ email: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="c-insta">Instagram handle</Label>
          <Input
            id="c-insta"
            value={settings.instagram}
            maxLength={60}
            onChange={(e) => updateSettings({ instagram: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="c-venue">Venue</Label>
          <Input
            id="c-venue"
            value={settings.address}
            maxLength={160}
            onChange={(e) => updateSettings({ address: e.target.value })}
            className="mt-1.5"
          />
        </div>
      </div>

      <div className="panel p-5">
        <h2 className="font-display text-base font-bold text-metal-gradient">Coordinators on the contact page</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {coordinators.map((c) => (
            <li key={c.id} className="rounded-lg border border-border p-4 text-sm">
              <p className="font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground">{c.designation ?? c.role}</p>
              {c.phone && <p className="mt-1 text-xs text-primary">{c.phone}</p>}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          TODO(backend): make coordinator records editable once the directory table exists.
        </p>
      </div>
    </div>
  );
}
