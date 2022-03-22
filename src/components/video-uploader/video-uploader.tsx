import React, { useEffect, useState } from 'react';
import { Space } from 'antd-mobile';
import { AddOutline } from 'antd-mobile-icons';
import type { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';
import { mergeProps } from '../../utils/props';
import { uploadToServer } from '../../utils/upload';
import { NativeProps } from '../../utils/native-props';
import VideoUploaderItem from './video-uploader-item';
import videoPlayerDialog from './video-player-dialog';

const classPrefix = `cv-video-uploader`;

export type VideoUploaderProps = {
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

const defaultProps = {
  maxCount: 0,
  value: [],
  accept: 'video/*',
  disableUpload: false,
  deletable: true,
};

export const VideoUploader: React.FC<VideoUploaderProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const { uploadUrl, imgPreUrl, value, maxCount, onChange, accept, disableUpload, children, deletable } = props;
  const [list, setList] = useState<ImageUploadItem[]>([]);

  const showUpload = maxCount === 0 ? true : maxCount > value.length;

  useEffect(() => {
    const initList = value.map(({ url }) => {
      return {
        url: `${imgPreUrl}${url}`,
      };
    });
    setList(initList);
  }, [value, imgPreUrl]);

  /**
   * 触发上传文件
   */
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const { files } = e.target;
    if (!files || files.length === 0) {
      return;
    }

    const onLineFile = await uploadToServer(files[0], uploadUrl, imgPreUrl);

    const newList = list;
    newList.push({ url: onLineFile });

    const fileList: ImageUploadItem[] = newList.map(({ url }) => {
      return {
        url: url.replace(imgPreUrl, ''),
      };
    });
    onChange?.(fileList);
    // 清除 input 的值，否则两次选择相同文件不会触发 onChange 事件
    e.target.value = '';
  };

  const handleDele = (index: number) => {
    const newList = list;
    newList.splice(index, index + 1);
    onChange?.(newList);
  };

  return (
    <div className={`${classPrefix}`}>
      <Space className={`${classPrefix}-space`} wrap>
        {list.map((fileItem, index) => (
          <VideoUploaderItem
            deletable={deletable}
            onDelete={() => handleDele(index)}
            onClick={() => {
              videoPlayerDialog({
                url: fileItem.url,
              });
            }}
            key={index}
          />
        ))}

        {showUpload && (
          <div className={`${classPrefix}-upload-button-wrap`}>
            {children || (
              <span className={`${classPrefix}-cell ${classPrefix}-upload-button`} role="button">
                <span className={`${classPrefix}-upload-button-icon`}>
                  <AddOutline />
                </span>
              </span>
            )}
            {!disableUpload && (
              <input accept={accept} type="file" className={`${classPrefix}-input`} onChange={handleInputChange} />
            )}
          </div>
        )}
      </Space>
    </div>
  );
};
