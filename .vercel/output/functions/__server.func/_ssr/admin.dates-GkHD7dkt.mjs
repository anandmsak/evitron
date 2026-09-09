import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as formatDate } from "./format-9o3crDG4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.dates-GkHD7dkt.js
var import_jsx_runtime = require_jsx_runtime();
function DatesAdmin() {
	const { dates, updateDate } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
			title: "Important dates",
			description: "Symposium day, registration close and abstract submission deadline.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => toast.success("Dates saved (mock state)."),
				children: "Save"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
			children: dates.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel space-y-3 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `label-${d.id}`,
						children: "Label"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `label-${d.id}`,
						value: d.label,
						maxLength: 60,
						onChange: (e) => updateDate(d.id, { label: e.target.value }),
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: `date-${d.id}`,
						children: "Date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: `date-${d.id}`,
						type: "date",
						value: d.date.slice(0, 10),
						onChange: (e) => updateDate(d.id, { date: e.target.value }),
						className: "mt-1.5"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: ["Shown on site as ", formatDate(d.date)]
					})
				]
			}, d.id))
		})]
	});
}
//#endregion
export { DatesAdmin as component };
