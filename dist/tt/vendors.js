(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/get.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/get.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/set.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/set.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/inversify/es/annotation/decorator_utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/decorator_utils.js ***!
  \*****************************************************************/
/*! exports provided: decorate, tagParameter, tagProperty */
/*! exports used: tagParameter, tagProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export decorate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tagProperty; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");


function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
    var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED"];
    _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}
function tagProperty(annotationTarget, propertyName, metadata) {
    var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED_PROP"];
    _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}
function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
    var paramsOrPropertiesMetadata = {};
    var isParameterDecorator = (typeof parameterIndex === "number");
    var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
    if (isParameterDecorator && propertyName !== undefined) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_DECORATOR_OPERATION */ "m"]);
    }
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (!Array.isArray(paramOrPropertyMetadata)) {
        paramOrPropertyMetadata = [];
    }
    else {
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            if (m.key === metadata.key) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_METADATA */ "k"] + " " + m.key.toString());
            }
        }
    }
    paramOrPropertyMetadata.push(metadata);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndex) {
    if (typeof parameterIndex === "number") {
        _decorate([_param(parameterIndex, decorator)], target);
    }
    else if (typeof parameterIndex === "string") {
        Reflect.decorate([decorator], target, parameterIndex);
    }
    else {
        _decorate([decorator], target);
    }
}

//# sourceMappingURL=decorator_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/inject.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/inject.js ***!
  \********************************************************/
/*! exports provided: LazyServiceIdentifer, inject */
/*! exports used: LazyServiceIdentifer, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyServiceIdentifer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inject; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




var LazyServiceIdentifer = (function () {
    function LazyServiceIdentifer(cb) {
        this._cb = cb;
    }
    LazyServiceIdentifer.prototype.unwrap = function () {
        return this._cb();
    };
    return LazyServiceIdentifer;
}());

function inject(serviceIdentifier) {
    return function (target, targetKey, index) {
        if (serviceIdentifier === undefined) {
            throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* UNDEFINED_INJECT_ANNOTATION */ "z"])(target.name));
        }
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["INJECT_TAG"], serviceIdentifier);
        if (typeof index === "number") {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
        }
        else {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagProperty */ "b"])(target, targetKey, metadata);
        }
    };
}

//# sourceMappingURL=inject.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/injectable.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/injectable.js ***!
  \************************************************************/
/*! exports provided: injectable */
/*! exports used: injectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectable; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");


function injectable() {
    return function (target) {
        if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], target)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_INJECTABLE_DECORATOR */ "j"]);
        }
        var types = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["DESIGN_PARAM_TYPES"], target) || [];
        Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], types, target);
        return target;
    };
}

//# sourceMappingURL=injectable.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/multi_inject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/multi_inject.js ***!
  \**************************************************************/
/*! exports provided: multiInject */
/*! exports used: multiInject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return multiInject; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function multiInject(serviceIdentifier) {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"], serviceIdentifier);
        if (typeof index === "number") {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
        }
        else {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
        }
    };
}

//# sourceMappingURL=multi_inject.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/named.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/annotation/named.js ***!
  \*******************************************************/
/*! exports provided: named */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export named */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function named(name) {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], name);
        if (typeof index === "number") {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
        }
        else {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
        }
    };
}

//# sourceMappingURL=named.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/optional.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/optional.js ***!
  \**********************************************************/
/*! exports provided: optional */
/*! exports used: optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optional; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function optional() {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"], true);
        if (typeof index === "number") {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
        }
        else {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
        }
    };
}

//# sourceMappingURL=optional.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/post_construct.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/post_construct.js ***!
  \****************************************************************/
/*! exports provided: postConstruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postConstruct */
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");



function postConstruct() {
    return function (target, propertyKey, descriptor) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], propertyKey);
        if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], target.constructor)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* MULTIPLE_POST_CONSTRUCT_METHODS */ "t"]);
        }
        Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], metadata, target.constructor);
    };
}

//# sourceMappingURL=post_construct.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/tagged.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/tagged.js ***!
  \********************************************************/
/*! exports provided: tagged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tagged */
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");


function tagged(metadataKey, metadataValue) {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__[/* Metadata */ "a"](metadataKey, metadataValue);
        if (typeof index === "number") {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
        }
        else {
            Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagProperty */ "b"])(target, targetKey, metadata);
        }
    };
}

//# sourceMappingURL=tagged.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/target_name.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/target_name.js ***!
  \*************************************************************/
/*! exports provided: targetName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export targetName */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function targetName(name) {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAME_TAG"], name);
        Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    };
}

//# sourceMappingURL=target_name.js.map

/***/ }),

/***/ "./node_modules/inversify/es/annotation/unmanaged.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/unmanaged.js ***!
  \***********************************************************/
/*! exports provided: unmanaged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unmanaged */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function unmanaged() {
    return function (target, targetKey, index) {
        var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["UNMANAGED_TAG"], true);
        Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    };
}

//# sourceMappingURL=unmanaged.js.map

/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding.js ***!
  \*******************************************************/
/*! exports provided: Binding */
/*! exports used: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binding; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");


var Binding = (function () {
    function Binding(serviceIdentifier, scope) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingTypeEnum */ "b"].Invalid;
        this.constraint = function (request) { return true; };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.dynamicValue = null;
    }
    Binding.prototype.clone = function () {
        var clone = new Binding(this.serviceIdentifier, this.scope);
        clone.activated = (clone.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton) ? this.activated : false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.cache = this.cache;
        return clone;
    };
    return Binding;
}());

//# sourceMappingURL=binding.js.map

/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding_count.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding_count.js ***!
  \*************************************************************/
/*! exports provided: BindingCount */
/*! exports used: BindingCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingCount; });
var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
};

//# sourceMappingURL=binding_count.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/error_msgs.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/constants/error_msgs.js ***!
  \***********************************************************/
/*! exports provided: DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, NULL_ARGUMENT, KEY_NOT_FOUND, AMBIGUOUS_MATCH, CANNOT_UNBIND, NOT_REGISTERED, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, UNDEFINED_INJECT_ANNOTATION, CIRCULAR_DEPENDENCY, NOT_IMPLEMENTED, INVALID_BINDING_TYPE, NO_MORE_SNAPSHOTS_AVAILABLE, INVALID_MIDDLEWARE_RETURN, INVALID_FUNCTION_BINDING, INVALID_TO_SELF_VALUE, INVALID_DECORATOR_OPERATION, ARGUMENTS_LENGTH_MISMATCH, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, MULTIPLE_POST_CONSTRUCT_METHODS, POST_CONSTRUCT_ERROR, CIRCULAR_DEPENDENCY_IN_FACTORY, STACK_OVERFLOW */
/*! exports used: AMBIGUOUS_MATCH, ARGUMENTS_LENGTH_MISMATCH, CANNOT_UNBIND, CIRCULAR_DEPENDENCY, CIRCULAR_DEPENDENCY_IN_FACTORY, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, INVALID_BINDING_TYPE, INVALID_DECORATOR_OPERATION, INVALID_FUNCTION_BINDING, INVALID_MIDDLEWARE_RETURN, INVALID_TO_SELF_VALUE, KEY_NOT_FOUND, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, MULTIPLE_POST_CONSTRUCT_METHODS, NOT_REGISTERED, NO_MORE_SNAPSHOTS_AVAILABLE, NULL_ARGUMENT, POST_CONSTRUCT_ERROR, STACK_OVERFLOW, UNDEFINED_INJECT_ANNOTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DUPLICATED_INJECTABLE_DECORATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DUPLICATED_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NULL_ARGUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return KEY_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMBIGUOUS_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CANNOT_UNBIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MISSING_INJECTABLE_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MISSING_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UNDEFINED_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CIRCULAR_DEPENDENCY; });
/* unused harmony export NOT_IMPLEMENTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INVALID_BINDING_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return NO_MORE_SNAPSHOTS_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return INVALID_MIDDLEWARE_RETURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return INVALID_FUNCTION_BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return INVALID_TO_SELF_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INVALID_DECORATOR_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ARGUMENTS_LENGTH_MISMATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CONTAINER_OPTIONS_MUST_BE_AN_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MULTIPLE_POST_CONSTRUCT_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return POST_CONSTRUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CIRCULAR_DEPENDENCY_IN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return STACK_OVERFLOW; });
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var UNDEFINED_INJECT_ANNOTATION = function (name) {
    return "@inject called with undefined this could mean that the class " + name + " has " +
        "a circular dependency problem. You can use a LazyServiceIdentifer to  " +
        "overcome this limitation.";
};
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
    "used as service identifier";
var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
    "must be applied to the parameters of a class constructor or a class property.";
var ARGUMENTS_LENGTH_MISMATCH = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "The number of constructor arguments in the derived class " +
        (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
    "must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
    "be a string ('singleton' or 'transient').";
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
    "be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " +
    "be a boolean";
var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
var POST_CONSTRUCT_ERROR = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "@postConstruct error in class " + values[0] + ": " + values[1];
};
var CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "It looks like there is a circular dependency " +
        ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") +
        ("service identifier '" + values[1] + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";
//# sourceMappingURL=error_msgs.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/literal_types.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/literal_types.js ***!
  \**************************************************************/
/*! exports provided: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/*! exports used: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingScopeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BindingTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TargetTypeEnum; });
var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
};
var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
};
var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
};

//# sourceMappingURL=literal_types.js.map

/***/ }),

/***/ "./node_modules/inversify/es/constants/metadata_keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/metadata_keys.js ***!
  \**************************************************************/
/*! exports provided: NAMED_TAG, NAME_TAG, UNMANAGED_TAG, OPTIONAL_TAG, INJECT_TAG, MULTI_INJECT_TAG, TAGGED, TAGGED_PROP, PARAM_TYPES, DESIGN_PARAM_TYPES, POST_CONSTRUCT, NON_CUSTOM_TAG_KEYS */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMED_TAG", function() { return NAMED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_TAG", function() { return NAME_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMANAGED_TAG", function() { return UNMANAGED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONAL_TAG", function() { return OPTIONAL_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_TAG", function() { return INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTI_INJECT_TAG", function() { return MULTI_INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED", function() { return TAGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED_PROP", function() { return TAGGED_PROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAM_TYPES", function() { return PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESIGN_PARAM_TYPES", function() { return DESIGN_PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CONSTRUCT", function() { return POST_CONSTRUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_CUSTOM_TAG_KEYS", function() { return NON_CUSTOM_TAG_KEYS; });
var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";
function getNonCustomTagKeys() {
    return [
        INJECT_TAG,
        MULTI_INJECT_TAG,
        NAME_TAG,
        UNMANAGED_TAG,
        NAMED_TAG,
        OPTIONAL_TAG,
    ];
}
var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();
//# sourceMappingURL=metadata_keys.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/container/container.js ***!
  \**********************************************************/
/*! exports provided: Container */
/*! exports used: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var _bindings_binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/binding */ "./node_modules/inversify/es/bindings/binding.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _planning_planner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../planning/planner */ "./node_modules/inversify/es/planning/planner.js");
/* harmony import */ var _resolution_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resolution/resolver */ "./node_modules/inversify/es/resolution/resolver.js");
/* harmony import */ var _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../syntax/binding_to_syntax */ "./node_modules/inversify/es/syntax/binding_to_syntax.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _container_snapshot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./container_snapshot */ "./node_modules/inversify/es/container/container_snapshot.js");
/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lookup */ "./node_modules/inversify/es/container/lookup.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};












var Container = (function () {
    function Container(containerOptions) {
        this._appliedMiddleware = [];
        var options = containerOptions || {};
        if (typeof options !== "object") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CONTAINER_OPTIONS_MUST_BE_AN_OBJECT */ "i"]);
        }
        if (options.defaultScope === undefined) {
            options.defaultScope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingScopeEnum */ "a"].Transient;
        }
        else if (options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingScopeEnum */ "a"].Singleton &&
            options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingScopeEnum */ "a"].Transient &&
            options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingScopeEnum */ "a"].Request) {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE */ "g"]);
        }
        if (options.autoBindInjectable === undefined) {
            options.autoBindInjectable = false;
        }
        else if (typeof options.autoBindInjectable !== "boolean") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE */ "f"]);
        }
        if (options.skipBaseClassChecks === undefined) {
            options.skipBaseClassChecks = false;
        }
        else if (typeof options.skipBaseClassChecks !== "boolean") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK */ "h"]);
        }
        this.options = {
            autoBindInjectable: options.autoBindInjectable,
            defaultScope: options.defaultScope,
            skipBaseClassChecks: options.skipBaseClassChecks
        };
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_8__[/* id */ "a"])();
        this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_11__[/* Lookup */ "a"]();
        this._snapshots = [];
        this._middleware = null;
        this.parent = null;
        this._metadataReader = new _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_4__[/* MetadataReader */ "a"]();
    }
    Container.merge = function (container1, container2) {
        var container3 = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            container3[_i - 2] = arguments[_i];
        }
        var container = new Container();
        var targetContainers = __spreadArray([container1, container2], container3).map(function (targetContainer) { return Object(_planning_planner__WEBPACK_IMPORTED_MODULE_5__[/* getBindingDictionary */ "b"])(targetContainer); });
        var bindingDictionary = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_5__[/* getBindingDictionary */ "b"])(container);
        function copyDictionary(origin, destination) {
            origin.traverse(function (key, value) {
                value.forEach(function (binding) {
                    destination.add(binding.serviceIdentifier, binding.clone());
                });
            });
        }
        targetContainers.forEach(function (targetBindingDictionary) {
            copyDictionary(targetBindingDictionary, bindingDictionary);
        });
        return container;
    };
    Container.prototype.load = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var getHelpers = this._getContainerModuleHelpersFactory();
        for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
            var currentModule = modules_1[_a];
            var containerModuleHelpers = getHelpers(currentModule.id);
            currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
        }
    };
    Container.prototype.loadAsync = function () {
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        getHelpers = this._getContainerModuleHelpersFactory();
                        _a = 0, modules_2 = modules;
                        _b.label = 1;
                    case 1:
                        if (!(_a < modules_2.length)) return [3, 4];
                        currentModule = modules_2[_a];
                        containerModuleHelpers = getHelpers(currentModule.id);
                        return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _a++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    Container.prototype.unload = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var conditionFactory = function (expected) { return function (item) {
            return item.moduleId === expected;
        }; };
        modules.forEach(function (module) {
            var condition = conditionFactory(module.id);
            _this._bindingDictionary.removeByCondition(condition);
        });
    };
    Container.prototype.bind = function (serviceIdentifier) {
        var scope = this.options.defaultScope || _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingScopeEnum */ "a"].Transient;
        var binding = new _bindings_binding__WEBPACK_IMPORTED_MODULE_0__[/* Binding */ "a"](serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_7__[/* BindingToSyntax */ "a"](binding);
    };
    Container.prototype.rebind = function (serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
    };
    Container.prototype.unbind = function (serviceIdentifier) {
        try {
            this._bindingDictionary.remove(serviceIdentifier);
        }
        catch (e) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CANNOT_UNBIND */ "c"] + " " + Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_9__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier));
        }
    };
    Container.prototype.unbindAll = function () {
        this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_11__[/* Lookup */ "a"]();
    };
    Container.prototype.isBound = function (serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
    };
    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAMED_TAG"], named);
    };
    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_5__[/* createMockRequest */ "a"])(this, serviceIdentifier, key, value);
            bound = bindings.some(function (b) { return b.constraint(request_1); });
        }
        if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
    };
    Container.prototype.snapshot = function () {
        this._snapshots.push(_container_snapshot__WEBPACK_IMPORTED_MODULE_10__[/* ContainerSnapshot */ "a"].of(this._bindingDictionary.clone(), this._middleware));
    };
    Container.prototype.restore = function () {
        var snapshot = this._snapshots.pop();
        if (snapshot === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* NO_MORE_SNAPSHOTS_AVAILABLE */ "v"]);
        }
        this._bindingDictionary = snapshot.bindings;
        this._middleware = snapshot.middleware;
    };
    Container.prototype.createChild = function (containerOptions) {
        var child = new Container(containerOptions || this.options);
        child.parent = this;
        return child;
    };
    Container.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        this._appliedMiddleware = this._appliedMiddleware.concat(middlewares);
        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function (prev, curr) { return curr(prev); }, initial);
    };
    Container.prototype.applyCustomMetadataReader = function (metadataReader) {
        this._metadataReader = metadataReader;
    };
    Container.prototype.get = function (serviceIdentifier) {
        return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
    };
    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
        return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getNamed = function (serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAMED_TAG"], named);
    };
    Container.prototype.getAll = function (serviceIdentifier) {
        return this._get(true, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
    };
    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
        return this._get(false, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAMED_TAG"], named);
    };
    Container.prototype.resolve = function (constructorFunction) {
        var tempContainer = this.createChild();
        tempContainer.bind(constructorFunction).toSelf();
        this._appliedMiddleware.forEach(function (m) {
            tempContainer.applyMiddleware(m);
        });
        return tempContainer.get(constructorFunction);
    };
    Container.prototype._getContainerModuleHelpersFactory = function () {
        var _this = this;
        var setModuleId = function (bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _bind = _this.bind.bind(_this);
                var bindingToSyntax = _bind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getUnbindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _unbind = _this.unbind.bind(_this);
                _unbind(serviceIdentifier);
            };
        };
        var getIsboundFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _isBound = _this.isBound.bind(_this);
                return _isBound(serviceIdentifier);
            };
        };
        var getRebindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _rebind = _this.rebind.bind(_this);
                var bindingToSyntax = _rebind(serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        return function (mId) { return ({
            bindFunction: getBindFunction(mId),
            isboundFunction: getIsboundFunction(mId),
            rebindFunction: getRebindFunction(mId),
            unbindFunction: getUnbindFunction(mId)
        }); };
    };
    Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
        var result = null;
        var defaultArgs = {
            avoidConstraints: avoidConstraints,
            contextInterceptor: function (context) { return context; },
            isMultiInject: isMultiInject,
            key: key,
            serviceIdentifier: serviceIdentifier,
            targetType: targetType,
            value: value
        };
        if (this._middleware) {
            result = this._middleware(defaultArgs);
            if (result === undefined || result === null) {
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* INVALID_MIDDLEWARE_RETURN */ "o"]);
            }
        }
        else {
            result = this._planAndResolve()(defaultArgs);
        }
        return result;
    };
    Container.prototype._planAndResolve = function () {
        var _this = this;
        return function (args) {
            var context = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_5__[/* plan */ "c"])(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = Object(_resolution_resolver__WEBPACK_IMPORTED_MODULE_6__[/* resolve */ "a"])(context);
            return result;
        };
    };
    return Container;
}());

//# sourceMappingURL=container.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container_module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_module.js ***!
  \*****************************************************************/
/*! exports provided: ContainerModule, AsyncContainerModule */
/*! exports used: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerModule; });
/* unused harmony export AsyncContainerModule */
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
        this.registry = registry;
    }
    return ContainerModule;
}());

var AsyncContainerModule = (function () {
    function AsyncContainerModule(registry) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
        this.registry = registry;
    }
    return AsyncContainerModule;
}());

//# sourceMappingURL=container_module.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/container_snapshot.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_snapshot.js ***!
  \*******************************************************************/
/*! exports provided: ContainerSnapshot */
/*! exports used: ContainerSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerSnapshot; });
var ContainerSnapshot = (function () {
    function ContainerSnapshot() {
    }
    ContainerSnapshot.of = function (bindings, middleware) {
        var snapshot = new ContainerSnapshot();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        return snapshot;
    };
    return ContainerSnapshot;
}());

//# sourceMappingURL=container_snapshot.js.map

/***/ }),

/***/ "./node_modules/inversify/es/container/lookup.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/container/lookup.js ***!
  \*******************************************************/
/*! exports provided: Lookup */
/*! exports used: Lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lookup; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

var Lookup = (function () {
    function Lookup() {
        this._map = new Map();
    }
    Lookup.prototype.getMap = function () {
        return this._map;
    };
    Lookup.prototype.add = function (serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
        }
        if (value === null || value === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            entry.push(value);
            this._map.set(serviceIdentifier, entry);
        }
        else {
            this._map.set(serviceIdentifier, [value]);
        }
    };
    Lookup.prototype.get = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            return entry;
        }
        else {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
        }
    };
    Lookup.prototype.remove = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
        }
        if (!this._map.delete(serviceIdentifier)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
        }
    };
    Lookup.prototype.removeByCondition = function (condition) {
        var _this = this;
        this._map.forEach(function (entries, key) {
            var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
            if (updatedEntries.length > 0) {
                _this._map.set(key, updatedEntries);
            }
            else {
                _this._map.delete(key);
            }
        });
    };
    Lookup.prototype.hasKey = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
        }
        return this._map.has(serviceIdentifier);
    };
    Lookup.prototype.clone = function () {
        var copy = new Lookup();
        this._map.forEach(function (value, key) {
            value.forEach(function (b) { return copy.add(key, b.clone()); });
        });
        return copy;
    };
    Lookup.prototype.traverse = function (func) {
        this._map.forEach(function (value, key) {
            func(key, value);
        });
    };
    return Lookup;
}());

//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ "./node_modules/inversify/es/inversify.js":
/*!************************************************!*\
  !*** ./node_modules/inversify/es/inversify.js ***!
  \************************************************/
/*! exports provided: METADATA_KEY, Container, BindingScopeEnum, BindingTypeEnum, TargetTypeEnum, AsyncContainerModule, ContainerModule, injectable, tagged, named, inject, LazyServiceIdentifer, optional, unmanaged, multiInject, targetName, postConstruct, MetadataReader, id, decorate, traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint, getServiceIdentifierAsString, multiBindToService */
/*! exports used: Container, ContainerModule, inject, injectable, multiInject, optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export METADATA_KEY */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container */ "./node_modules/inversify/es/container/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _container_container__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container_module */ "./node_modules/inversify/es/container/container_module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _container_container_module__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotation/injectable */ "./node_modules/inversify/es/annotation/injectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _annotation_tagged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./annotation/tagged */ "./node_modules/inversify/es/annotation/tagged.js");
/* harmony import */ var _annotation_named__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./annotation/named */ "./node_modules/inversify/es/annotation/named.js");
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotation/inject */ "./node_modules/inversify/es/annotation/inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _annotation_inject__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _annotation_optional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./annotation/optional */ "./node_modules/inversify/es/annotation/optional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _annotation_optional__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annotation/unmanaged */ "./node_modules/inversify/es/annotation/unmanaged.js");
/* harmony import */ var _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./annotation/multi_inject */ "./node_modules/inversify/es/annotation/multi_inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _annotation_target_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./annotation/target_name */ "./node_modules/inversify/es/annotation/target_name.js");
/* harmony import */ var _annotation_post_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./annotation/post_construct */ "./node_modules/inversify/es/annotation/post_construct.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./annotation/decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");
/* harmony import */ var _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./syntax/constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/binding_utils */ "./node_modules/inversify/es/utils/binding_utils.js");

var METADATA_KEY = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__;


















//# sourceMappingURL=inversify.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/context.js ***!
  \*******************************************************/
/*! exports provided: Context */
/*! exports used: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var Context = (function () {
    function Context(container) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
        this.container = container;
    }
    Context.prototype.addPlan = function (plan) {
        this.plan = plan;
    };
    Context.prototype.setCurrentRequest = function (currentRequest) {
        this.currentRequest = currentRequest;
    };
    return Context;
}());

//# sourceMappingURL=context.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata.js ***!
  \********************************************************/
/*! exports provided: Metadata */
/*! exports used: Metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metadata; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");

var Metadata = (function () {
    function Metadata(key, value) {
        this.key = key;
        this.value = value;
    }
    Metadata.prototype.toString = function () {
        if (this.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]) {
            return "named: " + this.value.toString() + " ";
        }
        else {
            return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
        }
    };
    return Metadata;
}());

//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata_reader.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata_reader.js ***!
  \***************************************************************/
/*! exports provided: MetadataReader */
/*! exports used: MetadataReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataReader; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");

var MetadataReader = (function () {
    function MetadataReader() {
    }
    MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["PARAM_TYPES"], constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED"], constructorFunc);
        return {
            compilerGeneratedMetadata: compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
        };
    };
    MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED_PROP"], constructorFunc) || [];
        return userGeneratedMetadata;
    };
    return MetadataReader;
}());

//# sourceMappingURL=metadata_reader.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/plan.js":
/*!****************************************************!*\
  !*** ./node_modules/inversify/es/planning/plan.js ***!
  \****************************************************/
/*! exports provided: Plan */
/*! exports used: Plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
var Plan = (function () {
    function Plan(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
    }
    return Plan;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/planner.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/planner.js ***!
  \*******************************************************/
/*! exports provided: plan, createMockRequest, getBindingDictionary */
/*! exports used: createMockRequest, getBindingDictionary, plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMockRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBindingDictionary; });
/* harmony import */ var _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/binding_count */ "./node_modules/inversify/es/bindings/binding_count.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/inversify/es/planning/context.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan */ "./node_modules/inversify/es/planning/plan.js");
/* harmony import */ var _reflection_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reflection_utils */ "./node_modules/inversify/es/planning/reflection_utils.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request */ "./node_modules/inversify/es/planning/request.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");












function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
}
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"] : _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"];
    var injectMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](metadataKey, serviceIdentifier);
    var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](targetType, name, serviceIdentifier, injectMetadata);
    if (key !== undefined) {
        var tagMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value);
        target.metadata.push(tagMetadata);
    }
    return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
    var bindings = getBindings(context.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable &&
        context.container.options.autoBindInjectable &&
        typeof target.serviceIdentifier === "function" &&
        metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
    }
    if (!avoidConstraints) {
        activeBindings = bindings.filter(function (binding) {
            var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
        });
    }
    else {
        activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
    return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable:
            if (target.isOptional()) {
                return bindings;
            }
            else {
                var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* NOT_REGISTERED */ "u"];
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listMetadataForTarget */ "d"])(serviceIdentifierString, target);
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].OnlyOneBindingAvailable:
            if (!target.isArray()) {
                return bindings;
            }
        case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].MultipleBindingsAvailable:
        default:
            if (!target.isArray()) {
                var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
                var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* AMBIGUOUS_MATCH */ "a"] + " " + serviceIdentifierString;
                msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
            else {
                return bindings;
            }
    }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
    var activeBindings;
    var childRequest;
    if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new _plan__WEBPACK_IMPORTED_MODULE_8__[/* Plan */ "a"](context, childRequest);
        context.addPlan(thePlan);
    }
    else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }
    activeBindings.forEach(function (binding) {
        var subChildRequest = null;
        if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        }
        else {
            if (binding.cache) {
                return;
            }
            subChildRequest = childRequest;
        }
        if (binding.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingTypeEnum */ "b"].Instance && binding.implementationType !== null) {
            var dependencies = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getDependencies */ "b"])(metadataReader, binding.implementationType);
            if (!context.container.options.skipBaseClassChecks) {
                var baseClassDependencyCount = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getBaseClassDependencyCount */ "a"])(metadataReader, binding.implementationType);
                if (dependencies.length < baseClassDependencyCount) {
                    var error = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* ARGUMENTS_LENGTH_MISMATCH */ "b"](Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getFunctionName */ "c"])(binding.implementationType));
                    throw new Error(error);
                }
            }
            dependencies.forEach(function (dependency) {
                _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
        }
    });
}
function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
    }
    else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) { avoidConstraints = false; }
    var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
    }
    catch (error) {
        if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_4__[/* isStackOverflowExeption */ "a"])(error)) {
            if (context.plan) {
                Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* circularDependencyToException */ "a"])(context.plan.rootRequest);
            }
        }
        throw error;
    }
}
function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, "", serviceIdentifier, new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value));
    var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);
    var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, [], target);
    return request;
}

//# sourceMappingURL=planner.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/queryable_string.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/queryable_string.js ***!
  \****************************************************************/
/*! exports provided: QueryableString */
/*! exports used: QueryableString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryableString; });
var QueryableString = (function () {
    function QueryableString(str) {
        this.str = str;
    }
    QueryableString.prototype.startsWith = function (searchString) {
        return this.str.indexOf(searchString) === 0;
    };
    QueryableString.prototype.endsWith = function (searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString.prototype.contains = function (searchString) {
        return (this.str.indexOf(searchString) !== -1);
    };
    QueryableString.prototype.equals = function (compareString) {
        return this.str === compareString;
    };
    QueryableString.prototype.value = function () {
        return this.str;
    };
    return QueryableString;
}());

//# sourceMappingURL=queryable_string.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/reflection_utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/reflection_utils.js ***!
  \****************************************************************/
/*! exports provided: getDependencies, getBaseClassDependencyCount, getFunctionName */
/*! exports used: getBaseClassDependencyCount, getDependencies, getFunctionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseClassDependencyCount; });
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../annotation/inject */ "./node_modules/inversify/es/annotation/inject.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};






function getDependencies(metadataReader, func) {
    var constructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(func);
    var targets = getTargets(metadataReader, constructorName, func, false);
    return targets;
}
function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === undefined) {
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECTABLE_ANNOTATION */ "r"] + " " + constructorName + ".";
        throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
    var hasOptionalParameters = keys.length > func.length;
    var iterations = (hasUserDeclaredUnknownInjections || hasOptionalParameters) ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func);
    var targets = __spreadArray(__spreadArray([], constructorTargets), propertyTargets);
    return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = (metadata.inject || metadata.multiInject);
    serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
    if (serviceIdentifier instanceof _annotation_inject__WEBPACK_IMPORTED_MODULE_0__[/* LazyServiceIdentifer */ "a"]) {
        serviceIdentifier = serviceIdentifier.unwrap();
    }
    if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === undefined;
        var isUnknownType = (isObject || isFunction || isUndefined);
        if (!isBaseClass && isUnknownType) {
            var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECT_ANNOTATION */ "s"] + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
        }
        var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
    }
    return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
            targets.push(target);
        }
    }
    return targets;
}
function getClassPropsAsTargets(metadataReader, constructorFunc) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var keys = Object.keys(classPropsMetadata);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(classPropsMetadata[key]);
        var targetName = metadata.targetName || key;
        var serviceIdentifier = (metadata.inject || metadata.multiInject);
        var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ClassProperty, targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
        targets = __spreadArray(__spreadArray([], targets), baseTargets);
    }
    return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseConstructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function (t) {
            return t.metadata.filter(function (m) {
                return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"];
            });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
            return dependencyCount;
        }
        else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
    }
    else {
        return 0;
    }
}
function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function (m) {
        targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
        inject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"]],
        multiInject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"]],
        targetName: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAME_TAG"]],
        unmanaged: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"]]
    };
}

//# sourceMappingURL=reflection_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/request.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/request.js ***!
  \*******************************************************/
/*! exports provided: Request */
/*! exports used: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");

var Request = (function () {
    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
        this.requestScope = parentRequest === null
            ? new Map()
            : null;
    }
    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
    };
    return Request;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ "./node_modules/inversify/es/planning/target.js":
/*!******************************************************!*\
  !*** ./node_modules/inversify/es/planning/target.js ***!
  \******************************************************/
/*! exports provided: Target */
/*! exports used: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Target; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _queryable_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable_string */ "./node_modules/inversify/es/planning/queryable_string.js");




var Target = (function () {
    function Target(type, name, serviceIdentifier, namedOrTagged) {
        this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        this.name = new _queryable_string__WEBPACK_IMPORTED_MODULE_3__[/* QueryableString */ "a"](name || "");
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
            metadataItem = new _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], namedOrTagged);
        }
        else if (namedOrTagged instanceof _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"]) {
            metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
            this.metadata.push(metadataItem);
        }
    }
    Target.prototype.hasTag = function (key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
                return true;
            }
        }
        return false;
    };
    Target.prototype.isArray = function () {
        return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"]);
    };
    Target.prototype.matchesArray = function (name) {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"])(name);
    };
    Target.prototype.isNamed = function () {
        return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
    };
    Target.prototype.isTagged = function () {
        return this.metadata.some(function (metadata) { return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) { return metadata.key !== key; }); });
    };
    Target.prototype.isOptional = function () {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"])(true);
    };
    Target.prototype.getNamedTag = function () {
        if (this.isNamed()) {
            return this.metadata.filter(function (m) { return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]; })[0];
        }
        return null;
    };
    Target.prototype.getCustomTags = function () {
        if (this.isTagged()) {
            return this.metadata.filter(function (metadata) { return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) { return metadata.key !== key; }); });
        }
        else {
            return null;
        }
    };
    Target.prototype.matchesNamedTag = function (name) {
        return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"])(name);
    };
    Target.prototype.matchesTag = function (key) {
        var _this = this;
        return function (value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key && m.value === value) {
                    return true;
                }
            }
            return false;
        };
    };
    return Target;
}());

//# sourceMappingURL=target.js.map

/***/ }),

/***/ "./node_modules/inversify/es/resolution/instantiation.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/resolution/instantiation.js ***!
  \***************************************************************/
/*! exports provided: resolveInstance */
/*! exports used: resolveInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveInstance; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};



function _injectProperties(instance, childRequests, resolveRequest) {
    var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
        return (childRequest.target !== null &&
            childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ClassProperty);
    });
    var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
    propertyInjectionsRequests.forEach(function (r, index) {
        var propertyName = "";
        propertyName = r.target.name.value();
        var injection = propertyInjections[index];
        instance[propertyName] = injection;
    });
    return instance;
}
function _createInstance(Func, injections) {
    return new (Func.bind.apply(Func, __spreadArray([void 0], injections)))();
}
function _postConstruct(constr, result) {
    if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr)) {
        var data = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr);
        try {
            result[data.value]();
        }
        catch (e) {
            throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* POST_CONSTRUCT_ERROR */ "x"])(constr.name, e.message));
        }
    }
}
function resolveInstance(constr, childRequests, resolveRequest) {
    var result = null;
    if (childRequests.length > 0) {
        var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
            return (childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ConstructorArgument);
        });
        var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
        result = _createInstance(constr, constructorInjections);
        result = _injectProperties(result, childRequests, resolveRequest);
    }
    else {
        result = new constr();
    }
    _postConstruct(constr, result);
    return result;
}

//# sourceMappingURL=instantiation.js.map

/***/ }),

/***/ "./node_modules/inversify/es/resolution/resolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/resolution/resolver.js ***!
  \**********************************************************/
/*! exports provided: resolve */
/*! exports used: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolve; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiation */ "./node_modules/inversify/es/resolution/instantiation.js");





var invokeFactory = function (factoryType, serviceIdentifier, fn) {
    try {
        return fn();
    }
    catch (error) {
        if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_2__[/* isStackOverflowExeption */ "a"])(error)) {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* CIRCULAR_DEPENDENCY_IN_FACTORY */ "e"](factoryType, serviceIdentifier.toString()));
        }
        else {
            throw error;
        }
    }
};
var _resolveRequest = function (requestScope) {
    return function (request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest ||
            !request.parentRequest.target ||
            !request.target ||
            !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function (childRequest) {
                var _f = _resolveRequest(requestScope);
                return _f(childRequest);
            });
        }
        else {
            var result = null;
            if (request.target.isOptional() && bindings.length === 0) {
                return undefined;
            }
            var binding_1 = bindings[0];
            var isSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
            var isRequestSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Request;
            if (isSingleton && binding_1.activated) {
                return binding_1.cache;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                requestScope.has(binding_1.id)) {
                return requestScope.get(binding_1.id);
            }
            if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue) {
                result = binding_1.cache;
                binding_1.activated = true;
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function) {
                result = binding_1.cache;
                binding_1.activated = true;
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor) {
                result = binding_1.implementationType;
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue && binding_1.dynamicValue !== null) {
                result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () { return binding_1.dynamicValue(request.parentContext); });
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory && binding_1.factory !== null) {
                result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () { return binding_1.factory(request.parentContext); });
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider && binding_1.provider !== null) {
                result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () { return binding_1.provider(request.parentContext); });
            }
            else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance && binding_1.implementationType !== null) {
                result = Object(_instantiation__WEBPACK_IMPORTED_MODULE_4__[/* resolveInstance */ "a"])(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
            }
            else {
                var serviceIdentifier = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_3__[/* getServiceIdentifierAsString */ "c"])(request.serviceIdentifier);
                throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_BINDING_TYPE */ "l"] + " " + serviceIdentifier);
            }
            if (typeof binding_1.onActivation === "function") {
                result = binding_1.onActivation(request.parentContext, result);
            }
            if (isSingleton) {
                binding_1.cache = result;
                binding_1.activated = true;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                !requestScope.has(binding_1.id)) {
                requestScope.set(binding_1.id, result);
            }
            return result;
        }
    };
};
function resolve(context) {
    var _f = _resolveRequest(context.plan.rootRequest.requestScope);
    return _f(context.plan.rootRequest);
}

//# sourceMappingURL=resolver.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingInSyntax */
/*! exports used: BindingInSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInSyntax; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");


var BindingInSyntax = (function () {
    function BindingInSyntax(binding) {
        this._binding = binding;
    }
    BindingInSyntax.prototype.inRequestScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Request;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingInSyntax.prototype.inSingletonScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingInSyntax.prototype.inTransientScope = function () {
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Transient;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    return BindingInSyntax;
}());

//# sourceMappingURL=binding_in_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js ***!
  \***********************************************************************/
/*! exports provided: BindingInWhenOnSyntax */
/*! exports used: BindingInWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInWhenOnSyntax; });
/* harmony import */ var _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_in_syntax */ "./node_modules/inversify/es/syntax/binding_in_syntax.js");
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");



var BindingInWhenOnSyntax = (function () {
    function BindingInWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingWhenSyntax */ "a"](this._binding);
        this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingOnSyntax */ "a"](this._binding);
        this._bindingInSyntax = new _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingInSyntax */ "a"](binding);
    }
    BindingInWhenOnSyntax.prototype.inRequestScope = function () {
        return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
        return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
        return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingInWhenOnSyntax;
}());

//# sourceMappingURL=binding_in_when_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_on_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_on_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingOnSyntax */
/*! exports used: BindingOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingOnSyntax; });
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");

var BindingOnSyntax = (function () {
    function BindingOnSyntax(binding) {
        this._binding = binding;
    }
    BindingOnSyntax.prototype.onActivation = function (handler) {
        this._binding.onActivation = handler;
        return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingWhenSyntax */ "a"](this._binding);
    };
    return BindingOnSyntax;
}());

//# sourceMappingURL=binding_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_to_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_to_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingToSyntax */
/*! exports used: BindingToSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingToSyntax; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_in_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");




var BindingToSyntax = (function () {
    function BindingToSyntax(binding) {
        this._binding = binding;
    }
    BindingToSyntax.prototype.to = function (constructor) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance;
        this._binding.implementationType = constructor;
        return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toSelf = function () {
        if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_TO_SELF_VALUE */ "p"]);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
    };
    BindingToSyntax.prototype.toConstantValue = function (value) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toDynamicValue = function (func) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toConstructor = function (constructor) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor;
        this._binding.implementationType = constructor;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toFactory = function (factory) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;
        this._binding.factory = factory;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toFunction = function (func) {
        if (typeof func !== "function") {
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_FUNCTION_BINDING */ "n"]);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return bindingWhenOnSyntax;
    };
    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;
        this._binding.factory = function (context) {
            var autofactory = function () { return context.container.get(serviceIdentifier); };
            return autofactory;
        };
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toProvider = function (provider) {
        this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider;
        this._binding.provider = provider;
        this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
        return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
    };
    BindingToSyntax.prototype.toService = function (service) {
        this.toDynamicValue(function (context) { return context.container.get(service); });
    };
    return BindingToSyntax;
}());

//# sourceMappingURL=binding_to_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js":
/*!********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_on_syntax.js ***!
  \********************************************************************/
/*! exports provided: BindingWhenOnSyntax */
/*! exports used: BindingWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenOnSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");


var BindingWhenOnSyntax = (function () {
    function BindingWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenSyntax */ "a"](this._binding);
        this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    }
    BindingWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingWhenOnSyntax;
}());

//# sourceMappingURL=binding_when_on_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_syntax.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_syntax.js ***!
  \*****************************************************************/
/*! exports provided: BindingWhenSyntax */
/*! exports used: BindingWhenSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _constraint_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");


var BindingWhenSyntax = (function () {
    function BindingWhenSyntax(binding) {
        this._binding = binding;
    }
    BindingWhenSyntax.prototype.when = function (constraint) {
        this._binding.constraint = constraint;
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
        this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name);
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
        this._binding.constraint = function (request) {
            var targetIsDefault = (request.target !== null) &&
                (!request.target.isNamed()) &&
                (!request.target.isTagged());
            return targetIsDefault;
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
        this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value);
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(parent)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value)(request.parentRequest);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
        };
        return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
    };
    return BindingWhenSyntax;
}());

//# sourceMappingURL=binding_when_syntax.js.map

/***/ }),

/***/ "./node_modules/inversify/es/syntax/constraint_helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/constraint_helpers.js ***!
  \****************************************************************/
/*! exports provided: traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint */
/*! exports used: namedConstraint, taggedConstraint, traverseAncerstors, typeConstraint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return traverseAncerstors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return taggedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return namedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return typeConstraint; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");


var traverseAncerstors = function (request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
var taggedConstraint = function (key) { return function (value) {
    var constraint = function (request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](key, value);
    return constraint;
}; };
var namedConstraint = taggedConstraint(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
var typeConstraint = function (type) { return function (request) {
    var binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
}; };

//# sourceMappingURL=constraint_helpers.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/binding_utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/binding_utils.js ***!
  \**********************************************************/
/*! exports provided: multiBindToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export multiBindToService */
var multiBindToService = function (container) {
    return function (service) {
        return function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            return types.forEach(function (t) { return container.bind(t).toService(service); });
        };
    };
};
//# sourceMappingURL=binding_utils.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/exceptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/utils/exceptions.js ***!
  \*******************************************************/
/*! exports provided: isStackOverflowExeption */
/*! exports used: isStackOverflowExeption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isStackOverflowExeption; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* STACK_OVERFLOW */ "y"]);
}
//# sourceMappingURL=exceptions.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/id.js":
/*!***********************************************!*\
  !*** ./node_modules/inversify/es/utils/id.js ***!
  \***********************************************/
/*! exports provided: id */
/*! exports used: id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return id; });
var idCounter = 0;
function id() {
    return idCounter++;
}

//# sourceMappingURL=id.js.map

/***/ }),

/***/ "./node_modules/inversify/es/utils/serialization.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/serialization.js ***!
  \**********************************************************/
/*! exports provided: getFunctionName, getServiceIdentifierAsString, listRegisteredBindingsForServiceIdentifier, listMetadataForTarget, circularDependencyToException */
/*! exports used: circularDependencyToException, getFunctionName, getServiceIdentifierAsString, listMetadataForTarget, listRegisteredBindingsForServiceIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getServiceIdentifierAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listRegisteredBindingsForServiceIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listMetadataForTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return circularDependencyToException; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
    }
    else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
    }
    else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
    }
}
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function (binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
                name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
        });
    }
    return registeredBindingsList;
}
function alreadyDependencyChain(request, serviceIdentifier) {
    if (request.parentRequest === null) {
        return false;
    }
    else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
    }
    else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
    }
}
function dependencyChainToString(request) {
    function _createStringArr(req, result) {
        if (result === void 0) { result = []; }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
        }
        return result;
    }
    var stringArr = _createStringArr(request);
    return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
    request.childRequests.forEach(function (childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* CIRCULAR_DEPENDENCY */ "d"] + " " + services);
        }
        else {
            circularDependencyToException(childRequest);
        }
    });
}
function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
            otherTags.forEach(function (tag) {
                m_1 += tag.toString() + "\n";
            });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    }
    else {
        return " " + serviceIdentifierString;
    }
}
function getFunctionName(v) {
    if (v.name) {
        return v.name;
    }
    else {
        var name_1 = v.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
    }
}

//# sourceMappingURL=serialization.js.map

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/ObserverComponent.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/ObserverComponent.js ***!
  \**************************************************************/
/*! exports provided: Observer */
/*! exports used: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObserverComponent; });
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return Object(_useObserver__WEBPACK_IMPORTED_MODULE_0__[/* useObserver */ "a"])(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";

function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/assertEnvironment.js":
/*!**************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/assertEnvironment.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


if (!react__WEBPACK_IMPORTED_MODULE_1__["useState"]) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!mobx__WEBPACK_IMPORTED_MODULE_0__[/* spy */ "o"]) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/index.js ***!
  \**************************************************/
/*! exports provided: isUsingStaticRendering, useStaticRendering, observer, useObserver, Observer, useForceUpdate, useAsObservableSource, useLocalStore, useQueuedForceUpdate, useQueuedForceUpdateBlock, isObserverBatched, observerBatching */
/*! exports used: Observer, isUsingStaticRendering, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assertEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assertEnvironment */ "./node_modules/mobx-react-lite/es/assertEnvironment.js");
/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js");
/* harmony import */ var _observerBatching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observerBatching */ "./node_modules/mobx-react-lite/es/observerBatching.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _staticRendering__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observer */ "./node_modules/mobx-react-lite/es/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _observer__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
/* harmony import */ var _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObserverComponent */ "./node_modules/mobx-react-lite/es/ObserverComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ObserverComponent__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _useLocalStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useLocalStore */ "./node_modules/mobx-react-lite/es/useLocalStore.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");



Object(_observerBatching__WEBPACK_IMPORTED_MODULE_2__[/* observerBatching */ "a"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__[/* unstable_batchedUpdates */ "a"]);











/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observer.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observer.js ***!
  \*****************************************************/
/*! exports provided: observer */
/*! exports used: observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _useObserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useObserver */ "./node_modules/mobx-react-lite/es/useObserver.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_1__[/* isUsingStaticRendering */ "a"])()) {
        return baseComponent;
    }
    var realOptions = __assign({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return Object(_useObserver__WEBPACK_IMPORTED_MODULE_2__[/* useObserver */ "a"])(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not interested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(wrappedComponent));
    }
    else {
        memoComponent = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (!hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/observerBatching.js":
/*!*************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/observerBatching.js ***!
  \*************************************************************/
/*! exports provided: defaultNoopBatch, observerBatching, isObserverBatched */
/*! exports used: observerBatching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultNoopBatch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return observerBatching; });
/* unused harmony export isObserverBatched */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");


var observerBatchingConfiguredSymbol = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getSymbol */ "b"])("observerBatching");
function defaultNoopBatch(callback) {
    callback();
}
function observerBatching(reactionScheduler) {
    if (!reactionScheduler) {
        reactionScheduler = defaultNoopBatch;
        if (true) {
            console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native");
        }
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* configure */ "f"])({ reactionScheduler: reactionScheduler });
    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol] = true;
}
var isObserverBatched = function () { return !!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* getGlobal */ "a"])()[observerBatchingConfiguredSymbol]; };


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/printDebugValue.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/printDebugValue.js ***!
  \************************************************************/
/*! exports provided: printDebugValue */
/*! exports used: printDebugValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return printDebugValue; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");

function printDebugValue(v) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* getDependencyTree */ "h"])(v);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js":
/*!********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/reactionCleanupTracking.js ***!
  \********************************************************************/
/*! exports provided: createTrackingData, CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS, CLEANUP_TIMER_LOOP_MILLIS, scheduleCleanupOfReactionIfLeaked, recordReactionAsCommitted, forceCleanupTimerToRunNowForTests, resetCleanupScheduleForTests */
/*! exports used: createTrackingData, recordReactionAsCommitted, scheduleCleanupOfReactionIfLeaked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createTrackingData; });
/* unused harmony export CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS */
/* unused harmony export CLEANUP_TIMER_LOOP_MILLIS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scheduleCleanupOfReactionIfLeaked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return recordReactionAsCommitted; });
/* unused harmony export forceCleanupTimerToRunNowForTests */
/* unused harmony export resetCleanupScheduleForTests */
function createTrackingData(reaction) {
    var trackingData = {
        cleanAt: Date.now() + CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS,
        reaction: reaction
    };
    return trackingData;
}
/**
 * The minimum time before we'll clean up a Reaction created in a render
 * for a component that hasn't managed to run its effects. This needs to
 * be big enough to ensure that a component won't turn up and have its
 * effects run without being re-rendered.
 */
var CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS = 10000;
/**
 * The frequency with which we'll check for leaked reactions.
 */
var CLEANUP_TIMER_LOOP_MILLIS = 10000;
/**
 * Reactions created by components that have yet to be fully mounted.
 */
var uncommittedReactionRefs = new Set();
/**
 * Latest 'uncommitted reactions' cleanup timer handle.
 */
var reactionCleanupHandle;
function ensureCleanupTimerRunning() {
    if (reactionCleanupHandle === undefined) {
        reactionCleanupHandle = setTimeout(cleanUncommittedReactions, CLEANUP_TIMER_LOOP_MILLIS);
    }
}
function scheduleCleanupOfReactionIfLeaked(ref) {
    uncommittedReactionRefs.add(ref);
    ensureCleanupTimerRunning();
}
function recordReactionAsCommitted(reactionRef) {
    uncommittedReactionRefs.delete(reactionRef);
}
/**
 * Run by the cleanup timer to dispose any outstanding reactions
 */
function cleanUncommittedReactions() {
    reactionCleanupHandle = undefined;
    // Loop through all the candidate leaked reactions; those older
    // than CLEANUP_LEAKED_REACTIONS_AFTER_MILLIS get tidied.
    var now = Date.now();
    uncommittedReactionRefs.forEach(function (ref) {
        var tracking = ref.current;
        if (tracking) {
            if (now >= tracking.cleanAt) {
                // It's time to tidy up this leaked reaction.
                tracking.reaction.dispose();
                ref.current = null;
                uncommittedReactionRefs.delete(ref);
            }
        }
    });
    if (uncommittedReactionRefs.size > 0) {
        // We've just finished a round of cleanups but there are still
        // some leak candidates outstanding.
        ensureCleanupTimerRunning();
    }
}
/* istanbul ignore next */
/**
 * Only to be used by test functions; do not export outside of mobx-react-lite
 */
function forceCleanupTimerToRunNowForTests() {
    // This allows us to control the execution of the cleanup timer
    // to force it to run at awkward times in unit tests.
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        cleanUncommittedReactions();
    }
}
/* istanbul ignore next */
function resetCleanupScheduleForTests() {
    if (reactionCleanupHandle) {
        clearTimeout(reactionCleanupHandle);
        reactionCleanupHandle = undefined;
    }
    uncommittedReactionRefs.clear();
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/staticRendering.js":
/*!************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/staticRendering.js ***!
  \************************************************************/
/*! exports provided: useStaticRendering, isUsingStaticRendering */
/*! exports used: isUsingStaticRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useStaticRendering */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUsingStaticRendering; });
var globalIsUsingStaticRendering = false;
function useStaticRendering(enable) {
    globalIsUsingStaticRendering = enable;
}
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useAsObservableSource.js":
/*!******************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useAsObservableSource.js ***!
  \******************************************************************/
/*! exports provided: useAsObservableSourceInternal, useAsObservableSource */
/*! exports used: useAsObservableSourceInternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAsObservableSourceInternal; });
/* unused harmony export useAsObservableSource */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function useAsObservableSourceInternal(current, usedByLocalStore) {
    var culprit = usedByLocalStore ? "useLocalStore" : "useAsObservableSource";
    if ( true && usedByLocalStore) {
        var _a = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(current), 1), initialSource = _a[0];
        if ((initialSource !== undefined && current === undefined) ||
            (initialSource === undefined && current !== undefined)) {
            throw new Error("make sure you never pass `undefined` to " + culprit);
        }
    }
    if (usedByLocalStore && current === undefined) {
        return undefined;
    }
    if ( true && !Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "c"])(current)) {
        throw new Error(culprit + " expects a plain object as " + (usedByLocalStore ? "second" : "first") + " argument");
    }
    var _b = __read(react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () { return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "m"])(current, {}, { deep: false }); }), 1), res = _b[0];
    if ( true &&
        Object.keys(res).length !== Object.keys(current).length) {
        throw new Error("the shape of objects passed to " + culprit + " should be stable");
    }
    Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "n"])(function () {
        Object.assign(res, current);
    });
    return res;
}
function useAsObservableSource(current) {
    return useAsObservableSourceInternal(current, false);
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useLocalStore.js":
/*!**********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useLocalStore.js ***!
  \**********************************************************/
/*! exports provided: useLocalStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useLocalStore */
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAsObservableSource */ "./node_modules/mobx-react-lite/es/useAsObservableSource.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");




function useLocalStore(initializer, current) {
    var source = Object(_useAsObservableSource__WEBPACK_IMPORTED_MODULE_2__[/* useAsObservableSourceInternal */ "a"])(current, true);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(function () {
        var local = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "m"])(initializer(source));
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isPlainObject */ "c"])(local)) {
            Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* runInAction */ "n"])(function () {
                Object.keys(local).forEach(function (key) {
                    var value = local[key];
                    if (typeof value === "function") {
                        // @ts-ignore No idea why ts2536 is popping out here
                        local[key] = wrapInTransaction(value, local);
                    }
                });
            });
        }
        return local;
    })[0];
}
// tslint:disable-next-line: ban-types
function wrapInTransaction(fn, context) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* transaction */ "p"])(function () { return fn.apply(context, args); });
    };
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useObserver.js":
/*!********************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useObserver.js ***!
  \********************************************************/
/*! exports provided: useObserver */
/*! exports used: useObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useObserver; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _printDebugValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printDebugValue */ "./node_modules/mobx-react-lite/es/printDebugValue.js");
/* harmony import */ var _reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reactionCleanupTracking */ "./node_modules/mobx-react-lite/es/reactionCleanupTracking.js");
/* harmony import */ var _staticRendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staticRendering */ "./node_modules/mobx-react-lite/es/staticRendering.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/mobx-react-lite/es/utils.js");
/* harmony import */ var _useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useQueuedForceUpdate */ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js");







var EMPTY_OBJECT = {};
function observerComponentNameFor(baseComponentName) {
    return "observer" + baseComponentName;
}
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT; }
    if (Object(_staticRendering__WEBPACK_IMPORTED_MODULE_4__[/* isUsingStaticRendering */ "a"])()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || _utils__WEBPACK_IMPORTED_MODULE_5__[/* useForceUpdate */ "d"];
    var forceUpdate = wantedForceUpdateHook();
    var queuedForceUpdate = Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdate */ "a"])(forceUpdate);
    // StrictMode/ConcurrentMode/Suspense may mean that our component is
    // rendered and abandoned multiple times, so we need to track leaked
    // Reactions.
    var reactionTrackingRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
    if (!reactionTrackingRef.current) {
        // First render for this component (or first time since a previous
        // reaction from an abandoned render was disposed).
        var newReaction_1 = new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
            // Observable has changed, meaning we want to re-render
            // BUT if we're a component that hasn't yet got to the useEffect()
            // stage, we might be a component that _started_ to render, but
            // got dropped, and we don't want to make state changes then.
            // (It triggers warnings in StrictMode, for a start.)
            if (trackingData_1.mounted) {
                // We have reached useEffect(), so we're mounted, and can trigger an update
                queuedForceUpdate();
            }
            else {
                // We haven't yet reached useEffect(), so we'll need to trigger a re-render
                // when (and if) useEffect() arrives.  The easiest way to do that is just to
                // drop our current reaction and allow useEffect() to recreate it.
                newReaction_1.dispose();
                reactionTrackingRef.current = null;
            }
        });
        var trackingData_1 = Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* createTrackingData */ "a"])(newReaction_1);
        reactionTrackingRef.current = trackingData_1;
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* scheduleCleanupOfReactionIfLeaked */ "c"])(reactionTrackingRef);
    }
    var reaction = reactionTrackingRef.current.reaction;
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(reaction, _printDebugValue__WEBPACK_IMPORTED_MODULE_2__[/* printDebugValue */ "a"]);
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
        // Called on first mount only
        Object(_reactionCleanupTracking__WEBPACK_IMPORTED_MODULE_3__[/* recordReactionAsCommitted */ "b"])(reactionTrackingRef);
        if (reactionTrackingRef.current) {
            // Great. We've already got our reaction from our render;
            // all we need to do is to record that it's now mounted,
            // to allow future observable changes to trigger re-renders
            reactionTrackingRef.current.mounted = true;
        }
        else {
            // The reaction we set up in our render has been disposed.
            // This is either due to bad timings of renderings, e.g. our
            // component was paused for a _very_ long time, and our
            // reaction got cleaned up, or we got a observable change
            // between render and useEffect
            // Re-create the reaction
            reactionTrackingRef.current = {
                reaction: new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](observerComponentNameFor(baseComponentName), function () {
                    // We've definitely already been mounted at this point
                    queuedForceUpdate();
                }),
                cleanAt: Infinity
            };
            queuedForceUpdate();
        }
        return function () {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        };
    }, []);
    // delay all force-update calls after rendering of this component
    return Object(_useQueuedForceUpdate__WEBPACK_IMPORTED_MODULE_6__[/* useQueuedForceUpdateBlock */ "b"])(function () {
        // render the original component, but have the
        // reaction track the observables, so that rendering
        // can be invalidated (see above) once a dependency changes
        var rendering;
        var exception;
        reaction.track(function () {
            try {
                rendering = fn();
            }
            catch (e) {
                exception = e;
            }
        });
        if (exception) {
            throw exception; // re-throw any exceptions caught during rendering
        }
        return rendering;
    });
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/useQueuedForceUpdate.js ***!
  \*****************************************************************/
/*! exports provided: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/*! exports used: useQueuedForceUpdate, useQueuedForceUpdateBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useQueuedForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useQueuedForceUpdateBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var insideRender = false;
var forceUpdateQueue = [];
function useQueuedForceUpdate(forceUpdate) {
    return function () {
        if (insideRender) {
            forceUpdateQueue.push(forceUpdate);
        }
        else {
            forceUpdate();
        }
    };
}
function useQueuedForceUpdateBlock(callback) {
    // start intercepting force-update calls
    insideRender = true;
    forceUpdateQueue = [];
    try {
        var result = callback();
        // stop intercepting force-update
        insideRender = false;
        // store queue or nothing if it was empty to execute useLayoutEffect only when necessary
        var queue_1 = forceUpdateQueue.length > 0 ? forceUpdateQueue : undefined;
        // run force-update queue in useLayoutEffect
        react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect(function () {
            if (queue_1) {
                queue_1.forEach(function (x) { return x(); });
            }
        }, [queue_1]);
        return result;
    }
    finally {
        insideRender = false;
    }
}


/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils.js ***!
  \**************************************************/
/*! exports provided: useUnmount, useForceUpdate, isPlainObject, getSymbol, getGlobal */
/*! exports used: getGlobal, getSymbol, isPlainObject, useForceUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* unused harmony export useUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useForceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getGlobal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

var EMPTY_ARRAY = [];
function useUnmount(fn) {
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () { return fn; }, EMPTY_ARRAY);
}
function useForceUpdate() {
    var _a = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), setTick = _a[1];
    var update = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}
function isPlainObject(value) {
    if (!value || typeof value !== "object") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    return !proto || proto === Object.prototype;
}
function getSymbol(name) {
    if (typeof Symbol === "function") {
        return Symbol.for(name);
    }
    return "__$mobx-react " + name + "__";
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mobx-react-lite/es/utils/reactBatchedUpdates.js ***!
  \**********************************************************************/
/*! exports provided: unstable_batchedUpdates */
/*! exports used: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/@tarojs/react/dist/react.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),

/***/ "./node_modules/mobx-react/dist/mobxreact.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/mobx-react/dist/mobxreact.esm.js ***!
  \*******************************************************/
/*! exports provided: Observer, isUsingStaticRendering, observerBatching, useAsObservableSource, useLocalStore, useObserver, useStaticRendering, MobXProviderContext, PropTypes, Provider, disposeOnUnmount, inject, observer */
/*! exports used: MobXProviderContext, Provider, inject, observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobXProviderContext; });
/* unused harmony export PropTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Provider; });
/* unused harmony export disposeOnUnmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return observer; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/dist/mobx.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");





var symbolId = 0;

function createSymbol(name) {
  if (typeof Symbol === "function") {
    return Symbol(name);
  }

  var symbol = "__$mobx-react " + name + " (" + symbolId + ")";
  symbolId++;
  return symbol;
}

var createdSymbols = {};
function newSymbol(name) {
  if (!createdSymbols[name]) {
    createdSymbols[name] = createSymbol(name);
  }

  return createdSymbols[name];
}
function shallowEqual(objA, objB) {
  //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (is(objA, objB)) return true;

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!Object.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

function is(x, y) {
  // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
} // based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js


var hoistBlackList = {
  $$typeof: 1,
  render: 1,
  compare: 1,
  type: 1,
  childContextTypes: 1,
  contextType: 1,
  contextTypes: 1,
  defaultProps: 1,
  getDefaultProps: 1,
  getDerivedStateFromError: 1,
  getDerivedStateFromProps: 1,
  mixins: 1,
  propTypes: 1
};
function copyStaticProperties(base, target) {
  var protoProps = Object.getOwnPropertyNames(Object.getPrototypeOf(base));
  Object.getOwnPropertyNames(base).forEach(function (key) {
    if (!hoistBlackList[key] && protoProps.indexOf(key) === -1) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
    }
  });
}
/**
 * Helper to set `prop` to `this` as non-enumerable (hidden prop)
 * @param target
 * @param prop
 * @param value
 */

function setHiddenProp(target, prop, value) {
  if (!Object.hasOwnProperty.call(target, prop)) {
    Object.defineProperty(target, prop, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: value
    });
  } else {
    target[prop] = value;
  }
}
/**
 * Utilities for patching componentWillUnmount, to make sure @disposeOnUnmount works correctly icm with user defined hooks
 * and the handler provided by mobx-react
 */

var mobxMixins =
/*#__PURE__*/
newSymbol("patchMixins");
var mobxPatchedDefinition =
/*#__PURE__*/
newSymbol("patchedDefinition");

function getMixins(target, methodName) {
  var mixins = target[mobxMixins] = target[mobxMixins] || {};
  var methodMixins = mixins[methodName] = mixins[methodName] || {};
  methodMixins.locks = methodMixins.locks || 0;
  methodMixins.methods = methodMixins.methods || [];
  return methodMixins;
}

function wrapper(realMethod, mixins) {
  var _this = this;

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  // locks are used to ensure that mixins are invoked only once per invocation, even on recursive calls
  mixins.locks++;

  try {
    var retVal;

    if (realMethod !== undefined && realMethod !== null) {
      retVal = realMethod.apply(this, args);
    }

    return retVal;
  } finally {
    mixins.locks--;

    if (mixins.locks === 0) {
      mixins.methods.forEach(function (mx) {
        mx.apply(_this, args);
      });
    }
  }
}

function wrapFunction(realMethod, mixins) {
  var fn = function fn() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    wrapper.call.apply(wrapper, [this, realMethod, mixins].concat(args));
  };

  return fn;
}

function patch(target, methodName, mixinMethod) {
  var mixins = getMixins(target, methodName);

  if (mixins.methods.indexOf(mixinMethod) < 0) {
    mixins.methods.push(mixinMethod);
  }

  var oldDefinition = Object.getOwnPropertyDescriptor(target, methodName);

  if (oldDefinition && oldDefinition[mobxPatchedDefinition]) {
    // already patched definition, do not repatch
    return;
  }

  var originalMethod = target[methodName];
  var newDefinition = createDefinition(target, methodName, oldDefinition ? oldDefinition.enumerable : undefined, mixins, originalMethod);
  Object.defineProperty(target, methodName, newDefinition);
}

function createDefinition(target, methodName, enumerable, mixins, originalMethod) {
  var _ref;

  var wrappedFunc = wrapFunction(originalMethod, mixins);
  return _ref = {}, _ref[mobxPatchedDefinition] = true, _ref.get = function get() {
    return wrappedFunc;
  }, _ref.set = function set(value) {
    if (this === target) {
      wrappedFunc = wrapFunction(value, mixins);
    } else {
      // when it is an instance of the prototype/a child prototype patch that particular case again separately
      // since we need to store separate values depending on wether it is the actual instance, the prototype, etc
      // e.g. the method for super might not be the same as the method for the prototype which might be not the same
      // as the method for the instance
      var newDefinition = createDefinition(this, methodName, enumerable, mixins, value);
      Object.defineProperty(this, methodName, newDefinition);
    }
  }, _ref.configurable = true, _ref.enumerable = enumerable, _ref;
}

var mobxAdminProperty = mobx__WEBPACK_IMPORTED_MODULE_0__[/* $mobx */ "a"] || "$mobx";
var mobxObserverProperty =
/*#__PURE__*/
newSymbol("isMobXReactObserver");
var mobxIsUnmounted =
/*#__PURE__*/
newSymbol("isUnmounted");
var skipRenderKey =
/*#__PURE__*/
newSymbol("skipRender");
var isForcingUpdateKey =
/*#__PURE__*/
newSymbol("isForcingUpdate");
function makeClassComponentObserver(componentClass) {
  var target = componentClass.prototype;

  if (componentClass[mobxObserverProperty]) {
    var displayName = getDisplayName(target);
    console.warn("The provided component class (" + displayName + ") \n                has already been declared as an observer component.");
  } else {
    componentClass[mobxObserverProperty] = true;
  }

  if (target.componentWillReact) throw new Error("The componentWillReact life-cycle event is no longer supported");

  if (componentClass["__proto__"] !== react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]) {
    if (!target.shouldComponentUpdate) target.shouldComponentUpdate = observerSCU;else if (target.shouldComponentUpdate !== observerSCU) // n.b. unequal check, instead of existence check, as @observer might be on superclass as well
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  } // this.props and this.state are made observable, just to make sure @computed fields that
  // are defined inside the component, and which rely on state or props, re-compute if state or props change
  // (otherwise the computed wouldn't update and become stale on props change, since props are not observable)
  // However, this solution is not without it's own problems: https://github.com/mobxjs/mobx-react/issues?utf8=%E2%9C%93&q=is%3Aissue+label%3Aobservable-props-or-not+


  makeObservableProp(target, "props");
  makeObservableProp(target, "state");
  var baseRender = target.render;

  target.render = function () {
    return makeComponentReactive.call(this, baseRender);
  };

  patch(target, "componentWillUnmount", function () {
    var _this$render$mobxAdmi;

    if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[/* isUsingStaticRendering */ "b"])() === true) return;
    (_this$render$mobxAdmi = this.render[mobxAdminProperty]) === null || _this$render$mobxAdmi === void 0 ? void 0 : _this$render$mobxAdmi.dispose();
    this[mobxIsUnmounted] = true;

    if (!this.render[mobxAdminProperty]) {
      // Render may have been hot-swapped and/or overriden by a subclass.
      var _displayName = getDisplayName(this);

      console.warn("The reactive render of an observer class component (" + _displayName + ") \n                was overriden after MobX attached. This may result in a memory leak if the \n                overriden reactive render was not properly disposed.");
    }
  });
  return componentClass;
} // Generates a friendly name for debugging

function getDisplayName(comp) {
  return comp.displayName || comp.name || comp.constructor && (comp.constructor.displayName || comp.constructor.name) || "<component>";
}

function makeComponentReactive(render) {
  var _this = this;

  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[/* isUsingStaticRendering */ "b"])() === true) return render.call(this);
  /**
   * If props are shallowly modified, react will render anyway,
   * so atom.reportChanged() should not result in yet another re-render
   */

  setHiddenProp(this, skipRenderKey, false);
  /**
   * forceUpdate will re-assign this.props. We don't want that to cause a loop,
   * so detect these changes
   */

  setHiddenProp(this, isForcingUpdateKey, false);
  var initialName = getDisplayName(this);
  var baseRender = render.bind(this);
  var isRenderingPending = false;
  var reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__[/* Reaction */ "b"](initialName + ".render()", function () {
    if (!isRenderingPending) {
      // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
      // This unidiomatic React usage but React will correctly warn about this so we continue as usual
      // See #85 / Pull #44
      isRenderingPending = true;

      if (_this[mobxIsUnmounted] !== true) {
        var hasError = true;

        try {
          setHiddenProp(_this, isForcingUpdateKey, true);
          if (!_this[skipRenderKey]) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
          hasError = false;
        } finally {
          setHiddenProp(_this, isForcingUpdateKey, false);
          if (hasError) reaction.dispose();
        }
      }
    }
  });
  reaction["reactComponent"] = this;
  reactiveRender[mobxAdminProperty] = reaction;
  this.render = reactiveRender;

  function reactiveRender() {
    isRenderingPending = false;
    var exception = undefined;
    var rendering = undefined;
    reaction.track(function () {
      try {
        rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateChanges */ "c"])(false, baseRender);
      } catch (e) {
        exception = e;
      }
    });

    if (exception) {
      throw exception;
    }

    return rendering;
  }

  return reactiveRender.call(this);
}

function observerSCU(nextProps, nextState) {
  if (Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[/* isUsingStaticRendering */ "b"])()) {
    console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
  } // update on any state changes (as is the default)


  if (this.state !== nextState) {
    return true;
  } // update if props are shallowly not equal, inspired by PureRenderMixin
  // we could return just 'false' here, and avoid the `skipRender` checks etc
  // however, it is nicer if lifecycle events are triggered like usually,
  // so we return true here if props are shallowly modified.


  return !shallowEqual(this.props, nextProps);
}

function makeObservableProp(target, propName) {
  var valueHolderKey = newSymbol("reactProp_" + propName + "_valueHolder");
  var atomHolderKey = newSymbol("reactProp_" + propName + "_atomHolder");

  function getAtom() {
    if (!this[atomHolderKey]) {
      setHiddenProp(this, atomHolderKey, Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* createAtom */ "g"])("reactive " + propName));
    }

    return this[atomHolderKey];
  }

  Object.defineProperty(target, propName, {
    configurable: true,
    enumerable: true,
    get: function get() {
      var prevReadState = false;

      if (mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsEnd */ "d"]) {
        prevReadState = Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsStart */ "e"])(true);
      }

      getAtom.call(this).reportObserved();

      if (mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsStart */ "e"] && mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsEnd */ "d"]) {
        Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* _allowStateReadsEnd */ "d"])(prevReadState);
      }

      return this[valueHolderKey];
    },
    set: function set(v) {
      if (!this[isForcingUpdateKey] && !shallowEqual(this[valueHolderKey], v)) {
        setHiddenProp(this, valueHolderKey, v);
        setHiddenProp(this, skipRenderKey, true);
        getAtom.call(this).reportChanged();
        setHiddenProp(this, skipRenderKey, false);
      } else {
        setHiddenProp(this, valueHolderKey, v);
      }
    }
  });
}

var hasSymbol = typeof Symbol === "function" && Symbol.for; // Using react-is had some issues (and operates on elements, not on types), see #608 / #609

var ReactForwardRefSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.forward_ref") : typeof react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props) {
  return null;
})["$$typeof"];
var ReactMemoSymbol = hasSymbol ?
/*#__PURE__*/
Symbol.for("react.memo") : typeof react__WEBPACK_IMPORTED_MODULE_1__["memo"] === "function" &&
/*#__PURE__*/
Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function (props) {
  return null;
})["$$typeof"];
/**
 * Observer function / decorator
 */

function observer(component) {
  if (component["isMobxInjector"] === true) {
    console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
  }

  if (ReactMemoSymbol && component["$$typeof"] === ReactMemoSymbol) {
    throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");
  } // Unwrap forward refs into `<Observer>` component
  // we need to unwrap the render, because it is the inner render that needs to be tracked,
  // not the ForwardRef HoC


  if (ReactForwardRefSymbol && component["$$typeof"] === ReactForwardRefSymbol) {
    var baseRender = component["render"];
    if (typeof baseRender !== "function") throw new Error("render property of ForwardRef was not a function");
    return Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function ObserverForwardRef() {
      var args = arguments;
      return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[/* Observer */ "a"], null, function () {
        return baseRender.apply(undefined, args);
      });
    });
  } // Function component


  if (typeof component === "function" && (!component.prototype || !component.prototype.render) && !component["isReactClass"] && !Object.prototype.isPrototypeOf.call(react__WEBPACK_IMPORTED_MODULE_1__["Component"], component)) {
    return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_2__[/* observer */ "c"])(component);
  }

  return makeClassComponentObserver(component);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var MobXProviderContext =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Provider(props) {
  var children = props.children,
      stores = _objectWithoutPropertiesLoose(props, ["children"]);

  var parentValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
  var mutableProviderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(_extends({}, parentValue, stores));
  var value = mutableProviderRef.current;

  if (true) {
    var newValue = _extends({}, value, stores); // spread in previous state for the context based stores


    if (!shallowEqual(value, newValue)) {
      throw new Error("MobX Provider: The set of provided stores has changed. See: https://github.com/mobxjs/mobx-react#the-set-of-provided-stores-has-changed-error.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobXProviderContext.Provider, {
    value: value
  }, children);
}
Provider.displayName = "MobXProvider";

/**
 * Store Injection
 */

function createStoreInjector(grabStoresFn, component, injectNames, makeReactive) {
  // Support forward refs
  var Injector = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var newProps = _extends({}, props);

    var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MobXProviderContext);
    Object.assign(newProps, grabStoresFn(context || {}, newProps) || {});

    if (ref) {
      newProps.ref = ref;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, newProps);
  });
  if (makeReactive) Injector = observer(Injector);
  Injector["isMobxInjector"] = true; // assigned late to suppress observer warning
  // Static fields from component should be visible on the generated Injector

  copyStaticProperties(component, Injector);
  Injector["wrappedComponent"] = component;
  Injector.displayName = getInjectName(component, injectNames);
  return Injector;
}

function getInjectName(component, injectNames) {
  var displayName;
  var componentName = component.displayName || component.name || component.constructor && component.constructor.name || "Component";
  if (injectNames) displayName = "inject-with-" + injectNames + "(" + componentName + ")";else displayName = "inject(" + componentName + ")";
  return displayName;
}

function grabStoresByName(storeNames) {
  return function (baseStores, nextProps) {
    storeNames.forEach(function (storeName) {
      if (storeName in nextProps // prefer props over stores
      ) return;
      if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
      nextProps[storeName] = baseStores[storeName];
    });
    return nextProps;
  };
}
/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */


function inject() {
  for (var _len = arguments.length, storeNames = new Array(_len), _key = 0; _key < _len; _key++) {
    storeNames[_key] = arguments[_key];
  }

  if (typeof arguments[0] === "function") {
    var grabStoresFn = arguments[0];
    return function (componentClass) {
      return createStoreInjector(grabStoresFn, componentClass, grabStoresFn.name, true);
    };
  } else {
    return function (componentClass) {
      return createStoreInjector(grabStoresByName(storeNames), componentClass, storeNames.join("-"), false);
    };
  }
}

var protoStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountProto");
var instStoreKey =
/*#__PURE__*/
newSymbol("disposeOnUnmountInst");

function runDisposersOnWillUnmount() {
  var _this = this;
  [].concat(this[protoStoreKey] || [], this[instStoreKey] || []).forEach(function (propKeyOrFunction) {
    var prop = typeof propKeyOrFunction === "string" ? _this[propKeyOrFunction] : propKeyOrFunction;

    if (prop !== undefined && prop !== null) {
      if (Array.isArray(prop)) prop.map(function (f) {
        return f();
      });else prop();
    }
  });
}

function disposeOnUnmount(target, propertyKeyOrFunction) {
  if (Array.isArray(propertyKeyOrFunction)) {
    return propertyKeyOrFunction.map(function (fn) {
      return disposeOnUnmount(target, fn);
    });
  }

  var c = Object.getPrototypeOf(target).constructor;
  var c2 = Object.getPrototypeOf(target.constructor); // Special case for react-hot-loader

  var c3 = Object.getPrototypeOf(Object.getPrototypeOf(target));

  if (!(c === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c2 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.Component || c3 === react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent)) {
    throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");
  }

  if (typeof propertyKeyOrFunction !== "string" && typeof propertyKeyOrFunction !== "function" && !Array.isArray(propertyKeyOrFunction)) {
    throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");
  } // decorator's target is the prototype, so it doesn't have any instance properties like props


  var isDecorator = typeof propertyKeyOrFunction === "string"; // add property key / function we want run (disposed) to the store

  var componentWasAlreadyModified = !!target[protoStoreKey] || !!target[instStoreKey];
  var store = isDecorator ? // decorators are added to the prototype store
  target[protoStoreKey] || (target[protoStoreKey] = []) : // functions are added to the instance store
  target[instStoreKey] || (target[instStoreKey] = []);
  store.push(propertyKeyOrFunction); // tweak the component class componentWillUnmount if not done already

  if (!componentWasAlreadyModified) {
    patch(target, "componentWillUnmount", runDisposersOnWillUnmount);
  } // return the disposer as is if invoked as a non decorator


  if (typeof propertyKeyOrFunction !== "string") {
    return propertyKeyOrFunction;
  }
}

function createChainableTypeChecker(validator) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* untracked */ "q"])(function () {
      componentName = componentName || "<<anonymous>>";
      propFullName = propFullName || propName;

      if (props[propName] == null) {
        if (isRequired) {
          var actual = props[propName] === null ? "null" : "undefined";
          return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
        }

        return null;
      } else {
        // @ts-ignore rest arg is necessary for some React internals - fails tests otherwise
        return validator.apply(void 0, [props, propName, componentName, location, propFullName].concat(rest));
      }
    });
  }

  var chainedCheckType = checkType.bind(null, false); // Add isRequired to satisfy Requirable

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} // Copied from React.PropTypes


function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === "symbol") {
    return true;
  } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


  if (propValue["@@toStringTag"] === "Symbol") {
    return true;
  } // Fallback for non-spec compliant Symbols which are polyfilled.


  if (typeof Symbol === "function" && propValue instanceof Symbol) {
    return true;
  }

  return false;
} // Copied from React.PropTypes


function getPropType(propValue) {
  var propType = typeof propValue;

  if (Array.isArray(propValue)) {
    return "array";
  }

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }

  if (isSymbol(propType, propValue)) {
    return "symbol";
  }

  return propType;
} // This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes


function getPreciseType(propValue) {
  var propType = getPropType(propValue);

  if (propType === "object") {
    if (propValue instanceof Date) {
      return "date";
    } else if (propValue instanceof RegExp) {
      return "regexp";
    }
  }

  return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* untracked */ "q"])(function () {
      if (allowNativeType) {
        if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
      }

      var mobxChecker;

      switch (mobxType) {
        case "Array":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__[/* isObservableArray */ "i"];
          break;

        case "Object":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__[/* isObservableObject */ "k"];
          break;

        case "Map":
          mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__[/* isObservableMap */ "j"];
          break;

        default:
          throw new Error("Unexpected mobxType: " + mobxType);
      }

      var propValue = props[propName];

      if (!mobxChecker(propValue)) {
        var preciseType = getPreciseType(propValue);
        var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
        return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
      }

      return null;
    });
  });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
  return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
      rest[_key2 - 5] = arguments[_key2];
    }

    return Object(mobx__WEBPACK_IMPORTED_MODULE_0__[/* untracked */ "q"])(function () {
      if (typeof typeChecker !== "function") {
        return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
      } else {
        var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName, location, propFullName);
        if (error instanceof Error) return error;
        var propValue = props[propName];

        for (var i = 0; i < propValue.length; i++) {
          error = typeChecker.apply(void 0, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
          if (error instanceof Error) return error;
        }

        return null;
      }
    });
  });
}

var observableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, false);
var observableMap =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Map");
var observableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf =
/*#__PURE__*/
createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject =
/*#__PURE__*/
createObservableTypeCheckerCreator(true, "Object");
var PropTypes = {
  observableArray: observableArray,
  observableArrayOf: observableArrayOf,
  observableMap: observableMap,
  observableObject: observableObject,
  arrayOrObservableArray: arrayOrObservableArray,
  arrayOrObservableArrayOf: arrayOrObservableArrayOf,
  objectOrObservableObject: objectOrObservableObject
};

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__[/* observable */ "m"]) throw new Error("mobx-react requires mobx to be available");


//# sourceMappingURL=mobxreact.esm.js.map


/***/ }),

/***/ "./node_modules/mobx/dist/mobx.esm.js":
/*!********************************************!*\
  !*** ./node_modules/mobx/dist/mobx.esm.js ***!
  \********************************************/
/*! exports provided: $mobx, FlowCancellationError, ObservableMap, ObservableSet, Reaction, _allowStateChanges, _allowStateChangesInsideComputed, _allowStateReadsEnd, _allowStateReadsStart, _autoAction, _endAction, _getAdministration, _getGlobalState, _interceptReads, _isComputingDerivation, _resetGlobalState, _startAction, action, autorun, comparer, computed, configure, createAtom, defineProperty, entries, extendObservable, flow, flowResult, get, getAtom, getDebugName, getDependencyTree, getObserverTree, has, intercept, isAction, isBoxedObservable, isComputed, isComputedProp, isFlow, isFlowCancellationError, isObservable, isObservableArray, isObservableMap, isObservableObject, isObservableProp, isObservableSet, keys, makeAutoObservable, makeObservable, observable, observe, onBecomeObserved, onBecomeUnobserved, onReactionError, override, ownKeys, reaction, remove, runInAction, set, spy, toJS, trace, transaction, untracked, values, when */
/*! exports used: $mobx, Reaction, _allowStateChanges, _allowStateReadsEnd, _allowStateReadsStart, configure, createAtom, getDependencyTree, isObservableArray, isObservableMap, isObservableObject, makeAutoObservable, observable, runInAction, spy, transaction, untracked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $mobx; });
/* unused harmony export FlowCancellationError */
/* unused harmony export ObservableMap */
/* unused harmony export ObservableSet */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return allowStateChanges; });
/* unused harmony export _allowStateChangesInsideComputed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return allowStateReadsEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return allowStateReadsStart; });
/* unused harmony export _autoAction */
/* unused harmony export _endAction */
/* unused harmony export _getAdministration */
/* unused harmony export _getGlobalState */
/* unused harmony export _interceptReads */
/* unused harmony export _isComputingDerivation */
/* unused harmony export _resetGlobalState */
/* unused harmony export _startAction */
/* unused harmony export action */
/* unused harmony export autorun */
/* unused harmony export comparer */
/* unused harmony export computed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return configure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createAtom; });
/* unused harmony export defineProperty */
/* unused harmony export entries */
/* unused harmony export extendObservable */
/* unused harmony export flow */
/* unused harmony export flowResult */
/* unused harmony export get */
/* unused harmony export getAtom */
/* unused harmony export getDebugName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDependencyTree; });
/* unused harmony export getObserverTree */
/* unused harmony export has */
/* unused harmony export intercept */
/* unused harmony export isAction */
/* unused harmony export isBoxedObservable */
/* unused harmony export isComputed */
/* unused harmony export isComputedProp */
/* unused harmony export isFlow */
/* unused harmony export isFlowCancellationError */
/* unused harmony export isObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isObservableObject; });
/* unused harmony export isObservableProp */
/* unused harmony export isObservableSet */
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return makeAutoObservable; });
/* unused harmony export makeObservable */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return observable; });
/* unused harmony export observe */
/* unused harmony export onBecomeObserved */
/* unused harmony export onBecomeUnobserved */
/* unused harmony export onReactionError */
/* unused harmony export override */
/* unused harmony export ownKeys */
/* unused harmony export reaction */
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return runInAction; });
/* unused harmony export set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return spy; });
/* unused harmony export toJS */
/* unused harmony export trace */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return untracked; });
/* unused harmony export values */
/* unused harmony export when */
var niceErrors = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function _(annotationType, key) {
    return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
  },

  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function _(index, length) {
    return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function _(other) {
    return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
  },
  20: function _(other) {
    return "Cannot initialize map from " + other;
  },
  21: function _(dataStructure) {
    return "Cannot convert to map from '" + dataStructure + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function _(thing) {
    return "Cannot obtain administration from " + thing;
  },
  25: function _(property, name) {
    return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
  },
  26: "please specify a property",
  27: function _(property, name) {
    return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
  },
  28: function _(thing) {
    return "Cannot obtain atom from " + thing;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function _(name, derivation) {
    return "Cycle detected in computation " + name + ": " + derivation;
  },
  33: function _(name) {
    return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function _(name) {
    return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function _(method) {
    return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
};
var errors =  true ? niceErrors : undefined;
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (true) {
    var e = typeof error === "string" ? error : errors[error];
    if (typeof e === "function") e = e.apply(null, args);
    throw new Error("[MobX] " + e);
  }

  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}

var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }

  if (typeof window !== "undefined") {
    return window;
  }

  if (typeof global !== "undefined") {
    return global;
  }

  if (typeof self !== "undefined") {
    return self;
  }

  return mockGlobal;
}

var assign = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /*#__PURE__*/Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die( true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : undefined);
  }
}
function warnAboutProxyRequirement(msg) {
  if ( true && globalState.verifyProxies) {
    die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
  }
}
function getNextId() {
  return ++globalState.mobxGuid;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */

function once(func) {
  var invoked = false;
  return function () {
    if (invoked) return;
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop() {};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t = typeof value;

  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }

  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  var _proto$constructor;

  if (!isObject(value)) return false;
  var proto = Object.getPrototypeOf(value);
  if (proto == null) return true;
  return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
} // https://stackoverflow.com/a/37865170

function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) return false;
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) return true;
  return false;
}
function addHiddenProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function (x) {
    return isObject(x) && x[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
/**
 * Returns the following: own enumerable keys and symbols.
 */

function getPlainObjectKeys(object) {
  var keys = Object.keys(object); // Not supported in IE, so there are not going to be symbol props anyway...

  if (!hasGetOwnPropertySymbols) return keys;
  var symbols = Object.getOwnPropertySymbols(object);
  if (!symbols.length) return keys;
  return [].concat(keys, symbols.filter(function (s) {
    return objectPrototype.propertyIsEnumerable.call(object, s);
  }));
} // From Immer utils
// Returns all own keys, including non-enumerable and symbolic

var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function (obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} :
/* istanbul ignore next */
Object.getOwnPropertyNames;
function stringifyKey(key) {
  if (typeof key === "string") return key;
  if (typeof key === "symbol") return key.toString();
  return new String(key).toString();
}
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
} // From Immer utils

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(target) {
  // Polyfill needed for Hermes and IE, see https://github.com/facebook/hermes/issues/274
  var res = {}; // Note: without polyfill for ownKeys, symbols won't be picked up

  ownKeys(target).forEach(function (key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

var storedAnnotationsSymbol = /*#__PURE__*/Symbol("mobx-stored-annotations");
/**
 * Creates a function that acts as
 * - decorator
 * - annotation object
 */

function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    storeAnnotation(target, property, annotation);
  }

  return Object.assign(decorator, annotation);
}
/**
 * Stores annotation to prototype,
 * so it can be inspected later by `makeObservable` called from constructor
 */

function storeAnnotation(prototype, key, annotation) {
  if (!hasProp(prototype, storedAnnotationsSymbol)) {
    addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
  } // @override must override something


  if ( true && isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    die("'" + fieldName + "' is decorated with 'override', " + "but no such decorated member was found on prototype.");
  } // Cannot re-decorate


  assertNotDecorated(prototype, annotation, key); // Ignore override

  if (!isOverride(annotation)) {
    prototype[storedAnnotationsSymbol][key] = annotation;
  }
}

function assertNotDecorated(prototype, annotation, key) {
  if ( true && !isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
    var fieldName = prototype.constructor.name + ".prototype." + key.toString();
    var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed." + "\nUse '@override' decorator for methods overriden by subclass.");
  }
}
/**
 * Collects annotations from prototypes and stores them on target (instance)
 */


function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    if ( true && !target[storedAnnotationsSymbol]) {
      die("No annotations were passed to makeObservable, but no decorated members have been found either");
    } // We need a copy as we will remove annotation from the list once it's applied.


    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }

  return target[storedAnnotationsSymbol];
}

var $mobx = /*#__PURE__*/Symbol("mobx administration");
var Atom = /*#__PURE__*/function () {
  // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed

  /**
   * Create a new atom. For debugging purposes it is recommended to give it a name.
   * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
   */
  function Atom(name_) {
    if (name_ === void 0) {
      name_ =  true ? "Atom@" + getNextId() : undefined;
    }

    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
  } // onBecomeObservedListeners


  var _proto = Atom.prototype;

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Invoke this method to notify mobx that your atom has been used somehow.
   * Returns true if there is currently a reactive context.
   */
  ;

  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  }
  /**
   * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
   */
  ;

  _proto.reportChanged = function reportChanged() {
    startBatch();
    propagateChanged(this);
    endBatch();
  };

  _proto.toString = function toString() {
    return this.name_;
  };

  return Atom;
}();
var isAtom = /*#__PURE__*/createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }

  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }

  var atom = new Atom(name); // default `noop` listener will not initialize the hook Set

  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }

  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }

  return atom;
}

function identityComparer(a, b) {
  return a === b;
}

function structuralComparer(a, b) {
  return deepEqual(a, b);
}

function shallowComparer(a, b) {
  return deepEqual(a, b, 1);
}

function defaultComparer(a, b) {
  if (Object.is) return Object.is(a, b);
  return a === b ? a !== 0 || 1 / a === 1 / b : a !== a && b !== b;
}

var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};

function deepEnhancer(v, _, name) {
  // it is an observable already, done
  if (isObservable(v)) return v; // something that can be converted and mutated?

  if (Array.isArray(v)) return observable.array(v, {
    name: name
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name
  });

  if (typeof v === "function" && !isAction(v) && !isFlow(v)) {
    if (isGenerator(v)) {
      return flow(v);
    } else {
      return autoAction(name, v);
    }
  }

  return v;
}
function shallowEnhancer(v, _, name) {
  if (v === undefined || v === null) return v;
  if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
  if (Array.isArray(v)) return observable.array(v, {
    name: name,
    deep: false
  });
  if (isPlainObject(v)) return observable.object(v, undefined, {
    name: name,
    deep: false
  });
  if (isES6Map(v)) return observable.map(v, {
    name: name,
    deep: false
  });
  if (isES6Set(v)) return observable.set(v, {
    name: name,
    deep: false
  });
  if (true) die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
  // never turn into an observable
  return newValue;
}
function refStructEnhancer(v, oldValue) {
  if ( true && isObservable(v)) die("observable.struct should not be used with observable values");
  if (deepEqual(v, oldValue)) return oldValue;
  return v;
}

var OVERRIDE = "override";
var override = /*#__PURE__*/createDecoratorAnnotation({
  annotationType_: OVERRIDE,
  make_: make_,
  extend_: extend_
});
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}

function make_(adm, key) {
  // Must not be plain object
  if ( true && adm.isPlainObject_) {
    die("Cannot apply '" + this.annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + this.annotationType_ + "' cannot be used on plain objects."));
  } // Must override something


  if ( true && !hasProp(adm.appliedAnnotations_, key)) {
    die("'" + adm.name_ + "." + key.toString() + "' is annotated with '" + this.annotationType_ + "', " + "but no such annotated member was found on prototype.");
  }

  return 0
  /* Cancel */
  ;
}

function extend_(adm, key, descriptor, proxyTrap) {
  die("'" + this.annotationType_ + "' can only be used with 'makeObservable'");
}

function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1
  };
}

function make_$1(adm, key, descriptor, source) {
  var _this$options_;

  // bound
  if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 1
    /* Break */
    ;
  } // own


  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype


  if (isAction(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}

function assertActionDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
  }
}

function createActionDescriptor(adm, annotation, key, descriptor, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;

  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, // https://github.com/mobxjs/mobx/discussions/3140
    ((_annotation$options_4 = annotation.options_) == null ? void 0 : _annotation$options_4.bound) ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : undefined),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2
  };
}

function make_$2(adm, key, descriptor, source) {
  var _this$options_;

  // own
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0
    /* Cancel */
    : 2
    /* Continue */
    ;
  } // prototype
  // bound - must annotate protos to support super.flow()


  if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
    if (this.extend_(adm, key, descriptor, false) === null) return 0
    /* Cancel */
    ;
  }

  if (isFlow(descriptor.value)) {
    // A prototype could have been annotated already by other constructor,
    // rest of the proto chain must be annotated already
    return 1
    /* Break */
    ;
  }

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2
  /* Continue */
  ;
}

function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;

  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}

function assertFlowDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var value = _ref2.value;

  if ( true && !isFunction(value)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
  }
}

function createFlowDescriptor(adm, annotation, key, descriptor, bound, // provides ability to disable safeDescriptors for prototypes
safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }

  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;

  if (bound) {
    var _adm$proxy_;

    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return {
    value: flow(value),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}

function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3
  };
}

function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}

function assertComputedDescriptor(adm, _ref, key, _ref2) {
  var annotationType_ = _ref.annotationType_;
  var get = _ref2.get;

  if ( true && !get) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
  }
}

function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4
  };
}

function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0
  /* Cancel */
  : 1
  /* Break */
  ;
}

function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;

  assertObservableDescriptor(adm, this, key, descriptor);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}

function assertObservableDescriptor(adm, _ref, key, descriptor) {
  var annotationType_ = _ref.annotationType_;

  if ( true && !("value" in descriptor)) {
    die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
  }
}

var AUTO = "true";
var autoAnnotation = /*#__PURE__*/createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5
  };
}

function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;

  // getter -> computed
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.make_
    var set = createAction(key.toString(), descriptor.set); // own

    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set
      }) === null ? 0
      /* Cancel */
      : 2
      /* Continue */
      ;
    } // proto


    defineProperty(source, key, {
      configurable: true,
      set: set
    });
    return 2
    /* Continue */
    ;
  } // function on proto -> autoAction/flow


  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;

    if (isGenerator(descriptor.value)) {
      var _this$options_;

      var flowAnnotation = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
      return flowAnnotation.make_(adm, key, descriptor, source);
    }

    var actionAnnotation = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
    return actionAnnotation.make_(adm, key, descriptor, source);
  } // other -> observable
  // Copy props from proto as well, see test:
  // "decorate should work with Object.create"


  var observableAnnotation = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable; // if function respect autoBind option

  if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
    var _adm$proxy_;

    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }

  return observableAnnotation.make_(adm, key, descriptor, source);
}

function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;

  // getter -> computed
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  } // lone setter -> action setter


  if (descriptor.set) {
    // TODO make action applicable to setter and delegate to action.extend_
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  } // other -> observable
  // if function respect autoBind option


  if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
    var _adm$proxy_2;

    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }

  var observableAnnotation = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation.extend_(adm, key, descriptor, proxyTrap);
}

var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct"; // Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases

var defaultCreateObservableOptions = {
  deep: true,
  name: undefined,
  defaultDecorator: undefined,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /*#__PURE__*/createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /*#__PURE__*/createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;

  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : undefined;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;

  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */

function createObservable(v, arg2, arg3) {
  // @observable someProp;
  if (isStringish(arg2)) {
    storeAnnotation(v, arg2, observableAnnotation);
    return;
  } // already observable - ignore


  if (isObservable(v)) return v; // plain object

  if (isPlainObject(v)) return observable.object(v, arg2, arg3); // Array

  if (Array.isArray(v)) return observable.array(v, arg2); // Map

  if (isES6Map(v)) return observable.map(v, arg2); // Set

  if (isES6Set(v)) return observable.set(v, arg2); // other object - ignore

  if (typeof v === "object" && v !== null) return v; // anything else

  return observable.box(v, arg2);
}

Object.assign(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
  },
  array: function array(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o), o.name);
  },
  map: function map(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
  },
  set: function set(initialValues, options) {
    var o = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
  },
  object: function object(props, decorators, options) {
    return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
  },
  ref: /*#__PURE__*/createDecoratorAnnotation(observableRefAnnotation),
  shallow: /*#__PURE__*/createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /*#__PURE__*/createDecoratorAnnotation(observableStructAnnotation)
}; // eslint-disable-next-line

var observable = /*#__PURE__*/assign(createObservable, observableFactories);

var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /*#__PURE__*/createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */

var computed = function computed(arg1, arg2) {
  if (isStringish(arg2)) {
    // @computed
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }

  if (isPlainObject(arg1)) {
    // @computed({ options })
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  } // computed(expr, options?)


  if (true) {
    if (!isFunction(arg1)) die("First argument to `computed` should be an expression.");
    if (isFunction(arg2)) die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
  }

  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  /* for generated name */

  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /*#__PURE__*/createDecoratorAnnotation(computedStructAnnotation);

var _getDescriptor$config, _getDescriptor;
// mobx versions

var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /*#__PURE__*/getDescriptor(function () {}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false; // we can safely recycle this object

var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction, ref) {
  if (autoAction === void 0) {
    autoAction = false;
  }

  if (true) {
    if (!isFunction(fn)) die("`action` can only be invoked on functions");
    if (typeof actionName !== "string" || !actionName) die("actions should have valid names, got: '" + actionName + "'");
  }

  function res() {
    return executeAction(actionName, autoAction, fn, ref || this, arguments);
  }

  res.isMobxAction = true;

  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    Object.defineProperty(res, "name", tmpNameDescriptor);
  }

  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);

  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, // true for autoAction
scope, args) {
  var notifySpy_ =  true && isSpyEnabled() && !!actionName;
  var startTime_ = 0;

  if ( true && notifySpy_) {
    startTime_ = Date.now();
    var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
    spyReportStart({
      type: ACTION,
      name: actionName,
      object: scope,
      arguments: flattenedArgs
    });
  }

  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges; // by default preserve previous allow

  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }

  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_: prevDerivation_,
    prevAllowStateChanges_: prevAllowStateChanges_,
    prevAllowStateReads_: prevAllowStateReads_,
    notifySpy_: notifySpy_,
    startTime_: startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }

  currentActionId = runInfo.parentActionId_;

  if (runInfo.error_ !== undefined) {
    globalState.suppressReactionErrors = true;
  }

  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) untrackedEnd(runInfo.prevDerivation_);

  if ( true && runInfo.notifySpy_) {
    spyReportEnd({
      time: Date.now() - runInfo.startTime_
    });
  }

  globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
  var prev = allowStateChangesStart(allowStateChanges);

  try {
    return func();
  } finally {
    allowStateChangesEnd(prev);
  }
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}

var _Symbol$toPrimitive;
var CREATE = "create";
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /*#__PURE__*/function (_Atom) {
  _inheritsLoose(ObservableValue, _Atom);

  function ObservableValue(value, enhancer, name_, notifySpy, equals) {
    var _this;

    if (name_ === void 0) {
      name_ =  true ? "ObservableValue@" + getNextId() : undefined;
    }

    if (notifySpy === void 0) {
      notifySpy = true;
    }

    if (equals === void 0) {
      equals = comparer["default"];
    }

    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, undefined, name_);

    if ( true && notifySpy && isSpyEnabled()) {
      // only notify spy if this is a stand-alone observable
      spyReport({
        type: CREATE,
        object: _assertThisInitialized(_this),
        observableKind: "value",
        debugObjectName: _this.name_,
        newValue: "" + _this.value_
      });
    }

    return _this;
  }

  var _proto = ObservableValue.prototype;

  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.set = function set(newValue) {
    var oldValue = this.value_;
    newValue = this.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();

      if ( true && notifySpy) {
        spyReportStart({
          type: UPDATE,
          object: this,
          observableKind: "value",
          debugObjectName: this.name_,
          newValue: newValue,
          oldValue: oldValue
        });
      }

      this.setNewValue_(newValue);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    checkIfStateModificationsAreAllowed(this);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue: newValue
      });
      if (!change) return globalState.UNCHANGED;
      newValue = change.newValue;
    } // apply modifier


    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };

  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();

    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue: newValue,
        oldValue: oldValue
      });
    }
  };

  _proto.get = function get() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) listener({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: UPDATE,
      newValue: this.value_,
      oldValue: undefined
    });
    return registerListener(this, listener);
  };

  _proto.raw = function raw() {
    // used by MST ot get undehanced value
    return this.value_;
  };

  _proto.toJSON = function toJSON() {
    return this.get();
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.value_ + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive] = function () {
    return this.valueOf();
  };

  return ObservableValue;
}(Atom);
var isObservableValue = /*#__PURE__*/createInstanceofPredicate("ObservableValue", ObservableValue);

var _Symbol$toPrimitive$1;
/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */

_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  // during tracking it's an array with new observed observers
  // to check for cycles
  // N.B: unminified as it is used by MST

  /**
   * Create a new computed value based on a function expression.
   *
   * The `name` property is for debug purposes only.
   *
   * The `equals` property specifies the comparer function to use to determine if a newly produced
   * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
   * compares based on identity comparison (===), and `structuralComparer` deeply compares the structure.
   * Structural comparison can be convenient if you always produce a new aggregated object and
   * don't want to notify observers if it is structurally the same.
   * This is useful for working with vectors, mouse coordinates etc.
   */
  function ComputedValue(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) die(31);
    this.derivation = options.get;
    this.name_ = options.name || ( true ? "ComputedValue@" + getNextId() : undefined);

    if (options.set) {
      this.setter_ = createAction( true ? this.name_ + "-setter" : undefined, options.set);
    }

    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = !!options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }

  var _proto = ComputedValue.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };

  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function (listener) {
        return listener();
      });
    }
  };

  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function (listener) {
        return listener();
      });
    }
  }
  /**
   * Returns the current value of this computed value.
   * Will evaluate its computation first if needed.
   */
  ;

  _proto.get = function get() {
    if (this.isComputing_) die(32, this.name_, this.derivation);

    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch(); // See perf test 'computed memoization'

        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);

      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) globalState.trackingContext = this;
        if (this.trackAndCompute()) propagateChangeConfirmed(this);
        globalState.trackingContext = prevTrackingContext;
      }
    }

    var result = this.value_;
    if (isCaughtException(result)) throw result.cause;
    return result;
  };

  _proto.set = function set(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) die(33, this.name_);
      this.isRunningSetter_ = true;

      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else die(34, this.name_);
  };

  _proto.trackAndCompute = function trackAndCompute() {
    // N.B: unminified as it is used by MST
    var oldValue = this.value_;
    var wasSuspended =
    /* see #1208 */
    this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);

    if (changed) {
      this.value_ = newValue;

      if ( true && isSpyEnabled()) {
        spyReport({
          observableKind: "computed",
          debugObjectName: this.name_,
          object: this.scope_,
          type: "update",
          oldValue: oldValue,
          newValue: newValue
        });
      }
    }

    return changed;
  };

  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true; // don't allow state changes during computation

    var prev = allowStateChangesStart(false);
    var res;

    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e) {
          res = new CaughtException(e);
        }
      }
    }

    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };

  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = undefined; // don't hold on to computed value!

      if ( true && this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
      }
    }
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;

    var firstTime = true;
    var prevValue = undefined;
    return autorun(function () {
      // TODO: why is this in a different place than the spyReport() function? in all other observables it's called in the same place
      var newValue = _this.get();

      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue: newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }

      firstTime = false;
      prevValue = newValue;
    });
  };

  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    if (false) {}

    if (this.isTracing_ !== TraceMode.NONE) {
      console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }

    if (globalState.computedRequiresReaction || this.requiresReaction_) {
      console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
    }
  };

  _proto.toString = function toString() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };

  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };

  _proto[_Symbol$toPrimitive$1] = function () {
    return this.valueOf();
  };

  return ComputedValue;
}();
var isComputedValue = /*#__PURE__*/createInstanceofPredicate("ComputedValue", ComputedValue);

var IDerivationState_;

(function (IDerivationState_) {
  // before being run or (outside batch and not being observed)
  // at this point derivation is not holding any data about dependency tree
  IDerivationState_[IDerivationState_["NOT_TRACKING_"] = -1] = "NOT_TRACKING_"; // no shallow dependency changed since last computation
  // won't recalculate derivation
  // this is what makes mobx fast

  IDerivationState_[IDerivationState_["UP_TO_DATE_"] = 0] = "UP_TO_DATE_"; // some deep dependency changed, but don't know if shallow dependency changed
  // will require to check first if UP_TO_DATE or POSSIBLY_STALE
  // currently only ComputedValue will propagate POSSIBLY_STALE
  //
  // having this state is second big optimization:
  // don't have to recompute on every dependency change, but only when it's needed

  IDerivationState_[IDerivationState_["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_"; // A shallow dependency has changed since last computation and the derivation
  // will need to recompute when it's needed next.

  IDerivationState_[IDerivationState_["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));

var TraceMode;

(function (TraceMode) {
  TraceMode[TraceMode["NONE"] = 0] = "NONE";
  TraceMode[TraceMode["LOG"] = 1] = "LOG";
  TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));

var CaughtException = function CaughtException(cause) {
  this.cause = void 0;
  this.cause = cause; // Empty
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */

function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;

    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;

    case IDerivationState_.POSSIBLY_STALE_:
      {
        // state propagation can occur outside of action/reactive context #2195
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.

        var obs = derivation.observing_,
            l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e) {
                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            } // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
            // and `derivation` is an observer of `obj`
            // invariantShouldCompute(derivation)


            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
  }
}
function isComputingDerivation() {
  return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
  if (false) {}

  var hasObservers = atom.observers_.size > 0; // Should not be possible to change observed state outside strict mode, except during initialization, see #563

  if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always")) console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
}
function checkIfStateReadsAreAllowed(observable) {
  if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
    console.warn("[mobx] Observable '" + observable.name_ + "' being read outside a reactive context.");
  }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */

function trackDerivedFunction(derivation, f, context) {
  var prevAllowStateReads = allowStateReadsStart(true); // pre allocate array allocation + room for variation in deps
  // array will be trimmed by bindDependencies

  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;

  if (globalState.disableErrorBoundaries === true) {
    result = f.call(context);
  } else {
    try {
      result = f.call(context);
    } catch (e) {
      result = new CaughtException(e);
    }
  }

  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  warnAboutDerivationWithoutDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}

function warnAboutDerivationWithoutDependencies(derivation) {
  if (false) {}
  if (derivation.observing_.length !== 0) return;

  if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
    console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
  }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */


function bindDependencies(derivation) {
  // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0,
      l = derivation.unboundDepsCount_;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (dep.diffValue_ === 0) {
      dep.diffValue_ = 1;
      if (i0 !== i) observing[i0] = dep;
      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState_;
    }
  }

  observing.length = i0;
  derivation.newObserving_ = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
  // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }

    _dep.diffValue_ = 0;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}

function clearObserving(derivation) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i = obs.length;

  while (i--) {
    removeObserver(obs[i], derivation);
  }

  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action) {
  var prev = untrackedStart();

  try {
    return action();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */

function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) return;
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}

/**
 * These values will persist if global state is reset
 */

var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED", "useProxies"];
var MobXGlobals = function MobXGlobals() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
};
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = /*#__PURE__*/function () {
  var global = /*#__PURE__*/getGlobal();
  if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
  if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;

  if (!canMergeGlobalState) {
    // Because this is a IIFE we need to let isolateCalled a chance to change
    // so we run it after the event loop completed at least 1 iteration
    setTimeout(function () {
      if (!isolateCalled) {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global.__mobxGlobals) {
    global.__mobxInstanceCount += 1;
    if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible

    return global.__mobxGlobals;
  } else {
    global.__mobxInstanceCount = 1;
    return global.__mobxGlobals = /*#__PURE__*/new MobXGlobals();
  }
}();
function isolateGlobalState() {
  if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) die(36);
  isolateCalled = true;

  if (canMergeGlobalState) {
    var global = getGlobal();
    if (--global.__mobxInstanceCount === 0) global.__mobxGlobals = undefined;
    globalState = new MobXGlobals();
  }
}
function getGlobalState() {
  return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */

function resetGlobalState() {
  var defaultGlobals = new MobXGlobals();

  for (var key in defaultGlobals) {
    if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
  }

  globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
  return observable.observers_ && observable.observers_.size > 0;
}
function getObservers(observable) {
  return observable.observers_;
} // function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }

function addObserver(observable, node) {
  // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
  // invariantObservers(observable);
  observable.observers_.add(node);
  if (observable.lowestObserverState_ > node.dependenciesState_) observable.lowestObserverState_ = node.dependenciesState_; // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
  // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
  // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
  // invariantObservers(observable);
  observable.observers_["delete"](node);

  if (observable.observers_.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  } // invariantObservers(observable);
  // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");

}
function queueForUnobservation(observable) {
  if (observable.isPendingUnobservation_ === false) {
    // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
    observable.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable);
  }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */

function startBatch() {
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions(); // the batch is actually about to finish, all unobserving should happen here.

    var list = globalState.pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation_ = false;

      if (observable.observers_.size === 0) {
        if (observable.isBeingObserved_) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved_ = false;
          observable.onBUO();
        }

        if (observable instanceof ComputedValue) {
          // computed values are automatically teared down when the last observer leaves
          // this process happens recursively, this computed might be the last observabe of another, etc..
          observable.suspend_();
        }
      }
    }

    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  checkIfStateReadsAreAllowed(observable);
  var derivation = globalState.trackingDerivation;

  if (derivation !== null) {
    /**
     * Simple optimization, give each derivation run an unique id (runId)
     * Check if last time this observable was accessed the same runId is used
     * if this is the case, the relation is already known
     */
    if (derivation.runId_ !== observable.lastAccessedBy_) {
      observable.lastAccessedBy_ = derivation.runId_; // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...

      derivation.newObserving_[derivation.unboundDepsCount_++] = observable;

      if (!observable.isBeingObserved_ && globalState.trackingContext) {
        observable.isBeingObserved_ = true;
        observable.onBO();
      }
    }

    return true;
  } else if (observable.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable);
  }

  return false;
} // function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }

/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes

function propagateChanged(observable) {
  // invariantLOS(observable, "changed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_; // Ideally we use for..of here, but the downcompiled version is really slow...

  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }

      d.onBecomeStale_();
    }

    d.dependenciesState_ = IDerivationState_.STALE_;
  }); // invariantLOS(observable, "changed end");
} // Called by ComputedValue when it recalculate and its value changed

function propagateChangeConfirmed(observable) {
  // invariantLOS(observable, "confirmed start");
  if (observable.lowestObserverState_ === IDerivationState_.STALE_) return;
  observable.lowestObserverState_ = IDerivationState_.STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d.dependenciesState_ = IDerivationState_.STALE_;

      if ( true && d.isTracing_ !== TraceMode.NONE) {
        logTraceInfo(d, observable);
      }
    } else if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_ // this happens during computing of `d`, just keep lowestObserverState up to date.
    ) {
        observable.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      }
  }); // invariantLOS(observable, "confirmed end");
} // Used by computed when its dependency changed, but we don't wan't to immediately recompute.

function propagateMaybeChanged(observable) {
  // invariantLOS(observable, "maybe start");
  if (observable.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) return;
  observable.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable.observers_.forEach(function (d) {
    if (d.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d.onBecomeStale_();
    }
  }); // invariantLOS(observable, "maybe end");
}

function logTraceInfo(derivation, observable) {
  console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable.name_ + "'");

  if (derivation.isTracing_ === TraceMode.BREAK) {
    var lines = [];
    printDepTree(getDependencyTree(derivation), lines, 1); // prettier-ignore

    new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
  }
}

function printDepTree(tree, lines, depth) {
  if (lines.length >= 1000) {
    lines.push("(and many more)");
    return;
  }

  lines.push("" + "\t".repeat(depth - 1) + tree.name);
  if (tree.dependencies) tree.dependencies.forEach(function (child) {
    return printDepTree(child, lines, depth + 1);
  });
}

var Reaction = /*#__PURE__*/function () {
  // nodes we are looking at. Our value depends on these nodes
  function Reaction(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ =  true ? "Reaction@" + getNextId() : undefined;
    }

    if (requiresObservable_ === void 0) {
      requiresObservable_ = false;
    }

    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }

  var _proto = Reaction.prototype;

  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };

  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };

  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  }
  /**
   * internal, use schedule() if you intend to kick off a reaction
   */
  ;

  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;

      if (shouldCompute(this)) {
        this.isTrackPending_ = true;

        try {
          this.onInvalidate_();

          if ( true && this.isTrackPending_ && isSpyEnabled()) {
            // onInvalidate didn't trigger track right away..
            spyReport({
              name: this.name_,
              type: "scheduled-reaction"
            });
          }
        } catch (e) {
          this.reportExceptionInDerivation_(e);
        }
      }

      globalState.trackingContext = prev;
      endBatch();
    }
  };

  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return; // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
    }

    startBatch();
    var notify = isSpyEnabled();
    var startTime;

    if ( true && notify) {
      startTime = Date.now();
      spyReportStart({
        name: this.name_,
        type: "reaction"
      });
    }

    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext; // reactions could create reactions...

    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, undefined);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;

    if (this.isDisposed_) {
      // disposed during last run. Clean up everything that was bound after the dispose call.
      clearObserving(this);
    }

    if (isCaughtException(result)) this.reportExceptionInDerivation_(result.cause);

    if ( true && notify) {
      spyReportEnd({
        time: Date.now() - startTime
      });
    }

    endBatch();
  };

  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;

    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }

    if (globalState.disableErrorBoundaries) throw error;
    var message =  true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : undefined;

    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
      /** If debugging brought you here, please, read the above message :-). Tnx! */
    } else if (true) console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)"); // prettier-ignore


    if ( true && isSpyEnabled()) {
      spyReport({
        type: "error",
        name: this.name_,
        message: message,
        error: "" + error
      });
    }

    globalState.globalReactionErrorHandlers.forEach(function (f) {
      return f(error, _this);
    });
  };

  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;

      if (!this.isRunning_) {
        // if disposed while running, clean up later. Maybe not optimal, but rare case
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };

  _proto.getDisposer_ = function getDisposer_() {
    var r = this.dispose.bind(this);
    r[$mobx] = this;
    return r;
  };

  _proto.toString = function toString() {
    return "Reaction[" + this.name_ + "]";
  };

  _proto.trace = function trace$1(enterBreakPoint) {
    if (enterBreakPoint === void 0) {
      enterBreakPoint = false;
    }

    trace(this, enterBreakPoint);
  };

  return Reaction;
}();
function onReactionError(handler) {
  globalState.globalReactionErrorHandlers.push(handler);
  return function () {
    var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
    if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
  };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */

var MAX_REACTION_ITERATIONS = 100;

var reactionScheduler = function reactionScheduler(f) {
  return f();
};

function runReactions() {
  // Trampolining, if runReactions are already running, new reactions will be picked up
  if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
  reactionScheduler(runReactionsHelper);
}

function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0; // While running reactions, new reactions might be triggered.
  // Hence we work with two variables and check whether
  // we converge to no remaining reactions after a while.

  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error( true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : undefined);
      allReactions.splice(0); // clear reactions
    }

    var remainingReactions = allReactions.splice(0);

    for (var i = 0, l = remainingReactions.length; i < l; i++) {
      remainingReactions[i].runReaction_();
    }
  }

  globalState.isRunningReactions = false;
}

var isReaction = /*#__PURE__*/createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
  var baseScheduler = reactionScheduler;

  reactionScheduler = function reactionScheduler(f) {
    return fn(function () {
      return baseScheduler(f);
    });
  };
}

function isSpyEnabled() {
  return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
  if (false) {} // dead code elimination can do the rest

  if (!globalState.spyListeners.length) return;
  var listeners = globalState.spyListeners;

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](event);
  }
}
function spyReportStart(event) {
  if (false) {}

  var change = _extends({}, event, {
    spyReportStart: true
  });

  spyReport(change);
}
var END_EVENT = {
  type: "report-end",
  spyReportEnd: true
};
function spyReportEnd(change) {
  if (false) {}
  if (change) spyReport(_extends({}, change, {
    type: "report-end",
    spyReportEnd: true
  }));else spyReport(END_EVENT);
}
function spy(listener) {
  if (false) {} else {
    globalState.spyListeners.push(listener);
    return once(function () {
      globalState.spyListeners = globalState.spyListeners.filter(function (l) {
        return l !== listener;
      });
    });
  }
}

var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /*#__PURE__*/createActionAnnotation(ACTION);
var actionBoundAnnotation = /*#__PURE__*/createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /*#__PURE__*/createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});

function createActionFactory(autoAction) {
  var res = function action(arg1, arg2) {
    // action(fn() {})
    if (isFunction(arg1)) return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction); // action("name", fn() {})

    if (isFunction(arg2)) return createAction(arg1, arg2, autoAction); // @action

    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction ? autoActionAnnotation : actionAnnotation);
    } // action("name") & @action("name")


    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction
      }));
    }

    if (true) die("Invalid arguments for `action`");
  };

  return res;
}

var action = /*#__PURE__*/createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /*#__PURE__*/createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /*#__PURE__*/createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /*#__PURE__*/createDecoratorAnnotation(autoActionBoundAnnotation);
function runInAction(fn) {
  return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, undefined);
}
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */

function autorun(view, opts) {
  var _opts$name, _opts;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(view)) die("Autorun expects a function as first argument");
    if (isAction(view)) die("Autorun does not accept actions since actions are untrackable");
  }

  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name :  true ? view.name || "Autorun@" + getNextId() : undefined;
  var runSync = !opts.scheduler && !opts.delay;
  var reaction;

  if (runSync) {
    // normal autorun
    reaction = new Reaction(name, function () {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts); // debounced autorun

    var isScheduled = false;
    reaction = new Reaction(name, function () {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function () {
          isScheduled = false;
          if (!reaction.isDisposed_) reaction.track(reactionRunner);
        });
      }
    }, opts.onError, opts.requiresObservable);
  }

  function reactionRunner() {
    view(reaction);
  }

  reaction.schedule_();
  return reaction.getDisposer_();
}

var run = function run(f) {
  return f();
};

function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
    return setTimeout(f, opts.delay);
  } : run;
}

function reaction(expression, effect, opts) {
  var _opts$name2;

  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }

  if (true) {
    if (!isFunction(expression) || !isFunction(effect)) die("First and second argument to reaction should be functions");
    if (!isPlainObject(opts)) die("Third argument of reactions should be an object");
  }

  var name = (_opts$name2 = opts.name) != null ? _opts$name2 :  true ? "Reaction@" + getNextId() : undefined;
  var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
  var runSync = !opts.scheduler && !opts.delay;
  var scheduler = createSchedulerFromOptions(opts);
  var firstTime = true;
  var isScheduled = false;
  var value;
  var oldValue;
  var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
  var r = new Reaction(name, function () {
    if (firstTime || runSync) {
      reactionRunner();
    } else if (!isScheduled) {
      isScheduled = true;
      scheduler(reactionRunner);
    }
  }, opts.onError, opts.requiresObservable);

  function reactionRunner() {
    isScheduled = false;
    if (r.isDisposed_) return;
    var changed = false;
    r.track(function () {
      var nextValue = allowStateChanges(false, function () {
        return expression(r);
      });
      changed = firstTime || !equals(value, nextValue);
      oldValue = value;
      value = nextValue;
    });
    if (firstTime && opts.fireImmediately) effectAction(value, oldValue, r);else if (!firstTime && changed) effectAction(value, oldValue, r);
    firstTime = false;
  }

  r.schedule_();
  return r.getDisposer_();
}

function wrapErrorHandler(errorHandler, baseFn) {
  return function () {
    try {
      return baseFn.apply(this, arguments);
    } catch (e) {
      errorHandler.call(this, e);
    }
  };
}

var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}

function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";

  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = new Set([cb]);
  }

  return function () {
    var hookListeners = atom[listenersKey];

    if (hookListeners) {
      hookListeners["delete"](cb);

      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}

var NEVER = "never";
var ALWAYS = "always";
var OBSERVED = "observed"; // const IF_AVAILABLE = "ifavailable"

function configure(options) {
  if (options.isolateGlobalState === true) {
    isolateGlobalState();
  }

  var useProxies = options.useProxies,
      enforceActions = options.enforceActions;

  if (useProxies !== undefined) {
    globalState.useProxies = useProxies === ALWAYS ? true : useProxies === NEVER ? false : typeof Proxy !== "undefined";
  }

  if (useProxies === "ifavailable") globalState.verifyProxies = true;

  if (enforceActions !== undefined) {
    var ea = enforceActions === ALWAYS ? ALWAYS : enforceActions === OBSERVED;
    globalState.enforceActions = ea;
    globalState.allowStateChanges = ea === true || ea === ALWAYS ? false : true;
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function (key) {
    if (key in options) globalState[key] = !!options[key];
  });
  globalState.allowStateReads = !globalState.observableRequiresReaction;

  if ( true && globalState.disableErrorBoundaries === true) {
    console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
  }

  if (options.reactionScheduler) {
    setReactionScheduler(options.reactionScheduler);
  }
}

function extendObservable(target, properties, annotations, options) {
  if (true) {
    if (arguments.length > 4) die("'extendObservable' expected 2-4 arguments");
    if (typeof target !== "object") die("'extendObservable' expects an object as first argument");
    if (isObservableMap(target)) die("'extendObservable' should not be used on maps, use map.merge instead");
    if (!isPlainObject(properties)) die("'extendObservable' only accepts plain objects as second argument");
    if (isObservable(properties) || isObservable(annotations)) die("Extending an object with another observable (object) is not supported");
  } // Pull descriptors first, so we don't have to deal with props added by administration ($mobx)


  var descriptors = getOwnPropertyDescriptors(properties);
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    ownKeys(descriptors).forEach(function (key) {
      adm.extend_(key, descriptors[key], // must pass "undefined" for { key: undefined }
      !annotations ? true : key in annotations ? annotations[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

function getDependencyTree(thing, property) {
  return nodeToDependencyTree(getAtom(thing, property));
}

function nodeToDependencyTree(node) {
  var result = {
    name: node.name_
  };
  if (node.observing_ && node.observing_.length > 0) result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
  return result;
}

function getObserverTree(thing, property) {
  return nodeToObserverTree(getAtom(thing, property));
}

function nodeToObserverTree(node) {
  var result = {
    name: node.name_
  };
  if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
  return result;
}

function unique(list) {
  return Array.from(new Set(list));
}

var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /*#__PURE__*/Object.create(Error.prototype);
function isFlowCancellationError(error) {
  return error instanceof FlowCancellationError;
}
var flowAnnotation = /*#__PURE__*/createFlowAnnotation("flow");
var flowBoundAnnotation = /*#__PURE__*/createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /*#__PURE__*/Object.assign(function flow(arg1, arg2) {
  // @flow
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  } // flow(fn)


  if ( true && arguments.length !== 1) die("Flow expects single argument with generator function");
  var generator = arg1;
  var name = generator.name || "<unnamed flow>"; // Implementation based on https://github.com/tj/co/blob/master/index.js

  var res = function res() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = undefined;
    var promise = new Promise(function (resolve, reject) {
      var stepId = 0;
      rejector = reject;

      function onFulfilled(res) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function onRejected(err) {
        pendingPromise = undefined;
        var ret;

        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e) {
          return reject(e);
        }

        next(ret);
      }

      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          // an async iterator
          ret.then(next, reject);
          return;
        }

        if (ret.done) return resolve(ret.value);
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }

      onFulfilled(undefined); // kick off the process
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
      try {
        if (pendingPromise) cancelPromise(pendingPromise); // Finally block can return (or yield) stuff..

        var _res = gen["return"](undefined); // eat anything that promise would do, it's cancelled!


        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise); // maybe it can be cancelled :)
        // reject our original promise

        rejector(new FlowCancellationError());
      } catch (e) {
        rejector(e); // there could be a throwing finally block
      }
    });
    return promise;
  };

  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /*#__PURE__*/createDecoratorAnnotation(flowBoundAnnotation);

function cancelPromise(promise) {
  if (isFunction(promise.cancel)) promise.cancel();
}

function flowResult(result) {
  return result; // just tricking TypeScript :)
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}

function interceptReads(thing, propOrHandler, handler) {
  var target;

  if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
    target = getAdministration(thing);
  } else if (isObservableObject(thing)) {
    if ( true && !isStringish(propOrHandler)) return die("InterceptReads can only be used with a specific property, not with an object in general");
    target = getAdministration(thing, propOrHandler);
  } else if (true) {
    return die("Expected observable map, object or array as first array");
  }

  if ( true && target.dehancer !== undefined) return die("An intercept reader was already established");
  target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
  return function () {
    target.dehancer = undefined;
  };
}

function intercept(thing, propOrHandler, handler) {
  if (isFunction(handler)) return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}

function interceptInterceptable(thing, handler) {
  return getAdministration(thing).intercept_(handler);
}

function interceptProperty(thing, property, handler) {
  return getAdministration(thing, property).intercept_(handler);
}

function _isComputed(value, property) {
  if (property === undefined) {
    return isComputedValue(value);
  }

  if (isObservableObject(value) === false) return false;
  if (!value[$mobx].values_.has(property)) return false;
  var atom = getAtom(value, property);
  return isComputedValue(atom);
}
function isComputed(value) {
  if ( true && arguments.length > 1) return die("isComputed expects only 1 argument. Use isComputedProp to inspect the observability of a property");
  return _isComputed(value);
}
function isComputedProp(value, propName) {
  if ( true && !isStringish(propName)) return die("isComputed expected a property name as second argument");
  return _isComputed(value, propName);
}

function _isObservable(value, property) {
  if (!value) return false;

  if (property !== undefined) {
    if ( true && (isObservableMap(value) || isObservableArray(value))) return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");

    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }

    return false;
  } // For first check, see #701


  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function isObservable(value) {
  if ( true && arguments.length !== 1) die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
  return _isObservable(value);
}
function isObservableProp(value, propName) {
  if ( true && !isStringish(propName)) return die("expected a property name as second argument");
  return _isObservable(value, propName);
}

function keys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].keys_();
  }

  if (isObservableMap(obj) || isObservableSet(obj)) {
    return Array.from(obj.keys());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (_, index) {
      return index;
    });
  }

  die(5);
}
function values(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return obj.get(key);
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.values());
  }

  if (isObservableArray(obj)) {
    return obj.slice();
  }

  die(6);
}
function entries(obj) {
  if (isObservableObject(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj[key]];
    });
  }

  if (isObservableMap(obj)) {
    return keys(obj).map(function (key) {
      return [key, obj.get(key)];
    });
  }

  if (isObservableSet(obj)) {
    return Array.from(obj.entries());
  }

  if (isObservableArray(obj)) {
    return obj.map(function (key, index) {
      return [index, key];
    });
  }

  die(7);
}
function set(obj, key, value) {
  if (arguments.length === 2 && !isObservableSet(obj)) {
    startBatch();
    var _values = key;

    try {
      for (var _key in _values) {
        set(obj, _key, _values[_key]);
      }
    } finally {
      endBatch();
    }

    return;
  }

  if (isObservableObject(obj)) {
    obj[$mobx].set_(key, value);
  } else if (isObservableMap(obj)) {
    obj.set(key, value);
  } else if (isObservableSet(obj)) {
    obj.add(key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    if (key < 0) die("Invalid index: '" + key + "'");
    startBatch();
    if (key >= obj.length) obj.length = key + 1;
    obj[key] = value;
    endBatch();
  } else die(8);
}
function remove(obj, key) {
  if (isObservableObject(obj)) {
    obj[$mobx].delete_(key);
  } else if (isObservableMap(obj)) {
    obj["delete"](key);
  } else if (isObservableSet(obj)) {
    obj["delete"](key);
  } else if (isObservableArray(obj)) {
    if (typeof key !== "number") key = parseInt(key, 10);
    obj.splice(key, 1);
  } else {
    die(9);
  }
}
function has(obj, key) {
  if (isObservableObject(obj)) {
    return obj[$mobx].has_(key);
  } else if (isObservableMap(obj)) {
    return obj.has(key);
  } else if (isObservableSet(obj)) {
    return obj.has(key);
  } else if (isObservableArray(obj)) {
    return key >= 0 && key < obj.length;
  }

  die(10);
}
function get(obj, key) {
  if (!has(obj, key)) return undefined;

  if (isObservableObject(obj)) {
    return obj[$mobx].get_(key);
  } else if (isObservableMap(obj)) {
    return obj.get(key);
  } else if (isObservableArray(obj)) {
    return obj[key];
  }

  die(11);
}
function apiDefineProperty(obj, key, descriptor) {
  if (isObservableObject(obj)) {
    return obj[$mobx].defineProperty_(key, descriptor);
  }

  die(39);
}
function apiOwnKeys(obj) {
  if (isObservableObject(obj)) {
    return obj[$mobx].ownKeys_();
  }

  die(38);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
  if (isFunction(cbOrFire)) return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}

function observeObservable(thing, listener, fireImmediately) {
  return getAdministration(thing).observe_(listener, fireImmediately);
}

function observeObservableProperty(thing, property, listener, fireImmediately) {
  return getAdministration(thing, property).observe_(listener, fireImmediately);
}

function cache(map, key, value) {
  map.set(key, value);
  return value;
}

function toJSHelper(source, __alreadySeen) {
  if (source == null || typeof source !== "object" || source instanceof Date || !isObservable(source)) return source;
  if (isObservableValue(source) || isComputedValue(source)) return toJSHelper(source.get(), __alreadySeen);

  if (__alreadySeen.has(source)) {
    return __alreadySeen.get(source);
  }

  if (isObservableArray(source)) {
    var res = cache(__alreadySeen, source, new Array(source.length));
    source.forEach(function (value, idx) {
      res[idx] = toJSHelper(value, __alreadySeen);
    });
    return res;
  }

  if (isObservableSet(source)) {
    var _res = cache(__alreadySeen, source, new Set());

    source.forEach(function (value) {
      _res.add(toJSHelper(value, __alreadySeen));
    });
    return _res;
  }

  if (isObservableMap(source)) {
    var _res2 = cache(__alreadySeen, source, new Map());

    source.forEach(function (value, key) {
      _res2.set(key, toJSHelper(value, __alreadySeen));
    });
    return _res2;
  } else {
    // must be observable object
    var _res3 = cache(__alreadySeen, source, {});

    apiOwnKeys(source).forEach(function (key) {
      if (objectPrototype.propertyIsEnumerable.call(source, key)) {
        _res3[key] = toJSHelper(source[key], __alreadySeen);
      }
    });
    return _res3;
  }
}
/**
 * Basically, a deep clone, so that no reactive property will exist anymore.
 */


function toJS(source, options) {
  if ( true && options) die("toJS no longer supports options");
  return toJSHelper(source, new Map());
}

function trace() {
  if (false) {}
  var enterBreakPoint = false;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
  var derivation = getAtomFromArgs(args);

  if (!derivation) {
    return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
  }

  if (derivation.isTracing_ === TraceMode.NONE) {
    console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
  }

  derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}

function getAtomFromArgs(args) {
  switch (args.length) {
    case 0:
      return globalState.trackingDerivation;

    case 1:
      return getAtom(args[0]);

    case 2:
      return getAtom(args[0], args[1]);
  }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */

function transaction(action, thisArg) {
  if (thisArg === void 0) {
    thisArg = undefined;
  }

  startBatch();

  try {
    return action.apply(thisArg);
  } finally {
    endBatch();
  }
}

function when(predicate, arg1, arg2) {
  if (arguments.length === 1 || arg1 && typeof arg1 === "object") return whenPromise(predicate, arg1);
  return _when(predicate, arg1, arg2 || {});
}

function _when(predicate, effect, opts) {
  var timeoutHandle;

  if (typeof opts.timeout === "number") {
    var error = new Error("WHEN_TIMEOUT");
    timeoutHandle = setTimeout(function () {
      if (!disposer[$mobx].isDisposed_) {
        disposer();
        if (opts.onError) opts.onError(error);else throw error;
      }
    }, opts.timeout);
  }

  opts.name =  true ? opts.name || "When@" + getNextId() : undefined;
  var effectAction = createAction( true ? opts.name + "-effect" : undefined, effect); // eslint-disable-next-line

  var disposer = autorun(function (r) {
    // predicate should not change state
    var cond = allowStateChanges(false, predicate);

    if (cond) {
      r.dispose();
      if (timeoutHandle) clearTimeout(timeoutHandle);
      effectAction();
    }
  }, opts);
  return disposer;
}

function whenPromise(predicate, opts) {
  if ( true && opts && opts.onError) return die("the options 'onError' and 'promise' cannot be combined");
  var cancel;
  var res = new Promise(function (resolve, reject) {
    var disposer = _when(predicate, resolve, _extends({}, opts, {
      onError: reject
    }));

    cancel = function cancel() {
      disposer();
      reject("WHEN_CANCELLED");
    };
  });
  res.cancel = cancel;
  return res;
}

function getAdm(target) {
  return target[$mobx];
} // Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!


var objectProxyTraps = {
  has: function has(target, name) {
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set(target, name, value) {
    var _getAdm$set_;

    if (!isStringish(name)) return false;

    if ( true && !getAdm(target).values_.has(name)) {
      warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;

    if (true) {
      warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
    }

    if (!isStringish(name)) return false; // null (intercepted) -> true (success)

    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty(target, name, descriptor) {
    var _getAdm$definePropert;

    if (true) {
      warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
    } // null (intercepted) -> true (success)


    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys(target) {
    if ( true && globalState.trackingDerivation) warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;

  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}

function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== undefined && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function () {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) interceptors.splice(idx, 1);
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();

  try {
    // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
    var interceptors = [].concat(interceptable.interceptors_ || []);

    for (var i = 0, l = interceptors.length; i < l; i++) {
      change = interceptors[i](change);
      if (change && !change.type) die(14);
      if (!change) break;
    }

    return change;
  } finally {
    untrackedEnd(prevU);
  }
}

function hasListeners(listenable) {
  return listenable.changeListeners_ !== undefined && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function () {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) listeners.splice(idx, 1);
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) return;
  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  untrackedEnd(prevU);
}

function makeObservable(target, annotations, options) {
  var adm = asObservableObject(target, options)[$mobx];
  startBatch();

  try {
    var _annotations;

    // Default to decorators
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target); // Annotate

    ownKeys(annotations).forEach(function (key) {
      return adm.make_(key, annotations[key]);
    });
  } finally {
    endBatch();
  }

  return target;
} // proto[keysSymbol] = new Set<PropertyKey>()

var keysSymbol = /*#__PURE__*/Symbol("mobx-keys");
function makeAutoObservable(target, overrides, options) {
  if (true) {
    if (!isPlainObject(target) && !isPlainObject(Object.getPrototypeOf(target))) die("'makeAutoObservable' can only be used for classes that don't have a superclass");
    if (isObservableObject(target)) die("makeAutoObservable can only be used on objects not already made observable");
  } // Optimization: avoid visiting protos
  // Assumes that annotation.make_/.extend_ works the same for plain objects


  if (isPlainObject(target)) {
    return extendObservable(target, target, overrides, options);
  }

  var adm = asObservableObject(target, options)[$mobx]; // Optimization: cache keys on proto
  // Assumes makeAutoObservable can be called only once per object and can't be used in subclass

  if (!target[keysSymbol]) {
    var proto = Object.getPrototypeOf(target);
    var keys = new Set([].concat(ownKeys(target), ownKeys(proto)));
    keys["delete"]("constructor");
    keys["delete"]($mobx);
    addHiddenProp(proto, keysSymbol, keys);
  }

  startBatch();

  try {
    target[keysSymbol].forEach(function (key) {
      return adm.make_(key, // must pass "undefined" for { key: undefined }
      !overrides ? true : key in overrides ? overrides[key] : true);
    });
  } finally {
    endBatch();
  }

  return target;
}

var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859

var arrayTraps = {
  get: function get(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) return adm;
    if (name === "length") return adm.getArrayLength_();

    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }

    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }

    return target[name];
  },
  set: function set(target, name, value) {
    var adm = target[$mobx];

    if (name === "length") {
      adm.setArrayLength_(value);
    }

    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      // numeric string
      adm.set_(parseInt(name), value);
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    die(15);
  }
};
var ObservableArrayAdministration = /*#__PURE__*/function () {
  // this is the prop that gets proxied, so can't replace it!
  function ObservableArrayAdministration(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : undefined;
    }

    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV,  true ? name + "[..]" : undefined);
    };
  }

  var _proto = ObservableArrayAdministration.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) return this.dehancer(value);
    return value;
  };

  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
    return values;
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }

    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }

    return registerListener(this, listener);
  };

  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };

  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) die("Out of range: " + newLength);
    var currentLength = this.values_.length;
    if (newLength === currentLength) return;else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);

      for (var i = 0; i < newLength - currentLength; i++) {
        newItems[i] = undefined;
      } // No Array.fill everywhere...


      this.spliceWithArray_(currentLength, 0, newItems);
    } else this.spliceWithArray_(newLength, currentLength - newLength);
  };

  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) die(16);
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) reserveArrayBuffer(oldLength + delta + 1);
  };

  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;

    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
    if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    if (newItems === undefined) newItems = EMPTY_ARRAY;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index: index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) return EMPTY_ARRAY;
      deleteCount = change.removedCount;
      newItems = change.added;
    }

    newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
      return _this.enhancer_(v, undefined);
    });

    if (this.legacyMode_ || "development" !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta); // checks if internal array wasn't modified
    }

    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice_(index, newItems, res);
    return this.dehanceValues_(res);
  };

  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;

      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length = index + newItems.length - deleteCount;

      for (var i = 0; i < newItems.length; i++) {
        this.values_[index + i] = newItems[i];
      }

      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }

      return res;
    }
  };

  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index: index,
      newValue: newValue,
      oldValue: oldValue
    } : null; // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
    // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled

    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged();
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index: index,
      removed: removed,
      added: added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    this.atom_.reportChanged(); // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe

    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get_ = function get_(index) {
    if (index < this.values_.length) {
      this.atom_.reportObserved();
      return this.dehanceValue_(this.values_[index]);
    }

    console.warn( true ? "[mobx] Out of bounds read: " + index : undefined);
  };

  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;

    if (index < values.length) {
      // update at index in range
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];

      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index: index,
          newValue: newValue
        });
        if (!change) return;
        newValue = change.newValue;
      }

      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;

      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else if (index === values.length) {
      // add a new item
      this.spliceWithArray_(index, 0, [newValue]);
    } else {
      // out of bounds
      die(17, index, values.length);
    }
  };

  return ObservableArrayAdministration;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name =  true ? "ObservableArray@" + getNextId() : undefined;
  }

  if (owned === void 0) {
    owned = false;
  }

  assertProxies();
  var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
  addHiddenFinalProp(adm.values_, $mobx, adm);
  var proxy = new Proxy(adm.values_, arrayTraps);
  adm.proxy_ = proxy;

  if (initialValues && initialValues.length) {
    var prev = allowStateChangesStart(true);
    adm.spliceWithArray_(0, 0, initialValues);
    allowStateChangesEnd(prev);
  }

  return proxy;
} // eslint-disable-next-line

var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },

  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }

    var adm = this[$mobx];

    switch (arguments.length) {
      case 0:
        return [];

      case 1:
        return adm.spliceWithArray_(index);

      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }

    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];

    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];

    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    // reverse by default mutates in place before returning the result
    // which makes it both a 'derivation' and a 'mutation'.
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }

    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    // sort by default mutates in place before returning the result
    // which goes against all good practices. Let's not change the array in place!
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }

    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);

    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }

    return false;
  }
};
/**
 * Wrap function from prototype
 * Without this, everything works as well, but this works
 * faster as everything works on unproxied values
 */

addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc); // map

addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc); // reduce

addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);

function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
} // Report and delegate to dehanced array


function simpleFunc(funcName) {
  return function () {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
} // Make sure callbacks recieve correct array arg #2326


function mapLikeFunc(funcName) {
  return function (callback, thisArg) {
    var _this2 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function (element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
} // Make sure callbacks recieve correct array arg #2326


function reduceLikeFunc(funcName) {
  return function () {
    var _this3 = this;

    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_); // #2432 - reduce behavior depends on arguments.length

    var callback = arguments[0];

    arguments[0] = function (accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };

    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}

var isObservableArrayAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE = "delete"; // just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556

_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /*#__PURE__*/function () {
  // hasMap, not hashMap >-).
  function ObservableMap(initialData, enhancer_, name_) {
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableMap@" + getNextId() : undefined;
    }

    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;

    if (!isFunction(Map)) {
      die(18);
    }

    this.keysAtom_ = createAtom( true ? this.name_ + ".keys()" : undefined);
    this.data_ = new Map();
    this.hasMap_ = new Map();
    this.merge(initialData);
  }

  var _proto = ObservableMap.prototype;

  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };

  _proto.has = function has(key) {
    var _this = this;

    if (!globalState.trackingDerivation) return this.has_(key);
    var entry = this.hasMap_.get(key);

    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : undefined, false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function () {
        return _this.hasMap_["delete"](key);
      });
    }

    return entry.get();
  };

  _proto.set = function set(key, value) {
    var hasKey = this.has_(key);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) return this;
      value = change.newValue;
    }

    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }

    return this;
  };

  _proto["delete"] = function _delete(key) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        name: key
      });
      if (!change) return false;
    }

    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      transaction(function () {
        var _this2$hasMap_$get;

        _this2.keysAtom_.reportChanged();

        (_this2$hasMap_$get = _this2.hasMap_.get(key)) == null ? void 0 : _this2$hasMap_$get.setNewValue_(false);

        var observable = _this2.data_.get(key);

        observable.setNewValue_(undefined);

        _this2.data_["delete"](key);
      });
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable = this.data_.get(key);
    newValue = observable.prepareNewValue_(newValue);

    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;
      if ( true && notifySpy) spyReportStart(change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, change);
      if ( true && notifySpy) spyReportEnd();
    }
  };

  _proto.addValue_ = function addValue_(key, newValue) {
    var _this3 = this;

    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function () {
      var _this3$hasMap_$get;

      var observable = new ObservableValue(newValue, _this3.enhancer_,  true ? _this3.name_ + "." + stringifyKey(key) : undefined, false);

      _this3.data_.set(key, observable);

      newValue = observable.value_; // value might have been changed

      (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(true);

      _this3.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue: newValue
    } : null;
    if ( true && notifySpy) spyReportStart(change);
    if (notify) notifyListeners(this, change);
    if ( true && notifySpy) spyReportEnd();
  };

  _proto.get = function get(key) {
    if (this.has(key)) return this.dehanceValue_(this.data_.get(key).get());
    return this.dehanceValue_(undefined);
  };

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };

  _proto.values = function values() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(),
            done = _keys$next.done,
            value = _keys$next.value;

        return {
          done: done,
          value: done ? undefined : self.get(value)
        };
      }
    });
  };

  _proto.entries = function entries() {
    var self = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(),
            done = _keys$next2.done,
            value = _keys$next2.value;

        return {
          done: done,
          value: done ? undefined : [value, self.get(value)]
        };
      }
    });
  };

  _proto[_Symbol$iterator] = function () {
    return this.entries();
  };

  _proto.forEach = function forEach(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done;) {
      var _step$value = _step.value,
          key = _step$value[0],
          value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  }
  /** Merge another object into this object, returns this. */
  ;

  _proto.merge = function merge(other) {
    var _this4 = this;

    if (isObservableMap(other)) {
      other = new Map(other);
    }

    transaction(function () {
      if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
        return _this4.set(key, other[key]);
      });else if (Array.isArray(other)) other.forEach(function (_ref) {
        var key = _ref[0],
            value = _ref[1];
        return _this4.set(key, value);
      });else if (isES6Map(other)) {
        if (other.constructor !== Map) die(19, other);
        other.forEach(function (value, key) {
          return _this4.set(key, value);
        });
      } else if (other !== null && other !== undefined) die(20, other);
    });
    return this;
  };

  _proto.clear = function clear() {
    var _this5 = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done;) {
          var key = _step2.value;

          _this5["delete"](key);
        }
      });
    });
  };

  _proto.replace = function replace(values) {
    var _this6 = this;

    // Implementation requirements:
    // - respect ordering of replacement map
    // - allow interceptors to run and potentially prevent individual operations
    // - don't recreate observables that already exist in original map (so we don't destroy existing subscriptions)
    // - don't _keysAtom.reportChanged if the keys of resulting map are indentical (order matters!)
    // - note that result map may differ from replacement map due to the interceptors
    transaction(function () {
      // Convert to map so we can do quick key lookups
      var replacementMap = convertToMap(values);
      var orderedData = new Map(); // Used for optimization

      var keysReportChangedCalled = false; // Delete keys that don't exist in replacement map
      // if the key deletion is prevented by interceptor
      // add entry at the beginning of the result map

      for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done;) {
        var key = _step3.value;

        // Concurrently iterating/deleting keys
        // iterator should handle this correctly
        if (!replacementMap.has(key)) {
          var deleted = _this6["delete"](key); // Was the key removed?


          if (deleted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          } else {
            // Delete prevented by interceptor
            var value = _this6.data_.get(key);

            orderedData.set(key, value);
          }
        }
      } // Merge entries


      for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done;) {
        var _step4$value = _step4.value,
            _key = _step4$value[0],
            _value = _step4$value[1];

        // We will want to know whether a new key is added
        var keyExisted = _this6.data_.has(_key); // Add or update value


        _this6.set(_key, _value); // The addition could have been prevent by interceptor


        if (_this6.data_.has(_key)) {
          // The update could have been prevented by interceptor
          // and also we want to preserve existing values
          // so use value from _data map (instead of replacement map)
          var _value2 = _this6.data_.get(_key);

          orderedData.set(_key, _value2); // Was a new key added?

          if (!keyExisted) {
            // _keysAtom.reportChanged() was already called
            keysReportChangedCalled = true;
          }
        }
      } // Check for possible key order change


      if (!keysReportChangedCalled) {
        if (_this6.data_.size !== orderedData.size) {
          // If size differs, keys are definitely modified
          _this6.keysAtom_.reportChanged();
        } else {
          var iter1 = _this6.data_.keys();

          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();

          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this6.keysAtom_.reportChanged();

              break;
            }

            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      } // Use correctly ordered map


      _this6.data_ = orderedData;
    });
    return this;
  };

  _proto.toString = function toString() {
    return "[object ObservableMap]";
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with maps.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _createClass(ObservableMap, [{
    key: "size",
    get: function get() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get() {
      return "Map";
    }
  }]);

  return ObservableMap;
}(); // eslint-disable-next-line

var isObservableMap = /*#__PURE__*/createInstanceofPredicate("ObservableMap", ObservableMap);

function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map = new Map();

    for (var key in dataStructure) {
      map.set(key, dataStructure[key]);
    }

    return map;
  } else {
    return die(21, dataStructure);
  }
}

var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /*#__PURE__*/function () {
  function ObservableSet(initialData, enhancer, name_) {
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }

    if (name_ === void 0) {
      name_ =  true ? "ObservableSet@" + getNextId() : undefined;
    }

    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;

    if (!isFunction(Set)) {
      die(22);
    }

    this.atom_ = createAtom(this.name_);

    this.enhancer_ = function (newV, oldV) {
      return enhancer(newV, oldV, name_);
    };

    if (initialData) {
      this.replace(initialData);
    }
  }

  var _proto = ObservableSet.prototype;

  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== undefined) {
      return this.dehancer(value);
    }

    return value;
  };

  _proto.clear = function clear() {
    var _this = this;

    transaction(function () {
      untracked(function () {
        for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done;) {
          var value = _step.value;

          _this["delete"](value);
        }
      });
    });
  };

  _proto.forEach = function forEach(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done;) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };

  _proto.add = function add(value) {
    var _this2 = this;

    checkIfStateModificationsAreAllowed(this.atom_);

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) return this; // ideally, value = change.value would be done here, so that values can be
      // changed by interceptor. Same applies for other Set and Map api's.
    }

    if (!this.has(value)) {
      transaction(function () {
        _this2.data_.add(_this2.enhancer_(value, undefined));

        _this2.atom_.reportChanged();
      });
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change);
      if (notify) notifyListeners(this, _change);
      if (notifySpy && "development" !== "production") spyReportEnd();
    }

    return this;
  };

  _proto["delete"] = function _delete(value) {
    var _this3 = this;

    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE,
        object: this,
        oldValue: value
      });
      if (!change) return false;
    }

    if (this.has(value)) {
      var notifySpy =  true && isSpyEnabled();
      var notify = hasListeners(this);

      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE,
        object: this,
        oldValue: value
      } : null;

      if (notifySpy && "development" !== "production") spyReportStart(_change2);
      transaction(function () {
        _this3.atom_.reportChanged();

        _this3.data_["delete"](value);
      });
      if (notify) notifyListeners(this, _change2);
      if (notifySpy && "development" !== "production") spyReportEnd();
      return true;
    }

    return false;
  };

  _proto.has = function has(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };

  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.keys = function keys() {
    return this.values();
  };

  _proto.values = function values() {
    this.atom_.reportObserved();
    var self = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };

  _proto.replace = function replace(other) {
    var _this4 = this;

    if (isObservableSet(other)) {
      other = new Set(other);
    }

    transaction(function () {
      if (Array.isArray(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (isES6Set(other)) {
        _this4.clear();

        other.forEach(function (value) {
          return _this4.add(value);
        });
      } else if (other !== null && other !== undefined) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };

  _proto.observe_ = function observe_(listener, fireImmediately) {
    // ... 'fireImmediately' could also be true?
    if ( true && fireImmediately === true) die("`observe` doesn't support fireImmediately=true in combination with sets.");
    return registerListener(this, listener);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.toJSON = function toJSON() {
    return Array.from(this);
  };

  _proto.toString = function toString() {
    return "[object ObservableSet]";
  };

  _proto[_Symbol$iterator$1] = function () {
    return this.values();
  };

  _createClass(ObservableSet, [{
    key: "size",
    get: function get() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get() {
      return "Set";
    }
  }]);

  return ObservableSet;
}(); // eslint-disable-next-line

var isObservableSet = /*#__PURE__*/createInstanceofPredicate("ObservableSet", ObservableSet);

var descriptorCache = /*#__PURE__*/Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /*#__PURE__*/function () {
  function ObservableObjectAdministration(target_, values_, name_, // Used anytime annotation is not explicitely provided
  defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = new Map();
    }

    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }

    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom( true ? this.name_ + ".keys" : undefined); // Optimization: we use this frequently

    this.isPlainObject_ = isPlainObject(this.target_);

    if ( true && !isAnnotation(this.defaultAnnotation_)) {
      die("defaultAnnotation must be valid annotation");
    }

    if (true) {
      // Prepare structure for tracking which fields were already annotated
      this.appliedAnnotations_ = {};
    }
  }

  var _proto = ObservableObjectAdministration.prototype;

  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };

  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable = this.values_.get(key);

    if (observable instanceof ComputedValue) {
      observable.set(newValue);
      return true;
    } // intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: newValue
      });
      if (!change) return null;
      newValue = change.newValue;
    }

    newValue = observable.prepareNewValue_(newValue); // notify spy & observers

    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();

      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable.value_,
        name: key,
        newValue: newValue
      } : null;

      if ( true && notifySpy) spyReportStart(_change);
      observable.setNewValue_(newValue);
      if (notify) notifyListeners(this, _change);
      if ( true && notifySpy) spyReportEnd();
    }

    return true;
  };

  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      // Key doesn't exist yet, subscribe for it in case it's added later
      this.has_(key);
    }

    return this.target_[key];
  }
  /**
   * @param {PropertyKey} key
   * @param {any} value
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // Don't use .has(key) - we care about own
    if (hasProp(this.target_, key)) {
      // Existing prop
      if (this.values_.has(key)) {
        // Observable (can be intercepted)
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        // Non-observable - proxy
        return Reflect.set(this.target_, key, value);
      } else {
        // Non-observable
        this.target_[key] = value;
        return true;
      }
    } else {
      // New prop
      return this.extend_(key, {
        value: value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  } // Trap for "in"
  ;

  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      // Skip key subscription outside derivation
      return key in this.target_;
    }

    this.pendingKeys_ || (this.pendingKeys_ = new Map());
    var entry = this.pendingKeys_.get(key);

    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer,  true ? this.name_ + "." + stringifyKey(key) + "?" : undefined, false);
      this.pendingKeys_.set(key, entry);
    }

    return entry.get();
  }
  /**
   * @param {PropertyKey} key
   * @param {Annotation|boolean} annotation true - use default annotation, false - ignore prop
   */
  ;

  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return;
    }

    assertAnnotable(this, annotation, key);

    if (!(key in this.target_)) {
      var _this$target_$storedA;

      // Throw on missing key, except for decorators:
      // Decorator annotations are collected from whole prototype chain.
      // When called from super() some props may not exist yet.
      // However we don't have to worry about missing prop,
      // because the decorator must have been applied to something.
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
        return; // will be annotated by subclass constructor
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }

    var source = this.target_;

    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);

      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0
        /* Cancel */
        ) return;
        if (outcome === 1
        /* Break */
        ) break;
      }

      source = Object.getPrototypeOf(source);
    }

    recordAnnotationApplied(this, annotation, key);
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {Annotation|boolean} annotation true - use default annotation, false - copy as is
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }

    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }

    assertAnnotable(this, annotation, key);
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);

    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }

    return outcome;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) return null;
        var newValue = change.newValue;

        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      } // Define


      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      } // Notify


      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) return null;
        value = change.newValue;
      }

      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      var observable = new ObservableValue(value, enhancer,  true ? this.name_ + "." + key.toString() : undefined, false);
      this.values_.set(key, observable); // Notify (value possibly changed by ObservableValue)

      this.notifyPropertyAddition_(key, observable.value_);
    } finally {
      endBatch();
    }

    return true;
  } // If original descriptor becomes relevant, move this to annotation directly
  ;

  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    try {
      startBatch(); // Delete

      var deleteOutcome = this.delete_(key);

      if (!deleteOutcome) {
        // Failure or intercepted
        return deleteOutcome;
      } // ADD interceptor


      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: undefined
        });
        if (!change) return null;
      }

      options.name || (options.name =  true ? this.name_ + "." + key.toString() : undefined);
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      }; // Define

      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }

      this.values_.set(key, new ComputedValue(options)); // Notify

      this.notifyPropertyAddition_(key, undefined);
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * @param {PropertyKey} key
   * @param {PropertyDescriptor} descriptor
   * @param {boolean} proxyTrap whether it's called from proxy trap
   * @returns {boolean|null} true on success, false on failure (proxyTrap + non-configurable), null when cancelled by interceptor
   */
  ;

  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }

    // No such prop
    if (!hasProp(this.target_, key)) {
      return true;
    } // Intercept


    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      }); // Cancelled

      if (!change) return null;
    } // Delete


    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;

      startBatch();
      var notify = hasListeners(this);
      var notifySpy =  true && isSpyEnabled();
      var observable = this.values_.get(key); // Value needed for spies/listeners

      var value = undefined; // Optimization: don't pull the value unless we will need it

      if (!observable && (notify || notifySpy)) {
        var _getDescriptor;

        value = (_getDescriptor = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor.value;
      } // delete prop (do first, may fail)


      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      } // Allow re-annotating this field


      if (true) {
        delete this.appliedAnnotations_[key];
      } // Clear observable


      if (observable) {
        this.values_["delete"](key); // for computed, value is undefined

        if (observable instanceof ObservableValue) {
          value = observable.value_;
        } // Notify: autorun(() => obj[key]), see #1796


        propagateChanged(observable);
      } // Notify "keys/entries/values" observers


      this.keysAtom_.reportChanged(); // Notify "has" observers
      // "in" as it may still exist in proto

      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_); // Notify spies/listeners

      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if ( true && notifySpy) spyReportStart(_change2);
        if (notify) notifyListeners(this, _change2);
        if ( true && notifySpy) spyReportEnd();
      }
    } finally {
      endBatch();
    }

    return true;
  }
  /**
   * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
   * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
   * for callback details
   */
  ;

  _proto.observe_ = function observe_(callback, fireImmediately) {
    if ( true && fireImmediately === true) die("`observe` doesn't support the fire immediately property for observable objects.");
    return registerListener(this, callback);
  };

  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };

  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;

    var notify = hasListeners(this);
    var notifySpy =  true && isSpyEnabled();

    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if ( true && notifySpy) spyReportStart(change);
      if (notify) notifyListeners(this, change);
      if ( true && notifySpy) spyReportEnd();
    }

    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true); // Notify "keys/entries/values" observers

    this.keysAtom_.reportChanged();
  };

  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };

  _proto.keys_ = function keys_() {
    // Returns enumerable && own, but unfortunately keysAtom will report on ANY key change.
    // There is no way to distinguish between Object.keys(object) and Reflect.ownKeys(object) - both are handled by ownKeys trap.
    // We can either over-report in Object.keys(object) or under-report in Reflect.ownKeys(object)
    // We choose to over-report in Object.keys(object), because:
    // - typically it's used with simple data objects
    // - when symbolic/non-enumerable keys are relevant Reflect.ownKeys works as expected
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };

  return ObservableObjectAdministration;
}();
function asObservableObject(target, options) {
  var _options$name;

  if ( true && options && isObservableObject(target)) {
    die("Options can't be provided for already observable objects.");
  }

  if (hasProp(target, $mobx)) {
    if ( true && !(getAdministration(target) instanceof ObservableObjectAdministration)) {
      die("Cannot convert '" + getDebugName(target) + "' into observable object:" + "\nThe target is already observable of different type." + "\nExtending builtins is not supported.");
    }

    return target;
  }

  if ( true && !Object.isExtensible(target)) die("Cannot make the designated object observable; it is not extensible");
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name :  true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : undefined;
  var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /*#__PURE__*/createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);

function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}

function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }

  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;

  if (true) {
    adm.appliedAnnotations_[key] = annotation;
  } // Remove applied decorator annotation so we don't try to apply it again in subclass constructor


  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}

function assertAnnotable(adm, annotation, key) {
  // Valid annotation
  if ( true && !isAnnotation(annotation)) {
    die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
  }
  /*
  // Configurable, not sealed, not frozen
  // Possibly not needed, just a little better error then the one thrown by engine.
  // Cases where this would be useful the most (subclass field initializer) are not interceptable by this.
  if (__DEV__) {
      const configurable = getDescriptor(adm.target_, key)?.configurable
      const frozen = Object.isFrozen(adm.target_)
      const sealed = Object.isSealed(adm.target_)
      if (!configurable || frozen || sealed) {
          const fieldName = `${adm.name_}.${key.toString()}`
          const requestedAnnotationType = annotation.annotationType_
          let error = `Cannot apply '${requestedAnnotationType}' to '${fieldName}':`
          if (frozen) {
              error += `\nObject is frozen.`
          }
          if (sealed) {
              error += `\nObject is sealed.`
          }
          if (!configurable) {
              error += `\nproperty is not configurable.`
              // Mention only if caused by us to avoid confusion
              if (hasProp(adm.appliedAnnotations!, key)) {
                  error += `\nTo prevent accidental re-definition of a field by a subclass, `
                  error += `all annotated fields of non-plain objects (classes) are not configurable.`
              }
          }
          die(error)
      }
  }
  */
  // Not annotated


  if ( true && !isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
    var fieldName = adm.name_ + "." + key.toString();
    var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
    var requestedAnnotationType = annotation.annotationType_;
    die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed." + "\nUse 'override' annotation for methods overriden by subclass.");
  }
}

/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */

var OBSERVABLE_ARRAY_BUFFER_SIZE = 0; // Typescript workaround to make sure ObservableArray extends Array

var StubArray = function StubArray() {};

function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== undefined) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}

inherit(StubArray, Array.prototype); // Weex proto freeze protection was here,
// but it is unclear why the hack is need as MobX never changed the prototype
// anyway, so removed it in V6

var LegacyObservableArray = /*#__PURE__*/function (_StubArray) {
  _inheritsLoose(LegacyObservableArray, _StubArray);

  function LegacyObservableArray(initialValues, enhancer, name, owned) {
    var _this;

    if (name === void 0) {
      name =  true ? "ObservableArray@" + getNextId() : undefined;
    }

    if (owned === void 0) {
      owned = false;
    }

    _this = _StubArray.call(this) || this;
    var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
    adm.proxy_ = _assertThisInitialized(_this);
    addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);

    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true); // @ts-ignore

      _this.spliceWithArray(0, 0, initialValues);

      allowStateChangesEnd(prev);
    }

    return _this;
  }

  var _proto = LegacyObservableArray.prototype;

  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();

    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }

    return Array.prototype.concat.apply(this.slice(), //@ts-ignore
    arrays.map(function (a) {
      return isObservableArray(a) ? a.slice() : a;
    }));
  };

  _proto[Symbol.iterator] = function () {
    var self = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        // @ts-ignore
        return nextIndex < self.length ? {
          value: self[nextIndex++],
          done: false
        } : {
          done: true,
          value: undefined
        };
      }
    });
  };

  _createClass(LegacyObservableArray, [{
    key: "length",
    get: function get() {
      return this[$mobx].getArrayLength_();
    },
    set: function set(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: Symbol.toStringTag,
    get: function get() {
      return "Array";
    }
  }]);

  return LegacyObservableArray;
}(StubArray);

Object.entries(arrayExtensions).forEach(function (_ref) {
  var prop = _ref[0],
      fn = _ref[1];
  if (prop !== "concat") addHiddenProp(LegacyObservableArray.prototype, prop, fn);
});

function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get() {
      return this[$mobx].get_(index);
    },
    set: function set(value) {
      this[$mobx].set_(index, value);
    }
  };
}

function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}

function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }

    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1000);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}

function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== undefined) die(23);
      return thing[$mobx].atom_;
    }

    if (isObservableSet(thing)) {
      return thing[$mobx];
    }

    if (isObservableMap(thing)) {
      if (property === undefined) return thing.keysAtom_;
      var observable = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable) die(25, property, getDebugName(thing));
      return observable;
    }

    if (isObservableObject(thing)) {
      if (!property) return die(26);

      var _observable = thing[$mobx].values_.get(property);

      if (!_observable) die(27, property, getDebugName(thing));
      return _observable;
    }

    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      // disposer function
      return thing[$mobx];
    }
  }

  die(28);
}
function getAdministration(thing, property) {
  if (!thing) die(29);
  if (property !== undefined) return getAdministration(getAtom(thing, property));
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
  if (isObservableMap(thing) || isObservableSet(thing)) return thing;
  if (thing[$mobx]) return thing[$mobx];
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;

  if (property !== undefined) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    // valid for arrays as well
    named = getAtom(thing);
  }

  return named.name_;
}

var toString = objectPrototype.toString;
function deepEqual(a, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }

  return eq(a, b, depth);
} // Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.

function eq(a, b, depth, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b; // `null` or `undefined` only equal to itself (strict comparison).

  if (a == null || b == null) return false; // `NaN`s are equivalent, but non-reflexive.

  if (a !== a) return b !== b; // Exhaust primitive checks

  var type = typeof a;
  if (!isFunction(type) && type !== "object" && typeof b != "object") return false; // Compare `[[Class]]` names.

  var className = toString.call(a);
  if (className !== toString.call(b)) return false;

  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans are compared by value.
    case "[object RegExp]": // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')

    case "[object String]":
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return "" + a === "" + b;

    case "[object Number]":
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b; // An `egal` comparison is performed for other numeric values.

      return +a === 0 ? 1 / +a === 1 / b : +a === +b;

    case "[object Date]":
    case "[object Boolean]":
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;

    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);

    case "[object Map]":
    case "[object Set]":
      // Maps and Sets are unwrapped to arrays of entry-pairs, adding an incidental level.
      // Hide this extra level by increasing the depth.
      if (depth >= 0) {
        depth++;
      }

      break;
  } // Unwrap any wrapped objects.


  a = unwrap(a);
  b = unwrap(b);
  var areArrays = className === "[object Array]";

  if (!areArrays) {
    if (typeof a != "object" || typeof b != "object") return false; // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.

    var aCtor = a.constructor,
        bCtor = b.constructor;

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
      return false;
    }
  }

  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  } // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.


  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;

  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  } // Add the first object to the stack of traversed objects.


  aStack.push(a);
  bStack.push(b); // Recursively compare objects and arrays.

  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false; // Deep compare the contents, ignoring non-numeric properties.

    while (length--) {
      if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var keys = Object.keys(a);
    var key;
    length = keys.length; // Ensure that both objects contain the same number of properties before comparing deep equality.

    if (Object.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      key = keys[length];
      if (!(hasProp(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
    }
  } // Remove the first object from the stack of traversed objects.


  aStack.pop();
  bStack.pop();
  return true;
}

function unwrap(a) {
  if (isObservableArray(a)) return a.slice();
  if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
  if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
  return a;
}

function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}

function getSelf() {
  return this;
}

function isAnnotation(thing) {
  return (// Can be function
    thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_)
  );
}

/**
 * (c) Michel Weststrate 2015 - 2020
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
["Symbol", "Map", "Set"].forEach(function (m) {
  var g = getGlobal();

  if (typeof g[m] === "undefined") {
    die("MobX requires global '" + m + "' to be available or polyfilled");
  }
});

if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  // See: https://github.com/andykog/mobx-devtools/
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy: spy,
    extras: {
      getDebugName: getDebugName
    },
    $mobx: $mobx
  });
}


//# sourceMappingURL=mobx.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-reconciler/cjs/react-reconciler.production.min.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/** @license React v0.26.1
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
    var exports = {};
'use strict';var aa=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),ba=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),m=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/cjs/scheduler.production.min.js");function q(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var ca=ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=60103,ea=60106,fa=60107,ha=60108,ia=60114,ja=60109,ka=60110,la=60112,ma=60113,na=60120,oa=60115,pa=60116,qa=60121,ra=60129,sa=60130,ta=60131;
if("function"===typeof Symbol&&Symbol.for){var r=Symbol.for;da=r("react.element");ea=r("react.portal");fa=r("react.fragment");ha=r("react.strict_mode");ia=r("react.profiler");ja=r("react.provider");ka=r("react.context");la=r("react.forward_ref");ma=r("react.suspense");na=r("react.suspense_list");oa=r("react.memo");pa=r("react.lazy");qa=r("react.block");r("react.scope");ra=r("react.debug_trace_mode");sa=r("react.offscreen");ta=r("react.legacy_hidden")}var ua="function"===typeof Symbol&&Symbol.iterator;
function va(a){if(null===a||"object"!==typeof a)return null;a=ua&&a[ua]||a["@@iterator"];return"function"===typeof a?a:null}
function wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fa:return"Fragment";case ea:return"Portal";case ia:return"Profiler";case ha:return"StrictMode";case ma:return"Suspense";case na:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ka:return(a.displayName||"Context")+".Consumer";case ja:return(a._context.displayName||"Context")+".Provider";case la:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case oa:return wa(a.type);case qa:return wa(a._render);case pa:b=a._payload;a=a._init;try{return wa(a(b))}catch(c){}}return null}function xa(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ya(a){if(xa(a)!==a)throw Error(q(188));}
function za(a){var b=a.alternate;if(!b){b=xa(a);if(null===b)throw Error(q(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ya(e),a;if(f===d)return ya(e),b;f=f.sibling}throw Error(q(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(q(189));}}if(c.alternate!==d)throw Error(q(190));}if(3!==c.tag)throw Error(q(188));return c.stateNode.current===c?a:b}function Aa(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function Ba(a){a=za(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child&&4!==b.tag)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function Ca(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}
var Da=$$$hostConfig.getPublicInstance,Ea=$$$hostConfig.getRootHostContext,Fa=$$$hostConfig.getChildHostContext,Ga=$$$hostConfig.prepareForCommit,Ha=$$$hostConfig.resetAfterCommit,Ia=$$$hostConfig.createInstance,Ja=$$$hostConfig.appendInitialChild,Ka=$$$hostConfig.finalizeInitialChildren,La=$$$hostConfig.prepareUpdate,Ma=$$$hostConfig.shouldSetTextContent,Na=$$$hostConfig.createTextInstance,Pa=$$$hostConfig.scheduleTimeout,Qa=$$$hostConfig.cancelTimeout,Ra=$$$hostConfig.noTimeout,Sa=$$$hostConfig.isPrimaryRenderer,
Ta=$$$hostConfig.supportsMutation,Ua=$$$hostConfig.supportsPersistence,Va=$$$hostConfig.supportsHydration,Wa=$$$hostConfig.getInstanceFromNode,Xa=$$$hostConfig.makeOpaqueHydratingObject,Ya=$$$hostConfig.makeClientId,Za=$$$hostConfig.beforeActiveInstanceBlur,$a=$$$hostConfig.afterActiveInstanceBlur,ab=$$$hostConfig.preparePortalMount,bb=$$$hostConfig.supportsTestSelectors,cb=$$$hostConfig.findFiberRoot,db=$$$hostConfig.getBoundingRect,eb=$$$hostConfig.getTextContent,fb=$$$hostConfig.isHiddenSubtree,
gb=$$$hostConfig.matchAccessibilityRole,hb=$$$hostConfig.setFocusIfFocusable,ib=$$$hostConfig.setupIntersectionObserver,jb=$$$hostConfig.appendChild,kb=$$$hostConfig.appendChildToContainer,lb=$$$hostConfig.commitTextUpdate,mb=$$$hostConfig.commitMount,nb=$$$hostConfig.commitUpdate,ob=$$$hostConfig.insertBefore,pb=$$$hostConfig.insertInContainerBefore,qb=$$$hostConfig.removeChild,rb=$$$hostConfig.removeChildFromContainer,sb=$$$hostConfig.resetTextContent,tb=$$$hostConfig.hideInstance,ub=$$$hostConfig.hideTextInstance,
vb=$$$hostConfig.unhideInstance,wb=$$$hostConfig.unhideTextInstance,xb=$$$hostConfig.clearContainer,yb=$$$hostConfig.cloneInstance,zb=$$$hostConfig.createContainerChildSet,Ab=$$$hostConfig.appendChildToContainerChildSet,Bb=$$$hostConfig.finalizeContainerChildren,Cb=$$$hostConfig.replaceContainerChildren,Db=$$$hostConfig.cloneHiddenInstance,Eb=$$$hostConfig.cloneHiddenTextInstance,Fb=$$$hostConfig.canHydrateInstance,Gb=$$$hostConfig.canHydrateTextInstance,Hb=$$$hostConfig.isSuspenseInstancePending,
Ib=$$$hostConfig.isSuspenseInstanceFallback,Jb=$$$hostConfig.getNextHydratableSibling,Kb=$$$hostConfig.getFirstHydratableChild,Lb=$$$hostConfig.hydrateInstance,Mb=$$$hostConfig.hydrateTextInstance,Nb=$$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,Ob=$$$hostConfig.commitHydratedContainer,Pb=$$$hostConfig.commitHydratedSuspenseInstance,Qb;function Rb(a){if(void 0===Qb)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Qb=b&&b[1]||""}return"\n"+Qb+a}var Sb=!1;
function Tb(a,b){if(!a||Sb)return"";Sb=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Sb=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Rb(a):""}var Ub=[],Vb=-1;function Wb(a){return{current:a}}function z(a){0>Vb||(a.current=Ub[Vb],Ub[Vb]=null,Vb--)}function A(a,b){Vb++;Ub[Vb]=a.current;a.current=b}
var Xb={},B=Wb(Xb),D=Wb(!1),Yb=Xb;function Zb(a,b){var c=a.type.contextTypes;if(!c)return Xb;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function E(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $b(){z(D);z(B)}
function ac(a,b,c){if(B.current!==Xb)throw Error(q(168));A(B,b);A(D,c)}function bc(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(q(108,wa(b)||"Unknown",e));return aa({},c,d)}function cc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Xb;Yb=B.current;A(B,a);A(D,D.current);return!0}
function dc(a,b,c){var d=a.stateNode;if(!d)throw Error(q(169));c?(a=bc(a,b,Yb),d.__reactInternalMemoizedMergedChildContext=a,z(D),z(B),A(B,a)):z(D);A(D,c)}var ec=null,fc=null,gc=m.unstable_now;gc();var hc=0,F=8;
function ic(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function jc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function kc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(q(358,a));}}
function lc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=ic(k),e=F):(h&=f,0!==h&&(d=ic(h),e=F))}else f=c&~g,0!==f?(d=ic(f),e=F):0!==h&&(d=ic(h),e=F);if(0===d)return 0;d=31-mc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){ic(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-mc(b),e=1<<c,d|=a[c],b&=~e;return d}
function nc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function oc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=pc(24&~b),0===a?oc(10,b):a;case 10:return a=pc(192&~b),0===a?oc(8,b):a;case 8:return a=pc(3584&~b),0===a&&(a=pc(4186112&~b),0===a&&(a=512)),a;case 2:return b=pc(805306368&~b),0===b&&(b=268435456),b}throw Error(q(358,a));}function pc(a){return a&-a}function qc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function rc(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-mc(b);a[b]=c}var mc=Math.clz32?Math.clz32:sc,tc=Math.log,uc=Math.LN2;function sc(a){return 0===a?32:31-(tc(a)/uc|0)|0}
var vc=m.unstable_runWithPriority,wc=m.unstable_scheduleCallback,xc=m.unstable_cancelCallback,yc=m.unstable_shouldYield,zc=m.unstable_requestPaint,Ac=m.unstable_now,Bc=m.unstable_getCurrentPriorityLevel,Cc=m.unstable_ImmediatePriority,Dc=m.unstable_UserBlockingPriority,Ec=m.unstable_NormalPriority,Fc=m.unstable_LowPriority,Gc=m.unstable_IdlePriority,Hc={},Ic=void 0!==zc?zc:function(){},Jc=null,Kc=null,Lc=!1,Mc=Ac(),G=1E4>Mc?Ac:function(){return Ac()-Mc};
function Nc(){switch(Bc()){case Cc:return 99;case Dc:return 98;case Ec:return 97;case Fc:return 96;case Gc:return 95;default:throw Error(q(332));}}function Oc(a){switch(a){case 99:return Cc;case 98:return Dc;case 97:return Ec;case 96:return Fc;case 95:return Gc;default:throw Error(q(332));}}function Pc(a,b){a=Oc(a);return vc(a,b)}function Qc(a,b,c){a=Oc(a);return wc(a,b,c)}function H(){if(null!==Kc){var a=Kc;Kc=null;xc(a)}Rc()}
function Rc(){if(!Lc&&null!==Jc){Lc=!0;var a=0;try{var b=Jc;Pc(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Jc=null}catch(c){throw null!==Jc&&(Jc=Jc.slice(a+1)),wc(Cc,H),c;}finally{Lc=!1}}}var Sc=ca.ReactCurrentBatchConfig;function Tc(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var I="function"===typeof Object.is?Object.is:Tc,Uc=Object.prototype.hasOwnProperty;
function Vc(a,b){if(I(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Uc.call(b,c[d])||!I(a[c[d]],b[c[d]]))return!1;return!0}
function Wc(a){switch(a.tag){case 5:return Rb(a.type);case 16:return Rb("Lazy");case 13:return Rb("Suspense");case 19:return Rb("SuspenseList");case 0:case 2:case 15:return a=Tb(a.type,!1),a;case 11:return a=Tb(a.type.render,!1),a;case 22:return a=Tb(a.type._render,!1),a;case 1:return a=Tb(a.type,!0),a;default:return""}}function Xc(a,b){if(a&&a.defaultProps){b=aa({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Yc=Wb(null),Zc=null,$c=null,ad=null;
function bd(){ad=$c=Zc=null}function cd(a,b){a=a.type._context;Sa?(A(Yc,a._currentValue),a._currentValue=b):(A(Yc,a._currentValue2),a._currentValue2=b)}function dd(a){var b=Yc.current;z(Yc);a=a.type._context;Sa?a._currentValue=b:a._currentValue2=b}function ed(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}
function fd(a,b){Zc=a;ad=$c=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(gd=!0),a.firstContext=null)}function J(a,b){if(ad!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)ad=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===$c){if(null===Zc)throw Error(q(308));$c=b;Zc.dependencies={lanes:0,firstContext:b,responders:null}}else $c=$c.next=b}return Sa?a._currentValue:a._currentValue2}var hd=!1;
function id(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function jd(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function kd(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function md(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function nd(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function od(a,b,c,d){var e=a.updateQueue;hd=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var t=n.lastBaseUpdate;t!==g&&(null===t?n.firstBaseUpdate=l:t.next=l,n.lastBaseUpdate=k)}}if(null!==f){t=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var y=a,x=f;h=b;p=c;switch(x.tag){case 1:y=x.payload;if("function"===typeof y){t=y.call(p,t,h);break a}t=y;break a;case 3:y.flags=y.flags&-4097|64;case 0:y=x.payload;h="function"===typeof y?y.call(p,t,h):y;if(null===h||void 0===h)break a;t=aa({},t,h);break a;case 2:hd=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=t):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=t);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;pd|=g;a.lanes=g;a.memoizedState=t}}function qd(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(q(191,e));e.call(d)}}}var rd=(new ba.Component).refs;
function sd(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:aa({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var vd={isMounted:function(a){return(a=a._reactInternals)?xa(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=K(),e=td(a),f=kd(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);md(a,f);ud(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=K(),d=td(a),e=kd(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);md(a,e);ud(a,d,c)}};function wd(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Vc(c,d)||!Vc(e,f):!0}
function xd(a,b,c){var d=!1,e=Xb;var f=b.contextType;"object"===typeof f&&null!==f?f=J(f):(e=E(b)?Yb:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Zb(a,e):Xb);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=vd;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function yd(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&vd.enqueueReplaceState(b,b.state,null)}
function zd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=rd;id(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=J(f):(f=E(b)?Yb:B.current,e.context=Zb(a,f));od(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(sd(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&vd.enqueueReplaceState(e,e.state,null),od(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Ad=Array.isArray;
function Bd(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(q(309));var d=c.stateNode}if(!d)throw Error(q(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===rd&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(q(284));if(!c._owner)throw Error(q(290,a));}return a}
function Cd(a,b){if("textarea"!==a.type)throw Error(q(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Dd(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Ed(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Fd(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Bd(a,b,c),d.return=a,d;d=Gd(c.type,c.key,c.props,null,a.mode,d);d.ref=Bd(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Hd(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Id(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function t(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Fd(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case da:return c=Gd(b.type,b.key,b.props,null,a.mode,c),c.ref=Bd(a,null,b),c.return=a,c;case ea:return b=Hd(b,a.mode,c),b.return=a,b}if(Ad(b)||va(b))return b=Id(b,
a.mode,c,null),b.return=a,b;Cd(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case da:return c.key===e?c.type===fa?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ea:return c.key===e?l(a,b,c,d):null}if(Ad(c)||va(c))return null!==e?null:n(a,b,c,d,null);Cd(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case da:return a=a.get(null===d.key?c:d.key)||null,d.type===fa?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ea:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Ad(d)||va(d))return a=a.get(c)||null,n(b,a,d,e,null);Cd(b,d)}return null}function x(e,g,h,k){for(var l=null,v=null,u=g,C=g=0,n=null;null!==u&&C<h.length;C++){u.index>C?(n=u,u=null):n=u.sibling;var w=p(e,u,h[C],k);if(null===w){null===u&&(u=n);break}a&&u&&null===
w.alternate&&b(e,u);g=f(w,g,C);null===v?l=w:v.sibling=w;v=w;u=n}if(C===h.length)return c(e,u),l;if(null===u){for(;C<h.length;C++)u=t(e,h[C],k),null!==u&&(g=f(u,g,C),null===v?l=u:v.sibling=u,v=u);return l}for(u=d(e,u);C<h.length;C++)n=y(u,e,C,h[C],k),null!==n&&(a&&null!==n.alternate&&u.delete(null===n.key?C:n.key),g=f(n,g,C),null===v?l=n:v.sibling=n,v=n);a&&u.forEach(function(a){return b(e,a)});return l}function Y(e,g,h,k){var l=va(h);if("function"!==typeof l)throw Error(q(150));h=l.call(h);if(null==
h)throw Error(q(151));for(var u=l=null,v=g,n=g=0,C=null,w=h.next();null!==v&&!w.done;n++,w=h.next()){v.index>n?(C=v,v=null):C=v.sibling;var x=p(e,v,w.value,k);if(null===x){null===v&&(v=C);break}a&&v&&null===x.alternate&&b(e,v);g=f(x,g,n);null===u?l=x:u.sibling=x;u=x;v=C}if(w.done)return c(e,v),l;if(null===v){for(;!w.done;n++,w=h.next())w=t(e,w.value,k),null!==w&&(g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);return l}for(v=d(e,v);!w.done;n++,w=h.next())w=y(v,e,n,w.value,k),null!==w&&(a&&null!==w.alternate&&
v.delete(null===w.key?n:w.key),g=f(w,g,n),null===u?l=w:u.sibling=w,u=w);a&&v.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===fa&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case da:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===fa){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Bd(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===fa?(d=Id(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Gd(f.type,f.key,f.props,null,a.mode,h),h.ref=Bd(a,d,f),h.return=a,a=h)}return g(a);case ea:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Hd(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Fd(f,a.mode,h),d.return=a,a=d),g(a);if(Ad(f))return x(a,d,f,h);if(va(f))return Y(a,d,f,h);l&&Cd(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(q(152,wa(a.type)||"Component"));}return c(a,d)}}var Jd=Dd(!0),Kd=Dd(!1),Ld={},L=Wb(Ld),Md=Wb(Ld),Nd=Wb(Ld);
function Od(a){if(a===Ld)throw Error(q(174));return a}function Pd(a,b){A(Nd,b);A(Md,a);A(L,Ld);a=Ea(b);z(L);A(L,a)}function Qd(){z(L);z(Md);z(Nd)}function Rd(a){var b=Od(Nd.current),c=Od(L.current);b=Fa(c,a.type,b);c!==b&&(A(Md,a),A(L,b))}function Sd(a){Md.current===a&&(z(L),z(Md))}var M=Wb(0);
function Td(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||Hb(c)||Ib(c)))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=Yd(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Zd(a,b){switch(a.tag){case 5:return b=Fb(b,a.type,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 6:return b=Gb(b,a.pendingProps),null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function $d(a){if(Wd){var b=Vd;if(b){var c=b;if(!Zd(a,b)){b=Jb(c);if(!b||!Zd(a,b)){a.flags=a.flags&-1025|2;Wd=!1;Ud=a;return}Xd(Ud,c)}Ud=a;Vd=Kb(b)}else a.flags=a.flags&-1025|2,Wd=!1,Ud=a}}function ae(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Ud=a}
function be(a){if(!Va||a!==Ud)return!1;if(!Wd)return ae(a),Wd=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ma(b,a.memoizedProps))for(b=Vd;b;)Xd(a,b),b=Jb(b);ae(a);if(13===a.tag){if(!Va)throw Error(q(316));a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(q(317));Vd=Nb(a)}else Vd=Ud?Jb(a.stateNode):null;return!0}function ce(){Va&&(Vd=Ud=null,Wd=!1)}var de=[];
function ee(){for(var a=0;a<de.length;a++){var b=de[a];Sa?b._workInProgressVersionPrimary=null:b._workInProgressVersionSecondary=null}de.length=0}var fe=ca.ReactCurrentDispatcher,ge=ca.ReactCurrentBatchConfig,he=0,N=null,O=null,P=null,ie=!1,je=!1;function Q(){throw Error(q(321));}function ke(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!I(a[c],b[c]))return!1;return!0}
function le(a,b,c,d,e,f){he=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;fe.current=null===a||null===a.memoizedState?me:ne;a=c(d,e);if(je){f=0;do{je=!1;if(!(25>f))throw Error(q(301));f+=1;P=O=null;b.updateQueue=null;fe.current=oe;a=c(d,e)}while(je)}fe.current=pe;b=null!==O&&null!==O.next;he=0;P=O=N=null;ie=!1;if(b)throw Error(q(300));return a}function qe(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}
function re(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(q(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}function se(a,b){return"function"===typeof b?b(a):b}
function te(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((he&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;N.lanes|=l;pd|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;I(d,b.memoizedState)||(gd=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function ue(a){var b=re(),c=b.queue;if(null===c)throw Error(q(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);I(f,b.memoizedState)||(gd=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function ve(a,b,c){var d=b._getVersion;d=d(b._source);var e=Sa?b._workInProgressVersionPrimary:b._workInProgressVersionSecondary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(he&a)===a)Sa?b._workInProgressVersionPrimary=d:b._workInProgressVersionSecondary=d,de.push(b);if(a)return c(b._source);de.push(b);throw Error(q(350));}
function we(a,b,c,d){var e=R;if(null===e)throw Error(q(349));var f=b._getVersion,g=f(b._source),h=fe.current,k=h.useState(function(){return ve(e,b,c)}),l=k[1],n=k[0];k=P;var t=a.memoizedState,p=t.refs,y=p.getSnapshot,x=t.source;t=t.subscribe;var Y=N;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!I(g,a)){a=c(b._source);I(n,a)||(l(a),a=td(Y),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-mc(h),t=1<<k;d[k]|=a;h&=~t}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=td(Y);e.mutableReadLanes|=d&e.pendingLanes}catch(Oa){c(function(){throw Oa;})}})},[b,d]);I(y,c)&&I(x,b)&&I(t,d)||(a={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:n},a.dispatch=l=xe.bind(null,N,a),k.queue=a,k.baseQueue=null,n=ve(e,b,c),k.memoizedState=k.baseState=n);return n}
function ye(a,b,c){var d=re();return we(d,a,b,c)}function ze(a){var b=qe();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:se,lastRenderedState:a};a=a.dispatch=xe.bind(null,N,a);return[b.memoizedState,a]}
function Ae(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Be(a){var b=qe();a={current:a};return b.memoizedState=a}function Ce(){return re().memoizedState}function De(a,b,c,d){var e=qe();N.flags|=a;e.memoizedState=Ae(1|b,c,void 0,void 0===d?null:d)}
function Ee(a,b,c,d){var e=re();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&ke(d,g.deps)){Ae(b,c,f,d);return}}N.flags|=a;e.memoizedState=Ae(1|b,c,f,d)}function Fe(a,b){return De(516,4,a,b)}function Ge(a,b){return Ee(516,4,a,b)}function He(a,b){return Ee(4,2,a,b)}function Ie(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function Je(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ee(4,2,Ie.bind(null,b,a),c)}function Ke(){}function Le(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function Me(a,b){var c=re();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ke(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function Ne(a,b){var c=Nc();Pc(98>c?98:c,function(){a(!0)});Pc(97<c?97:c,function(){var c=ge.transition;ge.transition=1;try{a(!1),b()}finally{ge.transition=c}})}
function xe(a,b,c){var d=K(),e=td(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===N||null!==g&&g===N)je=ie=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(I(k,h))return}catch(l){}finally{}ud(a,e,d)}}
var pe={readContext:J,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useOpaqueIdentifier:Q,unstable_isNewReconciler:!1},me={readContext:J,useCallback:function(a,b){qe().memoizedState=[a,void 0===b?null:b];return a},useContext:J,useEffect:Fe,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return De(4,2,Ie.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return De(4,2,a,b)},useMemo:function(a,b){var c=qe();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=qe();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=xe.bind(null,N,a);return[d.memoizedState,a]},useRef:Be,useState:ze,useDebugValue:Ke,useDeferredValue:function(a){var b=ze(a),c=b[0],d=b[1];Fe(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=
b}},[a]);return c},useTransition:function(){var a=ze(!1),b=a[0];a=Ne.bind(null,a[1]);Be(a);return[a,b]},useMutableSource:function(a,b,c){var d=qe();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return we(d,a,b,c)},useOpaqueIdentifier:function(){if(Wd){var a=!1,b=Xa(function(){a||(a=!0,c(Ya()));throw Error(q(355));}),c=ze(b)[1];0===(N.mode&2)&&(N.flags|=516,Ae(5,function(){c(Ya())},void 0,null));return b}b=Ya();ze(b);return b},unstable_isNewReconciler:!1},ne={readContext:J,
useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:te,useRef:Ce,useState:function(){return te(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=te(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=b}},[a]);return c},useTransition:function(){var a=te(se)[0];return[Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return te(se)[0]},unstable_isNewReconciler:!1},oe={readContext:J,
useCallback:Le,useContext:J,useEffect:Ge,useImperativeHandle:Je,useLayoutEffect:He,useMemo:Me,useReducer:ue,useRef:Ce,useState:function(){return ue(se)},useDebugValue:Ke,useDeferredValue:function(a){var b=ue(se),c=b[0],d=b[1];Ge(function(){var b=ge.transition;ge.transition=1;try{d(a)}finally{ge.transition=b}},[a]);return c},useTransition:function(){var a=ue(se)[0];return[Ce().current,a]},useMutableSource:ye,useOpaqueIdentifier:function(){return ue(se)[0]},unstable_isNewReconciler:!1},Oe=ca.ReactCurrentOwner,
gd=!1;function S(a,b,c,d){b.child=null===a?Kd(b,null,c,d):Jd(b,a.child,c,d)}function Pe(a,b,c,d,e){c=c.render;var f=b.ref;fd(b,e);d=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,d,e);return b.child}
function Se(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Te(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Ue(a,b,g,d,e,f);a=Gd(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Vc,c(e,d)&&a.ref===b.ref))return Re(a,b,f);b.flags|=1;a=Ed(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function Ue(a,b,c,d,e,f){if(null!==a&&Vc(a.memoizedProps,d)&&a.ref===b.ref)if(gd=!1,0!==(f&e))0!==(a.flags&16384)&&(gd=!0);else return b.lanes=a.lanes,Re(a,b,f);return Ve(a,b,c,d,f)}
function We(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},Xe(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},Xe(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},Xe(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,Xe(b,d);S(a,b,e,c);return b.child}
function Ye(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function Ve(a,b,c,d,e){var f=E(c)?Yb:B.current;f=Zb(b,f);fd(b,e);c=le(a,b,c,d,f,e);if(null!==a&&!gd)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,Re(a,b,e);b.flags|=1;S(a,b,c,e);return b.child}
function Ze(a,b,c,d,e){if(E(c)){var f=!0;cc(b)}else f=!1;fd(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),xd(b,c,d),zd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=J(l):(l=E(c)?Yb:B.current,l=Zb(b,l));var n=c.getDerivedStateFromProps,t="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;t||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==
typeof g.componentWillReceiveProps||(h!==d||k!==l)&&yd(b,g,d,l);hd=!1;var p=b.memoizedState;g.state=p;od(b,d,g,e);k=b.memoizedState;h!==d||p!==k||D.current||hd?("function"===typeof n&&(sd(b,c,n,d),k=b.memoizedState),(h=hd||wd(b,c,h,d,p,k,l))?(t||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&
(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;jd(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Xc(b.type,h);g.props=l;t=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=J(k):(k=E(c)?Yb:B.current,k=Zb(b,k));var y=c.getDerivedStateFromProps;(n="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==t||p!==k)&&yd(b,g,d,k);hd=!1;p=b.memoizedState;g.state=p;od(b,d,g,e);var x=b.memoizedState;h!==t||p!==x||D.current||hd?("function"===typeof y&&(sd(b,c,y,d),x=b.memoizedState),(l=hd||wd(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||
(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return $e(a,b,c,d,f,e)}function $e(a,b,c,d,e,f){Ye(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&dc(b,c,!1),Re(a,b,f);d=b.stateNode;Oe.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Jd(b,a.child,null,f),b.child=Jd(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&dc(b,c,!0);return b.child}
function af(a){var b=a.stateNode;b.pendingContext?ac(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ac(a,b.context,!1);Pd(a,b.containerInfo)}var bf={dehydrated:null,retryLane:0};
function cf(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);A(M,e&1);if(null===a){void 0!==d.fallback&&$d(b);a=d.children;e=d.fallback;if(f)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=bf,a;if("number"===typeof d.unstable_expectedLoadTime)return a=df(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=bf,b.lanes=33554432,a;c=ef({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=ff(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=bf,d;c=gf(a,b,d.children,c);b.memoizedState=null;return c}function df(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=ef(b,e,0,null);c=Id(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function gf(a,b,c,d){var e=a.child;a=e.sibling;c=Ed(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function ff(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Ed(g,h);null!==a?d=Ed(a,d):(d=Id(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function hf(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);ed(a.return,b)}
function jf(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function kf(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;S(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&hf(a,c);else if(19===a.tag)hf(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}A(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Td(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);jf(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Td(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}jf(b,!0,c,null,f,b.lastEffect);break;case "together":jf(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function Re(a,b,c){null!==a&&(b.dependencies=a.dependencies);pd|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(q(153));if(null!==b.child){a=b.child;c=Ed(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ed(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}function lf(a){a.flags|=4}var mf,nf,of,pf;
if(Ta)mf=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)Ja(a,c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}},nf=function(){},of=function(a,b,c,d,e){a=a.memoizedProps;if(a!==d){var f=b.stateNode,g=Od(L.current);c=La(f,c,a,d,e,g);(b.updateQueue=c)&&lf(b)}},pf=function(a,b,c,d){c!==d&&lf(b)};else if(Ua){mf=function(a,
b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ja(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ja(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,mf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||
e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};var qf=function(a,b,c,d){for(var e=b.child;null!==e;){if(5===e.tag){var f=e.stateNode;c&&d&&(f=Db(f,e.type,e.memoizedProps,e));Ab(a,f)}else if(6===e.tag)f=e.stateNode,c&&d&&(f=Eb(f,e.memoizedProps,e)),Ab(a,f);else if(4!==e.tag){if(13===e.tag&&0!==(e.flags&4)&&(f=null!==e.memoizedState)){var g=e.child;if(null!==g&&(null!==g.child&&(g.child.return=g,qf(a,g,!0,f)),f=g.sibling,null!==f)){f.return=e;e=f;continue}}if(null!==e.child){e.child.return=
e;e=e.child;continue}}if(e===b)break;for(;null===e.sibling;){if(null===e.return||e.return===b)return;e=e.return}e.sibling.return=e.return;e=e.sibling}};nf=function(a){var b=a.stateNode;if(null!==a.firstEffect){var c=b.containerInfo,d=zb(c);qf(d,a,!1,!1);b.pendingChildren=d;lf(a);Bb(c,d)}};of=function(a,b,c,d,e){var f=a.stateNode,g=a.memoizedProps;if((a=null===b.firstEffect)&&g===d)b.stateNode=f;else{var h=b.stateNode,k=Od(L.current),l=null;g!==d&&(l=La(h,c,g,d,e,k));a&&null===l?b.stateNode=f:(f=yb(f,
l,c,g,d,b,a,h),Ka(f,c,d,e,k)&&lf(b),b.stateNode=f,a?lf(b):mf(f,b,!1,!1))}};pf=function(a,b,c,d){c!==d?(a=Od(Nd.current),c=Od(L.current),b.stateNode=Na(d,a,c,b),lf(b)):b.stateNode=a.stateNode}}else nf=function(){},of=function(){},pf=function(){};
function rf(a,b){if(!Wd)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function sf(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return E(b.type)&&$b(),null;case 3:Qd();z(D);z(B);ee();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)be(b)?lf(b):d.hydrate||(b.flags|=256);nf(b);return null;case 5:Sd(b);var e=Od(Nd.current);c=b.type;if(null!==a&&null!=b.stateNode)of(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(q(166));return null}a=Od(L.current);if(be(b)){if(!Va)throw Error(q(175));a=Lb(b.stateNode,b.type,b.memoizedProps,e,a,b);b.updateQueue=a;null!==a&&lf(b)}else{var f=Ia(c,d,e,a,b);mf(f,b,!1,!1);b.stateNode=f;Ka(f,c,d,e,a)&&lf(b)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)pf(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(q(166));a=Od(Nd.current);e=Od(L.current);if(be(b)){if(!Va)throw Error(q(176));Mb(b.stateNode,
b.memoizedProps,b)&&lf(b)}else b.stateNode=Na(d,a,e,b)}return null;case 13:z(M);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;e=!1;null===a?void 0!==b.memoizedProps.fallback&&be(b):e=null!==a.memoizedState;if(d&&!e&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))0===T&&(T=3);else{if(0===T||3===T)T=4;null===R||0===(pd&134217727)&&0===(tf&134217727)||uf(R,U)}Ua&&d&&(b.flags|=4);Ta&&(d||e)&&(b.flags|=4);return null;case 4:return Qd(),
nf(b),null===a&&ab(b.stateNode.containerInfo),null;case 10:return dd(b),null;case 17:return E(b.type)&&$b(),null;case 19:z(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.flags&64);f=d.rendering;if(null===f)if(e)rf(d,!1);else{if(0!==T||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){f=Td(a);if(null!==f){b.flags|=64;rf(d,!1);a=f.updateQueue;null!==a&&(b.updateQueue=a,b.flags|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;a=c;for(d=b.child;null!==d;)e=d,c=a,e.flags&=
2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,f=e.alternate,null===f?(e.childLanes=0,e.lanes=c,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=f.childLanes,e.lanes=f.lanes,e.child=f.child,e.memoizedProps=f.memoizedProps,e.memoizedState=f.memoizedState,e.updateQueue=f.updateQueue,e.type=f.type,c=f.dependencies,e.dependencies=null===c?null:{lanes:c.lanes,firstContext:c.firstContext}),d=d.sibling;A(M,M.current&1|
2);return b.child}a=a.sibling}null!==d.tail&&G()>vf&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432)}else{if(!e)if(a=Td(f),null!==a){if(b.flags|=64,e=!0,a=a.updateQueue,null!==a&&(b.updateQueue=a,b.flags|=4),rf(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate&&!Wd)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*G()-d.renderingStartTime>vf&&1073741824!==c&&(b.flags|=64,e=!0,rf(d,!1),b.lanes=33554432);d.isBackwards?(f.sibling=b.child,b.child=f):(a=d.last,null!==a?a.sibling=
f:b.child=f,d.last=f)}return null!==d.tail?(a=d.tail,d.rendering=a,d.tail=a.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=G(),a.sibling=null,b=M.current,A(M,e?b&1|2:b&1),a):null;case 23:case 24:return wf(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(q(156,b.tag));}
function xf(a){switch(a.tag){case 1:E(a.type)&&$b();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:Qd();z(D);z(B);ee();b=a.flags;if(0!==(b&64))throw Error(q(285));a.flags=b&-4097|64;return a;case 5:return Sd(a),null;case 13:return z(M),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return z(M),null;case 4:return Qd(),null;case 10:return dd(a),null;case 23:case 24:return wf(),null;default:return null}}
function yf(a,b){try{var c="",d=b;do c+=Wc(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function zf(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Af="function"===typeof WeakMap?WeakMap:Map;function Bf(a,b,c){c=kd(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Cf||(Cf=!0,Df=d);zf(a,b)};return c}
function Ef(a,b,c){c=kd(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){zf(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ff?Ff=new Set([this]):Ff.add(this),zf(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Gf="function"===typeof WeakSet?WeakSet:Set;
function Hf(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){If(a,c)}else b.current=null}
function Jf(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:Xc(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:Ta&&b.flags&256&&xb(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(q(163));}
function Kf(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}
function Lf(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Mf(c,a),Nf(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:Xc(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&qd(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=Da(c.child.stateNode);break;case 1:a=c.child.stateNode}qd(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mb(a,c.type,c.memoizedProps,c);return;case 6:return;case 4:return;case 12:return;case 13:Va&&null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&
Pb(c))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(q(163));}
function Of(a,b){if(Ta)for(var c=a;;){if(5===c.tag){var d=c.stateNode;b?tb(d):vb(c.stateNode,c.memoizedProps)}else if(6===c.tag)d=c.stateNode,b?ub(d):wb(d,c.memoizedProps);else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function Pf(a,b){if(fc&&"function"===typeof fc.onCommitFiberUnmount)try{fc.onCommitFiberUnmount(ec,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Mf(b,c);else{d=b;try{e()}catch(f){If(d,f)}}c=c.next}while(c!==a)}break;case 1:Hf(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){If(b,
f)}break;case 5:Hf(b);break;case 4:Ta?Qf(a,b):Ua&&Ua&&(b=b.stateNode.containerInfo,a=zb(b),Cb(b,a))}}function Rf(a,b){for(var c=b;;)if(Pf(a,c),null===c.child||Ta&&4===c.tag){if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}else c.child.return=c,c=c.child}
function Sf(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function Tf(a){return 5===a.tag||3===a.tag||4===a.tag}
function Uf(a){if(Ta){a:{for(var b=a.return;null!==b;){if(Tf(b))break a;b=b.return}throw Error(q(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(q(161));}c.flags&16&&(sb(b),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Tf(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?Vf(a,c,b):Wf(a,c,b)}}function Vf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?pb(c,a,b):kb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Vf(a,b,c),a=a.sibling;null!==a;)Vf(a,b,c),a=a.sibling}
function Wf(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?ob(c,a,b):jb(c,a);else if(4!==d&&(a=a.child,null!==a))for(Wf(a,b,c),a=a.sibling;null!==a;)Wf(a,b,c),a=a.sibling}
function Qf(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(q(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag)Rf(a,c),f?rb(e,c.stateNode):qb(e,c.stateNode);else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(Pf(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;
for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function Xf(a,b){if(Ta){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&nb(c,f,e,a,d,b)}return;case 6:if(null===b.stateNode)throw Error(q(162));c=b.memoizedProps;lb(b.stateNode,null!==a?a.memoizedProps:c,c);return;case 3:Va&&(b=b.stateNode,b.hydrate&&(b.hydrate=!1,Ob(b.containerInfo)));return;case 12:return;case 13:Yf(b);
Zf(b);return;case 19:Zf(b);return;case 17:return;case 23:case 24:Of(b,null!==b.memoizedState);return}throw Error(q(163));}switch(b.tag){case 0:case 11:case 14:case 15:case 22:Kf(3,b);return;case 12:return;case 13:Yf(b);Zf(b);return;case 19:Zf(b);return;case 3:Va&&(c=b.stateNode,c.hydrate&&(c.hydrate=!1,Ob(c.containerInfo)));break;case 23:case 24:return}a:if(Ua){switch(b.tag){case 1:case 5:case 6:case 20:break a;case 3:case 4:b=b.stateNode;Cb(b.containerInfo,b.pendingChildren);break a}throw Error(q(163));
}}function Yf(a){null!==a.memoizedState&&($f=G(),Ta&&Of(a.child,!0))}function Zf(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Gf);b.forEach(function(b){var d=ag.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}function bg(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var cg=0,dg=1,eg=2,fg=3,gg=4;
if("function"===typeof Symbol&&Symbol.for){var hg=Symbol.for;cg=hg("selector.component");dg=hg("selector.has_pseudo_class");eg=hg("selector.role");fg=hg("selector.test_id");gg=hg("selector.text")}function ig(a){var b=Wa(a);if(null!=b){if("string"!==typeof b.memoizedProps["data-testname"])throw Error(q(364));return b}a=cb(a);if(null===a)throw Error(q(362));return a.stateNode.current}
function jg(a,b){switch(b.$$typeof){case cg:if(a.type===b.value)return!0;break;case dg:a:{b=b.value;a=[a,0];for(var c=0;c<a.length;){var d=a[c++],e=a[c++],f=b[e];if(5!==d.tag||!fb(d)){for(;null!=f&&jg(d,f);)e++,f=b[e];if(e===b.length){b=!0;break a}else for(d=d.child;null!==d;)a.push(d,e),d=d.sibling}}b=!1}return b;case eg:if(5===a.tag&&gb(a.stateNode,b.value))return!0;break;case gg:if(5===a.tag||6===a.tag)if(a=eb(a),null!==a&&0<=a.indexOf(b.value))return!0;break;case fg:if(5===a.tag&&(a=a.memoizedProps["data-testname"],
"string"===typeof a&&a.toLowerCase()===b.value.toLowerCase()))return!0;break;default:throw Error(q(365,b));}return!1}function kg(a){switch(a.$$typeof){case cg:return"<"+(wa(a.value)||"Unknown")+">";case dg:return":has("+(kg(a)||"")+")";case eg:return'[role="'+a.value+'"]';case gg:return'"'+a.value+'"';case fg:return'[data-testname="'+a.value+'"]';default:throw Error(q(365,a));}}
function lg(a,b){var c=[];a=[a,0];for(var d=0;d<a.length;){var e=a[d++],f=a[d++],g=b[f];if(5!==e.tag||!fb(e)){for(;null!=g&&jg(e,g);)f++,g=b[f];if(f===b.length)c.push(e);else for(e=e.child;null!==e;)a.push(e,f),e=e.sibling}}return c}function mg(a,b){if(!bb)throw Error(q(363));a=ig(a);a=lg(a,b);b=[];a=Array.from(a);for(var c=0;c<a.length;){var d=a[c++];if(5===d.tag)fb(d)||b.push(d.stateNode);else for(d=d.child;null!==d;)a.push(d),d=d.sibling}return b}var ng=null;
function og(a){if(null===ng)try{var b=("require"+Math.random()).slice(0,7);ng=(module&&module[b]).call(module,"timers").setImmediate}catch(c){ng=function(a){var b=new MessageChannel;b.port1.onmessage=a;b.port2.postMessage(void 0)}}return ng(a)}var pg=Math.ceil,qg=ca.ReactCurrentDispatcher,rg=ca.ReactCurrentOwner,sg=ca.IsSomeRendererActing,V=0,R=null,W=null,U=0,tg=0,ug=Wb(0),T=0,vg=null,wg=0,pd=0,tf=0,xg=0,yg=null,$f=0,vf=Infinity;function zg(){vf=G()+500}
var X=null,Cf=!1,Df=null,Ff=null,Ag=!1,Bg=null,Cg=90,Dg=[],Eg=[],Fg=null,Gg=0,Hg=null,Ig=-1,Jg=0,Kg=0,Lg=null,Mg=!1;function K(){return 0!==(V&48)?G():-1!==Ig?Ig:Ig=G()}function td(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===Nc()?1:2;0===Jg&&(Jg=wg);if(0!==Sc.transition){0!==Kg&&(Kg=null!==yg?yg.pendingLanes:0);a=Jg;var b=4186112&~Kg;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=Nc();0!==(V&4)&&98===a?a=oc(12,Jg):(a=jc(a),a=oc(a,Jg));return a}
function ud(a,b,c){if(50<Gg)throw Gg=0,Hg=null,Error(q(185));a=Ng(a,b);if(null===a)return null;rc(a,b,c);a===R&&(tf|=b,4===T&&uf(a,U));var d=Nc();1===b?0!==(V&8)&&0===(V&48)?Og(a):(Z(a,c),0===V&&(zg(),H())):(0===(V&4)||98!==d&&99!==d||(null===Fg?Fg=new Set([a]):Fg.add(a)),Z(a,c));yg=a}function Ng(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Z(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-mc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;ic(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=lc(a,a===R?U:0);b=F;if(0===d)null!==c&&(c!==Hc&&xc(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Hc&&xc(c)}15===b?(c=Og.bind(null,a),null===Jc?(Jc=[c],Kc=wc(Cc,Rc)):Jc.push(c),
c=Hc):14===b?c=Qc(99,Og.bind(null,a)):(c=kc(b),c=Qc(c,Pg.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Pg(a){Ig=-1;Kg=Jg=0;if(0!==(V&48))throw Error(q(327));var b=a.callbackNode;if(Qg()&&a.callbackNode!==b)return null;var c=lc(a,a===R?U:0);if(0===c)return null;var d=c;var e=V;V|=16;var f=Rg();if(R!==a||U!==d)zg(),Sg(a,d);do try{Tg();break}catch(h){Ug(a,h)}while(1);bd();qg.current=f;V=e;null!==W?d=0:(R=null,U=0,d=T);if(0!==(wg&tf))Sg(a,0);else if(0!==d){2===d&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),c=nc(a),0!==c&&(d=Vg(a,c)));if(1===d)throw b=vg,Sg(a,0),uf(a,c),Z(a,G()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(q(345));case 2:Zg(a);break;case 3:uf(a,c);if((c&62914560)===c&&(d=$f+500-G(),10<d)){if(0!==lc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){K();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Pa(Zg.bind(null,a),d);break}Zg(a);break;case 4:uf(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-mc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=G()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*pg(c/1960))-c;if(10<c){a.timeoutHandle=Pa(Zg.bind(null,a),c);break}Zg(a);break;case 5:Zg(a);break;default:throw Error(q(329));}}Z(a,G());return a.callbackNode===b?Pg.bind(null,a):null}function uf(a,b){b&=~xg;b&=~tf;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-mc(b),d=1<<c;a[c]=-1;b&=~d}}
function Og(a){if(0!==(V&48))throw Error(q(327));Qg();if(a===R&&0!==(a.expiredLanes&U)){var b=U;var c=Vg(a,b);0!==(wg&tf)&&(b=lc(a,b),c=Vg(a,b))}else b=lc(a,0),c=Vg(a,b);0!==a.tag&&2===c&&(V|=64,a.hydrate&&(a.hydrate=!1,xb(a.containerInfo)),b=nc(a),0!==b&&(c=Vg(a,b)));if(1===c)throw c=vg,Sg(a,0),uf(a,b),Z(a,G()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Zg(a);Z(a,G());return null}
function $g(){if(null!==Fg){var a=Fg;Fg=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Z(a,G())})}H()}function ah(a,b){var c=V;V|=1;try{return a(b)}finally{V=c,0===V&&(zg(),H())}}function bh(a,b){var c=V;if(0!==(c&48))return a(b);V|=1;try{if(a)return Pc(99,a.bind(null,b))}finally{V=c,H()}}function Xe(a,b){A(ug,tg);tg|=b;wg|=b}function wf(){tg=ug.current;z(ug)}
function Sg(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;c!==Ra&&(a.timeoutHandle=Ra,Qa(c));if(null!==W)for(c=W.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$b();break;case 3:Qd();z(D);z(B);ee();break;case 5:Sd(d);break;case 4:Qd();break;case 13:z(M);break;case 19:z(M);break;case 10:dd(d);break;case 23:case 24:wf()}c=c.return}R=a;W=Ed(a.current,null);U=tg=wg=b;T=0;vg=null;xg=tf=pd=0}
function Ug(a,b){do{var c=W;try{bd();fe.current=pe;if(ie){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}ie=!1}he=0;P=O=N=null;je=!1;rg.current=null;if(null===c||null===c.return){T=1;vg=b;W=null;break}a:{var f=a,g=c.return,h=c,k=b;b=U;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var t=0!==(M.current&1),p=g;do{var y;if(y=13===p.tag){var x=p.memoizedState;if(null!==x)y=null!==x.dehydrated?!0:!1;else{var Y=p.memoizedProps;y=void 0===Y.fallback?!1:!0!==Y.unstable_avoidThisFallback?!0:t?!1:!0}}if(y){var u=p.updateQueue;if(null===u){var v=new Set;v.add(l);p.updateQueue=v}else u.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var C=kd(-1,1);C.tag=2;md(h,C)}h.lanes|=1;break a}k=
void 0;h=b;var Oa=f.pingCache;null===Oa?(Oa=f.pingCache=new Af,k=new Set,Oa.set(l,k)):(k=Oa.get(l),void 0===k&&(k=new Set,Oa.set(l,k)));if(!k.has(h)){k.add(h);var Qe=ch.bind(null,f,l,h);l.then(Qe,Qe)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((wa(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==T&&(T=2);k=
yf(k,h);p=g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var Wg=Bf(p,f,b);nd(p,Wg);break a;case 1:f=k;var Xg=p.type,ld=p.stateNode;if(0===(p.flags&64)&&("function"===typeof Xg.getDerivedStateFromError||null!==ld&&"function"===typeof ld.componentDidCatch&&(null===Ff||!Ff.has(ld)))){p.flags|=4096;b&=-b;p.lanes|=b;var Yg=Ef(p,f,b);nd(p,Yg);break a}}p=p.return}while(null!==p)}dh(c)}catch(w){b=w;W===c&&null!==c&&(W=c=c.return);continue}break}while(1)}
function Rg(){var a=qg.current;qg.current=pe;return null===a?pe:a}function Vg(a,b){var c=V;V|=16;var d=Rg();R===a&&U===b||Sg(a,b);do try{eh();break}catch(e){Ug(a,e)}while(1);bd();V=c;qg.current=d;if(null!==W)throw Error(q(261));R=null;U=0;return T}function eh(){for(;null!==W;)fh(W)}function Tg(){for(;null!==W&&!yc();)fh(W)}function fh(a){var b=gh(a.alternate,a,tg);a.memoizedProps=a.pendingProps;null===b?dh(a):W=b;rg.current=null}
function dh(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=sf(c,b,tg);if(null!==c){W=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(tg&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=xf(b);if(null!==c){c.flags&=2047;W=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){W=b;return}W=b=a}while(null!==b);0===T&&(T=5)}function Zg(a){var b=Nc();Pc(99,hh.bind(null,a,b));return null}
function hh(a,b){do Qg();while(null!==Bg);if(0!==(V&48))throw Error(q(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(q(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-mc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Fg&&0===(d&24)&&Fg.has(a)&&Fg.delete(a);a===R&&(W=R=null,U=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=V;V|=32;rg.current=null;Lg=Ga(a.containerInfo);Mg=!1;X=d;do try{ih()}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);Lg=null;X=d;do try{for(g=a;null!==X;){var n=X.flags;n&16&&Ta&&sb(X.stateNode);if(n&128){var t=X.alternate;if(null!==t){var p=t.ref;null!==p&&("function"===typeof p?p(null):p.current=
null)}}switch(n&1038){case 2:Uf(X);X.flags&=-3;break;case 6:Uf(X);X.flags&=-3;Xf(X.alternate,X);break;case 1024:X.flags&=-1025;break;case 1028:X.flags&=-1025;Xf(X.alternate,X);break;case 4:Xf(X.alternate,X);break;case 8:h=g;f=X;Ta?Qf(h,f):Rf(h,f);var y=f.alternate;Sf(f);null!==y&&Sf(y)}X=X.nextEffect}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);Mg&&$a();Ha(a.containerInfo);a.current=c;X=d;do try{for(n=a;null!==X;){var x=X.flags;x&36&&Lf(n,X.alternate,X);if(x&128){t=
void 0;var Y=X.ref;if(null!==Y){var u=X.stateNode;switch(X.tag){case 5:t=Da(u);break;default:t=u}"function"===typeof Y?Y(t):Y.current=t}}X=X.nextEffect}}catch(v){if(null===X)throw Error(q(330));If(X,v);X=X.nextEffect}while(null!==X);X=null;Ic();V=e}else a.current=c;if(Ag)Ag=!1,Bg=a,Cg=b;else for(X=d;null!==X;)b=X.nextEffect,X.nextEffect=null,X.flags&8&&(x=X,x.sibling=null,x.stateNode=null),X=b;d=a.pendingLanes;0===d&&(Ff=null);1===d?a===Hg?Gg++:(Gg=0,Hg=a):Gg=0;c=c.stateNode;if(fc&&"function"===typeof fc.onCommitFiberRoot)try{fc.onCommitFiberRoot(ec,
c,void 0,64===(c.current.flags&64))}catch(v){}Z(a,G());if(Cf)throw Cf=!1,a=Df,Df=null,a;if(0!==(V&8))return null;H();return null}function ih(){for(;null!==X;){var a=X.alternate;Mg||null===Lg||(0!==(X.flags&8)?Ca(X,Lg)&&(Mg=!0,Za()):13===X.tag&&bg(a,X)&&Ca(X,Lg)&&(Mg=!0,Za()));var b=X.flags;0!==(b&256)&&Jf(a,X);0===(b&512)||Ag||(Ag=!0,Qc(97,function(){Qg();return null}));X=X.nextEffect}}function Qg(){if(90!==Cg){var a=97<Cg?97:Cg;Cg=90;return Pc(a,jh)}return!1}
function Nf(a,b){Dg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}))}function Mf(a,b){Eg.push(b,a);Ag||(Ag=!0,Qc(97,function(){Qg();return null}))}
function jh(){if(null===Bg)return!1;var a=Bg;Bg=null;if(0!==(V&48))throw Error(q(331));var b=V;V|=32;var c=Eg;Eg=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(q(330));If(f,k)}}c=Dg;Dg=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(q(330));If(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;V=b;H();return!0}function kh(a,b,c){b=yf(c,b);b=Bf(a,b,1);md(a,b);b=K();a=Ng(a,1);null!==a&&(rc(a,1,b),Z(a,b))}
function If(a,b){if(3===a.tag)kh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){kh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d))){a=yf(b,a);var e=Ef(c,a,1);md(c,e);e=K();c=Ng(c,1);if(null!==c)rc(c,1,e),Z(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ff||!Ff.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function ch(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=K();a.pingedLanes|=a.suspendedLanes&c;R===a&&(U&c)===c&&(4===T||3===T&&(U&62914560)===U&&500>G()-$f?Sg(a,0):xg|=c);Z(a,b)}function ag(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===Nc()?1:2:(0===Jg&&(Jg=wg),b=pc(62914560&~Jg),0===b&&(b=4194304)));c=K();a=Ng(a,b);null!==a&&(rc(a,b,c),Z(a,c))}var gh;
gh=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||D.current)gd=!0;else if(0!==(c&d))gd=0!==(a.flags&16384)?!0:!1;else{gd=!1;switch(b.tag){case 3:af(b);ce();break;case 5:Rd(b);break;case 1:E(b.type)&&cc(b);break;case 4:Pd(b,b.stateNode.containerInfo);break;case 10:cd(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return cf(a,b,c);A(M,M.current&1);b=Re(a,b,c);return null!==b?b.sibling:null}A(M,M.current&1);break;case 19:d=
0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return kf(a,b,c);b.flags|=64}var e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);A(M,M.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,We(a,b,c)}return Re(a,b,c)}else gd=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Zb(b,B.current);fd(b,c);e=le(null,b,d,a,e,c);b.flags|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&
void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(E(d)){var f=!0;cc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;id(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&sd(b,d,g,a);e.updater=vd;b.stateNode=e;e._reactInternals=b;zd(b,d,a,c);b=$e(null,b,d,!0,f,c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;
f=b.tag=lh(e);a=Xc(e,a);switch(f){case 0:b=Ve(null,b,e,a,c);break a;case 1:b=Ze(null,b,e,a,c);break a;case 11:b=Pe(null,b,e,a,c);break a;case 14:b=Se(null,b,e,Xc(e.type,a),d,c);break a}throw Error(q(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ve(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Ze(a,b,d,e,c);case 3:af(b);d=b.updateQueue;if(null===a||null===d)throw Error(q(282));d=b.pendingProps;e=b.memoizedState;e=null!==
e?e.element:null;jd(a,b);od(b,d,null,c);d=b.memoizedState.element;if(d===e)ce(),b=Re(a,b,c);else{e=b.stateNode;if(f=e.hydrate)Va?(Vd=Kb(b.stateNode.containerInfo),Ud=b,f=Wd=!0):f=!1;if(f){if(Va&&(a=e.mutableSourceEagerHydrationData,null!=a))for(e=0;e<a.length;e+=2)f=a[e],g=a[e+1],Sa?f._workInProgressVersionPrimary=g:f._workInProgressVersionSecondary=g,de.push(f);c=Kd(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else S(a,b,d,c),ce();b=b.child}return b;case 5:return Rd(b),null===
a&&$d(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ma(d,e)?g=null:null!==f&&Ma(d,f)&&(b.flags|=16),Ye(a,b),S(a,b,g,c),b.child;case 6:return null===a&&$d(b),null;case 13:return cf(a,b,c);case 4:return Pd(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Jd(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),Pe(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;cd(b,f);if(null!==g){var h=g.value;f=I(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!D.current){b=Re(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==
(l.observedBits&f)){1===h.tag&&(l=kd(-1,c&-c),l.tag=2,md(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);ed(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,fd(b,c),e=J(e,f.unstable_observedBits),d=d(e),b.flags|=1,S(a,b,
d,c),b.child;case 14:return e=b.type,f=Xc(e,b.pendingProps),f=Xc(e.type,f),Se(a,b,e,f,d,c);case 15:return Ue(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Xc(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,E(d)?(a=!0,cc(b)):a=!1,fd(b,c),xd(b,d,e),zd(b,d,e,c),$e(null,b,d,!0,a,c);case 19:return kf(a,b,c);case 23:return We(a,b,c);case 24:return We(a,b,c)}throw Error(q(156,b.tag));};
var mh={current:!1},nh=m.unstable_flushAllWithoutAsserting,oh="function"===typeof nh;function ph(){if(void 0!==nh)return nh();for(var a=!1;Qg();)a=!0;return a}function qh(a){try{ph(),og(function(){ph()?qh(a):a()})}catch(b){a(b)}}var rh=0,sh=!1;
function th(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function Yd(a,b,c,d){return new th(a,b,c,d)}function Te(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function lh(a){if("function"===typeof a)return Te(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===la)return 11;if(a===oa)return 14}return 2}
function Ed(a,b){var c=a.alternate;null===c?(c=Yd(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Gd(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Te(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case fa:return Id(c.children,e,f,b);case ra:g=8;e|=16;break;case ha:g=8;e|=1;break;case ia:return a=Yd(12,c,b,e|8),a.elementType=ia,a.type=ia,a.lanes=f,a;case ma:return a=Yd(13,c,b,e),a.type=ma,a.elementType=ma,a.lanes=f,a;case na:return a=Yd(19,c,b,e),a.elementType=na,a.lanes=f,a;case sa:return ef(c,e,f,b);case ta:return a=Yd(24,c,b,e),a.elementType=ta,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ja:g=10;break a;case ka:g=9;break a;case la:g=11;break a;case oa:g=14;break a;case pa:g=16;d=null;break a;case qa:g=22;break a}throw Error(q(130,null==a?a:typeof a,""));}b=Yd(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Id(a,b,c,d){a=Yd(7,a,d,b);a.lanes=c;return a}function ef(a,b,c,d){a=Yd(23,a,d,b);a.elementType=sa;a.lanes=c;return a}function Fd(a,b,c){a=Yd(6,a,null,b);a.lanes=c;return a}
function Hd(a,b,c){b=Yd(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function uh(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=Ra;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=qc(0);this.expirationTimes=qc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=qc(0);Va&&(this.mutableSourceEagerHydrationData=null)}
function vh(a){var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(q(188));throw Error(q(268,Object.keys(a)));}a=Aa(b);return null===a?null:a.stateNode}function wh(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function xh(a,b){wh(a,b);(a=a.alternate)&&wh(a,b)}function yh(a){a=Aa(a);return null===a?null:a.stateNode}function zh(){return null}exports.IsThisRendererActing=mh;
exports.act=function(a){function b(){rh--;sg.current=c;mh.current=d}!1===sh&&(sh=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected."));rh++;var c=sg.current,d=mh.current;sg.current=!0;mh.current=!0;try{var e=ah(a)}catch(f){throw b(),f;}if(null!==e&&"object"===typeof e&&"function"===typeof e.then)return{then:function(a,d){e.then(function(){1<rh||!0===oh&&!0===c?(b(),a()):qh(function(c){b();c?d(c):a()})},function(a){b();d(a)})}};try{1!==rh||
!1!==oh&&!1!==c||ph(),b()}catch(f){throw b(),f;}return{then:function(a){a()}}};exports.attemptContinuousHydration=function(a){if(13===a.tag){var b=K();ud(a,67108864,b);xh(a,67108864)}};exports.attemptHydrationAtCurrentPriority=function(a){if(13===a.tag){var b=K(),c=td(a);ud(a,c,b);xh(a,c)}};
exports.attemptSynchronousHydration=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.hydrate){var c=ic(b.pendingLanes);b.expiredLanes|=c&b.pendingLanes;Z(b,G());0===(V&48)&&(zg(),H())}break;case 13:var d=K();bh(function(){return ud(a,1,d)});xh(a,4)}};exports.attemptUserBlockingHydration=function(a){if(13===a.tag){var b=K();ud(a,4,b);xh(a,4)}};exports.batchedEventUpdates=function(a,b){var c=V;V|=2;try{return a(b)}finally{V=c,0===V&&(zg(),H())}};exports.batchedUpdates=ah;
exports.createComponentSelector=function(a){return{$$typeof:cg,value:a}};exports.createContainer=function(a,b,c){a=new uh(a,b,c);b=Yd(3,null,null,2===b?7:1===b?3:0);a.current=b;b.stateNode=a;id(b);return a};exports.createHasPsuedoClassSelector=function(a){return{$$typeof:dg,value:a}};exports.createPortal=function(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ea,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}};
exports.createRoleSelector=function(a){return{$$typeof:eg,value:a}};exports.createTestNameSelector=function(a){return{$$typeof:fg,value:a}};exports.createTextSelector=function(a){return{$$typeof:gg,value:a}};exports.deferredUpdates=function(a){return Pc(97,a)};exports.discreteUpdates=function(a,b,c,d,e){var f=V;V|=4;try{return Pc(98,a.bind(null,b,c,d,e))}finally{V=f,0===V&&(zg(),H())}};exports.findAllNodes=mg;
exports.findBoundingRects=function(a,b){if(!bb)throw Error(q(363));b=mg(a,b);a=[];for(var c=0;c<b.length;c++)a.push(db(b[c]));for(b=a.length-1;0<b;b--){c=a[b];for(var d=c.x,e=d+c.width,f=c.y,g=f+c.height,h=b-1;0<=h;h--)if(b!==h){var k=a[h],l=k.x,n=l+k.width,t=k.y,p=t+k.height;if(d>=l&&f>=t&&e<=n&&g<=p){a.splice(b,1);break}else if(!(d!==l||c.width!==k.width||p<f||t>g)){t>f&&(k.height+=t-f,k.y=f);p<g&&(k.height=g-t);a.splice(b,1);break}else if(!(f!==t||c.height!==k.height||n<d||l>e)){l>d&&(k.width+=
l-d,k.x=d);n<e&&(k.width=e-l);a.splice(b,1);break}}}return a};exports.findHostInstance=vh;exports.findHostInstanceWithNoPortals=function(a){a=Ba(a);return null===a?null:20===a.tag?a.stateNode.instance:a.stateNode};exports.findHostInstanceWithWarning=function(a){return vh(a)};exports.flushControlled=function(a){var b=V;V|=1;try{Pc(99,a)}finally{V=b,0===V&&(zg(),H())}};exports.flushDiscreteUpdates=function(){0===(V&49)&&($g(),Qg())};exports.flushPassiveEffects=Qg;exports.flushSync=bh;
exports.focusWithin=function(a,b){if(!bb)throw Error(q(363));a=ig(a);b=lg(a,b);b=Array.from(b);for(a=0;a<b.length;){var c=b[a++];if(!fb(c)){if(5===c.tag&&hb(c.stateNode))return!0;for(c=c.child;null!==c;)b.push(c),c=c.sibling}}return!1};exports.getCurrentUpdateLanePriority=function(){return hc};
exports.getFindAllNodesFailureDescription=function(a,b){if(!bb)throw Error(q(363));var c=0,d=[];a=[ig(a),0];for(var e=0;e<a.length;){var f=a[e++],g=a[e++],h=b[g];if(5!==f.tag||!fb(f))if(jg(f,h)&&(d.push(kg(h)),g++,g>c&&(c=g)),g<b.length)for(f=f.child;null!==f;)a.push(f,g),f=f.sibling}if(c<b.length){for(a=[];c<b.length;c++)a.push(kg(b[c]));return"findAllNodes was able to match part of the selector:\n  "+(d.join(" > ")+"\n\nNo matching component was found for:\n  ")+a.join(" > ")}return null};
exports.getPublicRootInstance=function(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return Da(a.child.stateNode);default:return a.child.stateNode}};
exports.injectIntoDevTools=function(a){a={bundleType:a.bundleType,version:a.version,rendererPackageName:a.rendererPackageName,rendererConfig:a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ca.ReactCurrentDispatcher,findHostInstanceByFiber:yh,findFiberByHostInstance:a.findFiberByHostInstance||zh,findHostInstancesForRefresh:null,
scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)a=!1;else{var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!b.isDisabled&&b.supportsFiber)try{ec=b.inject(a),fc=b}catch(c){}a=!0}return a};exports.observeVisibleRects=function(a,b,c,d){if(!bb)throw Error(q(363));a=mg(a,b);var e=ib(a,c,d).disconnect;return{disconnect:function(){e()}}};
exports.registerMutableSourceForHydration=function(a,b){var c=b._getVersion;c=c(b._source);null==a.mutableSourceEagerHydrationData?a.mutableSourceEagerHydrationData=[b,c]:a.mutableSourceEagerHydrationData.push(b,c)};exports.runWithPriority=function(a,b){var c=hc;try{return hc=a,b()}finally{hc=c}};exports.shouldSuspend=function(){return!1};exports.unbatchedUpdates=function(a,b){var c=V;V&=-2;V|=8;try{return a(b)}finally{V=c,0===V&&(zg(),H())}};
exports.updateContainer=function(a,b,c,d){var e=b.current,f=K(),g=td(e);a:if(c){c=c._reactInternals;b:{if(xa(c)!==c||1!==c.tag)throw Error(q(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(E(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(q(171));}if(1===c.tag){var k=c.type;if(E(k)){c=bc(c,k,h);break a}}c=h}else c=Xb;null===b.context?b.context=c:b.pendingContext=c;b=kd(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);md(e,b);ud(e,g,f);return g};

    return exports;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: jsx, jsxs */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var f=__webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js"),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/*!********************************************************!*\
  !*** ./node_modules/react/cjs/react.production.min.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.2";


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window) {/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/taro-ui/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/taro-ui/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: AtAccordion, AtActionSheet, AtActionSheetItem, AtActivityIndicator, AtAvatar, AtBadge, AtButton, AtCalendar, AtCard, AtCheckbox, AtComponent, AtCountdown, AtCurtain, AtDivider, AtDrawer, AtFab, AtFloatLayout, AtForm, AtGrid, AtIcon, AtImagePicker, AtIndexes, AtInput, AtInputNumber, AtList, AtListItem, AtLoadMore, AtLoading, AtMessage, AtModal, AtModalAction, AtModalContent, AtModalHeader, AtNavBar, AtNoticebar, AtPagination, AtProgress, AtRadio, AtRange, AtRate, AtSearchBar, AtSegmentedControl, AtSlider, AtSteps, AtSwipeAction, AtSwitch, AtTabBar, AtTabs, AtTabsPane, AtTag, AtTextarea, AtTimeline, AtToast */
/*! exports used: AtButton, AtIcon, AtList, AtListItem, AtTabs, AtTabsPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global, document) {/* unused harmony export AtAccordion */
/* unused harmony export AtActionSheet */
/* unused harmony export AtActionSheetItem */
/* unused harmony export AtActivityIndicator */
/* unused harmony export AtAvatar */
/* unused harmony export AtBadge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtButton; });
/* unused harmony export AtCalendar */
/* unused harmony export AtCard */
/* unused harmony export AtCheckbox */
/* unused harmony export AtComponent */
/* unused harmony export AtCountdown */
/* unused harmony export AtCurtain */
/* unused harmony export AtDivider */
/* unused harmony export AtDrawer */
/* unused harmony export AtFab */
/* unused harmony export AtFloatLayout */
/* unused harmony export AtForm */
/* unused harmony export AtGrid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AtIcon; });
/* unused harmony export AtImagePicker */
/* unused harmony export AtIndexes */
/* unused harmony export AtInput */
/* unused harmony export AtInputNumber */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AtList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AtListItem; });
/* unused harmony export AtLoadMore */
/* unused harmony export AtLoading */
/* unused harmony export AtMessage */
/* unused harmony export AtModal */
/* unused harmony export AtModalAction */
/* unused harmony export AtModalContent */
/* unused harmony export AtModalHeader */
/* unused harmony export AtNavBar */
/* unused harmony export AtNoticebar */
/* unused harmony export AtPagination */
/* unused harmony export AtProgress */
/* unused harmony export AtRadio */
/* unused harmony export AtRange */
/* unused harmony export AtRate */
/* unused harmony export AtSearchBar */
/* unused harmony export AtSegmentedControl */
/* unused harmony export AtSlider */
/* unused harmony export AtSteps */
/* unused harmony export AtSwipeAction */
/* unused harmony export AtSwitch */
/* unused harmony export AtTabBar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AtTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AtTabsPane; });
/* unused harmony export AtTag */
/* unused harmony export AtTextarea */
/* unused harmony export AtTimeline */
/* unused harmony export AtToast */
/* harmony import */ var _Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extends(d, b) {
  _extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
  _assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return _assign.apply(this, arguments);
};

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) {
    ar = ar.concat(__read(arguments[i]));
  }

  return ar;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arg);

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
  if ("object" === Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;

var isAsyncMode = function isAsyncMode(a) {
  return A(a) || z(a) === l;
};

var isConcurrentMode = A;

var isContextConsumer = function isContextConsumer(a) {
  return z(a) === k;
};

var isContextProvider = function isContextProvider(a) {
  return z(a) === h;
};

var isElement = function isElement(a) {
  return "object" === Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && a.$$typeof === c;
};

var isForwardRef = function isForwardRef(a) {
  return z(a) === n;
};

var isFragment = function isFragment(a) {
  return z(a) === e;
};

var isLazy = function isLazy(a) {
  return z(a) === t;
};

var isMemo = function isMemo(a) {
  return z(a) === r;
};

var isPortal = function isPortal(a) {
  return z(a) === d;
};

var isProfiler = function isProfiler(a) {
  return z(a) === g;
};

var isStrictMode = function isStrictMode(a) {
  return z(a) === f;
};

var isSuspense = function isSuspense(a) {
  return z(a) === p;
};

var isValidElementType = function isValidElementType(a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

var typeOf = z;
var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf
};
var reactIs_development = createCommonjsModule(function (module, exports) {
  if (true) {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }

      function typeOf(object) {
        if (Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});
var reactIs_development_1 = reactIs_development.AsyncMode;
var reactIs_development_2 = reactIs_development.ConcurrentMode;
var reactIs_development_3 = reactIs_development.ContextConsumer;
var reactIs_development_4 = reactIs_development.ContextProvider;
var reactIs_development_5 = reactIs_development.Element;
var reactIs_development_6 = reactIs_development.ForwardRef;
var reactIs_development_7 = reactIs_development.Fragment;
var reactIs_development_8 = reactIs_development.Lazy;
var reactIs_development_9 = reactIs_development.Memo;
var reactIs_development_10 = reactIs_development.Portal;
var reactIs_development_11 = reactIs_development.Profiler;
var reactIs_development_12 = reactIs_development.StrictMode;
var reactIs_development_13 = reactIs_development.Suspense;
var reactIs_development_14 = reactIs_development.isAsyncMode;
var reactIs_development_15 = reactIs_development.isConcurrentMode;
var reactIs_development_16 = reactIs_development.isContextConsumer;
var reactIs_development_17 = reactIs_development.isContextProvider;
var reactIs_development_18 = reactIs_development.isElement;
var reactIs_development_19 = reactIs_development.isForwardRef;
var reactIs_development_20 = reactIs_development.isFragment;
var reactIs_development_21 = reactIs_development.isLazy;
var reactIs_development_22 = reactIs_development.isMemo;
var reactIs_development_23 = reactIs_development.isPortal;
var reactIs_development_24 = reactIs_development.isProfiler;
var reactIs_development_25 = reactIs_development.isStrictMode;
var reactIs_development_26 = reactIs_development.isSuspense;
var reactIs_development_27 = reactIs_development.isValidElementType;
var reactIs_development_28 = reactIs_development.typeOf;
var reactIs = createCommonjsModule(function (module) {
  if (false) {} else {
    module.exports = reactIs_development;
  }
});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;
var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning$1() {};

if (true) {
  printWarning$1 = function printWarning$1(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  shim.isRequired = shim;

  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.


  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  if (true) {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  } else {}
});

var AtActionSheetBody =
/** @class */
function (_super) {
  __extends(AtActionSheetBody, _super);

  function AtActionSheetBody() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActionSheetBody.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__body', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtActionSheetFooter =
/** @class */
function (_super) {
  __extends(AtActionSheetFooter, _super);

  function AtActionSheetFooter() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      if (typeof _this.props.onClick === 'function') {
        (_a = _this.props).onClick.apply(_a, __spread(args));
      }
    };

    return _this;
  }

  AtActionSheetFooter.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__footer', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      onClick: this.handleClick,
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetFooter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheetFooter.propTypes = {
  onClick: propTypes.func
};

var AtActionSheetHeader =
/** @class */
function (_super) {
  __extends(AtActionSheetHeader, _super);

  function AtActionSheetHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActionSheetHeader.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, this.props.children);
  };

  return AtActionSheetHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtActionSheet =
/** @class */
function (_super) {
  __extends(AtActionSheet, _super);

  function AtActionSheet(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }
    };

    _this.handleCancel = function () {
      if (typeof _this.props.onCancel === 'function') {
        return _this.props.onCancel();
      }

      _this.close();
    };

    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
      e.preventDefault();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtActionSheet.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
      !isOpened && this.handleClose();
    }
  };

  AtActionSheet.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        cancelText = _a.cancelText,
        className = _a.className;
    var _isOpened = this.state._isOpened;
    var rootClass = classnames('at-action-sheet', {
      'at-action-sheet--active': _isOpened
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      onClick: this.close,
      className: 'at-action-sheet__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-action-sheet__container'
    }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetHeader, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetBody, null, this.props.children), cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActionSheetFooter, {
      onClick: this.handleCancel
    }, cancelText)));
  };

  return AtActionSheet;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
};
AtActionSheet.propTypes = {
  title: propTypes.string,
  onClose: propTypes.func,
  onCancel: propTypes.func,
  isOpened: propTypes.bool.isRequired,
  cancelText: propTypes.string
};

var AtActionSheetItem =
/** @class */
function (_super) {
  __extends(AtActionSheetItem, _super);

  function AtActionSheetItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };

    return _this;
  }

  AtActionSheetItem.prototype.render = function () {
    var rootClass = classnames('at-action-sheet__item', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass,
      onClick: this.handleClick
    }, this.props.children);
  };

  return AtActionSheetItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActionSheetItem.propTypes = {
  onClick: propTypes.func
};
var ENV = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

function delay(delayTime) {
  if (delayTime === void 0) {
    delayTime = 25;
  }

  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delayTime);
  });
}

function delayQuerySelector(selectorStr, delayTime) {
  if (delayTime === void 0) {
    delayTime = 500;
  }

  return new Promise(function (resolve) {
    var selector = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}

function uuid(len, radix) {
  if (len === void 0) {
    len = 8;
  }

  if (radix === void 0) {
    radix = 16;
  }

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r // rfc4122 requires these characters

    /* eslint-disable-next-line */
    = void 0; // rfc4122 requires these characters

    /* eslint-disable-next-line */

    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4'; // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5

    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return value.join('');
}

function getEventDetail(event) {
  var detail;

  switch (ENV) {
    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;

    case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;

    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }

  return detail;
}

function isTest() {
  return "development" === 'test';
}

var scrollTop = 0;

function handleTouchScroll(flag) {
  if (ENV !== _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
    return;
  }

  if (flag) {
    scrollTop = document.documentElement.scrollTop; // 使body脱离文档流

    document.body.classList.add('at-frozen'); // 把脱离文档流的body拉上去！否则页面会回到顶部！

    document.body.style.top = -scrollTop + "px";
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}

function pxTransform(size) {
  if (!size) return '';
  var designWidth = 750;
  var deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  };
  return size / deviceRatio[designWidth] + "rpx";
}

function objectToString(style) {
  if (style && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
}
/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */


function mergeStyle(style1, style2) {
  if (style1 && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
    return Object.assign({}, style1, style2);
  }

  return objectToString(style1) + objectToString(style2);
}

var AtLoading =
/** @class */
function (_super) {
  __extends(AtLoading, _super);

  function AtLoading() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtLoading.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        size = _a.size;
    var loadingSize = typeof size === 'string' ? size : String(size);
    var sizeStyle = {
      width: size ? "" + pxTransform(parseInt(loadingSize)) : '',
      height: size ? "" + pxTransform(parseInt(loadingSize)) : ''
    };
    var colorStyle = {
      border: color ? "1px solid " + color : '',
      borderColor: color ? color + " transparent transparent transparent" : ''
    };
    var ringStyle = Object.assign({}, colorStyle, sizeStyle);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-loading',
      style: sizeStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-loading__ring',
      style: ringStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-loading__ring',
      style: ringStyle
    }));
  };

  return AtLoading;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtLoading.defaultProps = {
  size: 0,
  color: ''
};
AtLoading.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  color: propTypes.oneOfType([propTypes.string, propTypes.number])
};

var AtActivityIndicator =
/** @class */
function (_super) {
  __extends(AtActivityIndicator, _super);

  function AtActivityIndicator() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtActivityIndicator.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        size = _a.size,
        mode = _a.mode,
        content = _a.content,
        isOpened = _a.isOpened;
    var rootClass = classnames('at-activity-indicator', {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-activity-indicator__body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
      size: size,
      color: color
    })), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-activity-indicator__content'
    }, content));
  };

  return AtActivityIndicator;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtActivityIndicator.defaultProps = {
  size: 0,
  mode: 'normal',
  color: '',
  content: '',
  className: '',
  isOpened: true
};
AtActivityIndicator.propTypes = {
  size: propTypes.number,
  mode: propTypes.string,
  color: propTypes.string,
  content: propTypes.string,
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isOpened: propTypes.bool
};
var SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
};

var AtAvatar =
/** @class */
function (_super) {
  __extends(AtAvatar, _super);

  function AtAvatar(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP
    };
    return _this;
  }

  AtAvatar.prototype.render = function () {
    var _a;

    var _b = this.props,
        size = _b.size,
        circle = _b.circle,
        image = _b.image,
        text = _b.text,
        openData = _b.openData,
        customStyle = _b.customStyle;
    var rootClassName = ['at-avatar'];
    var iconSize = SIZE_CLASS[size || 'normal'];
    var classObject = (_a = {}, _a["at-avatar--" + iconSize] = iconSize, _a['at-avatar--circle'] = circle, _a);
    var letter = '';
    if (text) letter = text[0];
    var elem;

    if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__["OpenData"], {
        type: openData.type
      });
    } else if (image) {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
        className: 'at-avatar__img',
        src: image
      });
    } else {
      elem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-avatar__text'
      }, letter);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, elem);
  };

  return AtAvatar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  customStyle: {},
  className: ''
};
AtAvatar.propTypes = {
  size: propTypes.oneOf(['large', 'normal', 'small']),
  circle: propTypes.bool,
  text: propTypes.string,
  image: propTypes.string,
  openData: propTypes.object,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
};

var AtBadge =
/** @class */
function (_super) {
  __extends(AtBadge, _super);

  function AtBadge(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  AtBadge.prototype.formatValue = function (value, maxValue) {
    if (value === '' || value === null || typeof value === 'undefined') return '';
    var numValue = +value;

    if (Number.isNaN(numValue)) {
      return value;
    }

    return numValue > maxValue ? maxValue + "+" : numValue;
  };

  AtBadge.prototype.render = function () {
    var _a = this.props,
        dot = _a.dot,
        value = _a.value,
        _b = _a.maxValue,
        maxValue = _b === void 0 ? 99 : _b,
        customStyle = _a.customStyle;
    var rootClassName = ['at-badge'];
    var val = this.formatValue(value, maxValue);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, this.props.className),
      style: customStyle
    }, this.props.children, dot ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-badge__dot'
    }) : val !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-badge__num'
    }, val));
  };

  return AtBadge;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
};
AtBadge.propTypes = {
  dot: propTypes.bool,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  maxValue: propTypes.number,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
};
var SIZE_CLASS$1 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
};

var AtButton =
/** @class */
function (_super) {
  __extends(AtButton, _super);

  function AtButton(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY
    };
    return _this;
  }

  AtButton.prototype.onClick = function (event) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(event);
    }
  };

  AtButton.prototype.onGetUserInfo = function (event) {
    this.props.onGetUserInfo && this.props.onGetUserInfo(event);
  };

  AtButton.prototype.onContact = function (event) {
    this.props.onContact && this.props.onContact(event);
  };

  AtButton.prototype.onGetPhoneNumber = function (event) {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(event);
  };

  AtButton.prototype.onError = function (event) {
    this.props.onError && this.props.onError(event);
  };

  AtButton.prototype.onOpenSetting = function (event) {
    this.props.onOpenSetting && this.props.onOpenSetting(event);
  };

  AtButton.prototype.onSumit = function (event) {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true
      });
    }
  };

  AtButton.prototype.onReset = function (event) {
    if (this.state.isWEAPP || this.state.isWEB) {
      // TODO: 3.0 this.$scope
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.$scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true
      });
    }
  };

  AtButton.prototype.render = function () {
    var _a;

    var _b = this.props,
        _c = _b.size,
        size = _c === void 0 ? 'normal' : _c,
        _d = _b.type,
        type = _d === void 0 ? '' : _d,
        circle = _b.circle,
        full = _b.full,
        loading = _b.loading,
        disabled = _b.disabled,
        customStyle = _b.customStyle,
        formType = _b.formType,
        openType = _b.openType,
        lang = _b.lang,
        sessionFrom = _b.sessionFrom,
        sendMessageTitle = _b.sendMessageTitle,
        sendMessagePath = _b.sendMessagePath,
        sendMessageImg = _b.sendMessageImg,
        showMessageCard = _b.showMessageCard,
        appParameter = _b.appParameter;
    var _e = this.state,
        isWEAPP = _e.isWEAPP,
        isALIPAY = _e.isALIPAY,
        isWEB = _e.isWEB;
    var rootClassName = ['at-button'];
    var classObject = (_a = {}, _a["at-button--" + SIZE_CLASS$1[size]] = SIZE_CLASS$1[size], _a['at-button--disabled'] = disabled, _a["at-button--" + type] = TYPE_CLASS[type], _a['at-button--circle'] = circle, _a['at-button--full'] = full, _a);
    var loadingColor = type === 'primary' ? '#fff' : '';
    var loadingSize = size === 'small' ? '30' : 0;
    var loadingComponent = null;

    if (loading) {
      loadingComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-button__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtLoading, {
        color: loadingColor,
        size: loadingSize
      }));
      rootClassName.push('at-button--icon');
    }

    var webButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
      className: 'at-button__wxbutton',
      lang: lang,
      formType: formType
    });
    var button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
      className: 'at-button__wxbutton',
      formType: formType,
      openType: openType,
      lang: lang,
      sessionFrom: sessionFrom,
      sendMessageTitle: sendMessageTitle,
      sendMessagePath: sendMessagePath,
      sendMessageImg: sendMessageImg,
      showMessageCard: showMessageCard,
      appParameter: appParameter,
      onGetUserInfo: this.onGetUserInfo.bind(this),
      onGetPhoneNumber: this.onGetPhoneNumber.bind(this),
      onOpenSetting: this.onOpenSetting.bind(this),
      onError: this.onError.bind(this),
      onContact: this.onContact.bind(this)
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, isWEB && !disabled && webButton, isWEAPP && !disabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "b"], {
      onSubmit: this.onSumit.bind(this),
      onReset: this.onReset.bind(this)
    }, button), isALIPAY && !disabled && button, loadingComponent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-button__text'
    }, this.props.children));
  };

  return AtButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
};
AtButton.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  type: propTypes.oneOf(['primary', 'secondary', '']),
  circle: propTypes.bool,
  full: propTypes.bool,
  loading: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  formType: propTypes.oneOf(['submit', 'reset', '']),
  openType: propTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', 'getAuthorize', 'contactShare', '']),
  lang: propTypes.string,
  sessionFrom: propTypes.string,
  sendMessageTitle: propTypes.string,
  sendMessagePath: propTypes.string,
  sendMessageImg: propTypes.string,
  showMessageCard: propTypes.bool,
  appParameter: propTypes.string,
  onGetUserInfo: propTypes.func,
  onContact: propTypes.func,
  onGetPhoneNumber: propTypes.func,
  onError: propTypes.func,
  onOpenSetting: propTypes.func
};

var AtCard =
/** @class */
function (_super) {
  __extends(AtCard, _super);

  function AtCard() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (args) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(args);
      }
    };

    return _this;
  }

  AtCard.prototype.render = function () {
    var _a;

    var _b = this.props,
        title = _b.title,
        note = _b.note,
        extra = _b.extra,
        extraStyle = _b.extraStyle,
        thumb = _b.thumb,
        isFull = _b.isFull,
        icon = _b.icon,
        renderIcon = _b.renderIcon;
    var rootClass = classnames('at-card', {
      'at-card--full': isFull
    }, this.props.className);
    var iconClass = classnames((_a = {
      'at-icon': true
    }, _a["at-icon-" + (icon && icon.value)] = icon && icon.value, _a['at-card__header-icon'] = true, _a));
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      onClick: this.handleClick,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-card__header'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-card__header-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
      className: 'at-card__header-thumb-info',
      mode: 'scaleToFill',
      src: thumb
    })), renderIcon || '', !thumb && icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: iconClass,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-card__header-title'
    }, title), extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      style: _assign({}, extraStyle),
      className: 'at-card__header-extra'
    }, extra)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-card__content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-card__content-info'
    }, this.props.children), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-card__content-note'
    }, note)));
  };

  return AtCard;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCard.defaultProps = {
  note: '',
  isFull: false,
  thumb: '',
  title: '',
  extra: '',
  extraStyle: {}
};
AtCard.propTypes = {
  note: propTypes.string,
  isFull: propTypes.bool,
  thumb: propTypes.string,
  title: propTypes.string,
  extra: propTypes.string,
  icon: propTypes.object,
  onClick: propTypes.func,
  renderIcon: propTypes.oneOfType([propTypes.string, propTypes.element]),
  extraStyle: propTypes.object // 自定义extra样式

};

var AtCheckbox =
/** @class */
function (_super) {
  __extends(AtCheckbox, _super);

  function AtCheckbox() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCheckbox.prototype.handleClick = function (idx) {
    var _a = this.props,
        selectedList = _a.selectedList,
        options = _a.options;
    var option = options[idx];
    var disabled = option.disabled,
        value = option.value;
    if (disabled) return;
    var selectedSet = new Set(selectedList);

    if (!selectedSet.has(value)) {
      selectedSet.add(value);
    } else {
      selectedSet.delete(value);
    }

    this.props.onChange(__spread(selectedSet));
  };

  AtCheckbox.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        options = _a.options,
        selectedList = _a.selectedList;
    var rootCls = classnames('at-checkbox', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, options.map(function (option, idx) {
      var value = option.value,
          disabled = option.disabled,
          label = option.label,
          desc = option.desc;
      var optionCls = classnames('at-checkbox__option', {
        'at-checkbox__option--disabled': disabled,
        'at-checkbox__option--selected': selectedList.includes(value)
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: optionCls,
        key: value,
        onClick: _this.handleClick.bind(_this, idx)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-checkbox__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-checkbox__option-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-checkbox__icon-cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-icon at-icon-check'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-checkbox__title'
      }, label)), desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-checkbox__desc'
      }, desc)));
    }));
  };

  return AtCheckbox;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCheckbox.defaultProps = {
  customStyle: '',
  className: '',
  options: [],
  selectedList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtCheckbox.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  options: propTypes.array,
  selectedList: propTypes.array,
  onChange: propTypes.func
};

var AtList =
/** @class */
function (_super) {
  __extends(AtList, _super);

  function AtList() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtList.prototype.render = function () {
    var rootClass = classnames('at-list', {
      'at-list--no-border': !this.props.hasBorder
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, this.props.children);
  };

  return AtList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtList.defaultProps = {
  hasBorder: true
};
AtList.propTypes = {
  hasBorder: propTypes.bool
};

var AtListItem =
/** @class */
function (_super) {
  __extends(AtListItem, _super);

  function AtListItem() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (event) {
      if (typeof _this.props.onClick === 'function' && !_this.props.disabled) {
        _this.props.onClick(event);
      }
    };

    _this.handleSwitchChange = function (event) {
      if (typeof _this.props.onSwitchChange === 'function' && !_this.props.disabled) {
        _this.props.onSwitchChange(event);
      }
    };

    return _this;
  }

  AtListItem.prototype.handleSwitchClick = function (e) {
    e.stopPropagation();
  };

  AtListItem.prototype.render = function () {
    var _a;

    var _b = this.props,
        note = _b.note,
        arrow = _b.arrow,
        thumb = _b.thumb,
        iconInfo = _b.iconInfo,
        disabled = _b.disabled,
        isSwitch = _b.isSwitch,
        hasBorder = _b.hasBorder,
        extraThumb = _b.extraThumb,
        switchColor = _b.switchColor,
        switchIsCheck = _b.switchIsCheck;
    var _c = this.props,
        extraText = _c.extraText,
        title = _c.title;
    extraText = String(extraText);
    title = String(title);
    var rootClass = classnames('at-list__item', {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    }, this.props.className);
    var iconClass = classnames(iconInfo && iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(iconInfo && iconInfo.prefixClass || 'at-icon') + "-" + (iconInfo && iconInfo.value)] = iconInfo && iconInfo.value, _a), iconInfo && iconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-list__item-container'
    }, thumb && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-list__item-thumb item-thumb'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
      className: 'item-thumb__info',
      mode: 'scaleToFill',
      src: thumb
    })), iconInfo && iconInfo.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-list__item-icon item-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: iconClass,
      style: mergeStyle({
        color: iconInfo.color || '',
        fontSize: (iconInfo.size || 24) + "px"
      }, iconInfo.customStyle || '')
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-list__item-content item-content'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-content__info-title'
    }, title), note && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-content__info-note'
    }, note))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-list__item-extra item-extra'
    }, extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-extra__info'
    }, extraText), extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-extra__image'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
      className: 'item-extra__image-info',
      mode: 'aspectFit',
      src: extraThumb
    })), isSwitch && !extraThumb && !extraText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-extra__switch',
      onClick: this.handleSwitchClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "n"], {
      color: switchColor,
      disabled: disabled,
      checked: switchIsCheck,
      onChange: this.handleSwitchChange
    })), arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'item-extra__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: "at-icon item-extra__icon-arrow at-icon-chevron-" + arrow
    })) : null)));
  };

  return AtListItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: {
    value: ''
  }
};
AtListItem.propTypes = {
  note: propTypes.string,
  disabled: propTypes.bool,
  title: propTypes.string,
  thumb: propTypes.string,
  onClick: propTypes.func,
  isSwitch: propTypes.bool,
  hasBorder: propTypes.bool,
  switchColor: propTypes.string,
  switchIsCheck: propTypes.bool,
  extraText: propTypes.string,
  extraThumb: propTypes.string,
  onSwitchChange: propTypes.func,
  arrow: propTypes.oneOf(['up', 'down', 'right']),
  iconInfo: propTypes.shape({
    size: propTypes.number,
    value: propTypes.string,
    color: propTypes.string,
    prefixClass: propTypes.string,
    customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.array, propTypes.string])
  })
};

var AtDrawer =
/** @class */
function (_super) {
  __extends(AtDrawer, _super);

  function AtDrawer(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      animShow: false,
      _show: props.show
    };
    return _this;
  }

  AtDrawer.prototype.componentDidMount = function () {
    var _show = this.state._show;
    if (_show) this.animShow();
  };

  AtDrawer.prototype.onItemClick = function (index) {
    this.props.onItemClick && this.props.onItemClick(index);
    this.animHide();
  };

  AtDrawer.prototype.onHide = function () {
    var _this = this;

    this.setState({
      _show: false
    }, function () {
      _this.props.onClose && _this.props.onClose();
    });
  };

  AtDrawer.prototype.animHide = function () {
    var _this = this;

    this.setState({
      animShow: false
    });
    setTimeout(function () {
      _this.onHide();
    }, 300);
  };

  AtDrawer.prototype.animShow = function () {
    var _this = this;

    this.setState({
      _show: true
    });
    setTimeout(function () {
      _this.setState({
        animShow: true
      });
    }, 200);
  };

  AtDrawer.prototype.onMaskClick = function () {
    this.animHide();
  };

  AtDrawer.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var show = nextProps.show;

    if (show !== this.state._show) {
      show ? this.animShow() : this.animHide();
    }
  };

  AtDrawer.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        mask = _a.mask,
        width = _a.width,
        right = _a.right,
        items = _a.items;
    var _b = this.state,
        animShow = _b.animShow,
        _show = _b._show;
    var rootClassName = ['at-drawer'];
    var maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0
    };
    var listStyle = {
      width: width,
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
    };
    var classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right
    };
    return _show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, this.props.className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-drawer__mask',
      style: maskStyle,
      onClick: this.onMaskClick.bind(this)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-drawer__content',
      style: listStyle
    }, !!items && items.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, items.map(function (name, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
        key: name + "-" + index,
        "data-index": index,
        onClick: _this.onItemClick.bind(_this, index),
        title: name,
        arrow: 'right'
      });
    })) : this.props.children)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], null);
  };

  return AtDrawer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: []
};
AtDrawer.propTypes = {
  show: propTypes.bool,
  mask: propTypes.bool,
  width: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
  onItemClick: propTypes.func,
  onClose: propTypes.func
};

var AtFloatLayout =
/** @class */
function (_super) {
  __extends(AtFloatLayout, _super);

  function AtFloatLayout(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClose = function () {
      if (typeof _this.props.onClose === 'function') {
        // TODO: Fix typings
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        _this.props.onClose();
      }
    };

    _this.close = function () {
      _this.setState({
        _isOpened: false
      }, _this.handleClose);
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtFloatLayout.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };

  AtFloatLayout.prototype.render = function () {
    var _isOpened = this.state._isOpened;
    var _a = this.props,
        title = _a.title,
        scrollY = _a.scrollY,
        scrollX = _a.scrollX,
        scrollTop = _a.scrollTop,
        scrollLeft = _a.scrollLeft,
        upperThreshold = _a.upperThreshold,
        lowerThreshold = _a.lowerThreshold,
        scrollWithAnimation = _a.scrollWithAnimation;
    var rootClass = classnames('at-float-layout', {
      'at-float-layout--active': _isOpened
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass,
      onTouchMove: this.handleTouchMove
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      onClick: this.close,
      className: 'at-float-layout__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-float-layout__container layout'
    }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'layout-header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'layout-header__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'layout-header__btn-close',
      onClick: this.close
    })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'layout-body'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "j"], {
      scrollY: scrollY,
      scrollX: scrollX,
      scrollTop: scrollTop,
      scrollLeft: scrollLeft,
      upperThreshold: upperThreshold,
      lowerThreshold: lowerThreshold,
      scrollWithAnimation: scrollWithAnimation,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScroll: this.props.onScroll,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToLower: this.props.onScrollToLower,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore // TODO: Fix typings
      onScrollToUpper: this.props.onScrollToUpper,
      className: 'layout-body__content'
    }, this.props.children))));
  };

  return AtFloatLayout;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,
  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
};
AtFloatLayout.propTypes = {
  title: propTypes.string,
  isOpened: propTypes.bool,
  scrollY: propTypes.bool,
  scrollX: propTypes.bool,
  scrollTop: propTypes.number,
  scrollLeft: propTypes.number,
  upperThreshold: propTypes.number,
  lowerThreshold: propTypes.number,
  scrollWithAnimation: propTypes.bool,
  onClose: propTypes.func,
  onScroll: propTypes.func,
  onScrollToLower: propTypes.func,
  onScrollToUpper: propTypes.func
};

var AtForm =
/** @class */
function (_super) {
  __extends(AtForm, _super);

  function AtForm() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtForm.prototype.onSubmit = function () {
    this.props.onSubmit && this.props.onSubmit(arguments);
  };

  AtForm.prototype.onReset = function () {
    this.props.onReset && this.props.onReset(arguments);
  };

  AtForm.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        reportSubmit = _a.reportSubmit;
    var rootCls = classnames('at-form', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Form */ "b"], {
      className: rootCls,
      style: customStyle,
      onSubmit: this.onSubmit.bind(this),
      reportSubmit: reportSubmit,
      onReset: this.onReset.bind(this)
    }, this.props.children);
  };

  return AtForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false
};
AtForm.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  reportSubmit: propTypes.bool,
  onSubmit: propTypes.func,
  onReset: propTypes.func
};
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  end = end > length ? length : end;

  if (end < 0) {
    end += length;
  }

  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);

  while (++index < length) {
    result[index] = array[index + start];
  }

  return result;
}

var _baseSlice = baseSlice;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;
/** Detect free variable `global` from Node.js. */

var freeGlobal = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = _freeGlobal || freeSelf || Function('return this')();
var _root = root;
/** Built-in value references. */

var Symbol$1 = _root.Symbol;
var _Symbol = Symbol$1;
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

var _getRawTag = getRawTag;
/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString$1 = objectProto$1.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;
/** `Object#toString` result references. */

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
}

var _baseGetTag = baseGetTag;
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject(value) {
  var type = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;
/** `Object#toString` result references. */

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = _baseGetTag(value);

  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex;
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }

  var type = Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(index);

  if (type == 'number' ? isArrayLike_1(object) && _isIndex(index, object.length) : type == 'string' && index in object) {
    return eq_1(object[index], value);
  }

  return false;
}

var _isIterateeCall = isIterateeCall;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return value != null && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'object';
}

var isObjectLike_1 = isObjectLike;
/** `Object#toString` result references. */

var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
}

var isSymbol_1 = isSymbol;
/** Used as references for various `Number` constants. */

var NAN = 0 / 0;
/** Used to match leading and trailing whitespace. */

var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */

var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }

  if (isSymbol_1(value)) {
    return NAN;
  }

  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? other + '' : other;
  }

  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }

  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

var toNumber_1 = toNumber;
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber_1(value);

  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }

  return value === value ? value : 0;
}

var toFinite_1 = toFinite;
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

var toInteger_1 = toInteger;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeCeil = Math.ceil,
    nativeMax = Math.max;
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk(array, size, guard) {
  if (guard ? _isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(toInteger_1(size), 0);
  }

  var length = array == null ? 0 : array.length;

  if (!length || size < 1) {
    return [];
  }

  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, index += size);
  }

  return result;
}

var chunk_1 = chunk;

var AtGrid =
/** @class */
function (_super) {
  __extends(AtGrid, _super);

  function AtGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (item, index, row, event) {
      var _a = _this.props,
          onClick = _a.onClick,
          _b = _a.columnNum,
          columnNum = _b === void 0 ? 3 : _b;

      if (typeof onClick === 'function') {
        var clickIndex = row * columnNum + index;
        onClick(item, clickIndex, event);
      }
    };

    return _this;
  }

  AtGrid.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        data = _a.data,
        mode = _a.mode,
        _b = _a.columnNum,
        columnNum = _b === void 0 ? 3 : _b,
        hasBorder = _a.hasBorder;

    if (Array.isArray(data) && data.length === 0) {
      return null;
    }

    var gridGroup = chunk_1(data, columnNum);
    var bodyClass = classnames(['at-grid__flex-item', 'at-grid-item', "at-grid-item--" + mode], {
      'at-grid-item--no-border': !hasBorder
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-grid', this.props.className)
    }, gridGroup.map(function (item, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-grid__flex',
        key: "at-grid-group-" + i
      }, item.map(function (childItem, index) {
        var _a;

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          key: "at-grid-item-" + index,
          className: classnames(bodyClass, {
            'at-grid-item--last': index === columnNum - 1
          }),
          onClick: _this.handleClick.bind(_this, childItem, index, i),
          style: {
            flex: "0 0 " + 100 / columnNum + "%"
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-grid-item__content'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-grid-item__content-inner'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'content-inner__icon'
        }, childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
          className: 'content-inner__img',
          src: childItem.image,
          mode: 'scaleToFill'
        }), childItem.iconInfo && !childItem.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
          className: classnames(childItem.iconInfo.prefixClass || 'at-icon', (_a = {}, _a[(childItem.iconInfo.prefixClass || 'at-icon') + "-" + childItem.iconInfo.value] = childItem.iconInfo.value, _a), childItem.iconInfo.className),
          style: mergeStyle({
            color: childItem.iconInfo.color,
            fontSize: (childItem.iconInfo.size || 24) + "px"
          }, // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          childItem.iconInfo.customStyle)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
          className: 'content-inner__text'
        }, childItem.value))));
      }));
    }));
  };

  return AtGrid;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtGrid.defaultProps = {
  data: [],
  columnNum: 3,
  mode: 'square',
  hasBorder: true
};
AtGrid.propTypes = {
  mode: propTypes.string,
  onClick: propTypes.func,
  hasBorder: propTypes.bool,
  columnNum: propTypes.number,
  data: propTypes.arrayOf(propTypes.shape({
    image: propTypes.string,
    value: propTypes.string,
    iconInfo: propTypes.shape({
      size: propTypes.number,
      value: propTypes.string,
      color: propTypes.string,
      prefixClass: propTypes.string,
      customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
      className: propTypes.oneOfType([propTypes.array, propTypes.string])
    })
  }))
};

var AtIcon =
/** @class */
function (_super) {
  __extends(AtIcon, _super);

  function AtIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtIcon.prototype.handleClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };

  AtIcon.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        prefixClass = _a.prefixClass,
        value = _a.value,
        size = _a.size,
        color = _a.color;
    var rootStyle = {
      fontSize: "" + pxTransform(parseInt(String(size)) * 2),
      color: color
    };
    var iconName = value ? prefixClass + "-" + value : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: classnames(prefixClass, iconName, className),
      style: mergeStyle(rootStyle, customStyle),
      onClick: this.handleClick.bind(this)
    });
  };

  return AtIcon;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24
};
AtIcon.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  prefixClass: propTypes.string,
  value: propTypes.string,
  color: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onClick: propTypes.func
};

function getInputProps(props) {
  var actualProps = {
    type: props.type,
    maxLength: props.maxlength,
    disabled: props.disabled,
    password: false
  };

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number';
      actualProps.maxLength = 11;
      break;

    case 'password':
      actualProps.type = 'text';
      actualProps.password = true;
      break;
  }

  if (!props.disabled && !props.editable) {
    actualProps.disabled = true;
  }

  return actualProps;
}

var AtInput =
/** @class */
function (_super) {
  __extends(AtInput, _super);

  function AtInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this; // TODO: 有待考证是否为合理方式处理 #840


    _this.inputClearing = false;

    _this.handleInput = function (event) {
      return _this.props.onChange(event.detail.value, event);
    };

    _this.handleFocus = function (event) {
      if (typeof _this.props.onFocus === 'function') {
        _this.props.onFocus(event.detail.value, event);
      }
    };

    _this.handleBlur = function (event) {
      if (typeof _this.props.onBlur === 'function') {
        _this.props.onBlur(event.detail.value, event);
      }

      if (event.type === 'blur' && !_this.inputClearing) {
        // fix # 583 AtInput 不触发 onChange 的问题
        _this.props.onChange(event.detail.value, event);
      } // 还原状态


      _this.inputClearing = false;
    };

    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event.detail.value, event);
      }
    };

    _this.handleClick = function (event) {
      if (!_this.props.editable && typeof _this.props.onClick === 'function') {
        _this.props.onClick(event);
      }
    };

    _this.handleClearValue = function (event) {
      _this.inputClearing = true;

      _this.props.onChange('', event);
    };

    _this.handleKeyboardHeightChange = function (event) {
      if (typeof _this.props.onKeyboardHeightChange === 'function') {
        _this.props.onKeyboardHeightChange(event);
      }
    };

    _this.handleErrorClick = function (event) {
      if (typeof _this.props.onErrorClick === 'function') {
        _this.props.onErrorClick(event);
      }
    };

    return _this;
  }

  AtInput.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        name = _a.name,
        cursorSpacing = _a.cursorSpacing,
        confirmType = _a.confirmType,
        cursor = _a.cursor,
        selectionStart = _a.selectionStart,
        selectionEnd = _a.selectionEnd,
        adjustPosition = _a.adjustPosition,
        border = _a.border,
        title = _a.title,
        error = _a.error,
        clear = _a.clear,
        placeholder = _a.placeholder,
        placeholderStyle = _a.placeholderStyle,
        placeholderClass = _a.placeholderClass,
        autoFocus = _a.autoFocus,
        focus = _a.focus,
        value = _a.value,
        required = _a.required;

    var _b = getInputProps(this.props),
        type = _b.type,
        maxlength = _b.maxlength,
        disabled = _b.disabled,
        password = _b.password;

    var rootCls = classnames('at-input', {
      'at-input--without-border': !border
    }, className);
    var containerCls = classnames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    });
    var overlayCls = classnames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    });
    var placeholderCls = classnames('placeholder', placeholderClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: overlayCls,
      onClick: this.handleClick
    }), title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Label */ "e"], {
      className: "at-input__title " + (required && 'at-input__title--required'),
      for: name
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "d"], {
      className: 'at-input__input',
      id: name,
      name: name,
      type: type,
      password: password,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      placeholder: placeholder,
      cursorSpacing: cursorSpacing,
      maxlength: maxlength,
      autoFocus: autoFocus,
      focus: focus,
      value: value,
      confirmType: confirmType,
      cursor: cursor,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      adjustPosition: adjustPosition,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      onKeyboardHeightChange: this.handleKeyboardHeightChange
    }), clear && value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-input__icon',
      onTouchEnd: this.handleClearValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-close-circle at-input__icon-close'
    })), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-input__icon',
      onTouchStart: this.handleErrorClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-alert-circle at-input__icon-alert'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-input__children'
    }, this.props.children)));
  };

  return AtInput;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInput.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array]),
  customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.string,
  placeholder: propTypes.string,
  placeholderStyle: propTypes.string,
  placeholderClass: propTypes.string,
  title: propTypes.string,
  confirmType: propTypes.string,
  cursor: propTypes.oneOfType([propTypes.string, propTypes.number]),
  selectionStart: propTypes.oneOfType([propTypes.string, propTypes.number]),
  selectionEnd: propTypes.oneOfType([propTypes.string, propTypes.number]),
  adjustPosition: propTypes.bool,
  cursorSpacing: propTypes.oneOfType([propTypes.string, propTypes.number]),
  maxlength: propTypes.oneOfType([propTypes.string, propTypes.number]),
  type: propTypes.string,
  disabled: propTypes.bool,
  border: propTypes.bool,
  editable: propTypes.bool,
  error: propTypes.bool,
  clear: propTypes.bool,
  autoFocus: propTypes.bool,
  focus: propTypes.bool,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func,
  onErrorClick: propTypes.func,
  onClick: propTypes.func,
  required: propTypes.bool
};
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

var _arrayMap = arrayMap;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray = Array.isArray;
var isArray_1 = isArray;
/** Used as references for various `Number` constants. */

var INFINITY$1 = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }

  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _baseToString = baseToString;
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString; // TODO: Check all types
// 实现两数相加并保留小数点后最短尾数

function addNum(num1, num2) {
  var sq1, sq2;

  try {
    sq1 = toString_1(num1).split('.')[1].length;
  } catch (e) {
    sq1 = 0;
  }

  try {
    sq2 = toString_1(num2).split('.')[1].length;
  } catch (e) {
    sq2 = 0;
  }

  var m = Math.pow(10, Math.max(sq1, sq2));
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
} // 格式化数字，处理01变成1,并且不处理1. 这种情况


function parseValue(num) {
  if (num === '') return '0';
  var numStr = toString_1(num);

  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return toString_1(parseFloat(num));
  }

  return toString_1(num);
}

var AtInputNumber =
/** @class */
function (_super) {
  __extends(AtInputNumber, _super);

  function AtInputNumber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleValue = function (value) {
      var _a = _this.props,
          _b = _a.max,
          max = _b === void 0 ? 100 : _b,
          _c = _a.min,
          min = _c === void 0 ? 0 : _c;
      var resultValue = value === '' ? min : value; // 此处不能使用 Math.max，会是字符串变数字，并丢失 .

      if (resultValue > max) {
        resultValue = max;

        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }

      if (resultValue < min) {
        resultValue = min;

        _this.handleError({
          type: 'LOW',
          errorValue: resultValue
        });
      }

      if (resultValue && !Number(resultValue)) {
        resultValue = parseFloat(String(resultValue)) || min;

        _this.handleError({
          type: 'OVER',
          errorValue: resultValue
        });
      }

      resultValue = parseValue(String(resultValue));
      return resultValue;
    };

    _this.handleInput = function (e) {
      var value = e.target.value;
      var disabled = _this.props.disabled;
      if (disabled) return '';

      var newValue = _this.handleValue(value);

      _this.props.onChange(Number(newValue), e);

      return newValue;
    };

    _this.handleBlur = function (event) {
      return _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleError = function (errorValue) {
      if (!_this.props.onErrorInput) {
        return;
      }

      _this.props.onErrorInput(errorValue);
    };

    return _this;
  }

  AtInputNumber.prototype.handleClick = function (clickType, e) {
    var _a = this.props,
        disabled = _a.disabled,
        value = _a.value,
        _b = _a.min,
        min = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 100 : _c,
        _d = _a.step,
        step = _d === void 0 ? 1 : _d;
    var lowThanMin = clickType === 'minus' && value <= min;
    var overThanMax = clickType === 'plus' && value >= max;

    if (lowThanMin || overThanMax || disabled) {
      var deltaValue_1 = clickType === 'minus' ? -step : step;
      var errorValue = addNum(Number(value), deltaValue_1);

      if (disabled) {
        this.handleError({
          type: 'DISABLED',
          errorValue: errorValue
        });
      } else {
        this.handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue: errorValue
        });
      }

      return;
    }

    var deltaValue = clickType === 'minus' ? -step : step;
    var newValue = addNum(Number(value), deltaValue);
    newValue = Number(this.handleValue(newValue));
    this.props.onChange(newValue, e);
  };

  AtInputNumber.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        width = _a.width,
        disabled = _a.disabled,
        value = _a.value,
        type = _a.type,
        _b = _a.min,
        min = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 100 : _c,
        size = _a.size,
        disabledInput = _a.disabledInput;
    var inputStyle = {
      width: width ? "" + pxTransform(width) : ''
    };
    var inputValue = Number(this.handleValue(value));
    var rootCls = classnames('at-input-number', {
      'at-input-number--lg': size === 'large'
    }, className);
    var minusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue <= min || disabled
    });
    var plusBtnCls = classnames('at-input-number__btn', {
      'at-input-number--disabled': inputValue >= max || disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: minusBtnCls,
      onClick: this.handleClick.bind(this, 'minus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-subtract at-input-number__btn-subtract'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "d"], {
      className: 'at-input-number__input',
      style: inputStyle,
      type: type,
      value: String(inputValue),
      disabled: disabledInput || disabled,
      onInput: this.handleInput,
      onBlur: this.handleBlur
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: plusBtnCls,
      onClick: this.handleClick.bind(this, 'plus')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-add at-input-number__btn-add'
    })));
  };

  return AtInputNumber;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtInputNumber.defaultProps = {
  customStyle: '',
  className: '',
  disabled: false,
  disabledInput: false,
  value: 1,
  type: 'number',
  width: 0,
  min: 0,
  max: 100,
  step: 1,
  size: 'normal',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtInputNumber.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.oneOf(['number', 'digit']),
  disabled: propTypes.bool,
  width: propTypes.number,
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  size: propTypes.oneOf(['normal', 'large']),
  disabledInput: propTypes.bool,
  onChange: propTypes.func,
  onBlur: propTypes.func,
  onErrorInput: propTypes.func
};

var AtModalAction =
/** @class */
function (_super) {
  __extends(AtModalAction, _super);

  function AtModalAction() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalAction.prototype.render = function () {
    var rootClass = classnames('at-modal__footer', {
      'at-modal__footer--simple': this.props.isSimple
    }, this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-modal__action'
    }, this.props.children));
  };

  return AtModalAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtModalAction.defaultProps = {
  isSimple: false
};
AtModalAction.propTypes = {
  isSimple: propTypes.bool
};

var AtModalContent =
/** @class */
function (_super) {
  __extends(AtModalContent, _super);

  function AtModalContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalContent.prototype.render = function () {
    var rootClass = classnames('at-modal__content', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "j"], {
      scrollY: true,
      className: rootClass
    }, this.props.children);
  };

  return AtModalContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtModalHeader =
/** @class */
function (_super) {
  __extends(AtModalHeader, _super);

  function AtModalHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtModalHeader.prototype.render = function () {
    var rootClass = classnames('at-modal__header', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, this.props.children);
  };

  return AtModalHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtModal =
/** @class */
function (_super) {
  __extends(AtModal, _super);

  function AtModal(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClickOverlay = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    };

    _this.handleClose = function (event) {
      if (typeof _this.props.onClose === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        _this.props.onClose(event);
      }
    };

    _this.handleCancel = function (event) {
      if (typeof _this.props.onCancel === 'function') {
        _this.props.onCancel(event);
      }
    };

    _this.handleConfirm = function (event) {
      if (typeof _this.props.onConfirm === 'function') {
        _this.props.onConfirm(event);
      }
    };

    _this.handleTouchMove = function (e) {
      e.stopPropagation();
    };

    var isOpened = props.isOpened;
    _this.state = {
      _isOpened: isOpened,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  AtModal.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened);
    }

    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  };

  AtModal.prototype.render = function () {
    var _a = this.state,
        _isOpened = _a._isOpened,
        isWEB = _a.isWEB;
    var _b = this.props,
        title = _b.title,
        content = _b.content,
        cancelText = _b.cancelText,
        confirmText = _b.confirmText;
    var rootClass = classnames('at-modal', {
      'at-modal--active': _isOpened
    }, this.props.className);

    if (title || content) {
      var isRenderAction = cancelText || confirmText;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: rootClass
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        onClick: this.handleClickOverlay,
        className: 'at-modal__overlay'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-modal__container'
      }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], null, title)), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'content-simple'
      }, isWEB ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"] // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      , {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        dangerouslySetInnerHTML: {
          __html: content.replace(/\n/g, '<br/>')
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], null, content))), isRenderAction && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtModalAction, {
        isSimple: true
      }, cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        onClick: this.handleCancel
      }, cancelText), confirmText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Button */ "a"], {
        onClick: this.handleConfirm
      }, confirmText))));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      onTouchMove: this.handleTouchMove,
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-modal__overlay',
      onClick: this.handleClickOverlay
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-modal__container'
    }, this.props.children));
  };

  return AtModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtModal.defaultProps = {
  isOpened: false,
  closeOnClickOverlay: true
};
AtModal.propTypes = {
  title: propTypes.string,
  isOpened: propTypes.bool,
  onCancel: propTypes.func,
  onConfirm: propTypes.func,
  onClose: propTypes.func,
  content: propTypes.string,
  closeOnClickOverlay: propTypes.bool,
  cancelText: propTypes.string,
  confirmText: propTypes.string
};

var AtNavBar =
/** @class */
function (_super) {
  __extends(AtNavBar, _super);

  function AtNavBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtNavBar.prototype.handleClickLeftView = function (event) {
    this.props.onClickLeftIcon && this.props.onClickLeftIcon(event);
  };

  AtNavBar.prototype.handleClickSt = function (event) {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event);
  };

  AtNavBar.prototype.handleClickNd = function (event) {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event);
  };

  AtNavBar.prototype.render = function () {
    var _a, _b, _c;

    var _d = this.props,
        customStyle = _d.customStyle,
        className = _d.className,
        color = _d.color,
        fixed = _d.fixed,
        border = _d.border,
        leftIconType = _d.leftIconType,
        leftText = _d.leftText,
        title = _d.title,
        rightFirstIconType = _d.rightFirstIconType,
        rightSecondIconType = _d.rightSecondIconType;
    var linkStyle = {
      color: color
    };
    var defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24
    };
    var leftIconInfo = leftIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), leftIconType) : _assign(_assign({}, defaultIconInfo), {
      value: leftIconType
    });
    var leftIconClass = classnames(leftIconInfo.prefixClass, (_a = {}, _a[leftIconInfo.prefixClass + "-" + leftIconInfo.value] = leftIconInfo.value, _a), leftIconInfo.className);
    var rightFirstIconInfo = rightFirstIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightFirstIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightFirstIconType
    });
    var rightFirstIconClass = classnames(rightFirstIconInfo.prefixClass, (_b = {}, _b[rightFirstIconInfo.prefixClass + "-" + rightFirstIconInfo.value] = rightFirstIconInfo.value, _b), rightFirstIconInfo.className);
    var rightSecondIconInfo = rightSecondIconType instanceof Object ? _assign(_assign({}, defaultIconInfo), rightSecondIconType) : _assign(_assign({}, defaultIconInfo), {
      value: rightSecondIconType
    });
    var rightSecondIconClass = classnames(rightSecondIconInfo.prefixClass, (_c = {}, _c[rightSecondIconInfo.prefixClass + "-" + rightSecondIconInfo.value] = rightSecondIconInfo.value, _c), rightSecondIconInfo.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-nav-bar': true,
        'at-nav-bar--fixed': fixed,
        'at-nav-bar--no-border': !border
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-nav-bar__left-view',
      onClick: this.handleClickLeftView.bind(this),
      style: linkStyle
    }, leftIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: leftIconClass,
      style: mergeStyle({
        color: leftIconInfo.color,
        fontSize: "" + pxTransform(parseInt(leftIconInfo.size.toString()) * 2)
      }, leftIconInfo.customStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-nav-bar__text'
    }, leftText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-nav-bar__title'
    }, title || this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-nav-bar__right-view'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightSecondIconType
      }),
      style: linkStyle,
      onClick: this.handleClickNd.bind(this)
    }, rightSecondIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: rightSecondIconClass,
      style: mergeStyle({
        color: rightSecondIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightSecondIconInfo.size.toString()) * 2)
      }, rightSecondIconInfo.customStyle)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-nav-bar__container': true,
        'at-nav-bar__container--hide': !rightFirstIconType
      }),
      style: linkStyle,
      onClick: this.handleClickSt.bind(this)
    }, rightFirstIconType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: rightFirstIconClass,
      style: mergeStyle({
        color: rightFirstIconInfo.color,
        fontSize: "" + pxTransform(parseInt(rightFirstIconInfo.size.toString()) * 2)
      }, rightFirstIconInfo.customStyle)
    }))));
  };

  return AtNavBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: ''
};
AtNavBar.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  fixed: propTypes.bool,
  border: propTypes.bool,
  color: propTypes.string,
  leftIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  leftText: propTypes.string,
  title: propTypes.string,
  rightFirstIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  rightSecondIconType: propTypes.oneOfType([propTypes.string, propTypes.object]),
  onClickLeftIcon: propTypes.func,
  onClickRgIconSt: propTypes.func,
  onClickRgIconNd: propTypes.func
};

var AtNoticebar =
/** @class */
function (_super) {
  __extends(AtNoticebar, _super);

  function AtNoticebar(props) {
    var _this = _super.call(this, props) || this;

    var animElemId = "J_" + Math.ceil(Math.random() * 10e5).toString(36);
    _this.state = {
      show: true,
      animElemId: animElemId,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP,
      isALIPAY: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    };
    return _this;
  }

  AtNoticebar.prototype.onClose = function (event) {
    this.setState({
      show: false
    });
    this.props.onClose && this.props.onClose(event);
  };

  AtNoticebar.prototype.onGotoMore = function (event) {
    this.props.onGotoMore && this.props.onGotoMore(event);
  };

  AtNoticebar.prototype.UNSAFE_componentWillReceiveProps = function () {
    if (!this.timeout) {
      this.interval && clearInterval(this.interval);
      this.initAnimation();
    }
  };

  AtNoticebar.prototype.componentDidMount = function () {
    if (!this.props.marquee) return;
    this.initAnimation();
  };

  AtNoticebar.prototype.initAnimation = function () {
    var _this = this;

    var _a = this.state,
        isWEAPP = _a.isWEAPP,
        isALIPAY = _a.isALIPAY;
    this.timeout = setTimeout(function () {
      _this.timeout = null;

      if (_this.state.isWEB) {
        var _a = _this.props.speed,
            speed = _a === void 0 ? 100 : _a;
        var elem = document.querySelector("." + _this.state.animElemId);
        if (!elem) return;
        var width = elem.getBoundingClientRect().width;
        var dura = width / +speed;

        _this.setState({
          dura: dura
        });
      } else if (isWEAPP || isALIPAY) {
        var query = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createSelectorQuery();
        query.select("." + _this.state.animElemId).boundingClientRect().exec(function (res) {
          var queryRes = res[0];
          if (!queryRes) return;
          var width = queryRes.width;
          var _a = _this.props.speed,
              speed = _a === void 0 ? 100 : _a;
          var dura = width / +speed;
          var animation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: dura * 1000,
            timingFunction: 'linear'
          });
          var resetAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });
          var resetOpacityAnimation = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.createAnimation({
            duration: 0,
            timingFunction: 'linear'
          });

          var animBody = function animBody() {
            resetOpacityAnimation.opacity(0).step();

            _this.setState({
              animationData: resetOpacityAnimation.export()
            });

            setTimeout(function () {
              resetAnimation.translateX(0).step();

              _this.setState({
                animationData: resetAnimation.export()
              });
            }, 300);
            setTimeout(function () {
              resetOpacityAnimation.opacity(1).step();

              _this.setState({
                animationData: resetOpacityAnimation.export()
              });
            }, 600);
            setTimeout(function () {
              animation.translateX(-width).step();

              _this.setState({
                animationData: animation.export()
              });
            }, 900);
          };

          animBody();
          _this.interval = setInterval(animBody, dura * 1000 + 1000);
        });
      }
    }, 1000);
  };

  AtNoticebar.prototype.render = function () {
    var _a = this.props,
        single = _a.single,
        icon = _a.icon,
        marquee = _a.marquee,
        customStyle = _a.customStyle,
        className = _a.className,
        _b = _a.moreText,
        moreText = _b === void 0 ? '查看详情' : _b;
    var _c = this.props,
        showMore = _c.showMore,
        close = _c.close;
    var _d = this.state,
        dura = _d.dura,
        show = _d.show,
        animElemId = _d.animElemId,
        animationData = _d.animationData,
        isWEAPP = _d.isWEAPP,
        isALIPAY = _d.isALIPAY;
    var rootClassName = ['at-noticebar'];
    if (!single) showMore = false;
    var style = {};
    var innerClassName = ['at-noticebar__content-inner'];

    if (marquee) {
      close = false;
      style['animation-duration'] = dura + "s";
      innerClassName.push(animElemId);
    }

    var classObject = {
      'at-noticebar--marquee': marquee,
      'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
      'at-noticebar--single': !marquee && single
    };
    var iconClass = ['at-icon'];
    if (icon) iconClass.push("at-icon-" + icon);
    return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, className),
      style: customStyle
    }, close && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__close',
      onClick: this.onClose.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-close'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__content'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__content-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: classnames(iconClass, iconClass)
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__content-text'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      id: animElemId,
      animation: animationData,
      className: classnames(innerClassName),
      style: style
    }, this.props.children))), showMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__more',
      onClick: this.onGotoMore.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'text'
    }, moreText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-noticebar__more-icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-chevron-right'
    }))));
  };

  return AtNoticebar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  marquee: false,
  speed: 100,
  moreText: '查看详情',
  showMore: false,
  icon: '',
  customStyle: {}
};
AtNoticebar.propTypes = {
  close: propTypes.bool,
  single: propTypes.bool,
  marquee: propTypes.bool,
  speed: propTypes.number,
  moreText: propTypes.string,
  showMore: propTypes.bool,
  icon: propTypes.string,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onClose: propTypes.func,
  onGotoMore: propTypes.func
};
var MIN_MAXPAGE = 1;

var getMaxPage = function getMaxPage(maxPage) {
  if (maxPage === void 0) {
    maxPage = 0;
  }

  if (maxPage <= 0) return MIN_MAXPAGE;
  return maxPage;
};

var createPickerRange = function createPickerRange(max) {
  var range = new Array(max).fill(0).map(function (_val, index) {
    return index + 1;
  });
  return range;
};

var AtPagination =
/** @class */
function (_super) {
  __extends(AtPagination, _super);

  function AtPagination(props) {
    var _this = _super.call(this, props) || this;

    var _a = _this.props,
        current = _a.current,
        _b = _a.pageSize,
        pageSize = _b === void 0 ? 20 : _b,
        total = _a.total;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));
    _this.state = {
      currentPage: current || 1,
      maxPage: maxPage,
      pickerRange: createPickerRange(maxPage)
    };
    return _this;
  }

  AtPagination.prototype.onPrev = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    currentPage -= 1;
    currentPage = Math.max(1, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'prev',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };

  AtPagination.prototype.onNext = function () {
    var currentPage = this.state.currentPage;
    var originCur = currentPage;
    var maxPage = this.state.maxPage;
    currentPage += 1;
    currentPage = Math.min(maxPage, currentPage);
    if (originCur === currentPage) return;
    this.props.onPageChange && this.props.onPageChange({
      type: 'next',
      current: currentPage
    });
    this.setState({
      currentPage: currentPage
    });
  };

  AtPagination.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var total = props.total,
        _a = props.pageSize,
        pageSize = _a === void 0 ? 20 : _a,
        current = props.current;
    var maxPage = getMaxPage(Math.ceil(total / pageSize));

    if (maxPage !== this.state.maxPage) {
      this.setState({
        maxPage: maxPage,
        pickerRange: createPickerRange(maxPage)
      });
    }

    if (typeof current === 'number' && current !== this.state.currentPage) {
      this.setState({
        currentPage: current
      });
    }
  }; // onPickerChange (evt) {
  //   const { value } = evt.detail
  //   const current = +value + 1
  //   if (current === this.state.currentPage) return
  //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
  //   this.setState({
  //     currentPage: current,
  //   })
  // }


  AtPagination.prototype.render = function () {
    var _a = this.props,
        icon = _a.icon,
        // pickerSelect,
    customStyle = _a.customStyle;
    var _b = this.state,
        currentPage = _b.currentPage,
        maxPage = _b.maxPage // pickerRange,
    ;
    var rootClassName = ['at-pagination'];
    var prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1;
    var nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage;
    var classObject = {
      'at-pagination--icon': icon
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-pagination__btn-prev'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-chevron-left'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onPrev.bind(this),
      size: 'small',
      disabled: prevDisabled
    }, "\u4E0A\u4E00\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-pagination__number'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-pagination__number-current'
    }, currentPage), "/", maxPage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-pagination__btn-next'
    }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-chevron-right'
    })), !icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
      onClick: this.onNext.bind(this),
      size: 'small',
      disabled: nextDisabled
    }, "\u4E0B\u4E00\u9875")));
  };

  return AtPagination;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  customStyle: {}
};
AtPagination.propTypes = {
  current: propTypes.number,
  total: propTypes.number,
  pageSize: propTypes.number,
  icon: propTypes.bool,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onPageChange: propTypes.func
};

var AtProgress =
/** @class */
function (_super) {
  __extends(AtProgress, _super);

  function AtProgress() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtProgress.prototype.render = function () {
    var _a;

    var color = this.props.color;
    var percent = this.props.percent;
    var _b = this.props,
        strokeWidth = _b.strokeWidth,
        status = _b.status,
        isHidePercent = _b.isHidePercent;

    if (typeof percent !== 'number') {
      percent = 0;
    }

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    var rootClass = classnames('at-progress', (_a = {}, _a["at-progress--" + status] = !!status, _a), this.props.className);
    var iconClass = classnames('at-icon', {
      'at-icon-close-circle': status === 'error',
      'at-icon-check-circle': status === 'success'
    });
    var progressStyle = {
      width: percent && +percent + "%",
      height: strokeWidth && +strokeWidth + "px",
      backgroundColor: color
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-progress__outer'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-progress__outer-inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-progress__outer-inner-background',
      style: progressStyle
    }))), !isHidePercent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-progress__content'
    }, !status || status === 'progress' ? percent + "%" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: iconClass
    })));
  };

  return AtProgress;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtProgress.propTypes = {
  color: propTypes.string,
  status: propTypes.string,
  percent: propTypes.number,
  strokeWidth: propTypes.number,
  isHidePercent: propTypes.bool
};

var AtRadio =
/** @class */
function (_super) {
  __extends(AtRadio, _super);

  function AtRadio() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtRadio.prototype.handleClick = function (option, event) {
    if (option.disabled) return;
    this.props.onClick(option.value, event);
  };

  AtRadio.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        options = _a.options,
        value = _a.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-radio', className),
      style: customStyle
    }, options.map(function (option) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        key: option.value,
        onClick: _this.handleClick.bind(_this, option),
        className: classnames({
          'at-radio__option': true,
          'at-radio__option--disabled': option.disabled
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-radio__option-wrap'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-radio__option-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-radio__title'
      }, option.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames({
          'at-radio__icon': true,
          'at-radio__icon--checked': value === option.value
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-icon at-icon-check'
      }))), option.desc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-radio__desc'
      }, option.desc)));
    }));
  };

  return AtRadio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  options: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtRadio.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.string,
  options: propTypes.array,
  onClick: propTypes.func
};

var AtRate =
/** @class */
function (_super) {
  __extends(AtRate, _super);

  function AtRate() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtRate.prototype.handleClick = function (event) {
    this.props.onChange && this.props.onChange(event);
  };

  AtRate.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        _b = _a.value,
        value = _b === void 0 ? 0 : _b,
        _c = _a.max,
        max = _c === void 0 ? 5 : _c,
        size = _a.size,
        _d = _a.margin,
        margin = _d === void 0 ? 5 : _d;
    var iconStyle = {
      marginRight: pxTransform(margin)
    };
    var starIconStyle = {
      fontSize: size ? size + "px" : ''
    }; // 生成星星颜色 className 数组，方便在jsx中直接map

    var classNameArr = [];
    var floorValue = Math.floor(value);
    var ceilValue = Math.ceil(value);

    for (var i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on');
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half');
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off');
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-rate', className),
      style: customStyle
    }, classNameArr.map(function (cls, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: cls,
        key: "at-rate-star-" + i,
        style: iconStyle,
        onClick: _this.handleClick.bind(_this, i + 1)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-rate__left'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-icon at-icon-star-2',
        style: starIconStyle
      })));
    }));
  };

  return AtRate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 0,
  value: 0,
  max: 5,
  margin: 5
};
AtRate.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  value: propTypes.number,
  max: propTypes.number,
  margin: propTypes.number,
  onChange: propTypes.func
};

var AtSegmentedControl =
/** @class */
function (_super) {
  __extends(AtSegmentedControl, _super);

  function AtSegmentedControl() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSegmentedControl.prototype.handleClick = function (index, event) {
    if (this.props.disabled) return;
    this.props.onClick(index, event);
  };

  AtSegmentedControl.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.customStyle,
        customStyle = _b === void 0 ? '' : _b,
        className = _a.className,
        disabled = _a.disabled,
        values = _a.values,
        selectedColor = _a.selectedColor,
        current = _a.current,
        color = _a.color,
        _c = _a.fontSize,
        fontSize = _c === void 0 ? 28 : _c;
    var rootStyle = {
      borderColor: selectedColor
    };
    var itemStyle = {
      color: selectedColor,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: color
    };
    var selectedItemStyle = {
      color: color,
      fontSize: pxTransform(fontSize),
      borderColor: selectedColor,
      backgroundColor: selectedColor
    };
    var rootCls = classnames('at-segmented-control', {
      'at-segmented-control--disabled': disabled
    }, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: mergeStyle(rootStyle, customStyle)
    }, values.map(function (value, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames('at-segmented-control__item', {
          'at-segmented-control__item--active': current === i
        }),
        style: current === i ? selectedItemStyle : itemStyle,
        key: value,
        onClick: _this.handleClick.bind(_this, i)
      }, value);
    }));
  };

  return AtSegmentedControl;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSegmentedControl.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  color: '',
  fontSize: 28,
  disabled: false,
  selectedColor: '',
  values: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtSegmentedControl.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  current: propTypes.number,
  color: propTypes.string,
  fontSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
  disabled: propTypes.bool,
  values: propTypes.array,
  onClick: propTypes.func
};

var AtSwitch =
/** @class */
function (_super) {
  __extends(AtSwitch, _super);

  function AtSwitch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleChange = function (event) {
      var _a = event.detail,
          value = _a.value,
          checked = _a.checked;
      var state = typeof value === 'undefined' ? checked : value;
      _this.props.onChange && _this.props.onChange(state);
    };

    return _this;
  }

  AtSwitch.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        disabled = _a.disabled,
        border = _a.border,
        title = _a.title,
        checked = _a.checked,
        color = _a.color;
    var rootCls = classnames('at-switch', {
      'at-switch--without-border': !border
    }, className);
    var containerCls = classnames('at-switch__container', {
      'at-switch--disabled': disabled
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-switch__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: containerCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-switch__mask'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ "n"], {
      className: 'at-switch__switch',
      checked: checked,
      color: color,
      onChange: this.handleChange
    })));
  };

  return AtSwitch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSwitch.defaultProps = {
  customStyle: '',
  className: '',
  title: '',
  color: '#6190e8',
  border: true,
  disabled: false,
  checked: false
};
AtSwitch.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  title: propTypes.string,
  color: propTypes.string,
  checked: propTypes.bool,
  border: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func
};

var AtTabBar =
/** @class */
function (_super) {
  __extends(AtTabBar, _super);

  function AtTabBar() {
    return _super !== null && _super.apply(this, arguments) || this;
  } // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }
  // componentDidMount () {
  //   const curEnv = Taro.getEnv()
  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }


  AtTabBar.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };

  AtTabBar.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.customStyle,
        customStyle = _b === void 0 ? '' : _b,
        className = _a.className,
        fixed = _a.fixed,
        backgroundColor = _a.backgroundColor,
        tabList = _a.tabList,
        current = _a.current,
        color = _a.color,
        iconSize = _a.iconSize,
        fontSize = _a.fontSize,
        selectedColor = _a.selectedColor; // const { isIPhoneX } = this.state

    var defaultStyle = {
      color: color || ''
    };
    var selectedStyle = {
      color: selectedColor || ''
    };
    var titleStyle = {
      fontSize: fontSize ? fontSize + "px" : ''
    };
    var rootStyle = {
      backgroundColor: backgroundColor || ''
    };
    var imgStyle = {
      width: iconSize + "px",
      height: iconSize + "px"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-tab-bar': true,
        'at-tab-bar--fixed': fixed // 'at-tab-bar--ipx': isIPhoneX

      }, className),
      style: mergeStyle(rootStyle, customStyle)
    }, tabList.map(function (item, i) {
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames('at-tab-bar__item', {
          'at-tab-bar__item--active': current === i
        }),
        style: current === i ? selectedStyle : defaultStyle,
        key: item.title,
        onClick: _this.handleClick.bind(_this, i)
      }, item.iconType ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: classnames("" + (item.iconPrefixClass || 'at-icon'), (_a = {}, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.selectedIconType] = current === i && item.selectedIconType, _a[(item.iconPrefixClass || 'at-icon') + "-" + item.iconType] = !(current === i && item.selectedIconType), _a)),
        style: {
          color: current === i ? selectedColor : color,
          fontSize: iconSize ? iconSize + "px" : ''
        }
      }))) : null, item.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: !!item.dot,
        value: item.text,
        maxValue: Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-tab-bar__icon'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current !== i
        }),
        mode: 'widthFix',
        src: item.selectedImage || item.image,
        style: imgStyle
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
        className: classnames('at-tab-bar__inner-img', {
          'at-tab-bar__inner-img--inactive': current === i
        }),
        mode: 'widthFix',
        src: item.image,
        style: imgStyle
      }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtBadge, {
        dot: item.iconType || item.image ? false : !!item.dot,
        value: item.iconType || item.image ? '' : item.text,
        maxValue: item.iconType || item.image ? 0 : Number(item.max)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-tab-bar__title',
        style: titleStyle
      }, item.title))));
    }));
  };

  return AtTabBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabBar.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  fixed: propTypes.bool,
  backgroundColor: propTypes.string,
  current: propTypes.number,
  iconSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  color: propTypes.string,
  selectedColor: propTypes.string,
  tabList: propTypes.array,
  onClick: propTypes.func
};
var ENV$1 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs =
/** @class */
function (_super) {
  __extends(AtTabs, _super);

  function AtTabs(props) {
    var _this = _super.call(this, props) || this;

    _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV$1) {
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEAPP:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY:
          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);

              _this.setState({
                _scrollIntoView: "tab" + _this._tabId + index
              });

              break;
            }

          case _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB:
            {
              var index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.childNodes[index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }

          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    };

    _this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
      _scrollIntoView: ''
    };
    _this._tabId = isTest() ? 'tabs-AOTU2018' : uuid(); // 触摸时的原点

    _this._touchDot = 0; // 定时器

    _this._timer = null; // 滑动时间间隔

    _this._interval = 0; // 是否已经在滑动

    _this._isMoving = false;
    return _this;
  }

  AtTabs.prototype.handleClick = function (index, event) {
    this.props.onClick(index, event);
  };

  AtTabs.prototype.handleTouchStart = function (e) {
    var _this = this;

    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return; // 获取触摸时的原点

    this._touchDot = e.touches[0].pageX; // 使用js计时器记录时间

    this._timer = setInterval(function () {
      _this._interval++;
    }, 100);
  };

  AtTabs.prototype.handleTouchMove = function (e) {
    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection,
        current = _a.current,
        tabList = _a.tabList;
    if (!swipeable || tabDirection === 'vertical') return;
    var touchMove = e.touches[0].pageX;
    var moveDistance = touchMove - this._touchDot;
    var maxIndex = tabList.length;

    if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current + 1, e); // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true;
        this.handleClick(current - 1, e);
      }
    }
  };

  AtTabs.prototype.handleTouchEnd = function () {
    var _a = this.props,
        swipeable = _a.swipeable,
        tabDirection = _a.tabDirection;
    if (!swipeable || tabDirection === 'vertical') return;
    clearInterval(this._timer);
    this._interval = 0;
    this._isMoving = false;
  };

  AtTabs.prototype.getTabHeaderRef = function () {
    if (ENV$1 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId);
    }
  };

  AtTabs.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef();
    }

    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current);
    }
  };

  AtTabs.prototype.componentDidMount = function () {
    this.getTabHeaderRef();
    this.updateState(this.props.current);
  };

  AtTabs.prototype.componentWillUnmount = function () {
    this.tabHeaderRef = null;
  };

  AtTabs.prototype.render = function () {
    var _a;

    var _this = this;

    var _b = this.props,
        _c = _b.customStyle,
        customStyle = _c === void 0 ? '' : _c,
        className = _b.className,
        height = _b.height,
        tabDirection = _b.tabDirection,
        animated = _b.animated,
        tabList = _b.tabList,
        scroll = _b.scroll,
        current = _b.current;
    var _d = this.state,
        _scrollLeft = _d._scrollLeft,
        _scrollTop = _d._scrollTop,
        _scrollIntoView = _d._scrollIntoView;
    var heightStyle = {
      height: height
    };
    var underlineStyle = {
      height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
      width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
    };
    var bodyStyle = {};
    var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";

    if (tabDirection === 'horizontal') {
      transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
    }

    Object.assign(bodyStyle, {
      transform: transformStyle,
      '-webkit-transform': transformStyle
    });

    if (!animated) {
      bodyStyle.transition = 'unset';
    }

    var tabItems = tabList.map(function (item, idx) {
      var itemCls = classnames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: itemCls,
        id: "tab" + _this._tabId + idx,
        key: item.title,
        onClick: _this.handleClick.bind(_this, idx)
      }, item.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-tabs__item-underline'
      }));
    });
    var rootCls = classnames((_a = {
      'at-tabs': true,
      'at-tabs--scroll': scroll
    }, _a["at-tabs--" + tabDirection] = true, _a["at-tabs--" + ENV$1] = true, _a), className);
    var scrollX = tabDirection === 'horizontal';
    var scrollY = tabDirection === 'vertical';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: mergeStyle(heightStyle, customStyle)
    }, scroll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "j"], {
      id: this._tabId,
      className: 'at-tabs__header',
      style: heightStyle,
      scrollX: scrollX,
      scrollY: scrollY,
      scrollWithAnimation: true,
      scrollLeft: _scrollLeft,
      scrollTop: _scrollTop,
      scrollIntoView: _scrollIntoView
    }, tabItems) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      id: this._tabId,
      className: 'at-tabs__header'
    }, tabItems), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-tabs__body',
      onTouchStart: this.handleTouchStart.bind(this),
      onTouchEnd: this.handleTouchEnd.bind(this),
      onTouchMove: this.handleTouchMove.bind(this),
      style: mergeStyle(bodyStyle, heightStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-tabs__underline',
      style: underlineStyle
    }), this.props.children));
  };

  return AtTabs;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabs.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  height: propTypes.string,
  tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
  current: propTypes.number,
  swipeable: propTypes.bool,
  scroll: propTypes.bool,
  animated: propTypes.bool,
  tabList: propTypes.array,
  onClick: propTypes.func
};

var AtTabsPane =
/** @class */
function (_super) {
  __extends(AtTabsPane, _super);

  function AtTabsPane() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTabsPane.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        tabDirection = _a.tabDirection,
        index = _a.index,
        current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-tabs-pane': true,
        'at-tabs-pane--vertical': tabDirection === 'vertical',
        'at-tabs-pane--active': index === current,
        'at-tabs-pane--inactive': index !== current
      }, className),
      style: customStyle
    }, this.props.children);
  };

  return AtTabsPane;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTabsPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
};
AtTabsPane.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  tabDirection: propTypes.oneOf(['horizontal', 'vertical']),
  index: propTypes.number,
  current: propTypes.number
};
var SIZE_CLASS$2 = {
  normal: 'normal',
  small: 'small'
};
var TYPE_CLASS$1 = {
  primary: 'primary'
};

var AtTag =
/** @class */
function (_super) {
  __extends(AtTag, _super);

  function AtTag() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTag.prototype.onClick = function (event) {
    var _a = this.props,
        _b = _a.name,
        name = _b === void 0 ? '' : _b,
        _c = _a.active,
        active = _c === void 0 ? false : _c,
        disabled = _a.disabled,
        onClick = _a.onClick;

    if (!disabled) {
      typeof onClick === 'function' && onClick({
        name: name,
        active: active
      }, event);
    }
  };

  AtTag.prototype.render = function () {
    var _a;

    var _b = this.props,
        _c = _b.size,
        size = _c === void 0 ? 'normal' : _c,
        _d = _b.type,
        type = _d === void 0 ? '' : _d,
        _e = _b.circle,
        circle = _e === void 0 ? false : _e,
        _f = _b.disabled,
        disabled = _f === void 0 ? false : _f,
        _g = _b.active,
        active = _g === void 0 ? false : _g,
        customStyle = _b.customStyle;
    var rootClassName = ['at-tag'];
    var classObject = (_a = {}, _a["at-tag--" + SIZE_CLASS$2[size]] = SIZE_CLASS$2[size], _a["at-tag--" + type] = TYPE_CLASS$1[type], _a['at-tag--disabled'] = disabled, _a['at-tag--active'] = active, _a['at-tag--circle'] = circle, _a);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, classObject, this.props.className),
      style: customStyle,
      onClick: this.onClick.bind(this)
    }, this.props.children);
  };

  return AtTag;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
  customStyle: {}
};
AtTag.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  type: propTypes.oneOf(['', 'primary']),
  name: propTypes.string,
  circle: propTypes.bool,
  active: propTypes.bool,
  disabled: propTypes.bool,
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  onClick: propTypes.func
};

function getMaxLength(maxLength, textOverflowForbidden) {
  if (!textOverflowForbidden) {
    return maxLength + 500;
  }

  return maxLength;
}

var ENV$2 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtTextarea =
/** @class */
function (_super) {
  __extends(AtTextarea, _super);

  function AtTextarea() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleInput = function (event) {
      _this.props.onChange(event.target.value, event);
    };

    _this.handleFocus = function (event) {
      _this.props.onFocus && _this.props.onFocus(event);
    };

    _this.handleBlur = function (event) {
      _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };

    _this.handleLinechange = function (event) {
      _this.props.onLinechange && _this.props.onLinechange(event);
    };

    return _this;
  }

  AtTextarea.prototype.render = function () {
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        value = _a.value,
        cursorSpacing = _a.cursorSpacing,
        placeholder = _a.placeholder,
        placeholderStyle = _a.placeholderStyle,
        placeholderClass = _a.placeholderClass,
        _b = _a.maxLength,
        maxLength = _b === void 0 ? 200 : _b,
        count = _a.count,
        disabled = _a.disabled,
        autoFocus = _a.autoFocus,
        focus = _a.focus,
        showConfirmBar = _a.showConfirmBar,
        selectionStart = _a.selectionStart,
        selectionEnd = _a.selectionEnd,
        fixed = _a.fixed,
        _c = _a.textOverflowForbidden,
        textOverflowForbidden = _c === void 0 ? true : _c,
        height = _a.height;

    var _maxLength = parseInt(maxLength.toString());

    var actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden);
    var textareaStyle = height ? "height:" + pxTransform(Number(height)) : '';
    var rootCls = classnames('at-textarea', "at-textarea--" + ENV$2, {
      'at-textarea--error': _maxLength < value.length
    }, className);
    var placeholderCls = classnames('placeholder', placeholderClass);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Textarea */ "p"], {
      className: 'at-textarea__textarea',
      style: textareaStyle,
      placeholderStyle: placeholderStyle,
      placeholderClass: placeholderCls,
      cursorSpacing: cursorSpacing,
      value: value,
      maxlength: actualMaxLength,
      placeholder: placeholder,
      disabled: disabled,
      autoFocus: autoFocus,
      focus: focus,
      showConfirmBar: showConfirmBar,
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
      fixed: fixed,
      onInput: this.handleInput,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm,
      onLineChange: this.handleLinechange
    }), count && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-textarea__counter'
    }, value.length, "/", _maxLength));
  };

  return AtTextarea;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
  placeholder: '',
  disabled: false,
  autoFocus: false,
  focus: false,
  showConfirmBar: false,
  selectionStart: -1,
  selectionEnd: -1,
  count: true,
  fixed: false,
  height: '',
  textOverflowForbidden: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtTextarea.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  value: propTypes.string.isRequired,
  cursorSpacing: propTypes.number,
  maxLength: propTypes.oneOfType([propTypes.string, propTypes.number]),
  placeholderClass: propTypes.string,
  placeholderStyle: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  autoFocus: propTypes.bool,
  focus: propTypes.bool,
  showConfirmBar: propTypes.bool,
  selectionStart: propTypes.number,
  selectionEnd: propTypes.number,
  count: propTypes.bool,
  textOverflowForbidden: propTypes.bool,
  fixed: propTypes.bool,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onLinechange: propTypes.func,
  onChange: propTypes.func.isRequired,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func
};

var AtTimeline =
/** @class */
function (_super) {
  __extends(AtTimeline, _super);

  function AtTimeline() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtTimeline.prototype.render = function () {
    var _a = this.props,
        pending = _a.pending,
        items = _a.items,
        customStyle = _a.customStyle;
    var rootClassName = ['at-timeline'];
    if (pending) rootClassName.push('at-timeline--pending');
    var rootClassObject = {
      'at-timeline--pending': pending
    };
    var itemElems = items.map(function (item, index) {
      var _a;

      var _b = item.title,
          title = _b === void 0 ? '' : _b,
          color = item.color,
          icon = item.icon,
          _c = item.content,
          content = _c === void 0 ? [] : _c;
      var iconClass = classnames((_a = {
        'at-icon': true
      }, _a["at-icon-" + icon] = icon, _a));
      var itemRootClassName = ['at-timeline-item'];
      if (color) itemRootClassName.push("at-timeline-item--" + color);
      var dotClass = [];

      if (icon) {
        dotClass.push('at-timeline-item__icon');
      } else {
        dotClass.push('at-timeline-item__dot');
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames(itemRootClassName),
        key: "at-timeline-item-" + index
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-timeline-item__tail'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames(dotClass)
      }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: iconClass
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-timeline-item__content'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-timeline-item__content-item'
      }, title), content.map(function (sub, subIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-timeline-item__content-item at-timeline-item__content--sub',
          key: subIndex
        }, sub);
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames(rootClassName, rootClassObject, this.props.className),
      style: customStyle
    }, itemElems);
  };

  return AtTimeline;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtTimeline.defaultProps = {
  pending: false,
  items: [],
  customStyle: {}
};
AtTimeline.propTypes = {
  pending: propTypes.bool,
  items: propTypes.arrayOf(propTypes.object),
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string])
};
var error = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGwtJREFUeAHtnUusndV1x7mAIYABG/MUYGzLBCUtFHcCtB3YZgISGaCodOQ4QGGSoJAgV5FiOTAALBowY6tFASoUmYyS0EoRYPEonUUKRETYKNhWEnCwFZvWEIzB/f3v/T773HPP2Wt/79da0v/uc85+rfVfa93vsff5zswpLpUwcPz48aUMvAKsTMpLKC8Ey0bKc3h9JjhjpOTlKUfBpyPlEV4fBAdGyv283gPeUzkzM/NnSpeSGZgpebzBDUciXITR1yW4NilXU54P6pTDTPYueBO8lZRvkjgf8tolJwOeIBmJIyGuoMs6sD7B8oxD1N18LxO+DHaqJGH+ULcCXZ7PE8TwXnKESBNC5ZeNLm2v3oWCacLs9CNM2F2eIBP4ISlu4uM7wM3gr0FfeTqObb8BL4EdJMv/ULqMMNBXx4+YGPeSpFhJyw0JdA0xRNE1zLMCyaKL/8HLoBOEpNCFtI4USox/AIPmA/tT0ZHldaBk0ZFFNwAGKYMLCJLiNDx9K/gG+Br4EnCZzsBfqPo5eAb8J8nyxfSm/asZTIKQGItwn44U3wdX1+TK/2WedxLsptTaxehaxiHej653aP1DMrouonWSJSBdQ9E6yqVANlyT4FzKOkQ2bAU6BfusjgmbnqP3CUJi6AhxN/gXsLwiwvcw7tsgTYbZkiB6v6L55g2LjZfxQZosaflVPlsxr2F5b/Yx1GPg37FRRxiXrjFA0CwGm8D7oGzZx4BPg43gyrZyI90SHaWrdC5bxK04XtxWDlyvMQZw1lKwBRwEZcl+BvoJuBd09g6XdE9skC2yqSwR1+Jc22tc2sgAzjkN3AcOgTJE/x0fB2vaaG8ZOsk28AQo6ygr7uUD3QhxaQsDOORG8CtQVD5mgOfArWAwTpatic2yXRwUFfnihrbEx2D1wAnLwHbwBcgr6rsT3AXquhvUWp/BwXkJFzspi/Iq3+ium0udDED6DLgbHAB55Qgdt4Gr6tS9S3OJm4QjcZVX5CP5qvd3TFvhW4i+HrwB8sphOj4MtE3dJYIBcQUeAeIur8hn10dM503yMAC5p4LN4BjII/pPpv5adHPJwYC4SzjMe+SW734ATs0xvXeZxgCEXgx+CfLIH+n0ANC391xKYEBcJpyK2zwiX15cgio+BESuBXkc8Qn9dG/e91pVFEbiNuFYXGcV+XRtRar1f1jI0ymVAvxzkFVeoMOq/rPUDgvFNRDnWUWnXPKxn3JlcSWEXQJeBFllLx1uzzKXty2PAXEP5IOsIl/roRYuFgMQtQ5kXdk9Sp+t4GxrfK+vlgF8oOsT+UI+ySLy+bpqtev46BC0AXyWhVXavgK+0nHTe6e+fAJeBVlEvtdXElzGGYAY3WnKsnKra5OHgJ+/jpPZkvfyTeKjLNeRioEHWmJC82pAxgx4DGQRHY7XN6+9axDDgHwFsp42KyaGvfoOAaeDH4Ms4hd0MVHZsjY4OM+NF8XG6S0zpR51MPxs8AsQKzpM+y3BetxTySz4T6dc8mGWUy7FyLBuvmDwBeANECu+qFRJyDYzKE7PuvirWLmgGW1rnlWGgrdArKjt5TWr6dNVzIB8CrLGQb+TBEJ0WpXlyPE67f1rnBUHa1PDy7dAPo4VxU4/T7cwTBfkWa45fkb7s5pyns9bDwPyMZCvY0Ux1K8LdwzSrdynYxmg3VNgMF95rScU2zuLfJ34nCJKFEv9uQWMMVnWOR5trytdsyoZIE4ejUqPuUZ6Llf3BVu0Qh4jWkG9v/sWuwVFGFAMAMVCjHR7xR0LN4BYYz05ikRWj/oSM0qSGFFsdXPvFopre0HsxkM/repRgJdhCrETe7qlGOvWLmAU1raC2L03T5VBqI/RPwaIoadAjCjWuvF9EhTVdoLYLzvp9p7frepfbJdikWIDxN4CVsy1f2c3Sm4BMaIFIl/nKCWU+juIYgTELiZuaTUTGKI9NjEb0bTFwFfIW+3N9iinWAEx21KO0W5tezQf0QTF9GgebSq0RG18b9UId/7SZkAxA2Ljq12PFEJxXXfEPLeqvRlu+8hbNMwAMaYzFMWQJYrF9lyPoMxmS+Okvt3niA0HgE9vM0AcxV7jbrZHq6EFCutZuTFZ/SLt2pPVNXDjU5TPgGIIKJYsUUw2+yxgFNAmRG1BtqQ796nL96mPWDIDBFvsOptis7lNjUyux9pborta/oCFkoNk6MMppkDMHdO7G+EK5ZaBmKd8P9iIgj5p7xkg/h4ElihG6/8RHybdbmlG/SvArzt6H6rNGKjYSmKMIijba9UQVW4A2kkZEj160p94WKtnhjeZYgwo1kKiWL2xFnaYSPtjYn4wc2stCvkkg2eAeNSzgC1RzFa/749J9DO/luylQT+/XD/4cGwfAYo1oJiz5L5KtWd27Yk5ZGlBvf8EQaWe8MHHGVDMRcSlYre6PYAM/sMIJV4YV97fOwN1MEBsxvyITzW7OZh8MThoJMgn1K+qgwyfo34G8K0W6J4B2jT4J/BT0Jqf0UaXVUAxGBLF8OLS2WPQTaFZk7pqsrOgNeh2JfgO+BH4JvDfLczIKZxpS5GSYlx02tKmJInZq7Upo/nh5hCgH2v8YJyZsff6r9K6wEOnr4OPxnR9h/fXha322pQBuFJyaMFtmjyftm26REHFqmIxJNr6VF6sMti3Q7Mldd9rmpzx+dFrORhPjtQUOfxvxvv4+/kMiCMQSg7xuX9+r2bfoc8DUsqQb5WiJZMsAtYtNBHYut8hR6fvgpB4kgSiBOJikkP8/j4wTO1V6KPfSbSSWjG9yFIuZhuInju03BjoyZmZmSNGmyaqLb21R+cliPIjyZh3Ek5e4uOYfUxq1xpJYvFJQyHFhmI7v0CSVs13gZAcpnJJ/lmq64led4UUH6nzI8mIG+Al9sghCnXh3rpH7qDTEqDYDIliO//qOp1vC42e1D08wm2rXqKfnoihC/IY8STBexCVJTlazRm2PBLh+NtyBy2D7zAmOEL9RbknqKEj+l0H5MgYabXDq6YLgnqTHOIKey4CitGQ7MjFKyPqEGUtumzLNXjNnbCjV46vgr6+coRd20BIFOPZLxHodE9oVOq0hbg1C0RW0KCrJ8kUkvrMjWIUKFZDcs8UaqZ/zGivhUakbuf03u2sQWdPkjHXDIETxSoIyWtjtITfMtJKYGXdneFR2lmLXZ4kiWuGwgV23glColiP30NI4y2h0aj7GJzbzhSwtUL3wSfJkDhQrALFbEji9xEyyu7QSNQ9Z4dhu1tgw2CTZIi2K2ZBSHZHRSwj3BQaJam7JWqwljfClsElyRBtVhhi9y1J7IaKvzNDlt5PhkagTjsh868+mhrU2wBbBpMkOWztzY5nxSxQ7IbE2p4ym2nWY+YfrzeEq58NxnqfJEOw0YoUOHg8lB3UvRkcgwZaebTuXq0JDtLRSuxWknwIYqRTK+4YlOUfgDjo5eZN7FpjOFexP31nCJV3GAO0at9/2bmI7VkCSUnS+lOQHDb1MjnSWIGP/SAkd6RtVY5vd18/WjnhdecWByfYMPUjtkn/msqbwcGpjU5WaBv4yzDd2iRJdIvdsi6bb044OGll/15ZMTw9ByDU2tp+b//4WmgRPHT+SKLkAL5Jc8y9cHIvCMmusS5zb+lxRahXUrd6Yucefoi9nU0SdPfkmBKTcLM6ieVQccWC7rTeEOpB3b4FnXr+ATZ3LknQ2ZPDiEvFMgjJiW8ajl6DTD/3mpvQOncz1OpeddeuSfC4rodeBjFfkx3KNcekwLNieWEuQK71YIaNk2Yawmdw0/ojSQ4de323KhSXcLURhGTvvP601PqHJVfO6zSwN5CT9dSltrtbbdatjWECX3qQoCUn10NoebPR+r02Glq3TnCUNUkq/y+NTq0/utXtp5j54O09EBLd7j+xDmL9t3s7ZtK+t+GaRFsRdH4au06iRwpZ3OamLRk7yzrH+sSG3HP2qKMV07N+Sy/SLSe+0yNiCpmSI0kqWUxMkiPLBbknx3zPWzE9L0Gund93wTtrsAUd+vxB00mSMTkO4AtPjoUBacX0yZyA8EMgJGsXju+fQFiWaxJtArSO1CapGefsxH4x0+gKGsDjWhCSQ7PT0mJpqFVSd1kFOvZiSPipLUmSubLsOC6ckL1w0gQj4PKyJLZDxVJ908raAnx4wvj+0QgDcFh5kiRzeHKM8F70JZxajyZdo4v0lcZEkzdvGZ2GVJ3xmuRCuMl0d0vJoT5AfS3RHTa/5rBYmqu3YnulEmSFMZZ1MWN0H0b1SJLootiS6CRJkkN3q2KSwy/ILebn11uxvUIJcun8PgveWVm2oMNQP0iSJPb7JGaSjBw5suytCn9tdKjOmWy3FduXKkEs8nv9LcLJvOX/tKwjyUhy+JEjvzusnlZsL4tJkJhVY0uRQdWPHElynW7lSA59E9CPHNmjzIrt2QSx/kPFODm7aj3vkTdJPDlqDQwrti/Ubd7fgpCcXFGsVfd+TAaxWW8Bx97KLWXhsR8s57MC31wbCnzqfqtTrMXG8HMrikYjr57MQI5rEuuIron0n89PqyZTnuVTK7YXK0HOMEb81Kj3aoOBjKdbxmieHBZBGeqt2D4jJkGOZpjQm05hoKQk8SPHFH5zfmzF9hm6BrEeC39Wzsm92wQG4FvXJLHXGTQ9IX7NMYHPIh/BrH7kNSQfK0GOhVpQ15sHVRchs8y+cJo1STw5ynRAMpZi24j9YzrFcukGA8e7oWa/tFSC2Odh/bK5UWt09ECB2I2Hqa66s6VvJvot95SRckrrBtVRJYh1JX9mObr4KDmTIyXOkyRlorzSiu1P/QhSHtnBkQomRzq2J0nKRDmlH0HK4bHYKCUlR6pEmiT+bcGUkfxl1BHkiDH+EqPeqwMMZEwOrXMIlihJMn3pyhpwoPVWbB/RKZa1o1HOcMnBQI7k0HdJ1gNPkhx85+hixfZBJYjlDOv7Ijn06n+XPMmh1XbwFux4ktQTIlZsH4g5gliD1GNKh2bJmxypiZ4kKROVl1Zszx5BrFMs6yu5lVvRpQmKJkdqqydJykSlpRXbs0eQDwwVrjbqvTphoKzkSAn1JEmZqKy0Ynu/TrH2GNNfY9R7NQyUnRwpqUmS6OLdulZUF7+7lRIXV1qxvUeOtR4c91HcXMNtpeQAsTt0c208rGOOoXkQTj8CIVmjBPFHjxaIDPirPDlS9eqcK52zryVcxj16VATQ2B9enSMSmgjYJubMQU3ru8DjWhCS2a/j6hpE8u5cMfWvda42tWNfK2A2y65cXT+U8h1yrkn0eB+/JikeWFZMz+ZEmiDWM5WswYqr26ERmkqOlCJPkpSJQqUV07M5kSaIVm9DYg0W6turuqaTIyXTkyRlIndpxfTJnMDp/iOeETwrOUCld6si1JjXBH30bKdW6TRPwZa+gbP3QEh0GjsntPKfgU7JmFLCUeuSI1W1zbqlOraphK9sPwMt5em0F4RkY5uMrFMXSGltcqQ8dEHHVNemS7jaCEKyJ9UxvQbRe/0GRUjWhyr7WgeLjdytysqnX5NkYsyK5YW5QCBsCKUUdfsyqdCDxkoO0Knz+y7qXHeoKJZBSDYs0InWV4R6JHWrF3Ts6QfY27nkSF3RZd1TG6oq4WZ1Esuh4vKJ89NjV6gXdfdO7NizD7Gzs8mRuqIPNqS2lFkqhkFI5v0s2+g1iPRYeO41Xzvr3G1+6w6+g7lOXHNY1Po1yVSGrBiengMExx2h1KLO+smqqVp1oULJATp1zWHx2kebLJtD9YphEJI7pvanl9ZDvgj1pm7N1AE6XIFdvUuO1B19ti21MaaEh78FIVHsXxQciwZvhkag7vHgAB2sxKbeJkfqjiHYmNo6rYSDJ0BIrD2JswuG20IjUPc+OG2aEl37HFt6nxypT4Zka2pzWipmgWI3JNvS9lNLet8UGiGpu3XqAB2qwJbBJEfqliHaLNux+9YkdkPFTSlPwZIRdodGoe654AAdqMSGwSVH6pYh2q6YBSHZnfJjloyyJTQSdfpVqnPNgVraAN0HmxypS4bEAbaeB6xfUtuScmOWDLYSWHez7jIHamED7Bp8cqRuGQoX2HkXCIlifWXKS1RJh9dCI1K3M2qgFjVCZ0+OMX8MgRPFKgjJq2O02G8Z7Z7QiNQp666yR2pHC3T15Jjiij5zoxgF1tnQPVOomf4xg54PPgEhsW+LTZ+ithoM8OQw2O4rR9hlLVsoxs836JlcTccdICRHqAyvPE4eurZP0c+TI5LtHFxdGzl0I80Um0AxGpIduZVj1NtCIyd1D+eeoOKO6OfJkZHjjJy9Q/uzMk5RW3N0ewRYcltuhRhZq4/WFvjDtLF+qSe3Dnk7otMl4E8gRrRB0X/SLCFbXIDYTZt35vVRlf3QfwlQbIZEsX1qIT0YwLpFJgU2F5qkgs7o9LQUixBPjgn8w1tskjwxoXvjH6H/5gjfF1+qYJJFwHqgwwHanNM4KyMKoM8fgCWeHCOcjb+EvJgk+e54v6bfo/c5QDEZEsX0olJ0ZaBvh2ZK6h4oZbKSBkEna9+/J0cE1/AYShI9HX15xDC1NkGnB4Al3ypNKWb6EvjAmPGPalfapAUHQpfnA/p6cmTgFx71cDpdkI+KkuPrGYappSk6KVYViyHRrt5yY5UBN4VmTOri97NUTBf6XAUmPbVeF+5+QZ6RfzhT4H0T/Ah8B1yZcYhamqPXFmDJptKVYcbF4KAxsxZdVpU+ec4B0eUq8FOgpNB/lWfAJTmH824tZwDfrgLW4rZieHElpjBwTHa+UMnkPqgzYDBAfL4ALKnuLIeZ9WtUk05bxpW63bDFq52BUhkgAG8fD8IJ7xW7S0udeHwwJrhvwsTjH+kW2tnjff29M1AFA4o1YC1FKEbvq2L+eWMyiVbXf6XZDNk6r6O/cQYqYoA43GrEoqoVs/U8S4GJbgTWFuKjtPlKRZz4sM7ALAOKMaBYC4li9YZaKWPC7SGNkrpXKIvtdanVKp+sSwwotsCrSayFiu2124U2y8CBkFZJ3UO1K+cTDoIB4uuhiPhTjC5rhBAmvjtCwc9ps74RBX3S3jKgmAKKLUvubowENJsBb1gaUq+lfV+ga8xT/ZpYsZTEFEVQFJszjVqPAteDY0E15ypfpPDrkUa91f3JFUNAsWSJYvL6VliMIpstbZP66lYxW8GEK1E1A8RRzG4OhdsPqtYlenyUUVb/UloZonPGtdEDe0NnYIQBxQ6Iue5QLLbrbAWFLgbWNmOazLaZ/BNXI2T4S2dglAHi5vIM8XXxaN/WvMaA2Ax/i7bV7olpDSuuSFEGFCtAMWOJrjvWFp2v0v4oGHuO+DptW/tEjEpJ8sGjGVCMAMVKjLT/GhcrYu8yyOCfgXr2x0S7xBu2hQHFRhIjFKbozla7rjumEYmisfepZfVT08bxz4fNgGJDARIh3Vtnw6h14LMI49Tk0WGHgls/zoBiIjJ2FGPrxvt34j2KbwDaSRkj93fCKFeycgYIlvtjAoY2iq0NlStU5QQYEPMIFvEhYz1JqnRGB8ZWDCSxQGFKqx41lZtezHzMNPVkAz/dys10tzsSArGnVYqWx7pt7Yj2GKNNjU/LqkjRxZnf3RrhsM8v5Wsgn8eKYqnZTYhlOwSDTge/iGWAdroF7OskZTuiZePJx4mvKaJEMXR6y8woRx0M05frY7bHp0xpgchX3Muhv3WjyLcgdhFQMaHY6ffDQDDwAhCzbYBms6K2vnerdeFdTCH5FGSNgwuKzdqR3hCjJMlyJNEmyLUdMc/VNBiQL4F8GiuKlWEkR8odBut0K8s1iTaibQHd2E6QGurlCQbku8SH8mWsKEb6fVp1gqGxFxiuC/csd7dEqvbc+Nd3x7hs+1v5LPEdRbQoNvp5QR7rMAiYAVnWScSu9t6sj53D2zXLgHyV+IwiWhQT/bqVW8QNkKEVd62mx4q+WfYg8FOuIsRX2Fe+SXwU8y1Ams6KYqAfK+Rlcwsx2rsVu8Fxlk3+vAr8CY5lO6PgePJJ4huKaJHvu723qiBvZncIynM41qMn9XzWYV7MmazW10A+SHwhn2QRnTZ3c1duffTOzQRReS7o5Iy9wH96oW6HJfOJ+8QHFJnEb7xk9Rn06vxVt3WznL+mXtEPqazKOqe3z8eAuAYxP16T+ict5Vu/dZ+P9rleEJh1USkl/5OE/HJ/rLGIMT3rC7/63UIFuLjOKr74W1Y8wLweKRTz3K1JTpIjvgda9TvuZXHTxDjiEuiuY5bVcJqfEPmynY/maYLQMuaEUJ1ybQZZVmFpfkL0lG/1X1KGPkMcQ9wlHMY81Z+mC0S+kw/81nxVAQS5ehaw9ubklcN0fBhcVJWOfRtXXCWcibu8Ip+141m5fXPQuD0QrdV3/fRC3v9kdD1+BGwDV42P7+/nGBA3CUfiKq/IR/KVr4rXHViQvgxsB1p9zSvquxPcCc6t24a2zScOEi52UhblVb5p5sdr2kZsk/rghBtAzA+L0iwoH1P7HLgFDOYrv7I1sVm2i4OiIl/c2GRM+NxjDOAQOVk/UX0IlCFa2X0crBmbqjdvZVtio2wtQ8S9fDCYfy6dCwacsxT8EBwEZcl+BvoJuBes7hwpicLSPbFBtsimskRcaz3Evx7dleDAWYvBJlDWf0eGOiH7ePU02AiubCsn0i3R8ceU0rlsEbfieHFbOSiqV+/vLOA8raT/M9gElhclbEr/PXz+NnhnFDMzM+/zvnLBxsuY5JoxfJX3K0AVso9B/xX8Gzb+pYoJ2jJm7xMkJZogWsRrbaX+Prg6/bzi8iPG3wWUOCr3g4PgQFIeovwUHB0peXnKGeDMkVKLm7obdGFS6huVXwZKCpXngTpkN5NsBc+SGJ/VMWHTcwwmQVKiSRRdQN4KvgG+BnyvFiQEREeIn4NnwH+RGJ8H2vauanAJMupBkkX/mf8RKFn+HgyaD+xP5Tgv/hsoKZ4nKXSkG6R4QCRuJ1lW8lKnYEJn71Ql5uQt3qXjs+A/SIrf5R2kT/08QSZ4k2S5iY//CdwM/gr0lScdKX4DXgY7SIo3KF1GGOir40dMLPaSZNGmxnVgfYK6LvCLKT69ty60lRDCTpLiw+lNvcYTJGMMkDBX0GU0YZZnHKLu5rolO5oQv69bgS7P5wlS0HvJEeY6hklxLa91DXN+waGzdj9MB11DvAXeTOFHCJgoIJ4gBcgLdSVxtO1iBViZlJdSai1jdD1DK9Ba8xDSdQ9ezlsX0RrJ/4HR9RO9/gDsAe+pJBH+TOlSMgP/D3W7PKH+6NniAAAAAElFTkSuQmCC";
var success = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGfFJREFUeAHtnWusXmWVx3soFES0QAsFp+lQLuIFCHyZUjRDWz4pYIxA0SiUW4uGYRwlVRg6ZVRmxjBRHD/QSdPqSImXTjKSiKLggEIpycQBA8g9HO5QaAslU7BQOPP7H/bb8563736eZ99vayX/s/e7n9ta/7XW2ZdnX0ammBTCwNjY2AF0fBiYGy1nsZwJZvQt38v63mBa35LVKW+CHX3L7axvAZv7lptYfxKMajkyMvIKS5OcGRjJub/OdUciHITRx0U4NloeyXI6KFO2Mdjj4D5wf7S8j8R5mXWTlAxYgiQkjoSYTZOFYFGEOQm7KLv6Uwx4G7hdSxLmubIVaPJ4liAe70V7iF5CaPlBT5O6Fz+Kgr2Eud32MG53WYIM4YekmM/mxeAUcAxoK09j2PYA+G+wnmS5m6VJHwNtdXyfiWGrJMVcap4TQecQXRSdw6wTSBad/HdeOp0gJIVOpLWnUGJ8HHSaD+zvifYsG4CSRXsWXQDopHQuIEiKqXj6E+BccDrYB5jEM/Bnin4Brge/Ilneia/avpLOJAiJsRfu057icnBUSa7U3MUjEXT48hLon894jd/98x2a/5D0z4tonuT9oH/+RJeWdRh4dATNr5QhjzHIt4EOwd4qY8Cqx2h9gpAY2kNcCL4G5hRAuA5HlAQPR8teQjxCECkZChdsVPL0kqW3/FC0rQgfP03f14C12Kg9jEnTGCBo9gPLwQsgb3mYDq8DZ4Ky/nsndoF0i3SUrtI5bxG34ni/xMpZg2oYwFkHgJVgC8hLRuloLfgC+EA1lmUfVbqDzwPZMgryEnEtznV7jUkdGcA5U8Gl4FWQhzxGJ3J6ay/5yrbIRtmah4h7+UAXQkzqwgAOORHcA7LKVjpYBU6qi21l6YHN8yPbxUFWkS/mlaW7jRPDAE6YAVaDd0BaeZOGN4IzgK4YdVrgYBr4DBAn4iatyCfyjS4gmJTJAKSPgAvBZpBWXqbhClDbk+wyOR02FtzoH9CVQFylFflIviriatowtbu9DaKPBxtBWnmehl8FehbDJIABcQW+Ap4DaUU+Oz5gOKuShgHI3QPoP/5OkEZGafQl0PnDqDT8q424A18EoyCNyHfaI+2RVgdrN4QBCD0Y3ALSiK7/nwf2HNK1bUrBgLgES0DauRX58uAUQ1uTQQYgcgHQYVFS0bX5ZcD+Ww2SmtNvcQuWAnGdVOTTBTmp0r1uIE/kax7ibZBEdPVEE2F28l1S2MC1TubXAHGfRHTIJR/bP7EkvoKwWeC3IKn8kQadm8NIwm2RdeFecyn3JnUa9eVrvdTCxMcARC0ESe+f2kabvwM2g+sjuOBy+QB8GcgnSUQ+X1iwes3uHoLOAW8lYZW668Ghzba8fdrLJ+CnIInI93okwWSQAYi5DCQ5hn2d+rqN3aTGDOCjC8B2ECqKgctqbFK5qkGGZsWvCWUvqvcgS71MwaQBDOCrj4I/Rb4LXSgmuj37DgG6nv4foYxF9X7E0mbBG5AY/Sris31BUl+rfjfnryLCbmIZKtpNn99Puq03jwF8uAQkOeRSjOzbPEszaIzBBwLdmxMq2j1/JMOQ1rRGDODLD4MHQp1PPcXKgTUyoThVZCi4H4TKrVS0RzqLc0klPcun4DehQUA9xUy7kwQDdRyaZM/xE+rrDR8mLWQA3+4FfgxCRbHTzsMtDNMJeZJzju9Tv9tXMVqYFIMmycfgeyBUFEPtOnHHIJGgq0+hcuUgkfa73QwQGFeEBgf1FEvt+eeJMaHzHLp57aJ2h4JZF8cAvteTh4qBENF7uZovWKoZ8hB5g0qfbr7FZkEWBoiBTwHFQog0e8YdC3VvVcjtI7oHR+/JNTEGphALp4KQe/IUW828dwvFFwUaSTWbALS8mMwAMbEEhP5zXTi5dc1/YZie5wi9Zf3rNTfH1KuIAWJoOQgRxVoznidBUT0JGPqw07UVcW/DNoQBYuk7IEQUc/V/MhElV4ZYQ50bQHsu1TUk4JqmpmIErAMhsrLW9mHBAhDyDPmvqafvdZgYA14GFCvgZuATXSJe4O2wigooplfzPO+zgHK9t9VuV6/CSQ0eUzED/hf4RDFYr1cKoZDOO/SuI5/oOeUjG+wnU71CBoidI0DIs+6Kxfqcj6DMChAiZ1fIrw3dAgYIsrNCAo06K2phLoroXbk69vPJqloobEo0ngEC7TpfsFGumKz2XcAooCsMugXZJ3pflX1NtvGhWQ8DiKW9Qcj7txSb1V0pZXDdXOaT16hQ1ldl6+FB06JwBhRTQLHlk2refINWM0DI9zk+VzhbNkAnGSD+PuvLjihGy/+IDwOvDlBubSc9Z0aXxgAxuCYgDleXppAGQqF5wHcj2UvUsa+eluqZ7g2mGAOKNZcoVk8shR0Gmgo02eeT80pRyAbpPAME4hJfMFKumC3+3c0McmmAMndSp7qrB50PmW4RoFgDijmfXFooM4yu3dmrHi30oMuxhSpinRsDAwwo5oDvISvFbnGH/XR+FfDJdwd0t5/GQCkMEJght8YXc8cvg+tFX1s82fEc5e8rhQ0bxBgYYCCK0Wc9MaoYzv9FhHQa8nSX3Ws14DT7WS4DxOliT4KoeHmuWtHhPuBF9eyQjbkOap0ZAykZIEbvcsSpivSIbn63PtHZ36hXj5ya0h5rZgzkygBx+klPrKr4klwGpSM9zfWUenTIvbkMZp0YAzkxQKz65uoU09mfaqUTfULLJ2fmZJd1YwzkwgABe4YvaCm/INNgdKBZ80c9Az1EeX2e3spksTVuCwOKSaBP9blEsZ1+dp3Gp7l6j8rObQupZke7GCA+9WZPn5yW2mp6Xu/p/QnK2/Uq+tRsWcO6MaDYBIpRl6xPpTc97g/ecPVM2cWpOrdGxkBJDBCjyzwxrBjfP7E6NFrq6Xgr5Xsn7tgaGAMlMqAYBb47QJbGqeQ6ufadW/xsZGRkR1zHtt0YqAMDUYz+zKOLL9YnNyfj5gLfA1EnTW5lv4yBejJALM8HLlGsHz5M+7g9iL654Hqe43Ey024tGcaobasdA8Tq3Sj1uEMxxfoXhpW7EmRY/d62db0VWxoDDWHAF7NhH+JhV5N6d9QQokzNDjJAXKc6bRi2B/Hdsn4Xu6wnOsixmdxgBojZUdTf4DFh8WD5sAQ5ZbDSwO/rB37bzw4zwH9mPYb9cfCXDaDBd5i1yGkDRuoTBq6rVzsoTz6p4hzVCpvIAHHwHvBvA/Hye34fXld70G06UAzHiWL/oFj9KfQ9jXVHbGMr6AwDxIm+1fE7MEweYeN76koGuimJXTLpMGuPAUPcu5gpU24bqG8/O8YAkaWPH/0SnBxj+gfZHnZFKKaDgjff7ul/Ug5YgnjYsuIJBgKSo1f5hN5KDZe+f/KTEmSX/hg/27Xfoex1MG1XA1vpFAP43nVYNRg6K+tKjmIYbB9UeOD37J7+/XuQhb2NMcsNXCp7M6bMNreYAYLHd1jVb/1b/Ph5/4Y6rUcxfJdHp1250J8gw3ctEz35jt0matpaaxhImByyewVBeH/NCUh+mAURTw3sZgZ/zqu50aZezgwoOUDc1arB+NDvb+asQiHdoae+TuCSpyYNTM2DXLUp2wamTmpkP1rNAP5uZXLIaYrlKKZZxMrEfAhVTomt9m7Bza2OBjNuEgO4PGlyfGNSBw34gY03e2J+/I6S3jnIcR6bHvSUW3FLGFByYIprnmPQ0m9xznHV4MYG/PbF9HhOhCbIIw0w2FTMyEDK5KjtJV0PHb6YnthpQMwfPLubuFlTjw5W3BQGlBygdSfkcfxj68nAJX/Y1ZZavo/iHLKrsq20jgH8nzQ5vtV0ErD5EFd2KCfGbWRFtyu7ZFvTyTD94xnA8Z1Ljh4b2O7bMRygS14nuLKDsv/pdWjLdjGAbzubHPKkYtsT+yfoJH2ux+2+kxlPcyuuIwNKDvRKcrXqaq5W/UMdbcmgky+25ypBDvMM4OvE09yK68ZAiuTQpdy2JYfc4ovtw5QgvhPwR+vmYNMnPQMpk6Opl3J9RPli+xAlyAxPL5s85VbcEAZSJIcOq9qaHPKaL7ZnhCTIlob439R0MJAyOdp4WNXPki+2xxNkZn+LIeubh2yzTQ1iwJIj1lm+2J6pS10PAZdk/45brH5WUDQDOLbTl3Jd/MKNvr/pkoeUIM84amx3DWBl9WYAvyZNjm/W26L8tYMj1+O3zyhBNjkSZGv+KlmPZTCQIjkaf/tIGl7hSd+5iZNNSpBX4krZ/kKaQa1NtQzgt6R7jk4mh7ykGHfE/yuqoLeVxMnkRw+r9buNHsAAjrTkCOCpVwW+XI+av64E2RmXHWx/rNeRLevPAP6y5EjoJsW4I/53WoIkJLSu1S050nkmJEHsECsdt7VpZcmR3hVw5z3Ecp2kv5h+aGtZBgOWHNlYhr8XQZyMn6TbZd5sHFfWGq/aOUdG9uHQe5n36bj0YbtNFGZ0QFHNLTnyYVYx7oj/p3WS3rpbTbBpDvgYaOXHfrAr6Z6jczPkIekDj0G3mmygokt8z4uE6FJKHYw4AtzRZ8zbrF8LavtBl6TEYIslR1LSYurD5aHAJRu0B7nRVYOyY2L6r9Vm9NQnwR6NseU2tu9bK4VTKIMNSZOjszPkIfTC5zEx8dLbfKOeB/HeEx8yWA3qnIcOR8XosZDtN2F1Y5ME3ZM+Q97Wx2RjXJxqs+9hwS0hCTIr1dDlNzreM2RjkyRFcrT9SUCPq4OLfbG9WQnim+vQN+eaID47ZEPjkiRlcrT9ScC84tEX25uUIE96RjvaU16X4v9CkZ0ByjQmSSw5AryZrYovtp/USXprXhyHLVeAUKn1iTtG2Al5tuD3toZj74vjlCCtevUo9vwzCJVaJgnKW3J4wzt7BXje5gmUA8ZHoZLvHaWNmQuRQdjT2CRBd0uO7LHv7QGew15eHQVU6z5/0MQkseTwxnVuFeD6ZOCSSZ8/+IGrJmXLctOsxI7QuzF7EnS1PUe5sbHME/M/kDq6iiXxfbbXd7b/bi81+8tbAf8elf4lUK3Krm4pOdAxyYuk/6ml78oNdFUu1XwxPZETOKjVH/HEvtruSZQc4HcgVOz2kRzyA7KDPuI5PhSVW/8ZaGysXZKgU9LkuDqH2Oh8F/A+FfiuYB00iSgauB49pHjsryY1aOAPbKhNkqBL0uSwPUdOMQf384BLntxtKGr/0NWCsst3a9TADdhReZKgQ9LksD1HjrEG/74J5fET9ElD0ugc4JJbJjVo8A+MrCxJGNuSo+LYwQe3ugKdsnN2U5GNsz2N9GjitN0aNnQDtpSeJIxpyVFxvCiGgetNPhSP/cVQNSmIe+BIjSR/PbRhQzdiT2lJwliWHDWIE8UwcEn8Z9lo9e+ulpRdVQMbc1UBmwpPEsaw5MjVa+k7wxf/CFyyKrZ3Wi12taTs97GNG1yAXYUlCX1bctQoNvBH/zsL+LmbLI5Vl6qaD3lntyYTG3awOj22gwYXYFfuSUKflhw1ign8sT9QDMeJYn/y/Meg/lS4L651tH3pYJu2/Ma+3JKEviw5ahYY+GRpFMNxi/u8KtNSr8lxyZ3eThpcAcMzJwl9WHLUMAbwy52uwKbsWq/aVJrv6US7obnejhpcAftSJwltLTlq6Hv8cjhwnT5QPDY/SHUqur6ZoI7a/O3scY6wMXGS0MaSIyjCyq+kmAUuCf8WDr3k11n5XOQ2IjwkTZIkd+Xa7SO5ecrfEb7M758+nc0F+eyO/LrXukbCJKF6kFhylOh1PHKSxyuK9WSnDTTwndDET6iUaHwZQ8FFkj2JxxdjlhxlOK1vDByyyuOUO/qqh63Soe+SmL6rsHdYb82vha15JIklR8mhoBgFrm+AUDyWfOqCRtPBG2rtkItLtrfS4eAhS5JYclTgPXx2sSN+VaQYTzf5TcP16sEhT1C2ZwV2VzYk9qZJEkuOCjym2ASKUZesT60avZ7m6jkq2/3e+dQjNqMhdidJEkuOityKn84NiN/TUqtH53p213cL/IPU6b0dJfVYTWuIzSFJYslRkWMVk+Ah4BLFdrbYpYMLXCNEZWdWxEOlw2L71Q5uvlGpch0fHL+c5fBNr+iCzDTRk77j5nuhwz2ZB2poB3BzMtBn7J4Bz4FbwKKGmtMatfHBvcAlium9cjGYji5xjRSVfTKXwawTYyAjA8TjqQHxeknGYSaaM9g+wPXBdemzcaKFrRkD1TFALN6tgHTIC5Ttk6uGdLjcMWCvKP5prFy1sc6MgeEMEIhn94LRsVw+vHWGrQy2H9jiGFRFz4L9MgxjTY2B1AwQe+8DOg90iWK4mBil45WukaOy76S20BoaAxkYIP6+GxCfxT2qweD6GpXvYztvUeeYDHZaU2MgMQPE3LFAsecSxe67X41KPEJgAwa41KVBVKY3R4wEdmnVjIFMDCjWgC61++TSTAOFNEYDza7f49OE8iUh/VkdYyArA8TaeQHxqJidmnWsoPYMdCJ4x6PUJsqL3Z0FaWuV2syAYgy85IlFxeq8UnlgwNUepVS8plSlbLDOMUCMrQ2Iw9WlE4NSM8DmAOU+W7pyNmAnGCD2PhcQf4rRGZUQwsAXBij4GnWOqkRBG7S1DCimgGLLJxdWRgKa6erBRp+GlOvGsc48nluZQzoyMLGkW5/+CHyi2Kz2aioKHA92+jSl/LqO+M/MLJgBYmlVQLwpJo8vWJWw7lFkRYDCqnJWWI9WyxgYzgAxFHKvlWLtyuE9VLAVZfT0lp6D8Im+LHpEBSrakC1ggNg5EoScdygWsz0pmDdfKHQweB74RBM27817fOuv3QwoZoDvISjFnmLw4FqygWILwNvAJ7+iQj5Pc9WSCVMqTwYUK+DXvqCiXOcdC/IcO/e+UDDkjl/Zug5Ue4Uhd+utw7wZUIyAG0CIFHenbl6GYYXOR34bYg117Nb4vIhvaT/EyLWBsaSYq9d5R5xPUHQW0GONIfK1uH5se7cZIHi+HhJA1FGszWoUWyi8EPjuz6fK+E2Pdudvo7xbvLLExfkKjgBRjC0sXqMCRkDxc4Dvrl9xICNPLUAF67KBDBALp0cxwcIpiq1mv9kTAy5zmjhR+Aarn2qgP03lHBkgBj4NFAshclmOQ1fXFZZeE2ItdXSZLvvb7qoz1UbOwAC+vyiKARZeuSbDUPVqiqm6VPcjr8kTFa6olwWmTdEM4PorJ9zvXVMstWuKAIP2BDd5TZ+o8D1W20VC0VHWwP7lY/D9Cbd71xRD7fzkBobtC0Juj++x9GNWbMa9gYEfojK+nQZ+0nN2wFKxs29I342tg4EHgvsDyOhV+Q0rxbzoq7EsNl9x+RTc2nNywFIxc2DzLQ+wQIaCJHuSB6j/4YCurUoDGMCXHwF/AqGiWOlGcvT8h8E63EpyTrKd+jah2COwoUt8qFf0yJehohhp92FVnC8xXCfuSa5uidQfgm4SFkdkA7bjM92untTXqt/OE/JQn0GArmKEzpNQdVy0e/5o6BhWr1oG8NUxQJ/qSyKKCbuK2XMdZGjGPeS2lB7J2k2f32tvy3oygI/05pvXe04LWCoG2jFDnrdLIEb3bum+rCTyUyofkrcu1l82BvDJoWB9EkdSV75v9r1V2Wjzt4agRSD0Vnmqjouedf9bUM67V/1mdLaGfAC+DEKeHafaLpHPF3aWuCSGQ5SeJwl96GoXw6zomeX5ScayuvkxAPcngZD3VVFtksjXzXqeIz/a0vUEYXoycSUIecadartEx7BrQDWvm0xnbqNbwfVMsBYkOYek+rhv5eNmPAlYRy9Bnl4E8TxIKnon61Jg5BfkWHELlgF91iypyKcLClKtW91CpF4pFPLerWFOepiNS0C3r6fnGDLiMuJU3KYR+bKer+bJkadSu4JQ/bdaAXaCNDJKoy8Ce0dwSs+JO/AlMArSiHwnH9pePaUPvM0gV+8C1r05aUVfQf0KsJfXedl+t4K4Al8FaQ51aTYu8lk93pUbaHdjq0G0Zt81AaXzjLTyMg31kI6dzMdEAtzo5Fsciau0Ih/JVzYrHsNzYZshfQZYDZJePaHJLnmTtRvBZ8C0wpRtSMdwoMOoM4A4ETdpRT6Rb+wfUNW+xwnzQMiHRanmlK2UrgKdm0uRzZHt4iCryBcnVh0XNn4fAzhEM7j6RPWrIA95jE50jf7IvmFatSrbIhtlax4i7uUDu6OhrpGCc/TV06tAmmvzNBsqo2zVRNjnwQfqartPL+ke2SBbRkFeIq71z8S+auxzQl3KcdZ+YDlIel8XTbzyEDWuA2eCmXWxeVAP6RbpKF3TzlnQNFbErThu7SPRrb+ygPP2IXAuAsvBnMEgyuH3GH08Ah6OlrvWR0ZGtubQv7cLbNSJ8NED+FD0uwgfP03f/wrWYOOfWbZWiiCvlmQRRHo7im6lvhyU9dXdzYylhBEeBy+DLUDbtXwN7IjwJktBoqtpgiY1hfcDJYH2VloeBHRu1EuKsvZijzHmt8E6EuMtlq2XziRIz5Mkik4gPwHOBacD7WFM4hnQHuIX4HpwM4nxdnzV9pV0LkH6XUiy7M9vfVhUyfIx0Gk+sL8nOmy8Cygp/pOkeLVX0LWlBUTkcZJlLqs6BBNae2k3MjduocPAdeAGkuKJuEpd2m4JMsTbJMt8Np8NTgF6OURbedKe4gFwG1hPUmxkadLHQFsd32ditlWSRSfEC8GiCGWd4GdTPL61TrSVEMLtJIUuHJjEMGAJEkNM3GYSZjZl/QkzJ65uTbbrkmx/QjxbE70aoYYlSEY3RXuY4+imh2NZ1znM9IxdJ22+jQY6h7gf3NeD7SFgIoNYgmQgz9WUxNFtF4eBudHyEJaawxB68xmage6f89C6RPMhmh/pzY38H+v98ydafxE8CUa1JBFeYWmSMwP/D9ulVgFLdbgRAAAAAElFTkSuQmCC";
var loading = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA6AN+QRH69xUI7Z7x2sWzcWYvphvj4MxiXVIiGAuH08K9ibepmI+Oc2tKHQ+helY5NykfkF5N9AAABmhJREFUeNrdnWlT4kAQhjt3CARIwg1yH3Lpqv3/f9tabsYJMUGCsM6b56NVVjGV6WP6pLvTijTb8bS2X29U581BaBEmLY9T1LrVpukSGhFn06n2W4SExvn4q2ecL6PxeSbrPwRBxN/iG0NSHyHs55kGB1KdVqTxBTjLnU6qo1csdx+ag8CIujXOxe+pf5QEIzPYNDo5OnlbITD2/WObM9AeHwiOYbDMEB/PgHRiwo3GaWpbKFkR6LvI4RTdF4Lk0JtyihXk/Xrnbe2kRKVHoLjjlImphwSKZXicxH4iVB4eNU6ywPHy01SME1nRTIJluOAEtgFpU/4xaHOC2YhgeRjbJble9Dplid0nXHSDEzQJGFNjyZyAGc1YUgVWXqfXqwH3dsy7XnVUf/iD1oQ/mUCfxKonvgn07ao0EnKCLPGkVxO6i6AZl8SeEDVLYuNPToLsd53cLhvZF35HSrwG/D55R5daeAathKkiLaNB0FiTsohJS/sUE9wo0QcmCxaEjcEC3BjkB/rsU0xg48L/GH2KSZ2wkWICm3VIi4kH/V4k0qccsyJsXm2OAc0zfnWEu9g+Fz20OWZL2Aw4pgYu77QoiRtMQ0eoYMC6lWxj8kjYVDThz0PHHt95LIvievBEpRq4LSGjLL6jJepWfPRP8umo7AgbV9iSJYGzFvXC6lc+n+eNYwICR7ywpgROj2MQOgTOcXBK4gNTJEwJgbPjGJBOmlx04QOvCZyNKIkgcEKOAc8yyEa0ZwJnWZKgIwVlUcBDjsHqMc2gXY5yCKJjOaqGiPoiBkHg7EtjSUQ/I3gJAVGjHGVcRJuySLswiV0CxxQ5HwJnxDHoySsSoVPwkg6iLv9jQOBEZdG/Rjkqm4mCshgSkXRvEDhmSeq3KCzLa1c48u2PASxaBPvodUXGPR6J46GexBLVHMKiRIRJRWTgSBOfBhNd1M+SqKwDzVfLg4i8D2h5irxaHrZDL4Vdww6oSPUroo57gkQaRB/7iSVdlDp2iEs6jQ3st6J046vYJR3yYTXHrh+QT90mQztbMvgwwA46ynBQiB10lAE6i2MgW2CTIdMasiFJBrG7yPo3mVYQhmRDgCQTPU3kEFcy9WYip3iTyVCXcR350/R0B7cOIlkwIKX9SHDIEo7ksdoEx2lRTQu2Ejhd5uSjmsR04dkKtYMhXQr4zKBh03RxpsuYkZSv5bITTHfrawHzWtwtqEh2Rkn5H8jOq6wifx8xApHVdmEAdl5lNsIMARstZWtSVufVjGDIbhYLOOaNQMhp3zs4aN0xeQ2VS/F3kMyVbHHNU8pjgiC36Vj3oWZ0nGkD70HN6DjTmK93gGZ0nB2VsAWa0SGHV2DP6Pjmpz7CSIkc8HL+4jmKh1O+HbljgIxBlEOQ8pUzQtL9+7FUUnG1FVbBlwwK07sAjsr8ktFtLxxjv5KiXDhMb8UxU0UDKpeON7Q8xY3JxQMne8wqp6sLjACtqzxEu8hQ1tBWd4h2sTG5T+oO0S44uHihqpgUHSXtyiHaSpX+Fx/ubdoqLmG5Zty6oeASlqsG4Osz5ZawXLmSYKSptoSl8JIIKSZKOcLXr+3oK7WEJblIBXmdzM9+y5xVuV0/XTZ0VGNlXHL90/FKjafCyrhbLOSq1H9/ZdxtVqRZyZVxLSqKQkvrrPoPdpAqtUYweUO50Ipb1RY76sffWXGbXrV51G8SECt+vVRcftrkotdL1XW0fZsl01f6BoUXBJ98ZXv8QLmovrL5RO64PaAc1F+irRs2J1gMKQuIteYn14sdI0etAyyadxecRHtMiQrQ6v8nm5N4hkU3xTI8TmI/0Z0I63xCbezSzXDHNT6hHtL96Hl8grN+o5vwtnb4BK9Hd8VacYpZ70A/5NCbcYqVRffmpcspnGin09Xou8jhFN0X+g/o2xqn0TbhlWK30ThNbavT3ZHqJY22DIYFTV+wFKcoqAzvpPAl7WN/Txex7x/bLMk1T/ensu1wJp3GJjBHlMvIDDaNvP/dVuj/o/d8zqXWjYxgYIZ716roesVy96E5CIyoW+Nc/J5Ov4O+Wzp8I5zlTqdf5BBM+QZMAwXaC4aGzz/CN5SpdPuznvCVTNaKLatwn1c+F8RfPatZwd7qVzt8IZ1qX6nk9xdcs1kVOjZPM1ebpppf4itWOGjOq42639Y8x7YdT2v79UZ13hyEFt2Fv6Loy9OZgJFyAAAAAElFTkSuQmCC";
var statusImg = {
  error: error,
  success: success,
  loading: loading
};

var AtToast =
/** @class */
function (_super) {
  __extends(AtToast, _super);

  function AtToast(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      var _a = _this.props,
          onClick = _a.onClick,
          status = _a.status;

      if (status === 'loading') {
        return;
      }

      if (onClick) {
        return onClick(event);
      }

      _this.close();
    };

    var isOpened = props.isOpened,
        duration = props.duration;

    if (isOpened) {
      _this.makeTimer(duration || 0);
    }

    _this._timer = null;
    _this.state = {
      _isOpened: isOpened
    };
    return _this;
  }

  AtToast.prototype.clearTimmer = function () {
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  };

  AtToast.prototype.makeTimer = function (duration) {
    var _this = this;

    if (duration === 0) {
      return;
    }

    this._timer = setTimeout(function () {
      _this.close();
    }, +duration);
  };

  AtToast.prototype.close = function () {
    var _isOpened = this.state._isOpened;

    if (_isOpened) {
      this.setState({
        _isOpened: false
      }, this.handleClose // TODO: Fix dirty hack
      );
      this.clearTimmer();
    }
  };

  AtToast.prototype.handleClose = function (event) {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event);
    }
  };

  AtToast.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened,
        duration = nextProps.duration;

    if (!isOpened) {
      this.close();
      return;
    }

    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      });
    } else {
      this.clearTimmer();
    }

    this.makeTimer(duration || 0);
  };

  AtToast.prototype.render = function () {
    var _a, _b;

    var _isOpened = this.state._isOpened;
    var _c = this.props,
        customStyle = _c.customStyle,
        text = _c.text,
        icon = _c.icon,
        status = _c.status,
        image = _c.image,
        hasMask = _c.hasMask;
    /* eslint-disable @typescript-eslint/no-non-null-assertion */

    var realImg = image || statusImg[status] || null;
    var isRenderIcon = !!(icon && !(image || statusImg[status]));
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    var bodyClass = classnames('toast-body', (_a = {
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
    }, _a["at-toast__body--" + status] = !!status, _a));
    var iconClass = classnames('at-icon', (_b = {}, _b["at-icon-" + icon] = icon, _b));
    return _isOpened ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-toast', this.props.className)
    }, hasMask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-toast__overlay'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: bodyClass,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'toast-body-content'
    }, realImg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'toast-body-content__img'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
      className: 'toast-body-content__img-item',
      src: realImg,
      mode: 'scaleToFill'
    })) : null, isRenderIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'toast-body-content__icon'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: iconClass
    })), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'toast-body-content__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], null, text))))) : null;
  };

  return AtToast;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
};
AtToast.propTypes = {
  text: propTypes.string,
  icon: propTypes.string,
  hasMask: propTypes.bool,
  image: propTypes.string,
  isOpened: propTypes.bool,
  duration: propTypes.number,
  status: propTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: propTypes.func,
  onClose: propTypes.func
};

var AtAccordion =
/** @class */
function (_super) {
  __extends(AtAccordion, _super);

  function AtAccordion(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      var open = _this.props.open;
      if (!_this.isCompleted) return;
      _this.props.onClick && _this.props.onClick(!open, event);
    };

    _this.isCompleted = true;
    _this.startOpen = false;
    _this.state = {
      wrapperHeight: 0
    };
    return _this;
  }

  AtAccordion.prototype.toggleWithAnimation = function () {
    var _this = this;

    var _a = this.props,
        open = _a.open,
        isAnimation = _a.isAnimation;
    if (!this.isCompleted || !isAnimation) return;
    this.isCompleted = false;
    delayQuerySelector('.at-accordion__body', 0).then(function (rect) {
      var height = parseInt(rect[0].height.toString());
      var startHeight = open ? height : 0;
      var endHeight = open ? 0 : height;
      _this.startOpen = false;

      _this.setState({
        wrapperHeight: startHeight
      }, function () {
        setTimeout(function () {
          _this.setState({
            wrapperHeight: endHeight
          }, function () {
            setTimeout(function () {
              _this.isCompleted = true;

              _this.setState({});
            }, 700);
          });
        }, 100);
      });
    });
  };

  AtAccordion.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.open !== this.props.open) {
      this.startOpen = !!nextProps.open && !!nextProps.isAnimation;
      this.toggleWithAnimation();
    }
  };

  AtAccordion.prototype.render = function () {
    var _a;

    var _b = this.props,
        customStyle = _b.customStyle,
        className = _b.className,
        title = _b.title,
        icon = _b.icon,
        hasBorder = _b.hasBorder,
        open = _b.open,
        note = _b.note;
    var wrapperHeight = this.state.wrapperHeight;
    var rootCls = classnames('at-accordion', className);
    var prefixClass = icon && icon.prefixClass || 'at-icon';
    var iconCls = classnames((_a = {}, _a[prefixClass] = true, _a[prefixClass + "-" + (icon && icon.value)] = icon && icon.value, _a['at-accordion__icon'] = true, _a));
    var headerCls = classnames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    });
    var arrowCls = classnames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!open
    });
    var contentCls = classnames('at-accordion__content', {
      'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
    });
    var iconStyle = {
      color: icon && icon.color || '',
      fontSize: icon && icon.size + "px" || ''
    };
    var contentStyle = {
      height: wrapperHeight + "px"
    };

    if (this.isCompleted) {
      contentStyle.height = '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: headerCls,
      onClick: this.handleClick
    }, icon && icon.value && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: iconCls,
      style: iconStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-accordion__info'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-accordion__info__title'
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-accordion__info__note'
    }, note)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: arrowCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-chevron-down'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      style: contentStyle,
      className: contentCls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-accordion__body'
    }, this.props.children)));
  };

  return AtAccordion;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: {
    value: ''
  },
  hasBorder: true,
  isAnimation: true
};
AtAccordion.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  open: propTypes.bool,
  isAnimation: propTypes.bool,
  title: propTypes.string,
  note: propTypes.string,
  icon: propTypes.object,
  hasBorder: propTypes.bool,
  onClick: propTypes.func
};

var AtSlider =
/** @class */
function (_super) {
  __extends(AtSlider, _super);

  function AtSlider(props) {
    var _this = _super.call(this, props) || this;

    var _a = props.value,
        value = _a === void 0 ? 0 : _a,
        _b = props.min,
        min = _b === void 0 ? 0 : _b,
        _c = props.max,
        max = _c === void 0 ? 100 : _c;
    _this.state = {
      _value: AtSlider.clampNumber(value, min, max)
    };
    return _this;
  }

  AtSlider.clampNumber = function (value, lower, upper) {
    return Math.max(lower, Math.min(upper, value));
  };

  AtSlider.prototype.handleChanging = function (e) {
    var _value = this.state._value;
    var value = e.detail.value;

    if (value !== _value) {
      this.setState({
        _value: value
      });
    }

    this.props.onChanging && this.props.onChanging(value);
  };

  AtSlider.prototype.handleChange = function (e) {
    var value = e.detail.value;
    this.setState({
      _value: value
    });
    this.props.onChange && this.props.onChange(value);
  };

  AtSlider.prototype.UNSAFE_componentWillReceiveProps = function (props) {
    var _a = props.value,
        value = _a === void 0 ? 0 : _a,
        _b = props.min,
        min = _b === void 0 ? 0 : _b,
        _c = props.max,
        max = _c === void 0 ? 100 : _c;
    this.setState({
      _value: AtSlider.clampNumber(value, min, max)
    });
  };

  AtSlider.prototype.render = function () {
    var _value = this.state._value;
    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        min = _a.min,
        max = _a.max,
        step = _a.step,
        disabled = _a.disabled,
        activeColor = _a.activeColor,
        backgroundColor = _a.backgroundColor,
        blockSize = _a.blockSize,
        blockColor = _a.blockColor,
        showValue = _a.showValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-slider': true,
        'at-slider--disabled': disabled
      }, className),
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-slider__inner'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Slider */ "k"], {
      min: min,
      max: max,
      step: step,
      value: _value,
      disabled: disabled,
      activeColor: activeColor,
      backgroundColor: backgroundColor,
      blockSize: blockSize,
      blockColor: blockColor,
      onChanging: this.handleChanging.bind(this),
      onChange: this.handleChange.bind(this)
    })), showValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-slider__text'
    }, "" + _value));
  };

  return AtSlider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSlider.defaultProps = {
  customStyle: '',
  className: '',
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  disabled: false,
  activeColor: '#6190e8',
  backgroundColor: '#e9e9e9',
  blockSize: 28,
  blockColor: '#ffffff',
  showValue: false
};
AtSlider.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  value: propTypes.number,
  disabled: propTypes.bool,
  activeColor: propTypes.string,
  backgroundColor: propTypes.string,
  blockSize: propTypes.number,
  blockColor: propTypes.string,
  showValue: propTypes.bool,
  onChange: propTypes.func,
  onChanging: propTypes.func
};

var AtSwipeActionOptions =
/** @class */
function (_super) {
  __extends(AtSwipeActionOptions, _super);

  function AtSwipeActionOptions() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSwipeActionOptions.prototype.render = function () {
    var rootClass = classnames('at-swipe-action__options', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      id: "swipeActionOptions-" + this.props.componentId,
      className: rootClass,
      style: this.props.customStyle
    }, this.props.children);
  };

  return AtSwipeActionOptions;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtSwipeAction =
/** @class */
function (_super) {
  __extends(AtSwipeAction, _super);

  function AtSwipeAction(props) {
    var _this = _super.call(this, props) || this;

    _this.handleOpened = function (event) {
      var onOpened = _this.props.onOpened;

      if (typeof onOpened === 'function') {
        onOpened(event);
      }
    };

    _this.handleClosed = function (event) {
      var onClosed = _this.props.onClosed;

      if (typeof onClosed === 'function') {
        onClosed(event);
      }
    };

    _this.handleClick = function (item, index, event) {
      var _a = _this.props,
          onClick = _a.onClick,
          autoClose = _a.autoClose;

      if (typeof onClick === 'function') {
        onClick(item, index, event);
      }

      if (autoClose) {
        _this._reset(false); // TODO: Check behavior


        _this.handleClosed(event);
      }
    };

    _this.onTouchEnd = function (e) {
      if (_this.moveX === -_this.maxOffsetSize) {
        _this._reset(true);

        _this.handleOpened(e);

        return;
      }

      if (_this.moveX === 0) {
        _this._reset(false);

        _this.handleClosed(e);

        return;
      }

      if (_this.state._isOpened && _this.moveX < 0) {
        _this._reset(false);

        _this.handleClosed(e);

        return;
      }

      if (Math.abs(_this.moveX) < _this.maxOffsetSize * _this.moveRatio) {
        _this._reset(false);

        _this.handleClosed(e);
      } else {
        _this._reset(true);

        _this.handleOpened(e);
      }
    };

    _this.onChange = function (e) {
      _this.moveX = e.detail.x;
    };

    var isOpened = props.isOpened,
        maxDistance = props.maxDistance,
        areaWidth = props.areaWidth,
        moveRatio = props.moveRatio;
    _this.maxOffsetSize = maxDistance;
    _this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: !!isOpened ? -_this.maxOffsetSize : 0,
      _isOpened: !!isOpened,
      needAnimation: false
    };
    _this.moveX = _this.state.offsetSize;
    _this.eleWidth = areaWidth;
    _this.moveRatio = moveRatio || 0.5;
    return _this;
  }

  AtSwipeAction.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var isOpened = nextProps.isOpened;
    var _isOpened = this.state._isOpened;

    if (isOpened !== _isOpened) {
      this.moveX = isOpened ? 0 : this.maxOffsetSize;

      this._reset(!!isOpened); // TODO: Check behavior

    }
  };

  AtSwipeAction.prototype._reset = function (isOpened) {
    var _this = this;

    if (isOpened) {
      if (false) {} else {
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        });
      }
    } else {
      this.setState({
        offsetSize: this.moveX
      }, function () {
        _this.setState({
          offsetSize: 0,
          _isOpened: false
        });
      });
    }
  };

  AtSwipeAction.prototype.render = function () {
    var _this = this;

    var _a = this.state,
        componentId = _a.componentId,
        offsetSize = _a.offsetSize;
    var options = this.props.options;
    var rootClass = classnames('at-swipe-action', this.props.className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      id: "swipeAction-" + componentId,
      className: rootClass,
      style: {
        width: this.eleWidth + "px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* MovableArea */ "f"], {
      className: 'at-swipe-action__area',
      style: {
        width: this.eleWidth + this.maxOffsetSize + "px",
        transform: "translate(-" + this.maxOffsetSize + "px, 0)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* MovableView */ "g"], {
      className: 'at-swipe-action__content',
      direction: 'horizontal',
      damping: 50,
      x: offsetSize,
      onTouchEnd: this.onTouchEnd,
      onChange: this.onChange,
      style: {
        width: this.eleWidth + "px",
        left: this.maxOffsetSize + "px"
      }
    }, this.props.children, Array.isArray(options) && options.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtSwipeActionOptions, {
      options: options,
      componentId: componentId,
      customStyle: {
        transform: "translate(" + this.maxOffsetSize + "px, 0)",
        opacity: 1
      }
    }, options.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        key: item.text + "-" + key,
        style: item.style,
        onClick: function onClick(e) {
          return _this.handleClick(item, key, e);
        },
        className: classnames('at-swipe-action__option', item.className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'option__text'
      }, item.text));
    })) : null)));
  };

  return AtSwipeAction;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
};
AtSwipeAction.propTypes = {
  isOpened: propTypes.bool,
  disabled: propTypes.bool,
  autoClose: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    style: propTypes.oneOfType([propTypes.object, propTypes.string]),
    className: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.array])
  })),
  onClick: propTypes.func,
  onOpened: propTypes.func,
  onClosed: propTypes.func
};

var AtSearchBar =
/** @class */
function (_super) {
  __extends(AtSearchBar, _super);

  function AtSearchBar(props) {
    var _this = _super.call(this, props) || this;

    _this.handleFocus = function (event) {
      _this.setState({
        isFocus: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    };

    _this.handleBlur = function (event) {
      _this.setState({
        isFocus: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    };

    _this.handleChange = function (e) {
      _this.props.onChange(e.target.value, e);
    };

    _this.handleClear = function (event) {
      if (_this.props.onClear) {
        _this.props.onClear(event);
      } else {
        _this.props.onChange('', event);
      }
    };

    _this.handleConfirm = function (event) {
      _this.props.onConfirm && _this.props.onConfirm(event);
    };

    _this.handleActionClick = function (event) {
      _this.props.onActionClick && _this.props.onActionClick(event);
    };

    _this.state = {
      isFocus: !!props.focus
    };
    return _this;
  }

  AtSearchBar.prototype.render = function () {
    var _a = this.props,
        value = _a.value,
        placeholder = _a.placeholder,
        maxLength = _a.maxLength,
        fixed = _a.fixed,
        disabled = _a.disabled,
        showActionButton = _a.showActionButton,
        _b = _a.actionName,
        actionName = _b === void 0 ? '搜索' : _b,
        inputType = _a.inputType,
        // 处理issue#464
    className = _a.className,
        customStyle = _a.customStyle;
    var isFocus = this.state.isFocus;
    var fontSize = 14;
    var rootCls = classnames('at-search-bar', {
      'at-search-bar--fixed': fixed
    }, className);
    var placeholderWrapStyle = {};
    var actionStyle = {};

    if (isFocus || !isFocus && value) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
      placeholderWrapStyle.flexGrow = 0;
    } else if (!isFocus && !value) {
      placeholderWrapStyle.flexGrow = 1;
      actionStyle.opacity = 0;
      actionStyle.marginRight = "-" + ((actionName.length + 1) * fontSize + fontSize / 2 + 10) + "px";
    }

    if (showActionButton) {
      actionStyle.opacity = 1;
      actionStyle.marginRight = "0";
    }

    var clearIconStyle = {
      display: 'flex'
    };
    var placeholderStyle = {
      visibility: 'hidden'
    };

    if (!value.length) {
      clearIconStyle.display = 'none';
      placeholderStyle.visibility = 'visible';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-search-bar__input-cnt'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-search-bar__placeholder-wrap',
      style: placeholderWrapStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-search'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-search-bar__placeholder',
      style: placeholderStyle
    }, isFocus ? '' : placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Input */ "d"], {
      className: 'at-search-bar__input',
      type: inputType,
      confirmType: 'search',
      value: value,
      focus: isFocus,
      disabled: disabled,
      maxlength: maxLength,
      onInput: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onConfirm: this.handleConfirm
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-search-bar__clear',
      style: clearIconStyle,
      onTouchStart: this.handleClear
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-icon at-icon-close-circle'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-search-bar__action',
      style: actionStyle,
      onClick: this.handleActionClick
    }, actionName));
  };

  return AtSearchBar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  inputType: 'text',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSearchBar.propTypes = {
  value: propTypes.string,
  placeholder: propTypes.string,
  maxLength: propTypes.number,
  fixed: propTypes.bool,
  focus: propTypes.bool,
  disabled: propTypes.bool,
  showActionButton: propTypes.bool,
  actionName: propTypes.string,
  inputType: propTypes.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onConfirm: propTypes.func,
  onActionClick: propTypes.func,
  onClear: propTypes.func
};

var AtLoadMore =
/** @class */
function (_super) {
  __extends(AtLoadMore, _super);

  function AtLoadMore() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtLoadMore.prototype.onClick = function () {
    this.props.onClick && this.props.onClick(arguments);
  };

  AtLoadMore.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        loadingText = _a.loadingText,
        moreText = _a.moreText,
        status = _a.status,
        moreBtnStyle = _a.moreBtnStyle,
        noMoreTextStyle = _a.noMoreTextStyle,
        noMoreText = _a.noMoreText;
    var component = null;

    if (status === 'loading') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtActivityIndicator, {
        mode: 'center',
        content: loadingText
      });
    } else if (status === 'more') {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-load-more__cnt'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtButton, {
        full: true,
        onClick: this.onClick.bind(this),
        customStyle: moreBtnStyle
      }, moreText));
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-load-more__tip',
        style: noMoreTextStyle
      }, noMoreText);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-load-more', className),
      style: customStyle
    }, component);
  };

  return AtLoadMore;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtLoadMore.defaultProps = {
  customStyle: '',
  className: '',
  noMoreTextStyle: '',
  moreBtnStyle: '',
  status: 'more',
  loadingText: '加载中',
  moreText: '查看更多',
  noMoreText: '没有更多'
};
AtLoadMore.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  noMoreTextStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  moreBtnStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  status: propTypes.oneOf(['more', 'loading', 'noMore']),
  loadingText: propTypes.string,
  moreText: propTypes.string,
  noMoreText: propTypes.string,
  onClick: propTypes.func
};

var AtDivider =
/** @class */
function (_super) {
  __extends(AtDivider, _super);

  function AtDivider() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtDivider.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        content = _a.content,
        height = _a.height,
        fontColor = _a.fontColor,
        fontSize = _a.fontSize,
        lineColor = _a.lineColor;
    var rootStyle = {
      height: height ? "" + pxTransform(Number(height)) : ''
    };
    var fontStyle = {
      color: fontColor,
      'font-size': fontSize ? "" + pxTransform(Number(fontSize)) : ''
    };
    var lineStyle = {
      backgroundColor: lineColor
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-divider', className),
      style: mergeStyle(rootStyle, customStyle)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-divider__content',
      style: fontStyle
    }, content === '' ? this.props.children : content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-divider__line',
      style: lineStyle
    }));
  };

  return AtDivider;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
};
AtDivider.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  content: propTypes.string,
  height: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontColor: propTypes.string,
  fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  lineColor: propTypes.string
};

var AtCountdownItem =
/** @class */
function (_super) {
  __extends(AtCountdownItem, _super);

  function AtCountdownItem() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCountdownItem.prototype.formatNum = function (num) {
    return num <= 9 ? "0" + num : "" + num;
  };

  AtCountdownItem.prototype.render = function () {
    var _a = this.props,
        num = _a.num,
        separator = _a.separator;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-countdown__item'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-countdown__time-box'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-countdown__time'
    }, this.formatNum(num))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'at-countdown__separator'
    }, separator));
  };

  return AtCountdownItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
};
AtCountdownItem.propTypes = {
  num: propTypes.number.isRequired,
  separator: propTypes.string
};

var toSeconds = function toSeconds(day, hours, minutes, seconds) {
  return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
};

var AtCountdown =
/** @class */
function (_super) {
  __extends(AtCountdown, _super);

  function AtCountdown(props) {
    var _this = _super.call(this, props) || this;

    var _a = _this.props,
        _b = _a.day,
        day = _b === void 0 ? 0 : _b,
        _c = _a.hours,
        hours = _c === void 0 ? 0 : _c,
        _d = _a.minutes,
        minutes = _d === void 0 ? 0 : _d,
        _e = _a.seconds,
        seconds = _e === void 0 ? 0 : _e;
    _this.seconds = toSeconds(day, hours, minutes, seconds);

    var _f = _this.calculateTime(),
        _day = _f.day,
        _hours = _f.hours,
        _minutes = _f.minutes,
        _seconds = _f.seconds;

    _this.state = {
      _day: _day,
      _hours: _hours,
      _minutes: _minutes,
      _seconds: _seconds
    };
    return _this;
  }

  AtCountdown.prototype.setTimer = function () {
    if (!this.timer) this.countdonwn();
  };

  AtCountdown.prototype.clearTimer = function () {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  AtCountdown.prototype.calculateTime = function () {
    var _a = __read([0, 0, 0, 0], 4),
        day = _a[0],
        hours = _a[1],
        minutes = _a[2],
        seconds = _a[3];

    if (this.seconds > 0) {
      day = this.props.isShowDay ? Math.floor(this.seconds / (60 * 60 * 24)) : 0;
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
      seconds = Math.floor(this.seconds) - day * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    }

    return {
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  };

  AtCountdown.prototype.countdonwn = function () {
    var _this = this;

    var _a = this.calculateTime(),
        day = _a.day,
        hours = _a.hours,
        minutes = _a.minutes,
        seconds = _a.seconds;

    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    });
    this.seconds--;

    if (this.seconds < 0) {
      this.clearTimer();
      this.props.onTimeUp && this.props.onTimeUp();
      return;
    }

    this.timer = setTimeout(function () {
      _this.countdonwn();
    }, 1000);
  };

  AtCountdown.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;
    var day = nextProps.day,
        hours = nextProps.hours,
        minutes = nextProps.minutes,
        seconds = nextProps.seconds;
    this.seconds = toSeconds(day, hours, minutes, seconds);
    this.clearTimer();
    this.setTimer();
  };

  AtCountdown.prototype.componentDidMount = function () {
    this.setTimer();
  };

  AtCountdown.prototype.componentWillUnmount = function () {
    this.clearTimer();
  };

  AtCountdown.prototype.componentDidHide = function () {
    this.clearTimer();
  };

  AtCountdown.prototype.componentDidShow = function () {
    this.setTimer();
  };

  AtCountdown.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        format = _a.format,
        isShowDay = _a.isShowDay,
        isCard = _a.isCard,
        isShowHour = _a.isShowHour;
    var _b = this.state,
        _day = _b._day,
        _hours = _b._hours,
        _minutes = _b._minutes,
        _seconds = _b._seconds;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames({
        'at-countdown': true,
        'at-countdown--card': isCard
      }, className),
      style: customStyle
    }, isShowDay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _day,
      separator: format.day
    }), isShowHour && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _hours,
      separator: format.hours
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _minutes,
      separator: format.minutes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCountdownItem, {
      num: _seconds,
      separator: format.seconds
    }));
  };

  return AtCountdown;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isCard: false,
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
};
AtCountdown.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isCard: propTypes.bool,
  isShowDay: propTypes.bool,
  isShowHour: propTypes.bool,
  format: propTypes.object,
  day: propTypes.number,
  hours: propTypes.number,
  minutes: propTypes.number,
  seconds: propTypes.number,
  onTimeUp: propTypes.func
};

var AtSteps =
/** @class */
function (_super) {
  __extends(AtSteps, _super);

  function AtSteps() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtSteps.prototype.handleClick = function (current, event) {
    this.props.onChange(current, event);
  };

  AtSteps.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        customStyle = _a.customStyle,
        className = _a.className,
        items = _a.items,
        current = _a.current;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-steps', className),
      style: customStyle
    }, !!items && items.map(function (item, i) {
      var _a;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        key: item.title,
        className: classnames({
          'at-steps__item': true,
          'at-steps__item--active': i === current,
          'at-steps__item--inactive': i !== current
        }),
        onClick: _this.handleClick.bind(_this, i)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__circular-wrap'
      }, i !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__left-line'
      }), item.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames({
          'at-icon': true,
          'at-icon-check-circle': item.status === 'success',
          'at-icon-close-circle': item.status === 'error',
          'at-steps__single-icon': true,
          'at-steps__single-icon--success': item.status === 'success',
          'at-steps__single-icon--error': item.status === 'error'
        })
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__circular'
      }, item.icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: classnames('at-icon', (_a = {}, _a["at-icon-" + item.icon.value] = item.icon.value, _a['at-steps__circle-icon'] = true, _a))
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
        className: 'at-steps__num'
      }, i + 1)), i !== items.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__right-line'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__title'
      }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-steps__desc'
      }, item.desc));
    }));
  };

  return AtSteps;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtSteps.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  current: propTypes.number,
  items: propTypes.array,
  onChange: propTypes.func
};

var AtCurtain =
/** @class */
function (_super) {
  __extends(AtCurtain, _super);

  function AtCurtain() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCurtain.prototype.onClose = function (e) {
    e.stopPropagation();
    this.props.onClose(e);
  };

  AtCurtain.prototype._stopPropagation = function (e) {
    e.stopPropagation();
  };

  AtCurtain.prototype.render = function () {
    var _a;

    var _b = this.props,
        className = _b.className,
        customStyle = _b.customStyle,
        isOpened = _b.isOpened,
        closeBtnPosition = _b.closeBtnPosition;
    var curtainClass = classnames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className);
    var btnCloseClass = classnames((_a = {
      'at-curtain__btn-close': true
    }, _a["at-curtain__btn-close--" + closeBtnPosition] = closeBtnPosition, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: curtainClass,
      style: customStyle,
      onClick: this._stopPropagation
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-curtain__container'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-curtain__body'
    }, this.props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: btnCloseClass,
      onClick: this.onClose.bind(this)
    }))));
  };

  return AtCurtain;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
};
AtCurtain.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  isOpened: propTypes.bool,
  closeBtnPosition: propTypes.string,
  onClose: propTypes.func
};

var AtMessage =
/** @class */
function (_super) {
  __extends(AtMessage, _super);

  function AtMessage(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000
    };
    _this._timer = null;
    return _this;
  }

  AtMessage.prototype.bindMessageListener = function () {
    var _this = this;

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.on('atMessage', function (options) {
      if (options === void 0) {
        options = {};
      }

      var message = options.message,
          type = options.type,
          duration = options.duration;
      var newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || _this.state._duration
      };

      _this.setState(newState, function () {
        clearTimeout(_this._timer);
        _this._timer = setTimeout(function () {
          _this.setState({
            _isOpened: false
          });
        }, _this.state._duration);
      });
    }); // 绑定函数

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.atMessage = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.trigger.bind(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter, 'atMessage');
  };

  AtMessage.prototype.componentDidShow = function () {
    this.bindMessageListener();
  };

  AtMessage.prototype.componentDidMount = function () {
    this.bindMessageListener();
  };

  AtMessage.prototype.componentDidHide = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };

  AtMessage.prototype.componentWillUnmount = function () {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.eventCenter.off('atMessage');
  };

  AtMessage.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle;
    var _b = this.state,
        _message = _b._message,
        _isOpened = _b._isOpened,
        _type = _b._type;
    var rootCls = classnames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, "at-message--" + _type, className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, _message);
  };

  return AtMessage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtMessage.defaultProps = {
  customStyle: '',
  className: ''
};
AtMessage.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string])
}; // 生成 jsx 二维矩阵

var generateMatrix = function generateMatrix(files, col, showAddBtn) {
  var matrix = [];
  var length = showAddBtn ? files.length + 1 : files.length;
  var row = Math.ceil(length / col);

  for (var i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      var lastArr = files.slice(i * col);

      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({
            type: 'btn',
            uuid: uuid()
          });
        } // 填补剩下的空列


        for (var j = lastArr.length; j < col; j++) {
          lastArr.push({
            type: 'blank',
            uuid: uuid()
          });
        }
      }

      matrix.push(lastArr);
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col));
    }
  }

  return matrix;
};

var ENV$3 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtImagePicker =
/** @class */
function (_super) {
  __extends(AtImagePicker, _super);

  function AtImagePicker() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.chooseFile = function () {
      var _a = _this.props,
          _b = _a.files,
          files = _b === void 0 ? [] : _b,
          multiple = _a.multiple,
          count = _a.count,
          sizeType = _a.sizeType,
          sourceType = _a.sourceType;
      var filePathName = ENV$3 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'; // const count = multiple ? 99 : 1

      var params = {};

      if (multiple) {
        params.count = 99;
      }

      if (count) {
        params.count = count;
      }

      if (sizeType) {
        params.sizeType = sizeType;
      }

      if (sourceType) {
        params.sourceType = sourceType;
      }

      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.chooseImage(params).then(function (res) {
        var targetFiles = res.tempFilePaths.map(function (path, i) {
          return {
            url: path,
            file: res[filePathName][i]
          };
        });
        var newFiles = files.concat(targetFiles);

        _this.props.onChange(newFiles, 'add');
      }).catch(_this.props.onFail);
    };

    _this.handleImageClick = function (idx) {
      _this.props.onImageClick && _this.props.onImageClick(idx, _this.props.files[idx]);
    };

    _this.handleRemoveImg = function (idx) {
      var _a = _this.props.files,
          files = _a === void 0 ? [] : _a;

      if (ENV$3 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
        window.URL.revokeObjectURL(files[idx].url);
      }

      var newFiles = files.filter(function (_, i) {
        return i !== idx;
      });

      _this.props.onChange(newFiles, 'remove', idx);
    };

    return _this;
  }

  AtImagePicker.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        files = _a.files,
        mode = _a.mode,
        _b = _a.length,
        length = _b === void 0 ? 4 : _b,
        _c = _a.showAddBtn,
        showAddBtn = _c === void 0 ? true : _c;
    var rowLength = length <= 0 ? 1 : length; // 行数

    var matrix = generateMatrix(files, rowLength, showAddBtn);
    var rootCls = classnames('at-image-picker', className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, matrix.map(function (row, i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-image-picker__flex-box',
        key: i + 1
      }, row.map(function (item, j) {
        return item.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-image-picker__flex-item',
          key: i * length + j
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-image-picker__item'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-image-picker__remove-btn',
          onClick: _this.handleRemoveImg.bind(_this, i * length + j)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Image */ "c"], {
          className: 'at-image-picker__preview-img',
          mode: mode,
          src: item.url,
          onClick: _this.handleImageClick.bind(_this, i * length + j)
        }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-image-picker__flex-item',
          key: 'empty_' + i * length + j
        }, item.type === 'btn' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'at-image-picker__item at-image-picker__choose-btn',
          onClick: _this.chooseFile
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'add-bar'
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
          className: 'add-bar'
        })));
      }));
    }));
  };

  return AtImagePicker;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtImagePicker.defaultProps = {
  className: '',
  customStyle: '',
  files: [],
  mode: 'aspectFill',
  showAddBtn: true,
  multiple: false,
  length: 4,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: function onChange() {}
};
AtImagePicker.propTypes = {
  className: propTypes.oneOfType([propTypes.string, propTypes.array]),
  customStyle: propTypes.oneOfType([propTypes.string, propTypes.object]),
  files: propTypes.array,
  mode: propTypes.oneOf(['scaleToFill', 'aspectFit', 'aspectFill', 'widthFix', 'top', 'bottom', 'center', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right']),
  showAddBtn: propTypes.bool,
  multiple: propTypes.bool,
  length: propTypes.number,
  onChange: propTypes.func,
  onImageClick: propTypes.func,
  onFail: propTypes.func,
  count: propTypes.number,
  sizeType: propTypes.array,
  sourceType: propTypes.array
};

var AtRange =
/** @class */
function (_super) {
  __extends(AtRange, _super);

  function AtRange(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (event) {
      if (_this.currentSlider && !_this.props.disabled) {
        var sliderValue = 0;
        var detail = getEventDetail(event);
        sliderValue = detail.x - _this.left;

        _this.setSliderValue(_this.currentSlider, sliderValue, 'onChange');
      }
    };

    var _a = props.min,
        min = _a === void 0 ? 0 : _a,
        _b = props.max,
        max = _b === void 0 ? 100 : _b; // range 宽度

    _this.width = 0; // range 到屏幕左边的距离

    _this.left = 0;
    _this.deltaValue = max - min;
    _this.currentSlider = '';
    _this.state = {
      aX: 0,
      bX: 0
    };
    return _this;
  }

  AtRange.prototype.handleTouchMove = function (sliderName, event) {
    if (this.props.disabled) return;
    event.stopPropagation();
    var clientX = event.touches[0].clientX;
    this.setSliderValue(sliderName, clientX - this.left, 'onChange');
  };

  AtRange.prototype.handleTouchEnd = function (sliderName) {
    if (this.props.disabled) return;
    this.currentSlider = sliderName;
    this.triggerEvent('onAfterChange');
  };

  AtRange.prototype.setSliderValue = function (sliderName, targetValue, funcName) {
    var _a, _b;

    var _this = this;

    var distance = Math.min(Math.max(targetValue, 0), this.width);
    var sliderValue = Math.floor(distance / this.width * 100);

    if (funcName) {
      this.setState((_a = {}, _a[sliderName] = sliderValue, _a), function () {
        return _this.triggerEvent(funcName);
      });
    } else {
      this.setState((_b = {}, _b[sliderName] = sliderValue, _b));
    }
  };

  AtRange.prototype.setValue = function (value) {
    var _a = this.props.min,
        min = _a === void 0 ? 0 : _a;
    var aX = Math.round((value[0] - min) / this.deltaValue * 100); // fix issue #670

    var bX = Math.round((value[1] - min) / this.deltaValue * 100); // fix issue #670

    this.setState({
      aX: aX,
      bX: bX
    });
  };

  AtRange.prototype.triggerEvent = function (funcName) {
    var _a = this.props.min,
        min = _a === void 0 ? 0 : _a;
    var _b = this.state,
        aX = _b.aX,
        bX = _b.bX;
    var a = Math.round(aX / 100 * this.deltaValue) + min; // fix issue #670

    var b = Math.round(bX / 100 * this.deltaValue) + min; // fix issue #670

    var result = [a, b].sort(function (x, y) {
      return x - y;
    });

    if (funcName === 'onChange') {
      this.props.onChange && this.props.onChange(result);
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange && this.props.onAfterChange(result);
    }
  };

  AtRange.prototype.updatePos = function () {
    var _this = this;

    delayQuerySelector('.at-range__container', 0).then(function (rect) {
      _this.width = Math.round(rect[0].width);
      _this.left = Math.round(rect[0].left);
    });
  };

  AtRange.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var value = nextProps.value;
    this.updatePos();

    if (this.props.value[0] !== value[0] || this.props.value[1] !== value[1]) {
      this.setValue(value);
    }
  };

  AtRange.prototype.componentDidMount = function () {
    var value = this.props.value;
    this.updatePos();
    this.setValue(value);
  };

  AtRange.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        sliderStyle = _a.sliderStyle,
        railStyle = _a.railStyle,
        trackStyle = _a.trackStyle,
        blockSize = _a.blockSize,
        disabled = _a.disabled;
    var rootCls = classnames('at-range', {
      'at-range--disabled': disabled
    }, className);
    var _b = this.state,
        aX = _b.aX,
        bX = _b.bX;
    var sliderCommonStyle = {
      width: blockSize ? blockSize + "PX" : '',
      height: blockSize ? blockSize + "PX" : '',
      marginLeft: blockSize ? -blockSize / 2 + "PX" : ''
    };

    var sliderAStyle = _assign(_assign({}, sliderCommonStyle), {
      left: aX + "%"
    });

    var sliderBStyle = _assign(_assign({}, sliderCommonStyle), {
      left: bX + "%"
    });

    var containerStyle = {
      height: blockSize ? blockSize + "PX" : ''
    };
    var smallerX = Math.min(aX, bX);
    var deltaX = Math.abs(aX - bX);
    var atTrackStyle = {
      left: smallerX + "%",
      width: deltaX + "%"
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle,
      onClick: this.handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-range__container',
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-range__rail',
      style: railStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-range__track',
      style: mergeStyle(atTrackStyle, trackStyle)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderAStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'aX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'aX')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-range__slider',
      style: mergeStyle(sliderBStyle, sliderStyle),
      onTouchMove: this.handleTouchMove.bind(this, 'bX'),
      onTouchEnd: this.handleTouchEnd.bind(this, 'bX')
    })));
  };

  return AtRange;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0
};
AtRange.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  sliderStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  railStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  trackStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  value: propTypes.array,
  min: propTypes.number,
  max: propTypes.number,
  disabled: propTypes.bool,
  blockSize: propTypes.number,
  onChange: propTypes.func,
  onAfterChange: propTypes.func
};
var ENV$4 = _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv();

var AtIndexes =
/** @class */
function (_super) {
  __extends(AtIndexes, _super);

  function AtIndexes(props) {
    var _this = _super.call(this, props) || this;

    _this.handleClick = function (item) {
      _this.props.onClick && _this.props.onClick(item);
    };

    _this.handleTouchMove = function (event) {
      event.stopPropagation();
      event.preventDefault();
      var list = _this.props.list;
      var pageY = event.touches[0].pageY;
      var index = Math.floor((pageY - _this.startTop) / _this.itemHeight);

      if (index >= 0 && index <= list.length && _this.currentIndex !== index) {
        _this.currentIndex = index;
        var key = index > 0 ? list[index - 1].key : 'top';
        var touchView = "at-indexes__list-" + key;

        _this.jumpTarget(touchView, index);
      }
    };

    _this.handleTouchEnd = function () {
      _this.currentIndex = -1;
    };

    _this.state = {
      _scrollIntoView: '',
      _scrollTop: 0,
      _tipText: '',
      _isShowToast: false,
      isWEB: _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.getEnv() === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB
    }; // 右侧导航高度

    _this.menuHeight = 0; // 右侧导航距离顶部高度

    _this.startTop = 0; // 右侧导航元素高度

    _this.itemHeight = 0; // 当前索引

    _this.currentIndex = -1;
    _this.listId = isTest() ? 'indexes-list-AOTU2018' : "list-" + uuid();
    return _this;
  }

  AtIndexes.prototype.jumpTarget = function (_scrollIntoView, idx) {
    var _this = this;

    var _a = this.props,
        _b = _a.topKey,
        topKey = _b === void 0 ? 'Top' : _b,
        list = _a.list;

    var _tipText = idx === 0 ? topKey : list[idx - 1].key;

    if (ENV$4 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      delayQuerySelector('.at-indexes', 0).then(function (rect) {
        var targetOffsetTop = _this.listRef.childNodes[idx].offsetTop;

        var _scrollTop = targetOffsetTop - rect[0].top;

        _this.updateState({
          _scrollTop: _scrollTop,
          _scrollIntoView: _scrollIntoView,
          _tipText: _tipText
        });
      });
      return;
    }

    this.updateState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText
    });
  };

  AtIndexes.prototype.__jumpTarget = function (key) {
    var list = this.props.list; // const index = _findIndex(list, ['key', key])

    var index = list.findIndex(function (item) {
      return item.key === key;
    });
    var targetView = "at-indexes__list-" + key;
    this.jumpTarget(targetView, index + 1);
  };

  AtIndexes.prototype.updateState = function (state) {
    var _this = this;

    var _a = this.props,
        isShowToast = _a.isShowToast,
        isVibrate = _a.isVibrate;
    var _scrollIntoView = state._scrollIntoView,
        _tipText = state._tipText,
        _scrollTop = state._scrollTop; // TODO: Fix dirty hack

    /* eslint-disable @typescript-eslint/no-non-null-assertion */

    this.setState({
      _scrollIntoView: _scrollIntoView,
      _tipText: _tipText,
      _scrollTop: _scrollTop,
      _isShowToast: isShowToast
    },
    /* eslint-enable @typescript-eslint/no-non-null-assertion */
    function () {
      clearTimeout(_this.timeoutTimer);
      _this.timeoutTimer = setTimeout(function () {
        _this.setState({
          _tipText: '',
          _isShowToast: false
        });
      }, 3000);
    });

    if (isVibrate) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.vibrateShort();
    }
  };

  AtIndexes.prototype.initData = function () {
    var _this = this;

    delayQuerySelector('.at-indexes__menu').then(function (rect) {
      var len = _this.props.list.length;
      _this.menuHeight = rect[0].height;
      _this.startTop = rect[0].top;
      _this.itemHeight = Math.floor(_this.menuHeight / (len + 1));
    });
  };

  AtIndexes.prototype.handleScroll = function (e) {
    if (e && e.detail) {
      this.setState({
        _scrollTop: e.detail.scrollTop
      });
    }
  };

  AtIndexes.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    if (nextProps.list.length !== this.props.list.length) {
      this.initData();
    }
  };

  AtIndexes.prototype.componentDidMount = function () {
    if (ENV$4 === _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.ENV_TYPE.WEB) {
      this.listRef = document.getElementById(this.listId);
    }

    this.initData();
  };

  AtIndexes.prototype.UNSAFE_componentWillMount = function () {
    this.props.onScrollIntoView && this.props.onScrollIntoView(this.__jumpTarget.bind(this));
  };

  AtIndexes.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        className = _a.className,
        customStyle = _a.customStyle,
        animation = _a.animation,
        topKey = _a.topKey,
        list = _a.list;
    var _b = this.state,
        _scrollTop = _b._scrollTop,
        _scrollIntoView = _b._scrollIntoView,
        _tipText = _b._tipText,
        _isShowToast = _b._isShowToast,
        isWEB = _b.isWEB;
    var toastStyle = {
      minWidth: pxTransform(100)
    };
    var rootCls = classnames('at-indexes', className);
    var menuList = list.map(function (dataList, i) {
      var key = dataList.key;
      var targetView = "at-indexes__list-" + key;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-indexes__menu-item',
        key: key,
        onClick: _this.jumpTarget.bind(_this, targetView, i + 1)
      }, key);
    });
    var indexesList = list.map(function (dataList) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        id: "at-indexes__list-" + dataList.key,
        className: 'at-indexes__list',
        key: dataList.key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'at-indexes__list-title'
      }, dataList.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtList, null, dataList.items && dataList.items.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtListItem, {
          key: item.name,
          title: item.name,
          onClick: _this.handleClick.bind(_this, item)
        });
      })));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootCls,
      style: customStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtToast, {
      customStyle: toastStyle,
      isOpened: _isShowToast,
      text: _tipText,
      duration: 2000
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-indexes__menu',
      onTouchMove: this.handleTouchMove,
      onTouchEnd: this.handleTouchEnd
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-indexes__menu-item',
      onClick: this.jumpTarget.bind(this, 'at-indexes__top', 0)
    }, topKey), menuList), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* ScrollView */ "j"], {
      className: 'at-indexes__body',
      id: this.listId,
      scrollY: true,
      scrollWithAnimation: animation,
      // eslint-disable-next-line no-undefined
      scrollTop: isWEB ? _scrollTop : undefined,
      scrollIntoView: !isWEB ? _scrollIntoView : '',
      onScroll: this.handleScroll.bind(this)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-indexes__content',
      id: 'at-indexes__top'
    }, this.props.children), indexesList));
  };

  return AtIndexes;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtIndexes.propTypes = {
  customStyle: propTypes.oneOfType([propTypes.object, propTypes.string]),
  className: propTypes.oneOfType([propTypes.array, propTypes.string]),
  animation: propTypes.bool,
  isVibrate: propTypes.bool,
  isShowToast: propTypes.bool,
  topKey: propTypes.string,
  list: propTypes.array,
  onClick: propTypes.func,
  onScrollIntoView: propTypes.func
};
AtIndexes.defaultProps = {
  customStyle: '',
  className: '',
  animation: false,
  topKey: 'Top',
  isVibrate: true,
  isShowToast: true,
  list: []
};
var dayjs_min = createCommonjsModule(function (module, exports) {
  !function (t, n) {
    module.exports = n();
  }(commonjsGlobal, function () {
    var t = "millisecond",
        n = "second",
        e = "minute",
        r = "hour",
        i = "day",
        s = "week",
        u = "month",
        o = "quarter",
        a = "year",
        h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        c = function c(t, n, e) {
      var r = String(t);
      return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;
    },
        d = {
      s: c,
      z: function z(t) {
        var n = -t.utcOffset(),
            e = Math.abs(n),
            r = Math.floor(e / 60),
            i = e % 60;
        return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
      },
      m: function m(t, n) {
        var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
            r = t.clone().add(e, u),
            i = n - r < 0,
            s = t.clone().add(e + (i ? -1 : 1), u);
        return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(h) {
        return {
          M: u,
          y: a,
          w: s,
          d: i,
          D: "date",
          h: r,
          m: e,
          s: n,
          ms: t,
          Q: o
        }[h] || String(h || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
        $ = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    },
        l = "en",
        m = {};

    m[l] = $;

    var y = function y(t) {
      return t instanceof v;
    },
        M = function M(t, n, e) {
      var r;
      if (!t) return l;
      if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);else {
        var i = t.name;
        m[i] = t, r = i;
      }
      return !e && r && (l = r), r || !e && l;
    },
        g = function g(t, n, e) {
      if (y(t)) return t.clone();
      var r = n ? "string" == typeof n ? {
        format: n,
        pl: e
      } : n : {};
      return r.date = t, new v(r);
    },
        D = d;

    D.l = M, D.i = y, D.w = function (t, n) {
      return g(t, {
        locale: n.$L,
        utc: n.$u,
        $offset: n.$offset
      });
    };

    var v = function () {
      function c(t) {
        this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
      }

      var d = c.prototype;
      return d.parse = function (t) {
        this.$d = function (t) {
          var n = t.date,
              e = t.utc;
          if (null === n) return new Date(NaN);
          if (D.u(n)) return new Date();
          if (n instanceof Date) return new Date(n);

          if ("string" == typeof n && !/Z$/i.test(n)) {
            var r = n.match(h);
            if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
          }

          return new Date(n);
        }(t), this.init();
      }, d.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, d.$utils = function () {
        return D;
      }, d.isValid = function () {
        return !("Invalid Date" === this.$d.toString());
      }, d.isSame = function (t, n) {
        var e = g(t);
        return this.startOf(n) <= e && e <= this.endOf(n);
      }, d.isAfter = function (t, n) {
        return g(t) < this.startOf(n);
      }, d.isBefore = function (t, n) {
        return this.endOf(n) < g(t);
      }, d.$g = function (t, n, e) {
        return D.u(t) ? this[n] : this.set(e, t);
      }, d.year = function (t) {
        return this.$g(t, "$y", a);
      }, d.month = function (t) {
        return this.$g(t, "$M", u);
      }, d.day = function (t) {
        return this.$g(t, "$W", i);
      }, d.date = function (t) {
        return this.$g(t, "$D", "date");
      }, d.hour = function (t) {
        return this.$g(t, "$H", r);
      }, d.minute = function (t) {
        return this.$g(t, "$m", e);
      }, d.second = function (t) {
        return this.$g(t, "$s", n);
      }, d.millisecond = function (n) {
        return this.$g(n, "$ms", t);
      }, d.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, d.valueOf = function () {
        return this.$d.getTime();
      }, d.startOf = function (t, o) {
        var h = this,
            f = !!D.u(o) || o,
            c = D.p(t),
            d = function d(t, n) {
          var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);
          return f ? e : e.endOf(i);
        },
            $ = function $(t, n) {
          return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
        },
            l = this.$W,
            m = this.$M,
            y = this.$D,
            M = "set" + (this.$u ? "UTC" : "");

        switch (c) {
          case a:
            return f ? d(1, 0) : d(31, 11);

          case u:
            return f ? d(1, m) : d(0, m + 1);

          case s:
            var g = this.$locale().weekStart || 0,
                v = (l < g ? l + 7 : l) - g;
            return d(f ? y - v : y + (6 - v), m);

          case i:
          case "date":
            return $(M + "Hours", 0);

          case r:
            return $(M + "Minutes", 1);

          case e:
            return $(M + "Seconds", 2);

          case n:
            return $(M + "Milliseconds", 3);

          default:
            return this.clone();
        }
      }, d.endOf = function (t) {
        return this.startOf(t, !1);
      }, d.$set = function (s, o) {
        var h,
            f = D.p(s),
            c = "set" + (this.$u ? "UTC" : ""),
            d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
            $ = f === i ? this.$D + (o - this.$W) : o;

        if (f === u || f === a) {
          var l = this.clone().set("date", 1);
          l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
        } else d && this.$d[d]($);

        return this.init(), this;
      }, d.set = function (t, n) {
        return this.clone().$set(t, n);
      }, d.get = function (t) {
        return this[D.p(t)]();
      }, d.add = function (t, o) {
        var h,
            f = this;
        t = Number(t);

        var c = D.p(o),
            d = function d(n) {
          var e = g(f);
          return D.w(e.date(e.date() + Math.round(n * t)), f);
        };

        if (c === u) return this.set(u, this.$M + t);
        if (c === a) return this.set(a, this.$y + t);
        if (c === i) return d(1);
        if (c === s) return d(7);
        var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
            l = this.$d.getTime() + t * $;
        return D.w(l, this);
      }, d.subtract = function (t, n) {
        return this.add(-1 * t, n);
      }, d.format = function (t) {
        var n = this;
        if (!this.isValid()) return "Invalid Date";

        var e = t || "YYYY-MM-DDTHH:mm:ssZ",
            r = D.z(this),
            i = this.$locale(),
            s = this.$H,
            u = this.$m,
            o = this.$M,
            a = i.weekdays,
            h = i.months,
            c = function c(t, r, i, s) {
          return t && (t[r] || t(n, e)) || i[r].substr(0, s);
        },
            d = function d(t) {
          return D.s(s % 12 || 12, t, "0");
        },
            $ = i.meridiem || function (t, n, e) {
          var r = t < 12 ? "AM" : "PM";
          return e ? r.toLowerCase() : r;
        },
            l = {
          YY: String(this.$y).slice(-2),
          YYYY: this.$y,
          M: o + 1,
          MM: D.s(o + 1, 2, "0"),
          MMM: c(i.monthsShort, o, h, 3),
          MMMM: h[o] || h(this, e),
          D: this.$D,
          DD: D.s(this.$D, 2, "0"),
          d: String(this.$W),
          dd: c(i.weekdaysMin, this.$W, a, 2),
          ddd: c(i.weekdaysShort, this.$W, a, 3),
          dddd: a[this.$W],
          H: String(s),
          HH: D.s(s, 2, "0"),
          h: d(1),
          hh: d(2),
          a: $(s, u, !0),
          A: $(s, u, !1),
          m: String(u),
          mm: D.s(u, 2, "0"),
          s: String(this.$s),
          ss: D.s(this.$s, 2, "0"),
          SSS: D.s(this.$ms, 3, "0"),
          Z: r
        };

        return e.replace(f, function (t, n) {
          return n || l[t] || r.replace(":", "");
        });
      }, d.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, d.diff = function (t, h, f) {
        var c,
            d = D.p(h),
            $ = g(t),
            l = 6e4 * ($.utcOffset() - this.utcOffset()),
            m = this - $,
            y = D.m(this, $);
        return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y);
      }, d.daysInMonth = function () {
        return this.endOf(u).$D;
      }, d.$locale = function () {
        return m[this.$L];
      }, d.locale = function (t, n) {
        if (!t) return this.$L;
        var e = this.clone(),
            r = M(t, n, !0);
        return r && (e.$L = r), e;
      }, d.clone = function () {
        return D.w(this.$d, this);
      }, d.toDate = function () {
        return new Date(this.valueOf());
      }, d.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, d.toISOString = function () {
        return this.$d.toISOString();
      }, d.toString = function () {
        return this.$d.toUTCString();
      }, c;
    }();

    return g.prototype = v.prototype, g.extend = function (t, n) {
      return t(n, v, g), g;
    }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
      return g(1e3 * t);
    }, g.en = m[l], g.Ls = m, g;
  });
});
/** Built-in value references. */

var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject_1(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

var _baseCreate = baseCreate;
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */

function baseLodash() {// No operation performed.
}

var _baseLodash = baseLodash;
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */

function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
var _LodashWrapper = LodashWrapper;
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }

  return array;
}

var _arrayPush = arrayPush;
/** `Object#toString` result references. */

var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;
/** Used for built-in method references. */

var objectProto$2 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = _baseIsArguments(function () {
  return arguments;
}()) ? _baseIsArguments : function (value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
var isArguments_1 = isArguments;
/** Built-in value references. */

var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */

function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */

function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];

    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }

  return result;
}

var _baseFlatten = baseFlatten;
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */

function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

var _apply = apply;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeMax$1 = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant(value) {
  return function () {
    return value;
  };
}

var constant_1 = constant;
/** Used to detect overreaching core-js shims. */

var coreJsData = _root['__core-js_shared__'];
var _coreJsData = coreJsData;
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;
/** Used for built-in method references. */

var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

var _toSource = toSource;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto$1 = Function.prototype,
    objectProto$3 = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }

  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */

function getNative(object, key) {
  var value = _getValue(object, key);

  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = function () {
  try {
    var func = _getNative(Object, 'defineProperty');

    func({}, '', {});
    return func;
  } catch (e) {}
}();

var _defineProperty = defineProperty;
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity(value) {
  return value;
}

var identity_1 = identity;
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};
var _baseSetToString = baseSetToString;
/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */

var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */

function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;
/* Built-in method references that are verified to be native. */

var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;
/** Used to store function metadata. */

var metaMap = _WeakMap && new _WeakMap();
var _metaMap = metaMap;
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

function noop() {// No operation performed.
}

var noop_1 = noop;
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */

var getData = !_metaMap ? noop_1 : function (func) {
  return _metaMap.get(func);
};
var _getData = getData;
/** Used to lookup unminified function names. */

var realNames = {};
var _realNames = realNames;
/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */

function getFuncName(func) {
  var result = func.name + '',
      array = _realNames[result],
      length = hasOwnProperty$4.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;

    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }

  return result;
}

var _getFuncName = getFuncName;
/** Used as references for the maximum length and index of an array. */

var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */

function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
} // Ensure `LazyWrapper` is an instance of `baseLodash`.


LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
var _LazyWrapper = LazyWrapper;
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

var _copyArray = copyArray;
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */

function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }

  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__ = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;
/** Used for built-in method references. */

var objectProto$5 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */

function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }

    if (hasOwnProperty$5.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }

  return new _LodashWrapper(value);
} // Ensure wrappers are instances of `baseLodash`.


lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;
var wrapperLodash = lodash;
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */

function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }

  if (func === other) {
    return true;
  }

  var data = _getData(other);

  return !!data && func === data[0];
}

var _isLaziable = isLaziable;
/** Error message constants. */

var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to compose bitmasks for function metadata. */

var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */

function createFlow(fromRight) {
  return _flatRest(function (funcs) {
    var length = funcs.length,
        index = length,
        prereq = _LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }

    while (index--) {
      var func = funcs[index];

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }

      if (prereq && !wrapper && _getFuncName(func) == 'wrapper') {
        var wrapper = new _LodashWrapper([], true);
      }
    }

    index = wrapper ? index : length;

    while (++index < length) {
      func = funcs[index];

      var funcName = _getFuncName(func),
          data = funcName == 'wrapper' ? _getData(func) : undefined;

      if (data && _isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
        wrapper = wrapper[_getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = func.length == 1 && _isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
      }
    }

    return function () {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray_1(value)) {
        return wrapper.plant(value).value();
      }

      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }

      return result;
    };
  });
}

var _createFlow = createFlow;
/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */

var flow = _createFlow();

var flow_1 = flow;
var TYPE_PRE_MONTH = -1;
var TYPE_NOW_MONTH = 0;
var TYPE_NEXT_MONTH = 1;
/** Used for built-in method references. */

var objectProto$6 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$6;
  return value === proto;
}

var _isPrototype = isPrototype;
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;
/** Used for built-in method references. */

var objectProto$7 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }

  var result = [];

  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }

  return result;
}

var _baseKeys = baseKeys;
/* Built-in method references that are verified to be native. */

var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;
/* Built-in method references that are verified to be native. */

var Map = _getNative(_root, 'Map');

var _Map = Map;
/* Built-in method references that are verified to be native. */

var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;
/* Built-in method references that are verified to be native. */

var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;
/** `Object#toString` result references. */

var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */

var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */


var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag || _Map && getTag(new _Map()) != mapTag || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;

        case mapCtorString:
          return mapTag;

        case promiseCtorString:
          return promiseTag;

        case setCtorString:
          return setTag;

        case weakMapCtorString:
          return weakMapTag;
      }
    }

    return result;
  };
}

var _getTag = getTag;
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;
var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer = moduleExports ? _root.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse_1;
  module.exports = isBuffer;
});
/** `Object#toString` result references. */

var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports && _freeGlobal.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});
/* Node.js helper references. */


var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
var isTypedArray_1 = isTypedArray;
/** `Object#toString` result references. */

var mapTag$2 = '[object Map]',
    setTag$2 = '[object Set]';
/** Used for built-in method references. */

var objectProto$8 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  if (isArrayLike_1(value) && (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }

  var tag = _getTag(value);

  if (tag == mapTag$2 || tag == setTag$2) {
    return !value.size;
  }

  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }

  for (var key in value) {
    if (hasOwnProperty$7.call(value, key)) {
      return false;
    }
  }

  return true;
}

var isEmpty_1 = isEmpty;

function handleActive(args, item) {
  var selectedDate = args.selectedDate;
  var _value = item._value;
  var start = selectedDate.start,
      end = selectedDate.end;
  var dayjsEnd = dayjs_min(end);
  var dayjsStart = start ? dayjs_min(start) : dayjsEnd;
  item.isSelected = _value.isSame(dayjsEnd) || _value.isSame(dayjsStart) || _value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd);
  item.isSelectedHead = _value.isSame(dayjsStart);
  item.isSelectedTail = _value.isSame(dayjsEnd);
  item.isToday = _value.diff(dayjs_min(Date.now()).startOf('day'), 'day') === 0;
  return item;
}

function handleMarks(args, item) {
  var options = args.options;
  var _value = item._value;
  var marks = options.marks;
  var markList = marks.filter(function (mark) {
    return dayjs_min(mark.value).startOf('day').isSame(_value);
  });
  item.marks = markList.slice(0, 1);
  return item;
} // export function handleSelectedDates (args: PluginArg): Calendar.Item {
// const { item, options } = args
// const { _value } = item
// const { selectedDates } = options
// if (selectedDates.length === 0) return args
// _forEach(selectedDates, date => {
//   const { isSelected, isHead, isTail } = item
//   // 如果当前 Item 已经具备了 三种状态下 无需继续判断 跳出循环
//   if (isSelected) {
//     return false
//   }
//   const { start, end } = date
//   const dayjsEnd = dayjs(end).startOf('day')
//   const dayjsStart = dayjs(start).startOf('day')
//   item.isSelected =
//     item.isSelected ||
//     (_value.isAfter(dayjsStart) && _value.isBefore(dayjsEnd))
//   item.isHead = item.isHead || _value.isSame(dayjsStart)
//   item.isTail = item.isTail || _value.isSame(dayjsEnd)
// })
//   return item
// }


function handleDisabled(args, item) {
  var options = args.options;
  var _value = item._value;
  var minDate = options.minDate,
      maxDate = options.maxDate;
  var dayjsMinDate = dayjs_min(minDate);
  var dayjsMaxDate = dayjs_min(maxDate);
  item.isDisabled = !!(minDate && _value.isBefore(dayjsMinDate)) || !!(maxDate && _value.isAfter(dayjsMaxDate));
  return item;
}

function handleValid(args, item) {
  var options = args.options;
  var _value = item._value;
  var validDates = options.validDates;

  if (!isEmpty_1(validDates)) {
    var isInclude = validDates.some(function (date) {
      return dayjs_min(date.value).startOf('day').isSame(_value);
    });
    item.isDisabled = !isInclude;
  }

  delete item._value;
  return item;
}

var plugins = [handleActive, handleMarks, handleDisabled, handleValid];
var TOTAL = 7 * 6;

function getFullItem(item, options, selectedDate, isShowStatus) {
  if (!isShowStatus) return item;
  var bindedPlugins = plugins.map(function (fn) {
    return fn.bind(null, {
      options: options,
      selectedDate: selectedDate
    });
  });
  return flow_1(bindedPlugins)(item);
}

function generateCalendarGroup(options) {
  return function (generateDate, selectedDate, isShowStatus) {
    var date = dayjs_min(generateDate);
    var format = options.format; // 获取生成日期的第一天 和 最后一天

    var firstDate = date.startOf('month');
    var lastDate = date.endOf('month');
    var preMonthDate = date.subtract(1, 'month');
    var list = [];
    var nowMonthDays = date.daysInMonth(); // 获取这个月有多少天

    var preMonthLastDay = preMonthDate.endOf('month').day(); // 获取上个月最后一天是周几
    // 生成上个月的日期

    for (var i_1 = 1; i_1 <= preMonthLastDay + 1; i_1++) {
      var thisDate = firstDate.subtract(i_1, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_PRE_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }

    list.reverse(); // 生成这个月的日期

    for (var i_2 = 0; i_2 < nowMonthDays; i_2++) {
      var thisDate = firstDate.add(i_2, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NOW_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    } // 生成下个月的日期


    var i = 1;

    while (list.length < TOTAL) {
      var thisDate = lastDate.add(i++, 'day').startOf('day');
      var item = {
        marks: [],
        _value: thisDate,
        text: thisDate.date(),
        type: TYPE_NEXT_MONTH,
        value: thisDate.format(format)
      };
      item = getFullItem(item, options, selectedDate, isShowStatus);
      list.push(item);
    }

    return {
      list: list,
      value: generateDate
    };
  };
}

var _a;

var MAP = (_a = {}, _a[TYPE_PRE_MONTH] = 'pre', _a[TYPE_NOW_MONTH] = 'now', _a[TYPE_NEXT_MONTH] = 'next', _a);

var AtCalendarList =
/** @class */
function (_super) {
  __extends(AtCalendarList, _super);

  function AtCalendarList() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleClick = function (item) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(item);
      }
    };

    _this.handleLongClick = function (item) {
      if (typeof _this.props.onLongClick === 'function') {
        _this.props.onLongClick(item);
      }
    };

    return _this;
  }

  AtCalendarList.prototype.render = function () {
    var _this = this;

    var list = this.props.list;
    if (!list || list.length === 0) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-calendar__list flex'
    }, list.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        key: "list-item-" + item.value,
        onClick: _this.handleClick.bind(_this, item),
        onLongPress: _this.handleLongClick.bind(_this, item),
        className: classnames('flex__item', "flex__item--" + MAP[item.type], {
          'flex__item--today': item.isToday,
          'flex__item--active': item.isActive,
          'flex__item--selected': item.isSelected,
          'flex__item--selected-head': item.isSelectedHead,
          'flex__item--selected-tail': item.isSelectedTail,
          'flex__item--blur': item.isDisabled || item.type === TYPE_PRE_MONTH || item.type === TYPE_NEXT_MONTH
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'flex__item-container'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'container-text'
      }, item.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'flex__item-extra extra'
      }, item.marks && item.marks.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'extra-marks'
      }, item.marks.map(function (mark, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
          key: key,
          className: 'mark'
        }, mark);
      })) : null));
    }));
  };

  return AtCalendarList;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtCalendarHeader =
/** @class */
function (_super) {
  __extends(AtCalendarHeader, _super);

  function AtCalendarHeader() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCalendarHeader.prototype.render = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-calendar__header header'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u65E5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u4E00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u4E8C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u4E09"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u56DB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u4E94"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'header__flex-item'
    }, "\u516D")));
  };

  return AtCalendarHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var ANIMTE_DURATION = 300;
var defaultProps = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
};

var AtCalendarBody =
/** @class */
function (_super) {
  __extends(AtCalendarBody, _super);

  function AtCalendarBody(props) {
    var _this = _super.call(this, props) || this;

    _this.changeCount = 0;
    _this.currentSwiperIndex = 1;
    _this.startX = 0;
    _this.swipeStartPoint = 0;
    _this.isPreMonth = false;
    _this.maxWidth = 0;
    _this.isTouching = false;

    _this.getGroups = function (generateDate, selectedDate) {
      var dayjsDate = dayjs_min(generateDate);
      var arr = [];

      var preList = _this.generateFunc(dayjsDate.subtract(1, 'month').valueOf(), selectedDate);

      var nowList = _this.generateFunc(generateDate, selectedDate, true);

      var nextList = _this.generateFunc(dayjsDate.add(1, 'month').valueOf(), selectedDate);

      var preListIndex = _this.currentSwiperIndex === 0 ? 2 : _this.currentSwiperIndex - 1;
      var nextListIndex = _this.currentSwiperIndex === 2 ? 0 : _this.currentSwiperIndex + 1;
      arr[preListIndex] = preList;
      arr[nextListIndex] = nextList;
      arr[_this.currentSwiperIndex] = nowList;
      return arr;
    };

    _this.handleTouchStart = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      _this.isTouching = true;
      _this.startX = e.touches[0].clientX;
    };

    _this.handleTouchMove = function (e) {
      if (!_this.props.isSwiper) {
        return;
      }

      if (!_this.isTouching) return;
      var clientX = e.touches[0].clientX;
      var offsetSize = clientX - _this.startX;

      _this.setState({
        offsetSize: offsetSize
      });
    };

    _this.animateMoveSlide = function (offset, callback) {
      _this.setState({
        isAnimate: true
      }, function () {
        _this.setState({
          offsetSize: offset
        });

        setTimeout(function () {
          _this.setState({
            isAnimate: false
          }, function () {
            callback && callback();
          });
        }, ANIMTE_DURATION);
      });
    };

    _this.handleTouchEnd = function () {
      if (!_this.props.isSwiper) {
        return;
      }

      var offsetSize = _this.state.offsetSize;
      _this.isTouching = false;
      var isRight = offsetSize > 0;
      var breakpoint = _this.maxWidth / 2;
      var absOffsetSize = Math.abs(offsetSize);

      if (absOffsetSize > breakpoint) {
        var res = isRight ? _this.maxWidth : -_this.maxWidth;
        return _this.animateMoveSlide(res, function () {
          _this.props.onSwipeMonth(isRight ? -1 : 1);
        });
      }

      _this.animateMoveSlide(0);
    };

    _this.handleChange = function (e) {
      var _a = e.detail,
          current = _a.current,
          source = _a.source;

      if (source === 'touch') {
        _this.currentSwiperIndex = current;
        _this.changeCount += 1;
      }
    };

    _this.handleAnimateFinish = function () {
      if (_this.changeCount > 0) {
        _this.props.onSwipeMonth(_this.isPreMonth ? -_this.changeCount : _this.changeCount);

        _this.changeCount = 0;
      }
    };

    _this.handleSwipeTouchStart = function (e) {
      var _a = e.changedTouches[0],
          clientY = _a.clientY,
          clientX = _a.clientX;
      _this.swipeStartPoint = _this.props.isVertical ? clientY : clientX;
    };

    _this.handleSwipeTouchEnd = function (e) {
      var _a = e.changedTouches[0],
          clientY = _a.clientY,
          clientX = _a.clientX;
      _this.isPreMonth = _this.props.isVertical ? clientY - _this.swipeStartPoint > 0 : clientX - _this.swipeStartPoint > 0;
    };

    var validDates = props.validDates,
        marks = props.marks,
        format = props.format,
        minDate = props.minDate,
        maxDate = props.maxDate,
        generateDate = props.generateDate,
        selectedDate = props.selectedDate,
        selectedDates = props.selectedDates;
    _this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });

    var listGroup = _this.getGroups(generateDate, selectedDate);

    _this.state = {
      listGroup: listGroup,
      offsetSize: 0,
      isAnimate: false
    };
    return _this;
  }

  AtCalendarBody.prototype.componentDidMount = function () {
    var _this = this;

    delayQuerySelector('.at-calendar-slider__main').then(function (res) {
      _this.maxWidth = res[0].width;
    });
  };

  AtCalendarBody.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var validDates = nextProps.validDates,
        marks = nextProps.marks,
        format = nextProps.format,
        minDate = nextProps.minDate,
        maxDate = nextProps.maxDate,
        generateDate = nextProps.generateDate,
        selectedDate = nextProps.selectedDate,
        selectedDates = nextProps.selectedDates;
    this.generateFunc = generateCalendarGroup({
      validDates: validDates,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      marks: marks,
      selectedDates: selectedDates
    });
    var listGroup = this.getGroups(generateDate, selectedDate);
    this.setState({
      offsetSize: 0,
      listGroup: listGroup
    });
  };

  AtCalendarBody.prototype.render = function () {
    var _this = this;

    var isSwiper = this.props.isSwiper;
    var _a = this.state,
        isAnimate = _a.isAnimate,
        offsetSize = _a.offsetSize,
        listGroup = _a.listGroup;

    if (!isSwiper) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "tt")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'main__body body'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
        className: 'body__slider body__slider--now'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: listGroup[1].list,
        onClick: this.props.onDayClick,
        onLongClick: this.props.onLongClick
      }))));
    }
    /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */


    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('main', 'at-calendar-slider__main', "at-calendar-slider__main--" + "tt")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Swiper */ "l"], {
      circular: true,
      current: 1,
      skipHiddenItemLayout: true,
      className: classnames('main__body'),
      onChange: this.handleChange,
      vertical: this.props.isVertical,
      onAnimationFinish: this.handleAnimateFinish,
      onTouchEnd: this.handleSwipeTouchEnd,
      onTouchStart: this.handleSwipeTouchStart
    }, listGroup.map(function (item, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* SwiperItem */ "m"], {
        key: key,
        itemId: key.toString()
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarList, {
        list: item.list,
        onClick: _this.props.onDayClick,
        onLongClick: _this.props.onLongClick
      }));
    })));
  };

  AtCalendarBody.defaultProps = defaultProps;
  return AtCalendarBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtCalendarController =
/** @class */
function (_super) {
  __extends(AtCalendarController, _super);

  function AtCalendarController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtCalendarController.prototype.render = function () {
    var _a = this.props,
        generateDate = _a.generateDate,
        minDate = _a.minDate,
        maxDate = _a.maxDate,
        monthFormat = _a.monthFormat,
        hideArrow = _a.hideArrow;
    var dayjsDate = dayjs_min(generateDate);
    var dayjsMinDate = !!minDate && dayjs_min(minDate);
    var dayjsMaxDate = !!maxDate && dayjs_min(maxDate);
    var isMinMonth = dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate);
    var isMaxMonth = dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate);
    var minDateValue = dayjsMinDate ? dayjsMinDate.format('YYYY-MM') : '';
    var maxDateValue = dayjsMaxDate ? dayjsMaxDate.format('YYYY-MM') : '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: 'at-calendar__controller controller'
    }, hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('controller__arrow controller__arrow--left', {
        'controller__arrow--disabled': isMinMonth
      }),
      onClick: this.props.onPreMonth.bind(this, isMinMonth)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Picker */ "i"], {
      mode: 'date',
      fields: 'month',
      end: maxDateValue,
      start: minDateValue,
      onChange: this.props.onSelectDate,
      value: dayjsDate.format('YYYY-MM')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* Text */ "o"], {
      className: 'controller__info'
    }, dayjsDate.format(monthFormat))), hideArrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('controller__arrow controller__arrow--right', {
        'controller__arrow--disabled': isMaxMonth
      }),
      onClick: this.props.onNextMonth.bind(this, isMaxMonth)
    }));
  };

  return AtCalendarController;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var defaultProps$1 = {
  validDates: [],
  marks: [],
  isSwiper: true,
  hideArrow: false,
  isVertical: false,
  selectedDates: [],
  isMultiSelect: false,
  format: 'YYYY-MM-DD',
  currentDate: Date.now(),
  monthFormat: 'YYYY年MM月'
};

var AtCalendar =
/** @class */
function (_super) {
  __extends(AtCalendar, _super);

  function AtCalendar(props) {
    var _this = _super.call(this, props) || this;

    _this.getSingleSelectdState = function (value) {
      var generateDate = _this.state.generateDate;
      var stateValue = {
        selectedDate: _this.getSelectedDate(value.valueOf())
      };
      var dayjsGenerateDate = value.startOf('month');
      var generateDateValue = dayjsGenerateDate.valueOf();

      if (generateDateValue !== generateDate) {
        _this.triggerChangeDate(dayjsGenerateDate);

        stateValue.generateDate = generateDateValue;
      }

      return stateValue;
    };

    _this.getMultiSelectedState = function (value) {
      var selectedDate = _this.state.selectedDate;
      var end = selectedDate.end,
          start = selectedDate.start;
      var valueUnix = value.valueOf();
      var state = {
        selectedDate: selectedDate
      };

      if (end) {
        state.selectedDate = _this.getSelectedDate(valueUnix, 0);
      } else {
        state.selectedDate.end = Math.max(valueUnix, +start);
        state.selectedDate.start = Math.min(valueUnix, +start);
      }

      return state;
    };

    _this.getSelectedDate = function (start, end) {
      var stateValue = {
        start: start,
        end: start
      };

      if (typeof end !== 'undefined') {
        stateValue.end = end;
      }

      return stateValue;
    };

    _this.triggerChangeDate = function (value) {
      var format = _this.props.format;
      if (typeof _this.props.onMonthChange !== 'function') return;

      _this.props.onMonthChange(value.format(format));
    };

    _this.setMonth = function (vectorCount) {
      var format = _this.props.format;
      var generateDate = _this.state.generateDate;

      var _generateDate = dayjs_min(generateDate).add(vectorCount, 'month');

      _this.setState({
        generateDate: _generateDate.valueOf()
      });

      if (vectorCount && typeof _this.props.onMonthChange === 'function') {
        _this.props.onMonthChange(_generateDate.format(format));
      }
    };

    _this.handleClickPreMonth = function (isMinMonth) {
      if (isMinMonth === true) {
        return;
      }

      _this.setMonth(-1);

      if (typeof _this.props.onClickPreMonth === 'function') {
        _this.props.onClickPreMonth();
      }
    };

    _this.handleClickNextMonth = function (isMaxMonth) {
      if (isMaxMonth === true) {
        return;
      }

      _this.setMonth(1);

      if (typeof _this.props.onClickNextMonth === 'function') {
        _this.props.onClickNextMonth();
      }
    }; // picker 选择时间改变时触发


    _this.handleSelectDate = function (e) {
      var value = e.detail.value;

      var _generateDate = dayjs_min(value);

      var _generateDateValue = _generateDate.valueOf();

      if (_this.state.generateDate === _generateDateValue) return;

      _this.triggerChangeDate(_generateDate);

      _this.setState({
        generateDate: _generateDateValue
      });
    };

    _this.handleDayClick = function (item) {
      var isMultiSelect = _this.props.isMultiSelect;
      var isDisabled = item.isDisabled,
          value = item.value;
      if (isDisabled) return;
      var dayjsDate = dayjs_min(value);
      var stateValue = {};

      if (isMultiSelect) {
        stateValue = _this.getMultiSelectedState(dayjsDate);
      } else {
        stateValue = _this.getSingleSelectdState(dayjsDate);
      }

      _this.setState(stateValue, function () {
        _this.handleSelectedDate();
      });

      if (typeof _this.props.onDayClick === 'function') {
        _this.props.onDayClick({
          value: item.value
        });
      }
    };

    _this.handleSelectedDate = function () {
      var selectDate = _this.state.selectedDate;

      if (typeof _this.props.onSelectDate === 'function') {
        var info = {
          start: dayjs_min(selectDate.start).format(_this.props.format)
        };

        if (selectDate.end) {
          info.end = dayjs_min(selectDate.end).format(_this.props.format);
        }

        _this.props.onSelectDate({
          value: info
        });
      }
    };

    _this.handleDayLongClick = function (item) {
      if (typeof _this.props.onDayLongClick === 'function') {
        _this.props.onDayLongClick({
          value: item.value
        });
      }
    };

    var _a = props,
        currentDate = _a.currentDate,
        isMultiSelect = _a.isMultiSelect;
    _this.state = _this.getInitializeState(currentDate, isMultiSelect);
    return _this;
  }

  AtCalendar.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
    var currentDate = nextProps.currentDate,
        isMultiSelect = nextProps.isMultiSelect;
    if (!currentDate || currentDate === this.props.currentDate) return;

    if (isMultiSelect && this.props.isMultiSelect) {
      var _a = currentDate,
          start = _a.start,
          end = _a.end;
      var _b = this.props.currentDate,
          preStart = _b.start,
          preEnd = _b.end;

      if (start === preStart && preEnd === end) {
        return;
      }
    }

    var stateValue = this.getInitializeState(currentDate, isMultiSelect);
    this.setState(stateValue);
  };

  AtCalendar.prototype.getInitializeState = function (currentDate, isMultiSelect) {
    var end;
    var start;
    var generateDateValue;

    if (!currentDate) {
      var dayjsStart = dayjs_min();
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      return {
        generateDate: generateDateValue,
        selectedDate: {
          start: ''
        }
      };
    }

    if (isMultiSelect) {
      var _a = currentDate,
          cStart = _a.start,
          cEnd = _a.end;
      var dayjsStart = dayjs_min(cStart);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = cEnd ? dayjs_min(cEnd).startOf('day').valueOf() : start;
    } else {
      var dayjsStart = dayjs_min(currentDate);
      start = dayjsStart.startOf('day').valueOf();
      generateDateValue = dayjsStart.startOf('month').valueOf();
      end = start;
    }

    return {
      generateDate: generateDateValue,
      selectedDate: this.getSelectedDate(start, end)
    };
  };

  AtCalendar.prototype.render = function () {
    var _a = this.state,
        generateDate = _a.generateDate,
        selectedDate = _a.selectedDate;
    var _b = this.props,
        validDates = _b.validDates,
        marks = _b.marks,
        format = _b.format,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        isSwiper = _b.isSwiper,
        className = _b.className,
        hideArrow = _b.hideArrow,
        isVertical = _b.isVertical,
        monthFormat = _b.monthFormat,
        selectedDates = _b.selectedDates;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: classnames('at-calendar', className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarController, {
      minDate: minDate,
      maxDate: maxDate,
      hideArrow: hideArrow,
      monthFormat: monthFormat,
      generateDate: generateDate,
      onPreMonth: this.handleClickPreMonth,
      onNextMonth: this.handleClickNextMonth,
      onSelectDate: this.handleSelectDate
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AtCalendarBody, {
      validDates: validDates,
      marks: marks,
      format: format,
      minDate: minDate,
      maxDate: maxDate,
      isSwiper: isSwiper,
      isVertical: isVertical,
      selectedDate: selectedDate,
      selectedDates: selectedDates,
      generateDate: generateDate,
      onDayClick: this.handleDayClick,
      onSwipeMonth: this.setMonth,
      onLongClick: this.handleDayLongClick
    }));
  };

  AtCalendar.defaultProps = defaultProps$1;
  return AtCalendar;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var AtFab =
/** @class */
function (_super) {
  __extends(AtFab, _super);

  function AtFab() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AtFab.prototype.onClick = function (e) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  };

  AtFab.prototype.render = function () {
    var _a;

    var _b = this.props,
        size = _b.size,
        className = _b.className,
        children = _b.children;
    var rootClass = classnames('at-fab', className, (_a = {}, _a["at-fab--" + size] = size, _a));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__[/* View */ "q"], {
      className: rootClass,
      onClick: this.onClick.bind(this)
    }, children);
  };

  return AtFab;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

AtFab.propTypes = {
  size: propTypes.oneOf(['normal', 'small']),
  onClick: propTypes.func
};
AtFab.defaultProps = {
  size: 'normal'
};

var objectToString$2 = function objectToString$2(style) {
  if (style && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style) === 'object') {
    var styleStr_1 = '';
    Object.keys(style).forEach(function (key) {
      var lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr_1 += lowerCaseKey + ":" + style[key] + ";";
    });
    return styleStr_1;
  } else if (style && typeof style === 'string') {
    return style;
  }

  return '';
};

var AtComponent =
/** @class */
function (_super) {
  __extends(AtComponent, _super);

  function AtComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  /**
   * 合并 style
   * @param {Object|String} style1
   * @param {Object|String} style2
   * @returns {String}
   */


  AtComponent.prototype.mergeStyle = function (style1, style2) {
    if (style1 && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style1) === 'object' && style2 && Object(_Users_weijunjie_Works_miniapp_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(style2) === 'object') {
      return Object.assign({}, style1, style2);
    }

    return objectToString$2(style1) + objectToString$2(style2);
  };

  return AtComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=vendors.js.map