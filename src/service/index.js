import axios from 'axios';
const getEndpoint = (name) => `https://data.messari.io/api/v1/assets/${name}/metrics`;

const getCurrency = (name) => {
  const endpoint = getEndpoint(name);
  return axios(endpoint);
};

export default getCurrency;
