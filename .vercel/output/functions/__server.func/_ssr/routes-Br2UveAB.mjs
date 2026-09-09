import { i as __toESM } from "../_runtime.mjs";
import { r as eventsByCategory, t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { n as importantDates, r as siteSettings } from "./site-5Odp3Cg_.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { N as Cpu, O as IndianRupee, V as ChevronRight, W as CalendarDays, d as Sparkles, i as UtensilsCrossed, k as Gamepad2, n as Wrench, s as Trophy } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { r as money } from "./format-9o3crDG4.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { n as SectionHeading, t as EventCard } from "./SectionHeading-CA7xoWBX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Br2UveAB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function diff(target) {
	const ms = new Date(target).getTime() - Date.now();
	const clamped = Math.max(0, ms);
	return {
		days: Math.floor(clamped / 864e5),
		hours: Math.floor(clamped % 864e5 / 36e5),
		minutes: Math.floor(clamped % 36e5 / 6e4),
		seconds: Math.floor(clamped % 6e4 / 1e3)
	};
}
function Countdown({ target }) {
	const [time, setTime] = (0, import_react.useState)(() => diff(target));
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		setTime(diff(target));
		const id = setInterval(() => setTime(diff(target)), 1e3);
		return () => clearInterval(id);
	}, [target]);
	const cells = [
		["Days", time.days],
		["Hours", time.hours],
		["Minutes", time.minutes],
		["Seconds", time.seconds]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2 sm:gap-3",
		children: cells.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel px-2 py-3 text-center sm:px-4 sm:py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-display text-2xl font-bold tabular-nums text-metal-gradient sm:text-4xl",
				children: mounted ? String(value).padStart(2, "0") : "--"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs",
				children: label
			})]
		}, label))
	});
}
var categoryIcon = {
	technical: Cpu,
	workshop: Wrench,
	"non-technical": Gamepad2
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-[#030712] py-20 lg:py-28 text-white border-b border-slate-800/80",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[140px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[10%] right-[15%] w-[450px] h-[450px] bg-purple-600/30 rounded-full blur-[130px]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[25%] left-[35%] w-[350px] h-[350px] bg-blue-600/25 rounded-full blur-[100px]" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#1e293b35_1px,transparent_1px),linear-gradient(to_bottom,#1e293b35_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto max-w-5xl px-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/50 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-cyan-400 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-wide uppercase",
								children: siteSettings.college
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto tracking-wide font-light",
							children: siteSettings.accreditation
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400",
							children: [
								siteSettings.department,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-purple-400",
									children: ["• ", siteSettings.association]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative my-8 py-2 flex justify-center items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo.png",
								alt: "EVITRON 2K26",
								className: "relative z-10 h-36 sm:h-52 md:h-64 w-auto object-contain filter drop-shadow-[0_0_45px_rgba(6,182,212,0.75)] hover:drop-shadow-[0_0_65px_rgba(168,85,247,0.85)] transition-all duration-500 hover:scale-105"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm sm:text-lg tracking-[0.35em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 uppercase drop-shadow",
							children: "A National Level Technical Symposium"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto mt-10 max-w-xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.25em] text-slate-400 font-medium",
								children: "Countdown to Symposium Day"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, { target: siteSettings.symposiumDate })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "h-12 px-8 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-base rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/register",
									className: "flex items-center gap-2",
									children: [
										"Register for ",
										money(siteSettings.feePerParticipant),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "h-12 px-8 border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-500 text-base rounded-xl backdrop-blur-md transition-all duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/events",
									children: "Explore Events"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "px-3.5 py-1.5 bg-slate-900/90 text-slate-300 border border-slate-800 gap-1.5 rounded-full shadow-inner",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "size-3.5 text-cyan-400" }),
									" ",
									siteSettings.perksNote
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								variant: "secondary",
								className: "px-3.5 py-1.5 bg-slate-900/90 text-slate-300 border border-slate-800 gap-1.5 rounded-full shadow-inner",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "size-3.5 text-amber-400" }), " Exciting Cash Prizes"]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "About the symposium",
				title: "One day, three tracks, a full campus of electronics",
				description: "EVITRON 2K26 is the national level technical symposium of the Department of Electronics and Communication Engineering at Mahendra Engineering College, hosted with VELOCITY. It brings together paper presentations, live project demos, an autonomous bot race, industry-grade workshops and fast-paced non-technical contests."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-3",
				children: [
					{
						k: "10",
						v: "Events across three tracks"
					},
					{
						k: "3",
						v: "Hands-on industry workshops"
					},
					{
						k: money(siteSettings.feePerParticipant),
						v: "Per participant, all inclusive"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-lg hover:border-cyan-500/30 transition-all",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500",
						children: item.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-slate-400",
						children: item.v
					})]
				}, item.v))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-slate-800/80 bg-slate-950/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Tracks",
					title: "Pick your track"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [
						"technical",
						"workshop",
						"non-technical"
					].map((cat) => {
						const Icon = categoryIcon[cat];
						const list = eventsByCategory(cat);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col p-6 border border-slate-800/80 bg-slate-900/50 rounded-2xl hover:border-cyan-500/40 transition-all shadow-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-7 shrink-0 text-cyan-400" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-bold text-slate-100",
									children: categoryMeta[cat].label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-slate-400",
									children: categoryMeta[cat].blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2 text-sm text-slate-300",
									children: list.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "min-w-0",
											children: [e.title, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-slate-500",
												children: [" — ", e.subtitle]
											})]
										})]
									}, e.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "ghost",
									size: "sm",
									className: "mt-6 self-start px-0 text-cyan-400 hover:text-cyan-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/events",
										children: [
											"View ",
											list.length,
											" events →"
										]
									})
								})
							]
						}, cat);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Technical events",
				title: "Where the marks are won",
				description: "Every technical event carries cash prizes and merit certificates."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: eventsByCategory("technical").map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-slate-800/80 bg-slate-950/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Workshops",
					title: "Hands-on with industry tooling",
					description: "Limited seats per workshop, allotted first come first served."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: eventsByCategory("workshop").map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCard, { event: e }, e.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Important dates",
					title: "Mark the calendar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-3",
					children: importantDates.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-6 shrink-0 text-cyan-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs uppercase tracking-[0.2em] text-slate-400",
								children: d.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-2xl font-bold text-slate-100",
								children: new Date(d.date).toLocaleDateString("en-GB", {
									day: "2-digit",
									month: "2-digit",
									year: "numeric"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-cyan-400 mt-1",
								children: d.weekday
							})
						]
					}, d.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "size-6 shrink-0 text-cyan-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-bold text-slate-100",
								children: "Registration fee"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-slate-400",
								children: [money(siteSettings.feePerParticipant), " per participant. Teams pay for all members in a single transaction."]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "size-6 shrink-0 text-cyan-400" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-lg font-bold text-slate-100",
								children: "What's included"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm text-slate-400",
								children: [siteSettings.perksNote, " Every participant also receives an e-certificate."]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-t border-slate-800/80 bg-slate-950 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-t from-cyan-600/10 via-purple-600/10 to-transparent pointer-events-none",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-3xl px-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-300",
						children: "CREATE. INNOVATE. ELEVATE."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-slate-400",
						children: "Registration closes 01/10/2026. Paper abstracts close 27/09/2026."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "mt-8 h-12 px-10 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/register",
							children: "Register Now"
						})
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
