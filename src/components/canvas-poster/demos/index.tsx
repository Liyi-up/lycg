import React, { useRef } from 'react';
import styles from './index.less';

import { CanvasPoster } from 'lycg';
import QRCode from 'qrcode.react';
interface PageProps {
  history?: any;
  location?: any;
}
interface CompRefProps {
  /**
   * 生成海报
   */
  generate: () => string;
}
const Page: React.FC<PageProps> = props => {
  const ref = useRef<CompRefProps>(null);
  return (
    <div className={styles.pageWrap} id="pageWrap">
      <CanvasPoster ref={ref} />
      <div
        className={styles.btn}
        onClick={() => {
          const img = new Image();
          img.src = ref.current!.generate();
          document.getElementById('pageWrap')?.appendChild(img);
        }}
      >
        生成海报
      </div>
    </div>
  );
};

export default React.memo(Page);
