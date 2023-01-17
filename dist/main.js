/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_front_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/front.js */ \"./src/scripts/front.js\");\n\ndocument.addEventListener('DOMContentLoaded', (0,_scripts_front_js__WEBPACK_IMPORTED_MODULE_0__.loaded)());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFFekNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUVGLHlEQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2xvYWRlZH0gZnJvbSAnLi9zY3JpcHRzL2Zyb250LmpzJ1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbG9hZGVkKCkpOyJdLCJuYW1lcyI6WyJsb2FkZWQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/front.js":
/*!******************************!*\
  !*** ./src/scripts/front.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loaded\": function() { return /* binding */ loaded; }\n/* harmony export */ });\n// console.log('test')\n\n// export const loaded = function(){ \n//     // console.log('got this far')\n//     $.ajax({\n//         url: \"https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500\",\n//         type: \"GET\",\n//         dataType: \"json\",\n//         success: function (data) {\n//             var families = data.query.categorymembers;\n//             for (let i = 5; i < families.length; i++) {\n//                 let family = families[i];\n//                 let newLink= $('<a>',{\n//                 href: 'https://en.wikipedia.org/wiki/' + family.title,\n//                 text: family.title\n//                 });\n//                 // console.log(family.title + \": \" + family.pageid);\n//                 // childFinder(newLink)\n//                 $('#families-list').append($('<li>').append(newLink));\n//             }\n//         },\n//         error: function(xhr, status, error) {\n//             console.log(xhr.responseText);\n//         }\n//     });\n// }\nconst loaded = function () {\n  console.log('testing fetch');\n  let categories = {};\n  fetch(\"https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category:Language_families&cmlimit=500\").then(response => response.json()).then(data => {\n    var families = data.query.categorymembers;\n    for (let i = 5; i < families.length; i++) {\n      console.log(families[i]);\n      if (!families[i]['title'].includes('Category:')) {\n        let family = families[i];\n        let newLink = document.createElement(\"a\");\n        newLink.href = 'https://en.wikipedia.org/wiki/' + family.title;\n        newLink.textContent = family.title;\n        let newLi = document.createElement(\"li\");\n        newLi.appendChild(newLink);\n        document.getElementById(\"families-list\").appendChild(newLi);\n      }\n    }\n  }).catch(error => console.log(error));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mcm9udC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTUEsTUFBTSxHQUFHLFlBQVc7RUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUM1QixJQUFJQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0VBQ25CQyxLQUFLLENBQUMscUtBQXFLLENBQUMsQ0FDdktDLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLElBQUksSUFBSTtJQUNWLElBQUlDLFFBQVEsR0FBR0QsSUFBSSxDQUFDRSxLQUFLLENBQUNDLGVBQWU7SUFDekMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILFFBQVEsQ0FBQ0ksTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUN0Q1gsT0FBTyxDQUFDQyxHQUFHLENBQUNPLFFBQVEsQ0FBQ0csQ0FBQyxDQUFDLENBQUM7TUFDeEIsSUFBSSxDQUFDSCxRQUFRLENBQUNHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDRSxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUM7UUFDNUMsSUFBSUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLENBQUMsQ0FBQztRQUN4QixJQUFJSSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN6Q0YsT0FBTyxDQUFDRyxJQUFJLEdBQUcsZ0NBQWdDLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBSztRQUM5REosT0FBTyxDQUFDSyxXQUFXLEdBQUdOLE1BQU0sQ0FBQ0ssS0FBSztRQUNsQyxJQUFJRSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztRQUN4Q0ksS0FBSyxDQUFDQyxXQUFXLENBQUNQLE9BQU8sQ0FBQztRQUMxQkMsUUFBUSxDQUFDTyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUNELFdBQVcsQ0FBQ0QsS0FBSyxDQUFDO01BQy9EO0lBQ0o7RUFDSixDQUFDLENBQUMsQ0FDREcsS0FBSyxDQUFDQyxLQUFLLElBQUl6QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3dCLEtBQUssQ0FBQyxDQUFDO0FBQzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZnJvbnQuanM/MmM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zb2xlLmxvZygndGVzdCcpXG5cbi8vIGV4cG9ydCBjb25zdCBsb2FkZWQgPSBmdW5jdGlvbigpeyBcbi8vICAgICAvLyBjb25zb2xlLmxvZygnZ290IHRoaXMgZmFyJylcbi8vICAgICAkLmFqYXgoe1xuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210aXRsZT1DYXRlZ29yeTpMYW5ndWFnZV9mYW1pbGllcyZjbWxpbWl0PTUwMFwiLFxuLy8gICAgICAgICB0eXBlOiBcIkdFVFwiLFxuLy8gICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4vLyAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4vLyAgICAgICAgICAgICB2YXIgZmFtaWxpZXMgPSBkYXRhLnF1ZXJ5LmNhdGVnb3J5bWVtYmVycztcbi8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSA1OyBpIDwgZmFtaWxpZXMubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgICAgICAgICBsZXQgZmFtaWx5ID0gZmFtaWxpZXNbaV07XG4vLyAgICAgICAgICAgICAgICAgbGV0IG5ld0xpbms9ICQoJzxhPicse1xuLy8gICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8nICsgZmFtaWx5LnRpdGxlLFxuLy8gICAgICAgICAgICAgICAgIHRleHQ6IGZhbWlseS50aXRsZVxuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZhbWlseS50aXRsZSArIFwiOiBcIiArIGZhbWlseS5wYWdlaWQpO1xuLy8gICAgICAgICAgICAgICAgIC8vIGNoaWxkRmluZGVyKG5ld0xpbmspXG4vLyAgICAgICAgICAgICAgICAgJCgnI2ZhbWlsaWVzLWxpc3QnKS5hcHBlbmQoJCgnPGxpPicpLmFwcGVuZChuZXdMaW5rKSk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5yZXNwb25zZVRleHQpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfSk7XG4vLyB9XG5leHBvcnQgY29uc3QgbG9hZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3RpbmcgZmV0Y2gnKTtcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHt9O1xuICAgIGZldGNoKFwiaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210aXRsZT1DYXRlZ29yeTpMYW5ndWFnZV9mYW1pbGllcyZjbWxpbWl0PTUwMFwiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgdmFyIGZhbWlsaWVzID0gZGF0YS5xdWVyeS5jYXRlZ29yeW1lbWJlcnM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gNTsgaSA8IGZhbWlsaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmFtaWxpZXNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKCFmYW1pbGllc1tpXVsndGl0bGUnXS5pbmNsdWRlcygnQ2F0ZWdvcnk6Jykpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmFtaWx5ID0gZmFtaWxpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpbmsuaHJlZiA9ICdodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS8nICsgZmFtaWx5LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdMaW5rLnRleHRDb250ZW50ID0gZmFtaWx5LnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpLmFwcGVuZENoaWxkKG5ld0xpbmspO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhbWlsaWVzLWxpc3RcIikuYXBwZW5kQ2hpbGQobmV3TGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59XG4iXSwibmFtZXMiOlsibG9hZGVkIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiZmFtaWxpZXMiLCJxdWVyeSIsImNhdGVnb3J5bWVtYmVycyIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsImZhbWlseSIsIm5ld0xpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsIm5ld0xpIiwiYXBwZW5kQ2hpbGQiLCJnZXRFbGVtZW50QnlJZCIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/front.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;