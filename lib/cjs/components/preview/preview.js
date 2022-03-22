"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = void 0;

var _popup = _interopRequireDefault(require("antd-mobile/es/components/popup"));

var _result = _interopRequireDefault(require("antd-mobile/es/components/result"));

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _props = require("../../utils/props");

var _file = require("../../utils/file");

var _entry = require("react-pdf/dist/esm/entry.webpack");

require("react-pdf/dist/esm/Page/AnnotationLayer.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "ly-preview";
var defaultProps = {
  bodyStyle: {
    height: '100vh'
  }
};

var Preview = function Preview(p) {
  var props = (0, _props.mergeProps)(defaultProps, p);

  var _useState = (0, _react.useState)(0),
      numPages = _useState[0],
      setNumPages = _useState[1];

  var title = props.title,
      show = props.show,
      bodyStyle = props.bodyStyle,
      url = props.url,
      onClose = props.onClose;

  if ((0, _file.isOffice)(url)) {
    window.location.href = "https://view.officeapps.live.com/op/view.aspx?src=" + url;
  }

  var pdfEle = /*#__PURE__*/_react["default"].createElement(_entry.Document, {
    file: url,
    onLoadSuccess: function onLoadSuccess(_ref) {
      var numPages = _ref.numPages;
      return setNumPages(numPages);
    }
  }, Array.from(new Array(numPages), function (_el, index) {
    return /*#__PURE__*/_react["default"].createElement(_entry.Page, {
      width: window.innerWidth,
      key: "page_" + (index + 1),
      pageNumber: index + 1
    });
  }));

  var otherEle = /*#__PURE__*/_react["default"].createElement(_result["default"], {
    status: "info",
    title: "\u6253\u5F00\u9519\u8BEF",
    description: "\u6682\u4E0D\u652F\u6301\u8BE5\u6587\u4EF6\u9884\u89C8"
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "" + classPrefix
  }, /*#__PURE__*/_react["default"].createElement(_popup["default"], {
    visible: show,
    bodyStyle: bodyStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-header-title"
  }, title || url), /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-header-close",
    onClick: function onClick() {
      return onClose === null || onClose === void 0 ? void 0 : onClose(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_antdMobileIcons.CloseOutline, {
    fontSize: 24
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-content"
  }, (0, _file.isPdf)(url) ? pdfEle : otherEle)));
};

exports.Preview = Preview;