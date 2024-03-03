"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/loading",{

/***/ "(app-pages-browser)/./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>{\n    const initialDarkMode =  true ? localStorage.getItem(\"dark\") === \"true\" : 0;\n    return {\n        dark: initialDarkMode,\n        toggle: ()=>{\n            set((state)=>{\n                const dark = !state.dark;\n                localStorage.setItem(\"dark\", dark.toString());\n                return {\n                    dark\n                };\n            });\n        }\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7NkRBQ2lDO0FBRWpDLE1BQU1DLFdBQVdELCtDQUFNQSxDQUFDLENBQUNFO0lBQ3ZCLE1BQU1DLGtCQUFrQixLQUFrQixHQUFjQyxhQUFhQyxPQUFPLENBQUMsWUFBWSxTQUFTLENBQUk7SUFFdEcsT0FBTztRQUNMQyxNQUFNSDtRQUNOSSxRQUFRO1lBQ05MLElBQUksQ0FBQ007Z0JBQ0gsTUFBTUYsT0FBTyxDQUFDRSxNQUFNRixJQUFJO2dCQUN4QkYsYUFBYUssT0FBTyxDQUFDLFFBQVFILEtBQUtJLFFBQVE7Z0JBRTFDLE9BQU87b0JBQUVKO2dCQUFNO1lBQ2pCO1FBQ0Y7SUFDRjtBQUNGO0FBRUEsK0RBQWVMLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zdG9yZS5qcz81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcblxuY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoKHNldCkgPT4ge1xuICBjb25zdCBpbml0aWFsRGFya01vZGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrJykgPT09ICd0cnVlJyA6IHRydWUgO1xuXG4gIHJldHVybiB7XG4gICAgZGFyazogaW5pdGlhbERhcmtNb2RlLFxuICAgIHRvZ2dsZTogKCkgPT4ge1xuICAgICAgc2V0KChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXJrID0gIXN0YXRlLmRhcms7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGFya1wiLCBkYXJrLnRvU3RyaW5nKCkpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgZGFyayAgfTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH07XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3RvcmU7XG4iXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlU3RvcmUiLCJzZXQiLCJpbml0aWFsRGFya01vZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGFyayIsInRvZ2dsZSIsInN0YXRlIiwic2V0SXRlbSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/store.js\n"));

/***/ })

});