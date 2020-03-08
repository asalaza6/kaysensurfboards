webpackHotUpdate("static\\development\\pages\\testimonials.js",{

/***/ "./components/Testimonials.js":
/*!************************************!*\
  !*** ./components/Testimonials.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testimonial_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../testimonial.json */ "./testimonial.json");
var _testimonial_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../testimonial.json */ "./testimonial.json", 1);
var _jsxFileName = "C:\\Users\\Alex\\Documents\\coding\\kaysensurfboards\\components\\Testimonials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var testItemStyle = {
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
var testNameStyle = {
  textAlign: "center",
  padding: 10,
  fontSize: 24
};
var testStyleStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var testTechStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var testDimStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 18
};
var testImgStyle = {
  width: 465
};

function testimonialItem(test) {
  var name = test.name;
  var style = test.testimonial;
  return __jsx("div", {
    style: testItemStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    style: testNameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, name), imgSrc ? __jsx("img", {
    style: testImgStyle,
    src: __webpack_require__("./components sync recursive ^.*$")("" + imgSrc),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }) : null, __jsx("a", {
    style: testStyleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Style: " + style), __jsx("a", {
    style: testTechStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Technology: " + tech), __jsx("a", {
    style: testDimStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Dimensions: " + dimension));
}

function Testimonials() {
  console.log(tests.toString());
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, tests.map(function (test) {
    return testimonialItem(test);
  }));
}

/***/ })

})
//# sourceMappingURL=testimonials.js.8411336397a0798422fd.hot-update.js.map