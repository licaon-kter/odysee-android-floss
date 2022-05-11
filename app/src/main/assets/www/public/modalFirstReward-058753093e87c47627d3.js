(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modalFirstReward"],{

/***/ "../ui/modal/modal.jsx":
/*!*****************************!*\
  !*** ../ui/modal/modal.jsx ***!
  \*****************************/
/*! exports provided: Modal, ExpandableModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return Modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableModal\", function() { return ExpandableModal; });\n/* harmony import */ var constants_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/icons */ \"../ui/constants/icons.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"../node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! effects/use-screensize */ \"../ui/effects/use-screensize.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n} // These should probably just be combined into one modal component\n\n\n\n\n\n\n\n\nfunction Modal(props) {\n  var children = props.children,\n      _props$type = props.type,\n      type = _props$type === void 0 ? 'alert' : _props$type,\n      _props$confirmButtonL = props.confirmButtonLabel,\n      confirmButtonLabel = _props$confirmButtonL === void 0 ? __('OK') : _props$confirmButtonL,\n      _props$confirmButtonD = props.confirmButtonDisabled,\n      confirmButtonDisabled = _props$confirmButtonD === void 0 ? false : _props$confirmButtonD,\n      onConfirmed = props.onConfirmed,\n      _props$abortButtonLab = props.abortButtonLabel,\n      abortButtonLabel = _props$abortButtonLab === void 0 ? __('Cancel') : _props$abortButtonLab,\n      _props$abortButtonDis = props.abortButtonDisabled,\n      abortButtonDisabled = _props$abortButtonDis === void 0 ? false : _props$abortButtonDis,\n      onAborted = props.onAborted,\n      className = props.className,\n      title = props.title,\n      modalProps = _objectWithoutProperties(props, [\"children\", \"type\", \"confirmButtonLabel\", \"confirmButtonDisabled\", \"onConfirmed\", \"abortButtonLabel\", \"abortButtonDisabled\", \"onAborted\", \"className\", \"title\"]);\n\n  var isMobile = Object(effects_use_screensize__WEBPACK_IMPORTED_MODULE_5__[\"useIsMobile\"])();\n  return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, modalProps, {\n    onRequestClose: onAborted || onConfirmed,\n    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('modal', className, {\n      'modal--card-internal': type === 'card'\n    }),\n    overlayClassName: \"modal-overlay\"\n  }), title && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"h1\", {\n    className: \"card__title card__title--deprecated\"\n  }, title), type === 'card' && react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    iconSize: isMobile ? 24 : undefined,\n    button: \"close\",\n    \"aria-label\": __('Close'),\n    icon: constants_icons__WEBPACK_IMPORTED_MODULE_0__[\"REMOVE\"],\n    onClick: onAborted\n  }), children, type === 'custom' || type === 'card' ? null : // custom modals define their own buttons\n  react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n    className: \"card__actions\"\n  }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"primary\",\n    label: confirmButtonLabel,\n    disabled: confirmButtonDisabled,\n    onClick: onConfirmed\n  }), type === 'confirm' ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    button: \"link\",\n    label: abortButtonLabel,\n    disabled: abortButtonDisabled,\n    onClick: onAborted\n  }) : null));\n}\nvar ExpandableModal = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ExpandableModal, _React$PureComponent);\n\n  function ExpandableModal(props) {\n    var _this;\n\n    _classCallCheck(this, ExpandableModal);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableModal).call(this, props));\n    _this.state = {\n      expanded: false\n    };\n    return _this;\n  }\n\n  _createClass(ExpandableModal, [{\n    key: \"toggleExpanded\",\n    value: function toggleExpanded() {\n      this.setState({\n        expanded: !this.state.expanded\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](Modal, _extends({\n        type: \"custom\"\n      }, this.props), this.props.children, this.state.expanded ? react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", null, this.props.extraContent) : null, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](\"div\", {\n        className: \"card__actions\"\n      }, react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"primary\",\n        label: this.props.confirmButtonLabel,\n        onClick: this.props.onConfirmed\n      }), react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"](component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        button: \"link\",\n        label: !this.state.expanded ? this.props.expandButtonLabel : this.props.hideButtonLabel,\n        onClick: function onClick() {\n          _this2.toggleExpanded();\n        }\n      })));\n    }\n  }]);\n\n  return ExpandableModal;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"PureComponent\"]);\n\n_defineProperty(ExpandableModal, \"defaultProps\", {\n  confirmButtonLabel: __('OK'),\n  expandButtonLabel: __('Show More...'),\n  hideButtonLabel: __('Show Less')\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL21vZGFsL21vZGFsLmpzeD9mMDY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vLyBUaGVzZSBzaG91bGQgcHJvYmFibHkganVzdCBiZSBjb21iaW5lZCBpbnRvIG9uZSBtb2RhbCBjb21wb25lbnRcbmltcG9ydCAqIGFzIElDT05TIGZyb20gJ2NvbnN0YW50cy9pY29ucyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB1c2VJc01vYmlsZSB9IGZyb20gJ2VmZmVjdHMvdXNlLXNjcmVlbnNpemUnO1xuXG50eXBlIE1vZGFsUHJvcHMgPSB7XG4gIHR5cGU/OiBzdHJpbmcsXG4gIG92ZXJsYXk/OiBib29sZWFuLFxuICBjb25maXJtQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGFib3J0QnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGNvbmZpcm1CdXR0b25EaXNhYmxlZD86IGJvb2xlYW4sXG4gIGFib3J0QnV0dG9uRGlzYWJsZWQ/OiBib29sZWFuLFxuICBvbkNvbmZpcm1lZD86IChhbnkpID0+IGFueSxcbiAgb25BYm9ydGVkPzogKGFueSkgPT4gYW55LFxuICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gIGNoaWxkcmVuPzogUmVhY3QuTm9kZSxcbiAgZXh0cmFDb250ZW50PzogUmVhY3QuTm9kZSxcbiAgZXhwYW5kQnV0dG9uTGFiZWw/OiBzdHJpbmcsXG4gIGhpZGVCdXR0b25MYWJlbD86IHN0cmluZyxcbiAgdGl0bGU/OiBzdHJpbmcgfCBSZWFjdC5Ob2RlLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHByb3BzOiBNb2RhbFByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICB0eXBlID0gJ2FsZXJ0JyxcbiAgICBjb25maXJtQnV0dG9uTGFiZWwgPSBfXygnT0snKSxcbiAgICBjb25maXJtQnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkNvbmZpcm1lZCxcbiAgICBhYm9ydEJ1dHRvbkxhYmVsID0gX18oJ0NhbmNlbCcpLFxuICAgIGFib3J0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBvbkFib3J0ZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHRpdGxlLFxuICAgIC4uLm1vZGFsUHJvcHNcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlSXNNb2JpbGUoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1vZGFsXG4gICAgICB7Li4ubW9kYWxQcm9wc31cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkFib3J0ZWQgfHwgb25Db25maXJtZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21vZGFsJywgY2xhc3NOYW1lLCB7XG4gICAgICAgICdtb2RhbC0tY2FyZC1pbnRlcm5hbCc6IHR5cGUgPT09ICdjYXJkJyxcbiAgICAgIH0pfVxuICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIlxuICAgID5cbiAgICAgIHt0aXRsZSAmJiA8aDEgY2xhc3NOYW1lPVwiY2FyZF9fdGl0bGUgY2FyZF9fdGl0bGUtLWRlcHJlY2F0ZWRcIj57dGl0bGV9PC9oMT59XG4gICAgICB7dHlwZSA9PT0gJ2NhcmQnICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb25TaXplPXtpc01vYmlsZSA/IDI0IDogdW5kZWZpbmVkfVxuICAgICAgICAgIGJ1dHRvbj1cImNsb3NlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPXtfXygnQ2xvc2UnKX1cbiAgICAgICAgICBpY29uPXtJQ09OUy5SRU1PVkV9XG4gICAgICAgICAgb25DbGljaz17b25BYm9ydGVkfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHt0eXBlID09PSAnY3VzdG9tJyB8fCB0eXBlID09PSAnY2FyZCcgPyBudWxsIDogKCAvLyBjdXN0b20gbW9kYWxzIGRlZmluZSB0aGVpciBvd24gYnV0dG9uc1xuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2FjdGlvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uIGJ1dHRvbj1cInByaW1hcnlcIiBsYWJlbD17Y29uZmlybUJ1dHRvbkxhYmVsfSBkaXNhYmxlZD17Y29uZmlybUJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICB7dHlwZSA9PT0gJ2NvbmZpcm0nID8gKFxuICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249XCJsaW5rXCIgbGFiZWw9e2Fib3J0QnV0dG9uTGFiZWx9IGRpc2FibGVkPXthYm9ydEJ1dHRvbkRpc2FibGVkfSBvbkNsaWNrPXtvbkFib3J0ZWR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L1JlYWN0TW9kYWw+XG4gICk7XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGV4cGFuZGVkOiBib29sZWFuLFxufTtcblxuZXhwb3J0IGNsYXNzIEV4cGFuZGFibGVNb2RhbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8TW9kYWxQcm9wcywgU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IF9fKCdPSycpLFxuICAgIGV4cGFuZEJ1dHRvbkxhYmVsOiBfXygnU2hvdyBNb3JlLi4uJyksXG4gICAgaGlkZUJ1dHRvbkxhYmVsOiBfXygnU2hvdyBMZXNzJyksXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IE1vZGFsUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICB0b2dnbGVFeHBhbmRlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHR5cGU9XCJjdXN0b21cIiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICB7dGhpcy5zdGF0ZS5leHBhbmRlZCA/IDxkaXY+e3RoaXMucHJvcHMuZXh0cmFDb250ZW50fTwvZGl2PiA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYWN0aW9uc1wiPlxuICAgICAgICAgIDxCdXR0b24gYnV0dG9uPVwicHJpbWFyeVwiIGxhYmVsPXt0aGlzLnByb3BzLmNvbmZpcm1CdXR0b25MYWJlbH0gb25DbGljaz17dGhpcy5wcm9wcy5vbkNvbmZpcm1lZH0gLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b249XCJsaW5rXCJcbiAgICAgICAgICAgIGxhYmVsPXshdGhpcy5zdGF0ZS5leHBhbmRlZCA/IHRoaXMucHJvcHMuZXhwYW5kQnV0dG9uTGFiZWwgOiB0aGlzLnByb3BzLmhpZGVCdXR0b25MYWJlbH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy50b2dnbGVFeHBhbmRlZCgpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFOQTtBQVFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBTUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBZ0JBO0FBQ0E7QUFEQTtBQUdBO0FBbkJBO0FBQUE7QUFBQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBVUE7QUF0Q0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQXVDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modal.jsx\n");

/***/ }),

/***/ "../ui/modal/modalFirstReward/index.js":
/*!*********************************************!*\
  !*** ../ui/modal/modalFirstReward/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux/selectors/rewards */ \"../ui/redux/selectors/rewards.js\");\n/* harmony import */ var rewards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rewards */ \"../ui/rewards.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/app */ \"../ui/redux/actions/app.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view */ \"../ui/modal/modalFirstReward/view.jsx\");\n\n\n\n\n\n\nvar select = function select(state) {\n  var selectReward = Object(redux_selectors_rewards__WEBPACK_IMPORTED_MODULE_0__[\"makeSelectRewardByType\"])();\n  return {\n    reward: selectReward(state, rewards__WEBPACK_IMPORTED_MODULE_1__[\"default\"].TYPE_NEW_USER)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {\n    closeModal: function closeModal() {\n      return dispatch(Object(redux_actions_app__WEBPACK_IMPORTED_MODULE_3__[\"doHideModal\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_4__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaXJzdFJld2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpcnN0UmV3YXJkL2luZGV4LmpzPzRmODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVNlbGVjdFJld2FyZEJ5VHlwZSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9yZXdhcmRzJztcbmltcG9ydCByZXdhcmRzIGZyb20gJ3Jld2FyZHMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGRvSGlkZU1vZGFsIH0gZnJvbSAncmVkdXgvYWN0aW9ucy9hcHAnO1xuaW1wb3J0IE1vZGFsRmlyc3RSZXdhcmQgZnJvbSAnLi92aWV3JztcblxuY29uc3Qgc2VsZWN0ID0gc3RhdGUgPT4ge1xuICBjb25zdCBzZWxlY3RSZXdhcmQgPSBtYWtlU2VsZWN0UmV3YXJkQnlUeXBlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZXdhcmQ6IHNlbGVjdFJld2FyZChzdGF0ZSwgcmV3YXJkcy5UWVBFX05FV19VU0VSKSxcbiAgfTtcbn07XG5cbmNvbnN0IHBlcmZvcm0gPSBkaXNwYXRjaCA9PiAoe1xuICBjbG9zZU1vZGFsOiAoKSA9PiBkaXNwYXRjaChkb0hpZGVNb2RhbCgpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHNlbGVjdCwgcGVyZm9ybSkoTW9kYWxGaXJzdFJld2FyZCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalFirstReward/index.js\n");

/***/ }),

/***/ "../ui/modal/modalFirstReward/view.jsx":
/*!*********************************************!*\
  !*** ../ui/modal/modalFirstReward/view.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modal/modal */ \"../ui/modal/modal.jsx\");\n/* harmony import */ var component_common_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component/common/card */ \"../ui/component/common/card.jsx\");\n/* harmony import */ var component_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! component/button */ \"../ui/component/button/index.js\");\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n\n\n\n\n\nvar ModalFirstReward = /*#__PURE__*/function (_React$PureComponent) {\n  _inherits(ModalFirstReward, _React$PureComponent);\n\n  function ModalFirstReward() {\n    _classCallCheck(this, ModalFirstReward);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ModalFirstReward).apply(this, arguments));\n  }\n\n  _createClass(ModalFirstReward, [{\n    key: \"render\",\n    value: function render() {\n      var closeModal = this.props.closeModal;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(modal_modal__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n        type: \"card\",\n        isOpen: true,\n        contentLabel: __('Your first reward')\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_common_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: __('Your first reward'),\n        subtitle: __('You just earned your first reward!'),\n        body: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __(\"This reward will show in your Wallet in the top right momentarily (if it hasn't already).\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('These Credits are used to compensate creators, to publish your own content, and to have say in how the network works.')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, __('No need to understand it all just yet! Try watching or publishing something next.'))),\n        actions: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          button: \"primary\",\n          onClick: closeModal,\n          label: __('You Got It Dude')\n        })\n      }));\n    }\n  }]);\n\n  return ModalFirstReward;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalFirstReward);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvbW9kYWwvbW9kYWxGaXJzdFJld2FyZC92aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi91aS9tb2RhbC9tb2RhbEZpcnN0UmV3YXJkL3ZpZXcuanN4PzlhNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ21vZGFsL21vZGFsJztcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudC9jb21tb24vY2FyZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudC9idXR0b24nO1xuXG50eXBlIFByb3BzID0ge1xuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkLFxufTtcblxuY2xhc3MgTW9kYWxGaXJzdFJld2FyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWwgdHlwZT1cImNhcmRcIiBpc09wZW4gY29udGVudExhYmVsPXtfXygnWW91ciBmaXJzdCByZXdhcmQnKX0+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgdGl0bGU9e19fKCdZb3VyIGZpcnN0IHJld2FyZCcpfVxuICAgICAgICAgIHN1YnRpdGxlPXtfXygnWW91IGp1c3QgZWFybmVkIHlvdXIgZmlyc3QgcmV3YXJkIScpfVxuICAgICAgICAgIGJvZHk9e1xuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8cD57X18oXCJUaGlzIHJld2FyZCB3aWxsIHNob3cgaW4geW91ciBXYWxsZXQgaW4gdGhlIHRvcCByaWdodCBtb21lbnRhcmlseSAoaWYgaXQgaGFzbid0IGFscmVhZHkpLlwiKX08L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtfXyhcbiAgICAgICAgICAgICAgICAgICdUaGVzZSBDcmVkaXRzIGFyZSB1c2VkIHRvIGNvbXBlbnNhdGUgY3JlYXRvcnMsIHRvIHB1Ymxpc2ggeW91ciBvd24gY29udGVudCwgYW5kIHRvIGhhdmUgc2F5IGluIGhvdyB0aGUgbmV0d29yayB3b3Jrcy4nXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD57X18oJ05vIG5lZWQgdG8gdW5kZXJzdGFuZCBpdCBhbGwganVzdCB5ZXQhIFRyeSB3YXRjaGluZyBvciBwdWJsaXNoaW5nIHNvbWV0aGluZyBuZXh0LicpfTwvcD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbnM9ezxCdXR0b24gYnV0dG9uPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9IGxhYmVsPXtfXygnWW91IEdvdCBJdCBEdWRlJyl9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsRmlyc3RSZXdhcmQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZEE7QUFrQkE7Ozs7QUF4QkE7QUFDQTtBQTBCQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/modal/modalFirstReward/view.jsx\n");

/***/ })

}]);