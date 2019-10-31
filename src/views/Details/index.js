import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Get from '../../api/Get';

function Details() {
  const { id } = useParams();
  const [, setMovieDetails] = useState({});

  useEffect(() => {
    try {
      (async () => {
        const results = await Get.movieDetails(id);
        setMovieDetails(results.data);
      })();
    } catch (e) {
      console.error({ e });
    }
  }, [id]);

  return <div />;
}

export default Details;
