import axios from 'axios';
import Constants from '../utils/Constants';

const movies = type => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${type}?api_key=${Constants.API_KEY}&language=en-US`
  );
};

const movieDetails = id => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${id}?api_key=${Constants.API_KEY}&language=en-US`
  );
};

const similar = id => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${id}/similar?api_key=${Constants.API_KEY}&language=en-US`
  );
};

const recommended = id => {
  return axios.get(
    `${Constants.REQUEST_URL}/movie/${id}/recommendations?api_key=${Constants.API_KEY}&language=en-US`
  );
};

export default { movies, movieDetails, similar, recommended };
