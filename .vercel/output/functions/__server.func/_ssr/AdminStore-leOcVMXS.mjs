import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as useAppData, t as appDataStore } from "./appDataStore-C2muHOdz.mjs";
import { t as mockRegistrations } from "./registrations-YjpLcfq4.mjs";
import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminStore-leOcVMXS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AdminContext = (0, import_react.createContext)(null);
var ADMIN_EMAIL = "evitron26@gmail.com";
function AdminProvider({ children }) {
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [registrations, setRegistrations] = (0, import_react.useState)(mockRegistrations);
	const appData = useAppData();
	const value = (0, import_react.useMemo)(() => ({
		authed,
		adminEmail: ADMIN_EMAIL,
		login: (email, password) => {
			const ok = email.trim().toLowerCase() === "evitron26@gmail.com" && password.length >= 4;
			if (ok) setAuthed(true);
			return ok;
		},
		logout: () => setAuthed(false),
		registrations,
		setRegistrations,
		events: appData.events,
		updateEvent: (id, patch) => appDataStore.updateEvent(id, patch),
		addEvent: (event) => appDataStore.addEvent(event),
		removeEvent: (id) => appDataStore.removeEvent(id),
		coordinators: appData.coordinators,
		addCoordinator: (coord) => appDataStore.addCoordinator(coord),
		updateCoordinator: (id, patch) => appDataStore.updateCoordinator(id, patch),
		removeCoordinator: (id) => appDataStore.removeCoordinator(id),
		assignCoordinator: (eventId, coordinatorId) => appDataStore.assignCoordinator(eventId, coordinatorId),
		unassignCoordinator: (eventId, coordinatorId) => appDataStore.unassignCoordinator(eventId, coordinatorId),
		dates: appData.dates,
		updateDate: (id, patch) => appDataStore.updateDate(id, patch),
		faq: appData.faq,
		updateFaq: (id, patch) => appDataStore.updateFaq(id, patch),
		removeFaq: (id) => appDataStore.removeFaq(id),
		addFaq: (item) => appDataStore.addFaq(item),
		settings: appData.settings,
		updateSettings: (patch) => appDataStore.updateSettings(patch),
		payment: appData.payment,
		updatePayment: (patch) => appDataStore.updatePayment(patch)
	}), [
		authed,
		registrations,
		appData
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminContext.Provider, {
		value,
		children
	});
}
function useAdmin() {
	const ctx = (0, import_react.useContext)(AdminContext);
	if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
	return ctx;
}
//#endregion
export { AdminProvider as n, useAdmin as r, ADMIN_EMAIL as t };
