import React from 'react';
import { Input } from 'antd';

const LoginEmail = ({
    value,
    name,
    type,
    ...props
}) => <Input type={type} name={name} value={value} {...props} />;

export default LoginEmail;
