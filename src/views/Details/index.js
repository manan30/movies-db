import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  return <div />;
}

export default Details;
