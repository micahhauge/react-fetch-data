import { ReactNode } from 'react';
import FadeIn from 'react-fade-in';
import { Movie } from '../types/Movie';
import { MovieListItem } from './MovieListItem';

interface MovieListPros {
  movies: Movie[];
}

function MovieList({ movies }: MovieListPros) {
  const movieListItems = movies.map((movie, index) => (
    <MovieListItem key={index} movie={movie} />
  ));

  return (
    <div className="grid justify-items-center mt-10">
      <div className="max-w-xl w-full rounded-lg shadow-md px-auto">
        <ul>
          <FadeIn className="divide-y divide-gray-100">{movieListItems}</FadeIn>
        </ul>
      </div>
    </div>
  );
}

export { MovieList };
