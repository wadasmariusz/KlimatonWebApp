import axios from "axios";

export const setupAxios = (store) => {
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { token },
      } = store.getState();
      if (!config.url) console.error("request.url is undefined");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );
};
