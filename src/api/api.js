import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const addPrototypeMasterAPI = async (data) => apiClient.postAPICall(apiRoutes.addPrototypeMaster, data).then(res => res.data);
export const fetchPrototypeDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.fetchPrototypeDetails, data).then(res => res.data);
export const updateVersionByIdAPI = async (data) => apiClient.postAPICall(apiRoutes.updateVersionById, data).then(res => res.data);
export const updatePrototypeDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.updatePrototypeDetails, data).then(res => res.data);
export const getVersionByIdAPI = async (data) => apiClient.postAPICall(apiRoutes.getVersionById, data).then(res => res.data);
export const addVersionAPI = async (data) => apiClient.postAPICall(apiRoutes.addVersion, data).then(res => res.data);
export const addManufacturingDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.addManufacturingDetails, data).then(res => res.data);
export const fetchManufacturingDetailsByVersionIdAPI = async (data) => apiClient.postAPICall(apiRoutes.fetchManufacturingDetailsByVersionId, data).then(res => res.data);
export const fetchComponentDetailByIdAPI = async (data) => apiClient.postAPICall(apiRoutes.fetchComponentDetailById, data).then(res => res.data);
export const updateManufacturingDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.updateManufacturingDetails, data).then(res => res.data);