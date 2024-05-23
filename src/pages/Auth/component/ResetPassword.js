import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import AuthPage from '..';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {
  validatePassword,
  validateConfirmPassword
} from '../../../utils/helpers';
import { warningNotification, successNotification } from '../../../utils/notifications';

import { ResetPassword, SetAuthState } from '../../../redux/slice/auth';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [showNotification, setShowNotification] = useState(false);
  const [isTokenFailed, setIsTokenFailed] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');

  const { errMessage, success } = useSelector((state) => state.auth);

  const handleError = () => {
    if (errMessage) {
      warningNotification(errMessage, 3);
      dispatch(SetAuthState({ field: 'errMessage', value: '' }));
      setIsTokenFailed(true);
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

  const HandleResetPassword = (values) => {
    dispatch(ResetPassword({ ...values, token }));
  };

  const onFinish = (values) => {
    HandleResetPassword({ ...values, token });
  };

  return (
    <AuthPage heading="Reset Password">
      {
      !showNotification && !isTokenFailed && (
        <Form
          name="basic"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
        >
          <Input
            height="40px"
            placeholder="Enter new Password"
            label="Enter Password"
            name="password"
            type="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password'
              },
              {
                validator: (_, value) => validatePassword(value)
              }
            ]}
          />
          <Input
            height="40px"
            placeholder="Enter Confirm Password"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            rules={[
              {
                required: true,
                message: 'Please Enter Confirm Password'
              },
              ({ getFieldValue }) => ({
                validator: (_, value) => validateConfirmPassword(getFieldValue, value)
              })
            ]}
          />
          <Form.Item>
            <Button
              width="200px"
              htmlType="submit"
              text="Reset Password"
              type="primary"
            />
          </Form.Item>
        </Form>
      )
    }
      {showNotification && (
      <div className="success-message">
        Your Password Has Been Reset.
      </div>
      )}
      {isTokenFailed && (
      <div className="success-message">
        Password Reset Link Has Already Been Used Or Expired. Try Again!
      </div>
      )}
      <div className="create-account">
        <span onClick={() => navigate('/login')} className="primary-text link" aria-hidden="true">
          {showNotification || isTokenFailed ? 'Back to Login' : 'Login'}
        </span>
      </div>
    </AuthPage>
  );
};

export default ResetPasswordPage;
