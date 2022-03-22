import type { CSSProperties, ReactElement } from 'react';
import React from 'react';
/**
 * 合并默认 props 和传入的 props
 */
export declare function mergeProps<A, B>(a: A, b: B): B & A;
export declare function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
/**
 * 为组件 Props 添加 className 和 style
 */
export interface NativeProps<S extends string = never> {
    className?: string;
    style?: CSSProperties & Partial<Record<S, string>>;
}
/**
 * 克隆一个 ReactElement 并且添加 className 和 style
 */
export declare function withNativeProps<P extends NativeProps>(props: P, element: ReactElement): ReactElement<any, string | React.JSXElementConstructor<any>>;
