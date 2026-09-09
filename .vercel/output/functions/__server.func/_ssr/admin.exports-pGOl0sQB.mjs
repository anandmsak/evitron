import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { j as Download } from "../_libs/lucide-react.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { n as toCsv, t as downloadCsv } from "./csv-BQeH6m_h.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.exports-pGOl0sQB.js
var import_jsx_runtime = require_jsx_runtime();
function ExportsAdmin() {
	const { registrations, events } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
			title: "Exports",
			description: "Download CSV snapshots of the current mock data."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [
				{
					title: "All registrations",
					description: "One row per registration with leader, events, amount and payment status.",
					run: () => downloadCsv("evitron-registrations.csv", toCsv(registrations.map((r) => ({
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
						payment_status: r.paymentStatus
					}))))
				},
				{
					title: "Participants",
					description: "One row per person, including team members.",
					run: () => downloadCsv("evitron-participants.csv", toCsv(registrations.flatMap((r) => [r.leader, ...r.members].map((p, i) => ({
						registration_id: r.id,
						role: i === 0 ? "Leader" : "Member",
						name: p.name,
						email: p.email,
						phone: p.phone,
						year: p.year,
						department: p.department,
						college: r.college
					})))))
				},
				{
					title: "Event-wise counts",
					description: "Registration count per event, useful for hall allocation.",
					run: () => downloadCsv("evitron-event-counts.csv", toCsv(events.map((e) => ({
						event: e.title,
						category: e.category,
						venue: e.venue,
						registrations: registrations.filter((r) => r.eventSlugs.includes(e.slug)).length
					}))))
				},
				{
					title: "Payments",
					description: "Transaction references with amounts and status.",
					run: () => downloadCsv("evitron-payments.csv", toCsv(registrations.map((r) => ({
						payment_ref: r.paymentRef,
						registration_id: r.id,
						amount: r.amount,
						status: r.paymentStatus,
						created_at: r.createdAt
					}))))
				}
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel flex flex-col gap-3 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-bold text-metal-gradient",
						children: x.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: x.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-auto self-start",
						variant: "outline",
						onClick: x.run,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Download CSV"]
					})
				]
			}, x.title))
		})]
	});
}
//#endregion
export { ExportsAdmin as component };
