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

/***/ "(app-pages-browser)/./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>{\n    return {\n        dark: true,\n        toggle: ()=>{\n            set((state)=>{\n                const dark = !state.dark;\n                localStorage.setItem(\"dark\", dark.toString());\n                return {\n                    dark\n                };\n            });\n        }\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStore);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7QUFDaUM7QUFFakMsTUFBTUMsV0FBV0QsK0NBQU1BLENBQUMsQ0FBQ0U7SUFHdkIsT0FBTztRQUNMQyxNQUFNO1FBQ05DLFFBQVE7WUFDTkYsSUFBSSxDQUFDRztnQkFDSCxNQUFNRixPQUFPLENBQUNFLE1BQU1GLElBQUk7Z0JBQ3hCRyxhQUFhQyxPQUFPLENBQUMsUUFBUUosS0FBS0ssUUFBUTtnQkFFMUMsT0FBTztvQkFBRUw7Z0JBQU07WUFDakI7UUFDRjtJQUNGO0FBQ0Y7QUFFQSwrREFBZUYsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3N0b3JlLmpzPzU4YzciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xuXG5jb25zdCB1c2VTdG9yZSA9IGNyZWF0ZSgoc2V0KSA9PiB7XG4gIFxuXG4gIHJldHVybiB7XG4gICAgZGFyazogdHJ1ZSxcbiAgICB0b2dnbGU6ICgpID0+IHtcbiAgICAgIHNldCgoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgZGFyayA9ICFzdGF0ZS5kYXJrO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRhcmtcIiwgZGFyay50b1N0cmluZygpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGRhcmsgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JlO1xuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInVzZVN0b3JlIiwic2V0IiwiZGFyayIsInRvZ2dsZSIsInN0YXRlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/store.js\n"));

/***/ })

});