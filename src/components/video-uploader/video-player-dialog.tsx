import { Dialog } from 'antd-mobile';
import { renderToBody } from '../../utils/render-to-body';
import React, { createRef, forwardRef, useEffect, useRef, useState } from 'react';
import Player from 'xgplayer';

type Props = {
  url: string;
  title?: string;
};

const videoPlayerDialog = (props: Props) => {
  const { url, title = '预览视频' } = props;

  const Wrapper = forwardRef(() => {
    const [visible, setVisible] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
      setVisible(true);
      if (videoRef.current) {
        new Player({
          el: videoRef.current,
          url,
          fitVideoSize: 'fixWidth',
          height: 150,
        });
      }
    }, []);

    return (
      <Dialog
        content={<div className={'cv-player'} ref={videoRef}></div>}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        closeOnAction
        title={title}
        actions={[
          {
            key: 'close',
            text: '关闭',
          },
        ]}
        afterClose={() => {
          // 播放完毕，销毁 元素
          unmount();
        }}
      />
    );
  });

  const ref = createRef();
  const unmount = renderToBody(<Wrapper ref={ref} />);
};

export default videoPlayerDialog;
