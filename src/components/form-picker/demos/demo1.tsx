import React from 'react';
import { Form, Button } from 'antd-mobile';
import { FormPicker } from 'lycg';

const columns = [
  [
    { value: '0', label: '女' },
    { value: '1', label: '男' },
  ],
];

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
      footer={
        <Button block color="primary" type="submit">
          提交
        </Button>
      }
    >
      <Form.Item label="性别" name="gender" rules={[{ required: true, message: '请选择性别!' }]}>
        <FormPicker columns={columns} />
      </Form.Item>
    </Form>
  );
};
export default Example;
