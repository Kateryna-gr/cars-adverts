import axios from 'axios';

const baseUrl = 'https://65d8f6d9c96fbb24c1bc91f9.mockapi.io';

axios.defaults.baseURL = baseUrl;

export const getAllCars = async () => {
  return await axios.get(`/api/adverts`).then(res => res);
};

export const getOneCar = async id => {
  return await axios.get(`/api/adverts/${id}`);
};
