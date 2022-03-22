import { BackToTop } from 'lycg';
import React, { useRef } from 'react';
import styles from './index.less';

const Demo2 = () => {
  const list = Array.from(Array(20).keys());

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        {list.map((el) => {
          return (
            <div style={{ height: 60 }} key={el}>
              第 {el} 个元素
            </div>
          );
        })}
      </div>
      <BackToTop scrollRef={containerRef} />
    </>
  );
};

export default Demo2;
