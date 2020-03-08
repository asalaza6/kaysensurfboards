webpackHotUpdate("static\\development\\pages\\index.js",{

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
  padding: 10
};
var boardStyleStyle = {
  textAlign: "center",
  padding: 4
};
var boardTechStyle = {
  textAlign: "center",
  padding: 4
};
var boardDimStyle = {
  textAlign: "center",
  padding: 4
};
var boardImgStyle = {
  width: 500,
  margin: "auto"
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    style: boardNameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, name), imgSrc ? __jsx("img", {
    style: boardImgStyle,
    src: __webpack_require__("./components sync recursive ^.*$")("" + imgSrc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : null, __jsx("a", {
    style: boardStyleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Style: " + style), __jsx("a", {
    style: boardTechStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Technology: " + tech), __jsx("a", {
    style: boardDimStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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
      lineNumber: 62
    },
    __self: this
  }, _boards_json__WEBPACK_IMPORTED_MODULE_1__.map(function (board) {
    return boardItem(board);
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.a9d73db1b2ef07c39124.hot-update.js.map