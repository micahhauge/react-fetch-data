import { ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { Movie } from '../types/Movie';
import { MovieListItem } from './MovieListItem';

interface MovieListPros {
  movies: Movie[];
}

function MovieList({ movies }: MovieListPros) {
  const movieComponents = movies.map((movie) => (
    <MovieListItem movie={movie} />
  ));

  return (
    <ul>
      <FadeIn className="divide-y divide-gray-100">{movieComponents}</FadeIn>
    </ul>
  );
}

export { MovieList };
