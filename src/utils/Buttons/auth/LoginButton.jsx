import React from 'react';
import { Button } from 'antd';


const LoginButton = ({ ButtonText, disabled, type, ...props }) => {
    return (
        <Button htmlType={type} {...props} disabled={disabled}>
            {ButtonText}
        </Button>
    );
}

export default LoginButton;