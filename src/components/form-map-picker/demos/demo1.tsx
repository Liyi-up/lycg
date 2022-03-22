import React from 'react';
import { Form, Button } from 'antd-mobile';
import { FormMapPicker } from 'lycg';

const Example = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const values = form.getFieldsValue();
    console.log('🚀 ~ file: index.tsx ~ line 8 ~ onSubmit ~ values', values);
  };

  return (
    <Form
      onFinish={onSubmit}
      layout="horizontal"
      form={form}
      initialValues={{
        location: { lng: 120.300826, lat: 30.404398 },
      }}
      footer={
        <Button block color="primary" type="submit">
          提交
        </Button>
      }
    >
      <Form.Item label="点位" name="location" rules={[{ required: true, message: '请选择点位!' }]}>
        <FormMapPicker />
      </Form.Item>
    </Form>
  );
};
export default Example;
