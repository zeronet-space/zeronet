"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _zeronet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zeronet.theme */ \"./zeronet.theme.ts\");\n/* harmony import */ var _components_PostLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostLink */ \"./components/PostLink.tsx\");\n/* harmony import */ var _components_ZeroHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ZeroHead */ \"./components/ZeroHead.tsx\");\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ZeroHead__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"zer\\xf8net\",\n                description: \"\\xd8\",\n                url: \"https://zeronet.space/\"\n            }, void 0, false, {\n                fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                maxW: \"container.xl\",\n                colorScheme: _zeronet_theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colors.black,\n                children: [\n                    \"Тут что-то будет...\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 28\n                    }, this),\n                    JSON.parse(posts).map(function(post) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                id: post.id,\n                                author: post.author,\n                                title: post.title,\n                                subtitle: post.subtitle,\n                                createdAt: post.createdAt\n                            }, void 0, false, {\n                                fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBS3lCO0FBR1c7QUFJUztBQUNBOztBQUU5QixRQUFRLENBQUNJLElBQUksQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFWQyxLQUFLLEdBQVAsS0FBUyxDQUFQQSxLQUFLOztJQUNsQyxNQUFNOzt3RkFFREYsNERBQVE7Z0JBQ1BHLEtBQUssRUFBQyxDQUFTO2dCQUNkQyxXQUFVLEVBQUMsQ0FBRztnQkFDZEMsR0FBRSxFQUFDLENBQXdCOzs7Ozs7d0ZBRTdCUix1REFBUztnQkFBQ1MsSUFBSSxFQUFDLENBQWM7Z0JBQUNDLFdBQVcsRUFBRVQsbUVBQWtCOztvQkFBRSxDQUMzQztnR0FBQ1ksQ0FBRTs7Ozs7b0JBQ3JCQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1YsS0FBSyxFQUFFVyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsSUFBSTtzQ0FBSSxNQUNwQyxDQUFDO2tIQUFPZiw0REFBUTtnQ0FDUGdCLEVBQUUsRUFBRUQsSUFBSSxDQUFDQyxFQUFFO2dDQUNYQyxNQUFNLEVBQUVGLElBQUksQ0FBQ0UsTUFBTTtnQ0FDbkJiLEtBQUssRUFBRVcsSUFBSSxDQUFDWCxLQUFLO2dDQUNqQmMsUUFBUSxFQUFFSCxJQUFJLENBQUNHLFFBQVE7Z0NBQ3ZCQyxTQUFTLEVBQUVKLElBQUksQ0FBQ0ksU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQyxDQUFDO0tBdEJ1QmpCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXG4gIENvbnRhaW5lcixcbiAgQ2VudGVyLFxuICBUZXh0LFxuICBCb3ggXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBGbGV4LCBTcGFjZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vemVyb25ldC50aGVtZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdCdcbmltcG9ydCBQb3N0TGluayBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RMaW5rJ1xuaW1wb3J0IFplcm9IZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvWmVyb0hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxaZXJvSGVhZFxuICAgICAgICB0aXRsZT0nemVyw7huZXQnXG4gICAgICAgIGRlc2NyaXB0aW9uPSfDmCdcbiAgICAgICAgdXJsPSdodHRwczovL3plcm9uZXQuc3BhY2UvJ1xuICAgICAgLz5cbiAgICAgIDxDb250YWluZXIgbWF4Vz0nY29udGFpbmVyLnhsJyBjb2xvclNjaGVtZT17dGhlbWUuY29sb3JzLmJsYWNrfT5cbiAgICAgICAg0KLRg9GCINGH0YLQvi3RgtC+INCx0YPQtNC10YIuLi48YnIvPlxuICAgICAgICB7SlNPTi5wYXJzZShwb3N0cykubWFwKHBvc3QgPT4gPD5cbiAgICAgICAgICA8UG9zdExpbmtcbiAgICAgICAgICAgIGlkPXtwb3N0LmlkfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0LmF1dGhvcn1cbiAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgc3VidGl0bGU9e3Bvc3Quc3VidGl0bGV9XG4gICAgICAgICAgICBjcmVhdGVkQXQ9e3Bvc3QuY3JlYXRlZEF0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPil9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly96ZXJvbmV0LnNwYWNlL2FwaS9wb3N0cycpO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy50ZXh0KCk7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdHMgfSB9O1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInRoZW1lIiwiUG9zdExpbmsiLCJaZXJvSGVhZCIsIkhvbWUiLCJwb3N0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJtYXhXIiwiY29sb3JTY2hlbWUiLCJjb2xvcnMiLCJibGFjayIsImJyIiwiSlNPTiIsInBhcnNlIiwibWFwIiwicG9zdCIsImlkIiwiYXV0aG9yIiwic3VidGl0bGUiLCJjcmVhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});