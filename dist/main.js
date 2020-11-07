/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main */ \"./js/main.js\");\n// Import styles\r\n\r\n\r\n\r\n\r\n// Import Scripts\r\n\r\n\r\n\r\n\r\n\r\nvar PlusButtons = document.querySelectorAll('.plus-button');\r\n\r\nfor (let PlusButton of PlusButtons) {\r\n    PlusButton.onclick = function() {\r\n        PlusButton.parentElement.previousElementSibling.innerHTML = Number.parseInt(PlusButton.parentElement.previousElementSibling.innerHTML) + 1;\r\n    }\r\n}\r\n\r\nvar MinusButtons = document.querySelectorAll('.minus-button');\r\n\r\nfor (let MinusButton of MinusButtons) {\r\n    MinusButton.onclick = function() {\r\n        let Product = MinusButton.parentElement.previousElementSibling;\r\n        let ProductCount = Number.parseInt(Product.innerHTML);\r\n\r\n        if (ProductCount > 0) {\r\n            ProductCount--;\r\n            Product.innerHTML = ProductCount;\r\n        }\r\n    }\r\n}\r\n\r\n\r\nvar counts = document.querySelectorAll(\".item__count\");\r\nvar LargeHamburgerStuffings = document.querySelectorAll(\".LargeHamburgerStuff\");\r\nvar SmallHamburgerStuffings = document.querySelectorAll(\".SmallHamburgerStuff\");\r\n\r\n\r\n// console.log(counts[0].innerHTML)\r\n\r\ndocument.getElementById(\"get-price\").onclick = calculate(\"TotalPrice\");\r\ndocument.getElementById(\"get-calories\").onclick = calculate(\"TottalCalories\");\r\n\r\nfunction calculate(str) {\r\n    return function() {\r\n        var TotalPrice = 0;\r\n        var TottalCalories = 0;\r\n\r\n\r\n        for (var LargeHamburgerStuffing of LargeHamburgerStuffings) {\r\n            if (LargeHamburgerStuffing.checked) {\r\n                switch (LargeHamburgerStuffing.getAttribute(\"value\")) {\r\n                    case (\"cheese\"): {\r\n                        var LargeHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_LARGE, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_CHEESE);\r\n                        break;\r\n                    }\r\n                    case (\"salad\"): {\r\n                        var LargeHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_LARGE, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_SALAD);\r\n                        break;\r\n                    }\r\n                    case (\"potato\"): {\r\n                        var LargeHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_LARGE, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_POTATO);\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n        for (var SmallHamburgerStuffing of SmallHamburgerStuffings) {\r\n            if (SmallHamburgerStuffing.checked) {\r\n                switch (SmallHamburgerStuffing.getAttribute(\"value\")) {\r\n                    case (\"cheese\"): {\r\n                        var SmallHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_SMALL, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_CHEESE);\r\n                        break;\r\n                    }\r\n                    case (\"salad\"): {\r\n                        var SmallHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_SMALL, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_SALAD);\r\n                        break;\r\n                    }\r\n                    case (\"potato\"): {\r\n                        var SmallHamburger = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].SIZE_SMALL, _js_main__WEBPACK_IMPORTED_MODULE_2__[\"Hamburger\"].STUFFING_POTATO);\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n        for (var count of counts) {\r\n        switch (count.getAttribute(\"id\")) {\r\n            case (\"LargeHamburgerAmount\"): {\r\n                    var LargeHamburgerWithStuff = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](LargeHamburger);\r\n                    TotalPrice += LargeHamburgerWithStuff.price * count.innerHTML;\r\n                    TottalCalories += LargeHamburgerWithStuff.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n            case (\"SmallHamburgerAmount\"): {\r\n                    var SmallHamburgerWithStuff = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](SmallHamburger);\r\n                    TotalPrice += SmallHamburgerWithStuff.price * count.innerHTML;\r\n                    TottalCalories += SmallHamburgerWithStuff.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n            case (\"SaladCaesarAmount\"): {\r\n                    var SaladCaesar = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Salad\"].CAESAR);\r\n                    TotalPrice += SaladCaesar.price * count.innerHTML;\r\n                    TottalCalories += SaladCaesar.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n            case (\"SaladOlivieAmount\"): {\r\n                    var SaladOlivie = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Salad\"].OLIVIE);\r\n                    TotalPrice += SaladOlivie.price * count.innerHTML;\r\n                    TottalCalories += SaladOlivie.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n            case (\"DrinkColaAmount\"): {\r\n                    var DrinkCola = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Drink\"].COLA);\r\n                    TotalPrice += DrinkCola.price * count.innerHTML;\r\n                    TottalCalories += DrinkCola.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n            case (\"DrinkCoffeeAmount\"): {\r\n                    var DrinkCoffee = new _js_main__WEBPACK_IMPORTED_MODULE_2__[\"CreateProduct\"](_js_main__WEBPACK_IMPORTED_MODULE_2__[\"Drink\"].COFFEE);\r\n                    TotalPrice += DrinkCoffee.price * count.innerHTML;\r\n                    TottalCalories += DrinkCoffee.calories * count.innerHTML;\r\n                    break;\r\n            };\r\n        }\r\n        }\r\n\r\n        if (str == \"TotalPrice\") {\r\n            document.getElementById(str).innerHTML = TotalPrice;\r\n        }\r\n\r\n        if (str == \"TottalCalories\") {\r\n            document.getElementById(str).innerHTML = TottalCalories;\r\n        }\r\n        \r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: CreateProduct, Hamburger, Salad, Drink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CreateProduct\", function() { return CreateProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hamburger\", function() { return Hamburger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Salad\", function() { return Salad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drink\", function() { return Drink; });\nfunction CreateProduct(meal) {\r\n    this.name = meal.name;\r\n    this.price = meal.price;\r\n    this.calories = meal.calories;\r\n};\r\n\r\nCreateProduct.prototype.calculatePrice = function() {\r\n    return this.price;\r\n};\r\n\r\nCreateProduct.prototype.calculateCalories = function() {\r\n    return this.calories;\r\n};\r\n\r\n\r\n\r\n// Hamburger object\r\n\r\nfunction Hamburger(size, stuffing) {\r\n    this.name = size.name + \" with \" + stuffing.name;\r\n    this.price = size.price + stuffing.price;\r\n    this.calories = size.calories + stuffing.calories;\r\n};\r\n\r\nHamburger.prototype = Object.create(CreateProduct.prototype);\r\n\r\nHamburger.prototype.getStuffing = function() {\r\n    return stuffing.name;\r\n};\r\n\r\nHamburger.prototype.getSize = function() {\r\n    return size.name;\r\n}; \r\n\r\nHamburger.SIZE_SMALL = {\r\n    name: 'Small hamburger',\r\n    price: 50,\r\n    calories: 20\r\n};\r\n\r\nHamburger.SIZE_LARGE = {\r\n    name: 'Large hamburger',\r\n    price: 100,\r\n    calories: 40\r\n};\r\n\r\nHamburger.STUFFING_CHEESE = {\r\n    name: 'cheese',\r\n    price: 10,\r\n    calories: 20\r\n};\r\n\r\nHamburger.STUFFING_SALAD = {\r\n    name: 'salad',\r\n    price: 20,\r\n    calories: 5\r\n};\r\n\r\nHamburger.STUFFING_POTATO = {\r\n    name: 'potato',\r\n    price: 15,\r\n    calories: 10\r\n};\r\n\r\n// Salad object\r\n\r\nfunction Salad() {\r\n\r\n}\r\n\r\nSalad.CAESAR = {\r\n    name: 'Caesar',\r\n    price: 100,\r\n    calories: 20\r\n};\r\nSalad.OLIVIE = {\r\n    name: 'Olivie',\r\n    price: 50,\r\n    calories: 80\r\n};\r\n\r\n// Drink object\r\n\r\nfunction Drink() {\r\n    \r\n}\r\n\r\nDrink.COLA = {\r\n    name: 'Cola',\r\n    price: 50,\r\n    calories: 40\r\n};\r\nDrink.COFFEE = {\r\n    name: 'Coffee',\r\n    price: 80,\r\n    calories: 20\r\n};\r\n\r\n\r\n\r\n\r\n// Testing\r\n// var hamburger1 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);\r\n\r\n// var Product1 = new CreateProduct(hamburger1);\r\n\r\n// console.log(Product1.name)\r\n// console.log(Product1.price)\r\n// console.log(Product1.calculateCalories())\r\n\r\n// DOM\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./styles/reset.css":
/*!**************************!*\
  !*** ./styles/reset.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./styles/reset.css?");

/***/ })

/******/ });