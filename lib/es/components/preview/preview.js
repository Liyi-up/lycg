import _Popup from "antd-mobile/es/components/popup";
import _Result from "antd-mobile/es/components/result";
import React, { useState } from 'react';
import { CloseOutline } from 'antd-mobile-icons';
import { mergeProps } from '../../utils/props';
import { isOffice, isPdf } from '../../utils/file';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
var classPrefix = "ly-preview";
var defaultProps = {
  bodyStyle: {
    height: '100vh'
  }
};
export var Preview = function Preview(p) {
  var props = mergeProps(defaultProps, p);

  var _useState = useState(0),
      numPages = _useState[0],
      setNumPages = _useState[1];

  var title = props.title,
      show = props.show,
      bodyStyle = props.bodyStyle,
      url = props.url,
      onClose = props.onClose;

  if (isOffice(url)) {
    window.location.href = "https://view.officeapps.live.com/op/view.aspx?src=" + url;
  }

  var pdfEle = /*#__PURE__*/React.createElement(Document, {
    file: url,
    onLoadSuccess: function onLoadSuccess(_ref) {
      var numPages = _ref.numPages;
      return setNumPages(numPages);
    }
  }, Array.from(new Array(numPages), function (_el, index) {
    return /*#__PURE__*/React.createElement(Page, {
      width: window.innerWidth,
      key: "page_" + (index + 1),
      pageNumber: index + 1
    });
  }));
  var otherEle = /*#__PURE__*/React.createElement(_Result, {
    status: "info",
    title: "\u6253\u5F00\u9519\u8BEF",
    description: "\u6682\u4E0D\u652F\u6301\u8BE5\u6587\u4EF6\u9884\u89C8"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "" + classPrefix
  }, /*#__PURE__*/React.createElement(_Popup, {
    visible: show,
    bodyStyle: bodyStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-header-title"
  }, title || url), /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-header-close",
    onClick: function onClick() {
      return onClose === null || onClose === void 0 ? void 0 : onClose(false);
    }
  }, /*#__PURE__*/React.createElement(CloseOutline, {
    fontSize: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: classPrefix + "-content"
  }, isPdf(url) ? pdfEle : otherEle)));
};