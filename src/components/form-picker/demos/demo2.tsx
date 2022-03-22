import React, { useState } from 'react';
import { Form, Button, Picker } from 'antd-mobile';

const columns = [
  [
    { value: '0', label: '女' },
    { value: '1', label: '男' },
  ],
];

const Example = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

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
      <Form.Item
        label="性别"
        name="gender"
        rules={[{ required: true, message: '请选择性别!' }]}
        onClick={() => setVisible(true)}
        trigger="onConfirm"
        validateTrigger="onConfirm"
      >
        <Picker visible={visible} columns={columns} onClose={() => setVisible(false)}>
          {(items) => {
            if (items.every((item) => item === null)) {
              return <div>请选择</div>;
            } else {
              return <div>{items.map((item) => item?.label)}</div>;
            }
          }}
        </Picker>
      </Form.Item>
    </Form>
  );
};
export default Example;
