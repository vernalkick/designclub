webpackHotUpdate_N_E("pages/index",{

/***/ "./components/store.js":
/*!*****************************!*\
  !*** ./components/store.js ***!
  \*****************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/Users/kevinclark/Developer/designclub/components/store.js\";\n\n\nfunction Store(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts,\n      hello = _ref.hello;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"ul\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n      children: hello\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this), posts && posts.map(function (post) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"li\", {\n        children: post.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n} // const Store = ({hello, posts}) => {\n//   console.log(hello)\n//   console.log('potato')\n//   \n//   return (\n//     <div>\n//       <p>Hello world fun</p>\n//       {posts && posts.map(post =>\n//         <p>{post}</p> \n//       )}\n//     </div>\n//   ) \n// }\n\n\n_c = Store;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var res, posts;\n    return _Users_kevinclark_Developer_designclub_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('http://jsonplaceholder.typicode.com/posts');\n\n          case 2:\n            res = _context.sent;\n            _context.next = 5;\n            return res.json();\n\n          case 5:\n            posts = _context.sent;\n            return _context.abrupt(\"return\", {\n              props: {\n                hello: 'blah',\n                posts: res\n              }\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nvar _c;\n\n$RefreshReg$(_c, \"Store\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdG9yZS5qcz80ZjgxIl0sIm5hbWVzIjpbIlN0b3JlIiwicG9zdHMiLCJoZWxsbyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBaEJDLEtBQWdCLFFBQWhCQSxLQUFnQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUMvQixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDBCQUNsQjtBQUFBLGtCQUFLQSxJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURrQjtBQUFBLEtBQVYsQ0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBdEJTTCxLO0FBd0JGLFNBQWVNLGNBQXRCO0FBQUE7QUFBQTs7OzJTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBR2FDLEtBQUssQ0FBQywyQ0FBRCxDQUhsQjs7QUFBQTtBQUdDQyxlQUhEO0FBQUE7QUFBQSxtQkFLZUEsR0FBRyxDQUFDQyxJQUFKLEVBTGY7O0FBQUE7QUFLQ1IsaUJBTEQ7QUFBQSw2Q0FTRTtBQUNMUyxtQkFBSyxFQUFFO0FBQ0xSLHFCQUFLLEVBQUUsTUFERjtBQUVMRCxxQkFBSyxFQUFFTztBQUZGO0FBREYsYUFURjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUJRUixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXG5cbmZ1bmN0aW9uIFN0b3JlKHsgcG9zdHMsIGhlbGxvIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICA8bGk+e2hlbGxvfTwvbGk+XG4gICAgICB7cG9zdHMgJiYgcG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxsaT57cG9zdC50aXRsZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKVxufVxuLy8gY29uc3QgU3RvcmUgPSAoe2hlbGxvLCBwb3N0c30pID0+IHtcbi8vICAgY29uc29sZS5sb2coaGVsbG8pXG4vLyAgIGNvbnNvbGUubG9nKCdwb3RhdG8nKVxuLy8gICBcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPHA+SGVsbG8gd29ybGQgZnVuPC9wPlxuLy8gICAgICAge3Bvc3RzICYmIHBvc3RzLm1hcChwb3N0ID0+XG4vLyAgICAgICAgIDxwPntwb3N0fTwvcD4gXG4vLyAgICAgICApfVxuLy8gICAgIDwvZGl2PlxuLy8gICApIFxuLy8gfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0cy5cbiAgLy8gWW91IGNhbiB1c2UgYW55IGRhdGEgZmV0Y2hpbmcgbGlicmFyeVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKVxuICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vdHRhd2EtZGVzaWduLWNsdWIubXlzaG9waWZ5LmNvbS9wcm9kdWN0cy5qc29uJylcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgLy8gQnkgcmV0dXJuaW5nIHsgcHJvcHM6IHBvc3RzIH0sIHRoZSBCbG9nIGNvbXBvbmVudFxuICAvLyB3aWxsIHJlY2VpdmUgYHBvc3RzYCBhcyBhIHByb3AgYXQgYnVpbGQgdGltZVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBoZWxsbzogJ2JsYWgnLFxuICAgICAgcG9zdHM6IHJlcyxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/store.js\n");

/***/ })

})