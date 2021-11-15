import { useMount } from 'ahooks';
import React from 'react';

interface FallsProps {
  children: React.ReactNode;
  renderItem: (item: any, index: number) => React.ReactNode;
  data: any[];
}

export const Falls: React.FC<FallsProps> = props => {
  const { data, renderItem, children } = props;
  const [items, setItems] = React.useState<any[]>([]);

  const getClient = React.useCallback(() => {
    // 获取当前屏幕宽度
    return {
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      height:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
    };
  }, []);

  const initLayout = React.useCallback(() => {
    // 初始化布局
    console.log(data);
    let arr: any[] = [];
    data.forEach((item, index) => {
      arr.push(renderItem(item, index));
    });
    setItems(arr);
    console.log(getClient());
  }, []);

  useMount(() => {
    initLayout();
  });

  return <div style={{ width: '100%', height: '100%' }}>{items}</div>;
};
