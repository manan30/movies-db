import axios from 'axios';
import Constants from '../utils/Constants';

const popularMovies = () => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/popular?api_key=${Constants.API_KEY}`
  );
};

export default { popularMovies };
