(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appViewer"],{

/***/ "../ui/component/viewers/appViewer/index.js":
/*!**************************************************!*\
  !*** ../ui/component/viewers/appViewer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/selectors/claims */ \"../ui/redux/selectors/claims.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"../ui/component/viewers/appViewer/view.jsx\");\n\n\n\n\nvar select = function select(state, props) {\n  return {\n    claim: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectClaimForUri\"])(props.uri)(state),\n    contentType: Object(redux_selectors_claims__WEBPACK_IMPORTED_MODULE_1__[\"makeSelectContentTypeForUri\"])(props.uri)(state)\n  };\n};\n\nvar perform = function perform(dispatch) {\n  return {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(select, perform)(_view__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3ZpZXdlcnMvYXBwVmlld2VyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC92aWV3ZXJzL2FwcFZpZXdlci9pbmRleC5qcz9iNDBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBtYWtlU2VsZWN0Q2xhaW1Gb3JVcmksIG1ha2VTZWxlY3RDb250ZW50VHlwZUZvclVyaSB9IGZyb20gJ3JlZHV4L3NlbGVjdG9ycy9jbGFpbXMnO1xuaW1wb3J0IEFwcFZpZXdlciBmcm9tICcuL3ZpZXcnO1xuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGUsIHByb3BzKSA9PiAoe1xuICBjbGFpbTogbWFrZVNlbGVjdENsYWltRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxuICBjb250ZW50VHlwZTogbWFrZVNlbGVjdENvbnRlbnRUeXBlRm9yVXJpKHByb3BzLnVyaSkoc3RhdGUpLFxufSk7XG5cbmNvbnN0IHBlcmZvcm0gPSAoZGlzcGF0Y2gpID0+ICh7fSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc2VsZWN0LCBwZXJmb3JtKShBcHBWaWV3ZXIpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/viewers/appViewer/index.js\n");

/***/ }),

/***/ "../ui/component/viewers/appViewer/view.jsx":
/*!**************************************************!*\
  !*** ../ui/component/viewers/appViewer/view.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var component_yrbl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! component/yrbl */ \"../ui/component/yrbl/index.jsx\");\n\n // import LoadingScreen from 'component/common/loading-screen';\n// const SANDBOX_TYPES = ['application/x-lbry', 'application/x-ext-lbry'];\n// This server exists in src/platforms/electron/startSandBox.js\n// const SANDBOX_SET_BASE_URL = 'http://localhost:5278/set/';\n// const SANDBOX_CONTENT_BASE_URL = 'http://localhost:5278';\n\nfunction AppViewer(props) {\n  // const { claim, contentType } = props;\n  // const [loading, setLoading] = useState(true);\n  // const [appUrl, setAppUrl] = useState(false);\n  // const outpoint = `${claim.txid}:${claim.nout}`;\n  // useEffect(() => {\n  //   if (SANDBOX_TYPES.indexOf(contentType) > -1) {\n  //     fetch(`${SANDBOX_SET_BASE_URL}${outpoint}`)\n  //       .then(res => res.text())\n  //       .then(url => {\n  //         const appUrl = `${SANDBOX_CONTENT_BASE_URL}${url}`;\n  //         setAppUrl(appUrl);\n  //         setLoading(false);\n  //       })\n  //       .catch(err => {\n  //         setLoading(false);\n  //       });\n  //   } else {\n  //     setLoading(false);\n  //   }\n  // }, [outpoint, contentType, setAppUrl, setLoading]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"content__cover--none\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(component_yrbl__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: __('Sorry'),\n    subtitle: __('Games and apps are currently disabled due to potential security concerns.')\n  })); // return (\n  //   <div className=\"file-viewer\">\n  //     {!appUrl && (\n  //       <LoadingScreen\n  //         status={loading ? __('Almost there') : __('Unable to view this file in the app')}\n  //         spinner={loading}\n  //       />\n  //     )}\n  //      {appUrl && (\n  //       <webview\n  //         title=\"\"\n  //         sandbox=\"allow-scripts allow-forms allow-pointer-lock\"\n  //         src={appUrl}\n  //         autosize=\"on\"\n  //         style={{ border: 0, width: '100%', height: '100%' }}\n  //         useragent=\"Mozilla/5.0 AppleWebKit/537 Chrome/60 Safari/537\"\n  //         enableremotemodule=\"false\"\n  //         webpreferences=\"sandbox=true,contextIsolation=true,webviewTag=false,enableRemoteModule=false,devTools=false\"\n  //       />\n  //     )}\n  //   </div>\n  // );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppViewer);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! i18n.js */ \"../ui/i18n.js\")[\"__\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vdWkvY29tcG9uZW50L3ZpZXdlcnMvYXBwVmlld2VyL3ZpZXcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3VpL2NvbXBvbmVudC92aWV3ZXJzL2FwcFZpZXdlci92aWV3LmpzeD82NDNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlyYmwgZnJvbSAnY29tcG9uZW50L3lyYmwnO1xuLy8gaW1wb3J0IExvYWRpbmdTY3JlZW4gZnJvbSAnY29tcG9uZW50L2NvbW1vbi9sb2FkaW5nLXNjcmVlbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNvdXJjZTogc3RyaW5nLFxuICBjbGFpbTogU3RyZWFtQ2xhaW0sXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmcsXG59O1xuXG4vLyBjb25zdCBTQU5EQk9YX1RZUEVTID0gWydhcHBsaWNhdGlvbi94LWxicnknLCAnYXBwbGljYXRpb24veC1leHQtbGJyeSddO1xuXG4vLyBUaGlzIHNlcnZlciBleGlzdHMgaW4gc3JjL3BsYXRmb3Jtcy9lbGVjdHJvbi9zdGFydFNhbmRCb3guanNcbi8vIGNvbnN0IFNBTkRCT1hfU0VUX0JBU0VfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTI3OC9zZXQvJztcbi8vIGNvbnN0IFNBTkRCT1hfQ09OVEVOVF9CQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjUyNzgnO1xuXG5mdW5jdGlvbiBBcHBWaWV3ZXIocHJvcHM6IFByb3BzKSB7XG4gIC8vIGNvbnN0IHsgY2xhaW0sIGNvbnRlbnRUeXBlIH0gPSBwcm9wcztcbiAgLy8gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIGNvbnN0IFthcHBVcmwsIHNldEFwcFVybF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3Qgb3V0cG9pbnQgPSBgJHtjbGFpbS50eGlkfToke2NsYWltLm5vdXR9YDtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoU0FOREJPWF9UWVBFUy5pbmRleE9mKGNvbnRlbnRUeXBlKSA+IC0xKSB7XG4gIC8vICAgICBmZXRjaChgJHtTQU5EQk9YX1NFVF9CQVNFX1VSTH0ke291dHBvaW50fWApXG4gIC8vICAgICAgIC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuICAvLyAgICAgICAudGhlbih1cmwgPT4ge1xuICAvLyAgICAgICAgIGNvbnN0IGFwcFVybCA9IGAke1NBTkRCT1hfQ09OVEVOVF9CQVNFX1VSTH0ke3VybH1gO1xuICAvLyAgICAgICAgIHNldEFwcFVybChhcHBVcmwpO1xuICAvLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgICAgICB9KVxuICAvLyAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgLy8gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgICAgfSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAvLyAgIH1cbiAgLy8gfSwgW291dHBvaW50LCBjb250ZW50VHlwZSwgc2V0QXBwVXJsLCBzZXRMb2FkaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfX2NvdmVyLS1ub25lXCI+XG4gICAgICA8WXJibFxuICAgICAgICB0aXRsZT17X18oJ1NvcnJ5Jyl9XG4gICAgICAgIHN1YnRpdGxlPXtfXygnR2FtZXMgYW5kIGFwcHMgYXJlIGN1cnJlbnRseSBkaXNhYmxlZCBkdWUgdG8gcG90ZW50aWFsIHNlY3VyaXR5IGNvbmNlcm5zLicpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS12aWV3ZXJcIj5cbiAgLy8gICAgIHshYXBwVXJsICYmIChcbiAgLy8gICAgICAgPExvYWRpbmdTY3JlZW5cbiAgLy8gICAgICAgICBzdGF0dXM9e2xvYWRpbmcgPyBfXygnQWxtb3N0IHRoZXJlJykgOiBfXygnVW5hYmxlIHRvIHZpZXcgdGhpcyBmaWxlIGluIHRoZSBhcHAnKX1cbiAgLy8gICAgICAgICBzcGlubmVyPXtsb2FkaW5nfVxuICAvLyAgICAgICAvPlxuICAvLyAgICAgKX1cbiAgLy8gICAgICB7YXBwVXJsICYmIChcbiAgLy8gICAgICAgPHdlYnZpZXdcbiAgLy8gICAgICAgICB0aXRsZT1cIlwiXG4gIC8vICAgICAgICAgc2FuZGJveD1cImFsbG93LXNjcmlwdHMgYWxsb3ctZm9ybXMgYWxsb3ctcG9pbnRlci1sb2NrXCJcbiAgLy8gICAgICAgICBzcmM9e2FwcFVybH1cbiAgLy8gICAgICAgICBhdXRvc2l6ZT1cIm9uXCJcbiAgLy8gICAgICAgICBzdHlsZT17eyBib3JkZXI6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnIH19XG4gIC8vICAgICAgICAgdXNlcmFnZW50PVwiTW96aWxsYS81LjAgQXBwbGVXZWJLaXQvNTM3IENocm9tZS82MCBTYWZhcmkvNTM3XCJcbiAgLy8gICAgICAgICBlbmFibGVyZW1vdGVtb2R1bGU9XCJmYWxzZVwiXG4gIC8vICAgICAgICAgd2VicHJlZmVyZW5jZXM9XCJzYW5kYm94PXRydWUsY29udGV4dElzb2xhdGlvbj10cnVlLHdlYnZpZXdUYWc9ZmFsc2UsZW5hYmxlUmVtb3RlTW9kdWxlPWZhbHNlLGRldlRvb2xzPWZhbHNlXCJcbiAgLy8gICAgICAgLz5cbiAgLy8gICAgICl9XG4gIC8vICAgPC9kaXY+XG4gIC8vICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFZpZXdlcjtcbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../ui/component/viewers/appViewer/view.jsx\n");

/***/ })

}]);