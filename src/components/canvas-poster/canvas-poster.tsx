import React, { useEffect } from 'react';
import { Toast } from 'antd-mobile';
import html2canvas from 'html2canvas';

export type CompProps = {
  children: React.ReactNode;
  /**
   * 海报大小
   */
  size?: { width?: number; height?: number };
  /**
   * 圆角
   */
  radius?: number;
  /**
   * 海报背景色
   */
  backgroundColor?: string;
};

export interface CompRefProps {
  /**
   * 生成海报
   */
  generate: () => HTMLImageElement;
}
const classPrefix = `ly-canvas-poster`;
const CanvasPoster = React.forwardRef<CompRefProps, CompProps>(
  (
    {
      size = { width: window.innerWidth, height: window.innerHeight },
      children,
      backgroundColor = 'white',
      radius = 20,
    },
    ref,
  ) => {
    const imageRef = React.useRef<HTMLImageElement | null>(null);
    React.useImperativeHandle(ref, () => ({
      generate: () => {
        Toast.show({ icon: 'loading', duration: 0, content: '生成海报中' });
        const canvasWrap = document.getElementById('poster')!;
        canvasWrap.style.display = 'none';
        Toast.show({
          icon: 'success',
          duration: 1000,
          content: '海报生成成功！',
        });
        return imageRef.current!;
      },
    }));

    useEffect(() => {
      html2Canvas();
    });

    const html2Canvas = () => {
      const canvasWrap = document.getElementById('poster')!;
      html2canvas(canvasWrap, {
        allowTaint: true,
        useCORS: true,
        width: size.width!,
        height: size.height!,
      }).then(function(canvas) {
        imageRef.current = convertCanvasToImage(canvas);
      });
    };

    const convertCanvasToImage = (canvas: HTMLCanvasElement) => {
      const image = new Image();
      image.crossOrigin = '*';
      image.crossOrigin = 'Anonymous';
      image.width = size.width!;
      image.height = size.height!;
      image.src = canvas.toDataURL('image/png');
      return image;
    };

    return (
      <div className={`${classPrefix}`}>
        <div
          id="poster"
          style={{
            backgroundColor: backgroundColor,
            borderRadius: radius,
            width: size.width,
            height: size.height,
          }}
        >
          {children}
        </div>
      </div>
    );
  },
);
export default React.memo(CanvasPoster);
