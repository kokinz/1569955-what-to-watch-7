import axios from 'axios';

const BACKEND_URL = 'https://7.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
};

const createAPI = (onUnauthorized) => {
  const token = localStorage.getItem('token') ?? '';

  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'X-Token': token,
    },
  });

  const onSuccess = (response) => {
    const {data} = response;
    if (data.token) {
      api.defaults.headers.common['X-token'] = data.token;
    }

    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export {createAPI};
