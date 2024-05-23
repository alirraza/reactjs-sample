import axios from 'axios';

const SetAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

const AxiosBaseUrl = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  return axios;
};

export {
  SetAuthToken,
  AxiosBaseUrl
};
