import { i as __toESM } from "../_runtime.mjs";
import { n as events } from "./events-C3idm_Mi.mjs";
import { n as faqItems } from "./faq-CA7MrgTS.mjs";
import { n as importantDates, r as siteSettings, t as coordinators } from "./site-5Odp3Cg_.mjs";
import { n as paymentSettings } from "./paymentService-BxA06OAo.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/appDataStore-C2muHOdz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var STORAGE_KEY = "evitron:app_store_v2";
var defaultData = {
	events,
	coordinators,
	dates: importantDates,
	faq: faqItems,
	settings: siteSettings,
	payment: paymentSettings
};
function loadState() {
	if (typeof window === "undefined") return defaultData;
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return defaultData;
		const parsed = JSON.parse(raw);
		return {
			events: parsed.events || events,
			coordinators: parsed.coordinators || coordinators,
			dates: parsed.dates || importantDates,
			faq: parsed.faq || faqItems,
			settings: {
				...siteSettings,
				...parsed.settings || {}
			},
			payment: {
				...paymentSettings,
				...parsed.payment || {}
			}
		};
	} catch {
		return defaultData;
	}
}
var currentState = loadState();
var listeners = /* @__PURE__ */ new Set();
function saveAndNotify() {
	if (typeof window !== "undefined") try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
	} catch {}
	listeners.forEach((listener) => listener());
}
var appDataStore = {
	getState() {
		return currentState;
	},
	subscribe(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	},
	updateEvent(id, patch) {
		currentState = {
			...currentState,
			events: currentState.events.map((e) => e.id === id ? {
				...e,
				...patch
			} : e)
		};
		saveAndNotify();
	},
	addEvent(event) {
		currentState = {
			...currentState,
			events: [...currentState.events, event]
		};
		saveAndNotify();
	},
	removeEvent(id) {
		currentState = {
			...currentState,
			events: currentState.events.filter((e) => e.id !== id)
		};
		saveAndNotify();
	},
	addCoordinator(coordinator) {
		currentState = {
			...currentState,
			coordinators: [...currentState.coordinators, coordinator]
		};
		saveAndNotify();
	},
	updateCoordinator(id, patch) {
		currentState = {
			...currentState,
			coordinators: currentState.coordinators.map((c) => c.id === id ? {
				...c,
				...patch
			} : c)
		};
		saveAndNotify();
	},
	removeCoordinator(id) {
		currentState = {
			...currentState,
			events: currentState.events.map((e) => ({
				...e,
				coordinatorIds: e.coordinatorIds.filter((cid) => cid !== id)
			})),
			coordinators: currentState.coordinators.filter((c) => c.id !== id)
		};
		saveAndNotify();
	},
	assignCoordinator(eventId, coordinatorId) {
		currentState = {
			...currentState,
			events: currentState.events.map((e) => e.id === eventId && !e.coordinatorIds.includes(coordinatorId) ? {
				...e,
				coordinatorIds: [...e.coordinatorIds, coordinatorId]
			} : e)
		};
		saveAndNotify();
	},
	unassignCoordinator(eventId, coordinatorId) {
		currentState = {
			...currentState,
			events: currentState.events.map((e) => e.id === eventId ? {
				...e,
				coordinatorIds: e.coordinatorIds.filter((cid) => cid !== coordinatorId)
			} : e)
		};
		saveAndNotify();
	},
	updateSettings(patch) {
		currentState = {
			...currentState,
			settings: {
				...currentState.settings,
				...patch
			}
		};
		saveAndNotify();
	},
	updateDate(id, patch) {
		currentState = {
			...currentState,
			dates: currentState.dates.map((d) => d.id === id ? {
				...d,
				...patch
			} : d)
		};
		saveAndNotify();
	},
	updateFaq(id, patch) {
		currentState = {
			...currentState,
			faq: currentState.faq.map((f) => f.id === id ? {
				...f,
				...patch
			} : f)
		};
		saveAndNotify();
	},
	addFaq(item) {
		currentState = {
			...currentState,
			faq: [item, ...currentState.faq]
		};
		saveAndNotify();
	},
	removeFaq(id) {
		currentState = {
			...currentState,
			faq: currentState.faq.filter((f) => f.id !== id)
		};
		saveAndNotify();
	},
	updatePayment(patch) {
		currentState = {
			...currentState,
			payment: {
				...currentState.payment,
				...patch
			}
		};
		saveAndNotify();
	},
	getEvents() {
		return currentState.events;
	},
	getEventBySlug(slug) {
		return currentState.events.find((e) => e.slug === slug);
	},
	getEventsByCategory(category) {
		return currentState.events.filter((e) => e.category === category);
	},
	getCoordinators() {
		return currentState.coordinators;
	},
	getCoordinatorsForIds(ids) {
		return ids.map((id) => currentState.coordinators.find((c) => c.id === id)).filter(Boolean);
	},
	getSettings() {
		return currentState.settings;
	}
};
function useAppData() {
	return (0, import_react.useSyncExternalStore)(appDataStore.subscribe, appDataStore.getState, appDataStore.getState);
}
//#endregion
export { useAppData as n, appDataStore as t };
