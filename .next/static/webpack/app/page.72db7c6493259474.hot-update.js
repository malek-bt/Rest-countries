"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/home.js":
/*!************************************!*\
  !*** ./src/app/components/home.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"(app-pages-browser)/./src/app/store.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./src/app/components/header.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"(app-pages-browser)/./src/app/components/search.js\");\n/* harmony import */ var _countryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countryCard */ \"(app-pages-browser)/./src/app/components/countryCard.js\");\n/* harmony import */ var _dataStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dataStore */ \"(app-pages-browser)/./src/app/dataStore.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading */ \"(app-pages-browser)/./src/app/loading.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const darkMode = (0,_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((state)=>state.dark);\n    const { data, fetchData } = (0,_dataStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);\n    const [selectedRegion, setSelectedRegion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, [\n        data !== null\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"\", darkMode);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Filter data based on search input and selected region\n        const filteredCountries = data === null || data === void 0 ? void 0 : data.filter((country)=>{\n            const bySearch = country.name.common.toLowerCase().includes(searchInput.toLowerCase());\n            const byRegion = selectedRegion === \"\" || country.region.includes(selectedRegion);\n            const excludeCountry = country.name.common.toLowerCase() !== \"israel\";\n            return bySearch && byRegion && excludeCountry;\n        });\n        setFilteredData(filteredCountries);\n    }, [\n        data,\n        searchInput,\n        selectedRegion\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" min-h-screen md:p-10 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            onSearchChange: (value)=>setSearchInput(value),\n                            onRegionChange: (value)=>setSelectedRegion(value)\n                        }, void 0, false, {\n                            fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap gap-10 \",\n                                children: filteredData ? filteredData === null || filteredData === void 0 ? void 0 : filteredData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_countryCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        item: item\n                                    }, item.name.common, false, {\n                                        fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 20\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/malek/Desktop/countries github/countries/src/app/components/home.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(HomePage, \"vkatwf31sefiRGGdmoOlJAOf96E=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _dataStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFDdEI7QUFDRjtBQUNBO0FBQ1U7QUFDQTtBQUVQO0FBQ2U7QUFFaEQsTUFBTVUsV0FBVzs7SUFDZixNQUFNQyxXQUFXUixrREFBUUEsQ0FBQyxDQUFDUyxRQUFVQSxNQUFNQyxJQUFJO0lBQy9DLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR1Isc0RBQVlBO0lBRXhDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDWTtJQUNqRCxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyREQsZ0RBQVNBLENBQUM7UUFDUmM7SUFDRixHQUFHO1FBQUNELFNBQVM7S0FBSztJQUVsQmIsZ0RBQVNBLENBQUM7UUFDUnFCLFFBQVFDLEdBQUcsQ0FBQyxJQUFHWjtJQUNqQixHQUFHLEVBQUU7SUFJTFYsZ0RBQVNBLENBQUM7UUFDUix3REFBd0Q7UUFDeEQsTUFBTXVCLG9CQUFvQlYsaUJBQUFBLDJCQUFBQSxLQUFNVyxNQUFNLENBQUMsQ0FBQ0M7WUFDdEMsTUFBTUMsV0FBV0QsUUFBUUUsSUFBSSxDQUFDQyxNQUFNLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDZixZQUFZYyxXQUFXO1lBQ25GLE1BQU1FLFdBQVdaLG1CQUFtQixNQUFNTSxRQUFRTyxNQUFNLENBQUNGLFFBQVEsQ0FBQ1g7WUFDbEUsTUFBTWMsaUJBQWlCUixRQUFRRSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxPQUFPO1lBQzdELE9BQU9ILFlBQVlLLFlBQVlFO1FBQ2pDO1FBRUFmLGdCQUFnQks7SUFDbEIsR0FBRztRQUFDVjtRQUFNRTtRQUFjSTtLQUFlO0lBR3ZDLHFCQUNFO2tCQUNBLDRFQUFDZTs7OEJBQ0MsOERBQUMvQiwrQ0FBTUE7Ozs7OzhCQUNQLDhEQUFDK0I7b0JBQUlDLFdBQVk7O3NDQUNmLDhEQUFDL0IsK0NBQU1BOzRCQUFDZ0MsZ0JBQWdCLENBQUNDLFFBQVVyQixlQUFlcUI7NEJBQVFDLGdCQUFnQixDQUFDRCxRQUFVakIsa0JBQWtCaUI7Ozs7OztzQ0FDdkcsOERBQUM3QiwwREFBZUE7c0NBRWQsNEVBQUMwQjtnQ0FBSUMsV0FBVTswQ0FDWmxCLGVBQWdCQSx5QkFBQUEsbUNBQUFBLGFBQWNzQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2xDLDhEQUFDbkMsb0RBQVdBO3dDQUFDbUMsTUFBTUE7dUNBQVdBLEtBQUtiLElBQUksQ0FBQ0MsTUFBTTs7OzttRUFDekMsOERBQUNyQixnREFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0FqRE1FOztRQUNhUCw4Q0FBUUE7UUFDR0ksa0RBQVlBOzs7S0FGcENHO0FBbUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lLmpzP2QzNjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVN0b3JlIGZyb20gXCIuLi9zdG9yZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgQ291bnRyeUNhcmQgZnJvbSBcIi4vY291bnRyeUNhcmRcIjtcbmltcG9ydCB1c2VEYXRhU3RvcmUgZnJvbSBcIi4uL2RhdGFTdG9yZVwiO1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vbG9hZGluZ1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGRhcmtNb2RlID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5kYXJrKTtcbiAgY29uc3QgeyBkYXRhLCBmZXRjaERhdGEgfSA9IHVzZURhdGFTdG9yZSgpO1xuXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlsdGVyZWREYXRhLCBzZXRGaWx0ZXJlZERhdGFdID0gdXNlU3RhdGUoZGF0YSk7XG4gIGNvbnN0IFtzZWxlY3RlZFJlZ2lvbiwgc2V0U2VsZWN0ZWRSZWdpb25dID0gdXNlU3RhdGUoJycpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtkYXRhICE9PSBudWxsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlwiLGRhcmtNb2RlKVxuICB9LCBbXSk7XG5cbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGaWx0ZXIgZGF0YSBiYXNlZCBvbiBzZWFyY2ggaW5wdXQgYW5kIHNlbGVjdGVkIHJlZ2lvblxuICAgIGNvbnN0IGZpbHRlcmVkQ291bnRyaWVzID0gZGF0YT8uZmlsdGVyKChjb3VudHJ5KSA9PiB7XG4gICAgICBjb25zdCBieVNlYXJjaCA9IGNvdW50cnkubmFtZS5jb21tb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGNvbnN0IGJ5UmVnaW9uID0gc2VsZWN0ZWRSZWdpb24gPT09ICcnIHx8IGNvdW50cnkucmVnaW9uLmluY2x1ZGVzKHNlbGVjdGVkUmVnaW9uKTtcbiAgICAgIGNvbnN0IGV4Y2x1ZGVDb3VudHJ5ID0gY291bnRyeS5uYW1lLmNvbW1vbi50b0xvd2VyQ2FzZSgpICE9PSAnaXNyYWVsJzsgXG4gICAgICByZXR1cm4gYnlTZWFyY2ggJiYgYnlSZWdpb24gJiYgZXhjbHVkZUNvdW50cnk7XG4gICAgfSk7XG5cbiAgICBzZXRGaWx0ZXJlZERhdGEoZmlsdGVyZWRDb3VudHJpZXMpO1xuICB9LCBbZGF0YSwgc2VhcmNoSW5wdXQgLCBzZWxlY3RlZFJlZ2lvbl0pO1xuIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8ZGl2ID5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgIG1pbi1oLXNjcmVlbiBtZDpwLTEwIGB9PlxuICAgICAgICA8U2VhcmNoIG9uU2VhcmNoQ2hhbmdlPXsodmFsdWUpID0+IHNldFNlYXJjaElucHV0KHZhbHVlKX0gb25SZWdpb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0U2VsZWN0ZWRSZWdpb24odmFsdWUpfS8+XG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEwIFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkRGF0YSA/IChmaWx0ZXJlZERhdGE/Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8Q291bnRyeUNhcmQgaXRlbT17aXRlbX0ga2V5PXtpdGVtLm5hbWUuY29tbW9ufSAvPlxuICAgICAgICAgICAgKSkpIDogKDxMb2FkaW5nLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTdG9yZSIsIkhlYWRlciIsIlNlYXJjaCIsIkNvdW50cnlDYXJkIiwidXNlRGF0YVN0b3JlIiwiTG9hZGluZyIsIkFuaW1hdGVQcmVzZW5jZSIsIkhvbWVQYWdlIiwiZGFya01vZGUiLCJzdGF0ZSIsImRhcmsiLCJkYXRhIiwiZmV0Y2hEYXRhIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsInNlbGVjdGVkUmVnaW9uIiwic2V0U2VsZWN0ZWRSZWdpb24iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyZWRDb3VudHJpZXMiLCJmaWx0ZXIiLCJjb3VudHJ5IiwiYnlTZWFyY2giLCJuYW1lIiwiY29tbW9uIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImJ5UmVnaW9uIiwicmVnaW9uIiwiZXhjbHVkZUNvdW50cnkiLCJkaXYiLCJjbGFzc05hbWUiLCJvblNlYXJjaENoYW5nZSIsInZhbHVlIiwib25SZWdpb25DaGFuZ2UiLCJtYXAiLCJpdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/home.js\n"));

/***/ })

});