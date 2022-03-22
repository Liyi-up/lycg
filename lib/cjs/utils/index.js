"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;

/**
 *
 * @param func 目标函数
 * @param wait 延迟时间
 * @param immediate 是否立即执行
 * @returns
 */
function debounce(func, wait, immediate) {
  var timer;
  return function () {
    return function () {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      var context = this;
      var args = arguments;
      if (timer) clearTimeout(timer);

      if (immediate) {
        var callNow = !timer;
        timer = setTimeout(function () {
          timer = null;
        }, wait);
        if (callNow) func.apply(context, args);
      } else {
        timer = setTimeout(function () {
          func.apply(context, args);
        }, wait);
      }
    };
  };
}