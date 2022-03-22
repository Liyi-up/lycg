import React, { useState } from 'react';
import { Popup, Result } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';
import { mergeProps } from '../../utils/props';
import { isOffice, isPdf } from '../../utils/file';

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const classPrefix = `ly-preview`;

export type PreviewProps = {
  show: boolean;
  url: string;
  bodyStyle?: React.CSSProperties;
  title?: string;
  onClose?(state: boolean): void;
};

const defaultProps = {
  bodyStyle: { height: '100vh' },
};

export const Preview: React.FC<PreviewProps> = (p) => {
  const props = mergeProps(defaultProps, p);
  const [numPages, setNumPages] = useState(0);

  const { title, show, bodyStyle, url, onClose } = props;

  if (isOffice(url)) {
    window.location.href = `https://view.officeapps.live.com/op/view.aspx?src=${url}`;
  }

  const pdfEle = (
    <Document file={url} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
      {Array.from(new Array(numPages), (_el, index) => (
        <Page width={window.innerWidth} key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );

  const otherEle = <Result status="info" title="打开错误" description="暂不支持该文件预览" />;

  return (
    <div className={`${classPrefix}`}>
      <Popup visible={show} bodyStyle={bodyStyle}>
        <div className={`${classPrefix}-header`}>
          <div className={`${classPrefix}-header-title`}>{title || url}</div>
          <div className={`${classPrefix}-header-close`} onClick={() => onClose?.(false)}>
            <CloseOutline fontSize={24} />
          </div>
        </div>

        <div className={`${classPrefix}-content`}>{isPdf(url) ? pdfEle : otherEle}</div>
      </Popup>
    </div>
  );
};
