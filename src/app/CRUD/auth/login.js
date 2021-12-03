import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = (data) =>
  axios({
    method: "post",
    url: `${API_URL}/auth/login`,
    data,
  });
