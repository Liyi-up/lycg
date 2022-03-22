import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';
import testImg from '../../assets/canvas-poster/test.jpg';
const QRCode = require('qrcode.react') ;
export type CompProps = {
  /**
   * 海报大小
   */
  size?: { width?: number; height?: number };
  /**
   * 海报背景色
   */
  backgroundColor?: string;
  /**
   * 二维码扫码内容
   */
  qrCodeValue?: string;
  /**
   * 文字颜色
   */
  textColor?: string;
  /**
   * 文字样式
   */
  textStyle?: string;
  /**
   * 文字内容1
   */
  text1?: string;
  /**
   * 文字内容2
   */
  text2?: string;
  /**
   * 图片路径
   */
  imageUrl?: string;
};

export interface CompRefProps {
  /**
   * 生成海报
   */
  generate: () => string;
}
const classPrefix = `ly-canvas-poster`;
const CanvasPoster = React.forwardRef<CompRefProps, CompProps>(
  (
    {
      size = { width: window.innerWidth, height: window.innerHeight },
      qrCodeValue = 'http://lycg.online/',
      textColor = 'blue',
      textStyle = '16px 微软雅黑',
      backgroundColor = '#EBEBEB',
      text1 = '1.长按保存到相册',
      text2 = '2.微信扫码访问',
      imageUrl = testImg,
    },
    ref,
  ) => {
    const imageSrc = React.useRef<string | null>(null);
    React.useImperativeHandle(ref, () => ({
      generate: () => {
        Toast.show({ icon: 'loading', duration: 0, content: '生成海报中' });
        Toast.show({
          icon: 'success',
          duration: 1000,
          content: '海报生成成功！',
        });
        return imageSrc.current!;
      },
    }));

    useEffect(() => {
      draw();
    }, []);

    const draw = () => {
      const canvas = document.createElement('canvas');
      //  设置宽高
      canvas.width = size.width!;
      canvas.height = size.height!;

      const ctx = canvas.getContext('2d');

      ctx!.fillStyle = backgroundColor;
      //填充背景色
      ctx!.fillRect(0, 0, canvas.width, canvas.height);
      // 绘制矩形
      const rWidth = window.innerWidth - 40;
      const rHeight = window.innerHeight / 2.5;
      ctx!.fillStyle = '#fff';
      roundRect(
        {
          x: 20,
          y: 20,
          width: rWidth,
          height: rHeight,
        },
        10,
        ctx!,
      );

      // 绘制矩形内图片
      const image = new Image();
      image.crossOrigin = '';
      image.src = imageUrl;

      image.onload = () => {
        ctx!.drawImage(image, 30, 30, rWidth - 20, rHeight - 20);
        // 绘制二维码
        const qrImg = createQRcode();
        qrImg.onload = () => {
          ctx!.drawImage(qrImg, 25, rHeight + 50, 100, 100);
          canvas2Image(canvas);
          // document.getElementById('wrap')!.appendChild(canvas);
        };
      };

      // 绘制文字
      ctx!.beginPath();
      ctx!.fillStyle = textColor;
      ctx!.font = textStyle;
      ctx!.fillText(text1, 130, rHeight + 110);
      ctx!.fillText(text2, 130, rHeight + 140);
    };

    const canvas2Image = (canvas: HTMLCanvasElement) => {
      imageSrc.current = canvas.toDataURL('image/png', 1);
    };

    const createQRcode = () => {
      const qrCanvas = document.getElementsByTagName('canvas')[0];
      const qrCode = new Image();
      qrCode.src = qrCanvas!.toDataURL('image/png', 1);

      return qrCode;
    };

    /**
     * 绘制圆角矩形
     * @param rect 矩形形状参数
     * @param r radius
     * @param ctx  上下文
     */
    const roundRect = (
      rect: { x: number; y: number; width: number; height: number },
      r: number,
      ctx: any,
    ) => {
      const path = new Path2D();

      path.moveTo(rect.x + r, rect.y);
      path.lineTo(rect.x + rect.width - r, rect.y);
      path.arc(
        rect.x + rect.width - r,
        rect.y + r,
        r,
        (Math.PI / 180) * 270,
        0,
        false,
      );
      path.lineTo(rect.x + rect.width, rect.y + rect.height - r);
      path.arc(
        rect.x + rect.width - r,
        rect.y + rect.height - r,
        r,
        0,
        (Math.PI / 180) * 90,
        false,
      );
      path.lineTo(rect.x + r, rect.y + rect.height);
      path.arc(
        rect.x + r,
        rect.y + rect.height - r,
        r,
        (Math.PI / 180) * 90,
        (Math.PI / 180) * 180,
        false,
      );
      path.lineTo(rect.x, rect.y + r);
      path.arc(
        rect.x + r,
        rect.y + r,
        r,
        (Math.PI / 180) * 220,
        (Math.PI / 180) * 270,
        false,
      );

      ctx!.fill(path);
    };
    return (
      <div className={`${classPrefix}`} id="wrap">
        <QRCode
          hidden
          id="qrCode"
          value={qrCodeValue}
          size={100} // 二维码的大小
          fgColor="#000000" // 二维码的颜色
          style={{ margin: 'auto', position: 'absolute' }}
        />
      </div>
    );
  },
);
export default React.memo(CanvasPoster);
