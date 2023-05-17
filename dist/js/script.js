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

eval("__webpack_require__.r(__webpack_exports__);\n// window.addEventListener('scroll', () => {\n// \tif (window.scrollY > 58) {\n// \t\tdocument.querySelector('.nav-desktop').classList.add('nav-desktop--fixed');\n// \t\tdocument\n// \t\t\t.querySelector('.nav-desktop__logo')\n// \t\t\t.classList.add('nav-desktop__logo--small');\n// \t\tdocument.querySelector('.header').classList.add('header--space');\n// \t} else {\n// \t\tdocument\n// \t\t\t.querySelector('.nav-desktop')\n// \t\t\t.classList.remove('nav-desktop--fixed');\n// \t\tdocument\n// \t\t\t.querySelector('.nav-desktop__logo')\n// \t\t\t.classList.remove('nav-desktop__logo--small');\n// \t\tdocument.querySelector('.header').classList.remove('header--space');\n// \t}\n// });\n\nwindow.addEventListener('scroll', function () {\n  if (window.scrollY > 58) {\n    document.querySelector('.nav-mobile').classList.add('nav-mobile--fixed');\n    document.querySelector('.header').classList.add('header--space');\n  } else {\n    document.querySelector('.nav-mobile').classList.remove('nav-mobile--fixed');\n    document.querySelector('.header').classList.remove('header--space');\n  }\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/header.js?");

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar locBtn = document.querySelector('.location__btn');\nvar locReset = document.querySelector('.location__reset');\nvar locInput = document.querySelector('.location__input');\nvar locBox = document.querySelector('.location__box');\nlocBtn.addEventListener('click', function () {\n  if (locBtn.classList.contains('location__btn--active')) {\n    locBtn.classList.remove('location__btn--active');\n    locBox.classList.remove('location__box--visible');\n  } else {\n    locBtn.classList.add('location__btn--active');\n    locBox.classList.add('location__box--visible');\n  }\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/location.js?");

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
/******/ 	__webpack_modules__["./src/js/header.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/location.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;