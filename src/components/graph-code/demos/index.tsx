import React from 'react';
import { GraphCode } from 'lycg';
import { Input, Form, Button, Toast } from 'antd-mobile';
import styles from './index.less';
const Page = () => {
  const codeRef = React.useRef<string>();
  const [form] = Form.useForm();

  const submit = () => {
    const values = form.getFieldsValue();
    if (codeRef.current === values?.code) {
      Toast.show({
        icon: 'success',
        content: '验证通过',
      });
    } else {
      Toast.show({
        icon: 'fail',
        content: '验证码错误',
      });
    }
  };

  return (
    <Form
      form={form}
      onFinish={submit}
      layout="horizontal"
      footer={
        <Button block type="submit" color="primary">
          提交
        </Button>
      }
    >
      <Form.Item name="code" label="验证码">
        <div className={styles.codeWrap}>
          <Input placeholder="请输入图形验证码" />
          <GraphCode
            width={100}
            height={40}
            charNum={4}
            onChange={(code: string) => {
              codeRef.current = code;
            }}
          />
        </div>
      </Form.Item>
    </Form>
  );
};
export default Page;
