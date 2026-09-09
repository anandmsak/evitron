import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CreditCard, Loader2, Lock, QrCode, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { MockQr } from "@/components/site/MockQr";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { getEventBySlug } from "@/data/events";
import { siteSettings } from "@/data/site";
import { money } from "@/lib/format";
import { createPaymentIntent, processMockPayment, paymentSettings } from "@/services/paymentService";
import {
  calculateFee,
  emptyDraft,
  loadDraft,
  submitRegistration,
  type RegistrationDraft,
} from "@/services/registrationService";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Payment — EVITRON 2K26 Registration Checkout" },
      {
        name: "description",
        content:
          "Complete your EVITRON 2K26 registration payment. ₹350 per participant, paid for the whole team in a single transaction.",
      },
      { property: "og:title", content: "Payment — EVITRON 2K26" },
      { property: "og:description", content: "Secure checkout for symposium registration." },
    ],
  }),
  component: PaymentPage,
});

function PaymentPage() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<RegistrationDraft>(emptyDraft);
  const [method, setMethod] = useState<"razorpay" | "upi">("razorpay");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const stored = loadDraft();
    if (stored) setDraft(stored);
  }, []);

  const fee = calculateFee(draft.members.length + 1);
  const intent = createPaymentIntent(fee.participants, method);
  const hasDraft = draft.participant.name.trim().length > 0 && draft.eventSlugs.length > 0;

  const pay = async () => {
    setProcessing(true);
    // TODO(razorpay): open real checkout here and verify the signature server-side.
    const result = await processMockPayment(intent);
    const registration = await submitRegistration(draft);
    setProcessing(false);
    if (!result.success) {
      toast.error("Payment failed. Please try again.");
      return;
    }
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(
        "evitron:last-registration",
        JSON.stringify({ ...registration, paymentRef: result.paymentId, amount: result.amount }),
      );
    }
    navigate({ to: "/registration-success" });
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-12">
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            <span className="text-metal-gradient">CHECKOUT</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Mock checkout for Phase 1. No money is charged.
          </p>
        </div>
      </section>

      {!hasDraft ? (
        <div className="mx-auto max-w-2xl px-4 py-20 text-center">
          <h2 className="font-display text-2xl font-bold text-metal-gradient">No registration in progress</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Complete the registration form first, then return to checkout.
          </p>
          <Button asChild className="mt-6">
            <Link to="/register">Start registration</Link>
          </Button>
        </div>
      ) : (
        <div className="mx-auto grid max-w-4xl gap-6 px-4 py-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section className="panel p-6">
            <h2 className="font-display text-lg font-bold text-metal-gradient">Payment method</h2>
            <RadioGroup
              value={method}
              onValueChange={(v) => setMethod(v as "razorpay" | "upi")}
              className="mt-4 space-y-3"
            >
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${
                  method === "razorpay" ? "border-primary bg-primary/10" : "border-border"
                }`}
              >
                <RadioGroupItem value="razorpay" className="mt-0.5 shrink-0" />
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <CreditCard className="size-4 shrink-0 text-primary" /> Cards, netbanking & wallets
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Razorpay placeholder — key {paymentSettings.keyId}
                  </span>
                </span>
              </label>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${
                  method === "upi" ? "border-primary bg-primary/10" : "border-border"
                }`}
              >
                <RadioGroupItem value="upi" className="mt-0.5 shrink-0" />
                <span className="min-w-0">
                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <QrCode className="size-4 shrink-0 text-primary" /> UPI QR
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Scan and pay to {siteSettings.upiId}
                  </span>
                </span>
              </label>
            </RadioGroup>

            {method === "upi" && (
              <div className="mt-6 flex flex-col items-center gap-3 rounded-lg border border-border p-6">
                <MockQr value={`upi://pay?pa=${siteSettings.upiId}&am=${fee.total}`} />
                <p className="text-xs text-muted-foreground">UPI QR placeholder</p>
              </div>
            )}

            <Separator className="my-6" />
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4 shrink-0 text-primary" />
              Order {intent.orderId} · mock environment
            </p>

            <Button className="mt-6 w-full" size="lg" onClick={pay} disabled={processing}>
              {processing ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Processing…
                </>
              ) : (
                <>
                  <Lock className="size-4" /> Pay {money(fee.total)}
                </>
              )}
            </Button>
          </section>

          <aside className="panel h-fit p-6">
            <h2 className="font-display text-lg font-bold text-metal-gradient">Order summary</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {draft.eventSlugs.map((s) => (
                <li key={s} className="flex items-baseline justify-between gap-3">
                  <span className="min-w-0 truncate text-foreground/85">{getEventBySlug(s)?.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">included</span>
                </li>
              ))}
            </ul>
            <Separator className="my-4" />
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Participants</span>
                <span>{fee.participants}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Per participant</span>
                <span>{money(fee.perParticipant)}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex items-end justify-between">
              <span className="text-sm text-muted-foreground">Total payable</span>
              <span className="font-display text-2xl font-bold text-metal-gradient">{money(fee.total)}</span>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{siteSettings.perksNote}</p>
          </aside>
        </div>
      )}
    </SiteLayout>
  );
}
