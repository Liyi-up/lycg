/**
 *
 * @param func 目标函数
 * @param wait 延迟时间
 * @param immediate 是否立即执行
 * @returns
 */
export function debounce(func: any, wait: number, immediate: boolean) {
  let timer: NodeJS.Timeout | null;
  return function(this: any) {
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
  };
}
