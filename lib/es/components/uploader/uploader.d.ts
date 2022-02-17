import React from 'react';
import {
  ImageUploadItem,
  ImageUploaderProps,
} from 'antd-mobile/es/components/image-uploader';
declare type ExtraProps = {
  /** 图片上传到服务器的接口 */
  uploadUrl: string;
  /** 图片 url 前缀 */
  imgPreUrl: string;
  /** 添加的水印文字 */
  watermark?: string;
  /** 压缩图片的质量 */
  quality?: number;
  value?: ImageUploadItem[];
  onChange?(files: ImageUploadItem[]): void;
};
export declare type UploaderProps = Omit<ImageUploaderProps, 'upload'> &
  ExtraProps;
export declare const Uploader: React.FC<UploaderProps>;
export {};
