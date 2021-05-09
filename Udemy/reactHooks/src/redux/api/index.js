import axios from 'axios';
//Hacer vuestra api que hacer otra api, esta es la mia, y es gratuita
const baseUrl = 'http://www.omdbapi.com/?apiKey=f28c68d4';

export const apiCall = (url, data, headers, method) => {
  return axios({
    method,
    url: baseUrl + url,
    data,
    headers,
  });
};
