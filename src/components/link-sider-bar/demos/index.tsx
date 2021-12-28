import React from 'react';
import styles from './index.less';
import { LinkSiderBar, tabItem } from 'lycg';
import { Toast } from 'antd-mobile';

interface PageProps {
  history?: any;
  location?: any;
}
const tabs: tabItem[] = [
  {
    key: 'key1',
    title: '选项一',
  },
  {
    key: 'key2',
    title: '选项二',
  },
  {
    key: 'key3',
    title: '选项三',
  },
  {
    key: 'key4',
    title: '选项四',
  },
  {
    key: 'key5',
    title: '选项五',
  },
];
const Page: React.FC<PageProps> = props => {
  return (
    <div className={styles.pageWrap}>
      <LinkSiderBar
        tabs={tabs}
        renderItem={(val: tabItem) => {
          return (
            <div
              id={val.key}
              key={val.key}
              onClick={() => {
                Toast.show(val.title);
              }}
            >
              {val.title}
            </div>
          );
        }}
      />
    </div>
  );
};

export default React.memo(Page);
