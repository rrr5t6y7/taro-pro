(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/buy/detail/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/buy/detail/index.jsx":
/*!************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/buy/detail/index.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/request */ "./src/utils/request.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service */ "./src/pages/buy/service.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);

/*
 * @Author: JJ
 * @Title: 完整购物流程页面
 * @Description: 这个页面展示hooks下的生命周期，以及整个购物流程
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-28 11:43:40
 */





 // Taro 专有 Hooks





var Detail = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "d"])(function (props) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* MobXProviderContext */ "a"]),
      stores = _React$useContext.stores;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      data = _useState2[0],
      updateData = _useState2[1]; //


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var params = {
      productCode: "P5130003920948S"
    }; // function ()

    Object(_utils_request__WEBPACK_IMPORTED_MODULE_6__[/* POST */ "a"])({
      url: _service__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].detail,
      params: params,
      closeLoading: true,
      success: function success(res) {
        console.log(res);
        updateData(res.data);
      },
      fail: function fail() {}
    });
  }, []);

  var gotoBuy = function gotoBuy() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.requestPayment({
      timeStamp: new Date(),
      nonceStr: "xxx",
      package: "xxx",
      signType: "MD5",
      paySign: "xxx",
      complete: function complete(res) {},
      success: function success(res) {
        console.log(res, "success");
      },
      fail: function fail(res) {
        console.log(res, "fail");
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
    className: "App",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Image */ "c"], {
      src: data.advImageUrl
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: data.name
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: "\xA5".concat(data.salePrice)
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* Button */ "a"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "a"], {
      type: "primary",
      onClick: gotoBuy,
      children: "\u4E70\uFF01"
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (Detail);

/***/ }),

/***/ "./src/pages/buy/detail/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/buy/detail/index.jsx ***!
  \****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/buy/detail/index.jsx");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/buy/detail/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/buy/detail/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map