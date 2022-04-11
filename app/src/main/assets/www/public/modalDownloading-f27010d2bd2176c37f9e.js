(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalDownloading"],{

/***/ "../ui/modal/modalDownloading/index.js":
/*!*********************************************!*\
  !*** ../ui/modal/modalDownloading/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var redux_selectors_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/selectors/app */ \"../ui/redux/selectors/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalDownloading/view.jsx\");\n\n\n\n\n\nvar select = function select(state) {\n  return {\n    downloadProgress: Object(redux_selectors_app__WEBPACK_IMPORTED_MODULE_2__[\"selectDownloadProgress\"])(state),\n    downloadComplete: Object(redux_selectors_app__WEBPACK_IMPORTED_MODULE_2__[\"selectDownloadComplete\"])(state),\n    downloadItem: Object(redux_selectors_app__WEBPACK_IMPORTED_MODULE_2__[\"selectUpgradeDownloadPath\"])(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    startUpgrade: function startUpgrade() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doStartUpgrade\"])());\n    },\n    cancelUpgrade: function cancelUpgrade() {\n      dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doHideModal\"])());\n      dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_1__[\"doCancelUpgrade\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxEb3dubG9hZGluZy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbERvd25sb2FkaW5nL2luZGV4LmpzPzcwNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvU3RhcnRVcGdyYWRlLCBkb0NhbmNlbFVwZ3JhZGUsIGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuaW1wb3J0IHsgc2VsZWN0RG93bmxvYWRQcm9ncmVzcywgc2VsZWN0RG93bmxvYWRDb21wbGV0ZSwgc2VsZWN0VXBncmFkZURvd25sb2FkUGF0aCB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9hcHAnO1xuaW1wb3J0IE1vZGFsRG93bmxvYWRpbmcgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gc3RhdGUgPT4gKHtcbiAgZG93bmxvYWRQcm9ncmVzczogc2VsZWN0RG93bmxvYWRQcm9ncmVzcyhzdGF0ZSksXG4gIGRvd25sb2FkQ29tcGxldGU6IHNlbGVjdERvd25sb2FkQ29tcGxldGUoc3RhdGUpLFxuICBkb3dubG9hZEl0ZW06IHNlbGVjdFVwZ3JhZGVEb3dubG9hZFBhdGgoc3RhdGUpLFxufSk7XG5cbmNvbnN0IHBlcmZvcm0gPSBkaXNwYXRjaCA9PiAoe1xuICBzdGFydFVwZ3JhZGU6ICgpID0+IGRpc3BhdGNoKGRvU3RhcnRVcGdyYWRlKCkpLFxuICBjYW5jZWxVcGdyYWRlOiAoKSA9PiB7XG4gICAgZGlzcGF0Y2goZG9IaWRlTW9kYWwoKSk7XG4gICAgZGlzcGF0Y2goZG9DYW5jZWxVcGdyYWRlKCkpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHNlbGVjdCxcbiAgcGVyZm9ybVxuKShNb2RhbERvd25sb2FkaW5nKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUNBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalDownloading/index.js\n");

/***/ }),

/***/ "../ui/modal/modalDownloading/view.jsx":
/*!*********************************************!*\
  !*** ../ui/modal/modalDownloading/view.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-progress */ \"../node_modules/rc-progress/es/index.js\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\n\nvar ModalDownloading = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalDownloading, _React$PureComponent);\n\n  function ModalDownloading() {\n    _classCallCheck(this, ModalDownloading);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalDownloading).apply(this, arguments));\n  }\n\n  _createClass(ModalDownloading, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          downloadProgress = _this$props.downloadProgress,\n          downloadComplete = _this$props.downloadComplete,\n          downloadItem = _this$props.downloadItem,\n          startUpgrade = _this$props.startUpgrade,\n          cancelUpgrade = _this$props.cancelUpgrade;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        title: __('Downloading update'),\n        isOpen: true,\n        contentLabel: __('Downloading update'),\n        type: \"custom\"\n      }, downloadProgress ? \"\".concat(downloadProgress, \"% \").concat(__('complete')) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_2__[\"Line\"], {\n        percent: downloadProgress || 0,\n        strokeWidth: \"4\"\n      }), downloadComplete ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('Click \"Begin Upgrade\" to start the upgrade process.')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('The app will close (if not, quit with CTRL-Q), and you will be prompted to install the latest version of LBRY.')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('To launch installation manually, close LBRY (CTRL-Q) and run the command below in the terminal.')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"blockquote\", null, \"sudo dpkg -i \", downloadItem), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('After the install is complete, please reopen the app.')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('Note: You can also install the AppImage version for streamlined updates.'), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: __('Download here.'),\n        href: \"https://lbry.com/get/lbry.AppImage\"\n      }))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"card__actions\"\n      }, downloadComplete ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: __('Begin Upgrade'),\n        onClick: startUpgrade\n      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: __('Cancel'),\n        onClick: cancelUpgrade\n      })));\n    }\n  }]);\n\n  return ModalDownloading;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalDownloading);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxEb3dubG9hZGluZy92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbERvd25sb2FkaW5nL3ZpZXcuanN4PzMyZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyYy1wcm9ncmVzcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuXG50eXBlIFByb3BzID0ge1xuICBkb3dubG9hZFByb2dyZXNzOiA/bnVtYmVyLFxuICBkb3dubG9hZENvbXBsZXRlOiBib29sZWFuLFxuICBkb3dubG9hZEl0ZW06IHN0cmluZyxcbiAgc3RhcnRVcGdyYWRlOiAoKSA9PiB2b2lkLFxuICBjYW5jZWxVcGdyYWRlOiAoKSA9PiB2b2lkLFxufTtcblxuY2xhc3MgTW9kYWxEb3dubG9hZGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG93bmxvYWRQcm9ncmVzcywgZG93bmxvYWRDb21wbGV0ZSwgZG93bmxvYWRJdGVtLCBzdGFydFVwZ3JhZGUsIGNhbmNlbFVwZ3JhZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHRpdGxlPXtfXygnRG93bmxvYWRpbmcgdXBkYXRlJyl9IGlzT3BlbiBjb250ZW50TGFiZWw9e19fKCdEb3dubG9hZGluZyB1cGRhdGUnKX0gdHlwZT1cImN1c3RvbVwiPlxuICAgICAgICB7ZG93bmxvYWRQcm9ncmVzcyA/IGAke2Rvd25sb2FkUHJvZ3Jlc3N9JSAke19fKCdjb21wbGV0ZScpfWAgOiBudWxsfVxuICAgICAgICA8TGluZSBwZXJjZW50PXtkb3dubG9hZFByb2dyZXNzIHx8IDB9IHN0cm9rZVdpZHRoPVwiNFwiIC8+XG4gICAgICAgIHtkb3dubG9hZENvbXBsZXRlID8gKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxwPntfXygnQ2xpY2sgXCJCZWdpbiBVcGdyYWRlXCIgdG8gc3RhcnQgdGhlIHVwZ3JhZGUgcHJvY2Vzcy4nKX08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge19fKFxuICAgICAgICAgICAgICAgICdUaGUgYXBwIHdpbGwgY2xvc2UgKGlmIG5vdCwgcXVpdCB3aXRoIENUUkwtUSksIGFuZCB5b3Ugd2lsbCBiZSBwcm9tcHRlZCB0byBpbnN0YWxsIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiBMQlJZLidcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7X18oJ1RvIGxhdW5jaCBpbnN0YWxsYXRpb24gbWFudWFsbHksIGNsb3NlIExCUlkgKENUUkwtUSkgYW5kIHJ1biB0aGUgY29tbWFuZCBiZWxvdyBpbiB0aGUgdGVybWluYWwuJyl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YmxvY2txdW90ZT5zdWRvIGRwa2cgLWkge2Rvd25sb2FkSXRlbX08L2Jsb2NrcXVvdGU+XG4gICAgICAgICAgICA8cD57X18oJ0FmdGVyIHRoZSBpbnN0YWxsIGlzIGNvbXBsZXRlLCBwbGVhc2UgcmVvcGVuIHRoZSBhcHAuJyl9PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtfXygnTm90ZTogWW91IGNhbiBhbHNvIGluc3RhbGwgdGhlIEFwcEltYWdlIHZlcnNpb24gZm9yIHN0cmVhbWxpbmVkIHVwZGF0ZXMuJyl9eycgJ31cbiAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e19fKCdEb3dubG9hZCBoZXJlLicpfSBocmVmPVwiaHR0cHM6Ly9sYnJ5LmNvbS9nZXQvbGJyeS5BcHBJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19hY3Rpb25zXCI+XG4gICAgICAgICAge2Rvd25sb2FkQ29tcGxldGUgPyA8QnV0dG9uIGJ1dHRvbj1cInByaW1hcnlcIiBsYWJlbD17X18oJ0JlZ2luIFVwZ3JhZGUnKX0gb25DbGljaz17c3RhcnRVcGdyYWRlfSAvPiA6IG51bGx9XG4gICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e19fKCdDYW5jZWwnKX0gb25DbGljaz17Y2FuY2VsVXBncmFkZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxEb3dubG9hZGluZztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalDownloading/view.jsx\n");

/***/ })

}]);