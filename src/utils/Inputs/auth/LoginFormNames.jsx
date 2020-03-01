import React from 'react';
import { Input } from 'antd';

const LoginNames = ({
    value,
    name,
    type,
    ...props
}) => <Input type={type} name={name} value={value} {...props} />;

export default LoginNames;
