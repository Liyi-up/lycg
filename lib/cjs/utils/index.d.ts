/**
 *
 * @param func 目标函数
 * @param wait 延迟时间
 * @param immediate 是否立即执行
 * @returns
 */
export declare function debounce(func: any, wait: number, immediate: boolean): (this: any) => (this: any, ...params: any[]) => void;
