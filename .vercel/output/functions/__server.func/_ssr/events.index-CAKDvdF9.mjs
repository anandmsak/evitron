import { r as eventsByCategory, t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { n as SectionHeading, t as EventCard } from "./SectionHeading-CA7xoWBX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events.index-CAKDvdF9.js
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"technical",
	"workshop",
	"non-technical"
];
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 circuit-grid opacity-50",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold sm:text-5xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-metal-gradient",
					children: "EVENTS"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base",
				children: "Ten events across three tracks. Select one technical event, and add either one non-technical event or one workshop."
			})]
		})]
	}), categories.map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: i % 2 === 1 ? "border-y border-border/70 bg-surface/30" : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: `Track ${i + 1}`,
				title: categoryMeta[cat].label,
				description: categoryMeta[cat].blurb
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: eventsByCategory(cat).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
			})]
		})
	}, cat))] });
}
//#endregion
export { EventsPage as component };
