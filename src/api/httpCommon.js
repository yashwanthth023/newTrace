import axios from 'axios'
import axiosRetry from 'axios-retry'

import { message } from 'antd';
import { Url } from "../helper/apiRoutes";
// import { SessionStorage } from '../util/SessionStorage'
import { formatData } from '../util/utils';
// import { SessionStorageKeys } from '../helper/constants';

export const axiosInstance = axios.create({
    baseURL: `${Url.baseApiUrl}`,
    timeout: 60000
});

axiosInstance.defaults.headers = {
    'Content-Type': 'application/json',
}

// const retryDelay = (retryNumber = 0) => {
//     const seconds = Math.pow(2, retryNumber) * 1000;
//     const randomMs = 1000 * Math.random();
//     console.log("retryDelay", { seconds, randomMs });
//     return seconds + randomMs;
// };

// retryDelay()

axiosRetry(axiosInstance, {
    retries: 2,
    retryDelay: (...arg) => axiosRetry.exponentialDelay(...arg, 1000),
    retryCondition: axiosRetry.isRetryableError,
    onRetry: (retryCount, error) => console.log(`retry count : ${retryCount}, error:${error}`)
});

const DEBUG = process.env.NODE_ENV === "development";

function errorResponseHandler(error) {
    if (DEBUG) { console.error(`Error: ${formatData(error)}`); }

    if (error.response && error.response.data) {
        // if (error.response.data === 'A token is required for authentication') {
        //     SessionStorage.clearAll();
        //     window.location.href = '/'
        // } else if (error.response.data === 'INVALID_TOKEN') {
        //     SessionStorage.clearAll();
        //     window.location.href = '/'
        // } else if (error.response.data === 'Invalid password') {
        //     errorMsg('Invalid current password');
        // }
        // else {
        message.error(error.response.data, 5)
        // }
    }
    else if (error.message) {
        message.error(error.message, 5);
    } else {
        message.error("Please contact message...", 5);
    }
    return error;
}

axiosInstance.interceptors.request.use(function (config) {
    // const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
    // config.headers.Authorization = token ? `${token}` : '';

    if (DEBUG) { console.info(`Request: ${formatData(config)}`); }

    return config;
}, errorResponseHandler);

axiosInstance.interceptors.response.use(function (response) {
    if (DEBUG) { console.info(`Response: ${formatData(response)}`); }
    return response;
}, errorResponseHandler);

export const getAPICall = async (url, data) => axiosInstance.get(url, data);
export const postAPICall = async (url, data) => axiosInstance.post(url, data);
export const putAPICall = async (url, data) => axiosInstance.put(url, data);
export const deleteAPICall = async (url, data) => axiosInstance.delete(url, data);
