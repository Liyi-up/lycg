'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Uploader = void 0;

var _imageUploader = _interopRequireDefault(
  require('antd-mobile/es/components/image-uploader'),
);

var _tslib = require('tslib');

var _react = _interopRequireWildcard(require('react'));

var _compressor = require('../../utils/compressor');

var _props = require('../../utils/props');

var _upload = require('../../utils/upload');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop,
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var classPrefix = 'ly-uploader';
var defaultProps = {
  value: [],
  watermark: '',
  quality: 0.8,
};

var Uploader = function Uploader(p) {
  var props = (0, _props.mergeProps)(defaultProps, p);
  var uploadUrl = props.uploadUrl,
    imgPreUrl = props.imgPreUrl,
    value = props.value,
    watermark = props.watermark,
    quality = props.quality,
    onChange = props.onChange,
    otherProps = (0, _tslib.__rest)(props, [
      'uploadUrl',
      'imgPreUrl',
      'value',
      'watermark',
      'quality',
      'onChange',
    ]);

  var _useState = (0, _react.useState)([]),
    imageValue = _useState[0],
    setImageValue = _useState[1];

  (0, _react.useEffect)(
    function() {
      var imageValue = value.map(function(_ref) {
        var url = _ref.url;
        return {
          url: '' + imgPreUrl + url,
        };
      });
      setImageValue(imageValue);
    },
    [value, imgPreUrl],
  );

  var handleUpload = function handleUpload(file) {
    return (0, _tslib.__awaiter)(
      void 0,
      void 0,
      void 0,
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var compressRes, url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return (0, _compressor.compress)(file, watermark, quality);

              case 2:
                compressRes = _context.sent;
                _context.next = 5;
                return (0, _upload.uploadToServer)(
                  compressRes,
                  uploadUrl,
                  imgPreUrl,
                );

              case 5:
                url = _context.sent;
                return _context.abrupt('return', {
                  url: url,
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    );
  };

  var onImageChange = function onImageChange(files) {
    var fileList = files.map(function(_ref2) {
      var url = _ref2.url;
      return {
        url: url.replace(imgPreUrl, ''),
      };
    });
    onChange === null || onChange === void 0 ? void 0 : onChange(fileList);
  };

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ _react['default'].createElement(
      _imageUploader['default'],
      Object.assign({}, otherProps, {
        onChange: onImageChange,
        value: imageValue,
        upload: handleUpload,
      }),
      props.children,
    ),
  );
};

exports.Uploader = Uploader;
