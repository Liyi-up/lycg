import React from 'react';
import { VideoUploader } from 'lycg';
import { Button } from 'antd-mobile';

const Example = () => {
  return (
    <Button
      onClick={() => {
        VideoUploader.Dialog({ url: 'https://ejg.1078d.com/uploads/20220104/f33099f03a4e41f98223cbbdf94fd344.mp4' });
      }}
      block
    >
      查看视频
    </Button>
  );
};
export default Example;
