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

/***/ "./components/dash-board.jsx":
/*!***********************************!*\
  !*** ./components/dash-board.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _add_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-btn */ \"./components/add-btn.jsx\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./components/search.jsx\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./components/task.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const handleAddTask = (task)=>{\n        setTasks([\n            ...tasks,\n            task\n        ]);\n    };\n    const DelTask = (index)=>{\n        setTasks(tasks.filter((task)=>index !== index));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-1/2 h-[97%] bg-teal-400 rounded-2xl flex flex-col items-center border-2 border-black px-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl mt-8\",\n                children: \"ToDo List\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-full mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_add_btn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onAddTask: handleAddTask\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    task: task.task,\n                    description: task.description\n                }, index, false, {\n                    fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"+34uIVDBalDkucWnJ7Aj1Xxb0MA=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDSjtBQUNKO0FBQ2M7QUFHekIsU0FBU0s7O0lBRXRCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXJDLE1BQU1JLGdCQUFnQixDQUFDQztRQUNyQkYsU0FBUztlQUFJRDtZQUFPRztTQUFLO0lBQzNCO0lBRUEsTUFBTUMsVUFBVSxDQUFDQztRQUNsQkosU0FBU0QsTUFBTU0sTUFBTSxDQUFDLENBQUNILE9BQVNFLFVBQVVBO0lBQ3pDO0lBRUEscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdCOzs7Ozs7MEJBQzlCLDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBQ2IsOERBQUNiLCtDQUFNQTs7Ozs7a0NBQ1AsOERBQUNELGdEQUFTQTt3QkFBQ2lCLFdBQVdUOzs7Ozs7Ozs7Ozs7WUFFdkJGLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDVCxNQUFNRSxzQkFDaEIsOERBQUNULDZDQUFJQTtvQkFBYU8sTUFBTUEsS0FBS0EsSUFBSTtvQkFBRVUsYUFBYVYsS0FBS1UsV0FBVzttQkFBckRSOzs7Ozs7Ozs7OztBQUluQjtHQXhCd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaC1ib2FyZC5qc3g/OWUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL2FkZC1idG5cIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHNldFRhc2tzKFsuLi50YXNrcywgdGFza10pO1xuICB9O1xuXG4gIGNvbnN0IERlbFRhc2sgPSAoaW5kZXgpID0+IHtcblx0c2V0VGFza3ModGFza3MuZmlsdGVyKCh0YXNrKSA9PiBpbmRleCAhPT0gaW5kZXgpKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy0xLzIgaC1bOTclXSBiZy10ZWFsLTQwMCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtMTJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBtdC04XCI+VG9EbyBMaXN0PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgIDxBZGRCdXR0b24gb25BZGRUYXNrPXtoYW5kbGVBZGRUYXNrfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxuICAgICAgICA8VGFzayBrZXk9e2luZGV4fSB0YXNrPXt0YXNrLnRhc2t9IGRlc2NyaXB0aW9uPXt0YXNrLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgKSl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJBZGRCdXR0b24iLCJTZWFyY2giLCJUYXNrIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInRhc2tzIiwic2V0VGFza3MiLCJoYW5kbGVBZGRUYXNrIiwidGFzayIsIkRlbFRhc2siLCJpbmRleCIsImZpbHRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsIm9uQWRkVGFzayIsIm1hcCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dash-board.jsx\n"));

/***/ })

});