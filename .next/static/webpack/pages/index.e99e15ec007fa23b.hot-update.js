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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashBoard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _add_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-btn */ \"./components/add-btn.jsx\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./components/search.jsx\");\n\n\n\nfunction DashBoard() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-1/2 h-[97%] bg-teal-400 rounded-2xl flex flex-col items-center border-2 border-black px-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-6xl mt-6\",\n                children: \"ToDo List\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 7,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-full mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_add_btn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 8,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 w-full border-[1px] border-black\"\n            }, void 0, false, {\n                fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/vladislav/TodoList/components/dash-board.jsx\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this);\n}\n_c = DashBoard;\nvar _c;\n$RefreshReg$(_c, \"DashBoard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Rhc2gtYm9hcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNKO0FBRWYsU0FBU0U7SUFDdkIscUJBQ0MsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNsQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWdCOzs7Ozs7MEJBQzlCLDhEQUFDRTtnQkFBSUYsV0FBVTs7a0NBQ2QsOERBQUNILCtDQUFNQTs7Ozs7a0NBQ1AsOERBQUNELGdEQUFTQTs7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNNO2dCQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7QUFHbEI7S0FYd0JGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZGFzaC1ib2FyZC5qc3g/OWUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWRkQnV0dG9uIGZyb20gXCIuL2FkZC1idG5cIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hCb2FyZCgpIHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTEvMiBoLVs5NyVdIGJnLXRlYWwtNDAwIHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGJvcmRlci0yIGJvcmRlci1ibGFjayBweC0xMlwiPlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIG10LTZcIj5Ub0RvIExpc3Q8L2gxPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHctZnVsbCBtdC04XCI+XG5cdFx0XHRcdDxTZWFyY2ggLz5cblx0XHRcdFx0PEFkZEJ1dHRvbiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIGJvcmRlci1bMXB4XSBib3JkZXItYmxhY2tcIj48L2Rpdj5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59Il0sIm5hbWVzIjpbIkFkZEJ1dHRvbiIsIlNlYXJjaCIsIkRhc2hCb2FyZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/dash-board.jsx\n"));

/***/ })

});