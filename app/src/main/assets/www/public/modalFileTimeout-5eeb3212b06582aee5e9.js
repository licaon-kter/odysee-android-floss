(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalFileTimeout"],{

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vLyBUaGVzZSBzaG91bGQgcHJvYmFibHkganVzdCBiZSBjb21iaW5lZCBpbnRvIG9uZSBtb2RhbCBjb21wb25lbnRcbmltcG9ydCAqIGFzIElDT05TIGZyb20gJ2NvbnN0YW50cy9pY29ucyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VJc01vYmlsZSB9IGZyb20gJ2VmZmVjdHMvdXNlLXNjcmVlbnNpemUnO1xuXG50eXBlIE1vZGFsUHJvcHMgPSB7XG4gIHR5cGU/OiBzdHJpbmcsXG4gIG92ZXJsYXk/OiBib29sZWFuLFxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGFib3J0QnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGNvbmZpcm1CdXR0b25EaXNhYmxlZD86IGJvb2xlYW4sXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxuICBvbkNvbmZpcm1lZD86IChhbnkpID0+IGFueSxcbiAgb25BYm9ydGVkPzogKGFueSkgPT4gYW55LFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgZXh0cmFDb250ZW50PzogUmVhY3QuTm9kZSxcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGhpZGVCdXR0b25MYWJlbD86IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5Ob2RlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHByb3BzOiBNb2RhbFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICB0eXBlID0gJ2FsZXJ0JyxcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcbiAgICBjb25maXJtQnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkNvbmZpcm1lZCxcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxuICAgIGFib3J0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkFib3J0ZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHRpdGxlLFxuICAgIC4uLm1vZGFsUHJvcHNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1vZGFsXG4gICAgICB7Li4ubW9kYWxQcm9wc31cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkFib3J0ZWQgfHwgb25Db25maXJtZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21vZGFsJywgY2xhc3NOYW1lLCB7XG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcbiAgICAgIH0pfVxuICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxuICAgID5cbiAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGUgY2FyZF9fdGl0bGUtLWRlcHJlY2F0ZWRcIj57dGl0bGV9PC9oMT59XG4gICAgICB7dHlwZSA9PT0gJ2NhcmQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb25TaXplPXtpc01vYmlsZSA/IDI0IDogdW5kZWZpbmVkfVxuICAgICAgICAgIGJ1dHRvbj1cImNsb3NlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cbiAgICAgICAgICBpY29uPXtJQ09OUy5SRU1PVkV9XG4gICAgICAgICAgb25DbGljaz17b25BYm9ydGVkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInByaW1hcnlcIiBsYWJlbD17Y29uZmlybUJ1dHRvbkxhYmVsfSBkaXNhYmxlZD17Y29uZmlybUJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e2Fib3J0QnV0dG9uTGFiZWx9IGRpc2FibGVkPXthYm9ydEJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkFib3J0ZWR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1JlYWN0TW9kYWw+XG4gICk7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGV4cGFuZGVkOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVNb2RhbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TW9kYWxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxuICAgIGV4cGFuZEJ1dHRvbkxhYmVsOiBfXygnU2hvdyBNb3JlLi4uJyksXG4gICAgaGlkZUJ1dHRvbkxhYmVsOiBfXygnU2hvdyBMZXNzJyksXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1vZGFsUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICB7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IDxkaXY+e3RoaXMucHJvcHMuZXh0cmFDb250ZW50fTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwicHJpbWFyeVwiIGxhYmVsPXt0aGlzLnByb3BzLmNvbmZpcm1CdXR0b25MYWJlbH0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcbiAgICAgICAgICAgIGxhYmVsPXshdGhpcy5zdGF0ZS5leHBhbmRlZCA/IHRoaXMucHJvcHMuZXhwYW5kQnV0dG9uTGFiZWwgOiB0aGlzLnByb3BzLmhpZGVCdXR0b25MYWJlbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQUdBO0FBbkJBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUF0Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQXVDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalFileTimeout/index.js":
/*!*********************************************!*\
  !*** ../ui/modal/modalFileTimeout/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalFileTimeout/view.jsx\");\n\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    metadata: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectMetadataForUri\"])(props.uri)(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_2__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlVGltZW91dC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpbGVUaW1lb3V0L2luZGV4LmpzPzk3MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IG1ha2VTZWxlY3RNZXRhZGF0YUZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jbGFpbXMnO1xuaW1wb3J0IHsgZG9IaWRlTW9kYWwgfSBmcm9tICdyZWR1eC9hY3Rpb25zL2FwcCc7XG5pbXBvcnQgTW9kYWxGaWxlVGltZW91dCBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICBtZXRhZGF0YTogbWFrZVNlbGVjdE1ldGFkYXRhRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxufSk7XG5cbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGNsb3NlTW9kYWw6ICgpID0+IGRpc3BhdGNoKGRvSGlkZU1vZGFsKCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShNb2RhbEZpbGVUaW1lb3V0KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../ui/modal/modalFileTimeout/index.js\n");

/***/ }),

/***/ "../ui/modal/modalFileTimeout/view.jsx":
/*!*********************************************!*\
  !*** ../ui/modal/modalFileTimeout/view.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\nvar ModalFileTimeout = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalFileTimeout, _React$PureComponent);\n\n  function ModalFileTimeout() {\n    _classCallCheck(this, ModalFileTimeout);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFileTimeout).apply(this, arguments));\n  }\n\n  _createClass(ModalFileTimeout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          uri = _this$props.uri,\n          title = _this$props.metadata.title,\n          closeModal = _this$props.closeModal;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        isOpen: true,\n        title: __('Unable to download'),\n        contentLabel: __('Download failed'),\n        onConfirmed: closeModal\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        className: \"error-modal__error-list\"\n      }, __('LBRY was unable to download the stream'), \":\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, title ? \"\\\"\".concat(title, \"\\\"\") : uri))));\n    }\n  }]);\n\n  return ModalFileTimeout;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalFileTimeout);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaWxlVGltZW91dC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpbGVUaW1lb3V0L3ZpZXcuanN4P2U3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdXJpOiBzdHJpbmcsXG4gIG1ldGFkYXRhOiBTdHJlYW1NZXRhZGF0YSxcbiAgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCxcbn07XG5cbmNsYXNzIE1vZGFsRmlsZVRpbWVvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB1cmksXG4gICAgICBtZXRhZGF0YTogeyB0aXRsZSB9LFxuICAgICAgY2xvc2VNb2RhbCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgaXNPcGVuIHRpdGxlPXtfXygnVW5hYmxlIHRvIGRvd25sb2FkJyl9IGNvbnRlbnRMYWJlbD17X18oJ0Rvd25sb2FkIGZhaWxlZCcpfSBvbkNvbmZpcm1lZD17Y2xvc2VNb2RhbH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1vZGFsX19lcnJvci1saXN0XCI+XG4gICAgICAgICAge19fKCdMQlJZIHdhcyB1bmFibGUgdG8gZG93bmxvYWQgdGhlIHN0cmVhbScpfTpcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGI+e3RpdGxlID8gYFwiJHt0aXRsZX1cImAgOiB1cml9PC9iPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3A+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxGaWxlVGltZW91dDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBOzs7O0FBbEJBO0FBQ0E7QUFvQkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../ui/modal/modalFileTimeout/view.jsx\n");

/***/ })

}]);