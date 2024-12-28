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

/***/ "./src/patterns/adapter.ts":
/*!*********************************!*\
  !*** ./src/patterns/adapter.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   launchExampleAdapter: () => (/* binding */ launchExampleAdapter)\n/* harmony export */ });\nclass Target {\n    request() {\n        return 'Target: The default target\\'s behavior.';\n    }\n}\nclass Adaptee {\n    specificRequest() {\n        return '.eetpadA eht fo roivaheb laicepS';\n    }\n}\nclass Adapter extends Target {\n    constructor(adaptee) {\n        super();\n        this.adaptee = adaptee;\n    }\n    request() {\n        const result = this.adaptee.specificRequest().split('').reverse().join('');\n        return `Adapter: (TRANSLATED) ${result}`;\n    }\n}\nfunction clientCode(target) {\n    console.log(target.request());\n}\nfunction launchExampleAdapter() {\n    console.log('Client: I can work just fine with the Target objects:');\n    const target = new Target();\n    clientCode(target);\n    console.log('');\n    const adaptee = new Adaptee();\n    console.log('Client: The Adaptee class has a weird interface. See, I don\\'t understand it:');\n    console.log(`Adaptee: ${adaptee.specificRequest()}`);\n    console.log('');\n    console.log('Client: But I can work with it via the Adapter:');\n    const adapter = new Adapter(adaptee);\n    clientCode(adapter);\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/adapter.ts?");

/***/ }),

/***/ "./src/patterns/composite.ts":
/*!***********************************!*\
  !*** ./src/patterns/composite.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   launchExampleComposite: () => (/* binding */ launchExampleComposite)\n/* harmony export */ });\nclass Component {\n    setParent(parent) {\n        this.parent = parent;\n    }\n    getParent() {\n        return this.parent;\n    }\n    add(component) { }\n    remove(component) { }\n    isComposite() {\n        return false;\n    }\n}\nclass Leaf extends Component {\n    operation() {\n        return 'Leaf';\n    }\n}\nclass Composite extends Component {\n    constructor() {\n        super(...arguments);\n        this.children = [];\n    }\n    add(component) {\n        this.children.push(component);\n        component.setParent(this);\n    }\n    remove(component) {\n        const componentIndex = this.children.indexOf(component);\n        this.children.splice(componentIndex, 1);\n        component.setParent(null);\n    }\n    isComposite() {\n        return true;\n    }\n    operation() {\n        const results = [];\n        for (const child of this.children) {\n            results.push(child.operation);\n        }\n        return `Branch(${results.join('+')})`;\n    }\n}\nfunction clientCode(component) {\n    // ...\n    console.log(`RESULT: ${component.operation()}`);\n    // ...\n}\nfunction clientCode2(component1, component2) {\n    // ...\n    if (component1.isComposite()) {\n        component1.add(component2);\n    }\n    console.log(`RESULT: ${component1.operation()}`);\n    // ...\n}\nfunction launchExampleComposite() {\n    const simple = new Leaf();\n    console.log('Client: I\\'ve got a simple component:');\n    clientCode(simple);\n    console.log('');\n    const tree = new Composite();\n    const branch1 = new Composite();\n    branch1.add(new Leaf());\n    branch1.add(new Leaf());\n    const branch2 = new Composite();\n    branch2.add(new Leaf());\n    tree.add(branch1);\n    tree.add(branch2);\n    console.log('Client: Now I\\'ve got a composite tree:');\n    clientCode(tree);\n    console.log('');\n    console.log('Client: I don\\'t need to check the components classes even when managing the tree:');\n    clientCode2(tree, simple);\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/composite.ts?");

/***/ }),

/***/ "./src/patterns/index.ts":
/*!*******************************!*\
  !*** ./src/patterns/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ launchPatterns)\n/* harmony export */ });\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleton */ \"./src/patterns/singleton.ts\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./src/patterns/observer.ts\");\n/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adapter */ \"./src/patterns/adapter.ts\");\n/* harmony import */ var _composite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./composite */ \"./src/patterns/composite.ts\");\n\n\n\n\nfunction launchPatterns() {\n    (0,_singleton__WEBPACK_IMPORTED_MODULE_0__.launchExampleSingleton)();\n    (0,_observer__WEBPACK_IMPORTED_MODULE_1__.launchExampleObserver)();\n    (0,_adapter__WEBPACK_IMPORTED_MODULE_2__.launchExampleAdapter)();\n    (0,_composite__WEBPACK_IMPORTED_MODULE_3__.launchExampleComposite)();\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/index.ts?");

/***/ }),

/***/ "./src/patterns/observer.ts":
/*!**********************************!*\
  !*** ./src/patterns/observer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   launchExampleObserver: () => (/* binding */ launchExampleObserver)\n/* harmony export */ });\nclass ConcreteSubject {\n    constructor() {\n        this.observers = [];\n    }\n    attach(observer) {\n        const isExist = this.observers.includes(observer);\n        if (isExist) {\n            return console.log('Subject: Observer has been attached already.');\n        }\n        this.observers.push(observer);\n        console.log('Subject: Attached an observer.');\n    }\n    detach(observer) {\n        const observerIndex = this.observers.indexOf(observer);\n        if (observerIndex === -1) {\n            return console.log('Subject: Nonexistent observer.');\n        }\n        this.observers.splice(observerIndex, 1);\n        console.log('Subject: Detached an observer.');\n    }\n    notify() {\n        console.log('Subject: Notifying observers...');\n        for (const observer of this.observers) {\n            observer.update(this);\n        }\n    }\n    someBusinessLogic() {\n        console.log('\\nSubject: I\\'m doing something important.');\n        this.state = Math.floor(Math.random() * (10 + 1));\n        console.log(`Subject: My state has just changed to: ${this.state}`);\n        this.notify();\n    }\n}\nclass ConcreteObserverA {\n    update(subject) {\n        if (subject instanceof ConcreteSubject && subject.state < 3) {\n            console.log('ConcreteObserverA: Reacted to the event.');\n        }\n    }\n}\nclass ConcreteObserverB {\n    update(subject) {\n        if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {\n            console.log('ConcreteObserverB: Reacted to the event.');\n        }\n    }\n}\nfunction launchExampleObserver() {\n    const subject = new ConcreteSubject();\n    const observer1 = new ConcreteObserverA();\n    subject.attach(observer1);\n    const observer2 = new ConcreteObserverB();\n    subject.attach(observer2);\n    subject.someBusinessLogic();\n    subject.someBusinessLogic();\n    subject.detach(observer2);\n    subject.someBusinessLogic();\n}\n\n\n//# sourceURL=webpack://ts/./src/patterns/observer.ts?");

/***/ }),

/***/ "./src/patterns/singleton.ts":
/*!***********************************!*\
  !*** ./src/patterns/singleton.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   launchExampleSingleton: () => (/* binding */ launchExampleSingleton)\n/* harmony export */ });\nvar __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a getter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot read private member from an object whose class did not declare it\");\n    return kind === \"m\" ? f : kind === \"a\" ? f.call(receiver) : f ? f.value : state.get(receiver);\n};\nvar __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {\n    if (kind === \"m\") throw new TypeError(\"Private method is not writable\");\n    if (kind === \"a\" && !f) throw new TypeError(\"Private accessor was defined without a setter\");\n    if (typeof state === \"function\" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError(\"Cannot write private member to an object whose class did not declare it\");\n    return (kind === \"a\" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;\n};\nvar _a, _Singleton_instance;\nclass Singleton {\n    constructor() { }\n    static get instance() {\n        if (!__classPrivateFieldGet(_a, _a, \"f\", _Singleton_instance)) {\n            __classPrivateFieldSet(_a, _a, new _a(), \"f\", _Singleton_instance);\n        }\n        return __classPrivateFieldGet(_a, _a, \"f\", _Singleton_instance);\n    }\n    someBusinessLogic() {\n    }\n}\n_a = Singleton;\n_Singleton_instance = { value: void 0 };\nfunction clientCode() {\n    const s1 = Singleton.instance;\n    const s2 = Singleton.instance;\n    if (s1 === s2) {\n        console.log('Singleton works, both variables contain the same instance.');\n    }\n    else {\n        console.log('Singleton failed, variables contain different instances.');\n    }\n}\nfunction launchExampleSingleton() {\n    clientCode();\n}\n\n\n\n//# sourceURL=webpack://ts/./src/patterns/singleton.ts?");

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