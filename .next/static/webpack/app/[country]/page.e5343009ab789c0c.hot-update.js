"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[country]/page",{

/***/ "(app-pages-browser)/./src/app/components/header.js":
/*!**************************************!*\
  !*** ./src/app/components/header.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"(app-pages-browser)/./src/app/store.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Header = ()=>{\n    _s();\n    const darkMode = (0,_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((state)=>state.dark);\n    const toggle = (0,_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((state)=>state.toggle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(darkMode ? \"bg-lightDark\" : \"bg-white\", \" h-20 flex justify-between items-center px-4\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"\".concat(darkMode ? \"text-white\" : \"text-dark\", \" text-lg font-medium\"),\n                children: \"Where in the world ?\"\n            }, void 0, false, {\n                fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/header.js\",\n                lineNumber: 14,\n                columnNumber: 6\n            }, undefined),\n            darkMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                onClick: toggle,\n                src: \"icon-sun.svg\",\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/header.js\",\n                lineNumber: 15,\n                columnNumber: 18\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                onClick: toggle,\n                src: \"moon-solid.svg\",\n                className: \"\"\n            }, void 0, false, {\n                fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/header.js\",\n                lineNumber: 15,\n                columnNumber: 81\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/header.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"YQHTpJtDOVaXrfFMzGWNNAbCl34=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVrQztBQUNGO0FBR2hDLE1BQU1FLFNBQVM7O0lBQ1gsTUFBTUMsV0FBV0Ysa0RBQVFBLENBQUMsQ0FBQ0csUUFBVUEsTUFBTUMsSUFBSTtJQUMvQyxNQUFNQyxTQUFTTCxrREFBUUEsQ0FBQyxDQUFDRyxRQUFVQSxNQUFNRSxNQUFNO0lBR2pELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLEdBQTBDLE9BQXZDTCxXQUFXLGlCQUFpQixZQUFXOzswQkFDekQsOERBQUNNO2dCQUFHRCxXQUFXLEdBQXlDLE9BQXRDTCxXQUFXLGVBQWUsYUFBWTswQkFBdUI7Ozs7OztZQUM5RUEseUJBQVcsOERBQUNPO2dCQUFJQyxTQUFTTDtnQkFBUU0sS0FBSTtnQkFBZUosV0FBVTs7Ozs7MENBQVksOERBQUNFO2dCQUFJQyxTQUFTTDtnQkFBUU0sS0FBSTtnQkFBaUJKLFdBQVU7Ozs7Ozs7Ozs7OztBQUlySTtHQVpNTjs7UUFDZUQsOENBQVFBO1FBQ1ZBLDhDQUFRQTs7O0tBRnJCQztBQWFOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIuanM/OWI4MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XG5cblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhcmtNb2RlID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5kYXJrKTtcbiAgICBjb25zdCB0b2dnbGUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnRvZ2dsZSk7XG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7ZGFya01vZGUgPyAnYmctbGlnaHREYXJrJyA6ICdiZy13aGl0ZSd9IGgtMjAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTRgfT5cbiAgICAgPGgyIGNsYXNzTmFtZT17YCR7ZGFya01vZGUgPyAndGV4dC13aGl0ZScgOiAndGV4dC1kYXJrJ30gdGV4dC1sZyBmb250LW1lZGl1bWB9PldoZXJlIGluIHRoZSB3b3JsZCA/PC9oMj5cbiAgICAge2RhcmtNb2RlID8gPGltZyBvbkNsaWNrPXt0b2dnbGV9IHNyYz1cImljb24tc3VuLnN2Z1wiIGNsYXNzTmFtZT1cIlwiPjwvaW1nPiA6IDxpbWcgb25DbGljaz17dG9nZ2xlfSBzcmM9XCJtb29uLXNvbGlkLnN2Z1wiIGNsYXNzTmFtZT1cIlwiPjwvaW1nPn1cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0b3JlIiwiSGVhZGVyIiwiZGFya01vZGUiLCJzdGF0ZSIsImRhcmsiLCJ0b2dnbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImltZyIsIm9uQ2xpY2siLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/header.js\n"));

/***/ })

});