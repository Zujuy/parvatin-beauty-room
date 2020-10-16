import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production';
const baseURL = isProduction
  ? 'https://parvati.com.mx'
  : 'http://localhost:3000';
axios.defaults.withCredentials = true;

export const postRegisterPotentialUserService = (form) => {
  return axios
    .post(`${baseURL}/sendmail`, form)
    .then(({ data }) => data)
    .catch(({ response }) => {
      throw response.data;
    });
};
