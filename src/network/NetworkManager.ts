import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import URL from "./apiConfig.json";

const DEFAULT_TIME = 20 * 1000;
const AppClient = axios.create({
  baseURL: URL.baseUrl,
  timeout: DEFAULT_TIME,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

AppClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

AppClient.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => Promise.reject(error)
);

export class NetworkManger {
  static instance: NetworkManger;
  static getInstance(): NetworkManger {
    if (!this.instance) {
      this.instance = new NetworkManger();
    }
    return this.instance;
  }
  appRequest = async <T>(option: AxiosRequestConfig) => {
    return AppClient(option);
  };
}
