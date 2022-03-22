import React from 'react';
export declare type CompProps = {
    /**
     * 海报大小
     */
    size?: {
        width?: number;
        height?: number;
    };
    /**
     * 海报背景色
     */
    backgroundColor?: string;
    /**
     * 二维码扫码内容
     */
    qrCodeValue?: string;
    /**
     * 文字颜色
     */
    textColor?: string;
    /**
     * 文字样式
     */
    textStyle?: string;
    /**
     * 文字内容1
     */
    text1?: string;
    /**
     * 文字内容2
     */
    text2?: string;
    /**
     * 图片路径
     */
    imageUrl?: string;
};
export interface CompRefProps {
    /**
     * 生成海报
     */
    generate: () => string;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<CompProps & React.RefAttributes<CompRefProps>>>;
export default _default;
