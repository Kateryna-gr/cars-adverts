import axios from 'axios';

// axios.defaults.baseURL = 'https://65d8f6d9c96fbb24c1bc91f9.mockapi.io/api/adverts';

const url = new URL('https://65d8f6d9c96fbb24c1bc91f9.mockapi.io/api/adverts');

export const getAllCars = async (page) => {
  url.searchParams.append('page', page);
  url.searchParams.append('limit', 12);
  return await axios.get(`${url}`).then(res => res);
};

export const getOneCar = async id => {
  return await axios.get(`/${id}`).then(res => res);
};
