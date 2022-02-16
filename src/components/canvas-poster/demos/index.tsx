import React, { useRef } from 'react';
import styles from './index.less';
import defaultImg from './test.jpg';
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
  generate: () => HTMLImageElement;
}
const Page: React.FC<PageProps> = props => {
  const ref = useRef<CompRefProps>(null);
  return (
    <div className={styles.pageWrap}>
      <div id="wrap"></div>
      <CanvasPoster ref={ref}>
        <div style={{ padding: 20 }}>
          <img src={defaultImg} className={styles.img} />
          <QRCode
            id="qrCode"
            value={'Hello World'}
            size={100} // 二维码的大小
            fgColor="#000000" // 二维码的颜色
            style={{ margin: 'auto' }}
          />
          <h4>长按保存并分享图片</h4>
        </div>
      </CanvasPoster>
      <div
        className={styles.btn}
        onClick={() => {
          const img = ref.current?.generate();
          document.getElementById('wrap')!.appendChild(img!);
        }}
      >
        生成海报图片
      </div>
    </div>
  );
};

export default React.memo(Page);
