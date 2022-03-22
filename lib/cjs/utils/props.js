"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeProps = mergeProps;
exports.withNativeProps = withNativeProps;

var _assign = _interopRequireDefault(require("lodash/assign"));

var _assignWith = _interopRequireDefault(require("lodash/assignWith"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable @typescript-eslint/no-explicit-any */
function mergeProps() {
  function customizer(objValue, srcValue) {
    return (0, _isUndefined["default"])(srcValue) ? objValue : srcValue;
  }

  var ret = (0, _assign["default"])({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    ret = (0, _assignWith["default"])(ret, i < 0 || arguments.length <= i ? undefined : arguments[i], customizer);
  }

  return ret;
}
/**
 * 克隆一个 ReactElement 并且添加 className 和 style
 */


function withNativeProps(props, element) {
  var p = Object.assign({}, element.props);

  if (props.className) {
    p.className = (element.props.className && element.props.className) + " " + props.className;
  }

  if (props.style) {
    p.style = Object.assign(Object.assign({}, p.style), props.style);
  }

  for (var key in props) {
    // eslint-disable-next-line no-prototype-builtins
    if (!props.hasOwnProperty(key)) continue;

    if (key.startsWith('data-') || key.startsWith('aria-')) {
      p[key] = props[key];
    }
  }

  console.log(p);
  return /*#__PURE__*/_react["default"].cloneElement(element, p);
}