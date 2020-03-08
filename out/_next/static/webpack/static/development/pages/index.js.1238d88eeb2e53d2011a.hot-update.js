webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/splash.js":
/*!******************************!*\
  !*** ./components/splash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_splashpic_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/splashpic.jpg */ "./public/splashpic.jpg");
/* harmony import */ var _public_splashpic_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_splashpic_jpg__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "C:\\Users\\Alex\\Documents\\coding\\kaysensurfboards\\components\\splash.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var Splash = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Splash, _React$Component);

  function Splash(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Splash);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Splash).call(this, props));
    _this.state = {
      imgWidth: 0,
      imgHeight: 0,
      width: 0,
      height: 0,
      horizontal: 0
    };
    _this.updateDim = _this.updateDim.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.onImgLoad = _this.onImgLoad.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Splash, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDim();
      window.addEventListener('resize', this.updateDim);
    }
  }, {
    key: "updateDim",
    value: function updateDim() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });

      if (this.state.width / this.state.height < this.state.imgWidth / this.state.imgHeight) {
        this.setState({
          horizontal: true
        });
      } else {
        this.setState({
          horizontal: false
        });
      }
    }
  }, {
    key: "onImgLoad",
    value: function onImgLoad(_ref) {
      var img;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function onImgLoad$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              img = _ref.target;
              _context.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.setState({
                imgHeight: img.offsetHeight,
                imgWidth: img.offsetWidth
              }));

            case 3:
              this.updateDim();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: splash,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        style: splashImgContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("img", {
        onLoad: this.onImgLoad,
        style: this.state.horizontal ? {
          splashImg1: splashImg1
        } : {
          splashImg2: splashImg2
        },
        src: _public_splashpic_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })));
    }
  }]);

  return Splash;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component); //<div style = {splashText}>{"Shaping surfboards in San Clemente for 35 years. Over 100,000 boards and counting. Call me for your next board. 1-949-395-7079"}</div>


var splash = {
  minHeight: "75vh",
  width: "100%"
};
var splashImgContainer = {
  height: "100vh",
  overflow: "hidden",
  position: "relative",
  textAlign: "center",
  justifyContent: "center"
};
var splashText = {
  margin: "auto",
  maxWidth: 1000,
  border: '1px solid #DDD',
  textAlign: "center",
  position: "relative",
  //fontFamily:  $fontFamily,
  fontSize: 30
};
var splashImg1 = {
  height: "100%",
  width: "auto"
};
var splashImg2 = {
  height: "auto",
  width: "100%"
};
/* harmony default export */ __webpack_exports__["default"] = (Splash);

/***/ })

})
//# sourceMappingURL=index.js.1238d88eeb2e53d2011a.hot-update.js.map