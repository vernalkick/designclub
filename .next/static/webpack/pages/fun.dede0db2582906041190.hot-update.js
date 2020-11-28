webpackHotUpdate_N_E("pages/fun",{

/***/ "./pages/fun.js":
/*!**********************!*\
  !*** ./pages/fun.js ***!
  \**********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/kevinclark/Developer/designclub/pages/fun.js\";\n\n\nfunction Fun(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: products && products.map(function (product) {\n      var _jsxDEV2;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", (_jsxDEV2 = {\n          src: product.images[0].src,\n          loading: \"lazy\",\n          width: product.images[0].width\n        }, Object(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"width\", product.images[0].height), Object(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"style\", {\n          background: \"black\"\n        }), _jsxDEV2), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            href: 'https://ottawa-design-club.myshopify.com/products/' + product.handle,\n            children: product.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n          children: product.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, _this)]\n      }, product.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Fun;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fun);\n\nvar _c;\n\n$RefreshReg$(_c, \"Fun\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZnVuLmpzPzFkODciXSwibmFtZXMiOlsiRnVuIiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaW1hZ2VzIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsR0FBVCxPQUEyQjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUN6QixzQkFDRTtBQUFBLGNBQ0dBLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQUMsT0FBTztBQUFBOztBQUFBLDBCQUMvQjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFQSxPQUFPLENBQUNDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxHQUE1QjtBQUFpQyxpQkFBTyxFQUFDLE1BQXpDO0FBQWdELGVBQUssRUFBRUYsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBZixFQUFrQkU7QUFBekUsMktBQXVGSCxPQUFPLENBQUNDLE1BQVIsQ0FBZSxDQUFmLEVBQWtCRyxNQUF6RyxtS0FBd0g7QUFBQ0Msb0JBQVUsRUFBRTtBQUFiLFNBQXhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGlDQUNFO0FBQUcsZ0JBQUksRUFBRSx1REFBdURMLE9BQU8sQ0FBQ00sTUFBeEU7QUFBQSxzQkFDR04sT0FBTyxDQUFDTztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0U7QUFBQSxvQkFBSVAsT0FBTyxDQUFDUTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQSxTQUFTUixPQUFPLENBQUNTLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEK0I7QUFBQSxLQUFwQjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztLQWhCUVosRzs7QUE2Qk1BLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZnVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBGdW4oeyBwcm9kdWN0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtwcm9kdWN0cyAmJiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PlxuICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfSBsb2FkaW5nPVwibGF6eVwiIHdpZHRoPXtwcm9kdWN0LmltYWdlc1swXS53aWR0aH0gd2lkdGg9e3Byb2R1Y3QuaW1hZ2VzWzBdLmhlaWdodH0gc3R5bGU9e3tiYWNrZ3JvdW5kOiBcImJsYWNrXCJ9fSAvPlxuICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgIDxhIGhyZWY9eydodHRwczovL290dGF3YS1kZXNpZ24tY2x1Yi5teXNob3BpZnkuY29tL3Byb2R1Y3RzLycgKyBwcm9kdWN0LmhhbmRsZX0+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHA+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2xpPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vdHRhd2EtZGVzaWduLWNsdWIubXlzaG9waWZ5LmNvbS9wcm9kdWN0cy5qc29uJylcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0czoganNvbi5wcm9kdWN0c1xuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/fun.js\n");

/***/ })

})