import { r as siteSettings } from "./site-5Odp3Cg_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/format-9o3crDG4.js
var money = (value) => `${siteSettings.currency}${value.toLocaleString("en-IN")}`;
var formatDate = (iso) => new Date(iso).toLocaleDateString("en-GB", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric"
});
var formatDateTime = (iso) => new Date(iso).toLocaleString("en-GB", {
	day: "2-digit",
	month: "short",
	year: "numeric",
	hour: "2-digit",
	minute: "2-digit"
});
//#endregion
export { formatDateTime as n, money as r, formatDate as t };
