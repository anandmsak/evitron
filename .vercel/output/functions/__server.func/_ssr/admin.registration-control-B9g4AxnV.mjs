import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.registration-control-B9g4AxnV.js
var import_jsx_runtime = require_jsx_runtime();
function RegistrationControl() {
	const { settings, updateSettings } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
			title: "Registration control",
			description: "Open or close registrations and set the seat cap."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel space-y-5 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-bold text-metal-gradient",
							children: "Registrations"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "When closed, the public register page shows a notice instead of the form."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: settings.registrationOpen ? "default" : "destructive",
							children: settings.registrationOpen ? "Open" : "Closed"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: settings.registrationOpen,
							"aria-label": "Toggle registrations",
							onCheckedChange: (v) => {
								updateSettings({ registrationOpen: v });
								toast.success(v ? "Registrations opened." : "Registrations closed.");
							}
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cap",
						children: "Seat cap"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "cap",
						type: "number",
						min: 0,
						value: settings.seatCap,
						onChange: (e) => updateSettings({ seatCap: Number(e.target.value) }),
						className: "mt-1.5"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "fee-control",
						children: "Fee per participant (₹)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "fee-control",
						type: "number",
						min: 0,
						value: settings.feePerParticipant,
						onChange: (e) => updateSettings({ feePerParticipant: Number(e.target.value) }),
						className: "mt-1.5"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "closed-note",
					children: "Closed notice"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "closed-note",
					rows: 3,
					maxLength: 300,
					value: settings.closedNotice,
					onChange: (e) => updateSettings({ closedNotice: e.target.value }),
					className: "mt-1.5"
				})] })
			]
		})]
	});
}
//#endregion
export { RegistrationControl as component };
