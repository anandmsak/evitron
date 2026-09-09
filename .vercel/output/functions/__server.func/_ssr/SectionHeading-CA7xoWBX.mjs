import { t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as Clock, K as ArrowUpRight, a as Users } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-CA7xoWBX.js
var import_jsx_runtime = require_jsx_runtime();
function EventCard({ event }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/events/$slug",
		params: { slug: event.slug },
		className: "panel group flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:glow-ring",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "truncate font-display text-lg font-bold tracking-wide text-metal-gradient",
						children: event.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-sm text-muted-foreground",
						children: event.subtitle
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-1 size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-foreground/80",
				children: event.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "border-primary/40 text-primary",
						children: categoryMeta[event.category].label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5 shrink-0" }), event.teamSize.min === event.teamSize.max ? `${event.teamSize.max} member` : `${event.teamSize.min}-${event.teamSize.max} members`]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 shrink-0" }), event.duration]
					})
				]
			})
		]
	});
}
function SectionHeading({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold uppercase tracking-[0.28em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-2xl font-bold sm:text-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-metal-gradient",
					children: title
				})
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground sm:text-base",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeading as n, EventCard as t };
