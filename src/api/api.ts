import axios from 'axios';
import BASE_API_URL from '../constants/url';
const API = {
  get: async (url: string) => {
    const data = await axios.get(`${BASE_API_URL + url}`);
    return data.data;
  },
};

export default API;
