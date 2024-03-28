import axios from 'axios'
import axiosRetry from 'axios-retry'

import { errorMsg, showToast } from '../components/Shared';
import { Url } from "../helper/apiRoutes";
import { SessionStorage } from '../util/SessionStorage'
import { fortmatData } from '../util/utils';
import { SessionStorageKeys } from '@/helper/constants';

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
    if (DEBUG) { console.error(`Error: ${fortmatData(error)}`); }

    if (error.response && error.response.data) {
        if (error.response.data === 'A token is required for authentication') {
            SessionStorage.clearAll();
            window.location.href = '/'
        } else if (error.response.data === 'INVALID_TOKEN') {
            SessionStorage.clearAll();
            window.location.href = '/'
        } else if (error.response.data === 'Invalid password') {
            errorMsg('Invalid current password');
        }
        else {
            errorMsg(error.response.data);
        }
    }
    else if (error.message) {
        errorMsg(error.message);
    } else {
        errorMsg("Please contact message...", { autoClose: 5000 });
    }
    return error;
}

axiosInstance.interceptors.request.use(function (config) {
    const token = SessionStorage.getItem(SessionStorageKeys.SessionToken);
    config.headers.Authorization = token ? `${token}` : '';

    if (DEBUG) { console.info(`Request: ${fortmatData(config)}`); }

    return config;
}, errorResponseHandler);

axiosInstance.interceptors.response.use(function (response) {
    if (DEBUG) { console.info(`Response: ${fortmatData(response)}`); }
    return response;
}, errorResponseHandler);

export const getAPICall = async (url, data) => await axiosInstance.get(url, data);
export const postAPICall = async (url, data) => await axiosInstance.post(url, data);
export const putAPICall = async (url, data) => await axiosInstance.put(url, data);
export const deleteAPICall = async (url, data) => await axiosInstance.delete(url, data);
