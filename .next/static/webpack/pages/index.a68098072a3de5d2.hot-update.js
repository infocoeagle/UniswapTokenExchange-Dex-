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

/***/ "./components/TokenBalance.js":
/*!************************************!*\
  !*** ./components/TokenBalance.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils/context */ \"./utils/context.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar TokenBalance = function(param) {\n    var name = param.name, walletAddress = param.walletAddress;\n    _s();\n    console.log(name, walletAddress, \"name and wallet address\");\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"-\"), balance = ref[0], setbalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), tokenaddress = ref1[0], settokenaddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon\n    }), copyIcon = ref2[0], setcopyIcon = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), txtpending = ref3[0], settxtpending = ref3[1];\n    var notifyError = function(msg) {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    };\n    var notifuSuccess = function() {\n        return react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].success(\"Transaction completed\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (name && walletAddress) {\n            fetchTokenbalance();\n            fetchTokenAddress();\n        }\n    }, [\n        name,\n        walletAddress\n    ]);\n    function fetchTokenbalance() {\n        return _fetchTokenbalance.apply(this, arguments);\n    }\n    function _fetchTokenbalance() {\n        _fetchTokenbalance = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var balance, fbal;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenBalance)(name, walletAddress);\n                    case 2:\n                        balance = _ctx.sent;\n                        console.log(balance, \"tokenbalance...........\");\n                        fbal = ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(balance === null || balance === void 0 ? void 0 : balance.toString(), 18);\n                        setbalance(fbal.toString());\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenbalance.apply(this, arguments);\n    }\n    function fetchTokenAddress() {\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    function _fetchTokenAddress() {\n        _fetchTokenAddress = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var address;\n            return C_Users_eliod_Uniswaptoken_dex_UniswapTokenExchange_Dex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenAddress)(name);\n                    case 2:\n                        address = _ctx.sent;\n                        settokenaddress(address);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _fetchTokenAddress.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100 \",\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer\",\n                    onClick: function() {\n                        navigator.clipboard.writeText(tokenaddress);\n                        setcopyIcon();\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            txtpending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_4__.TransactionStatus, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 61,\n                columnNumber: 22\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\eliod\\\\Uniswaptoken-dex\\\\UniswapTokenExchange-Dex-\\\\components\\\\TokenBalance.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(TokenBalance, \"L6iFJ9gEI9N2BVpzrUo1y9HtTRA=\");\n_c = TokenBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenBalance);\nvar _c;\n$RefreshReg$(_c, \"TokenBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pDLDhEQUFDNEIsR0FBQzt3QkFBQ0QsU0FBUyxFQUFDLHVEQUF1RDtrQ0FDakV2QixPQUFPOzs7Ozs2QkFDTjs7Ozs7O3FCQUNBOzBCQUNOLDhEQUFDc0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNEQUFzRDswQkFDbkUsNEVBQUNsQixRQUFRLENBQUNELElBQUk7b0JBQ1ptQixTQUFTLEVBQUMsb0JBQW9CO29CQUM5QkUsT0FBTyxFQUFFLFdBQU07d0JBQ2JDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDQyxTQUFTLENBQUMxQixZQUFZLENBQUMsQ0FBQzt3QkFDNUNJLFdBQVcsRUFBRSxDQUFDO3FCQUNmOzs7Ozt5QkFDRDs7Ozs7cUJBQ0U7WUFDTEMsVUFBVSxrQkFBSSw4REFBQ2hCLHFEQUFpQjs7OztxQkFBRzswQkFDcEMsOERBQUNKLG9EQUFPOzs7O3FCQUFHOzs7Ozs7YUFDUCxDQUNOO0NBQ0g7R0FqREtRLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQW1EbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rva2VuQmFsYW5jZS5qcz8yMGM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHtcclxuICBDbGlwYm9hcmRJY29uLFxyXG4gIENsaXBib2FyZENoZWNrSWNvbixcclxuICBQbHVzSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRUb2tlbkFkZHJlc3MsXHJcbiAgZ2V0VG9rZW5CYWxhbmNlLFxyXG4gIGluY3JlYXNlQWxsb3dhbmNlLFxyXG59IGZyb20gXCIuLy4uL3V0aWxzL2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IFRva2VuQmFsYW5jZSA9ICh7IG5hbWUsIHdhbGxldEFkZHJlc3MgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5hbWUsIHdhbGxldEFkZHJlc3MsIFwibmFtZSBhbmQgd2FsbGV0IGFkZHJlc3NcIik7XHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldGJhbGFuY2VdID0gdXNlU3RhdGUoXCItXCIpO1xyXG4gIGNvbnN0IFt0b2tlbmFkZHJlc3MsIHNldHRva2VuYWRkcmVzc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtjb3B5SWNvbiwgc2V0Y29weUljb25dID0gdXNlU3RhdGUoeyBpY29uOiBDbGlwYm9hcmRJY29uIH0pO1xyXG4gIGNvbnN0IFt0eHRwZW5kaW5nLCBzZXR0eHRwZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ1U3VjY2VzcyA9ICgpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5iYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9XHJcbiAgfSwgW25hbWUsIHdhbGxldEFkZHJlc3NdKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hUb2tlbmJhbGFuY2UoKSB7XHJcbiAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgZ2V0VG9rZW5CYWxhbmNlKG5hbWUsIHdhbGxldEFkZHJlc3MpO1xyXG4gICAgY29uc29sZS5sb2coYmFsYW5jZSwgXCJ0b2tlbmJhbGFuY2UuLi4uLi4uLi4uLlwiKTtcclxuICAgIGNvbnN0IGZiYWwgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoYmFsYW5jZT8udG9TdHJpbmcoKSwgMTgpO1xyXG4gICAgc2V0YmFsYW5jZShmYmFsLnRvU3RyaW5nKCkpO1xyXG4gIH1cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFRva2VuQWRkcmVzcygpIHtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBnZXRUb2tlbkFkZHJlc3MobmFtZSk7XHJcbiAgICBzZXR0b2tlbmFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTIgYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCByb3VuZGVkLXItbGcgYm9yZGVyLVsjNzc2NUYzXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXppbmMtOTAwIHRleHQtemluYy0zMDAgdy1maXQgcC0yIHB4LTMgcm91bmRlZC1sLWxnXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntuYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCBwLTAuNSBweC0zIG1sLTMgcm91bmRlZC1sZyB0ZXh0LXppbmMtMTAwIFwiPlxyXG4gICAgICAgICAge2JhbGFuY2V9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcHgtMiBiZy1bIzc3NjVGM10gcm91bmRlZC1yLWxnXCI+XHJcbiAgICAgICAgPGNvcHlJY29uLmljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHNldGNvcHlJY29uKCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7dHh0cGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XHJcbiAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5CYWxhbmNlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImV0aGVycyIsInRvYXN0IiwiVG9hc3RlciIsIkNsaXBib2FyZEljb24iLCJDbGlwYm9hcmRDaGVja0ljb24iLCJQbHVzSWNvbiIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJUb2tlbkJhbGFuY2UiLCJuYW1lIiwid2FsbGV0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJiYWxhbmNlIiwic2V0YmFsYW5jZSIsInRva2VuYWRkcmVzcyIsInNldHRva2VuYWRkcmVzcyIsImljb24iLCJjb3B5SWNvbiIsInNldGNvcHlJY29uIiwidHh0cGVuZGluZyIsInNldHR4dHBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnVTdWNjZXNzIiwic3VjY2VzcyIsImZldGNoVG9rZW5iYWxhbmNlIiwiZmV0Y2hUb2tlbkFkZHJlc3MiLCJmYmFsIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiYWRkcmVzcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJvbkNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TokenBalance.js\n"));

/***/ })

});