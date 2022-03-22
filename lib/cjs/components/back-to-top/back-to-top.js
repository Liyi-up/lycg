"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackToTop = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useScroll = _interopRequireDefault(require("ahooks/es/useScroll"));

var _useDebounceFn2 = _interopRequireDefault(require("ahooks/es/useDebounceFn"));

var _reactSpring = require("react-spring");

var _top = _interopRequireDefault(require("../../assets/top.svg"));

var _props = require("../../utils/props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var classPrefix = "ly-back-to-top";
var defaultProps = {
  height: 200,
  time: 500,
  text: '顶部'
};

var BackToTop = function BackToTop(p) {
  var props = (0, _props.mergeProps)(defaultProps, p);
  var height = props.height,
      time = props.time,
      scrollRef = props.scrollRef,
      text = props.text;

  var _useState = (0, _react.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var scroll = (0, _useScroll["default"])((scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) ? scrollRef.current : document);

  var _useDebounceFn = (0, _useDebounceFn2["default"])(function () {
    if (!scroll) {
      return;
    }

    if (scroll.top > height) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, {
    wait: time
  }),
      run = _useDebounceFn.run;

  (0, _react.useEffect)(function () {
    run();
  }, [run, scroll]);

  var handleBackToTop = function handleBackToTop() {
    var _a, _b, _c, _d, _e;

    if (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) {
      (_a = scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
      return;
    } // 标准模式


    if (((_c = (_b = window === null || window === void 0 ? void 0 : window.top) === null || _b === void 0 ? void 0 : _b.document) === null || _c === void 0 ? void 0 : _c.compatMode) === 'CSS1Compat') {
      document.documentElement.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    } // 怪异模式


    if (((_e = (_d = window === null || window === void 0 ? void 0 : window.top) === null || _d === void 0 ? void 0 : _d.document) === null || _e === void 0 ? void 0 : _e.compatMode) === 'CSS1Compat') {
      document.body.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  var spring = (0, _reactSpring.useSpring)({
    from: {
      opacity: 0,
      display: 'none'
    },
    to: show ? {
      opacity: 1,
      display: 'inline'
    } : {
      opacity: 0
    },
    delay: 200,
    reverse: !show
  });
  return /*#__PURE__*/_react["default"].createElement(_reactSpring.animated.div, {
    style: spring
  }, (0, _props.withNativeProps)(props, /*#__PURE__*/_react["default"].createElement("div", {
    className: "" + classPrefix,
    onClick: handleBackToTop
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: classPrefix + "-icon",
    src: _top["default"],
    alt: "top"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classPrefix + "-text"
  }, text))));
};

exports.BackToTop = BackToTop;