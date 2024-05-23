import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AuthPage from '..';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  ForgotPassword,
  SetAuthState
} from '../../../redux/slice/auth';

import {
  warningNotification,
  successNotification
} from '../../../utils/notifications';

const ForgotPasswordPage = () => {
  const [showNotification, setShowNotification] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const { errMessage, success } = useSelector((state) => state.auth);

  const handleError = () => {
    if (errMessage) {
      warningNotification(errMessage, 3);
      dispatch(SetAuthState({ field: 'errMessage', value: '' }));
    }
  };

  useEffect(() => {
    if (success) {
      form.resetFields();
      dispatch(SetAuthState({ field: 'success', value: false }));
      successNotification('Check your email for more information', 2);
      setShowNotification(true);
    } else {
      handleError();
    }
  }, [success, dispatch, form, navigate]);

  const handleForgotPassword = (values) => {
    dispatch(ForgotPassword(values));
  };

  const onFinish = (values) => {
    handleForgotPassword(values);
  };

  return (
    <AuthPage heading="Forgot Password">
      {!showNotification && (
        <Form name="basic" autoComplete="off" layout="vertical" onFinish={onFinish}>
          <Input
            height="40px"
            placeholder="Enter your email"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please enter email'
              },
              {
                type: 'email',
                message: 'Enter a valid email Address!'
              }
            ]}
            type="email"
          />
          <Form.Item>
            <Button width="200px" text="Send" type="primary" htmlType="submit" />
          </Form.Item>
        </Form>
      )}

      {showNotification && (
        <div className="success-message">
          Check your email for more information.
        </div>
      )}

      <div className="create-account">
        <span onClick={() => navigate('/login')} className="primary-text link" aria-hidden="true">
          {showNotification ? 'Back to Login' : 'Login'}
        </span>
      </div>
    </AuthPage>
  );
};

export default ForgotPasswordPage;
