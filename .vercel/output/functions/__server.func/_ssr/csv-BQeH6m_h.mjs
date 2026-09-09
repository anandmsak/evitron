//#region node_modules/.nitro/vite/services/ssr/assets/csv-BQeH6m_h.js
function toCsv(rows) {
	if (rows.length === 0) return "";
	const headers = Object.keys(rows[0]);
	const escape = (v) => `"${String(v ?? "").replace(/"/g, "\"\"")}"`;
	return [headers.map(escape).join(","), ...rows.map((row) => headers.map((h) => escape(row[h])).join(","))].join("\n");
}
function downloadCsv(filename, csv) {
	if (typeof window === "undefined") return;
	const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	a.click();
	URL.revokeObjectURL(url);
}
//#endregion
export { toCsv as n, downloadCsv as t };
