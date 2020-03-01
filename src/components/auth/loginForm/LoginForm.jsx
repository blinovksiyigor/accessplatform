import React from 'react';
import { Tabs } from 'antd';
import SignIn from '../../../containers/auth/LoginForm/SignIn';
import SignUp from '../../../containers/auth/LoginForm/SignUp';
//Scss
import './LoginForm.scss';
import LoginFormLayout from './LoginForm.module.scss';

const { TabPane } = Tabs;

const LoginForm = () => {
  return (
    <div className={LoginFormLayout.tabsContainer}>
      <Tabs defaultActiveKey="SignUp" animated={false} >
        <TabPane tab="Sign Up" key="SignUp">
          <SignUp />
        </TabPane>
        <TabPane tab="Log In" key="LogIn">
          <SignIn />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginForm;