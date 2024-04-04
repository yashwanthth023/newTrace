import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const addPrototypeMasterAPI = async (data) => apiClient.postAPICall(apiRoutes.addPrototypeMaster, data).then(res => res.data);
export const fetchPrototypeDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.fetchPrototypeDetails, data).then(res => res.data);
export const updateVersionByIdAPI = async (data) => apiClient.postAPICall(apiRoutes.updateVersionById, data).then(res => res.data);
export const updatePrototypeDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.updatePrototypeDetails, data).then(res => res.data);
export const getVersionByIdAPI = async (data) => apiClient.postAPICall(apiRoutes.getVersionById, data).then(res => res.data);
export const addVersionAPI = async (data) => apiClient.postAPICall(apiRoutes.addVersion, data).then(res => res.data);
export const addExperimentAPI = async (data) => apiClient.postAPICall(apiRoutes.addExperiment, data).then(res => res.data);