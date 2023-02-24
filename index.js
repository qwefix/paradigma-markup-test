/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_bigmapPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _scripts_bigmapPopup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_bigmapPopup__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_callbackPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _scripts_callbackPopup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_callbackPopup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_yamap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _scripts_yamap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_yamap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);




console.log('webpack');

/***/ }),
/* 1 */
/***/ (() => {

var bigMapController = document.getElementById("big-map-controller");
var bigMapContainer = document.getElementById("big-map-container");
var bigMap = document.getElementById("big-map");
var toggleOpenedBigMap = function toggleOpenedBigMap(e) {
  bigMapContainer.classList.toggle("opened");
};
bigMapContainer.addEventListener("click", toggleOpenedBigMap);
bigMapController.addEventListener("click", toggleOpenedBigMap);
bigMap.addEventListener("click", function (e) {
  e.stopPropagation();
});

/***/ }),
/* 2 */
/***/ (() => {

var callbackController = document.getElementById("callback-controller");
var callBackClose = document.getElementById("callback-popup-close");
var callBackContainer = document.getElementById("callback-container");
var callBackPopup = document.getElementById("callback-popup");
var callBackSubmit = document.getElementById("callback-submit-button");
var toggleOpenedCallBack = function toggleOpenedCallBack() {
  callBackContainer.classList.toggle("opened");
};
callBackContainer.addEventListener("click", toggleOpenedCallBack);
callBackClose.addEventListener("click", toggleOpenedCallBack);
callbackController.addEventListener("click", toggleOpenedCallBack);
callBackPopup.addEventListener("click", function (e) {
  e.stopPropagation();
});
var customCheckboxButton = document.getElementById("custom-checkbox-button");
var callBackCheckbox = document.getElementById("callback-privacy-policy");
var isNumberFilled = false;
var setIsSubmitDisable = function setIsSubmitDisable() {
  callBackSubmit.disabled = !(isNumberFilled && callBackCheckbox.checked);
};
callBackCheckbox.addEventListener("change", function (e) {
  var checked = e.target.checked;
  if (checked) {
    customCheckboxButton.classList.add("active");
  } else {
    customCheckboxButton.classList.remove("active");
  }
  setIsSubmitDisable();
});
var callbackPhoneInput = document.getElementById("callback-phone-input");
var phoneMaskOptions = {
  mask: "+{7}(000)000-00-00",
  lazy: false
};
var callbackPhoneMask = new IMask(callbackPhoneInput, phoneMaskOptions);
callbackPhoneInput.addEventListener("change", function (e) {
  if (e.target.value.includes("_")) {
    isNumberFilled = false;
  } else {
    isNumberFilled = true;
  }
  setIsSubmitDisable();
});
callBackSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  callBackSubmit.classList.add('submitted');
  setTimeout(function () {
    callBackContainer.classList.remove("opened");
    callBackSubmit.classList.remove('submitted');
  }, 0);
});

/***/ }),
/* 3 */
/***/ (() => {

ymaps.ready(function () {
  var hoverPoint = new ymaps.Placemark([55.706802, 37.70929], {
    hintContent: "Лаборатория двигателей",
    balloonContent: "Лаборатория двигателей"
  });
  var bigPoint = new ymaps.Placemark([55.706802, 37.70929], {
    hintContent: "Лаборатория двигателей",
    balloonContent: "Лаборатория двигателей"
  });
  var hoverMap = new ymaps.Map("hover-map", {
    center: [55.706802, 37.70929],
    zoom: 14
  });
  var bigMap = new ymaps.Map("big-map", {
    center: [55.706802, 37.70929],
    zoom: 14
  });
  hoverMap.geoObjects.add(hoverPoint);
  bigMap.geoObjects.add(bigPoint);
});

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 5 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 8 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  -webkit-transition: 0;\r\n  transition: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-family: \"Manrope\";\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.bottom-dots {\r\n  white-space: nowrap;\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.bottom-dots::after {\r\n  content: \"\";\r\n  width: 100%;\r\n  height: 0;\r\n  border-bottom: 0.1041666667vw dotted #fd2016;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n.bottom-dots:hover::after {\r\n  width: 60%;\r\n}\r\n\r\n/* section {\r\n    display: flex;\r\n  }\r\n  section > aside {\r\n    width: 7.3vw;\r\n  }\r\n  section > main {\r\n    width: 92.7vw;\r\n  } */\r\n\r\n/* @keyframes blick {\r\n  0%,\r\n  to {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n}\r\nstandart-btn::after,\r\n.standart-dark-btn::after {\r\n  content: \"\";\r\n  width: 5.9895833333vw;\r\n  height: 7.2916666667vw;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 0;\r\n  background-image: url(../img/general/btn-blick.svg);\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  -webkit-transform: translateY(-50%);\r\n  transform: translateY(-50%);\r\n  -webkit-animation: btn_blick 5s linear infinite;\r\n  animation: btn_blick 5s linear infinite;\r\n  -webkit-transition: 0.5s;\r\n  transition: 0.5s;\r\n} */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 13 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  width: 100%;\r\n  min-height: 300vh;\r\n  margin: 0;\r\n}\r\n.page-header {\r\n  color: #2a2a2a;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: white;\r\n}\r\n.page-header > .top {\r\n  box-sizing: content-box;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 3.177vw;\r\n  padding: 1.15vw 7.29vw 1.15vw 7.13vw;\r\n}\r\n.page-header > .top > div {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-right: 2.97vw;\r\n}\r\n.page-header > .top > div > p {\r\n  margin-left: 1.2vw;\r\n  font-size: 0.57vw;\r\n}\r\n.page-header > .top > .logo img {\r\n  width: 11.09vw;\r\n}\r\n.page-header > .top > .logo > p {\r\n  width: 7.29vw;\r\n}\r\n.page-header > .top > .address > img {\r\n  width: 1.82vw;\r\n  margin-right: 0.52vw;\r\n}\r\n.page-header > .top > .address > p {\r\n  width: 8.18vw;\r\n}\r\n.page-header > .top > .map {\r\n  position: relative;\r\n}\r\n.page-header > .top > .map > img {\r\n  width: 0.625vw;\r\n  margin-right: 0.52vw;\r\n}\r\n.page-header > .top > .map > p {\r\n  font-weight: 700;\r\n}\r\n.page-header > .top > .map:hover > p .bottom-dots::after {\r\n  width: 60%;\r\n}\r\n.page-header > .top > .map > .yamapContainer {\r\n  position: absolute;\r\n  top: 100%;\r\n  width: 30vw;\r\n  max-height: 0vw;\r\n  height: 30vw;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  overflow: hidden;\r\n  transition: 0.3s;\r\n}\r\n.page-header > .top > .map:hover > .yamapContainer {\r\n  max-height: 30vw;\r\n}\r\n.page-header > .top > .map > .yamapContainer > .yamap {\r\n  width: 30vw;\r\n  height: 30vw;\r\n}\r\n.page-header > .top > .map:hover > p.bottom-dots::after {\r\n  width: 60%;\r\n}\r\n.page-header > .top > .calculate:hover > p .bottom-dots::after {\r\n  width: 60%;\r\n}\r\n.page-header > .top > .calculate > img {\r\n  width: 1.823vw;\r\n}\r\n\r\n.page-header > .top > .contacts > p {\r\n  margin-right: 0.937vw;\r\n  margin-left: 0;\r\n}\r\n.page-header > .top > .contacts > a > img {\r\n  width: 1.823vw;\r\n  display: block;\r\n}\r\n.page-header > .top > .contacts > a + a {\r\n  margin-left: 0.312vw;\r\n}\r\n.page-header > .top > .phone {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-right: 0;\r\n}\r\n.page-header > .top > .phone > p {\r\n  margin: 0;\r\n}\r\n.page-header > .top > .phone > .time {\r\n  font-size: 0.625vw;\r\n  margin-left: 0;\r\n  line-height: 0.52vw;\r\n  margin-bottom: 0.3125vw;\r\n}\r\n.page-header > .top > .phone > .time > .bullet {\r\n  font-size: 1vw;\r\n  color: #20c863;\r\n}\r\n.page-header > .top > .phone > .number {\r\n  display: block;\r\n  font-weight: 700;\r\n  color: #2a2a2a;\r\n  text-decoration: none;\r\n  font-size: 1.041vw;\r\n  line-height: 1.04vw;\r\n  margin-bottom: 0.3125vw;\r\n}\r\n.page-header > .top > .phone > .callback > img {\r\n  display: inline;\r\n  width: 0.3125vw;\r\n}\r\n\r\n.page-header > nav {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 1.15vw 0 1.15vw;\r\n  margin: 0 7.29vw 0 7.13vw;\r\n  border-top: solid 0.052vw #2a2a2a26;\r\n  justify-content: space-between;\r\n  font-weight: 600;\r\n}\r\n.page-header > nav > a {\r\n  line-height: 1.042vw;\r\n  font-size: 0.625vw;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  color: #2a2a2a;\r\n  transition: 0.3s;\r\n}\r\n.page-header > nav > a:hover {\r\n  color: #fd2016;\r\n}\r\n\r\n#big-map-container,\r\n#callback-container {\r\n  position: fixed;\r\n  display: none;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(128, 128, 128, 0.4);\r\n  top: 0;\r\n}\r\n#big-map-container.opened,\r\n#callback-container.opened {\r\n  display: block;\r\n}\r\n\r\n#big-map-container > .yamap {\r\n  position: absolute;\r\n  top: 10vh;\r\n  left: 10vw;\r\n  width: 80vw;\r\n  height: 80vh;\r\n}\r\n\r\n#callback-container > .callback-popup {\r\n  position: absolute;\r\n  width: 26.041vw;\r\n  height: 31.25vw;\r\n  background-color: #1c1c21;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n#callback-container > .callback-popup > .close {\r\n  position: absolute;\r\n  background-color: transparent;\r\n  top: 1.8vw;\r\n  right: 1.8vw;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 0;\r\n  width: 1.042vw;\r\n  height: 1.042vw;\r\n}\r\n#callback-container > .callback-popup > .close > img {\r\n  display: block;\r\n  width: 1.042vw;\r\n  height: 1.042vw;\r\n}\r\n#callback-container > .callback-popup > h2 {\r\n  font-size: 1.666vw;\r\n  line-height: 2.292vw;\r\n  margin: 0;\r\n  margin-top: 2.344vw;\r\n}\r\n#callback-container > .callback-popup > p {\r\n  font-size: 0.9375vw;\r\n  line-height: 1.458vw;\r\n  margin: 0;\r\n  margin-top: 0.8333vw;\r\n}\r\n#callback-container > .callback-popup > form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 0.729vw;\r\n  margin-top: 1.77vw;\r\n}\r\n#callback-container > .callback-popup > form > #callback-phone-input {\r\n  width: 18.9vw;\r\n  padding: 1.458vw 2.448vw;\r\n  border-radius: 3.8vw;\r\n  font-size: 0.93vw;\r\n  margin: 0 auto;\r\n  margin-top: 0.625vw;\r\n  border: none;\r\n}\r\n#callback-container > .callback-popup > form > #callback-phone-input:focus {\r\n  outline: 0.1vw solid #fd2016;\r\n}\r\n#callback-container\r\n  > .callback-popup\r\n  > form\r\n  > #callback-phone-input::placeholder {\r\n  color: #b0b0b1;\r\n}\r\n#callback-container > .callback-popup > form > #callback-privacy-policy {\r\n  display: none;\r\n}\r\n#callback-container > .callback-popup > form > .privacy-policy {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 18.9vw;\r\n}\r\n#callback-container > .callback-popup > form > .privacy-policy > p {\r\n  text-align: start;\r\n  margin-left: 0.729vw;\r\n}\r\n#callback-container > .callback-popup > form > .privacy-policy > p > a {\r\n  color: #fd2016;\r\n  text-decoration: none;\r\n}\r\n#callback-container .custom-checkbox > #custom-checkbox-button {\r\n  cursor: pointer;\r\n  display: block;\r\n  width: 1.042vw;\r\n  height: 1.042vw;\r\n  background-color: #fd2016;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 25%;\r\n  user-select: none;\r\n}\r\n#callback-container .custom-checkbox > #custom-checkbox-button:hover {\r\n  background-color: #fd22169e;\r\n}\r\n#callback-container .custom-checkbox > #custom-checkbox-button > .mark {\r\n  transition: 0.3s;\r\n  opacity: 0;\r\n  width: 0.4166vw;\r\n}\r\n#callback-container .custom-checkbox > #custom-checkbox-button.active .mark {\r\n  opacity: 1;\r\n}\r\n#callback-container .submit-button {\r\n  width: 18.9vw;\r\n  padding: 1.458vw 2.448vw;\r\n  border-radius: 3.8vw;\r\n  font-size: 0.93vw;\r\n  margin: 0 auto;\r\n  margin-top: 0.625vw;\r\n  border: none;\r\n  background-color: #fd2016;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n#callback-container .submit-button:hover {\r\n  background-color: #fd22169e;\r\n}\r\n#callback-container .submit-button:disabled {\r\n  background-color: black;\r\n  cursor: not-allowed;\r\n}\r\n#callback-container .submit-button.submitted {\r\n  background-color: green;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(0);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4);
/******/ 	
/******/ })()
;