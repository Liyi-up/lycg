import React from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import VideoSvg from '../../assets/video.svg';
var classPrefix = "ly-video-uploader";

var VideoUploaderItem = function VideoUploaderItem(props) {
  var deletable = props.deletable,
      onDelete = props.onDelete,
      onClick = props.onClick;

  var handleDele = function handleDele(e) {
    e.stopPropagation();
    onDelete();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-cell",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-cell-main"
  }, /*#__PURE__*/React.createElement("img", {
    src: VideoSvg,
    alt: "\u89C6\u9891"
  })), deletable && /*#__PURE__*/React.createElement("span", {
    className: classPrefix + "-cell-delete",
    onClick: handleDele
  }, /*#__PURE__*/React.createElement(CloseOutline, {
    className: classPrefix + "-cell-delete-icon"
  })));
};

export default VideoUploaderItem;