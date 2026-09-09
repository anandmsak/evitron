import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paymentService-BxA06OAo.js
/**
* Payment service abstraction (mock).
* TODO(razorpay): create an order server-side, open Razorpay checkout with the
* order id, and verify the signature in a server function before confirming.
*/
function createPaymentIntent(participants, method) {
	return {
		orderId: `order_MOCK_${Math.random().toString(16).slice(2, 10)}`,
		amount: participants * siteSettings.feePerParticipant,
		currency: "INR",
		participants,
		method
	};
}
/** TODO(razorpay): replace with real checkout + server-side verification. */
async function processMockPayment(intent) {
	await new Promise((r) => setTimeout(r, 1400));
	return {
		success: true,
		paymentId: `pay_MOCK_${Math.random().toString(16).slice(2, 8)}`,
		orderId: intent.orderId,
		amount: intent.amount
	};
}
var paymentSettings = {
	provider: "Razorpay (placeholder)",
	keyId: "rzp_test_PLACEHOLDER",
	upiId: siteSettings.upiId,
	feePerParticipant: siteSettings.feePerParticipant,
	upiPayeeName: "VELOCITY ECE - MEC",
	gatewayEnabled: false
};
//#endregion
export { paymentSettings as n, processMockPayment as r, createPaymentIntent as t };
