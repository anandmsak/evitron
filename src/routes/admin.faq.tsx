import { createFileRoute } from "@tanstack/react-router";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/admin/faq")({
  component: FaqAdmin,
});

function FaqAdmin() {
  const { faq, addFaq, updateFaq, removeFaq } = useAdmin();

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="FAQ manager"
        description="Questions shown on the public FAQ page, grouped by category."
        actions={
          <Button
            onClick={() => {
              addFaq({
                id: `faq-${Date.now()}`,
                category: "General",
                question: "New question",
                answer: "",
              });
              toast.success("Question added (mock state).");
            }}
          >
            <Plus className="size-4" /> Add question
          </Button>
        }
      />

      <div className="space-y-4">
        {faq.map((f) => (
          <div key={f.id} className="panel space-y-3 p-5">
            <div className="grid gap-3 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_auto]">
              <div className="min-w-0">
                <Label htmlFor={`cat-${f.id}`}>Category</Label>
                <Input
                  id={`cat-${f.id}`}
                  value={f.category}
                  maxLength={40}
                  onChange={(e) => updateFaq(f.id, { category: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div className="min-w-0">
                <Label htmlFor={`q-${f.id}`}>Question</Label>
                <Input
                  id={`q-${f.id}`}
                  value={f.question}
                  maxLength={160}
                  onChange={(e) => updateFaq(f.id, { question: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div className="flex items-end">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Delete question"
                  onClick={() => removeFaq(f.id)}
                >
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </div>
            <div>
              <Label htmlFor={`a-${f.id}`}>Answer</Label>
              <Textarea
                id={`a-${f.id}`}
                value={f.answer}
                maxLength={800}
                rows={3}
                onChange={(e) => updateFaq(f.id, { answer: e.target.value })}
                className="mt-1.5"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
