import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import AuthPage from '..';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { SetAuthState, SignIn } from '../../../redux/slice/auth';

import { decryptData, encryptData } from '../../../utils/helpers';
import { warningNotification } from '../../../utils/notifications';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form] = Form.useForm();

  const {
    errMessage,
    success
  } = useSelector((state) => state.auth);

  const handleSuccess = () => {
    form.resetFields();
    dispatch(SetAuthState({
      field: 'success',
      value: 'false'
    }));
    navigate('/summary');
  };

  const handleError = () => {
    if (errMessage) {
      warningNotification(errMessage, 3);
      localStorage.clear();
      dispatch(SetAuthState({
        field: 'errMessage',
        value: ''
      }));
    }
  };

  useEffect(() => {
    const encryptedCredentials = localStorage.getItem('encryptedCredentials');
    if (encryptedCredentials) {
      const decryptedCredentials = decryptData(encryptedCredentials);

      form.setFieldsValue({
        email: decryptedCredentials.email,
        password: decryptedCredentials.password,
        rememberMe: true
      });
    }
  }, [form]);

  useEffect(() => {
    if (success) {
      handleSuccess();
    } else {
      handleError();
    }
  });

  const signInUser = (values) => {
    if (values.rememberMe) {
      const encryptedCredentials = encryptData({
        email: values.email,
        password: values.password
      });
      localStorage.setItem('encryptedCredentials', encryptedCredentials);
    }
    dispatch(SignIn(values));
  };

  const onFinish = (values) => {
    signInUser(values);
  };

  return (
    <AuthPage heading="ReactJs Sample Login">
      <Form
        name="basic"
        autoComplete="off"
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <Input
          height="40px"
          placeholder="Email address"
          label="Email Address"
          name="email"
          type="email"
          rules={[{
            required: true,
            message: 'Please enter email'
          }, {
            type: 'email',
            message: 'Enter a valid email address!'
          }]}
        />
        <Input
          height="40px"
          placeholder="Password"
          label="Password"
          name="password"
          rules={[{
            required: true,
            message: 'Please enter password'
          }]}
          type="password"
        />
        <Form.Item name="rememberMe" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            text="Login"
            width="200px"
            type="primary"
            htmlType="submit"
          />
        </Form.Item>
      </Form>
      <div className="create-account">
        <span>
          {'Don\'t'}
          {' '}
          have an account?
          {' '}
          <span onClick={() => navigate('/register')} className="primary-text link" aria-hidden="true">
            Create a React JS Sample account.
          </span>
        </span>
        <span onClick={() => navigate('/forgot-password')} className="primary-text link" aria-hidden="true">
          Forgot your password?
        </span>
      </div>
    </AuthPage>
  );
};

export default LoginPage;
