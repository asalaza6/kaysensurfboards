webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components sync recursive ^.*$":
/*!******************************!*\
  !*** ./components sync ^.*$ ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Catalog": "./components/Catalog.js",
	"./Catalog.js": "./components/Catalog.js",
	"./Header": "./components/Header.js",
	"./Header.js": "./components/Header.js",
	"./MyLayout": "./components/MyLayout.js",
	"./MyLayout.js": "./components/MyLayout.js",
	"./splash": "./components/splash.js",
	"./splash.js": "./components/splash.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^.*$";

/***/ }),

/***/ "./components/board1.jpg":
false

})
//# sourceMappingURL=index.js.9368d3b4ce9712979a6c.hot-update.js.map