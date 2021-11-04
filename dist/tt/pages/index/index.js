(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx":
/*!*******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/index/index.jsx ***!
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
/* harmony import */ var taro_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! taro-ui */ "./node_modules/taro-ui/dist/index.esm.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

/*
 * @Author: JJ
 * @Title: 首页介绍
 * @Description: -
 * @Date: 2021-10-26 10:52:27
 * @Last Modified by: JJ
 * @Last Modified time: 2021-10-26 11:02:25
 */






 // import Store from "../store";



var App = Object(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "d"])(function (props) {
  var list = [{
    icon: "check",
    size: "15",
    label: "框架：",
    name: "Taro V3.3.10"
  }, {
    icon: "check",
    size: "15",
    label: "UI：",
    name: "Taro UI"
  }, {
    icon: "check",
    size: "15",
    label: "状态管理：",
    name: "Mobx V6+"
  }, {
    icon: "check",
    size: "15",
    label: "路由：",
    name: "React-router"
  }];
  var tabList = [{
    title: "首页展示ede"
  }, {
    title: "接口示例"
  }, {
    title: "mobx示例"
  }, {
    title: "购物流程"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useState, 2),
      current = _useState2[0],
      updateCurrent = _useState2[1];

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(mobx_react__WEBPACK_IMPORTED_MODULE_2__[/* MobXProviderContext */ "a"]),
      stores = _React$useContext.stores;

  var commoditysList = stores.commoditysList;
  console.log("what", commoditysList.list);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("1", props);
  });

  var gotoStore = function gotoStore() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
      url: "/pages/store/index"
    });
  };

  var gotoRequest = function gotoRequest() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
      url: "/pages/requestPage/index"
    });
  };

  var gotoBuy = function gotoBuy() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default.a.navigateTo({
      url: "/pages/buy/index"
    });
  };

  var handleClick = function handleClick(value) {
    console.log(value);
    updateCurrent(value);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
    className: "components-page",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
      children: "\u5929\u8679\u5C0F\u7A0B\u5E8FV1.0.0"
    }), list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
        className: _index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.listView,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          className: _index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.label,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtIcon */ "b"], {
            value: item.icon,
            size: item.size,
            color: "green"
          }), item.label]
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          className: _index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.content,
          children: item.name
        })]
      }, index);
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtTabs */ "e"], {
      current: current,
      tabList: tabList,
      onClick: handleClick,
      className: _index_scss__WEBPACK_IMPORTED_MODULE_6___default.a.tabTop,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtTabsPane */ "f"], {
        current: current,
        index: 0,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: "\u5929\u8679\u5C0F\u7A0B\u5E8F\u6846\u67B6V1.0.0"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtTabsPane */ "f"], {
        current: current,
        index: 1,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "a"], {
            type: "primary",
            size: "normal",
            onClick: gotoRequest,
            children: "\u63A5\u53E3\u793A\u4F8B"
          }), commoditysList.list.map(function (item, index) {
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
                children: item.merchantName
              })
            }, index);
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtTabsPane */ "f"], {
        current: current,
        index: 2,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "a"], {
            type: "primary",
            size: "normal",
            onClick: gotoStore,
            children: "mobx\u793A\u4F8B"
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtTabsPane */ "f"], {
        current: current,
        index: 3,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__[/* View */ "q"], {
          style: "padding: 100px 50px;background-color: #FAFBFC;text-align: center;",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(taro_ui__WEBPACK_IMPORTED_MODULE_4__[/* AtButton */ "a"], {
            type: "primary",
            size: "normal",
            onClick: gotoBuy,
            children: "\u8D2D\u7269\u6D41\u7A0B"
          })
        })
      })]
    })]
  });
});
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/index/index.jsx");


var config = {"navigationBarTitleText":"首页"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/index/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"listView":"index__listView___3tjs6","label":"index__label___2VrTx","content":"index__content___3btik","tabTop":"index__tabTop___3Hl8J"};

/***/ })

},[["./src/pages/index/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map