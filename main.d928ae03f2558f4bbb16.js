/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/fonts/Roboto-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Roboto-Regular.ttf ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "03523cf578d69fa923226ff457b92d90.ttf");

/***/ }),

/***/ "./assets/images/cover_1.png":
/*!***********************************!*\
  !*** ./assets/images/cover_1.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "28288879afe87bc1c73f731e815eb92b.png");

/***/ }),

/***/ "./assets/images/cover_12.png":
/*!************************************!*\
  !*** ./assets/images/cover_12.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "44dd450c931c042f3026b5d2b1a8d36e.png");

/***/ }),

/***/ "./assets/images/cover_2.png":
/*!***********************************!*\
  !*** ./assets/images/cover_2.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c136447b4edbce1c7d5c70f2a0ec14c1.png");

/***/ }),

/***/ "./assets/images/cover_20.png":
/*!************************************!*\
  !*** ./assets/images/cover_20.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0395cc72405ce046187e7ae8b1a0f4a2.png");

/***/ }),

/***/ "./assets/images/cover_3.png":
/*!***********************************!*\
  !*** ./assets/images/cover_3.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cec059ebbc380a441a928722e3fe3826.png");

/***/ }),

/***/ "./assets/images/cover_5.png":
/*!***********************************!*\
  !*** ./assets/images/cover_5.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9e650a84e42b5fcf6ba48656e859711.png");

/***/ }),

/***/ "./assets/images/cover_6.png":
/*!***********************************!*\
  !*** ./assets/images/cover_6.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b069ba5c069eadb1dc2133322692e5da.png");

/***/ }),

/***/ "./assets/images/depth_cover1.webp":
/*!*****************************************!*\
  !*** ./assets/images/depth_cover1.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "03a6c93101592f3126c4f73660031b1a.webp");

/***/ }),

/***/ "./assets/images/depth_cover12.webp":
/*!******************************************!*\
  !*** ./assets/images/depth_cover12.webp ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f45575dcf5b9006f539e68006f40c78b.webp");

/***/ }),

/***/ "./assets/images/depth_cover2.webp":
/*!*****************************************!*\
  !*** ./assets/images/depth_cover2.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "41d94ddf6dfbac9e2bd3317dd8984c0f.webp");

/***/ }),

/***/ "./assets/images/depth_cover20.webp":
/*!******************************************!*\
  !*** ./assets/images/depth_cover20.webp ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d99878eca7066613b1b40a7d34589100.webp");

/***/ }),

/***/ "./assets/images/depth_cover3.webp":
/*!*****************************************!*\
  !*** ./assets/images/depth_cover3.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8f19e22f2e05a5a8e773a2d650a363c7.webp");

/***/ }),

/***/ "./assets/images/depth_cover5.webp":
/*!*****************************************!*\
  !*** ./assets/images/depth_cover5.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2604d635f554f67093e0417f357aa443.webp");

/***/ }),

/***/ "./assets/images/depth_cover6.webp":
/*!*****************************************!*\
  !*** ./assets/images/depth_cover6.webp ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1ed1895600f26944e5bd6bbaac49a4b3.webp");

/***/ }),

/***/ "./component.js":
/*!**********************!*\
  !*** ./component.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_cover_1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/cover_1.png */ "./assets/images/cover_1.png");
/* harmony import */ var _assets_images_depth_cover1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/depth_cover1.webp */ "./assets/images/depth_cover1.webp");
/* harmony import */ var _assets_images_cover_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/cover_2.png */ "./assets/images/cover_2.png");
/* harmony import */ var _assets_images_depth_cover2_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/depth_cover2.webp */ "./assets/images/depth_cover2.webp");
/* harmony import */ var _assets_images_cover_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/cover_3.png */ "./assets/images/cover_3.png");
/* harmony import */ var _assets_images_depth_cover3_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/depth_cover3.webp */ "./assets/images/depth_cover3.webp");
/* harmony import */ var _assets_images_cover_5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/cover_5.png */ "./assets/images/cover_5.png");
/* harmony import */ var _assets_images_depth_cover5_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/depth_cover5.webp */ "./assets/images/depth_cover5.webp");
/* harmony import */ var _assets_images_cover_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/cover_6.png */ "./assets/images/cover_6.png");
/* harmony import */ var _assets_images_depth_cover6_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/depth_cover6.webp */ "./assets/images/depth_cover6.webp");
/* harmony import */ var _assets_images_cover_12_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/cover_12.png */ "./assets/images/cover_12.png");
/* harmony import */ var _assets_images_depth_cover12_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/depth_cover12.webp */ "./assets/images/depth_cover12.webp");
/* harmony import */ var _assets_images_cover_20_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/cover_20.png */ "./assets/images/cover_20.png");
/* harmony import */ var _assets_images_depth_cover20_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/depth_cover20.webp */ "./assets/images/depth_cover20.webp");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }















var arrayImg = [_assets_images_cover_1_png__WEBPACK_IMPORTED_MODULE_0__["default"], _assets_images_cover_2_png__WEBPACK_IMPORTED_MODULE_2__["default"], _assets_images_cover_3_png__WEBPACK_IMPORTED_MODULE_4__["default"], _assets_images_cover_5_png__WEBPACK_IMPORTED_MODULE_6__["default"], _assets_images_cover_6_png__WEBPACK_IMPORTED_MODULE_8__["default"], _assets_images_cover_12_png__WEBPACK_IMPORTED_MODULE_10__["default"], _assets_images_cover_20_png__WEBPACK_IMPORTED_MODULE_12__["default"]];
var arrayDepth = [_assets_images_depth_cover1_webp__WEBPACK_IMPORTED_MODULE_1__["default"], _assets_images_depth_cover2_webp__WEBPACK_IMPORTED_MODULE_3__["default"], _assets_images_depth_cover3_webp__WEBPACK_IMPORTED_MODULE_5__["default"], _assets_images_depth_cover5_webp__WEBPACK_IMPORTED_MODULE_7__["default"], _assets_images_depth_cover6_webp__WEBPACK_IMPORTED_MODULE_9__["default"], _assets_images_depth_cover12_webp__WEBPACK_IMPORTED_MODULE_11__["default"], _assets_images_depth_cover20_webp__WEBPACK_IMPORTED_MODULE_13__["default"]];
var index = 0;
var img = new Image();
var depth = new Image();
init();

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var clickBody, canvas, gl, buffer, vshader, vs, fshader, fs, program, setTexture, loop, mouseLoc;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loop = function _loop() {
              gl.clearColor(0.25, 0.65, 1, 1);
              gl.clear(gl.COLOR_BUFFER_BIT);
              gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
              requestAnimationFrame(function () {
                return loop();
              });
            };

            setTexture = function _setTexture(im, name, num) {
              var texture = gl.createTexture();
              gl.activeTexture(gl.TEXTURE0 + num);
              gl.bindTexture(gl.TEXTURE_2D, texture);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
              gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
              gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, im);
              gl.uniform1i(gl.getUniformLocation(program, name), num);
            };

            if (!(index == 0)) {
              _context2.next = 9;
              break;
            }

            img.src = _assets_images_cover_1_png__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context2.next = 6;
            return new Promise(function (r) {
              return img.onload = r;
            });

          case 6:
            depth.src = _assets_images_depth_cover1_webp__WEBPACK_IMPORTED_MODULE_1__["default"];
            _context2.next = 9;
            return new Promise(function (r) {
              return depth.onload = r;
            });

          case 9:
            clickBody = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (index > 6) {
                          index = 0;
                        }

                        img.src = arrayImg[index];
                        _context.next = 4;
                        return new Promise(function (r) {
                          return img.onload = r;
                        });

                      case 4:
                        depth.src = arrayDepth[index];
                        ;
                        _context.next = 8;
                        return new Promise(function (r) {
                          return depth.onload = r;
                        });

                      case 8:
                        index++;
                        document.body.removeEventListener('click', clickBody);
                        gl.getExtension('WEBGL_lose_context').loseContext();
                        init();

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function clickBody() {
                return _ref.apply(this, arguments);
              };
            }();

            document.body.addEventListener('click', clickBody);
            canvas = document.createElement("canvas");
            canvas.height = img.height;
            canvas.width = img.width;
            gl = canvas.getContext("webgl");
            Object.assign(canvas.style, {
              width: '920px',
              height: '320px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            });
            document.body.appendChild(canvas);
            buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(0);
            vshader = "\n    attribute vec2 pos;\n    varying vec2 vpos;\n    void main(){\n        vpos = pos*-0.46*vec2(-1.0, 1.0) + vec2(0.5);\n        gl_Position = vec4(pos, 0, 1);\n    }\n    ";
            vs = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vs, vshader);
            gl.compileShader(vs);
            fshader = "\n    precision highp float;\n    uniform sampler2D img;\n    uniform sampler2D depth;\n    uniform vec2 mouse;\n    varying vec2 vpos;\n    void main(){\n        float dp = -0.5 + texture2D(depth, vpos).x;\n        gl_FragColor = texture2D(img, vpos - mouse * 0.2 * dp);\n    }\n    ";
            fs = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fs, fshader);
            gl.compileShader(fs);
            program = gl.createProgram();
            gl.attachShader(program, fs);
            gl.attachShader(program, vs);
            gl.linkProgram(program);
            gl.useProgram(program);
            setTexture(img, "img", 0);
            setTexture(depth, "depth", 1);
            loop();
            mouseLoc = gl.getUniformLocation(program, "mouse");

            canvas.onmousemove = function (d) {
              var mpos = [-0.1 + d.layerX / canvas.width, 0.1 - d.layerY / canvas.width];
              gl.uniform2fv(mouseLoc, new Float32Array(mpos));
            };

          case 40:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _init.apply(this, arguments);
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/fonts/Roboto-Regular.ttf */ "./assets/fonts/Roboto-Regular.ttf");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component.js */ "./component.js");




/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });