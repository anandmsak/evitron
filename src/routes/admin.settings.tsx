import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/settings")({
  component: SiteSettingsAdmin,
});

function SiteSettingsAdmin() {
  const { settings, updateSettings } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Site settings"
        description="Names, tagline and perks shown across the public site."
        actions={<Button onClick={() => toast.success("Site settings saved (mock state).")}>Save</Button>}
      />

      <div className="panel grid gap-4 p-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="s-name">Symposium name</Label>
          <Input
            id="s-name"
            value={settings.eventName}
            maxLength={60}
            onChange={(e) => updateSettings({ eventName: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="s-dept">Department</Label>
          <Input
            id="s-dept"
            value={settings.department}
            maxLength={80}
            onChange={(e) => updateSettings({ department: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="s-college">College</Label>
          <Input
            id="s-college"
            value={settings.college}
            maxLength={120}
            onChange={(e) => updateSettings({ college: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div>
          <Label htmlFor="s-assoc">In association with</Label>
          <Input
            id="s-assoc"
            value={settings.association}
            maxLength={80}
            onChange={(e) => updateSettings({ association: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="s-tagline">Tagline</Label>
          <Input
            id="s-tagline"
            value={settings.tagline}
            maxLength={140}
            onChange={(e) => updateSettings({ tagline: e.target.value })}
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="s-perks">Included with registration (one per line)</Label>
          <Textarea
            id="s-perks"
            rows={4}
            value={settings.perks.join("\n")}
            onChange={(e) => updateSettings({ perks: e.target.value.split("\n") })}
            className="mt-1.5"
          />
        </div>
      </div>
    </div>
  );
}
