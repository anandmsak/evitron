import { r as siteSettings, t as coordinators } from "./site-5Odp3Cg_.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as Instagram, _ as Phone, b as MapPin, x as Mail } from "../_libs/lucide-react.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CEHZ4aaV.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const groups = [
		{
			label: "Convenor",
			list: coordinators.filter((c) => c.kind === "convenor")
		},
		{
			label: "Faculty Co-ordinators",
			list: coordinators.filter((c) => c.kind === "faculty")
		},
		{
			label: "Student Coordinators",
			list: coordinators.filter((c) => c.kind === "student")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
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
						children: "CONTACT"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base",
					children: "Reach the organising team for registration, abstracts, workshops or campus logistics."
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-14 lg:grid-cols-3",
			children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: g.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-5",
					children: g.list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: c.designation ?? c.role
						}),
						c.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${c.phone.replace(/\s/g, "")}`,
							className: "mt-1 inline-flex items-center gap-2 text-sm text-primary hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 shrink-0" }), c.phone]
						})
					] }, c.id))
				})]
			}, g.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 pb-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-bold text-metal-gradient",
						children: "Write to us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `mailto:${siteSettings.email}`,
						className: "mt-3 inline-flex items-center gap-2 text-sm text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0" }), siteSettings.email]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: siteSettings.instagramUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-3 flex items-center gap-2 text-sm text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4 shrink-0" }), siteSettings.instagram]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "panel p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: "Venue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 flex items-start gap-2 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						siteSettings.college,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						siteSettings.address
					] })]
				})]
			})]
		})
	] });
}
//#endregion
export { ContactPage as component };
