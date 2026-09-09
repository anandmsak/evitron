import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
import { t as mockRegistrations } from "./registrations-YjpLcfq4.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/registrationService-DCq_TYYT.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Deterministic placeholder QR-style block.
* TODO(backend): replace with a real QR encoding the registration id.
*/
function MockQr({ value, size = 168 }) {
	const grid = 21;
	let seed = 0;
	for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) % 1e5;
	const cells = [];
	let s = seed || 7;
	for (let i = 0; i < 441; i++) {
		s = (s * 1103515245 + 12345) % 2147483648;
		cells.push((s >> 16) % 2 === 0);
	}
	const boxes = [
		[0, 0],
		[0, 14],
		[14, 0]
	];
	const finder = (r, c) => {
		for (const [r0, c0] of boxes) {
			if (r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7) {
				const dr = r - r0;
				const dc = c - c0;
				return dr === 0 || dr === 6 || dc === 0 || dc === 6 || dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
			}
			if (r < r0 + 8 && r >= r0 - 1 && c < c0 + 8 && c >= c0 - 1) return false;
		}
		return null;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg bg-foreground p-3",
		style: {
			width: size,
			height: size
		},
		"aria-label": `QR placeholder for ${value}`,
		role: "img",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full w-full",
			style: {
				gridTemplateColumns: `repeat(${grid}, 1fr)`,
				gridTemplateRows: `repeat(${grid}, 1fr)`
			},
			children: cells.map((on, i) => {
				const r = Math.floor(i / grid);
				const c = i % grid;
				const f = finder(r, c);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (f === null ? on : f) ? "bg-background" : "bg-foreground" }, i);
			})
		})
	});
}
function calculateFee(memberCount) {
	const participants = Math.max(1, memberCount);
	return {
		participants,
		perParticipant: siteSettings.feePerParticipant,
		total: participants * siteSettings.feePerParticipant
	};
}
var DRAFT_KEY = "evitron:registration-draft";
var emptyDraft = {
	participant: {
		name: "",
		email: "",
		phone: "",
		college: "",
		department: "",
		year: ""
	},
	teamName: "",
	members: [],
	eventSlugs: []
};
function loadDraft() {
	if (typeof window === "undefined") return null;
	const raw = window.localStorage.getItem(DRAFT_KEY);
	if (!raw) return null;
	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function clearDraft() {
	if (typeof window === "undefined") return;
	window.localStorage.removeItem(DRAFT_KEY);
}
function generateRegistrationId() {
	return `EVT-2K26-${1e3 + mockRegistrations.length + Math.floor(Math.random() * 900)}`;
}
/** TODO(backend): persist to database and return the stored row. */
async function submitRegistration(draft) {
	const { total } = calculateFee(draft.members.length + 1);
	return {
		id: generateRegistrationId(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		leader: {
			name: draft.participant.name,
			email: draft.participant.email,
			phone: draft.participant.phone,
			year: draft.participant.year,
			department: draft.participant.department
		},
		college: draft.participant.college,
		teamName: draft.teamName || "Solo",
		members: draft.members,
		eventSlugs: draft.eventSlugs,
		amount: total,
		paymentStatus: "paid",
		paymentRef: `pay_MOCK_${Math.random().toString(16).slice(2, 8)}`,
		checkedIn: false
	};
}
//#endregion
export { loadDraft as a, emptyDraft as i, calculateFee as n, submitRegistration as o, clearDraft as r, MockQr as t };
