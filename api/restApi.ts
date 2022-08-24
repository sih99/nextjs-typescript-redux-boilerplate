import axios, { AxiosRequestConfig } from "axios";
import { accessToken } from "./auth";

import { REST_API_URL } from "../config";

const restApi = axios.create({
  baseURL: REST_API_URL,
});

const getHeader = () => {
  return { Authorization: `Bearer ${accessToken}` };
};

restApi.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.headers = getHeader();
  return config;
});

export default restApi;
