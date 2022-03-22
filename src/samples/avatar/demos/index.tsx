import React, { useEffect, useRef, useState } from 'react';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import { Button, Dialog } from 'antd-mobile';
import styles from './index.less';

const Page = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const cropperRef = useRef<Cropper | null>(null);

  const [visible, setVisible] = useState(false);
  const [before, setBefore] = useState('');
  const [after, setAfter] = useState('');

  const handleConfirm = () => {
    if (!cropperRef.current) {
      return;
    }
    cropperRef.current.getCroppedCanvas().toBlob((blob) => {
      // 这里获取到 Blob 文件，可以做上传操作
      if (blob) {
        setAfter(URL.createObjectURL(blob));
      }
    });
    setVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setBefore(URL.createObjectURL(file));
    e.target.value = '';

    setAfter('');
    setVisible(true);
  };

  const Content = () => {
    useEffect(() => {
      if (imageRef.current) {
        cropperRef.current = new Cropper(imageRef.current, {
          aspectRatio: 1,
          autoCropArea: 1,
          viewMode: 1,
          movable: false,
          zoomable: false,
        });
      }
    }, []);
    return <img className={styles.content} src={before} ref={imageRef} />;
  };

  return (
    <div>
      <div className={styles.avatarUploader}>
        <Button>点我上传头像</Button>
        <input onChange={handleChange} type="file" accept="image/*" />
      </div>
      <Dialog
        visible={visible}
        title="裁切头像"
        onAction={(values) => {
          switch (values.key) {
            case 'cancel':
              setVisible(false);
              break;
            case 'confirm':
              handleConfirm();
              break;
          }
        }}
        content={visible && <Content />}
        actions={[
          [
            {
              key: 'cancel',
              text: '取消',
            },
            {
              key: 'confirm',
              text: '确认',
              bold: true,
            },
          ],
        ]}
      />

      <div>
        <div>裁切之前：</div>
        <img width={375} src={before} />
        <div>裁切之后：</div>
        <img width={100} src={after} />
      </div>
    </div>
  );
};
export default Page;
