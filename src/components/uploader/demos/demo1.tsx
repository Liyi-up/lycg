import React from 'react';
import { Form, Input, Button } from 'antd-mobile';
import { Uploader } from 'lycg';

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
        label="姓名"
        name="username"
        rules={[{ required: true, message: '请输入姓名!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        layout="vertical"
        label="上传图片"
        name="uploader"
        rules={[{ required: true, message: '请上传图片!' }]}
      >
        <Uploader {...uploaderProps} />
      </Form.Item>
    </Form>
  );
};
export default Example;
