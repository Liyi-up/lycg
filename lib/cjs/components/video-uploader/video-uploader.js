"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoUploader = void 0;

var _space = _interopRequireDefault(require("antd-mobile/es/components/space"));

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _props = require("../../utils/props");

var _upload = require("../../utils/upload");

var _videoUploaderItem = _interopRequireDefault(require("./video-uploader-item"));

var _videoPlayerDialog = _interopRequireDefault(require("./video-player-dialog"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "cv-video-uploader";
var defaultProps = {
  maxCount: 0,
  value: [],
  accept: 'video/*',
  disableUpload: false,
  deletable: true
};

var VideoUploader = function VideoUploader(p) {
  var props = (0, _props.mergeProps)(defaultProps, p);
  var uploadUrl = props.uploadUrl,
      imgPreUrl = props.imgPreUrl,
      value = props.value,
      maxCount = props.maxCount,
      onChange = props.onChange,
      accept = props.accept,
      disableUpload = props.disableUpload,
      children = props.children,
      deletable = props.deletable;

  var _useState = (0, _react.useState)([]),
      list = _useState[0],
      setList = _useState[1];

  var showUpload = maxCount === 0 ? true : maxCount > value.length;
  (0, _react.useEffect)(function () {
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
    return (0, _tslib.__awaiter)(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
              return (0, _upload.uploadToServer)(files[0], uploadUrl, imgPreUrl);

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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "" + classPrefix
  }, /*#__PURE__*/_react["default"].createElement(_space["default"], {
    className: classPrefix + "-space",
    wrap: true
  }, list.map(function (fileItem, index) {
    return /*#__PURE__*/_react["default"].createElement(_videoUploaderItem["default"], {
      deletable: deletable,
      onDelete: function onDelete() {
        return handleDele(index);
      },
      onClick: function onClick() {
        (0, _videoPlayerDialog["default"])({
          url: fileItem.url
        });
      },
      key: index
    });
  }), showUpload && /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-upload-button-wrap"
  }, children || /*#__PURE__*/_react["default"].createElement("span", {
    className: classPrefix + "-cell " + classPrefix + "-upload-button",
    role: "button"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: classPrefix + "-upload-button-icon"
  }, /*#__PURE__*/_react["default"].createElement(_antdMobileIcons.AddOutline, null))), !disableUpload && /*#__PURE__*/_react["default"].createElement("input", {
    accept: accept,
    type: "file",
    className: classPrefix + "-input",
    onChange: handleInputChange
  }))));
};

exports.VideoUploader = VideoUploader;