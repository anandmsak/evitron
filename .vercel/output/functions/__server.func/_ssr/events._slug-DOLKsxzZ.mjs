import { t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { n as useAppData } from "./appDataStore-C2muHOdz.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { G as CalendarClock, _ as Phone, a as Users, b as MapPin, s as Trophy } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { t as Route } from "./events._slug-BBmg4mc8.mjs";
import { t as EventNotFound } from "./events._slug-DHB9rOZu.mjs";
import { i as AccordionTrigger, n as AccordionContent, r as AccordionItem, t as Accordion } from "./accordion-uwqhymWC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._slug-DOLKsxzZ.js
var import_jsx_runtime = require_jsx_runtime();
function EventDetail() {
	const { slug } = Route.useLoaderData();
	const { events, coordinators } = useAppData();
	const event = events.find((e) => e.slug === slug);
	if (!event) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventNotFound, {});
	const coords = event.coordinatorIds.map((id) => coordinators.find((c) => c.id === id)).filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden border-b border-border/70",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 circuit-grid opacity-50",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 hero-aura opacity-70",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/events",
						className: "text-xs uppercase tracking-[0.2em] text-primary hover:underline",
						children: "← All events"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "ml-3 border-primary/40 text-primary",
						children: categoryMeta[event.category].label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 font-display text-3xl font-bold sm:text-5xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-metal-gradient",
							children: event.title
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base text-foreground/85",
						children: event.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base",
						children: event.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "panel inline-flex items-center gap-2 px-4 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 shrink-0 text-primary" }), event.teamSize.min === event.teamSize.max ? `${event.teamSize.max} participant` : `${event.teamSize.min}–${event.teamSize.max} members`]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "panel inline-flex items-center gap-2 px-4 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarClock, { className: "size-4 shrink-0 text-primary" }), event.duration]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "panel inline-flex items-center gap-2 px-4 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-primary" }), event.venue]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							children: "Register for this event"
						})
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold text-metal-gradient",
					children: "Rules"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-foreground/85",
					children: event.rules.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0",
							children: r
						})]
					}, r))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold text-metal-gradient",
						children: "Schedule"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3",
						children: event.schedule.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "panel grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 font-display text-sm font-semibold text-primary",
								children: s.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 text-sm text-foreground/85",
								children: s.item
							})]
						}, s.time))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: "Timings are indicative and will be confirmed closer to the symposium."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold text-metal-gradient",
					children: "Prizes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm text-foreground/85",
					children: event.prizes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0",
							children: p
						})]
					}, p))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold text-metal-gradient",
					children: "FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-3",
					children: event.faq.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left text-sm",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm text-muted-foreground",
							children: f.a
						})]
					}, f.q))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: "Event coordinators"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-4",
					children: coords.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: c.role
						}),
						c.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${c.phone.replace(/\s/g, "")}`,
							className: "mt-1 inline-flex items-center gap-2 text-sm text-primary hover:underline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 shrink-0" }), c.phone]
						})
					] }, c.id))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-bold text-metal-gradient",
					children: "Selection rule"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "One technical event is mandatory, plus either one non-technical event or one workshop."
				})]
			})]
		})]
	})] });
}
//#endregion
export { EventDetail as component };
