"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormMapPicker = void 0;

var _dialog = _interopRequireDefault(require("antd-mobile/es/components/dialog"));

var _tslib = require("tslib");

var _react = _interopRequireWildcard(require("react"));

var _antdMobileIcons = require("antd-mobile-icons");

var _amap = require("../../utils/amap");

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "ly-form-map-picker";

var FormMapPicker = function FormMapPicker(props) {
  var _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请选择' : _props$placeholder,
      _props$title = props.title,
      title = _props$title === void 0 ? '选择您的点位' : _props$title,
      _props$value = props.value,
      value = _props$value === void 0 ? {} : _props$value,
      onChange = props.onChange,
      _props$zoom = props.zoom,
      zoom = _props$zoom === void 0 ? 16 : _props$zoom;

  var _useState = (0, _react.useState)(placeholder),
      text = _useState[0],
      setText = _useState[1];

  var locationRef = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    if ((0, _isEmpty["default"])(value)) {
      (0, _amap.getLocation)().then(function (res) {
        locationRef.current = res;
      });
    } else {
      (0, _amap.getAddressName)(value).then(function (res) {
        setText(res);
      });
    }
  }, [value]);

  var drawMap = function drawMap() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
      var map = new AMap.Map('container', {
        zoom: zoom,
        scrollWheel: false,
        center: [locationRef.current.lng, locationRef.current.lat]
      });
      var positionPicker = new PositionPicker({
        mode: 'dragMarker',
        map: map
      });
      positionPicker.on('success', function (result) {
        map.setCenter(result.position);
        locationRef.current = {
          lng: result.position.lng,
          lat: result.position.lat
        };
      });
      positionPicker.start();
      map.panBy(0, 1);
      map.addControl(new AMap.ToolBar({
        liteStyle: true
      }));
    });
  };

  var DialogContent = function DialogContent() {
    (0, _react.useEffect)(function () {
      drawMap();
    }, []);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: classPrefix + "-subtitle"
    }, "\u62D6\u52A8\u56FE\u6807\uFF0C\u9009\u62E9\u60A8\u7684\u70B9\u4F4D"), /*#__PURE__*/_react["default"].createElement("div", {
      id: "container",
      className: classPrefix + "-dialog"
    }));
  };

  var handleClick = function handleClick() {
    _dialog["default"].confirm({
      title: title,
      content: /*#__PURE__*/_react["default"].createElement(DialogContent, null),
      onConfirm: function onConfirm() {
        return (0, _tslib.__awaiter)(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  (0, _amap.getAddressName)(locationRef.current).then(function (res) {
                    setText(res);
                  });
                  onChange === null || onChange === void 0 ? void 0 : onChange(locationRef.current);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      }
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "" + classPrefix,
    onClick: function onClick() {
      return handleClick();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-text"
  }, text), /*#__PURE__*/_react["default"].createElement(_antdMobileIcons.RightOutline, {
    className: classPrefix + "-icon",
    color: "var(--adm-color-weak)"
  })));
};

exports.FormMapPicker = FormMapPicker;