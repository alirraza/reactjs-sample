import React, { useEffect } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AuthPage from '..';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { SetAuthState, SignUp } from '../../../redux/slice/auth';

import { validatePassword } from '../../../utils/helpers';
import {
  warningNotification
} from '../../../utils/notifications';

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const {
    errMessage,
    success
  } = useSelector((state) => state.auth);

  const addNewUser = (values) => {
    dispatch(SignUp(values));
  };

  const handleSuccess = () => {
    form.resetFields();
    dispatch(SetAuthState({
      field: 'success',
      value: false
    }));
    navigate('/login');
  };

  const handleError = () => {
    if (errMessage) {
      warningNotification(errMessage, 3);
      dispatch(SetAuthState({
        field: 'errMessage',
        value: ''
      }));
    }
  };

  useEffect(() => {
    if (success) {
      handleSuccess();
    } else {
      handleError();
    }
  }, [success, errMessage, dispatch, form, navigate]);

  const onFinish = (values) => {
    addNewUser(values);
  };

  return (
    <AuthPage heading="ReactJS Sample Registeration">
      <Form
        name="basic"
        autoComplete="off"
        layout="vertical"
        form={form}
        onFinish={onFinish}
      >
        <Input
          height="40px"
          placeholder="Name"
          label="Name"
          name="name"
          rules={[{
            required: true,
            message: 'Please enter name'
          }]}
        />
        <Input
          height="40px"
          placeholder="Email address"
          label="Email Address"
          name="email"
          rules={[{
            required: true,
            message: 'Please enter email address'
          }, {
            required: false,
            type: 'email',
            message: 'Enter a valid email address!'
          }]}
        />
        <Input
          height="40px"
          placeholder="Enter password"
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password'
            },
            {
              validator: (_, value) => validatePassword(value)
            }
          ]}
          type="password"
        />
        <Form.Item>
          <Button
            text="Sign Up"
            width="200px"
            type="primary"
            htmlType="submit"
          />
        </Form.Item>
      </Form>
      <div className="create-account">
        <span>
          Already have a account?
          {' '}
          <span onClick={() => navigate('/login')} className="primary-text link" aria-hidden="true">
            Login
          </span>
        </span>
      </div>
    </AuthPage>
  );
};

export default RegisterPage;
