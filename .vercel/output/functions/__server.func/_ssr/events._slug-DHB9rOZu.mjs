import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._slug-DHB9rOZu.js
var import_jsx_runtime = require_jsx_runtime();
function EventNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-bold text-metal-gradient",
				children: "Event not found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground",
				children: "This event is not part of EVITRON 2K26, or the link has changed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/events",
					children: "Back to all events"
				})
			})
		]
	}) });
}
//#endregion
export { EventNotFound as t };
