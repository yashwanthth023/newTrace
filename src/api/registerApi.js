// getPredictedOutcomebyClassId
import * as apiClient from './httpCommon';
import { apiRoutes } from "../helper/apiRoutes";

export const addPrototypeMasterAPI = async (data) => apiClient.postAPICall(apiRoutes.addPrototypeMaster, data).then(res => res.data);
export const fetchPrototypeDetailsAPI = async (data) => apiClient.postAPICall(apiRoutes.fetchPrototypeDetails, data).then(res => res.data);