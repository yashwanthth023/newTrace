import React from 'react';
import { message } from 'antd';

const AutoCloseAlert = ({ type, content, duration }) => {
    const showAlert = () => {
        message[type](content, duration);
    };

    React.useEffect(() => {
        showAlert();
    }, []);

    return null;
};

export default AutoCloseAlert;
