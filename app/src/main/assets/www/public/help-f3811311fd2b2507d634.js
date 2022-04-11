(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["help"],{

/***/ "../ui/page/help/index.js":
/*!********************************!*\
  !*** ../ui/page/help/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"../ui/page/help/view.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9oZWxwL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvaGVscC9pbmRleC5qcz81Y2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxwUGFnZSBmcm9tICcuL3ZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwUGFnZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/page/help/index.js\n");

/***/ }),

/***/ "../ui/page/help/view.jsx":
/*!********************************!*\
  !*** ../ui/page/help/view.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HelpPage; });\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ \"../config.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var component_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! component/page */ \"../ui/component/page/index.js\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_i18nMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! component/i18nMessage */ \"../ui/component/i18nMessage/index.js\");\n\n\n\n\n\n\n\nfunction HelpPage() {\n  return react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    className: \"card-stack\"\n  }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: __('Visit the %SITE_NAME% Help Hub', {\n      SITE_NAME: config__WEBPACK_IMPORTED_MODULE_0__[\"SITE_NAME\"]\n    }),\n    subtitle: __('Our support posts answer many common questions.'),\n    actions: react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      href: \"https://odysee.com/@OdyseeHelp:b\",\n      label: __('View %SITE_NAME% Help Hub', {\n        SITE_NAME: config__WEBPACK_IMPORTED_MODULE_0__[\"SITE_NAME\"]\n      }),\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"HELP\"],\n      button: \"secondary\"\n    }))\n  }), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: __('Find assistance'),\n    subtitle: react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_i18nMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      tokens: {\n        channel: react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"strong\", null, \"#support\"),\n        help_email: config__WEBPACK_IMPORTED_MODULE_0__[\"SITE_HELP_EMAIL\"]\n      }\n    }, \"Live help is available most hours in the %channel% channel of our Discord chat room. Or you can always email us at %help_email%.\"),\n    actions: react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      button: \"secondary\",\n      label: __('Join our Discord'),\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"CHAT\"],\n      href: \"https://chat.odysee.com\"\n    }), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      button: \"secondary\",\n      label: __('Email Us'),\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"WEB\"],\n      href: \"mailto:\".concat(config__WEBPACK_IMPORTED_MODULE_0__[\"SITE_HELP_EMAIL\"])\n    }))\n  }), react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_common_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: __('Report a bug or suggest something'),\n    subtitle: __('Did you find something wrong? Think Odysee could add something useful and cool?'),\n    actions: react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](\"div\", {\n      className: \"section__actions\"\n    }, react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      navigate: \"/$/report\",\n      label: __('Submit Feedback'),\n      icon: constants_icons__WEBPACK_IMPORTED_MODULE_1__[\"FEEDBACK\"],\n      button: \"secondary\"\n    }))\n  }));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvcGFnZS9oZWxwL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL3BhZ2UvaGVscC92aWV3LmpzeD9hYzE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBTSVRFX05BTUUsIFNJVEVfSEVMUF9FTUFJTCB9IGZyb20gJ2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBJQ09OUyBmcm9tICdjb25zdGFudHMvaWNvbnMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnQvYnV0dG9uJztcbmltcG9ydCBQYWdlIGZyb20gJ2NvbXBvbmVudC9wYWdlJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgSTE4bk1lc3NhZ2UgZnJvbSAnY29tcG9uZW50L2kxOG5NZXNzYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVscFBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2UgY2xhc3NOYW1lPVwiY2FyZC1zdGFja1wiPlxuICAgICAgPENhcmRcbiAgICAgICAgdGl0bGU9e19fKCdWaXNpdCB0aGUgJVNJVEVfTkFNRSUgSGVscCBIdWInLCB7IFNJVEVfTkFNRSB9KX1cbiAgICAgICAgc3VidGl0bGU9e19fKCdPdXIgc3VwcG9ydCBwb3N0cyBhbnN3ZXIgbWFueSBjb21tb24gcXVlc3Rpb25zLicpfVxuICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vb2R5c2VlLmNvbS9AT2R5c2VlSGVscDpiXCJcbiAgICAgICAgICAgICAgbGFiZWw9e19fKCdWaWV3ICVTSVRFX05BTUUlIEhlbHAgSHViJywgeyBTSVRFX05BTUUgfSl9XG4gICAgICAgICAgICAgIGljb249e0lDT05TLkhFTFB9XG4gICAgICAgICAgICAgIGJ1dHRvbj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAvPlxuXG4gICAgICA8Q2FyZFxuICAgICAgICB0aXRsZT17X18oJ0ZpbmQgYXNzaXN0YW5jZScpfVxuICAgICAgICBzdWJ0aXRsZT17XG4gICAgICAgICAgPEkxOG5NZXNzYWdlIHRva2Vucz17eyBjaGFubmVsOiA8c3Ryb25nPiNzdXBwb3J0PC9zdHJvbmc+LCBoZWxwX2VtYWlsOiBTSVRFX0hFTFBfRU1BSUwgfX0+XG4gICAgICAgICAgICBMaXZlIGhlbHAgaXMgYXZhaWxhYmxlIG1vc3QgaG91cnMgaW4gdGhlICVjaGFubmVsJSBjaGFubmVsIG9mIG91ciBEaXNjb3JkIGNoYXQgcm9vbS4gT3IgeW91IGNhbiBhbHdheXMgZW1haWxcbiAgICAgICAgICAgIHVzIGF0ICVoZWxwX2VtYWlsJS5cbiAgICAgICAgICA8L0kxOG5NZXNzYWdlPlxuICAgICAgICB9XG4gICAgICAgIGFjdGlvbnM9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBidXR0b249XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBsYWJlbD17X18oJ0pvaW4gb3VyIERpc2NvcmQnKX1cbiAgICAgICAgICAgICAgaWNvbj17SUNPTlMuQ0hBVH1cbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2hhdC5vZHlzZWUuY29tXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInNlY29uZGFyeVwiIGxhYmVsPXtfXygnRW1haWwgVXMnKX0gaWNvbj17SUNPTlMuV0VCfSBocmVmPXtgbWFpbHRvOiR7U0lURV9IRUxQX0VNQUlMfWB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxDYXJkXG4gICAgICAgIHRpdGxlPXtfXygnUmVwb3J0IGEgYnVnIG9yIHN1Z2dlc3Qgc29tZXRoaW5nJyl9XG4gICAgICAgIHN1YnRpdGxlPXtfXygnRGlkIHlvdSBmaW5kIHNvbWV0aGluZyB3cm9uZz8gVGhpbmsgT2R5c2VlIGNvdWxkIGFkZCBzb21ldGhpbmcgdXNlZnVsIGFuZCBjb29sPycpfVxuICAgICAgICBhY3Rpb25zPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxCdXR0b24gbmF2aWdhdGU9XCIvJC9yZXBvcnRcIiBsYWJlbD17X18oJ1N1Ym1pdCBGZWVkYmFjaycpfSBpY29uPXtJQ09OUy5GRUVEQkFDS30gYnV0dG9uPVwic2Vjb25kYXJ5XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1BhZ2U+XG4gICk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/page/help/view.jsx\n");

/***/ })

}]);