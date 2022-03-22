import React, { useState, useRef } from 'react';
import { Button } from 'antd-mobile';
import { Preview } from 'lycg';

const Page = () => {
  const url = useRef('')
  const [showPreview, setShowPreview] = useState(false);

  const previewProps = {
    show: showPreview,
    url: url.current,
    onClose: setShowPreview,
  };

  return (
    <div>
      <Button
        onClick={() => {
          url.current = 'https://ejg.1078d.com/images/foo/2021.pdf'
          setShowPreview(true);
        }}
      >
        预览 PDF 文件
      </Button>

      <Button
        onClick={() => {
          url.current = 'https://ejg.1078d.com/images/foo/1111.docx'
          setShowPreview(true);
        }}
      >
        预览 office 文件
      </Button>

      {showPreview && <Preview {...previewProps} />}
    </div>
  );
};
export default Page;
