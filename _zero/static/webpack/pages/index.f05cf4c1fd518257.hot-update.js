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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_ZeroHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ZeroHead */ \"./components/ZeroHead.tsx\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    var posts = param.posts;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ZeroHead__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"zer\\xf8net\",\n                description: \"\\xd8\",\n                type: \"website\",\n                url: \"https://zeronet.space/\"\n            }, void 0, false, {\n                fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                w: \"100%\",\n                m: \"0\",\n                children: posts.map(function(post) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostLink, {\n                            id: post.meta.id,\n                            author: post.meta.author,\n                            title: post.meta.title,\n                            subtitle: post.meta.subtitle,\n                            createdAt: post.meta.createdAt,\n                            updatedAt: post.meta.modifiedAt\n                        }, void 0, false, {\n                            fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/var/www/i0x/data/www/zeronet.space/zeronet/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQVFPOztBQUU5QixRQUFRLENBQUNFLElBQUksQ0FBQyxLQUFTLEVBQUUsQ0FBQztRQUFWQyxLQUFLLEdBQVAsS0FBUyxDQUFQQSxLQUFLOztJQUNsQyxNQUFNOzt3RkFFREYsNERBQVE7Z0JBQ1BHLEtBQUssRUFBQyxDQUFTO2dCQUNkQyxXQUFVLEVBQUMsQ0FBRztnQkFDZkMsSUFBSSxFQUFDLENBQVM7Z0JBQ2RDLEdBQUcsRUFBQyxDQUF3Qjs7Ozs7O3dGQUU3QlAsaURBQUc7Z0JBQUNRLENBQUMsRUFBQyxDQUFNO2dCQUFDQyxDQUFDLEVBQUMsQ0FBRzswQkFDaEJOLEtBQUssQ0FBQ08sR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7a0NBQUksTUFDeEIsQ0FBQzs4R0FBT0MsUUFBUTs0QkFDUEMsRUFBRSxFQUFFRixJQUFJLENBQUNHLElBQUksQ0FBQ0QsRUFBRTs0QkFDaEJFLE1BQU0sRUFBRUosSUFBSSxDQUFDRyxJQUFJLENBQUNDLE1BQU07NEJBQ3hCWCxLQUFLLEVBQUVPLElBQUksQ0FBQ0csSUFBSSxDQUFDVixLQUFLOzRCQUN0QlksUUFBUSxFQUFFTCxJQUFJLENBQUNHLElBQUksQ0FBQ0UsUUFBUTs0QkFDNUJDLFNBQVMsRUFBRU4sSUFBSSxDQUFDRyxJQUFJLENBQUNHLFNBQVM7NEJBQzlCQyxTQUFTLEVBQUVQLElBQUksQ0FBQ0csSUFBSSxDQUFDSyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUFNM0MsQ0FBQztLQXZCdUJqQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBnbG9iYnkgfSBmcm9tICdnbG9iYnknXG5pbXBvcnQgbWttZXRhIGZyb20gJ21hcmtlZC1tZXRhZGF0YSdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3plcm9uZXQudGhlbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgWmVyb0hlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9aZXJvSGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFplcm9IZWFkXG4gICAgICAgIHRpdGxlPSd6ZXLDuG5ldCdcbiAgICAgICAgZGVzY3JpcHRpb249J8OYJ1xuICAgICAgICB0eXBlPSd3ZWJzaXRlJ1xuICAgICAgICB1cmw9J2h0dHBzOi8vemVyb25ldC5zcGFjZS8nXG4gICAgICAvPlxuICAgICAgPEJveCB3PScxMDAlJyBtPScwJz5cbiAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IDw+XG4gICAgICAgICAgPFBvc3RMaW5rXG4gICAgICAgICAgICBpZD17cG9zdC5tZXRhLmlkfVxuICAgICAgICAgICAgYXV0aG9yPXtwb3N0Lm1ldGEuYXV0aG9yfVxuICAgICAgICAgICAgdGl0bGU9e3Bvc3QubWV0YS50aXRsZX1cbiAgICAgICAgICAgIHN1YnRpdGxlPXtwb3N0Lm1ldGEuc3VidGl0bGV9XG4gICAgICAgICAgICBjcmVhdGVkQXQ9e3Bvc3QubWV0YS5jcmVhdGVkQXR9XG4gICAgICAgICAgICB1cGRhdGVkQXQ9e3Bvc3QubWV0YS5tb2RpZmllZEF0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvPil9XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBsZXQgcG9zdHM6IGFueSA9IGF3YWl0IGdsb2JieShcIi4vYXJ0aWNsZXMvKiovKi5tZFwiKTtcbiAgcG9zdHMgPSBwb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgbGV0IG1kID0gbmV3IG1rbWV0YShwb3N0KTtcbiAgICBtZC5kZWZpbmVUb2tlbnMoJyN7LS0nLCAnLS19IycpO1xuICAgIGxldCBtZXRhID0gbWQubWV0YWRhdGEoKSxcbiAgICAgICAgZGF0YSA9IG1kLm1hcmtkb3duKCk7XG4gICAgbGV0IHN0YXQgPSBmcy5zdGF0U3luYyhwb3N0KTtcbiAgICByZXR1cm4geyBcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgLi4ubWV0YSwgXG4gICAgICAgIGNyZWF0ZWRBdDogc3RhdC5jdGltZS50b0xvY2FsZVN0cmluZyhcInJ1LVJVXCIpLCBcbiAgICAgICAgbW9kaWZpZWRBdDogc3RhdC5tdGltZS50b0xvY2FsZVN0cmluZyhcInJ1LVJVXCIpLCBcbiAgICAgIH0sIFxuICAgICAgZGF0YTogZGF0YSBcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdHM6IHBvc3RzIH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJaZXJvSGVhZCIsIkhvbWUiLCJwb3N0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwidXJsIiwidyIsIm0iLCJtYXAiLCJwb3N0IiwiUG9zdExpbmsiLCJpZCIsIm1ldGEiLCJhdXRob3IiLCJzdWJ0aXRsZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsIm1vZGlmaWVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});