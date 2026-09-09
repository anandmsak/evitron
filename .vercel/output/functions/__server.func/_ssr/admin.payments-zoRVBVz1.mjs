import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { n as formatDateTime, r as money } from "./format-9o3crDG4.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.payments-zoRVBVz1.js
var import_jsx_runtime = require_jsx_runtime();
function PaymentsAdmin() {
	const { registrations, setRegistrations, payment, updatePayment } = useAdmin();
	const collected = registrations.filter((r) => r.paymentStatus === "paid").reduce((s, r) => s + r.amount, 0);
	const outstanding = registrations.filter((r) => r.paymentStatus !== "paid").reduce((s, r) => s + r.amount, 0);
	const markPaid = (id) => {
		setRegistrations(registrations.map((r) => r.id === id ? {
			...r,
			paymentStatus: "paid"
		} : r));
		toast.success("Marked as paid (mock).");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Payments",
				description: "Transactions and gateway settings."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: "Collected"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-bold text-metal-gradient",
						children: money(collected)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
						children: "Outstanding"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl font-bold text-metal-gradient",
						children: money(outstanding)
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Reference" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registration" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Date" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Amount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: registrations.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: r.paymentRef
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-sm",
						children: [r.id, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted-foreground",
							children: r.leader.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs text-muted-foreground",
						children: formatDateTime(r.createdAt)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-sm tabular-nums",
						children: money(r.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.paymentStatus === "paid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						className: "bg-primary/20 text-primary",
						children: "Paid"
					}) : r.paymentStatus === "pending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "secondary",
						children: "Pending"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "destructive",
						children: "Failed"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: r.paymentStatus !== "paid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "sm",
						variant: "outline",
						onClick: () => markPaid(r.id),
						children: "Mark paid"
					}) })
				] }, r.id)) })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel space-y-5 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-bold text-metal-gradient",
						children: "Payment settings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Placeholder values. TODO(payments): store the real Razorpay key id in Cloud secrets and keep the key secret server-side only."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "fee",
								children: "Fee per participant (₹)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "fee",
								type: "number",
								min: 0,
								value: payment.feePerParticipant,
								onChange: (e) => updatePayment({ feePerParticipant: Number(e.target.value) }),
								className: "mt-1.5"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "rzp",
								children: "Razorpay key id (placeholder)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "rzp",
								value: payment.keyId,
								maxLength: 60,
								onChange: (e) => updatePayment({ keyId: e.target.value }),
								className: "mt-1.5"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "upi",
								children: "UPI ID"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "upi",
								value: payment.upiId,
								maxLength: 60,
								onChange: (e) => updatePayment({ upiId: e.target.value }),
								className: "mt-1.5"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "payee",
								children: "UPI payee name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "payee",
								value: payment.upiPayeeName,
								maxLength: 60,
								onChange: (e) => updatePayment({ upiPayeeName: e.target.value }),
								className: "mt-1.5"
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-sm text-foreground/85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: payment.gatewayEnabled,
							onCheckedChange: (v) => updatePayment({ gatewayEnabled: v })
						}), "Online gateway enabled"]
					})
				]
			})
		]
	});
}
//#endregion
export { PaymentsAdmin as component };
