(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nagDC"],{

/***/ "./component/nag-data-collection.jsx":
/*!*******************************************!*\
  !*** ./component/nag-data-collection.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NagDegradedPerformance; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_common_nag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/common/nag */ \"../ui/component/common/nag.jsx\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\n\n\n\n\n\nfunction NagDegradedPerformance(props) {\n  var onClose = props.onClose;\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_4__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isMobile ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_nag__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      tokens: {\n        more_information: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"link\",\n          label: __('more --[value for \"more_information\"]--'),\n          href: \"https://odysee.com/$/privacypolicy\"\n        })\n      }\n    }, \"odysee collects usage information for itself only (%more_information%).\"),\n    actionText: __('OK'),\n    onClick: onClose\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_nag__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_i18nMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      tokens: {\n        more_information: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"link\",\n          label: __('more --[value for \"more_information\"]--'),\n          href: \"https://odysee.com/$/privacypolicy\"\n        })\n      }\n    }, \"odysee collects usage information for itself only (%more_information%). Want control over this and more?\"),\n    actionText: __('Get The App'),\n    href: \"https://lbry.com/get\",\n    onClose: onClose\n  }));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbmFnLWRhdGEtY29sbGVjdGlvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnQvbmFnLWRhdGEtY29sbGVjdGlvbi5qc3g/MjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYWcgZnJvbSAnY29tcG9uZW50L2NvbW1vbi9uYWcnO1xuaW1wb3J0IEkxOG5NZXNzYWdlIGZyb20gJ2NvbXBvbmVudC9pMThuTWVzc2FnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuaW1wb3J0IHsgdXNlSXNNb2JpbGUgfSBmcm9tICdlZmZlY3RzL3VzZS1zY3JlZW5zaXplJztcblxudHlwZSBQcm9wcyA9IHtcbiAgb25DbG9zZTogKCkgPT4gdm9pZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hZ0RlZ3JhZGVkUGVyZm9ybWFuY2UocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgb25DbG9zZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtpc01vYmlsZSA/IChcbiAgICAgICAgPE5hZ1xuICAgICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICAgPEkxOG5NZXNzYWdlXG4gICAgICAgICAgICAgIHRva2Vucz17e1xuICAgICAgICAgICAgICAgIG1vcmVfaW5mb3JtYXRpb246IChcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnbW9yZSAtLVt2YWx1ZSBmb3IgXCJtb3JlX2luZm9ybWF0aW9uXCJdLS0nKX1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vb2R5c2VlLmNvbS8kL3ByaXZhY3lwb2xpY3lcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBvZHlzZWUgY29sbGVjdHMgdXNhZ2UgaW5mb3JtYXRpb24gZm9yIGl0c2VsZiBvbmx5ICglbW9yZV9pbmZvcm1hdGlvbiUpLlxuICAgICAgICAgICAgPC9JMThuTWVzc2FnZT5cbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uVGV4dD17X18oJ09LJyl9XG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxOYWdcbiAgICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICAgIDxJMThuTWVzc2FnZVxuICAgICAgICAgICAgICB0b2tlbnM9e3tcbiAgICAgICAgICAgICAgICBtb3JlX2luZm9ybWF0aW9uOiAoXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ21vcmUgLS1bdmFsdWUgZm9yIFwibW9yZV9pbmZvcm1hdGlvblwiXS0tJyl9XG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL29keXNlZS5jb20vJC9wcml2YWN5cG9saWN5XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgb2R5c2VlIGNvbGxlY3RzIHVzYWdlIGluZm9ybWF0aW9uIGZvciBpdHNlbGYgb25seSAoJW1vcmVfaW5mb3JtYXRpb24lKS4gV2FudCBjb250cm9sIG92ZXIgdGhpcyBhbmQgbW9yZT9cbiAgICAgICAgICAgIDwvSTE4bk1lc3NhZ2U+XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvblRleHQ9e19fKCdHZXQgVGhlIEFwcCcpfVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2xicnkuY29tL2dldFwiXG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFEQTtBQWNBO0FBQ0E7QUFqQkE7QUFxQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBbEJBO0FBdUJBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/nag-data-collection.jsx\n");

/***/ })

}]);