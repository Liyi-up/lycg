"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _video = _interopRequireDefault(require("../../assets/video.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "ly-video-uploader";

var VideoUploaderItem = function VideoUploaderItem(props) {
  var deletable = props.deletable,
      onDelete = props.onDelete,
      onClick = props.onClick;

  var handleDele = function handleDele(e) {
    e.stopPropagation();
    onDelete();
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-cell",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-cell-main"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _video["default"],
    alt: "\u89C6\u9891"
  })), deletable && /*#__PURE__*/_react["default"].createElement("span", {
    className: classPrefix + "-cell-delete",
    onClick: handleDele
  }, /*#__PURE__*/_react["default"].createElement(_antdMobileIcons.CloseOutline, {
    className: classPrefix + "-cell-delete-icon"
  })));
};

var _default = VideoUploaderItem;
exports["default"] = _default;