import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

export function MovieCard({ data }) {
  const { title, poster } = data;

  return (
    <article className={styles.card}>
      <Link to={'/movies/' + data.id}>
        <img src={poster} alt={`${title} poster`} />
        <h2>{title}</h2>
      </Link>
    </article>
  );
}
