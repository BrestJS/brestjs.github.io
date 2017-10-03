// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": preferDefault(require("/Users/glenn/brestJS/brestjs/src/pages/index.js"))
}

exports.json = {
  "index.json": require("/Users/glenn/brestJS/brestjs/.cache/json/index.json")
}

exports.layouts = {

}