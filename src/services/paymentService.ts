/**
 * Payment service abstraction (mock).
 * TODO(razorpay): create an order server-side, open Razorpay checkout with the
 * order id, and verify the signature in a server function before confirming.
 */

import { siteSettings } from "@/data/site";

export type PaymentIntent = {
  orderId: string;
  amount: number;
  currency: "INR";
  participants: number;
  method: "razorpay" | "upi";
};

export type PaymentResult = {
  success: boolean;
  paymentId: string;
  orderId: string;
  amount: number;
};

export function createPaymentIntent(participants: number, method: PaymentIntent["method"]): PaymentIntent {
  return {
    orderId: `order_MOCK_${Math.random().toString(16).slice(2, 10)}`,
    amount: participants * siteSettings.feePerParticipant,
    currency: "INR",
    participants,
    method,
  };
}

/** TODO(razorpay): replace with real checkout + server-side verification. */
export async function processMockPayment(intent: PaymentIntent): Promise<PaymentResult> {
  await new Promise((r) => setTimeout(r, 1400));
  return {
    success: true,
    paymentId: `pay_MOCK_${Math.random().toString(16).slice(2, 8)}`,
    orderId: intent.orderId,
    amount: intent.amount,
  };
}

export const paymentSettings = {
  provider: "Razorpay (placeholder)",
  keyId: "rzp_test_PLACEHOLDER",
  upiId: siteSettings.upiId,
  feePerParticipant: siteSettings.feePerParticipant,
  upiPayeeName: "VELOCITY ECE - MEC",
  gatewayEnabled: false,
};
