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

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\nvar Timeline = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), activeItem = ref[0], setActiveItem = ref[1];\n    var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const scroll = (node, left) => {\n    //   return node.scrollTo({ left, behavior: 'smooth' });\n    // }\n    var handleClick = function(e, i) {\n        e.preventDefault();\n        if (carouselRef.current) {\n            var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n            scroll(carouselRef.current, scrollLeft);\n        }\n    };\n    // const handleScroll = () => {\n    //   if (carouselRef.current) {\n    //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);\n    //     setActiveItem(index);\n    //   }\n    // }\n    // // snap back to beginning of scroll when window is resized\n    // // avoids a bug where content is covered up if coming from smaller screen\n    // useEffect(() => {\n    //   const handleResize = () => {\n    //     scroll(carouselRef.current, 0);\n    //   }\n    //   window.addEventListener('resize', handleResize);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n        id: \"about\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n                children: \"About Me\"\n            }, void 0, false, {\n                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n                children: \"A Web developer!\"\n            }, void 0, false, {\n                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 48,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n                ref: carouselRef,\n                onScroll: handleScroll,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n                            final: index === TOTAL_CAROUSEL_COUNT - 1,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n                                index: index,\n                                id: \"carousel_item-\".concat(index),\n                                active: activeItem,\n                                onClick: function(e) {\n                                    return handleClick(e, index);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {\n                                        children: [\n                                            item.year,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {\n                                                width: \"208\",\n                                                height: \"6\",\n                                                viewBox: \"0 0 208 6\",\n                                                fill: \"none\",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                        \"fill-rule\": \"evenodd\",\n                                                        \"clip-rule\": \"evenodd\",\n                                                        d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                                                        fill: \"url(#paint0_linear)\",\n                                                        \"fill-opacity\": \"0.33\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                            id: \"paint0_linear\",\n                                                            x1: \"-4.30412e-10\",\n                                                            y1: \"0.5\",\n                                                            x2: \"208\",\n                                                            y2: \"0.500295\",\n                                                            gradientUnits: \"userSpaceOnUse\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    \"stop-color\": \"white\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 84,\n                                                                    columnNumber: 25\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                                    offset: \"0.79478\",\n                                                                    \"stop-color\": \"white\",\n                                                                    \"stop-opacity\": \"0\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                                    lineNumber: 85,\n                                                                    columnNumber: 25\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                            lineNumber: 77,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        }, _this);\n                    })\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 51,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {\n                children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {\n                        index: index,\n                        active: activeItem,\n                        onClick: function(e) {\n                            return handleClick(e, index);\n                        },\n                        type: \"button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {\n                            active: activeItem\n                        }, void 0, false, {\n                            fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n                lineNumber: 102,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arbesistrefi/Documents/GitHub/Arbes.dev/src/components/TimeLine/TimeLine.js\",\n        lineNumber: 46,\n        columnNumber: 4\n    }, _this);\n};\n_s(Timeline, \"a+t1PkU1ZAnxlluRA0eiChBXU3s=\");\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7QUFBMkQ7QUFFNEk7QUFDcEc7QUFDMUM7QUFFekQsSUFBTWtCLG9CQUFvQixHQUFHRCxxRUFBbUI7QUFFaEQsSUFBTUcsUUFBUSxHQUFHLFdBQU07O0lBQ3BCLElBQW9DbkIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUF4Q29CLFVBQVUsR0FBbUJwQixHQUFXLEdBQTlCLEVBQUVxQixhQUFhLEdBQUlyQixHQUFXLEdBQWY7SUFDaEMsSUFBTXNCLFdBQVcsR0FBR3JCLDZDQUFNLEVBQUU7SUFFN0IsbUNBQW1DO0lBQ25DLHdEQUF3RDtJQUN4RCxJQUFJO0lBRUgsSUFBTXNCLFdBQVcsR0FBRyxTQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBSztRQUM1QkQsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQztRQUVwQixJQUFJSixXQUFXLENBQUNLLE9BQU8sRUFBRTtZQUN0QixJQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixXQUFXLENBQUNLLE9BQU8sQ0FBQ0ksV0FBVyxHQUFHLEdBQUcsR0FBSU4sQ0FBQUEsQ0FBQyxHQUFHVCxxRUFBbUIsRUFBRTtZQUVoR2dCLE1BQU0sQ0FBQ1YsV0FBVyxDQUFDSyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7SUFDSCxDQUFDO0lBRUYsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixrSUFBa0k7SUFFbEksNEJBQTRCO0lBQzVCLE1BQU07SUFDTixJQUFJO0lBRUosNkRBQTZEO0lBQzdELDRFQUE0RTtJQUM1RSxvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHNDQUFzQztJQUN0QyxNQUFNO0lBRU4scURBQXFEO0lBQ3JELFVBQVU7SUFFVixxQkFDQyw4REFBQ2hCLDZEQUFPO1FBQUNxQixFQUFFLEVBQUMsT0FBTzs7MEJBQ2xCLDhEQUFDbEIsa0VBQVk7MEJBQUMsVUFBUTs7Ozs7cUJBQWU7MEJBQ3JDLDhEQUFDRCxpRUFBVzswQkFBQyxrQkFFYjs7Ozs7cUJBQWM7MEJBQ2QsOERBQUNSLDhEQUFpQjtnQkFBQzRCLEdBQUcsRUFBRVosV0FBVztnQkFBRWEsUUFBUSxFQUFFQyxZQUFZOzBCQUN6RDs4QkFDQ3BCLGtFQUFnQixDQUFDLFNBQUNzQixJQUFJLEVBQUVDLEtBQUs7NkNBQzVCLDhEQUFDNUIscUVBQXdCOzRCQUFhNkIsS0FBSyxFQUFHRCxLQUFLLEtBQUt0QixvQkFBb0IsR0FBRyxDQUFDO3NDQUM5RSw0RUFBQ1YseURBQVk7Z0NBQ2JnQyxLQUFLLEVBQUVBLEtBQUs7Z0NBQ1pOLEVBQUUsRUFBRSxnQkFBZSxDQUFRLE9BQU5NLEtBQUssQ0FBRTtnQ0FDNUJFLE1BQU0sRUFBRXJCLFVBQVU7Z0NBQ2xCc0IsT0FBTyxFQUFFLFNBQUNsQixDQUFDOzJDQUFLRCxXQUFXLENBQUNDLENBQUMsRUFBRWUsS0FBSyxDQUFDO2lDQUFBOztrREFFbkMsOERBQUM3Qiw4REFBaUI7OzRDQUNmNEIsSUFBSSxDQUFDSyxJQUFJOzBEQUNWLDhEQUFDbkMsNERBQWU7Z0RBQ1ZvQyxLQUFLLEVBQUMsS0FBSztnREFDWEMsTUFBTSxFQUFDLEdBQUc7Z0RBQ1ZDLE9BQU8sRUFBQyxXQUFXO2dEQUNuQkMsSUFBSSxFQUFDLE1BQU07Z0RBQ1hDLEtBQUssRUFBQyw0QkFBNEI7O2tFQUNsQyw4REFBQ0MsTUFBSTt3REFDSEMsV0FBUyxFQUFDLFNBQVM7d0RBQ25CQyxXQUFTLEVBQUMsU0FBUzt3REFDbkJDLENBQUMsRUFBQywySkFBMko7d0RBQzdKTCxJQUFJLEVBQUMscUJBQXFCO3dEQUMxQk0sY0FBWSxFQUFDLE1BQU07Ozs7OzZEQUNuQjtrRUFDRiw4REFBQ0MsTUFBSTtrRUFDSCw0RUFBQ0MsZ0JBQWM7NERBQ2J0QixFQUFFLEVBQUMsZUFBZTs0REFDbEJ1QixFQUFFLEVBQUMsY0FBYzs0REFDakJDLEVBQUUsRUFBQyxLQUFLOzREQUNSQyxFQUFFLEVBQUMsS0FBSzs0REFDUkMsRUFBRSxFQUFDLFVBQVU7NERBQ2JDLGFBQWEsRUFBQyxnQkFBZ0I7OzhFQUM5Qiw4REFBQ0MsTUFBSTtvRUFBQ0MsWUFBVSxFQUFDLE9BQU87Ozs7O3lFQUFHOzhFQUMzQiw4REFBQ0QsTUFBSTtvRUFDSEUsTUFBTSxFQUFDLFNBQVM7b0VBQ2hCRCxZQUFVLEVBQUMsT0FBTztvRUFDbEJFLGNBQVksRUFBQyxHQUFHOzs7Ozt5RUFDaEI7Ozs7OztpRUFDYTs7Ozs7NkRBQ1o7Ozs7OztxREFDUzs7Ozs7OzZDQUNKO2tEQUNwQiw4REFBQ3ZELDZEQUFnQjtrREFDZDZCLElBQUksQ0FBQzJCLElBQUk7Ozs7OzZDQUNPOzs7Ozs7cUNBQ047MkJBM0NjMUIsS0FBSzs7OztpQ0E0Q1Q7cUJBQzVCLENBQUM7aUNBQ0M7Ozs7O3FCQUNlOzBCQUNwQiw4REFBQ2xDLDREQUFlOzBCQUNiVyxrRUFBZ0IsQ0FBQyxTQUFDc0IsSUFBSSxFQUFFQyxLQUFLO3lDQUM1Qiw4REFBQ3BDLDJEQUFjO3dCQUVmb0MsS0FBSyxFQUFFQSxLQUFLO3dCQUNaRSxNQUFNLEVBQUVyQixVQUFVO3dCQUNsQnNCLE9BQU8sRUFBRSxTQUFDbEIsQ0FBQzttQ0FBS0QsV0FBVyxDQUFDQyxDQUFDLEVBQUVlLEtBQUssQ0FBQzt5QkFBQTt3QkFDckMyQixJQUFJLEVBQUMsUUFBUTtrQ0FFWCw0RUFBQzlELDhEQUFpQjs0QkFBQ3FDLE1BQU0sRUFBRXJCLFVBQVU7Ozs7O2lDQUFJO3VCQU50Q21CLEtBQUs7Ozs7NkJBT1M7aUJBQ3BCLENBQUM7Ozs7O3FCQUNjOzs7Ozs7YUFDUixDQUNWO0FBQ0osQ0FBQztHQTVHS3BCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQThHZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICAvLyBjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xuICAvLyAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAvLyB9XG5cbiAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG4gICAgICBcbiAgICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XG4gICAgIH1cbiAgIH1cblxuICAvLyBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gIC8vICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgLy8gICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuXG4gIC8vICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXG4gIC8vIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gIC8vICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XG4gIC8vICAgfVxuXG4gIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxuICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cbiAgICA8U2VjdGlvblRleHQ+XG4gICAgICBBIFdlYiBkZXZlbG9wZXIhXG4gICAgPC9TZWN0aW9uVGV4dD5cbiAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XG4gICAgICA8PlxuICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUga2V5PXtpbmRleH0gZmluYWw9IHtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgYWN0aXZlPXthY3RpdmVJdGVtfVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENhcm91c2VsSXRlbVRpdGxlPlxuICAgICAgICAgICAgICB7aXRlbS55ZWFyfVxuICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMC4zM1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkxPVwiMC41XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0PVwiMC43OTQ3OFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3Atb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbUltZz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGl0bGU+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtVGV4dD5cbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgPC9DYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGU+XG4gICAgICApKX1cbiAgICAgIDwvPlxuICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XG4gICAgPENhcm91c2VsQnV0dG9ucz5cbiAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBpbmRleCl9XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cbiAgICAgICAgICA8L0Nhcm91c2VsQnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9DYXJvdXNlbEJ1dHRvbnM+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJDYXJvdXNlbEJ1dHRvbnMiLCJDYXJvdXNlbENvbnRhaW5lciIsIkNhcm91c2VsSXRlbSIsIkNhcm91c2VsSXRlbUltZyIsIkNhcm91c2VsSXRlbVRleHQiLCJDYXJvdXNlbEl0ZW1UaXRsZSIsIkNhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSIsIlNlY3Rpb24iLCJTZWN0aW9uRGl2aWRlciIsIlNlY3Rpb25UZXh0IiwiU2VjdGlvblRpdGxlIiwiVGltZUxpbmVEYXRhIiwiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJsZW5ndGgiLCJUaW1lbGluZSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwiY2Fyb3VzZWxSZWYiLCJoYW5kbGVDbGljayIsImUiLCJpIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFdpZHRoIiwic2Nyb2xsIiwiaWQiLCJyZWYiLCJvblNjcm9sbCIsImhhbmRsZVNjcm9sbCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZpbmFsIiwiYWN0aXZlIiwib25DbGljayIsInllYXIiLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJwYXRoIiwiZmlsbC1ydWxlIiwiY2xpcC1ydWxlIiwiZCIsImZpbGwtb3BhY2l0eSIsImRlZnMiLCJsaW5lYXJHcmFkaWVudCIsIngxIiwieTEiLCJ4MiIsInkyIiwiZ3JhZGllbnRVbml0cyIsInN0b3AiLCJzdG9wLWNvbG9yIiwib2Zmc2V0Iiwic3RvcC1vcGFjaXR5IiwidGV4dCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n"));

/***/ })

});