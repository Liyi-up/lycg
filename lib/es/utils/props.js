/* eslint-disable @typescript-eslint/no-explicit-any */
import assign from 'lodash/assign';
import assignWith from 'lodash/assignWith';
import isUndefined from 'lodash/isUndefined';
import React from 'react';
export function mergeProps() {
  function customizer(objValue, srcValue) {
    return isUndefined(srcValue) ? objValue : srcValue;
  }

  var ret = assign({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    ret = assignWith(ret, i < 0 || arguments.length <= i ? undefined : arguments[i], customizer);
  }

  return ret;
}
/**
 * 克隆一个 ReactElement 并且添加 className 和 style
 */

export function withNativeProps(props, element) {
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
  return /*#__PURE__*/React.cloneElement(element, p);
}