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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_LoginComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/LoginComponent */ \"./Components/LoginComponent.js\");\n/* harmony import */ var _Components_RegisterComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/RegisterComponent */ \"./Components/RegisterComponent.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction userReg(param) {\n    var name = param.name;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"login-page \"), style_userlogin = ref[0], setStyleUserlog = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"login-page \"), style_userReg = ref1[0], setStyleUserReg = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref2[0], setQuery = ref2[1];\n    // for user register page\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name == \"Register\") {\n            setStyleUserlog(\"hidden\");\n        }\n    }, []);\n    // for user login page \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name == \"Login\") {\n            setStyleUserReg(\"hidden\");\n        }\n    });\n    //for query of Link tag \n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (name == \"Login\") {\n            setQuery(\"Register\");\n        } else if (name == \"Register\") {\n            setQuery(\"Login\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"reg_main \",\n        style: {\n            width: \"100vw\",\n            minHeight: \"100vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"login-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"2rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"CRicBRos - \",\n                                name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_LoginComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                className: style_userlogin\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_RegisterComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: style_userReg\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left-menu \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: {\n                        pathname: \"/userReg\",\n                        query: {\n                            name: query\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"reg-btn\",\n                        children: name == \"Login\" ? \"Register\" : \"login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                        lineNumber: 58,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aayush\\\\Desktop\\\\Prj\\\\crick-bro\\\\pages\\\\userReg.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(userReg, \"zQN2qkwP68RE/IcQ1R+0PhnNiJQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (userReg);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyUmVnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNPO0FBQ007QUFDcEM7QUFDWTtBQUNYOztBQUU3QixTQUFTUSxPQUFPLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDckIsSUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCLElBQTJDTCxHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxhQUFhLENBQUMsRUFUcEUsZUFTd0IsR0FBcUJBLEdBQXVCLEdBQTVDLEVBVHhCLGVBU3lDLEdBQUlBLEdBQXVCLEdBQTNCO0lBQ3ZDLElBQXlDQSxJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxhQUFhLENBQUMsRUFWbEUsYUFVc0IsR0FBcUJBLElBQXVCLEdBQTVDLEVBVnRCLGVBVXVDLEdBQUlBLElBQXVCLEdBQTNCO0lBQ3JDLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBWHhDLEtBV2MsR0FBY0EsSUFBWSxHQUExQixFQVhkLFFBV3dCLEdBQUlBLElBQVksR0FBaEI7SUFFeEIseUJBQXlCO0lBRXZCQyxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ3RCRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7S0FDRixFQUFDLEVBQUUsQ0FDSCxDQUFDO0lBRUosdUJBQXVCO0lBRXJCVixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ25CSyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0I7S0FDRixDQUFDO0lBRUosd0JBQXdCO0lBRXRCWixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ25CTyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEIsTUFDSSxJQUFHUCxJQUFJLElBQUksVUFBVSxFQUFDO1lBQ3pCTyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbkI7S0FDRixDQUFDLENBQUM7SUFHSCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsS0FBSyxFQUFFLE9BQU87WUFBRUMsU0FBUyxFQUFFLE9BQU87U0FBRTs7MEJBQ3RFLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsaUJBQWlCOztrQ0FDOUIsOERBQUNELEtBQUc7d0JBQUNFLEtBQUssRUFBRTs0QkFBRUcsWUFBWSxFQUFFLE1BQU07eUJBQUU7a0NBQ2xDLDRFQUFDQyxJQUFFOztnQ0FBQyxhQUFXO2dDQUFDZCxJQUFJO2dDQUFDLEdBQUM7Ozs7OztnQ0FBSzs7Ozs7NEJBQ3ZCO2tDQUNOLDhEQUFDUSxLQUFHOzswQ0FDRiw4REFBQ2Qsa0VBQWM7Z0NBQUNlLFNBQVMsRUFBRVAsZUFBZTs7Ozs7b0NBQUs7MENBQy9DLDhEQUFDUCxxRUFBaUI7Z0NBQUNjLFNBQVMsRUFBRUwsYUFBYTs7Ozs7b0NBQUs7Ozs7Ozs0QkFDNUM7Ozs7OztvQkFDRjswQkFDTiw4REFBQ0ksS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7MEJBQ3pCLDRFQUFDWCxrREFBSTtvQkFBQ2lCLElBQUksRUFBRTt3QkFDUkMsUUFBUSxFQUFFLFVBQVU7d0JBQ3BCVixLQUFLLEVBQUU7NEJBQUVOLElBQUksRUFBRU0sS0FBSzt5QkFBRTtxQkFDdkI7OEJBQUcsNEVBQUNXLFFBQU07d0JBQUNSLFNBQVMsRUFBQyxTQUFTO2tDQUFHVCxJQUFJLElBQUUsT0FBTyxHQUFDLFVBQVUsR0FBQyxPQUFPOzs7Ozs0QkFBVzs7Ozs7d0JBQU87Ozs7O29CQUNsRjs7Ozs7O1lBQ0YsQ0FDTjtDQUNEO0dBdERNRCxPQUFPOztRQUNDRixrREFBUzs7OztBQW9FMUIsK0RBQWVFLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyUmVnLmpzP2FjY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQ29tcG9uZW50IGZyb20gXCIuLi9Db21wb25lbnRzL0xvZ2luQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZWdpc3RlckNvbXBvbmVudCBmcm9tIFwiLi4vQ29tcG9uZW50cy9SZWdpc3RlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgY24gZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZXJSZWcoeyBuYW1lIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3R5bGVfdXNlcmxvZ2luLCBzZXRTdHlsZVVzZXJsb2ddID0gdXNlU3RhdGUoXCJsb2dpbi1wYWdlIFwiKTtcclxuICBjb25zdCBbc3R5bGVfdXNlclJlZywgc2V0U3R5bGVVc2VyUmVnXSA9IHVzZVN0YXRlKFwibG9naW4tcGFnZSBcIik7XHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbi8vIGZvciB1c2VyIHJlZ2lzdGVyIHBhZ2VcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuYW1lID09IFwiUmVnaXN0ZXJcIikge1xyXG4gICAgICBzZXRTdHlsZVVzZXJsb2coXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSxbXVxyXG4gICk7XHJcbiAgXHJcbi8vIGZvciB1c2VyIGxvZ2luIHBhZ2UgXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSA9PSBcIkxvZ2luXCIpIHtcclxuICAgICAgc2V0U3R5bGVVc2VyUmVnKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4vL2ZvciBxdWVyeSBvZiBMaW5rIHRhZyBcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChuYW1lID09IFwiTG9naW5cIikge1xyXG4gICAgICBzZXRRdWVyeShcIlJlZ2lzdGVyXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihuYW1lID09IFwiUmVnaXN0ZXJcIil7XHJcbiAgICAgIHNldFF1ZXJ5KFwiTG9naW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWdfbWFpbiBcIiBzdHlsZT17eyB3aWR0aDogXCIxMDB2d1wiLCBtaW5IZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIycmVtXCIgfX0+XHJcbiAgICAgICAgICA8aDE+Q1JpY0JSb3MgLSB7bmFtZX0gPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExvZ2luQ29tcG9uZW50IGNsYXNzTmFtZT17c3R5bGVfdXNlcmxvZ2luIH0gLz5cclxuICAgICAgICAgIDxSZWdpc3RlckNvbXBvbmVudCBjbGFzc05hbWU9e3N0eWxlX3VzZXJSZWcgfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0LW1lbnUgXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17e1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy91c2VyUmVnJyxcclxuICAgICAgICAgICAgcXVlcnk6IHsgbmFtZTogcXVlcnkgfSxcclxuICAgICAgICAgIH0gfT48YnV0dG9uIGNsYXNzTmFtZT1cInJlZy1idG5cIiA+e25hbWU9PVwiTG9naW5cIj9cIlJlZ2lzdGVyXCI6XCJsb2dpblwiIH08L2J1dHRvbj48L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuICB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0LnF1ZXJ5KTtcclxuICAvLyByZXR1cm5zIHsgaWQ6IGVwaXNvZGUuaXR1bmVzLmVwaXNvZGUsIHRpdGxlOiBlcGlzb2RlLnRpdGxlfVxyXG5cclxuICBjb25zdCBkZWZhdWx0bmFtZSA9IFwibG9naW5cIjtcclxuICAvL3lvdSBjYW4gbWFrZSBEQiBxdWVyaWVzIHVzaW5nIHRoZSBkYXRhIGluIGNvbnRleHQucXVlcnlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbmFtZTogY29udGV4dC5xdWVyeS5uYW1lIHx8IGRlZmF1bHRuYW1lLCAvL3Bhc3MgaXQgdG8gdGhlIHBhZ2UgcHJvcHNcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclJlZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMb2dpbkNvbXBvbmVudCIsIlJlZ2lzdGVyQ29tcG9uZW50IiwiY24iLCJ1c2VSb3V0ZXIiLCJMaW5rIiwidXNlclJlZyIsIm5hbWUiLCJyb3V0ZXIiLCJzdHlsZV91c2VybG9naW4iLCJzZXRTdHlsZVVzZXJsb2ciLCJzdHlsZV91c2VyUmVnIiwic2V0U3R5bGVVc2VyUmVnIiwicXVlcnkiLCJzZXRRdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJoMSIsImhyZWYiLCJwYXRobmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/userReg.js\n");

/***/ })

});