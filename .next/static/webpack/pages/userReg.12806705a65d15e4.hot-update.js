"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/userReg",{

/***/ "./pages/userReg.js":
/*!**************************!*\
  !*** ./pages/userReg.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_LoginComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LoginComponent */ \"./Components/LoginComponent.js\");\n/* harmony import */ var _Components_RegisterComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RegisterComponent */ \"./Components/RegisterComponent.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction userReg(param) {\n    var name = param.name;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden \"), style_userlogin = ref[0], setStyleUserlog = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"hidden \"), style_userReg = ref1[0], setStyleUserReg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"login\"), query = ref2[0], setQuery = ref2[1];\n    //for query of Link tag \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name == \"Login\") {\n            setQuery(\"Register\");\n        } else if (name == \"Register\") {\n            setQuery(\"Login\");\n        }\n    });\n    // for user register page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query == \"Register\") {\n            setStyleUserReg(\"hidden\");\n            setStyleUserlog(\"login-page\");\n        }\n    });\n    // for user login page \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (query == \"Login\") {\n            setStyleUserReg(\"login-page\");\n            setStyleUserlog(\"hidden\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"reg_main \",\n        style: {\n            width: \"100vw\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"2rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"CRicBRos - \",\n                                name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_LoginComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: style_userlogin\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_RegisterComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: style_userReg\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left-menu \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: {\n                        pathname: \"/userReg\",\n                        query: {\n                            name: query\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"reg-btn\",\n                        children: name == \"Login\" ? \"Register\" : \"login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 62,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(userReg, \"5ykikv//82L81Yst2Z8QgPNmT20=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReg);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlclJlZy5qcz9hY2NmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkNvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50cy9Mb2dpbkNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJDb21wb25lbnQgZnJvbSBcIi4uL0NvbXBvbmVudHMvUmVnaXN0ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IGNuIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiB1c2VyUmVnKHsgbmFtZSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3N0eWxlX3VzZXJsb2dpbiwgc2V0U3R5bGVVc2VybG9nXSA9IHVzZVN0YXRlKFwiaGlkZGVuIFwiKTtcclxuICBjb25zdCBbc3R5bGVfdXNlclJlZywgc2V0U3R5bGVVc2VyUmVnXSA9IHVzZVN0YXRlKFwiaGlkZGVuIFwiKTtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwibG9naW5cIik7XHJcblxyXG4vL2ZvciBxdWVyeSBvZiBMaW5rIHRhZyBcclxuXHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgaWYgKG5hbWUgPT0gXCJMb2dpblwiKSB7XHJcbiAgICBzZXRRdWVyeShcIlJlZ2lzdGVyXCIpO1xyXG4gIH1cclxuICBlbHNlIGlmKG5hbWUgPT0gXCJSZWdpc3RlclwiKXtcclxuICAgIHNldFF1ZXJ5KFwiTG9naW5cIik7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4gIC8vIGZvciB1c2VyIHJlZ2lzdGVyIHBhZ2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChxdWVyeSA9PSBcIlJlZ2lzdGVyXCIpIHtcclxuICAgICAgc2V0U3R5bGVVc2VyUmVnKFwiaGlkZGVuXCIpO1xyXG4gICAgICBzZXRTdHlsZVVzZXJsb2coXCJsb2dpbi1wYWdlXCIpO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuLy8gZm9yIHVzZXIgbG9naW4gcGFnZSBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChxdWVyeSA9PSBcIkxvZ2luXCIpIHtcclxuICAgICAgc2V0U3R5bGVVc2VyUmVnKFwibG9naW4tcGFnZVwiKTtcclxuICAgICAgc2V0U3R5bGVVc2VybG9nKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnX21haW4gXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwdndcIiwgbWluSGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMnJlbVwiIH19PlxyXG4gICAgICAgICAgPGgxPkNSaWNCUm9zIC0ge25hbWV9IDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxMb2dpbkNvbXBvbmVudCBjbGFzc05hbWU9e3N0eWxlX3VzZXJsb2dpbiB9IC8+XHJcbiAgICAgICAgICA8UmVnaXN0ZXJDb21wb25lbnQgY2xhc3NOYW1lPXtzdHlsZV91c2VyUmVnIH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1tZW51IFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3tcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXNlclJlZycsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7IG5hbWU6IHF1ZXJ5IH0sXHJcbiAgICAgICAgICB9IH0+PGJ1dHRvbiBjbGFzc05hbWU9XCJyZWctYnRuXCIgPntuYW1lPT1cIkxvZ2luXCI/XCJSZWdpc3RlclwiOlwibG9naW5cIiB9PC9idXR0b24+PC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc29sZS5sb2coY29udGV4dC5xdWVyeSk7XHJcbiAgLy8gcmV0dXJucyB7IGlkOiBlcGlzb2RlLml0dW5lcy5lcGlzb2RlLCB0aXRsZTogZXBpc29kZS50aXRsZX1cclxuXHJcbiAgY29uc3QgZGVmYXVsdG5hbWUgPSBcImxvZ2luXCI7XHJcbiAgLy95b3UgY2FuIG1ha2UgREIgcXVlcmllcyB1c2luZyB0aGUgZGF0YSBpbiBjb250ZXh0LnF1ZXJ5XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG5hbWU6IGNvbnRleHQucXVlcnkubmFtZSB8fCBkZWZhdWx0bmFtZSwgLy9wYXNzIGl0IHRvIHRoZSBwYWdlIHByb3BzXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW5Db21wb25lbnQiLCJSZWdpc3RlckNvbXBvbmVudCIsImNuIiwidXNlUm91dGVyIiwiTGluayIsInVzZXJSZWciLCJuYW1lIiwicm91dGVyIiwic3R5bGVfdXNlcmxvZ2luIiwic2V0U3R5bGVVc2VybG9nIiwic3R5bGVfdXNlclJlZyIsInNldFN0eWxlVXNlclJlZyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsIndpZHRoIiwibWluSGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiaDEiLCJocmVmIiwicGF0aG5hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/userReg.js\n");

/***/ })

});