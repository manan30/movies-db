import React from 'react';

import { MdQueue, MdLocalMovies, MdMovieFilter, MdStars } from 'react-icons/md';

const API_KEY = 'd5100d02cb8f8eb60150c3a3e156bc1b';
const REQUEST_URL = 'https://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

const SideBarItems = [
  { icon: <MdLocalMovies />, text: 'Now Playing' },
  { icon: <MdMovieFilter />, text: 'Popular' },
  { icon: <MdStars />, text: 'Top Rated' },
  { icon: <MdQueue />, text: 'Upcoming' }
];

export default { API_KEY, REQUEST_URL, IMAGE_URL, SideBarItems };
