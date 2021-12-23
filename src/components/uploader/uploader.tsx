import React, { useEffect, useState } from 'react';
import { ImageUploader } from 'antd-mobile';
import {
  ImageUploadItem,
  ImageUploaderProps,
} from 'antd-mobile/es/components/image-uploader';
import { compress } from '../../utils/compressor';
import { mergeProps } from '../../utils/props';
import { uploadToServer } from '../../utils/upload';

const classPrefix = `ly-uploader`;

type ExtraProps = {
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

export type UploaderProps = Omit<ImageUploaderProps, 'upload'> & ExtraProps;

const defaultProps = {
  value: [],
  watermark: '',
  quality: 0.8,
};

export const Uploader: React.FC<UploaderProps> = p => {
  const props = mergeProps(defaultProps, p);
  const {
    uploadUrl,
    imgPreUrl,
    value,
    watermark,
    quality,
    onChange,
    ...otherProps
  } = props;
  const [imageValue, setImageValue] = useState<ImageUploadItem[]>([]);

  useEffect(() => {
    const imageValue = value.map(({ url }) => {
      return {
        url: `${imgPreUrl}${url}`,
      };
    });
    setImageValue(imageValue);
  }, [value, imgPreUrl]);

  const handleUpload = async (file: File) => {
    const compressRes = await compress(file, watermark, quality);
    const url = await uploadToServer(compressRes, uploadUrl, imgPreUrl);
    return {
      url,
    };
  };

  const onImageChange = (files: ImageUploadItem[]) => {
    const fileList: ImageUploadItem[] = files.map(({ url }) => {
      return {
        url: url.replace(imgPreUrl, ''),
      };
    });
    onChange?.(fileList);
  };

  return (
    <div className={`${classPrefix}`}>
      <ImageUploader
        {...otherProps}
        onChange={onImageChange}
        value={imageValue}
        upload={handleUpload}
      >
        {props.children}
      </ImageUploader>
    </div>
  );
};
