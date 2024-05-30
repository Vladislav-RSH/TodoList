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

/***/ "./components/full-task.jsx":
/*!**********************************!*\
  !*** ./components/full-task.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FullTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu */ \"./icons/menu.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./components/task.jsx\");\n/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/close */ \"./icons/close.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FullTask(param) {\n    let { tasks, onDelete } = param;\n    _s();\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const btnShowForm = ()=>{\n        setCount(count + 1);\n        if (count === 1) {\n            setShowForm(false);\n            setCount(count - 1);\n        } else {\n            setShowForm(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center\",\n                children: \"0\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: btnShowForm,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2       border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: btnShowForm,\n                        className: \"bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_close__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl mt-8\",\n                        children: \"Full Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5/6 mb-6\",\n                        children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                task: task.task,\n                                onDelete: ()=>onDelete(task)\n                            }, index, false, {\n                                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, this);\n}\n_s(FullTask, \"/qIGg9CrOLLvLCAAq+FFYdzJAhI=\");\n_c = FullTask;\nvar _c;\n$RefreshReg$(_c, \"FullTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Z1bGwtdGFzay5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNBO0FBQ1A7QUFDYTtBQUV4QixTQUFTSSxTQUFTLEtBQW1CO1FBQW5CLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQW5COztJQUVoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1VLGNBQWM7UUFDbkJELFNBQVNELFFBQVE7UUFFakIsSUFBSUEsVUFBVSxHQUFHO1lBQ2hCRCxZQUFZO1lBQ1pFLFNBQVNELFFBQVE7UUFDbEIsT0FFSztZQUNKRCxZQUFZO1FBQ2I7SUFDRDtJQUVBLHFCQUNDLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQTBGOzs7Ozs7MEJBQ3pHLDhEQUFDQztnQkFBT0MsU0FBU0o7MEJBQ2hCLDRFQUFDWCxtREFBSUE7Ozs7Ozs7Ozs7WUFFTE8sMEJBQ0EsOERBQUNLO2dCQUNBQyxXQUFVOztrQ0FFViw4REFBQ0M7d0JBQU9DLFNBQVNKO3dCQUFhRSxXQUFVO2tDQUN2Qyw0RUFBQ1Ysb0RBQVNBOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDYTt3QkFBR0gsV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDOUIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNkUixNQUFNWSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDakIsNkNBQUlBO2dDQUVMZ0IsTUFBTUEsS0FBS0EsSUFBSTtnQ0FDZlosVUFBVSxJQUFNQSxTQUFTWTsrQkFGcEJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVVg7R0E3Q3dCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Z1bGwtdGFzay5qc3g/NmU4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudSBmcm9tIFwiLi4vaWNvbnMvbWVudVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2ljb25zL2Nsb3NlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZ1bGxUYXNrKHsgdGFza3MsIG9uRGVsZXRlIH0pIHtcblxuXHRjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IGJ0blNob3dGb3JtID0gKCkgPT4ge1xuXHRcdHNldENvdW50KGNvdW50ICsgMSk7XG5cblx0XHRpZiAoY291bnQgPT09IDEpIHtcblx0XHRcdHNldFNob3dGb3JtKGZhbHNlKTtcblx0XHRcdHNldENvdW50KGNvdW50IC0gMSk7XG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cdFx0XHRzZXRTaG93Rm9ybSh0cnVlKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTQwMCB3LTggaC04IHJvdW5kZWQtWzUwJV0gYm9yZGVyLWJsYWNrIGJvcmRlci0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzUwJV0gYmctYW1iZXItMzAwIHctNCBoLTQgYWJzb2x1dGUgbWwtNiBtdC1bLTI1cHhdIHRleHQteHMgZmxleCBqdXN0aWZ5LWNlbnRlclwiPjA8L2Rpdj5cblx0XHRcdDxidXR0b24gb25DbGljaz17YnRuU2hvd0Zvcm19PlxuXHRcdFx0XHQ8TWVudSAvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHR7c2hvd0Zvcm0gJiYgXG5cdFx0XHRcdDxkaXYgXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdG9wLTEvMiB0cmFuc2xhdGUteC1bLTUwJV0gdHJhbnNsYXRlLXktWy01MCVdIG10LTE2IHctOTYgaC0xLzIgYm9yZGVyLTIgXG5cdFx0XHRcdFx0Ym9yZGVyLWJsYWNrIGJnLWdyZWVuLTQwMCByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG92ZXJmbG93LWF1dG9cIj5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2J0blNob3dGb3JtfSBjbGFzc05hbWU9XCJiZy1yZWQtNDAwIGJvcmRlci1ibGFjayB3LTggaC04IHJvdW5kZWQtWzUwJV0gYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmlnaHQtMCBhYnNvbHV0ZSB0b3AtMiByaWdodC0yXCI+XG5cdFx0XHRcdFx0XHQ8Q2xvc2VJY29uIC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIG10LThcIj5GdWxsIFRhc2tzPC9oMT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNS82IG1iLTZcIj5cblx0XHRcdFx0XHR7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PFRhc2tcblx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHR0YXNrPXt0YXNrLnRhc2t9XG5cdFx0XHRcdFx0XHRvbkRlbGV0ZT17KCkgPT4gb25EZWxldGUodGFzayl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdH1cblx0XHQ8L2Rpdj5cblx0KTtcbn0iXSwibmFtZXMiOlsiTWVudSIsInVzZVN0YXRlIiwiVGFzayIsIkNsb3NlSWNvbiIsIkZ1bGxUYXNrIiwidGFza3MiLCJvbkRlbGV0ZSIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJjb3VudCIsInNldENvdW50IiwiYnRuU2hvd0Zvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/full-task.jsx\n"));

/***/ }),

/***/ "./icons/menu.jsx":
/*!************************!*\
  !*** ./icons/menu.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Menu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        fill: \"none\",\n        viewBox: \"0 0 24 24\",\n        height: \"1em\",\n        width: \"1em\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                fill: \"currentColor\",\n                d: \"M8.016 6.982a1.003 1.003 0 000 2.006h7.95a1.003 1.003 0 000-2.006h-7.95zM7.016 12c0-.552.447-1.003 1-1.003h7.95a1.003 1.003 0 010 2.006h-7.95c-.553 0-1-.45-1-1.003zM8.025 15.012a1.003 1.003 0 000 2.007h7.95a1.003 1.003 0 000-2.007h-7.95z\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/icons/menu.jsx\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                fill: \"currentColor\",\n                fillRule: \"evenodd\",\n                d: \"M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-1h12a1 1 0 011 1v12a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1z\",\n                clipRule: \"evenodd\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/icons/menu.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/icons/menu.jsx\",\n        lineNumber: 3,\n        columnNumber: 2\n    }, this);\n}\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pY29ucy9tZW51LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0E7SUFDdkIscUJBQ0EsOERBQUNDO1FBQUlDLE1BQUs7UUFBT0MsU0FBUTtRQUFZQyxRQUFPO1FBQU1DLE9BQU07OzBCQUNuRCw4REFBQ0M7Z0JBQ0NKLE1BQUs7Z0JBQ0xLLEdBQUU7Ozs7OzswQkFFSiw4REFBQ0Q7Z0JBQ0NKLE1BQUs7Z0JBQ0xNLFVBQVM7Z0JBQ1RELEdBQUU7Z0JBQ0ZFLFVBQVM7Ozs7Ozs7Ozs7OztBQUlqQjtLQWZ3QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaWNvbnMvbWVudS5qc3g/NTYwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuXHRyZXR1cm4gKFxuXHQ8c3ZnIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgZD1cIk04LjAxNiA2Ljk4MmExLjAwMyAxLjAwMyAwIDAwMCAyLjAwNmg3Ljk1YTEuMDAzIDEuMDAzIDAgMDAwLTIuMDA2aC03Ljk1ek03LjAxNiAxMmMwLS41NTIuNDQ3LTEuMDAzIDEtMS4wMDNoNy45NWExLjAwMyAxLjAwMyAwIDAxMCAyLjAwNmgtNy45NWMtLjU1MyAwLTEtLjQ1LTEtMS4wMDN6TTguMDI1IDE1LjAxMmExLjAwMyAxLjAwMyAwIDAwMCAyLjAwN2g3Ljk1YTEuMDAzIDEuMDAzIDAgMDAwLTIuMDA3aC03Ljk1elwiXG4gICAgICAvPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNMyA2YTMgMyAwIDAxMy0zaDEyYTMgMyAwIDAxMyAzdjEyYTMgMyAwIDAxLTMgM0g2YTMgMyAwIDAxLTMtM1Y2em0zLTFoMTJhMSAxIDAgMDExIDF2MTJhMSAxIDAgMDEtMSAxSDZhMSAxIDAgMDEtMS0xVjZhMSAxIDAgMDExLTF6XCJcbiAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG5cdCk7XG59Il0sIm5hbWVzIjpbIk1lbnUiLCJzdmciLCJmaWxsIiwidmlld0JveCIsImhlaWdodCIsIndpZHRoIiwicGF0aCIsImQiLCJmaWxsUnVsZSIsImNsaXBSdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./icons/menu.jsx\n"));

/***/ })

});