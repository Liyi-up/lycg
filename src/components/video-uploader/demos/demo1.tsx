import React from 'react';
import { Form, Button } from 'antd-mobile';
import { VideoUploader } from 'lycg';

const Example = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const values = form.getFieldsValue();
    console.log('🚀 ~ file: index.tsx ~ line 8 ~ onSubmit ~ values', values);
  };

  const uploaderProps = {
    uploadUrl: 'https://ejg.1078d.com/api/upload',
    imgPreUrl: 'https://ejg.1078d.com/uploads/',
  };

  return (
    <Form
      onFinish={onSubmit}
      layout="horizontal"
      form={form}
      footer={
        <Button block color="primary" type="submit">
          提交
        </Button>
      }
      initialValues={{
        uploader: [{ url: '20220104/f33099f03a4e41f98223cbbdf94fd344.mp4' }],
      }}
    >
      <Form.Item
        layout="vertical"
        label="上传视频"
        name="uploader"
        rules={[{ required: true, message: '请上传视频!' }]}
      >
        <VideoUploader {...uploaderProps} />
      </Form.Item>
    </Form>
  );
};
export default Example;
