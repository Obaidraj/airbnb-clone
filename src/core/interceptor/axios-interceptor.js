import axios from "axios";
const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    try {
      return response;
    } catch (error) {
      return response;
    }
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
