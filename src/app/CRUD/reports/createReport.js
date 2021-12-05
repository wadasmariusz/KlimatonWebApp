import axios from "axios";
import { API_URL } from "@/app/config/env";

export const createReport = (data) => {
  return axios({
    method: "POST",
    url: `${API_URL}/user/reports/create`,
    data,
    headers: { "X-Requested-With": "XMLHttpRequest" },
  });
};
