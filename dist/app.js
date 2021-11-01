require("./runtime");
require("./common");
require("./vendors");
require("./taro");

(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/app.jsx":
/*!*****************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/app.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! taro-ui/dist/style/index.scss */ "./node_modules/taro-ui/dist/style/index.scss");
/* harmony import */ var taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(taro_ui_dist_style_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.scss */ "./src/app.scss");
/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










console.log("123", _store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);

var App = /*#__PURE__*/function (_Component) {
  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(App, _Component);

  var _super = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(App);

  function App() {
    Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {} // this.props.children 就是要渲染的页面

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.StrictMode, {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__["jsx"])(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* Provider */ "b"], {
          stores: _store__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
          children: this.props.children
        })
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./node_modules/taro-ui/dist/style/index.scss":
/*!****************************************************!*\
  !*** ./node_modules/taro-ui/dist/style/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_plugin_platform_tt_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-tt/dist/runtime */ "./node_modules/@tarojs/plugin-platform-tt/dist/runtime.js");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/babel-loader/lib!./app.jsx */ "./node_modules/babel-loader/lib/index.js!./src/app.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");









var config = {"pages":["pages/index/index","pages/requestPage/index","pages/store/index","pages/buy/index","pages/buy/detail/index"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["window"].__taroAppConfig = config
var inst = App(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__["createReactApp"])(_node_modules_babel_loader_lib_index_js_app_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], react__WEBPACK_IMPORTED_MODULE_4__, react_dom__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], config))

Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__["initPxTransform"])({
  designWidth: 750,
  deviceRatio: {"640":1.17,"750":1,"828":0.905}
})


/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _list_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/example */ "./src/store/list/example.js");
/* harmony import */ var _list_userInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/userInfo */ "./src/store/list/userInfo.js");
/* harmony import */ var _list_commoditysList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/commoditysList */ "./src/store/list/commoditysList.js");



var stores = {
  example: _list_example__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  userInfo: _list_userInfo__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
  commoditysList: _list_commoditysList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (stores);

/***/ }),

/***/ "./src/store/list/commoditysList.js":
/*!******************************************!*\
  !*** ./src/store/list/commoditysList.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var CommoditysList = function CommoditysList() {
  var _this = this;

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CommoditysList);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "list", []);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "changeList", function (payload) {
    console.log('payload', payload);
    _this.list = payload;
  });

  Object(mobx__WEBPACK_IMPORTED_MODULE_2__[/* makeAutoObservable */ "l"])(this);
};

var commoditysList = new CommoditysList();
/* harmony default export */ __webpack_exports__["a"] = (commoditysList);

/***/ }),

/***/ "./src/store/list/example.js":
/*!***********************************!*\
  !*** ./src/store/list/example.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var Example = function Example() {
  var _this = this;

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Example);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "a", 1);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "b", 2);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "add", function () {
    _this.a++;
  });

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "add2", function () {
    _this.b++;
  });

  Object(mobx__WEBPACK_IMPORTED_MODULE_2__[/* makeAutoObservable */ "l"])(this);
};

var example = new Example();
/* harmony default export */ __webpack_exports__["a"] = (example);

/***/ }),

/***/ "./src/store/list/userInfo.js":
/*!************************************!*\
  !*** ./src/store/list/userInfo.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");




var UserInfo = function UserInfo() {
  var _this = this;

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, UserInfo);

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "name", "jj");

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "age", "18");

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "changeName", function () {
    _this.name = "jj yeah!";
  });

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "changeAge", function () {
    _this.age++;
  });

  Object(mobx__WEBPACK_IMPORTED_MODULE_2__[/* makeAutoObservable */ "l"])(this);
};

var userInfo = new UserInfo();
/* harmony default export */ __webpack_exports__["a"] = (userInfo);

/***/ })

},[["./src/app.jsx","runtime","taro","vendors"]]]);;
//# sourceMappingURL=app.js.map