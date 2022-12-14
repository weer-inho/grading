import axios, {AxiosInstance} from 'axios';

export const BACKEND_URL = 'http://localhost:3001';
export const REQUEST_TIMEOUT = 5000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
