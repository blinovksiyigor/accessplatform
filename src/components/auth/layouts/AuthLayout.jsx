import React from 'react';
import { Row, Col } from 'antd';
import Layout from './AuthLayout.module.scss';
import LoginForm from '../loginForm/LoginForm';

const AuthLayout = () => {
  return (
    <Row type="flex" align="middle" justify="center" className={Layout.formLayout}>
      <Col className={Layout.formContainer}>
        <LoginForm />
      </Col>
    </Row>

  );
};

export default AuthLayout;