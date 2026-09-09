import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { c as Trash2, g as Plus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.faq-DYScZPJT.js
var import_jsx_runtime = require_jsx_runtime();
function FaqAdmin() {
	const { faq, addFaq, updateFaq, removeFaq } = useAdmin();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
			title: "FAQ manager",
			description: "Questions shown on the public FAQ page, grouped by category.",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => {
					addFaq({
						id: `faq-${Date.now()}`,
						category: "General",
						question: "New question",
						answer: ""
					});
					toast.success("Question added (mock state).");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " Add question"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: faq.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel space-y-3 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `cat-${f.id}`,
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: `cat-${f.id}`,
								value: f.category,
								maxLength: 40,
								onChange: (e) => updateFaq(f.id, { category: e.target.value }),
								className: "mt-1.5"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: `q-${f.id}`,
								children: "Question"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: `q-${f.id}`,
								value: f.question,
								maxLength: 160,
								onChange: (e) => updateFaq(f.id, { question: e.target.value }),
								className: "mt-1.5"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": "Delete question",
								onClick: () => removeFaq(f.id),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: `a-${f.id}`,
					children: "Answer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: `a-${f.id}`,
					value: f.answer,
					maxLength: 800,
					rows: 3,
					onChange: (e) => updateFaq(f.id, { answer: e.target.value }),
					className: "mt-1.5"
				})] })]
			}, f.id))
		})]
	});
}
//#endregion
export { FaqAdmin as component };
