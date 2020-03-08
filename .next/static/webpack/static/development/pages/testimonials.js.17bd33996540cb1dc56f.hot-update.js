webpackHotUpdate("static\\development\\pages\\testimonials.js",{

/***/ "./boards.json":
/*!*********************!*\
  !*** ./boards.json ***!
  \*********************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"key\":1,\"boardname\":\"Grim Reaper\",\"style\":\"shortboard\",\"technology\":\"futureflex\",\"dimension\":\"default\",\"img\":\"./images/board1.jpg\"},{\"key\":2,\"boardname\":\"Blue Wave\",\"style\":\"fish\",\"technology\":\"hydroflex\",\"dimension\":\"default\",\"img\":\"./images/board2.jpg\"},{\"key\":3,\"boardname\":\"Ennis 2\",\"style\":\"hybrid\",\"technology\":\"carbon\",\"dimension\":\"default\",\"img\":\"./images/board3.jpg\"},{\"key\":4,\"boardname\":\"Jenkins\",\"style\":\"longboard\",\"technology\":\"polyurethane foam\",\"dimension\":\"default\",\"img\":\"./images/board4.jpg\"}]");

/***/ }),

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
	"./Testimonials": "./components/Testimonials.js",
	"./Testimonials.js": "./components/Testimonials.js",
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

/***/ "./components/Catalog.js":
/*!*******************************!*\
  !*** ./components/Catalog.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boards.json */ "./boards.json");
var _boards_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../boards.json */ "./boards.json", 1);
var _jsxFileName = "C:\\Users\\Alex\\Documents\\coding\\kaysensurfboards\\components\\Catalog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var boardItemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center"
};
var containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignSelf: "center",
  flexWrap: "wrap",
  maxWidth: 1000,
  margin: "auto"
};
var boardNameStyle = {
  textAlign: "center",
  padding: 10,
  fontSize: 24
};
var boardStyleStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardTechStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardDimStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardImgStyle = {
  width: 465
};

function boardItem(Board) {
  var name = Board.boardname;
  var style = Board.style;
  var tech = Board.technology;
  var dimension = Board.dimension;
  var imgSrc = Board.img;
  return __jsx("div", {
    style: boardItemStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    style: boardNameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, name), imgSrc ? __jsx("img", {
    style: boardImgStyle,
    src: __webpack_require__("./components sync recursive ^.*$")("" + imgSrc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : null, __jsx("a", {
    style: boardStyleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Style: " + style), __jsx("a", {
    style: boardTechStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Technology: " + tech), __jsx("a", {
    style: boardDimStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Dimensions: " + dimension));
}

function Catalog() {
  console.log(_boards_json__WEBPACK_IMPORTED_MODULE_1__.toString());
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, _boards_json__WEBPACK_IMPORTED_MODULE_1__.map(function (board) {
    return boardItem(board);
  }));
}

/***/ }),

/***/ "./components/Testimonials.js":
/*!************************************!*\
  !*** ./components/Testimonials.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catalog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _boards_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../boards.json */ "./boards.json");
var _boards_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../boards.json */ "./boards.json", 1);
var _jsxFileName = "C:\\Users\\Alex\\Documents\\coding\\kaysensurfboards\\components\\Testimonials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var boardItemStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center"
};
var containerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignSelf: "center",
  flexWrap: "wrap",
  maxWidth: 1000,
  margin: "auto"
};
var boardNameStyle = {
  textAlign: "center",
  padding: 10,
  fontSize: 24
};
var boardStyleStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardTechStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardDimStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var boardImgStyle = {
  width: 465
};

function testimonailItem(Board) {
  var name = Board.boardname;
  var style = Board.style;
  var tech = Board.technology;
  var dimension = Board.dimension;
  var imgSrc = Board.img;
  return __jsx("div", {
    style: boardItemStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    style: boardNameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, name), imgSrc ? __jsx("img", {
    style: boardImgStyle,
    src: __webpack_require__("./components sync recursive ^.*$")("" + imgSrc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }) : null, __jsx("a", {
    style: boardStyleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Style: " + style), __jsx("a", {
    style: boardTechStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Technology: " + tech), __jsx("a", {
    style: boardDimStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Dimensions: " + dimension));
}

function Catalog() {
  console.log(_boards_json__WEBPACK_IMPORTED_MODULE_1__.toString());
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, _boards_json__WEBPACK_IMPORTED_MODULE_1__.map(function (board) {
    return testimonialItem(board);
  }));
}

/***/ }),

/***/ "./components/images/board1.jpg":
/*!**************************************!*\
  !*** ./components/images/board1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/board1-aa3c656fac097caaaaebab58521d7144.jpg";

/***/ }),

/***/ "./components/images/board2.jpg":
/*!**************************************!*\
  !*** ./components/images/board2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/board2-50a7a32bc6e8f424b0a6e28d7bbb1fa3.jpg";

/***/ }),

/***/ "./components/images/board3.jpg":
/*!**************************************!*\
  !*** ./components/images/board3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/board3-2807e77d878541ee9b61e60f282cc845.jpg";

/***/ }),

/***/ "./components/images/board4.jpg":
/*!**************************************!*\
  !*** ./components/images/board4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/board4-955c2d8cbe38bca63ecb0bd0e8f75045.jpg";

/***/ }),

/***/ "./pages/testimonials.js":
/*!*******************************!*\
  !*** ./pages/testimonials.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonial; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Testimonials */ "./components/Testimonials.js");
var _jsxFileName = "C:\\Users\\Alex\\Documents\\coding\\kaysensurfboards\\pages\\testimonials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Testimonial() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_components_Testimonials__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=testimonials.js.17bd33996540cb1dc56f.hot-update.js.map