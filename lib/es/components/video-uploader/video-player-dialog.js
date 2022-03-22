import _Dialog from "antd-mobile/es/components/dialog";
import { renderToBody } from '../../utils/render-to-body';
import React, { createRef, forwardRef, useEffect, useRef, useState } from 'react';
import Player from 'xgplayer';

var videoPlayerDialog = function videoPlayerDialog(props) {
  var url = props.url,
      _props$title = props.title,
      title = _props$title === void 0 ? '预览视频' : _props$title;
  var Wrapper = /*#__PURE__*/forwardRef(function () {
    var _useState = useState(false),
        visible = _useState[0],
        setVisible = _useState[1];

    var videoRef = useRef(null);
    useEffect(function () {
      setVisible(true);

      if (videoRef.current) {
        new Player({
          el: videoRef.current,
          url: url,
          fitVideoSize: 'fixWidth',
          height: 150
        });
      }
    }, []);
    return /*#__PURE__*/React.createElement(_Dialog, {
      content: /*#__PURE__*/React.createElement("div", {
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
  var ref = /*#__PURE__*/createRef();
  var unmount = renderToBody( /*#__PURE__*/React.createElement(Wrapper, {
    ref: ref
  }));
};

export default videoPlayerDialog;