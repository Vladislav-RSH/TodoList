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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FullTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/menu */ \"./icons/menu.jsx\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete */ \"./components/delete.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ \"./components/task.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction FullTask(param) {\n    let { onPushArr } = param;\n    _s();\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const btnShowForm = ()=>{\n        setCount(count + 1);\n        if (count === 1) {\n            setShowForm(false);\n            setCount(count - 1);\n        } else {\n            setShowForm(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-6 mr-6 bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center\",\n                children: \"0\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: btnShowForm,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-1/2 h-1/2 border-2       border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl mt-6\",\n                        children: \"Full Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 6\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5/6 mb-6\",\n                        children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                task: task.task,\n                                description: task.description,\n                                index: index\n                            }, index, false, {\n                                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 6\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 6\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/full-task.jsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, this);\n}\n_s(FullTask, \"/qIGg9CrOLLvLCAAq+FFYdzJAhI=\");\n_c = FullTask;\nvar _c;\n$RefreshReg$(_c, \"FullTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Z1bGwtdGFzay5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNIO0FBQ0c7QUFDUDtBQUVYLFNBQVNJLFNBQVMsS0FBVztRQUFYLEVBQUNDLFNBQVMsRUFBQyxHQUFYOztJQUVoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1RLGNBQWM7UUFFbkJELFNBQVNELFFBQVE7UUFFakIsSUFBSUEsVUFBVSxHQUFHO1lBQ2hCRCxZQUFZO1lBQ1pFLFNBQVNELFFBQVE7UUFDbEIsT0FFSztZQUNKRCxZQUFZO1FBQ2I7SUFDRDtJQUVBLHFCQUNDLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQTBGOzs7Ozs7MEJBQ3pHLDhEQUFDQztnQkFBT0MsU0FBU0o7MEJBQ2hCLDRFQUFDVixtREFBSUE7Ozs7Ozs7Ozs7WUFFTE0sMEJBQ0EsOERBQUNLO2dCQUNBQyxXQUFVOztrQ0FFViw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQWdCOzs7Ozs7a0NBQzlCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDZEksTUFBTUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsQiw4REFBQ2hCLDZDQUFJQTtnQ0FBYWUsTUFBTUEsS0FBS0EsSUFBSTtnQ0FBRUUsYUFBYUYsS0FBS0UsV0FBVztnQ0FBRUQsT0FBT0E7K0JBQTlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oQjtHQXZDd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZnVsbC10YXNrLmpzeD82ZTgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZW51IGZyb20gXCIuLi9pY29ucy9tZW51XCI7XG5pbXBvcnQgRGVsZXRlIGZyb20gXCIuL2RlbGV0ZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnVsbFRhc2soe29uUHVzaEFycn0pIHtcblxuXHRjb25zdCBbc2hvd0Zvcm0sIHNldFNob3dGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuXG5cdGNvbnN0IGJ0blNob3dGb3JtID0gKCkgPT4ge1xuXG5cdFx0c2V0Q291bnQoY291bnQgKyAxKTtcblxuXHRcdGlmIChjb3VudCA9PT0gMSkge1xuXHRcdFx0c2V0U2hvd0Zvcm0oZmFsc2UpO1xuXHRcdFx0c2V0Q291bnQoY291bnQgLSAxKTtcblx0XHR9XG5cblx0XHRlbHNlIHtcblx0XHRcdHNldFNob3dGb3JtKHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJtdC02IG1yLTYgYmctZ3JlZW4tNDAwIHctOCBoLTggcm91bmRlZC1bNTAlXSBib3JkZXItYmxhY2sgYm9yZGVyLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1bNTAlXSBiZy1hbWJlci0zMDAgdy00IGgtNCBhYnNvbHV0ZSBtbC02IG10LVstMjVweF0gdGV4dC14cyBmbGV4IGp1c3RpZnktY2VudGVyXCI+MDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtidG5TaG93Rm9ybX0+XG5cdFx0XHRcdDxNZW51IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdHtzaG93Rm9ybSAmJiBcblx0XHRcdFx0PGRpdiBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiB0b3AtMS8yIHRyYW5zbGF0ZS14LVstNTAlXSB0cmFuc2xhdGUteS1bLTUwJV0gbXQtMTYgdy0xLzIgaC0xLzIgYm9yZGVyLTIgXG5cdFx0XHRcdFx0Ym9yZGVyLWJsYWNrIGJnLWdyZWVuLTQwMCByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG92ZXJmbG93LWF1dG9cIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXQtNlwiPkZ1bGwgVGFza3M8L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01LzYgbWItNlwiPlxuXHRcdFx0XHRcdHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PFRhc2sga2V5PXtpbmRleH0gdGFzaz17dGFzay50YXNrfSBkZXNjcmlwdGlvbj17dGFzay5kZXNjcmlwdGlvbn0gaW5kZXg9e2luZGV4fS8+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0fVxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLCJuYW1lcyI6WyJNZW51IiwiRGVsZXRlIiwidXNlU3RhdGUiLCJUYXNrIiwiRnVsbFRhc2siLCJvblB1c2hBcnIiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiY291bnQiLCJzZXRDb3VudCIsImJ0blNob3dGb3JtIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwidGFza3MiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/full-task.jsx\n"));

/***/ })

});