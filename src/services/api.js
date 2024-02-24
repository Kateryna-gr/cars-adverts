import axios from 'axios';

axios.defaults.baseURL = 'https://65d8f6d9c96fbb24c1bc91f9.mockapi.io/api';

export const getAllCars = async () => {
  return await axios.get('/adverts').then(res => res);
};

export const getOneCar = async id => {
  return await axios.get(`/${id}`).then(res => res);
};
