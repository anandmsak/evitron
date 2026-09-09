import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories, faqItems } from "@/data/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — EVITRON 2K26 Symposium Questions Answered" },
      {
        name: "description",
        content:
          "Answers about EVITRON 2K26 registration rules, ₹350 fee and payment, event team sizes, certificates, food and welcome kit, and the venue.",
      },
      { property: "og:title", content: "FAQ — EVITRON 2K26" },
      { property: "og:description", content: "Registration, payment, events and on-campus questions answered." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-14">
          <h1 className="font-display text-3xl font-bold sm:text-5xl">
            <span className="text-metal-gradient">FAQ</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Everything participants usually ask before registering.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-14">
        {faqCategories.map((cat) => {
          const items = faqItems.filter((f) => f.category === cat);
          return (
            <section key={cat}>
              <h2 className="font-display text-xl font-bold text-metal-gradient">{cat}</h2>
              <Accordion type="single" collapsible className="mt-3">
                {items.map((f) => (
                  <AccordionItem key={f.id} value={f.id}>
                    <AccordionTrigger className="text-left text-sm">{f.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{f.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          );
        })}
      </div>
    </SiteLayout>
  );
}
