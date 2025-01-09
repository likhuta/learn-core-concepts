/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns */ \"./src/patterns/index.ts\");\n\n(0,_patterns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://ts/./src/index.ts?");

/***/ }),

/***/ "./src/patterns/builder.ts":
/*!*********************************!*\
  !*** ./src/patterns/builder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   launchExampleBuilder: () => (/* binding */ launchExampleBuilder)\n/* harmony export */ });\nclass Product1 {\n    constructor() {\n        this.parts = [];\n    }\n    listParts() {\n        console.log(`Product parts: ${this.parts.join(', ')}\\n`);\n    }\n}\nclass ConcreteBuilder1 {\n    constructor() {\n        this.reset();\n    }\n    reset() {\n        this.product = new Product1();\n    }\n    producePartA() {\n        this.product.parts.push('PartA1');\n    }\n    producePartB() {\n        this.product.parts.push('PartB1');\n    }\n    producePartC() {\n        this.product.parts.push('PartC1');\n    }\n    getProduct() {\n        const result = this.product;\n        this.reset();\n        return result;\n    }\n}\nclass Director {\n    setBuilder(builder) {\n        this.builder = builder;\n    }\n    buildMinimalViableProduct() {\n        this.builder.producePartA();\n    }\n    buildFullFeaturedProduct() {\n        this.builder.producePartA();\n        this.builder.producePartB();\n        this.builder.producePartC();\n    }\n}\nfunction clientCode(director) {\n    const builder = new ConcreteBuilder1();\n    director.setBuilder(builder);\n    console.log('Standard basic product:');\n    director.buildMinimalViableProduct();\n    builder.getProduct().listParts();\n    console.log('Standard full featured product:');\n    director.buildFullFeaturedProduct();\n    builder.getProduct().listParts();\n    console.log('Custom product:');\n    builder.producePartA();\n    builder.producePartC();\n    builder.getProduct().listParts();\n}\nfunction launchExampleBuilder() {\n    const director = new Director();\n    clientCode(director);\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/builder.ts?");

/***/ }),

/***/ "./src/patterns/index.ts":
/*!*******************************!*\
  !*** ./src/patterns/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ launchPatterns)\n/* harmony export */ });\n/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ \"./src/patterns/builder.ts\");\n\nfunction launchPatterns() {\n    // launchExampleSingleton();\n    // launchExampleObserver();\n    // launchExampleAdapter();\n    // launchExampleComposite();\n    (0,_builder__WEBPACK_IMPORTED_MODULE_0__.launchExampleBuilder)();\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/index.ts?");

/***/ })

/******/ 	});
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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;