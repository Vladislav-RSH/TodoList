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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _add_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-btn */ \"./components/add-btn.jsx\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./components/search.jsx\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./components/task.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Dashboard() {\n    //   const [tasks, setTasks] = useState([]);\n    //   const [count, setCount] = useState(1);\n    //   const handleAddTask = (task) => {\n    // \tsetCount(count + 1);\n    // \tif (count > 5) {\n    // \t\ttasks.pop();\n    // \t\tsetTasks([task, ...tasks]);\n    // \t}\n    // \telse {\n    // \t\tsetTasks([task, ...tasks]);\n    // \t}\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-1/2 h-[97%] bg-teal-400 rounded-2xl flex flex-col items-center border-2 border-black px-12 mt-2.5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl mt-8\",\n                children: \"ToDo List\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-full mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_add_btn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onAddTask: handleAddTask\n                    }, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    task: task.task,\n                    description: task.description,\n                    index: index\n                }, index, false, {\n                    fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 3\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUNKO0FBQ0o7QUFDYztBQUV6QixTQUFTSztJQUV4Qiw0Q0FBNEM7SUFDNUMsMkNBQTJDO0lBRTNDLHNDQUFzQztJQUN0Qyx3QkFBd0I7SUFFeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsS0FBSztJQUVMLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsS0FBSztJQUNMLE1BQU07SUFFSixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBZ0I7Ozs7OzswQkFDOUIsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ04sK0NBQU1BOzs7OztrQ0FDUCw4REFBQ0QsZ0RBQVNBO3dCQUFDVSxXQUFXQzs7Ozs7Ozs7Ozs7O1lBRTFCQyxNQUFNQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ25CLDhEQUFDYiw2Q0FBSUE7b0JBQWFZLE1BQU1BLEtBQUtBLElBQUk7b0JBQUVFLGFBQWFGLEtBQUtFLFdBQVc7b0JBQUVELE9BQU9BO21CQUE5REE7Ozs7Ozs7Ozs7O0FBSWI7S0E5QndCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4PzllMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFkZEJ1dHRvbiBmcm9tIFwiLi9hZGQtYnRuXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL3NlYXJjaFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbi8vICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMSk7XG5cbi8vICAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICh0YXNrKSA9PiB7XG4vLyBcdHNldENvdW50KGNvdW50ICsgMSk7XG5cbi8vIFx0aWYgKGNvdW50ID4gNSkge1xuLy8gXHRcdHRhc2tzLnBvcCgpO1xuLy8gXHRcdHNldFRhc2tzKFt0YXNrLCAuLi50YXNrc10pO1xuLy8gXHR9XG5cbi8vIFx0ZWxzZSB7XG4vLyBcdFx0c2V0VGFza3MoW3Rhc2ssIC4uLnRhc2tzXSk7XG4vLyBcdH1cbi8vICAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy0xLzIgaC1bOTclXSBiZy10ZWFsLTQwMCByb3VuZGVkLTJ4bCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBib3JkZXItMiBib3JkZXItYmxhY2sgcHgtMTIgbXQtMi41XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgbXQtOFwiPlRvRG8gTGlzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsIG10LThcIj5cbiAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICA8QWRkQnV0dG9uIG9uQWRkVGFzaz17aGFuZGxlQWRkVGFza30vPlxuICAgICAgPC9kaXY+XG5cdCAge3Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IChcblx0XHQ8VGFzayBrZXk9e2luZGV4fSB0YXNrPXt0YXNrLnRhc2t9IGRlc2NyaXB0aW9uPXt0YXNrLmRlc2NyaXB0aW9ufSBpbmRleD17aW5kZXh9Lz5cblx0ICApKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59Il0sIm5hbWVzIjpbIkFkZEJ1dHRvbiIsIlNlYXJjaCIsIlRhc2siLCJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwiZGl2Iiwib25BZGRUYXNrIiwiaGFuZGxlQWRkVGFzayIsInRhc2tzIiwibWFwIiwidGFzayIsImluZGV4IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/dash-board.jsx\n"));

/***/ })

});