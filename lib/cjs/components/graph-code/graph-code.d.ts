import React from 'react';
export interface CompProps {
    /**
     * 高度
     */
    height?: number;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 背景颜色
     */
    bgColor?: string;
    /**
     * 字符个数
     */
    charNum?: number;
    /**
     * 字体大小
     */
    fontSize?: number;
    /**
     * 改变验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）
     * @memberof ICaptchaProps
     */
    onChange?: (captcha: string) => void;
    /**
     * 样式名
     */
    className?: string;
}
export interface CompRefProps {
    /**
     * 主动刷新验证码接口
     */
    refresh: () => void;
}
export declare const GraphCode: React.ForwardRefExoticComponent<CompProps & React.RefAttributes<CompRefProps>>;
