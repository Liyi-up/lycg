import _Toast from 'antd-mobile/es/components/toast';
import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
var classPrefix = 'ly-canvas-poster';
var CanvasPoster = /*#__PURE__*/ React.forwardRef(function(_ref, ref) {
  var _ref$size = _ref.size,
    size =
      _ref$size === void 0
        ? {
            width: window.innerWidth,
            height: window.innerHeight,
          }
        : _ref$size,
    children = _ref.children,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor =
      _ref$backgroundColor === void 0 ? 'white' : _ref$backgroundColor,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? 20 : _ref$radius;
  var imageRef = React.useRef(null);
  React.useImperativeHandle(ref, function() {
    return {
      generate: function generate() {
        _Toast.show({
          icon: 'loading',
          duration: 0,
          content: '生成海报中',
        });

        var canvasWrap = document.getElementById('poster');
        canvasWrap.style.display = 'none';

        _Toast.show({
          icon: 'success',
          duration: 1000,
          content: '海报生成成功！',
        });

        return imageRef.current;
      },
    };
  });
  useEffect(function() {
    html2Canvas();
  });

  var html2Canvas = function html2Canvas() {
    var canvasWrap = document.getElementById('poster');
    html2canvas(canvasWrap, {
      allowTaint: true,
      useCORS: true,
      width: size.width,
      height: size.height,
    }).then(function(canvas) {
      imageRef.current = convertCanvasToImage(canvas);
    });
  };

  var convertCanvasToImage = function convertCanvasToImage(canvas) {
    var image = new Image();
    image.crossOrigin = '*';
    image.crossOrigin = 'Anonymous';
    image.width = size.width;
    image.height = size.height;
    image.src = canvas.toDataURL('image/png');
    return image;
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        id: 'poster',
        style: {
          backgroundColor: backgroundColor,
          borderRadius: radius,
          width: size.width,
          height: size.height,
        },
      },
      children,
    ),
  );
});
export default /*#__PURE__*/ React.memo(CanvasPoster);
