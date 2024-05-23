import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import AuthWrapper from './style';

const Auth = (props) => {
  const { heading, children } = props;

  return (
    <AuthWrapper>
      <Row className="login-wrapper">
        <Col span={12}>
          <div className="login-col">
            <div className="login-form">
              <h2>{heading}</h2>
              {children}
            </div>
          </div>
        </Col>
      </Row>
    </AuthWrapper>
  );
};

Auth.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node
};

export default Auth;
