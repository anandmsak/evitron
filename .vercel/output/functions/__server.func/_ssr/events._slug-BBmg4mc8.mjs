import { t as appDataStore } from "./appDataStore-C2muHOdz.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events._slug-BBmg4mc8.js
var $$splitComponentImporter = () => import("./events._slug-DOLKsxzZ.mjs");
var $$splitNotFoundComponentImporter = () => import("./events._slug-O___Miom.mjs");
var Route = createFileRoute("/events/$slug")({
	loader: ({ params }) => {
		if (!appDataStore.getEventBySlug(params.slug)) throw notFound();
		return { slug: params.slug };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Event not found — EVITRON 2K26" }, {
			name: "robots",
			content: "noindex"
		}] };
		const event = appDataStore.getEventBySlug(loaderData.slug);
		if (!event) return { meta: [{ title: "Event not found — EVITRON 2K26" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${event.title} — ${event.subtitle} | EVITRON 2K26`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: event.description.slice(0, 155)
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: event.tagline
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
