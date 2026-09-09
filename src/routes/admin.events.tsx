import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { categoryMeta, type EventCategory, type SymposiumEvent } from "@/data/events";

export const Route = createFileRoute("/admin/events")({
  component: EventsAdmin,
});

const categories: EventCategory[] = ["technical", "workshop", "non-technical"];

function EventsAdmin() {
  const { events, updateEvent, addEvent, removeEvent } = useAdmin();
  const [editing, setEditing] = useState<SymposiumEvent | null>(null);
  const [creating, setCreating] = useState(false);

  const blank: SymposiumEvent = {
    id: `e-${Date.now()}`,
    slug: "",
    title: "",
    subtitle: "",
    category: "technical",
    tagline: "",
    description: "",
    teamSize: { min: 1, max: 2 },
    duration: "",
    venue: "",
    rules: [],
    schedule: [],
    prizes: [],
    faq: [],
    coordinatorIds: [],
    active: true,
  };

  const save = (draft: SymposiumEvent) => {
    if (!draft.title.trim() || !draft.slug.trim()) {
      toast.error("Title and slug are required.");
      return;
    }
    if (creating) {
      addEvent(draft);
      toast.success("Event created (mock state).");
    } else {
      updateEvent(draft.id, draft);
      toast.success("Event updated (mock state).");
    }
    setEditing(null);
    setCreating(false);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Events"
        description="Create, edit and retire events. Changes live in mock state only."
        actions={
          <Button
            onClick={() => {
              setCreating(true);
              setEditing(blank);
            }}
          >
            <Plus className="size-4" /> New event
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {events.map((e) => (
          <div key={e.id} className="panel flex flex-col gap-3 p-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <h2 className="truncate font-display text-base font-bold text-metal-gradient">{e.title}</h2>
                <p className="truncate text-xs text-muted-foreground">{e.subtitle}</p>
              </div>
              <Badge variant="outline" className="shrink-0 border-primary/40 text-primary">
                {categoryMeta[e.category].label.split(" ")[0]}
              </Badge>
            </div>
            <p className="line-clamp-2 text-sm text-muted-foreground">{e.tagline}</p>
            <div className="mt-auto flex items-center justify-between gap-3 pt-2">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <Switch
                  checked={e.active}
                  onCheckedChange={(v) => updateEvent(e.id, { active: v })}
                  aria-label={`Toggle ${e.title}`}
                />
                {e.active ? "Live" : "Hidden"}
              </label>
              <div className="flex gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setCreating(false);
                    setEditing(e);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={`Delete ${e.title}`}
                  onClick={() => {
                    removeEvent(e.id);
                    toast.success("Event removed (mock state).");
                  }}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EventDialog
        event={editing}
        creating={creating}
        onClose={() => {
          setEditing(null);
          setCreating(false);
        }}
        onSave={save}
      />
    </div>
  );
}

function EventDialog({
  event,
  creating,
  onClose,
  onSave,
}: {
  event: SymposiumEvent | null;
  creating: boolean;
  onClose: () => void;
  onSave: (e: SymposiumEvent) => void;
}) {
  const [draft, setDraft] = useState<SymposiumEvent | null>(event);

  if (event && (!draft || draft.id !== event.id)) setDraft(event);

  return (
    <Dialog open={event !== null} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-metal-gradient">
            {creating ? "New event" : "Edit event"}
          </DialogTitle>
          <DialogDescription>Mock CRUD — nothing is persisted yet.</DialogDescription>
        </DialogHeader>

        {draft && (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="ev-title">Title</Label>
                <Input
                  id="ev-title"
                  value={draft.title}
                  maxLength={60}
                  onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="ev-slug">Slug</Label>
                <Input
                  id="ev-slug"
                  value={draft.slug}
                  maxLength={60}
                  onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="ev-subtitle">Subtitle</Label>
                <Input
                  id="ev-subtitle"
                  value={draft.subtitle}
                  maxLength={80}
                  onChange={(e) => setDraft({ ...draft, subtitle: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label>Category</Label>
                <Select
                  value={draft.category}
                  onValueChange={(v) => setDraft({ ...draft, category: v as EventCategory })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c} value={c}>
                        {categoryMeta[c].label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="ev-duration">Duration</Label>
                <Input
                  id="ev-duration"
                  value={draft.duration}
                  maxLength={80}
                  onChange={(e) => setDraft({ ...draft, duration: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="ev-venue">Venue</Label>
                <Input
                  id="ev-venue"
                  value={draft.venue}
                  maxLength={80}
                  onChange={(e) => setDraft({ ...draft, venue: e.target.value })}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="ev-tagline">Tagline</Label>
              <Input
                id="ev-tagline"
                value={draft.tagline}
                maxLength={120}
                onChange={(e) => setDraft({ ...draft, tagline: e.target.value })}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="ev-desc">Description</Label>
              <Textarea
                id="ev-desc"
                value={draft.description}
                maxLength={800}
                rows={4}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                className="mt-1.5"
              />
            </div>

            <div>
              <Label htmlFor="ev-rules">Rules (one per line)</Label>
              <Textarea
                id="ev-rules"
                value={draft.rules.join("\n")}
                rows={4}
                onChange={(e) => setDraft({ ...draft, rules: e.target.value.split("\n") })}
                className="mt-1.5"
              />
            </div>
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => draft && onSave({ ...draft, rules: draft.rules.filter(Boolean) })}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
