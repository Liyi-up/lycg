import React from 'react';
import { BackToTop } from 'lycg';

const Page = () => {
  const list = Array.from(Array(20).keys());

  return (
    <>
      <div>
        {list.map((el) => {
          return (
            <div style={{ height: 60 }} key={el}>
              第 {el} 个元素
            </div>
          );
        })}
      </div>
      <BackToTop style={{ '--font-size': '20px' }} />
    </>
  );
};
export default Page;
