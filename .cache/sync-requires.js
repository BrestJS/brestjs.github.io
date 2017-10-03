// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/glenn/brestJS/brestjs/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/glenn/brestJS/brestjs/src/pages/index.js"))
}

exports.json = {
  "dev-404-page.json": require("/Users/glenn/brestJS/brestjs/.cache/json/dev-404-page.json"),
  "index.json": require("/Users/glenn/brestJS/brestjs/.cache/json/index.json")
}

exports.layouts = {

}