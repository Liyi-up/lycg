import React from 'react';
import { Form, Button } from 'antd-mobile';
import { Uploader } from 'lycg';
import { PictureOutline } from 'antd-mobile-icons';

const Example = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const values = form.getFieldsValue();
    console.log('🚀 ~ file: index.tsx ~ line 8 ~ onSubmit ~ values', values);
  };

  const uploaderProps = {
    uploadUrl: 'https://ejg.1078d.com/api/upload',
    imgPreUrl: 'https://ejg.1078d.com/uploads',
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
    >
      <Form.Item
        layout="vertical"
        label="上传图片"
        name="uploader"
        rules={[{ required: true, message: '请上传图片!' }]}
      >
        <Uploader {...uploaderProps}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#999999',
            }}
          >
            <PictureOutline style={{ fontSize: 32 }} />
          </div>
        </Uploader>
      </Form.Item>
    </Form>
  );
};
export default Example;
