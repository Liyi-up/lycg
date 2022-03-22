import React, { useState } from 'react';
import { VideoUploader } from 'lycg';
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';

const Example = () => {
  const [value, setValue] = useState<ImageUploadItem[]>([]);

  const uploaderProps = {
    value,
    uploadUrl: 'https://ejg.1078d.com/api/upload',
    imgPreUrl: 'https://ejg.1078d.com/uploads/',
    onChange: setValue,
  };

  return <VideoUploader {...uploaderProps} />;
};
export default Example;
