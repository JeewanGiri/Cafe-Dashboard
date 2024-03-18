import axios from "axios";
import { axiosPrivate } from "../apiProvider/api.axios";
const useAxiosPrivate = () => {
  const parsedToken = localStorage.getItem("token");

axiosPrivate.interceptors.request.use(
  (config)=>{
    if(!config.headers["Authorization"] && parsedToken){
      config.headers["Authorization"] =`Bearer ${parsedToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
  )
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers["Authorization"] && parsedToken) {
        config.headers["Authorization"] = `Bearer ${parsedToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosPrivate.interceptors.response.use(
    (response) => response,
    async (error) => {
      if(error.code == "ERR_NETWORK") {
        console.log("error")
      }
      if (error?.response?.data.status === 403) {
        window.location.replace('/login')
      }
      return Promise.reject(error);
    }
  );

  return axiosPrivate;
};

export default useAxiosPrivate;