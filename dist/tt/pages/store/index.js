(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/store/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/store/index.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/store/index.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _components_Child__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Child */ "./src/pages/store/components/Child.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

/*
 * @Author: JJ
 * @Title: mobx状态管理展示
 * @Description: 这个页面展示如何收发数据状态
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-26 11:03:09
 */







var App = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "d"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      x = _useState2[0],
      setX = _useState2[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* MobXProviderContext */ "a"]),
      stores = _React$useContext.stores;

  var example = stores.example,
      userInfo = stores.userInfo;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("1", props);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: ["who i am:", userInfo.name]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: ["how old i am:", userInfo.age]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: userInfo.changeName,
      children: "\u6539\u53D8\u540D\u5B57"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: userInfo.changeAge,
      children: "\u6539\u53D8\u5E74\u9F84"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: ["x:", x]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: example.a
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: example.b
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: function onClick() {
        return setX(x + 1);
      },
      children: "set x"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: example.add,
      children: "add\u6309\u94AE1"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {
      onClick: example.add2,
      children: "add2\u6309\u94AE2"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_components_Child__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("br", {})]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/pages/store/components/Child.js":
/*!*********************************************!*\
  !*** ./src/pages/store/components/Child.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Child(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "q"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "q"], {
      className: "Child",
      children: "this is child"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_0__[/* View */ "q"], {
      children: props.stores.example.a
    })]
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[/* inject */ "c"])("stores")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__[/* observer */ "d"])(Child)));

/***/ }),

/***/ "./src/pages/store/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/store/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/store/index.jsx");


var config = {"navigationBarTitleText":"状态管理"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/store/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/store/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map