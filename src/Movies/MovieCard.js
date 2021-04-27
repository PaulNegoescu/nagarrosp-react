import styles from './Movies.module.css';

export function MovieCard({ data }) {
  const { title, poster } = data;

  return (
    <article className={styles.card}>
      <a href="/">
        <img src={poster} alt={`${title} poster`} />
        <h2>{title}</h2>
      </a>
    </article>
  );
}
