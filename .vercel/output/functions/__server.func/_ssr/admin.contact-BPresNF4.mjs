import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.contact-BPresNF4.js
var import_jsx_runtime = require_jsx_runtime();
function ContactAdmin() {
	const { settings, updateSettings, coordinators } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Contact settings",
				description: "Public email, social handles and venue details.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => toast.success("Contact details saved (mock state)."),
					children: "Save"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel grid gap-4 p-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "c-email",
						children: "Contact email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-email",
						type: "email",
						value: settings.email,
						maxLength: 120,
						onChange: (e) => updateSettings({ email: e.target.value }),
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "c-insta",
						children: "Instagram handle"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "c-insta",
						value: settings.instagram,
						maxLength: 60,
						onChange: (e) => updateSettings({ instagram: e.target.value }),
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "c-venue",
							children: "Venue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "c-venue",
							value: settings.address,
							maxLength: 160,
							onChange: (e) => updateSettings({ address: e.target.value }),
							className: "mt-1.5"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-base font-bold text-metal-gradient",
						children: "Coordinators on the contact page"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: coordinators.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border p-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: c.designation ?? c.role
								}),
								c.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-primary",
									children: c.phone
								})
							]
						}, c.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground",
						children: "TODO(backend): make coordinator records editable once the directory table exists."
					})
				]
			})
		]
	});
}
//#endregion
export { ContactAdmin as component };
