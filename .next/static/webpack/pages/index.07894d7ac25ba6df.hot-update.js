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

/***/ "./components/completed-task.jsx":
/*!***************************************!*\
  !*** ./components/completed-task.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CompletedTask; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/close */ \"./icons/close.jsx\");\n/* harmony import */ var _icons_check_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/check-icon */ \"./icons/check-icon.jsx\");\n/* harmony import */ var _task_no_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-no-icon */ \"./components/task-no-icon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction CompletedTask(param) {\n    let { tasks, onDelete } = param;\n    _s();\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const btnShowForm = ()=>{\n        setShowForm(!showForm);\n    };\n    const handleDeleteTask = (index)=>{\n        const updatedTasks = [\n            ...tasks\n        ];\n        updatedTasks.splice(index, 1);\n        setTasks(updatedTasks);\n        onDelete(updatedTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center\",\n                children: tasks.length\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: btnShowForm,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_check_icon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            showForm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2  border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: btnShowForm,\n                        className: \"bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icons_close__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl mt-8\",\n                        children: \"Completed Tasks\"\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-5/6 mb-6\",\n                        children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task_no_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                task: task.task,\n                                description: task.description,\n                                onDelete: ()=>handleDeleteTask(index)\n                            }, index, false, {\n                                fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/completed-task.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(CompletedTask, \"kaMG6XwWu8g4QBLwMinxod9pp4Q=\");\n_c = CompletedTask;\nvar _c;\n$RefreshReg$(_c, \"CompletedTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBsZXRlZC10YXNrLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ007QUFDSztBQUNKO0FBRXpCLFNBQVNJLGNBQWMsS0FBbUI7UUFBbkIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBbkI7O0lBQ3BDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUyxjQUFjO1FBQ2xCRCxZQUFZLENBQUNEO0lBQ2Y7SUFFQSxNQUFNRyxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsZUFBZTtlQUFJUDtTQUFNO1FBQy9CTyxhQUFhQyxNQUFNLENBQUNGLE9BQU87UUFDM0JHLFNBQVNGO1FBQ1ROLFNBQVNNO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUEyRlgsTUFBTVksTUFBTTs7Ozs7OzBCQUN0SCw4REFBQ0M7Z0JBQU9DLFNBQVNWOzBCQUNmLDRFQUFDUCx5REFBU0E7Ozs7Ozs7Ozs7WUFFWEssMEJBQ0MsOERBQUNRO2dCQUNDQyxXQUFVOztrQ0FHViw4REFBQ0U7d0JBQU9DLFNBQVNWO3dCQUFhTyxXQUFVO2tDQUN0Qyw0RUFBQ2Ysb0RBQVNBOzs7Ozs7Ozs7O2tDQUVaLDhEQUFDbUI7d0JBQUdKLFdBQVU7a0NBQWdCOzs7Ozs7a0NBQzlCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlgsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNWCxzQkFDaEIsOERBQUNSLHFEQUFVQTtnQ0FBYW1CLE1BQU1BLEtBQUtBLElBQUk7Z0NBQUVDLGFBQWFELEtBQUtDLFdBQVc7Z0NBQUVqQixVQUFVLElBQU1JLGlCQUFpQkM7K0JBQXhGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vQjtHQXRDd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcGxldGVkLXRhc2suanN4Pzc5NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIi4uL2ljb25zL2Nsb3NlXCI7XG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gXCIuLi9pY29ucy9jaGVjay1pY29uXCI7XG5pbXBvcnQgVGFza05vSWNvbiBmcm9tIFwiLi90YXNrLW5vLWljb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGxldGVkVGFzayh7IHRhc2tzLCBvbkRlbGV0ZSB9KSB7XG4gIGNvbnN0IFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGJ0blNob3dGb3JtID0gKCkgPT4ge1xuICAgIHNldFNob3dGb3JtKCFzaG93Rm9ybSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrc107XG4gICAgdXBkYXRlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTtcbiAgICBvbkRlbGV0ZSh1cGRhdGVkVGFza3MpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyZWVuLTQwMCB3LTggaC04IHJvdW5kZWQtWzUwJV0gYm9yZGVyLWJsYWNrIGJvcmRlci0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtWzUwJV0gYmctYW1iZXItMzAwIHctNCBoLTQgYWJzb2x1dGUgbWwtNiBtdC1bLTI1cHhdIHRleHQteHMgZmxleCBqdXN0aWZ5LWNlbnRlclwiPnt0YXNrcy5sZW5ndGh9PC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2J0blNob3dGb3JtfT5cbiAgICAgICAgPENoZWNrSWNvbiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0Zvcm0gJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgdG9wLTEvMiB0cmFuc2xhdGUteC1bLTUwJV0gdHJhbnNsYXRlLXktWy01MCVdIG10LTE2IHctOTYgaC0xLzIgYm9yZGVyLTIgXG4gICAgICAgICAgYm9yZGVyLWJsYWNrIGJnLWdyZWVuLTQwMCByb3VuZGVkLXhsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG92ZXJmbG93LWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidG5TaG93Rm9ybX0gY2xhc3NOYW1lPVwiYmctcmVkLTQwMCBib3JkZXItYmxhY2sgdy04IGgtOCByb3VuZGVkLVs1MCVdIGJvcmRlci0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJpZ2h0LTAgYWJzb2x1dGUgdG9wLTIgcmlnaHQtMlwiPlxuICAgICAgICAgICAgPENsb3NlSWNvbiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtdC04XCI+Q29tcGxldGVkIFRhc2tzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82IG1iLTZcIj5cbiAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxUYXNrTm9JY29uIGtleT17aW5kZXh9IHRhc2s9e3Rhc2sudGFza30gZGVzY3JpcHRpb249e3Rhc2suZGVzY3JpcHRpb259IG9uRGVsZXRlPXsoKSA9PiBoYW5kbGVEZWxldGVUYXNrKGluZGV4KX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2xvc2VJY29uIiwiQ2hlY2tJY29uIiwiVGFza05vSWNvbiIsIkNvbXBsZXRlZFRhc2siLCJ0YXNrcyIsIm9uRGVsZXRlIiwic2hvd0Zvcm0iLCJzZXRTaG93Rm9ybSIsImJ0blNob3dGb3JtIiwiaGFuZGxlRGVsZXRlVGFzayIsImluZGV4IiwidXBkYXRlZFRhc2tzIiwic3BsaWNlIiwic2V0VGFza3MiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJtYXAiLCJ0YXNrIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/completed-task.jsx\n"));

/***/ })

});