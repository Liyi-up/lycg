import _ImageUploader from 'antd-mobile/es/components/image-uploader';
import { __awaiter, __rest } from 'tslib';
import React, { useEffect, useState } from 'react';
import { compress } from '../../utils/compressor';
import { mergeProps } from '../../utils/props';
import { uploadToServer } from '../../utils/upload';
var classPrefix = 'ly-uploader';
var defaultProps = {
  value: [],
  watermark: '',
  quality: 0.8,
};
export var Uploader = function Uploader(p) {
  var props = mergeProps(defaultProps, p);

  var uploadUrl = props.uploadUrl,
    imgPreUrl = props.imgPreUrl,
    value = props.value,
    watermark = props.watermark,
    quality = props.quality,
    onChange = props.onChange,
    otherProps = __rest(props, [
      'uploadUrl',
      'imgPreUrl',
      'value',
      'watermark',
      'quality',
      'onChange',
    ]);

  var _useState = useState([]),
    imageValue = _useState[0],
    setImageValue = _useState[1];

  useEffect(
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
    return __awaiter(
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
                return compress(file, watermark, quality);

              case 2:
                compressRes = _context.sent;
                _context.next = 5;
                return uploadToServer(compressRes, uploadUrl, imgPreUrl);

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

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      _ImageUploader,
      Object.assign({}, otherProps, {
        onChange: onImageChange,
        value: imageValue,
        upload: handleUpload,
      }),
      props.children,
    ),
  );
};
