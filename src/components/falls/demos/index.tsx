import React, { useState, useRef } from 'react';
import { Falls } from 'lycg';
import styles from './index.less';
const Demo = () => {
  return (
    <Falls
      data={[1, 2, 3, 4]}
      renderItem={(item: any, index: number) => {
        return (
          <div
            className={styles.itemStyle}
            key={index}
            onClick={() => {
              console.log(item);
            }}
          >
            {item}
          </div>
        );
      }}
    >
      123
    </Falls>
  );
};
export default Demo;
