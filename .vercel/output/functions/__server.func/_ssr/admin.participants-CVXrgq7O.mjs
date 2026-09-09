import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { j as Download, m as Search } from "../_libs/lucide-react.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { n as toCsv, t as downloadCsv } from "./csv-BQeH6m_h.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.participants-CVXrgq7O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ParticipantsAdmin() {
	const { registrations } = useAdmin();
	const [query, setQuery] = (0, import_react.useState)("");
	const participants = (0, import_react.useMemo)(() => registrations.flatMap((r) => [{
		...r.leader,
		role: "Leader",
		registrationId: r.id,
		college: r.college,
		team: r.teamName
	}, ...r.members.map((m) => ({
		...m,
		role: "Member",
		registrationId: r.id,
		college: r.college,
		team: r.teamName
	}))]), [registrations]);
	const rows = participants.filter((p) => {
		const q = query.trim().toLowerCase();
		return q.length === 0 || [
			p.name,
			p.email,
			p.college,
			p.registrationId
		].join(" ").toLowerCase().includes(q);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Participants",
				description: `${participants.length} individual participants across all registrations.`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => downloadCsv("evitron-participants.csv", toCsv(rows.map((p) => ({
						registration_id: p.registrationId,
						name: p.name,
						role: p.role,
						email: p.email,
						phone: p.phone,
						year: p.year,
						department: p.department,
						college: p.college,
						team: p.team
					})))),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Export CSV"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: query,
						onChange: (e) => setQuery(e.target.value),
						maxLength: 80,
						placeholder: "Search participants",
						className: "pl-9"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Name" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Role" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "College" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Team" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Registration" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-sm",
						children: [p.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "block text-xs text-muted-foreground",
							children: [
								p.department,
								" · ",
								p.year
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: p.role === "Leader" ? "default" : "secondary",
						children: p.role
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
						className: "text-xs text-muted-foreground",
						children: [p.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: p.phone
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "max-w-48 truncate text-sm",
						children: p.college
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-sm",
						children: p.team
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-mono text-xs",
						children: p.registrationId
					})
				] }, `${p.registrationId}-${p.email}`)) })] })
			})
		]
	});
}
//#endregion
export { ParticipantsAdmin as component };
