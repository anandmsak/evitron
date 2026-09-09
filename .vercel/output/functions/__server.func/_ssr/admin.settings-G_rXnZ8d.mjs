import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.settings-G_rXnZ8d.js
var import_jsx_runtime = require_jsx_runtime();
function SiteSettingsAdmin() {
	const { settings, updateSettings } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
			title: "Site settings",
			description: "Names, tagline and perks shown across the public site.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => toast.success("Site settings saved (mock state)."),
				children: "Save"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel grid gap-4 p-5 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "s-name",
					children: "Symposium name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "s-name",
					value: settings.eventName,
					maxLength: 60,
					onChange: (e) => updateSettings({ eventName: e.target.value }),
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "s-dept",
					children: "Department"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "s-dept",
					value: settings.department,
					maxLength: 80,
					onChange: (e) => updateSettings({ department: e.target.value }),
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "s-college",
					children: "College"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "s-college",
					value: settings.college,
					maxLength: 120,
					onChange: (e) => updateSettings({ college: e.target.value }),
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "s-assoc",
					children: "In association with"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "s-assoc",
					value: settings.association,
					maxLength: 80,
					onChange: (e) => updateSettings({ association: e.target.value }),
					className: "mt-1.5"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "s-tagline",
						children: "Tagline"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "s-tagline",
						value: settings.tagline,
						maxLength: 140,
						onChange: (e) => updateSettings({ tagline: e.target.value }),
						className: "mt-1.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "s-perks",
						children: "Included with registration (one per line)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						id: "s-perks",
						rows: 4,
						value: settings.perks.join("\n"),
						onChange: (e) => updateSettings({ perks: e.target.value.split("\n") }),
						className: "mt-1.5"
					})]
				})
			]
		})]
	});
}
//#endregion
export { SiteSettingsAdmin as component };
