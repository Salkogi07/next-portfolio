"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/projects/project-item.js":
/*!*********************************************!*\
  !*** ./components/projects/project-item.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProjectItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ProjectItem(param) {\n    let { data } = param;\n    var _data_properties_이름_title_, _data_properties, _data_properties1, _data_properties2;\n    const title = (_data_properties_이름_title_ = data.properties.이름.title[0]) === null || _data_properties_이름_title_ === void 0 ? void 0 : _data_properties_이름_title_.plain_text;\n    const tag = data.properties.태그.multi_select;\n    const start = (_data_properties = data.properties) === null || _data_properties === void 0 ? void 0 : _data_properties.작업_기간.date.start;\n    const end = (_data_properties1 = data.properties) === null || _data_properties1 === void 0 ? void 0 : _data_properties1.작업_기간.date.end;\n    const description = (_data_properties2 = data.properties) === null || _data_properties2 === void 0 ? void 0 : _data_properties2.설명.rich_text[0].plain_text;\n    function countWorkDays(start, end) {\n        const startDate = new Date(start);\n        const endDate = new Date(end);\n        let workdays = 0;\n        let currentDate = new Date(startDate);\n        while(currentDate <= endDate){\n            workdays++;\n            currentDate.setDate(currentDate.getDate() + 1);\n        }\n        return workdays;\n    }\n    const workDay = countWorkDays(start, end);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"프로젝트 제목 : \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\새 폴더\\\\next-portfolio\\\\components\\\\projects\\\\project-item.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"작업일 : \",\n                    workDay\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\새 폴더\\\\next-portfolio\\\\components\\\\projects\\\\project-item.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"설명 : \",\n                    description\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\새 폴더\\\\next-portfolio\\\\components\\\\projects\\\\project-item.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\새 폴더\\\\next-portfolio\\\\components\\\\projects\\\\project-item.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this);\n}\n_c = ProjectItem;\nvar _c;\n$RefreshReg$(_c, \"ProjectItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3QtaXRlbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsU0FBU0EsWUFBWSxLQUFNO1FBQU4sRUFBQ0MsSUFBSSxFQUFDLEdBQU47UUFDbEJBLDRCQUVBQSxrQkFDRkEsbUJBQ1FBO0lBSnBCLE1BQU1DLFNBQVFELDZCQUFBQSxLQUFLRSxVQUFVLENBQUNDLEVBQUUsQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsY0FBM0JELGlEQUFBQSwyQkFBNkJJLFVBQVU7SUFDckQsTUFBTUMsTUFBTUwsS0FBS0UsVUFBVSxDQUFDSSxFQUFFLENBQUNDLFlBQVk7SUFDM0MsTUFBTUMsU0FBUVIsbUJBQUFBLEtBQUtFLFVBQVUsY0FBZkYsdUNBQUFBLGlCQUFpQlMsS0FBSyxDQUFDQyxJQUFJLENBQUNGLEtBQUs7SUFDL0MsTUFBTUcsT0FBTVgsb0JBQUFBLEtBQUtFLFVBQVUsY0FBZkYsd0NBQUFBLGtCQUFpQlMsS0FBSyxDQUFDQyxJQUFJLENBQUNDLEdBQUc7SUFDM0MsTUFBTUMsZUFBY1osb0JBQUFBLEtBQUtFLFVBQVUsY0FBZkYsd0NBQUFBLGtCQUFpQmEsRUFBRSxDQUFDQyxTQUFTLENBQUMsRUFBRSxDQUFDVixVQUFVO0lBRS9ELFNBQVNXLGNBQWNQLEtBQUssRUFBQ0csR0FBRztRQUM1QixNQUFNSyxZQUFZLElBQUlDLEtBQUtUO1FBQzNCLE1BQU1VLFVBQVUsSUFBSUQsS0FBS047UUFFekIsSUFBSVEsV0FBVztRQUNmLElBQUlDLGNBQWMsSUFBSUgsS0FBS0Q7UUFFM0IsTUFBTUksZUFBZUYsUUFBUTtZQUN6QkM7WUFDQUMsWUFBWUMsT0FBTyxDQUFDRCxZQUFZRSxPQUFPLEtBQUc7UUFDOUM7UUFDQSxPQUFPSDtJQUNYO0lBRUEsTUFBTUksVUFBVVIsY0FBY1AsT0FBTUc7SUFDcEMscUJBQ0ksOERBQUNhOzswQkFDRyw4REFBQ0M7O29CQUFLO29CQUFXeEI7Ozs7Ozs7MEJBQ2pCLDhEQUFDd0I7O29CQUFLO29CQUFPRjs7Ozs7OzswQkFDYiw4REFBQ0M7O29CQUFJO29CQUFNWjs7Ozs7Ozs7Ozs7OztBQUl2QjtLQTlCd0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdC1pdGVtLmpzP2NlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEl0ZW0oe2RhdGF9KXtcclxuICAgIGNvbnN0IHRpdGxlID0gZGF0YS5wcm9wZXJ0aWVzLuydtOumhC50aXRsZVswXT8ucGxhaW5fdGV4dDtcclxuICAgIGNvbnN0IHRhZyA9IGRhdGEucHJvcGVydGllcy7tg5zqt7gubXVsdGlfc2VsZWN0O1xyXG4gICAgY29uc3Qgc3RhcnQgPSBkYXRhLnByb3BlcnRpZXM/LuyekeyXhV/quLDqsIQuZGF0ZS5zdGFydDtcclxuICAgIGNvbnN0IGVuZCA9IGRhdGEucHJvcGVydGllcz8u7J6R7JeFX+q4sOqwhC5kYXRlLmVuZDtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS5wcm9wZXJ0aWVzPy7shKTrqoUucmljaF90ZXh0WzBdLnBsYWluX3RleHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gY291bnRXb3JrRGF5cyhzdGFydCxlbmQpe1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0KTtcclxuICAgICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kKTtcclxuXHJcbiAgICAgICAgbGV0IHdvcmtkYXlzID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG5cclxuICAgICAgICB3aGlsZShjdXJyZW50RGF0ZSA8PSBlbmREYXRlKXtcclxuICAgICAgICAgICAgd29ya2RheXMrKztcclxuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkrMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3b3JrZGF5cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB3b3JrRGF5ID0gY291bnRXb3JrRGF5cyhzdGFydCxlbmQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Bhbj7tlITroZzsoJ3tirgg7KCc66qpIDoge3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+7J6R7JeF7J28IDoge3dvcmtEYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PuyEpOuqhSA6IHtkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0gICAiXSwibmFtZXMiOlsiUHJvamVjdEl0ZW0iLCJkYXRhIiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwi7J2066aEIiwicGxhaW5fdGV4dCIsInRhZyIsIu2DnOq3uCIsIm11bHRpX3NlbGVjdCIsInN0YXJ0Iiwi7J6R7JeFX+q4sOqwhCIsImRhdGUiLCJlbmQiLCJkZXNjcmlwdGlvbiIsIuyEpOuqhSIsInJpY2hfdGV4dCIsImNvdW50V29ya0RheXMiLCJzdGFydERhdGUiLCJEYXRlIiwiZW5kRGF0ZSIsIndvcmtkYXlzIiwiY3VycmVudERhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIndvcmtEYXkiLCJkaXYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/projects/project-item.js\n"));

/***/ })

});