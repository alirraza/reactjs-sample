import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

import InputWrapper from './style';

const Index = (props) => {
  const {
    label,
    name,
    rules,
    placeholder,
    onChange,
    type,
    transparent,
    height,
    marginBottom,
    disabled,
    onBlur,
    className
  } = props;

  const { TextArea } = Input;

  return (
    <InputWrapper
      transparent={transparent}
      height={height}
      marginBottom={marginBottom}
    >
      <Form.Item
        label={label}
        name={name}
        rules={rules}
      >
        {type === 'password' ? (
          <Input.Password placeholder={placeholder} onChange={onChange} />
        ) : type === 'textarea' ? (
          <TextArea rows={6} placeholder={placeholder} onChange={onChange} disabled={disabled} />
        ) : type === 'number' ? (
          <Input className={className} type="number" size="small" placeholder={placeholder} onChange={onChange} disabled={disabled} onBlur={onBlur} />
        ) : (
          <Input className={className} type="text" size="small" placeholder={placeholder} onChange={onChange} disabled={disabled} onBlur={onBlur} />
        )}
      </Form.Item>
    </InputWrapper>
  );
};

Index.propTypes = {
  rules: PropTypes.array,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  transparent: PropTypes.bool,
  height: PropTypes.string,
  marginBottom: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func
};

export default Index;
