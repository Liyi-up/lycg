import _Space from "antd-mobile/es/components/space";
import { __awaiter } from "tslib";
import React, { useEffect, useState } from 'react';
import { AddOutline } from 'antd-mobile-icons';
import { mergeProps } from '../../utils/props';
import { uploadToServer } from '../../utils/upload';
import VideoUploaderItem from './video-uploader-item';
import videoPlayerDialog from './video-player-dialog';
var classPrefix = "cv-video-uploader";
var defaultProps = {
  maxCount: 0,
  value: [],
  accept: 'video/*',
  disableUpload: false,
  deletable: true
};
export var VideoUploader = function VideoUploader(p) {
  var props = mergeProps(defaultProps, p);
  var uploadUrl = props.uploadUrl,
      imgPreUrl = props.imgPreUrl,
      value = props.value,
      maxCount = props.maxCount,
      onChange = props.onChange,
      accept = props.accept,
      disableUpload = props.disableUpload,
      children = props.children,
      deletable = props.deletable;

  var _useState = useState([]),
      list = _useState[0],
      setList = _useState[1];

  var showUpload = maxCount === 0 ? true : maxCount > value.length;
  useEffect(function () {
    var initList = value.map(function (_ref) {
      var url = _ref.url;
      return {
        url: "" + imgPreUrl + url
      };
    });
    setList(initList);
  }, [value, imgPreUrl]);
  /**
   * 触发上传文件
   */

  var handleInputChange = function handleInputChange(e) {
    return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var files, onLineFile, newList, fileList;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.persist();
              files = e.target.files;

              if (!(!files || files.length === 0)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.next = 6;
              return uploadToServer(files[0], uploadUrl, imgPreUrl);

            case 6:
              onLineFile = _context.sent;
              newList = list;
              newList.push({
                url: onLineFile
              });
              fileList = newList.map(function (_ref2) {
                var url = _ref2.url;
                return {
                  url: url.replace(imgPreUrl, '')
                };
              });
              onChange === null || onChange === void 0 ? void 0 : onChange(fileList); // 清除 input 的值，否则两次选择相同文件不会触发 onChange 事件

              e.target.value = '';

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  };

  var handleDele = function handleDele(index) {
    var newList = list;
    newList.splice(index, index + 1);
    onChange === null || onChange === void 0 ? void 0 : onChange(newList);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "" + classPrefix
  }, /*#__PURE__*/React.createElement(_Space, {
    className: classPrefix + "-space",
    wrap: true
  }, list.map(function (fileItem, index) {
    return /*#__PURE__*/React.createElement(VideoUploaderItem, {
      deletable: deletable,
      onDelete: function onDelete() {
        return handleDele(index);
      },
      onClick: function onClick() {
        videoPlayerDialog({
          url: fileItem.url
        });
      },
      key: index
    });
  }), showUpload && /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-upload-button-wrap"
  }, children || /*#__PURE__*/React.createElement("span", {
    className: classPrefix + "-cell " + classPrefix + "-upload-button",
    role: "button"
  }, /*#__PURE__*/React.createElement("span", {
    className: classPrefix + "-upload-button-icon"
  }, /*#__PURE__*/React.createElement(AddOutline, null))), !disableUpload && /*#__PURE__*/React.createElement("input", {
    accept: accept,
    type: "file",
    className: classPrefix + "-input",
    onChange: handleInputChange
  }))));
};