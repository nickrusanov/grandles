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

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst locBtn = document.querySelector('.location__btn');\r\nconst locReset = document.querySelector('.location__reset');\r\nconst locInput = document.querySelector('.location__input');\r\nconst locBox = document.querySelector('.location__box');\r\n\r\nlocBtn.addEventListener('click', () => {\r\n\tif (locBtn.classList.contains('location__btn--active')) {\r\n\t\tlocBtn.classList.remove('location__btn--active');\r\n\t\tlocBox.classList.remove('location__box--visible');\r\n\t} else {\r\n\t\tlocBtn.classList.add('location__btn--active');\r\n\t\tlocBox.classList.add('location__box--visible');\r\n\t\t\r\n\t}\r\n\t// location__reset\r\n\r\n})\n\n//# sourceURL=webpack://gulp-start/./src/js/header.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/header.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;