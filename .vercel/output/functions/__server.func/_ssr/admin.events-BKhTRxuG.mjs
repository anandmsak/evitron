import { i as __toESM } from "../_runtime.mjs";
import { t as categoryMeta } from "./events-C3idm_Mi.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useAdmin } from "./AdminStore-leOcVMXS.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { c as Trash2, g as Plus, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AdminPageHeader } from "./AdminPageHeader-CBzumOHN.mjs";
import { t as Badge } from "./badge-D1Dupn2y.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-Dg1urBTx.mjs";
import { t as Switch } from "./switch-Cn1w-cIH.mjs";
import { t as Textarea } from "./textarea-kko37XEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.events-BKhTRxuG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var categories = [
	"technical",
	"workshop",
	"non-technical"
];
function EventsAdmin() {
	const { events, updateEvent, addEvent, removeEvent } = useAdmin();
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [creating, setCreating] = (0, import_react.useState)(false);
	const blank = {
		id: `e-${Date.now()}`,
		slug: "",
		title: "",
		subtitle: "",
		category: "technical",
		tagline: "",
		description: "",
		teamSize: {
			min: 1,
			max: 2
		},
		duration: "",
		venue: "",
		rules: [],
		schedule: [],
		prizes: [],
		faq: [],
		coordinatorIds: [],
		active: true
	};
	const save = (draft) => {
		if (!draft.title.trim() || !draft.slug.trim()) {
			toast.error("Title and slug are required.");
			return;
		}
		if (creating) {
			addEvent(draft);
			toast.success("Event created (mock state).");
		} else {
			updateEvent(draft.id, draft);
			toast.success("Event updated (mock state).");
		}
		setEditing(null);
		setCreating(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPageHeader, {
				title: "Events",
				description: "Create, edit and retire events. Changes live in mock state only.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: () => {
						setCreating(true);
						setEditing(blank);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " New event"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel flex flex-col gap-3 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate font-display text-base font-bold text-metal-gradient",
									children: e.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-xs text-muted-foreground",
									children: e.subtitle
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "outline",
								className: "shrink-0 border-primary/40 text-primary",
								children: categoryMeta[e.category].label.split(" ")[0]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "line-clamp-2 text-sm text-muted-foreground",
							children: e.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-center justify-between gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: e.active,
									onCheckedChange: (v) => updateEvent(e.id, { active: v }),
									"aria-label": `Toggle ${e.title}`
								}), e.active ? "Live" : "Hidden"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									onClick: () => {
										setCreating(false);
										setEditing(e);
									},
									children: "Edit"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									"aria-label": `Delete ${e.title}`,
									onClick: () => {
										removeEvent(e.id);
										toast.success("Event removed (mock state).");
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							})]
						})
					]
				}, e.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventDialog, {
				event: editing,
				creating,
				onClose: () => {
					setEditing(null);
					setCreating(false);
				},
				onSave: save
			})
		]
	});
}
function EventDialog({ event, creating, onClose, onSave }) {
	const [draft, setDraft] = (0, import_react.useState)(event);
	if (event && (!draft || draft.id !== event.id)) setDraft(event);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: event !== null,
		onOpenChange: (v) => !v && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[85vh] overflow-y-auto sm:max-w-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-metal-gradient",
					children: creating ? "New event" : "Edit event"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Mock CRUD — nothing is persisted yet." })] }),
				draft && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ev-title",
									children: "Title"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ev-title",
									value: draft.title,
									maxLength: 60,
									onChange: (e) => setDraft({
										...draft,
										title: e.target.value
									}),
									className: "mt-1.5"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ev-slug",
									children: "Slug"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ev-slug",
									value: draft.slug,
									maxLength: 60,
									onChange: (e) => setDraft({
										...draft,
										slug: e.target.value
									}),
									className: "mt-1.5"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ev-subtitle",
									children: "Subtitle"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ev-subtitle",
									value: draft.subtitle,
									maxLength: 80,
									onChange: (e) => setDraft({
										...draft,
										subtitle: e.target.value
									}),
									className: "mt-1.5"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: draft.category,
									onValueChange: (v) => setDraft({
										...draft,
										category: v
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "mt-1.5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: c,
										children: categoryMeta[c].label
									}, c)) })]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ev-duration",
									children: "Duration"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ev-duration",
									value: draft.duration,
									maxLength: 80,
									onChange: (e) => setDraft({
										...draft,
										duration: e.target.value
									}),
									className: "mt-1.5"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "ev-venue",
									children: "Venue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "ev-venue",
									value: draft.venue,
									maxLength: 80,
									onChange: (e) => setDraft({
										...draft,
										venue: e.target.value
									}),
									className: "mt-1.5"
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ev-tagline",
							children: "Tagline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "ev-tagline",
							value: draft.tagline,
							maxLength: 120,
							onChange: (e) => setDraft({
								...draft,
								tagline: e.target.value
							}),
							className: "mt-1.5"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ev-desc",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "ev-desc",
							value: draft.description,
							maxLength: 800,
							rows: 4,
							onChange: (e) => setDraft({
								...draft,
								description: e.target.value
							}),
							className: "mt-1.5"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "ev-rules",
							children: "Rules (one per line)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							id: "ev-rules",
							value: draft.rules.join("\n"),
							rows: 4,
							onChange: (e) => setDraft({
								...draft,
								rules: e.target.value.split("\n")
							}),
							className: "mt-1.5"
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: onClose,
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => draft && onSave({
						...draft,
						rules: draft.rules.filter(Boolean)
					}),
					children: "Save"
				})] })
			]
		})
	});
}
//#endregion
export { EventsAdmin as component };
