import { n as faqItems, t as faqCategories } from "./faq-CA7MrgTS.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-BdFnC9zG.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 circuit-grid opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold sm:text-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-metal-gradient",
					children: "FAQ"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground sm:text-base",
				children: "Everything participants usually ask before registering."
			})]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-4xl space-y-10 px-4 py-14",
		children: faqCategories.map((cat) => {
			const items = faqItems.filter((f) => f.category === cat);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl font-bold text-metal-gradient",
				children: cat
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-3",
				children: items.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: f.id,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-sm",
						children: f.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm text-muted-foreground",
						children: f.answer
					})]
				}, f.id))
			})] }, cat);
		})
	})] });
}
//#endregion
export { FaqPage as component };
