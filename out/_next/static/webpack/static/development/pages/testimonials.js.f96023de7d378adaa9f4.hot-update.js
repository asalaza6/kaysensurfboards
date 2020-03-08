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
  alignContent: "center",
  border: '1px solid #DDD',
  marginBottom: 20,
  padding: 10
};
var containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignSelf: "center",
  flexWrap: "wrap",
  maxWidth: 1000,
  margin: "auto"
};
var testNameStyle = {
  textAlign: "right",
  padding: 10,
  fontSize: 18
};
var testTestStyle = {
  textAlign: "center",
  padding: 4,
  fontSize: 24
};

function testimonialItem(test) {
  var name = test.name;
  var testimonial = test.testimonial;
  return __jsx("div", {
    style: testItemStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    style: testTestStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, testimonial), __jsx("div", {
    style: testNameStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "- " + name));
}

function Testimonials() {
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, _testimonial_json__WEBPACK_IMPORTED_MODULE_1__.map(function (test) {
    return testimonialItem(test);
  }));
}

/***/ })

})
//# sourceMappingURL=testimonials.js.f96023de7d378adaa9f4.hot-update.js.map