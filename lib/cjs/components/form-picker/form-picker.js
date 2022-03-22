"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormPicker = void 0;

var _picker = _interopRequireDefault(require("antd-mobile/es/components/picker"));

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "ly-form-picker";

var FormPickerContent = function FormPickerContent(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-content"
  }, props.children, /*#__PURE__*/_react["default"].createElement(_antdMobileIcons.RightOutline, {
    className: classPrefix + "-icon",
    color: "var(--adm-color-weak)"
  }));
};

var FormPicker = function FormPicker(props) {
  var columns = props.columns,
      onChange = props.onChange,
      value = props.value,
      otherProps = (0, _tslib.__rest)(props, ["columns", "onChange", "value"]);

  var _useState = (0, _react.useState)(false),
      visible = _useState[0],
      setVisible = _useState[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix,
    onClick: function onClick() {
      return setVisible(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_picker["default"], Object.assign({}, otherProps, {
    value: value,
    visible: visible,
    columns: columns,
    onClose: function onClose() {
      return setVisible(false);
    },
    onConfirm: function onConfirm(item) {
      onChange === null || onChange === void 0 ? void 0 : onChange(item);
    }
  }), function (items) {
    if (items.every(function (item) {
      return item === null;
    })) {
      return /*#__PURE__*/_react["default"].createElement(FormPickerContent, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classPrefix + "-text"
      }, "\u8BF7\u9009\u62E9"));
    } else {
      return /*#__PURE__*/_react["default"].createElement(FormPickerContent, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: classPrefix + "-text"
      }, items.map(function (item) {
        return item === null || item === void 0 ? void 0 : item.label;
      })));
    }
  }));
};

exports.FormPicker = FormPicker;