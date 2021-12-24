import React from 'react';
import {
  randomColor,
  DATA,
  isFunction,
  randomNum,
} from '../../utils/graphCode';

const classPrefix = `ly-graph-code`;
export interface CompProps {
  /**
   * 高度
   */
  height?: number;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 背景颜色
   */
  bgColor?: string;
  /**
   * 字符个数
   */
  charNum?: number;
  /**
   * 字体大小
   */
  fontSize?: number;
  /**
   * 改变验证码的回调函数, 用来传递验证码（会在页面初始加载和点击验证码时调用）
   * @memberof ICaptchaProps
   */
  onChange?: (captcha: string) => void;

  /**
   * 样式名
   */
  className?: string;
}

export interface CompRefProps {
  /**
   * 主动刷新验证码接口
   */
  refresh: () => void;
}
/*eslint-disable*/
export const GraphCode = React.forwardRef<CompRefProps, CompProps>(
  (
    {
      height = 40,
      width = 100,
      bgColor = '#fff',
      charNum = 4,
      fontSize = 25,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
    React.useImperativeHandle(ref, () => ({
      refresh: () => {
        (canvasRef.current as HTMLCanvasElement).click();
      },
    }));
    // 生成原始的数据
    const generateSourceCode = React.useCallback(() => {
      const array = [];
      for (let i = 0; i < charNum; i++) {
        const temp = DATA[randomNum(0, DATA.length - 1)];
        array.push(temp);
      }
      return array;
    }, [charNum]);

    /**
     * 绘制验证码
     */
    const draw = React.useCallback(() => {
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        const ctx = canvasRef.current.getContext('2d');
        let codeStr = ''; //装验证码的数组
        if (ctx) {
          ctx.clearRect(0, 0, width, height);
          ctx.beginPath();
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, width, height);
          const sourceCode = generateSourceCode();
          for (let i = 0; i < sourceCode.length; i++) {
            const charGap = Math.floor(width / charNum);
            const deg = (Math.random() * 30 * Math.PI) / 180; //0-30随机偏移度
            const text = sourceCode[i]; //随机字符
            codeStr += text; //验证码字符数组
            const x = i * charGap; //x坐标
            const y = 20 + Math.random() * 8; //y坐标
            //位移 旋转角度 颜色 文字 样式开始位置
            ctx.font = `bold ${fontSize}px 微软雅黑`;
            ctx.translate(x, y);
            ctx.rotate(deg);
            ctx.fillStyle = randomColor();
            ctx.fillText(text, 0, 0);
            ctx.rotate(-deg);
            ctx.translate(-x, -y);
          }
          //验证码显示小点
          for (let i = 0; i <= 30; i++) {
            ctx.strokeStyle = randomColor(); //设置随机色用小点的颜色
            ctx.beginPath(); //开始一条路径
            const m = Math.random() * width;
            const n = Math.random() * height;
            ctx.moveTo(m, n); //移动
            ctx.lineTo(m + 1, n + 1); //添加一个新点，然后在画布中创建从该点到最后指定点的线条
            ctx.stroke(); //画上面定义好的路径
          }
          //验证码显示线条
          for (let i = 0; i < 8; i++) {
            ctx.strokeStyle = randomColor();
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

    const handleClick = React.useCallback(() => {
      draw();
      if (isFunction(onChange)) {
        const captcha = draw();
        onChange!(captcha);
      }
    }, [onChange]);

    React.useEffect(() => {
      const captcha = draw();
      if (isFunction(onChange)) {
        onChange!(captcha);
      }
    }, []);
    return (
      <>
        <canvas
          style={{ height, width }}
          ref={canvasRef}
          className={`${classPrefix} ${className}`}
          onClick={handleClick}
        ></canvas>
      </>
    );
  },
);
/*eslint-disable*/
