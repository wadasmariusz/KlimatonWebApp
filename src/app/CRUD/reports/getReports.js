import axios from "axios";
import { API_URL } from "../../config/env";
import useQuery2 from "../../hooks/useQuery2";

const getReports = () =>
  axios({
    method: "GET",
    url: `${API_URL}/reports`,
  }).then(({ data }) => data.items);

export const useGetReports = () =>
  useQuery2({
    queryKey: ["app.reports"],
    queryFn: getReports,
  });
