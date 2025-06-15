import axios from "axios";
// config
import qs from "query-string";
import { toast } from "react-toastify";

// ----------------------------------------------------------------------

const hostApiIns = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
  },
  paramsSerializer: function (params) {
    return qs.stringify(params);
  },
  withCredentials: false,
});

hostApiIns.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    toast.error(error.message || "Error occurred while processing your request.");
    return Promise.reject(error);
  }
);

export default hostApiIns;
