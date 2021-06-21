import { BASE_URL } from '../constants/url';
import axios from 'axios';

export const getData = async (company) => {
  try {
    const response = await axios
      .post(BASE_URL, { company: company })
      .then((res) => res.data)
      .catch((error) => console.log(error));
    return response.results;
  } catch (error) {
    console.error(error);
  }
};
