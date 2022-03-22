import _Toast from "antd-mobile/es/components/toast";
import React, { useEffect } from 'react';
import testImg from '../../assets/canvas-poster/test.jpg';

var QRCode = require('qrcode.react');

var classPrefix = "ly-canvas-poster";
var CanvasPoster = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? {
    width: window.innerWidth,
    height: window.innerHeight
  } : _ref$size,
      _ref$qrCodeValue = _ref.qrCodeValue,
      qrCodeValue = _ref$qrCodeValue === void 0 ? 'http://lycg.online/' : _ref$qrCodeValue,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'blue' : _ref$textColor,
      _ref$textStyle = _ref.textStyle,
      textStyle = _ref$textStyle === void 0 ? '16px 微软雅黑' : _ref$textStyle,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? '#EBEBEB' : _ref$backgroundColor,
      _ref$text = _ref.text1,
      text1 = _ref$text === void 0 ? '1.长按保存到相册' : _ref$text,
      _ref$text2 = _ref.text2,
      text2 = _ref$text2 === void 0 ? '2.微信扫码访问' : _ref$text2,
      _ref$imageUrl = _ref.imageUrl,
      imageUrl = _ref$imageUrl === void 0 ? testImg : _ref$imageUrl;
  var imageSrc = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      generate: function generate() {
        _Toast.show({
          icon: 'loading',
          duration: 0,
          content: '生成海报中'
        });

        _Toast.show({
          icon: 'success',
          duration: 1000,
          content: '海报生成成功！'
        });

        return imageSrc.current;
      }
    };
  });
  useEffect(function () {
    draw();
  }, []);

  var draw = function draw() {
    var canvas = document.createElement('canvas'); //  设置宽高

    canvas.width = size.width;
    canvas.height = size.height;
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = backgroundColor; //填充背景色

    ctx.fillRect(0, 0, canvas.width, canvas.height); // 绘制矩形

    var rWidth = window.innerWidth - 40;
    var rHeight = window.innerHeight / 2.5;
    ctx.fillStyle = '#fff';
    roundRect({
      x: 20,
      y: 20,
      width: rWidth,
      height: rHeight
    }, 10, ctx); // 绘制矩形内图片

    var image = new Image();
    image.crossOrigin = '';
    image.src = imageUrl;

    image.onload = function () {
      ctx.drawImage(image, 30, 30, rWidth - 20, rHeight - 20); // 绘制二维码

      var qrImg = createQRcode();

      qrImg.onload = function () {
        ctx.drawImage(qrImg, 25, rHeight + 50, 100, 100);
        canvas2Image(canvas); // document.getElementById('wrap')!.appendChild(canvas);
      };
    }; // 绘制文字


    ctx.beginPath();
    ctx.fillStyle = textColor;
    ctx.font = textStyle;
    ctx.fillText(text1, 130, rHeight + 110);
    ctx.fillText(text2, 130, rHeight + 140);
  };

  var canvas2Image = function canvas2Image(canvas) {
    imageSrc.current = canvas.toDataURL('image/png', 1);
  };

  var createQRcode = function createQRcode() {
    var qrCanvas = document.getElementsByTagName('canvas')[0];
    var qrCode = new Image();
    qrCode.src = qrCanvas.toDataURL('image/png', 1);
    return qrCode;
  };
  /**
   * 绘制圆角矩形
   * @param rect 矩形形状参数
   * @param r radius
   * @param ctx  上下文
   */


  var roundRect = function roundRect(rect, r, ctx) {
    var path = new Path2D();
    path.moveTo(rect.x + r, rect.y);
    path.lineTo(rect.x + rect.width - r, rect.y);
    path.arc(rect.x + rect.width - r, rect.y + r, r, Math.PI / 180 * 270, 0, false);
    path.lineTo(rect.x + rect.width, rect.y + rect.height - r);
    path.arc(rect.x + rect.width - r, rect.y + rect.height - r, r, 0, Math.PI / 180 * 90, false);
    path.lineTo(rect.x + r, rect.y + rect.height);
    path.arc(rect.x + r, rect.y + rect.height - r, r, Math.PI / 180 * 90, Math.PI / 180 * 180, false);
    path.lineTo(rect.x, rect.y + r);
    path.arc(rect.x + r, rect.y + r, r, Math.PI / 180 * 220, Math.PI / 180 * 270, false);
    ctx.fill(path);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "" + classPrefix,
    id: "wrap"
  }, /*#__PURE__*/React.createElement(QRCode, {
    hidden: true,
    id: "qrCode",
    value: qrCodeValue,
    size: 100,
    fgColor: "#000000" // 二维码的颜色
    ,
    style: {
      margin: 'auto',
      position: 'absolute'
    }
  }));
});
export default /*#__PURE__*/React.memo(CanvasPoster);