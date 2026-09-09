import { t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { n as registrationTrend } from "./registrations-YjpLcfq4.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { O as IndianRupee, T as ListChecks, a as Users, r as Wallet } from "../_libs/lucide-react.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { r as money } from "./format-9o3crDG4.mjs";
import { a as Line, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-mK8AZYJo.js
var import_jsx_runtime = require_jsx_runtime();
function Dashboard() {
	const { registrations, events } = useAdmin();
	const paid = registrations.filter((r) => r.paymentStatus === "paid");
	const participants = registrations.reduce((sum, r) => sum + r.members.length + 1, 0);
	const revenue = paid.reduce((sum, r) => sum + r.amount, 0);
	const pending = registrations.filter((r) => r.paymentStatus !== "paid").length;
	const perEvent = events.map((e) => ({
		name: e.title,
		count: registrations.filter((r) => r.eventSlugs.includes(e.slug)).length
	}));
	const categoryTotals = [
		"technical",
		"workshop",
		"non-technical"
	].map((cat) => ({
		name: categoryMeta[cat].label,
		count: events.filter((e) => e.category === cat).reduce((sum, e) => sum + registrations.filter((r) => r.eventSlugs.includes(e.slug)).length, 0)
	}));
	const metrics = [
		{
			label: "Registrations",
			value: String(registrations.length),
			icon: ListChecks
		},
		{
			label: "Participants",
			value: String(participants),
			icon: Users
		},
		{
			label: "Revenue collected",
			value: money(revenue),
			icon: IndianRupee
		},
		{
			label: "Payments pending",
			value: String(pending),
			icon: Wallet
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Dashboard",
				description: "Live snapshot of EVITRON 2K26 registrations (mock data)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.icon, { className: "size-5 shrink-0 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl font-bold text-metal-gradient",
							children: m.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.14em] text-muted-foreground",
							children: m.label
						})
					]
				}, m.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-bold text-metal-gradient",
						children: "Registrations over time"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
								data: registrationTrend,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--border)",
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "day",
										stroke: "var(--muted-foreground)",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "var(--muted-foreground)",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 8,
										color: "var(--popover-foreground)"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
										type: "monotone",
										dataKey: "count",
										stroke: "var(--chart-1)",
										strokeWidth: 2,
										dot: false
									})
								]
							})
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-bold text-metal-gradient",
						children: "Entries per track"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 h-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
								data: categoryTotals,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
										stroke: "var(--border)",
										strokeDasharray: "3 3"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
										dataKey: "name",
										stroke: "var(--muted-foreground)",
										fontSize: 11
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
										stroke: "var(--muted-foreground)",
										fontSize: 12
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
										background: "var(--popover)",
										border: "1px solid var(--border)",
										borderRadius: 8,
										color: "var(--popover-foreground)"
									} }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
										dataKey: "count",
										fill: "var(--chart-2)",
										radius: [
											4,
											4,
											0,
											0
										]
									})
								]
							})
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-base font-bold text-metal-gradient",
					children: "Entries per event"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: perEvent.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)_auto] items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm text-foreground/85",
								children: e.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 rounded-full bg-muted",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block h-2 rounded-full bg-primary",
									style: { width: `${Math.min(100, e.count * 20)}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-sm tabular-nums text-muted-foreground",
								children: e.count
							})
						]
					}, e.name))
				})]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
