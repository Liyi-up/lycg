/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button } from 'antd-mobile';
import React, { useRef } from 'react';
import CanvasDraw from 'react-canvas-draw';

const Page = () => {
  const canvasRef = useRef<CanvasDraw>(null);
  const handleFinish = () => {
    if (canvasRef.current) {
      // @ts-ignore
      // 这里是因为 CanvasDraw 的类型声明文件没更新
      console.log(canvasRef.current.getDataURL('jpeg'));
    }
  };
  return (
    <div>
      <CanvasDraw ref={canvasRef} imgSrc="https://ejg.1078d.com/images/logo.png" />
      <Button onClick={() => handleFinish()}>签字完成</Button>
    </div>
  );
};
export default Page;
