import { i as __toESM } from "../_runtime.mjs";
import { n as events } from "./events-C3idm_Mi.mjs";
import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
import { t as Input } from "./input-B8Q2ztVi.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { J as ArrowLeft, R as CircleCheck, U as Check, a as Users, o as UserCheck, q as ArrowRight, z as CircleAlert } from "../_libs/lucide-react.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { r as money } from "./format-9o3crDG4.mjs";
import { t as SiteLayout } from "./SiteLayout-BLZX0aQH.mjs";
import { n as objectType, r as stringType, t as arrayType } from "../_libs/zod.mjs";
import { n as useFieldArray, r as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-uGQhAAcS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var memberSchema = objectType({
	name: stringType().min(2, "Name must be at least 2 characters"),
	email: stringType().email("Invalid email address"),
	phone: stringType().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit phone number"),
	year: stringType().min(1, "Year is required"),
	department: stringType().min(2, "Department is required")
});
var registrationSchema = objectType({
	teamName: stringType().optional(),
	leader: memberSchema,
	members: arrayType(memberSchema),
	selectedEvents: arrayType(stringType()).min(1, "Select at least 1 event or workshop")
});
function RegisterPage() {
	const [step, setStep] = (0, import_react.useState)(1);
	const { register, control, handleSubmit, watch, setValue, trigger, formState: { errors } } = useForm({
		resolver: u(registrationSchema),
		defaultValues: {
			teamName: "",
			leader: {
				name: "",
				email: "",
				phone: "",
				year: "",
				department: ""
			},
			members: [],
			selectedEvents: []
		},
		mode: "onChange"
	});
	const { fields, append, remove } = useFieldArray({
		control,
		name: "members"
	});
	const watchSelectedEvents = watch("selectedEvents") || [];
	const selectedTech = watchSelectedEvents.filter((id) => events.find((e) => e.id === id)?.category === "technical");
	const selectedWorkshops = watchSelectedEvents.filter((id) => events.find((e) => e.id === id)?.category === "workshop");
	const selectedNonTech = watchSelectedEvents.filter((id) => events.find((e) => e.id === id)?.category === "non-technical");
	const hasWorkshop = selectedWorkshops.length > 0;
	const hasTech = selectedTech.length > 0;
	const hasNonTech = selectedNonTech.length > 0;
	const isStep2Valid = hasWorkshop || hasTech;
	const handleEventToggle = (eventId) => {
		const clickedEvent = events.find((e) => e.id === eventId);
		if (!clickedEvent) return;
		if (watchSelectedEvents.includes(eventId)) {
			setValue("selectedEvents", watchSelectedEvents.filter((id) => id !== eventId), { shouldValidate: true });
			return;
		}
		if (clickedEvent.category === "workshop") setValue("selectedEvents", [eventId], { shouldValidate: true });
		else if (clickedEvent.category === "technical") {
			const updated = [eventId, watchSelectedEvents.find((id) => events.find((e) => e.id === id)?.category === "non-technical")].filter(Boolean);
			setValue("selectedEvents", updated, { shouldValidate: true });
		} else if (clickedEvent.category === "non-technical") {
			const updated = [watchSelectedEvents.find((id) => events.find((e) => e.id === id)?.category === "technical"), eventId].filter(Boolean);
			setValue("selectedEvents", updated, { shouldValidate: true });
		}
	};
	const handleNextStep1 = async () => {
		if (await trigger("leader")) setStep(2);
	};
	const handleNextStep2 = async () => {
		if (!await trigger("selectedEvents") || !isStep2Valid) return;
		if (hasWorkshop) {
			setValue("members", []);
			setValue("teamName", "");
			setStep(4);
		} else if (hasTech) {
			if (fields.length !== 2) {
				remove();
				append([{
					name: "",
					email: "",
					phone: "",
					year: "",
					department: ""
				}, {
					name: "",
					email: "",
					phone: "",
					year: "",
					department: ""
				}]);
			}
			setStep(3);
		}
	};
	const handleNextStep3 = async () => {
		if (await trigger(["teamName", "members"]) && fields.length === 2) setStep(4);
	};
	const onSubmit = (data) => {
		console.log("Registration Submitted:", data);
		alert("Registration successfully submitted!");
	};
	const totalParticipants = 1 + fields.length;
	const totalAmount = totalParticipants * siteSettings.feePerParticipant;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-4xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl",
					children: "REGISTRATION"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-slate-400",
					children: [money(siteSettings.feePerParticipant), " per participant."]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 grid grid-cols-4 gap-2 text-center text-xs font-semibold uppercase tracking-wider",
				children: [
					"1. Participant",
					"2. Events",
					hasWorkshop ? "3. Team (Skipped)" : "3. Team",
					"4. Summary"
				].map((label, idx) => {
					const stepNum = idx + 1;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `py-2 border-b-2 transition-all ${step === stepNum ? "border-cyan-400 text-cyan-400" : step > stepNum || step === 4 && stepNum === 3 && hasWorkshop ? "border-slate-600 text-slate-300" : "border-slate-800 text-slate-600"}`,
						children: label
					}, label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit(onSubmit),
				className: "space-y-8",
				children: [
					step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-xl font-bold text-white mb-4 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-5 text-cyan-400" }), " Participant / Team Leader Details"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-slate-200",
											children: "Full Name *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("leader.name"),
											placeholder: "John Doe",
											className: "mt-1 bg-slate-950 border-slate-800"
										}),
										errors.leader?.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-400",
											children: errors.leader.name.message
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-slate-200",
											children: "Email Address *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("leader.email"),
											type: "email",
											placeholder: "john@example.com",
											className: "mt-1 bg-slate-950 border-slate-800"
										}),
										errors.leader?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-400",
											children: errors.leader.email.message
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-slate-200",
											children: "Phone Number (10 Digits) *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("leader.phone"),
											placeholder: "9876543210",
											className: "mt-1 bg-slate-950 border-slate-800"
										}),
										errors.leader?.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-400",
											children: errors.leader.phone.message
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-slate-200",
											children: "Year *"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											...register("leader.year"),
											placeholder: "e.g. III Year",
											className: "mt-1 bg-slate-950 border-slate-800"
										}),
										errors.leader?.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-xs text-red-400",
											children: errors.leader.year.message
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "sm:col-span-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-slate-200",
												children: "Department *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...register("leader.department"),
												placeholder: "e.g. ECE",
												className: "mt-1 bg-slate-950 border-slate-800"
											}),
											errors.leader?.department && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-red-400",
												children: errors.leader.department.message
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 flex justify-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									onClick: handleNextStep1,
									className: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})
						]
					}),
					step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-300",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-5 shrink-0 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-amber-200",
										children: "Event Rules & Guidelines:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "list-disc pl-4 space-y-0.5 text-amber-300/90",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"Selecting a ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Workshop" }),
												" registers you ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "SOLO" }),
												" and clears all other event tracks."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"Technical events require a ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "strict team of 3 members" }),
												" (Leader + 2 Members)."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
												"You can pick ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 Technical Event" }),
												" + optional ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1 Non-Technical Event" }),
												"."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Only Non-Technical" }), " selection is strictly NOT allowed."] })
										]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-bold text-white text-lg",
										children: "Technical Events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 mb-4",
										children: "Selecting a new technical event will replace your previous choice."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: events.filter((e) => e.category === "technical").map((item) => {
											const checked = watchSelectedEvents.includes(item.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												onClick: () => handleEventToggle(item.id),
												className: `flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${checked ? "border-cyan-500 bg-cyan-950/30" : "border-slate-800 bg-slate-950/70 hover:border-slate-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked,
													onCheckedChange: () => {},
													className: "mt-1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-slate-100 text-sm",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-slate-400",
													children: item.subtitle
												})] })]
											}, item.id);
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-bold text-white text-lg",
										children: "Workshops (Solo Participation)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 mb-4",
										children: "Selecting a workshop auto-deselects all other technical & non-technical events."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: events.filter((e) => e.category === "workshop").map((item) => {
											const checked = watchSelectedEvents.includes(item.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												onClick: () => handleEventToggle(item.id),
												className: `flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${checked ? "border-purple-500 bg-purple-950/30" : "border-slate-800 bg-slate-950/70 hover:border-slate-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked,
													onCheckedChange: () => {},
													className: "mt-1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-slate-100 text-sm",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-slate-400",
													children: item.subtitle
												})] })]
											}, item.id);
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display font-bold text-white text-lg",
										children: "Non-Technical Events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-slate-400 mb-4",
										children: "Can only be selected alongside a Technical event."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-3 sm:grid-cols-2",
										children: events.filter((e) => e.category === "non-technical").map((item) => {
											const checked = watchSelectedEvents.includes(item.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												onClick: () => handleEventToggle(item.id),
												className: `flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${checked ? "border-cyan-500 bg-cyan-950/30" : "border-slate-800 bg-slate-950/70 hover:border-slate-700"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
													checked,
													onCheckedChange: () => {},
													className: "mt-1"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold text-slate-100 text-sm",
													children: item.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-slate-400",
													children: item.subtitle
												})] })]
											}, item.id);
										})
									})
								]
							}),
							hasNonTech && !hasTech && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-red-500/30 bg-red-950/20 p-3 text-xs text-red-300",
								children: "⚠️ Non-Technical events cannot be selected alone. You must select a Technical Event or a Workshop to proceed."
							}),
							errors.selectedEvents && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-red-400",
								children: errors.selectedEvents.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex justify-between items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setStep(1),
									className: "border-slate-700 text-slate-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 mr-2" }), " Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									disabled: !isStep2Valid,
									onClick: handleNextStep2,
									className: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2 disabled:opacity-40 disabled:cursor-not-allowed",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						]
					}),
					step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-xl font-bold text-white flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-5 text-cyan-400" }), " Team Details (Strictly 3 Members Total)"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-slate-400 mt-1",
								children: "Technical events strictly require 3 participants (1 Team Leader + 2 Team Members)."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "text-slate-200",
								children: "Team Name *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								...register("teamName"),
								placeholder: "Enter your team name",
								className: "mt-1 bg-slate-950 border-slate-800"
							})] }),
							fields.map((field, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "border-b border-slate-800 pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-semibold text-cyan-400 text-sm",
										children: [
											"Team Member ",
											index + 2,
											" (Required)"
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-slate-200 text-xs",
												children: "Full Name *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...register(`members.${index}.name`),
												placeholder: "Member Name",
												className: "mt-1 bg-slate-900 border-slate-800"
											}),
											errors.members?.[index]?.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-red-400",
												children: errors.members[index]?.name?.message
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-slate-200 text-xs",
												children: "Email Address *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...register(`members.${index}.email`),
												type: "email",
												placeholder: "member@example.com",
												className: "mt-1 bg-slate-900 border-slate-800"
											}),
											errors.members?.[index]?.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-red-400",
												children: errors.members[index]?.email?.message
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-slate-200 text-xs",
												children: "Phone Number *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...register(`members.${index}.phone`),
												placeholder: "9876543210",
												className: "mt-1 bg-slate-900 border-slate-800"
											}),
											errors.members?.[index]?.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-red-400",
												children: errors.members[index]?.phone?.message
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-slate-200 text-xs",
												children: "Year *"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												...register(`members.${index}.year`),
												placeholder: "e.g. III Year",
												className: "mt-1 bg-slate-900 border-slate-800"
											}),
											errors.members?.[index]?.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-xs text-red-400",
												children: errors.members[index]?.year?.message
											})
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
													className: "text-slate-200 text-xs",
													children: "Department *"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													...register(`members.${index}.department`),
													placeholder: "e.g. ECE",
													className: "mt-1 bg-slate-900 border-slate-800"
												}),
												errors.members?.[index]?.department && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-xs text-red-400",
													children: errors.members[index]?.department?.message
												})
											]
										})
									]
								})]
							}, field.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setStep(2),
									className: "border-slate-700 text-slate-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 mr-2" }), " Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									onClick: handleNextStep3,
									className: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})
						]
					}),
					step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold text-white",
								children: "Registration Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4 text-sm text-slate-300",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase text-cyan-400",
												children: "Team Leader / Participant"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-bold text-white",
												children: watch("leader.name")
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-slate-400",
												children: [
													watch("leader.email"),
													" • ",
													watch("leader.phone")
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-slate-400",
												children: [
													watch("leader.department"),
													" - ",
													watch("leader.year")
												]
											})
										]
									}),
									fields.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-semibold uppercase text-cyan-400",
											children: [
												"Team Members (",
												fields.length + 1,
												" Total) ",
												watch("teamName") && `— ${watch("teamName")}`
											]
										}), watch("members")?.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "border-t border-slate-800/60 pt-2 text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-semibold text-slate-200",
												children: [
													"Member ",
													idx + 2,
													": ",
													m.name
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-slate-400",
												children: [
													m.email,
													" • ",
													m.phone
												]
											})]
										}, idx))]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400",
										children: ["Type: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-cyan-400 font-semibold",
											children: "Solo Registration (Workshop Track)"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-semibold uppercase text-cyan-400",
											children: "Selected Events & Workshops"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "list-disc pl-4 space-y-1 text-slate-200",
											children: watchSelectedEvents.map((id) => {
												const ev = events.find((e) => e.id === id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
													ev?.title,
													" (",
													ev?.category,
													")"
												] }, id);
											})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex justify-between items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-slate-400",
											children: [
												"Total Payable (",
												totalParticipants,
												" Participant",
												totalParticipants > 1 ? "s" : "",
												" × ",
												money(siteSettings.feePerParticipant),
												")"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl font-bold text-cyan-400",
											children: money(totalAmount)
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8 text-cyan-400" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									type: "button",
									variant: "outline",
									onClick: () => setStep(hasWorkshop ? 2 : 3),
									className: "border-slate-700 text-slate-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4 mr-2" }), " Back"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8",
									children: "Complete Registration"
								})]
							})
						]
					})
				]
			})
		]
	}) });
}
//#endregion
export { RegisterPage as component };
