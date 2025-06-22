import axios from 'axios';

export const fetchCarsByQuery = async (page, query) => {
  const { data } = await axios.get('https://car-rental-api.goit.global/cars', {
    params: {
      query,
      page,
      limit: 12,
    },
  });

  return data;
};
