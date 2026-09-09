import { i as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <title>EVITRON 2K26</title>\r\n    <meta name=\"description\" content=\"EVITRON 2K26 - National Level Technical Symposium\" />\r\n    <link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\" />\r\n  </head>\r\n  <body class=\"bg-background text-foreground antialiased\">\r\n    <div id=\"root\"></div>\r\n    <script type=\"module\" src=\"/src/main.tsx\"><\/script>\r\n  </body>\r\n</html>", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
