import React from 'react';
import { NativeProps } from '../../utils/props';
export declare type BackToTopProps = {
    /** 在页面高度为多少时展示返回顶部 */
    height?: number;
    /** 滚动超时时间 */
    time?: number;
    /** 滚动的容器 */
    scrollRef?: React.MutableRefObject<HTMLElement | null>;
    /** 文案的文字 */
    text?: string;
} & NativeProps<'--font-size'>;
export declare const BackToTop: React.FC<BackToTopProps>;
