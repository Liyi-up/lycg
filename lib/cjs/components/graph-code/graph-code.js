"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphCode = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphCode = require("../../utils/graphCode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var classPrefix = "ly-graph-code";
/*eslint-disable*/

var GraphCode = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$height = _ref.height,
      height = _ref$height === void 0 ? 40 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 100 : _ref$width,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? '#fff' : _ref$bgColor,
      _ref$charNum = _ref.charNum,
      charNum = _ref$charNum === void 0 ? 4 : _ref$charNum,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 25 : _ref$fontSize,
      onChange = _ref.onChange,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className;

  var canvasRef = _react["default"].useRef(null);

  _react["default"].useImperativeHandle(ref, function () {
    return {
      refresh: function refresh() {
        canvasRef.current.click();
      }
    };
  }); // 生成原始的数据


  var generateSourceCode = _react["default"].useCallback(function () {
    var array = [];

    for (var i = 0; i < charNum; i++) {
      var temp = _graphCode.DATA[(0, _graphCode.randomNum)(0, _graphCode.DATA.length - 1)];

      array.push(temp);
    }

    return array;
  }, [charNum]);
  /**
   * 绘制验证码
   */


  var draw = _react["default"].useCallback(function () {
    if (canvasRef.current) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      var ctx = canvasRef.current.getContext('2d');
      var codeStr = ''; //装验证码的数组

      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
        var sourceCode = generateSourceCode();

        for (var i = 0; i < sourceCode.length; i++) {
          var charGap = Math.floor(width / charNum);
          var deg = Math.random() * 30 * Math.PI / 180; //0-30随机偏移度

          var text = sourceCode[i]; //随机字符

          codeStr += text; //验证码字符数组

          var x = i * charGap; //x坐标

          var y = 20 + Math.random() * 8; //y坐标
          //位移 旋转角度 颜色 文字 样式开始位置

          ctx.font = "bold " + fontSize + "px \u5FAE\u8F6F\u96C5\u9ED1";
          ctx.translate(x, y);
          ctx.rotate(deg);
          ctx.fillStyle = (0, _graphCode.randomColor)();
          ctx.fillText(text, 0, 0);
          ctx.rotate(-deg);
          ctx.translate(-x, -y);
        } //验证码显示小点


        for (var _i = 0; _i <= 30; _i++) {
          ctx.strokeStyle = (0, _graphCode.randomColor)(); //设置随机色用小点的颜色

          ctx.beginPath(); //开始一条路径

          var m = Math.random() * width;
          var n = Math.random() * height;
          ctx.moveTo(m, n); //移动

          ctx.lineTo(m + 1, n + 1); //添加一个新点，然后在画布中创建从该点到最后指定点的线条

          ctx.stroke(); //画上面定义好的路径
        } //验证码显示线条


        for (var _i2 = 0; _i2 < 8; _i2++) {
          ctx.strokeStyle = (0, _graphCode.randomColor)();
          ctx.beginPath();
          ctx.moveTo(Math.random() * width, Math.random() * height);
          ctx.lineTo(Math.random() * width, Math.random() * height);
          ctx.stroke();
        }

        return codeStr;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }, []);

  var handleClick = _react["default"].useCallback(function () {
    draw();

    if ((0, _graphCode.isFunction)(onChange)) {
      var captcha = draw();
      onChange(captcha);
    }
  }, [onChange]);

  _react["default"].useEffect(function () {
    var captcha = draw();

    if ((0, _graphCode.isFunction)(onChange)) {
      onChange(captcha);
    }
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("canvas", {
    style: {
      height: height,
      width: width
    },
    ref: canvasRef,
    className: classPrefix + " " + className,
    onClick: handleClick
  }));
});
/*eslint-disable*/


exports.GraphCode = GraphCode;