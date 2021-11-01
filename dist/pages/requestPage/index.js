(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/requestPage/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/requestPage/index.jsx":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/requestPage/index.jsx ***!
  \*************************************************************************/
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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service */ "./src/pages/requestPage/service.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/requestPage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);





var _dec, _class;
/*
 * @Author: JJ
 * @Title: 请求接口页面展示
 * @Description: 这个页面展示如何请求接口，以及在类的形式下如何使用mobx
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-28 11:04:45
 */









var RequestPage = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__[/* inject */ "c"])("stores"), _dec(_class = Object(mobx_react__WEBPACK_IMPORTED_MODULE_6__[/* observer */ "d"])(_class = /*#__PURE__*/function (_Component) {
  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(RequestPage, _Component);

  var _super = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(RequestPage);

  function RequestPage() {
    Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RequestPage);

    return _super.apply(this, arguments);
  }

  Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RequestPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var params = {
        keyword: "1",
        latitude: 22.53594898978371,
        longitude: 113.9418198219386,
        pageIndex: 1,
        sort: 5,
        firstPageShowShoppingCart: null,
        isSearchHt: 1,
        cityCode: "31359"
      };
      Object(_utils_request__WEBPACK_IMPORTED_MODULE_7__[/* POST */ "a"])({
        url: _service__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].searchList,
        params: params,
        closeLoading: true,
        success: function success(res) {
          // 把接口数据记录到mobx中
          console.log(res.list);
          console.log(_this.props); // console.log('apple',this.props.stores.commoditysList.changeList)

          _this.props.stores.commoditysList.changeList(res.list);
        },
        fail: function fail() {}
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      // const {
      //   counterStore: { counter },
      // } = this.props.store;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "q"], {
        className: "index",
        children: "\u63A5\u53E3\u5DF2\u7ECF\u8BF7\u6C42\u6210\u529F\uFF01\u8FD4\u56DE\u5373\u53EF\u770B\u5230\u6570\u636E\u3002"
      });
    }
  }]);

  return RequestPage;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"])) || _class) || _class);
/* harmony default export */ __webpack_exports__["a"] = (RequestPage);

/***/ }),

/***/ "./src/pages/requestPage/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/requestPage/index.jsx ***!
  \*****************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/requestPage/index.jsx");


var config = {"navigationBarTitleText":"请求演示页面"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/requestPage/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/requestPage/index.scss":
/*!******************************************!*\
  !*** ./src/pages/requestPage/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/requestPage/service.js":
/*!******************************************!*\
  !*** ./src/pages/requestPage/service.js ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: JJ
 * @Title: api存放处
 * @Description: 请写好注释和文档地址
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-26 11:09:35
 */
var api = {
  searchList: "/search-ms/v4/search"
};
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ })

},[["./src/pages/requestPage/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map