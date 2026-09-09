import { i as __toESM } from "../_runtime.mjs";
import { i as getEventBySlug } from "./events-C3idm_Mi.mjs";
import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
import { n as paymentSettings, r as processMockPayment, t as createPaymentIntent } from "./paymentService-BxA06OAo.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { C as Lock, I as Circle, M as CreditCard, f as ShieldCheck, h as QrCode, w as LoaderCircle } from "../_libs/lucide-react.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as money } from "./format-9o3crDG4.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { a as loadDraft, i as emptyDraft, n as calculateFee, o as submitRegistration, t as MockQr } from "./registrationService-DCq_TYYT.mjs";
import { n as RadioGroupIndicator, r as RadioGroupItem$1, t as RadioGroup$1 } from "../_libs/radix-ui__react-radio-group.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-BelXAVHO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RadioGroup = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup$1, {
		className: cn("grid gap-2", className),
		...props,
		ref
	});
});
RadioGroup.displayName = RadioGroup$1.displayName;
var RadioGroupItem = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem$1, {
		ref,
		className: cn("aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupIndicator, {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-3.5 w-3.5 fill-primary" })
		})
	});
});
RadioGroupItem.displayName = RadioGroupItem$1.displayName;
function PaymentPage() {
	const navigate = useNavigate();
	const [draft, setDraft] = (0, import_react.useState)(emptyDraft);
	const [method, setMethod] = (0, import_react.useState)("razorpay");
	const [processing, setProcessing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = loadDraft();
		if (stored) setDraft(stored);
	}, []);
	const fee = calculateFee(draft.members.length + 1);
	const intent = createPaymentIntent(fee.participants, method);
	const hasDraft = draft.participant.name.trim().length > 0 && draft.eventSlugs.length > 0;
	const pay = async () => {
		setProcessing(true);
		const result = await processMockPayment(intent);
		const registration = await submitRegistration(draft);
		setProcessing(false);
		if (!result.success) {
			toast.error("Payment failed. Please try again.");
			return;
		}
		if (typeof window !== "undefined") window.sessionStorage.setItem("evitron:last-registration", JSON.stringify({
			...registration,
			paymentRef: result.paymentId,
			amount: result.amount
		}));
		navigate({ to: "/registration-success" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 circuit-grid opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-4 py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold sm:text-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-metal-gradient",
					children: "CHECKOUT"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Mock checkout for Phase 1. No money is charged."
			})]
		})]
	}), !hasDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold text-metal-gradient",
				children: "No registration in progress"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Complete the registration form first, then return to checkout."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/register",
					children: "Start registration"
				})
			})
		]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-4xl gap-6 px-4 py-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: "Payment method"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioGroup, {
					value: method,
					onValueChange: (v) => setMethod(v),
					className: "mt-4 space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${method === "razorpay" ? "border-primary bg-primary/10" : "border-border"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
							value: "razorpay",
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-sm font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-4 shrink-0 text-primary" }), " Cards, netbanking & wallets"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-xs text-muted-foreground",
								children: ["Razorpay placeholder — key ", paymentSettings.keyId]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: `flex cursor-pointer items-start gap-3 rounded-lg border p-4 ${method === "upi" ? "border-primary bg-primary/10" : "border-border"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupItem, {
							value: "upi",
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-sm font-semibold text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, { className: "size-4 shrink-0 text-primary" }), " UPI QR"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 block text-xs text-muted-foreground",
								children: ["Scan and pay to ", siteSettings.upiId]
							})]
						})]
					})]
				}),
				method === "upi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-center gap-3 rounded-lg border border-border p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockQr, { value: `upi://pay?pa=${siteSettings.upiId}&am=${fee.total}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "UPI QR placeholder"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0 text-primary" }),
						"Order ",
						intent.orderId,
						" · mock environment"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6 w-full",
					size: "lg",
					onClick: pay,
					disabled: processing,
					children: processing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " Processing…"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }),
						" Pay ",
						money(fee.total)
					] })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "panel h-fit p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: "Order summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: draft.eventSlugs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate text-foreground/85",
							children: getEventBySlug(s)?.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-xs text-muted-foreground",
							children: "included"
						})]
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Participants"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fee.participants })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Per participant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(fee.perParticipant) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted-foreground",
						children: "Total payable"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl font-bold text-metal-gradient",
						children: money(fee.total)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs text-muted-foreground",
					children: siteSettings.perksNote
				})
			]
		})]
	})] });
}
//#endregion
export { PaymentPage as component };
