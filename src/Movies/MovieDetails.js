import { useParams } from 'react-router-dom';

export function MovieDetails() {
  const { id } = useParams();
  return <h1>Movie details for: {id}</h1>;
}
