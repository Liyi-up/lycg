"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dialog = _interopRequireDefault(require("antd-mobile/es/components/dialog"));

var _renderToBody = require("../../utils/render-to-body");

var _react = _interopRequireWildcard(require("react"));

var _xgplayer = _interopRequireDefault(require("xgplayer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoPlayerDialog = function videoPlayerDialog(props) {
  var url = props.url,
      _props$title = props.title,
      title = _props$title === void 0 ? '预览视频' : _props$title;
  var Wrapper = /*#__PURE__*/(0, _react.forwardRef)(function () {
    var _useState = (0, _react.useState)(false),
        visible = _useState[0],
        setVisible = _useState[1];

    var videoRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(function () {
      setVisible(true);

      if (videoRef.current) {
        new _xgplayer["default"]({
          el: videoRef.current,
          url: url,
          fitVideoSize: 'fixWidth',
          height: 150
        });
      }
    }, []);
    return /*#__PURE__*/_react["default"].createElement(_dialog["default"], {
      content: /*#__PURE__*/_react["default"].createElement("div", {
        className: 'cv-player',
        ref: videoRef
      }),
      visible: visible,
      onClose: function onClose() {
        setVisible(false);
      },
      closeOnAction: true,
      title: title,
      actions: [{
        key: 'close',
        text: '关闭'
      }],
      afterClose: function afterClose() {
        // 播放完毕，销毁 元素
        unmount();
      }
    });
  });
  var ref = /*#__PURE__*/(0, _react.createRef)();
  var unmount = (0, _renderToBody.renderToBody)( /*#__PURE__*/_react["default"].createElement(Wrapper, {
    ref: ref
  }));
};

var _default = videoPlayerDialog;
exports["default"] = _default;