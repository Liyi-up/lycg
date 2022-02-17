'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _toast = _interopRequireDefault(require('antd-mobile/es/components/toast'));

var _react = _interopRequireWildcard(require('react'));

var _html2canvas = _interopRequireDefault(require('html2canvas'));

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

var classPrefix = 'ly-canvas-poster';

var CanvasPoster = /*#__PURE__*/ _react['default'].forwardRef(function(
  _ref,
  ref,
) {
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

  var imageRef = _react['default'].useRef(null);

  _react['default'].useImperativeHandle(ref, function() {
    return {
      generate: function generate() {
        _toast['default'].show({
          icon: 'loading',
          duration: 0,
          content: '生成海报中',
        });

        var canvasWrap = document.getElementById('poster');
        canvasWrap.style.display = 'none';

        _toast['default'].show({
          icon: 'success',
          duration: 1000,
          content: '海报生成成功！',
        });

        return imageRef.current;
      },
    };
  });

  (0, _react.useEffect)(function() {
    html2Canvas();
  });

  var html2Canvas = function html2Canvas() {
    var canvasWrap = document.getElementById('poster');
    (0, _html2canvas['default'])(canvasWrap, {
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

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: '' + classPrefix,
    },
    /*#__PURE__*/ _react['default'].createElement(
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

var _default = /*#__PURE__*/ _react['default'].memo(CanvasPoster);

exports['default'] = _default;
