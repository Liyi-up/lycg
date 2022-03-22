import React from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import VideoSvg from '../../assets/video.svg';

const classPrefix = `ly-video-uploader`;

type Props = {
  deletable: boolean;
  onClick: () => void;
  onDelete: () => void;
};

const VideoUploaderItem: React.FC<Props> = (props) => {
  const { deletable, onDelete, onClick } = props;

  const handleDele = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className={`${classPrefix}-cell`} onClick={onClick}>
      <div className={`${classPrefix}-cell-main`}>
        <img src={VideoSvg} alt="视频" />
      </div>
      {deletable && (
        <span className={`${classPrefix}-cell-delete`} onClick={handleDele}>
          <CloseOutline className={`${classPrefix}-cell-delete-icon`} />
        </span>
      )}
    </div>
  );
};
export default VideoUploaderItem;
