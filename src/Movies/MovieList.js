import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

import styles from './Movies.module.css';

export function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/movies?_limit=10')
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  //React.createElement('section', { className: 'movieList' }, ...)
  return (
    <section className={styles['movie-list']}>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <MovieCard data={movie} />
      ))}
    </section>
  );
}
