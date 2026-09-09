import { i as __toESM } from "../_runtime.mjs";
import { i as getEventBySlug } from "./events-C3idm_Mi.mjs";
import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { R as CircleCheck, j as Download } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as formatDateTime, r as money } from "./format-9o3crDG4.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { r as clearDraft, t as MockQr } from "./registrationService-DCq_TYYT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registration-success-CGUlbsXG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SuccessPage() {
	const [reg, setReg] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const raw = window.sessionStorage.getItem("evitron:last-registration");
		if (raw) try {
			setReg(JSON.parse(raw));
			clearDraft();
		} catch {
			setReg(null);
		}
	}, []);
	const download = () => {
		if (!reg) return;
		const lines = [
			`EVITRON 2K26 — Registration Summary`,
			`${siteSettings.college} | ${siteSettings.department}`,
			``,
			`Registration ID: ${reg.id}`,
			`Registered on: ${formatDateTime(reg.createdAt)}`,
			`Leader: ${reg.leader.name} (${reg.leader.email}, ${reg.leader.phone})`,
			`College: ${reg.college}`,
			`Team: ${reg.teamName}`,
			`Members: ${reg.members.map((m) => m.name).join(", ") || "—"}`,
			`Events: ${reg.eventSlugs.map((s) => getEventBySlug(s)?.title ?? s).join(", ")}`,
			`Amount paid: ${money(reg.amount)} (${reg.paymentRef})`,
			``,
			`Symposium date: 08/10/2026`,
			`${siteSettings.perksNote}`
		];
		const blob = new Blob([lines.join("\n")], { type: "text/plain" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `${reg.id}-evitron2k26.txt`;
		a.click();
		URL.revokeObjectURL(url);
	};
	if (!reg) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-bold text-metal-gradient",
				children: "No confirmation found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "Complete a registration to see your confirmation and entry pass."
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
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 hero-aura",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-3xl px-4 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-12 text-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-3xl font-bold sm:text-4xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-metal-gradient",
						children: "REGISTRATION CONFIRMED"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Keep this registration ID and pass ready at the registration desk on 08/10/2026."
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-3xl gap-6 px-4 py-12 md:grid-cols-[minmax(0,1fr)_auto]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "panel p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "Registration ID"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-bold text-metal-gradient",
					children: reg.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid gap-3 text-sm sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Leader",
							value: reg.leader.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Email",
							value: reg.leader.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "College",
							value: reg.college
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Team",
							value: reg.teamName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Participants",
							value: String(reg.members.length + 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Amount paid",
							value: money(reg.amount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Payment reference",
							value: reg.paymentRef
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
							label: "Registered on",
							value: formatDateTime(reg.createdAt)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
					children: "Events"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2 space-y-1 text-sm text-foreground/85",
					children: reg.eventSlugs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: getEventBySlug(s)?.title ?? s }, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: download,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download summary"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/events",
							children: "Browse events"
						})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "panel flex flex-col items-center gap-3 p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockQr, {
				value: reg.id,
				size: 188
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-xs text-muted-foreground",
				children: [
					"Entry pass placeholder.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Scanning goes live in a later phase."
				]
			})]
		})]
	})] });
}
function Item({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs uppercase tracking-[0.12em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "truncate text-sm text-foreground",
			children: value
		})]
	});
}
//#endregion
export { SuccessPage as component };
