import React, { useState, useEffect } from 'react';
import useScroll from 'ahooks/es/useScroll';
import useDebounceFn from 'ahooks/es/useDebounceFn';
import { animated, useSpring } from 'react-spring';
import Top from '../../assets/top.svg';
import { mergeProps, withNativeProps } from '../../utils/props';
var classPrefix = "ly-back-to-top";
var defaultProps = {
  height: 200,
  time: 500,
  text: '顶部'
};
export var BackToTop = function BackToTop(p) {
  var props = mergeProps(defaultProps, p);
  var height = props.height,
      time = props.time,
      scrollRef = props.scrollRef,
      text = props.text;

  var _useState = useState(false),
      show = _useState[0],
      setShow = _useState[1];

  var scroll = useScroll((scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current) ? scrollRef.current : document);

  var _useDebounceFn = useDebounceFn(function () {
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

  useEffect(function () {
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

  var spring = useSpring({
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
  return /*#__PURE__*/React.createElement(animated.div, {
    style: spring
  }, withNativeProps(props, /*#__PURE__*/React.createElement("div", {
    className: "" + classPrefix,
    onClick: handleBackToTop
  }, /*#__PURE__*/React.createElement("img", {
    className: classPrefix + "-icon",
    src: Top,
    alt: "top"
  }), /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-text"
  }, text))));
};