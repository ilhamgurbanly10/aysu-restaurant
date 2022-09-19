import { Button, Form, Input } from 'antd';
import React from 'react';

const SignUpMainForm: React.FC = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="mt-5 width-4 ant-form-container">
      <Form
        name="SignUpMainForm"
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="SignUpMainEmail"
          rules={[
              { required: true, message: 'Please enter your email!' },
              { type: 'email', message: 'Invalid Email Address!' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>  
  );
};

export default SignUpMainForm;