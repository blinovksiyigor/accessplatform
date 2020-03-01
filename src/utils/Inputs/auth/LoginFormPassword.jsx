import React from 'react';
import { Input } from 'antd';

const LoginPassword = ({
    value,
    name,
    type,
    ...props
}) => <Input.Password type={type} name={name} value={value} {...props} />;

export default LoginPassword;
