import axios from "axios";
import { toast } from "react-toastify";

import logger from "./logger";

// axios.defaults.baseURL = process.env.REACT_APP_API; convert .envs and services to use only path

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    console.error(error);
    toast.error(`An unexpected error occurred.`);
  }

  return Promise.reject(error);
});

export function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
  setJwt
};
