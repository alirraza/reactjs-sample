import React from 'react';
import PropTypes from 'prop-types';

import ButtonWrapper from './style';

const Index = (props) => {
  const {
    text,
    type,
    onClick,
    shape,
    icon,
    className,
    height,
    width,
    outlined,
    loading,
    htmlType,
    disabled,
    danger
  } = props;

  return (
    <ButtonWrapper
      onClick={onClick}
      shape={shape}
      type={type}
      icon={icon}
      className={className}
      height={height}
      width={width}
      outlined={outlined}
      loading={loading}
      htmlType={htmlType}
      disabled={disabled}
      danger={danger}
    >
      {text}
    </ButtonWrapper>
  );
};

Index.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  shape: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  outlined: PropTypes.string,
  loading: PropTypes.bool,
  htmlType: PropTypes.string,
  disabled: PropTypes.bool,
  danger: PropTypes.bool
};

export default Index;
