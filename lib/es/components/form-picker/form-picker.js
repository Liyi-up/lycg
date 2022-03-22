import _Picker from "antd-mobile/es/components/picker";
import { __rest } from "tslib";
import React, { useState } from 'react';
import { RightOutline } from 'antd-mobile-icons';
var classPrefix = "ly-form-picker";

var FormPickerContent = function FormPickerContent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-content"
  }, props.children, /*#__PURE__*/React.createElement(RightOutline, {
    className: classPrefix + "-icon",
    color: "var(--adm-color-weak)"
  }));
};

export var FormPicker = function FormPicker(props) {
  var columns = props.columns,
      onChange = props.onChange,
      value = props.value,
      otherProps = __rest(props, ["columns", "onChange", "value"]);

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  return /*#__PURE__*/React.createElement("div", {
    className: classPrefix,
    onClick: function onClick() {
      return setVisible(true);
    }
  }, /*#__PURE__*/React.createElement(_Picker, Object.assign({}, otherProps, {
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
      return /*#__PURE__*/React.createElement(FormPickerContent, null, /*#__PURE__*/React.createElement("div", {
        className: classPrefix + "-text"
      }, "\u8BF7\u9009\u62E9"));
    } else {
      return /*#__PURE__*/React.createElement(FormPickerContent, null, /*#__PURE__*/React.createElement("div", {
        className: classPrefix + "-text"
      }, items.map(function (item) {
        return item === null || item === void 0 ? void 0 : item.label;
      })));
    }
  }));
};