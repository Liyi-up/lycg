import React from 'react';
export declare type CompProps = {
  children: React.ReactNode;
  /**
   * 海报大小
   */
  size?: {
    width?: number;
    height?: number;
  };
  /**
   * 圆角
   */
  radius?: number;
  /**
   * 海报背景色
   */
  backgroundColor?: string;
};
export interface CompRefProps {
  /**
   * 生成海报
   */
  generate: () => HTMLImageElement;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<
  CompProps & React.RefAttributes<CompRefProps>
>>;
export default _default;
