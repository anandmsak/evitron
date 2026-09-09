import { i as __toESM } from "../_runtime.mjs";
import { i as getEventBySlug } from "./events-C3idm_Mi.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Separator } from "./separator-B3hsz7IR.mjs";
import { A as Eye, j as Download, m as Search } from "../_libs/lucide-react.mjs";
import { a as SheetTitle, i as SheetHeader, n as SheetContent, r as SheetDescription, t as Sheet } from "./sheet-B9-Owt3j.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { n as formatDateTime, r as money } from "./format-9o3crDG4.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { n as toCsv, t as downloadCsv } from "./csv-BQeH6m_h.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.registrations-Ch87jg_b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegistrationsPage() {
	const { registrations, events } = useAdmin();
	const [query, setQuery] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("all");
	const [eventSlug, setEventSlug] = (0, import_react.useState)("all");
	const [open, setOpen] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => registrations.filter((r) => {
		const q = query.trim().toLowerCase();
		const matchesQuery = q.length === 0 || [
			r.id,
			r.leader.name,
			r.leader.email,
			r.college,
			r.teamName
		].join(" ").toLowerCase().includes(q);
		const matchesStatus = status === "all" || r.paymentStatus === status;
		const matchesEvent = eventSlug === "all" || r.eventSlugs.includes(eventSlug);
		return matchesQuery && matchesStatus && matchesEvent;
	}), [
		registrations,
		query,
		status,
		eventSlug
	]);
	const exportCsv = () => {
		downloadCsv("evitron-registrations.csv", toCsv(rows.map((r) => ({
			id: r.id,
			created_at: r.createdAt,
			leader: r.leader.name,
			email: r.leader.email,
			phone: r.leader.phone,
			college: r.college,
			team: r.teamName,
			participants: r.members.length + 1,
			events: r.eventSlugs.join(" | "),
			amount: r.amount,
			payment_status: r.paymentStatus,
			payment_ref: r.paymentRef
		}))));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Registrations",
				description: `${rows.length} of ${registrations.length} records shown.`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: exportCsv,
					variant: "outline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export CSV"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel grid gap-3 p-4 sm:grid-cols-[minmax(0,1fr)_auto_auto]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search ID, name, email, college",
							className: "pl-9",
							maxLength: 80
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: status,
						onValueChange: setStatus,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-full sm:w-40",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Payment status" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "all",
								children: "All statuses"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "paid",
								children: "Paid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "pending",
								children: "Pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "failed",
								children: "Failed"
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: eventSlug,
						onValueChange: setEventSlug,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
							className: "w-full sm:w-52",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Event" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: "all",
							children: "All events"
						}), events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
							value: e.slug,
							children: e.title
						}, e.id))] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "ID" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Leader" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "College" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Events" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Amount"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: r.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm",
						children: r.leader.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted-foreground",
						children: r.leader.email
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "max-w-48 truncate text-sm",
						children: r.college
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-xs text-muted-foreground",
						children: r.eventSlugs.map((s) => getEventBySlug(s)?.title ?? s).join(", ")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-sm tabular-nums",
						children: money(r.amount)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: r.paymentStatus }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						"aria-label": "View",
						onClick: () => setOpen(r),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
					}) })
				] }, r.id)), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 7,
					className: "py-10 text-center text-sm text-muted-foreground",
					children: "No registrations match these filters."
				}) })] })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: open !== null,
				onOpenChange: (v) => !v && setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
					className: "w-full overflow-y-auto sm:max-w-md",
					children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
						className: "font-display text-metal-gradient",
						children: open.id
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetDescription, { children: ["Registered ", formatDateTime(open.createdAt)] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 px-4 pb-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Leader",
								value: open.leader.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Email",
								value: open.leader.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Phone",
								value: open.leader.phone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "College",
								value: open.college
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Department / Year",
								value: `${open.leader.department} · ${open.leader.year}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Team",
								value: open.teamName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.12em] text-muted-foreground",
								children: "Members"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-1 space-y-1",
								children: [open.members.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "text-muted-foreground",
									children: "Solo entry"
								}), open.members.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									m.name,
									" — ",
									m.email
								] }, m.email))]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.12em] text-muted-foreground",
								children: "Events"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: open.eventSlugs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "outline",
									className: "border-primary/40 text-primary",
									children: getEventBySlug(s)?.title ?? s
								}, s))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Amount",
								value: money(open.amount)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Payment reference",
								value: open.paymentRef
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-[0.12em] text-muted-foreground",
									children: "Status"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: open.paymentStatus })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
								label: "Checked in",
								value: open.checkedIn ? "Yes" : "Not yet"
							})
						]
					})] })
				})
			})
		]
	});
}
function StatusBadge({ status }) {
	if (status === "paid") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		className: "bg-primary/20 text-primary",
		children: "Paid"
	});
	if (status === "pending") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "secondary",
		children: "Pending"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "destructive",
		children: "Failed"
	});
}
function Detail({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs uppercase tracking-[0.12em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "truncate text-foreground",
			children: value || "—"
		})]
	});
}
//#endregion
export { RegistrationsPage as component };
