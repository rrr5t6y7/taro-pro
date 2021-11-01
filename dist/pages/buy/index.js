(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/buy/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/buy/index.jsx":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/buy/index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service */ "./src/pages/buy/service.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);




/*
 * @Author: JJ
 * @Title: 完整购物流程页面
 * @Description: 这个页面展示taro-hooks下的生命周期，以及整个购物流程
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-11-01 15:06:22
 */





 // Taro 专有 Hooks




var list = [];

function reducer(state, action) {
  switch (action.type) {
    case "updateList":
      return Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(action.payload);

    default:
      throw new Error();
  }
}

var List = Object(mobx_react__WEBPACK_IMPORTED_MODULE_5__[/* observer */ "d"])(function () {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(reducer, list),
      _useReducer2 = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var fetchFn = function fetchFn() {
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
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_9__[/* POST */ "a"])({
      url: _service__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].searchList,
      params: params,
      closeLoading: true,
      success: function success(res) {// 可以选择这种useReducer方式，也可以用useState方式，如果需要状态管理，则选择mobx方式
        //  res;\
        // dispatch({ type: "updateList", payload: res.list });
      },
      fail: function fail() {}
    }); // console.log("apple", apple);
    // console.log("effect");
  }; // 1


  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useDidShow"])(function () {
    console.log("show");
  }); // 2

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var a;
    return _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetchFn();

          case 2:
            a = _context.sent;
            console.log("gg", a);
            dispatch({
              type: "updateList",
              payload: a.data.list
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []); // 3

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useReady"])(function () {
    console.log("ready");
  });
  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useDidHide"])(function () {
    console.log("hide");
  }); // 监听用户下拉动作

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["usePullDownRefresh"])(function () {
    console.log("down");
  }); // 监听用户上拉触底事件

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useReachBottom"])(function () {
    console.log("bottom");
  }); // 监听用户滑动页面事件

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["usePageScroll"])(function (res) {
    console.log("scroll", res);
  }); // 旋转时触发

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useResize"])(function (res) {
    console.log("resize", res);
  }); // 监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useShareAppMessage"])(function (res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }

    return {
      title: "自定义转发标题",
      path: "/page/user?id=123"
    };
  }); // 点击 tab 时触发

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useTabItemTap"])(function (res) {
    console.log("tab", res);
  }); // 监听用户点击右上角菜单“收藏”按钮的行为，并自定义收藏内容

  Object(_tarojs_taro__WEBPACK_IMPORTED_MODULE_8__["useAddToFavorites"])(function (res) {
    // webview 页面返回 webviewUrl
    console.log("WebviewUrl: ", res.webviewUrl);
    return {
      title: "自定义标题",
      imageUrl: "http://demo.png",
      query: "name=xxx&age=xxx"
    };
  });

  var gotoDetail = function gotoDetail() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_8___default.a.navigateTo({
      url: "/pages/buy/detail/index"
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__[/* View */ "q"], {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtList */ "c"], {
      children: state.map(function (item, index) {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_7__[/* AtListItem */ "d"], {
          // <Image src={item.images} />
          title: item.productName,
          note: item.merchantName,
          arrow: "right",
          thumb: item.images,
          onClick: gotoDetail
        }, index);
      })
    })
  });
});
/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ "./src/pages/buy/index.jsx":
/*!*********************************!*\
  !*** ./src/pages/buy/index.jsx ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/buy/index.jsx");


var config = {"navigationBarTitleText":"购物流程","enableShareAppMessage":true,"enableShareTimeline":true};
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareTimeline = true
_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].enableShareAppMessage = true
var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/buy/index', {root:{cn:[]}}, config || {}))



/***/ })

},[["./src/pages/buy/index.jsx","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map