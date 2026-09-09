import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

import { useAdmin } from "@/admin/AdminStore";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime, money } from "@/lib/format";

export const Route = createFileRoute("/admin/payments")({
  component: PaymentsAdmin,
});

function PaymentsAdmin() {
  const { registrations, setRegistrations, payment, updatePayment } = useAdmin();

  const collected = registrations
    .filter((r) => r.paymentStatus === "paid")
    .reduce((s, r) => s + r.amount, 0);
  const outstanding = registrations
    .filter((r) => r.paymentStatus !== "paid")
    .reduce((s, r) => s + r.amount, 0);

  const markPaid = (id: string) => {
    // TODO(backend): verify with Razorpay before flipping status.
    setRegistrations(
      registrations.map((r) => (r.id === id ? { ...r, paymentStatus: "paid" as const } : r)),
    );
    toast.success("Marked as paid (mock).");
  };

  return (
    <div className="space-y-6">
      <AdminPageHeader title="Payments" description="Transactions and gateway settings." />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="panel p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Collected</p>
          <p className="mt-2 font-display text-2xl font-bold text-metal-gradient">{money(collected)}</p>
        </div>
        <div className="panel p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Outstanding</p>
          <p className="mt-2 font-display text-2xl font-bold text-metal-gradient">{money(outstanding)}</p>
        </div>
      </div>

      <div className="panel overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Registration</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono text-xs">{r.paymentRef}</TableCell>
                <TableCell className="text-sm">
                  {r.id}
                  <span className="block text-xs text-muted-foreground">{r.leader.name}</span>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{formatDateTime(r.createdAt)}</TableCell>
                <TableCell className="text-right text-sm tabular-nums">{money(r.amount)}</TableCell>
                <TableCell>
                  {r.paymentStatus === "paid" ? (
                    <Badge className="bg-primary/20 text-primary">Paid</Badge>
                  ) : r.paymentStatus === "pending" ? (
                    <Badge variant="secondary">Pending</Badge>
                  ) : (
                    <Badge variant="destructive">Failed</Badge>
                  )}
                </TableCell>
                <TableCell>
                  {r.paymentStatus !== "paid" && (
                    <Button size="sm" variant="outline" onClick={() => markPaid(r.id)}>
                      Mark paid
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="panel space-y-5 p-5">
        <div>
          <h2 className="font-display text-base font-bold text-metal-gradient">Payment settings</h2>
          <p className="text-sm text-muted-foreground">
            Placeholder values. TODO(payments): store the real Razorpay key id in Cloud secrets and keep
            the key secret server-side only.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="fee">Fee per participant (₹)</Label>
            <Input
              id="fee"
              type="number"
              min={0}
              value={payment.feePerParticipant}
              onChange={(e) => updatePayment({ feePerParticipant: Number(e.target.value) })}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="rzp">Razorpay key id (placeholder)</Label>
            <Input
              id="rzp"
              value={payment.keyId}
              maxLength={60}
              onChange={(e) => updatePayment({ keyId: e.target.value })}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="upi">UPI ID</Label>
            <Input
              id="upi"
              value={payment.upiId}
              maxLength={60}
              onChange={(e) => updatePayment({ upiId: e.target.value })}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="payee">UPI payee name</Label>
            <Input
              id="payee"
              value={payment.upiPayeeName}
              maxLength={60}
              onChange={(e) => updatePayment({ upiPayeeName: e.target.value })}
              className="mt-1.5"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm text-foreground/85">
          <Switch
            checked={payment.gatewayEnabled}
            onCheckedChange={(v) => updatePayment({ gatewayEnabled: v })}
          />
          Online gateway enabled
        </label>
      </div>
    </div>
  );
}
