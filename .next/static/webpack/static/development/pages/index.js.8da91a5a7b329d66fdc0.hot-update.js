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
	"./images/board1.jpg": "./components/images/board1.jpg",
	"./images/board2.jpg": "./components/images/board2.jpg",
	"./images/board3.jpg": "./components/images/board3.jpg",
	"./images/board4.jpg": "./components/images/board4.jpg",
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

/***/ "./components/board4.jpg":
false,

/***/ "./components/images/board4.jpg":
/*!**************************************!*\
  !*** ./components/images/board4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/board4-955c2d8cbe38bca63ecb0bd0e8f75045.jpg";

/***/ })

})
//# sourceMappingURL=index.js.8da91a5a7b329d66fdc0.hot-update.js.map