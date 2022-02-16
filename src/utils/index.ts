/**
 * 立即执行：即多次触发事件，第一次会立即执行函数，之后在设定wait事件内触犯的事件无效，不会执行。
 * 非立即执行函数： 多次触发事件，只会在最后一次触发事件后等待设定的wait时间结束时执行一次。
 * @desc  函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
 * @param  func 需要执行的函数
 * @param  wait 延迟执行时间（毫秒）
 * @param  immediate---true 表立即执行，false 表非立即执行
 **/
export function debounce(func: any, wait: number, immediate: boolean) {
  let timer: NodeJS.Timeout | null;
  return function(this: any, ...params: any[]) {
    const context = this;
    const args: {
      // 类数组注解
      [index: number]: any;
      length: number;
      callee: Function;
    } = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
  };
}