(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/buy/service.js":
/*!**********************************!*\
  !*** ./src/pages/buy/service.js ***!
  \**********************************/
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
 * @Last Modified time: 2021-10-27 16:06:26
 */
var api = {
  searchList: "/search-ms/v4/search",
  detail: "/ds-product-api/productPresell/customer/getPresellInfo"
};
/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: GET, POST, httpRequest */
/*! exports used: POST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export GET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POST; });
/* unused harmony export httpRequest */
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 声明请求对象
 */

console.log(process.env);
var API_BASE_URL = "https://sit-api.tianhong.cn";
/**
 * 声明请求对象参数展示
 * requestHandler
 * params: {},
 * url: "",
 * showToast: false, //默认显示Toast，如果设置true则不会显示Toast
 * success: function (res)
 * fail: function ()
 *
 */

/**
 * GET请求
 *
 */

function GET(_x) {
  return _GET.apply(this, arguments);
}
/**
 * POST请求
 *
 */

function _GET() {
  _GET = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(requestHandler) {
    return _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", httpRequest("GET", requestHandler));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _GET.apply(this, arguments);
}

function POST(_x2) {
  return _POST.apply(this, arguments);
}
/**
 * http request 请求
 * @param {http method} method
 *
 */

function _POST() {
  _POST = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(requestHandler) {
    return _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", httpRequest("POST", requestHandler));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _POST.apply(this, arguments);
}

function httpRequest(_x3, _x4) {
  return _httpRequest.apply(this, arguments);
}
/**
 * 系统参数和功能参数做签名（按照服务端接口标准制定）
 * @param {传入功能参数} params
 */

function _httpRequest() {
  _httpRequest = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(method, requestHandler) {
    var params, showToast, url;
    return _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //注意：可以对params签名等处理
            params = requestHandler.params;
            params = apiParamSign(params);
            showToast = requestHandler.showToast;
            url = requestHandler.url;

            if (!showToast) {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showLoading({
                title: "加载中",
                mask: true
              });
            }

            return _context3.abrupt("return", _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request({
              url: "".concat(API_BASE_URL, "/").concat(url),
              data: params,
              method: method,
              // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // responseType: 'text',
              // credentials: 'include',
              header: {
                "content-type": "application/json",
                // 默认值
                "x-http-devicetype": "miniapp" // 'mediaType':'application/json'

              },
              mode: "no-cors",
              success: function success(res) {
                console.log("request success!");

                if (!showToast) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
                }

                if (res.data.code == 200) {
                  requestHandler.success(res.data);
                } else if (res.data.status == "error") {
                  //错误回调处理
                  requestHandler.fail();
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
                    title: res.data.msg,
                    icon: "none"
                  });
                } else {
                  //其他情况当成失败处理
                  requestHandler.fail();
                }
              },
              fail: function fail(res) {
                console.log("request failed!");

                if (!showToast) {
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.hideLoading();
                } //错误回调处理


                //错误回调处理
                requestHandler.fail();
              }
            }));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _httpRequest.apply(this, arguments);
}

function apiParamSign(params) {
  var sysParams = {}; // let date = new Date();
  // let month = date.getMonth() + 1;
  // sysParams.date =
  //   date.getFullYear() +
  //   "-" +
  //   month +
  //   "-" +
  //   date.getDate() +
  //   " " +
  //   date.getHours() +
  //   ":" +
  //   date.getMinutes() +
  //   ":" +
  //   date.getSeconds();
  // data.task = date.getTime();
  // sysParams.version = "1.0";
  // sysParams.format = "json";
  // sysParams.flag = "dev_flag";

  var data = {}; //合并对象

  Object.assign(data, sysParams, params);
  var keys = [];

  for (var k in data) {
    if (data.hasOwnProperty(k)) {
      keys.push(k);
    }
  }

  keys.sort();
  var paramsStr = "";

  for (var i = -0; i < keys.length; i++) {
    paramsStr += keys[i];
    paramsStr += data[keys[i]];
  } // let tmp = md5(paramsStr).toUpperCase() + API_BASE_TOKEN;
  // tmp = md5(tmp).toUpperCase();
  // data.sign = tmp;


  return data;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=common.js.map