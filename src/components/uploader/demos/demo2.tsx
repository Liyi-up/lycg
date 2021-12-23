import React from 'react';
import { Form, Button } from 'antd-mobile';
import { Uploader } from 'lycg';

const Example = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const values = form.getFieldsValue();
    console.log('🚀 ~ file: index.tsx ~ line 8 ~ onSubmit ~ values', values);
  };

  const onChangeValue = () => {
    form.setFieldsValue({
      uploader: [
        {
          url: '/uploads/20211026/7d0d4ddcca554598aa056aa87ee9a236.png',
        },
      ],
    });
  };

  const uploaderProps = {
    uploadUrl: 'https://ejg.1078d.com/api/upload',
    imgPreUrl: 'https://ejg.1078d.com/uploads/',
  };

  return (
    <>
      <Form
        onFinish={onSubmit}
        layout="horizontal"
        form={form}
        initialValues={{
          uploader: [
            {
              url: '20211120/1d5bf2bb29154ed392c996dfe85cf5ec.png',
            },
          ],
        }}
        footer={
          <Button block color="primary" type="submit">
            提交
          </Button>
        }
      >
        <Form.Item
          label="上传图片"
          name="uploader"
          rules={[{ required: true, message: '请上传图片!' }]}
        >
          <Uploader {...uploaderProps} />
        </Form.Item>
      </Form>
      <Button
        block
        color="primary"
        fill="outline"
        onClick={() => {
          onChangeValue();
        }}
      >
        给我变
      </Button>
    </>
  );
};
export default Example;
