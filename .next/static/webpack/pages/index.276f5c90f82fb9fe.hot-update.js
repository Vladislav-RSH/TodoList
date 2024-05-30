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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-btn */ \"./components/add-btn.jsx\");\n/* harmony import */ var _full_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-task */ \"./components/full-task.jsx\");\n/* harmony import */ var _completed_task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completed-task */ \"./components/completed-task.jsx\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search */ \"./components/search.jsx\");\n/* harmony import */ var _task_no_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-no-icon */ \"./components/task-no-icon.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [fullTasks, setFullTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [complTask, setComplTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleAddTask = (task)=>{\n        setCount(count + 1);\n        setFullTasks([\n            task,\n            ...fullTasks\n        ]);\n        setComplTask([\n            task,\n            ...complTask\n        ]);\n        setTasks([\n            task,\n            ...tasks\n        ]);\n    };\n    const handleDeleteTask = (index)=>{\n        const updatedTasks = [\n            ...tasks,\n            ...complTask\n        ];\n        updatedTasks.splice(index, 1);\n        setTasks(updatedTasks);\n        setFullTasks(updatedTasks.slice(0, 4));\n        setComplTask(updatedTasks.slice(4));\n    };\n    const handleCompletedTask = (index)=>{\n        const updatedTasks = [\n            ...tasks,\n            ...fullTasks\n        ];\n        const completedTask = updatedTasks.splice(index, 1);\n        setComplTask([\n            ...complTask,\n            ...completedTask\n        ]);\n        setTasks(updatedTasks);\n        setFullTasks(updatedTasks.slice(0, 4));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-1/2 h-[97%] bg-teal-400 rounded-2xl border-2 border-black px-12 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center p-0 mt-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_completed_task__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        tasks: complTask,\n                        onDelete: handleDeleteTask\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_full_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        tasks: fullTasks,\n                        onDelete: handleDeleteTask,\n                        onAdd: handleCompletedTask\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-6xl mt-6\",\n                        children: \"ToDo List\"\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-full mt-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_add_btn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                onAddTask: handleAddTask\n                            }, void 0, false, {\n                                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task_no_icon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            task: task.task,\n                            description: task.description,\n                            index: index,\n                            onDelete: handleDeleteTask\n                        }, index, false, {\n                            fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Dashboard, \"3iajQC2OnYOfw+QH81azbj0hUnc=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNDO0FBQ0M7QUFDVTtBQUNmO0FBQ1U7QUFFekIsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxnQkFBZ0IsQ0FBQ0M7UUFDckJGLFNBQVNELFFBQVE7UUFDakJILGFBQWE7WUFBQ007ZUFBUVA7U0FBVTtRQUNoQ0csYUFBYTtZQUFDSTtlQUFRTDtTQUFVO1FBQ2hDSCxTQUFTO1lBQUNRO2VBQVFUO1NBQU07SUFDMUI7SUFFQSxNQUFNVSxtQkFBbUIsQ0FBQ0M7UUFDeEIsTUFBTUMsZUFBZTtlQUFJWjtlQUFVSTtTQUFVO1FBQzdDUSxhQUFhQyxNQUFNLENBQUNGLE9BQU87UUFDM0JWLFNBQVNXO1FBQ1RULGFBQWFTLGFBQWFFLEtBQUssQ0FBQyxHQUFHO1FBQ25DVCxhQUFhTyxhQUFhRSxLQUFLLENBQUM7SUFDbEM7SUFFQSxNQUFNQyxzQkFBc0IsQ0FBQ0o7UUFDM0IsTUFBTUMsZUFBZTtlQUFJWjtlQUFVRTtTQUFVO1FBQzdDLE1BQU1jLGdCQUFnQkosYUFBYUMsTUFBTSxDQUFDRixPQUFPO1FBQ2pETixhQUFhO2VBQUlEO2VBQWNZO1NBQWM7UUFDN0NmLFNBQVNXO1FBQ1RULGFBQWFTLGFBQWFFLEtBQUssQ0FBQyxHQUFHO0lBQ3JDO0lBRUEscUJBQ0UsOERBQUNHO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDdEIsdURBQWFBO3dCQUFDSSxPQUFPSTt3QkFBV2dCLFVBQVVWOzs7Ozs7a0NBQzNDLDhEQUFDZixrREFBUUE7d0JBQUNLLE9BQU9FO3dCQUFXa0IsVUFBVVY7d0JBQWtCVyxPQUFPTjs7Ozs7Ozs7Ozs7OzBCQUVqRSw4REFBQ0k7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBZ0I7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ3JCLCtDQUFNQTs7Ozs7MENBQ1AsOERBQUNILGdEQUFTQTtnQ0FBQzZCLFdBQVdmOzs7Ozs7Ozs7Ozs7b0JBRXZCUixNQUFNd0IsR0FBRyxDQUFDLENBQUNmLE1BQU1FLHNCQUNoQiw4REFBQ2IscURBQVVBOzRCQUVUVyxNQUFNQSxLQUFLQSxJQUFJOzRCQUNmZ0IsYUFBYWhCLEtBQUtnQixXQUFXOzRCQUM3QmQsT0FBT0E7NEJBQ1BTLFVBQVVWOzJCQUpMQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0FyRHdCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4PzllMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL2FkZC1idG5cIjtcbmltcG9ydCBGdWxsVGFzayBmcm9tIFwiLi9mdWxsLXRhc2tcIjtcbmltcG9ydCBDb21wbGV0ZWRUYXNrIGZyb20gXCIuL2NvbXBsZXRlZC10YXNrXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaFwiO1xuaW1wb3J0IFRhc2tOb0ljb24gZnJvbSAnLi90YXNrLW5vLWljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnVsbFRhc2tzLCBzZXRGdWxsVGFza3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGxUYXNrLCBzZXRDb21wbFRhc2tdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHNldENvdW50KGNvdW50ICsgMSk7XG4gICAgc2V0RnVsbFRhc2tzKFt0YXNrLC4uLmZ1bGxUYXNrc10pO1xuICAgIHNldENvbXBsVGFzayhbdGFzaywuLi5jb21wbFRhc2tdKTtcbiAgICBzZXRUYXNrcyhbdGFzaywuLi50YXNrc10pO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrcywgLi4uY29tcGxUYXNrXTtcbiAgICB1cGRhdGVkVGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xuICAgIHNldEZ1bGxUYXNrcyh1cGRhdGVkVGFza3Muc2xpY2UoMCwgNCkpO1xuICAgIHNldENvbXBsVGFzayh1cGRhdGVkVGFza3Muc2xpY2UoNCkpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlQ29tcGxldGVkVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IFsuLi50YXNrcywgLi4uZnVsbFRhc2tzXTtcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrID0gdXBkYXRlZFRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2V0Q29tcGxUYXNrKFsuLi5jb21wbFRhc2ssIC4uLmNvbXBsZXRlZFRhc2tdKTtcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xuICAgIHNldEZ1bGxUYXNrcyh1cGRhdGVkVGFza3Muc2xpY2UoMCwgNCkpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTEvMiBoLVs5NyVdIGJnLXRlYWwtNDAwIHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC0xMiBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMCBtdC02XCI+XG4gICAgICAgIDxDb21wbGV0ZWRUYXNrIHRhc2tzPXtjb21wbFRhc2t9IG9uRGVsZXRlPXtoYW5kbGVEZWxldGVUYXNrfS8+XG4gICAgICAgIDxGdWxsVGFzayB0YXNrcz17ZnVsbFRhc2tzfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlVGFza30gb25BZGQ9e2hhbmRsZUNvbXBsZXRlZFRhc2t9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbXQtNlwiPlRvRG8gTGlzdDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICA8QWRkQnV0dG9uIG9uQWRkVGFzaz17aGFuZGxlQWRkVGFza30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcbiAgICAgICAgICA8VGFza05vSWNvblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHRhc2s9e3Rhc2sudGFza31cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YXNrLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgb25EZWxldGU9e2hhbmRsZURlbGV0ZVRhc2t9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWRkQnV0dG9uIiwiRnVsbFRhc2siLCJDb21wbGV0ZWRUYXNrIiwiU2VhcmNoIiwiVGFza05vSWNvbiIsIkRhc2hib2FyZCIsInRhc2tzIiwic2V0VGFza3MiLCJmdWxsVGFza3MiLCJzZXRGdWxsVGFza3MiLCJjb21wbFRhc2siLCJzZXRDb21wbFRhc2siLCJjb3VudCIsInNldENvdW50IiwiaGFuZGxlQWRkVGFzayIsInRhc2siLCJoYW5kbGVEZWxldGVUYXNrIiwiaW5kZXgiLCJ1cGRhdGVkVGFza3MiLCJzcGxpY2UiLCJzbGljZSIsImhhbmRsZUNvbXBsZXRlZFRhc2siLCJjb21wbGV0ZWRUYXNrIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm9uRGVsZXRlIiwib25BZGQiLCJoMSIsIm9uQWRkVGFzayIsIm1hcCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/dash-board.jsx\n"));

/***/ })

});