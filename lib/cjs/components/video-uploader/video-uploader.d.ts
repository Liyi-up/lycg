import React from 'react';
import type { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';
import { NativeProps } from '../../utils/native-props';
export declare type VideoUploaderProps = {
    /** 视频上传到服务器的接口 */
    uploadUrl: string;
    /** 视频的前缀 */
    imgPreUrl: string;
    /** 是否禁用上传按钮 */
    disableUpload?: boolean;
    /** 最多上传几个视频 */
    maxCount?: number;
    /** 是否展示删除按钮  */
    deletable?: boolean;
    accept?: string;
    value?: ImageUploadItem[];
    onChange?(files: ImageUploadItem[]): void;
} & NativeProps<'--cell-size'>;
export declare const VideoUploader: React.FC<VideoUploaderProps>;
