import React, { useEffect, useRef, useState } from 'react';
import { debounce } from '../../utils';

export type LinkSiderBarProps = {
  tabs: tabItem[];
  defaultKey?: string;
  renderItem: (val: tabItem) => React.ReactNode;
};

export type tabItem = {
  key: string;
  title: string;
};

const classPrefix = `ly-link-sider-bar`;

const LinkSiderBar: React.FC<LinkSiderBarProps> = props => {
  const { tabs, defaultKey, renderItem } = props;
  const [activeKey, setActiveKey] = useState<string>(
    defaultKey || tabs![0].key,
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const wrapScrollHandle = () => {
    const scrollTop = containerRef.current!.scrollTop;
    const childrens: any = containerRef.current!.children;
    for (let i = 0; i < childrens?.length!; i++) {
      // 距离屏幕上边距离
      const offsetTop = childrens[i].offsetTop;
      const elemH = childrens[i].clientHeight;
      if (offsetTop <= scrollTop && offsetTop + elemH > scrollTop) {
        setActiveKey(tabs[i].key);
      }
    }
  };

  return (
    <div className={`${classPrefix}`}>
      <nav className={`${classPrefix}-nav-wrap`}>
        {tabs.map((item: tabItem, index: number) => {
          return (
            <a
              href={`#${item.key}`}
              className={`${classPrefix}-nav-item ${
                activeKey === item.key ? 'activate' : ''
              }`}
              key={item.key}
            >
              {item.title}
            </a>
          );
        })}
      </nav>
      <div
        className={`${classPrefix}-item-wrap`}
        ref={containerRef}
        onScroll={wrapScrollHandle}
      >
        {tabs.map((item: tabItem, index: number) => {
          return renderItem(item);
        })}
      </div>
    </div>
  );
};

export default React.memo(LinkSiderBar);
