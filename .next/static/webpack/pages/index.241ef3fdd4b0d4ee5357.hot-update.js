webpackHotUpdate_N_E("pages/index",{

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _jsxFileName = \"/Users/kevinclark/Developer/designclub/components/store.js\",\n    _this = undefined;\n\n\n\nvar Store = function Store(_ref) {\n  var hello = _ref.hello,\n      posts = _ref.posts;\n  console.log(posts);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n      children: \"Hello world fun\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), posts && posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n        children: post\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Store;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var res, posts;\n    return _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('http://jsonplaceholder.typicode.com/posts');\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            posts = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                hello: 'blah',\n                posts: res\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcz80ZjgxIl0sIm5hbWVzIjpbIlN0b3JlIiwiaGVsbG8iLCJwb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQW9CO0FBQUEsTUFBbEJDLEtBQWtCLFFBQWxCQSxLQUFrQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNoQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR0EsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsMEJBQ3RCO0FBQUEsa0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURzQjtBQUFBLEtBQWQsQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBWEQ7O0tBQU1OLEs7QUFhQyxTQUFlTyxjQUF0QjtBQUFBO0FBQUE7OzsyU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUdhQyxLQUFLLENBQUMsMkNBQUQsQ0FIbEI7O0FBQUE7QUFHQ0MsZUFIRDtBQUFBO0FBQUEsbUJBS2VBLEdBQUcsQ0FBQ0MsSUFBSixFQUxmOztBQUFBO0FBS0NSLGlCQUxEO0FBQUEsNkNBU0U7QUFDTFMsbUJBQUssRUFBRTtBQUNMVixxQkFBSyxFQUFFLE1BREY7QUFFTEMscUJBQUssRUFBRU87QUFGRjtBQURGLGFBVEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlCUVQsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xuXG5jb25zdCBTdG9yZSA9ICh7aGVsbG8sIHBvc3RzfSkgPT4ge1xuICBjb25zb2xlLmxvZyhwb3N0cylcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPkhlbGxvIHdvcmxkIGZ1bjwvcD5cbiAgICAgIHtwb3N0cyAmJiBwb3N0cy5tYXAocG9zdCA9PlxuICAgICAgICA8cD57cG9zdH08L3A+IFxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXG4gIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJylcbiAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vb3R0YXdhLWRlc2lnbi1jbHViLm15c2hvcGlmeS5jb20vcHJvZHVjdHMuanNvbicpXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gIC8vIEJ5IHJldHVybmluZyB7IHByb3BzOiBwb3N0cyB9LCB0aGUgQmxvZyBjb21wb25lbnRcbiAgLy8gd2lsbCByZWNlaXZlIGBwb3N0c2AgYXMgYSBwcm9wIGF0IGJ1aWxkIHRpbWVcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaGVsbG86ICdibGFoJyxcbiAgICAgIHBvc3RzOiByZXMsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ })

})