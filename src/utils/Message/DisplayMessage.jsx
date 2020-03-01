import { message } from 'antd';

export const displayMessage = (logindata) => {
    const config = {
        content: logindata,
        duration: 5,
    };

    message.success(config);
};
