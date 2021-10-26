import axios from "axios";

const api = axios.create({
  baseURL: "https://www.goodreads.com/",
});

api.interceptors.request.use((config) => {
  config.params = {
    key: process.env.GOODREADS_API_KEY,
    ...config.params,
  };
  return config;
});

export default api;
