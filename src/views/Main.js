import React, { useState, useEffect } from 'react';

import Get from '../api/Get';

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const popularMovies = await Get.popularMovies();
        setMovies(popularMovies.data.results);
      })();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div>
      {movies.map(movie => {
        return (
          <>
            <span>{movie.title}</span>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default Main;
