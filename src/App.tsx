import { ReactElement } from 'react';

import { MovieList } from './components/MovieList';
import { useMovies } from './hooks/useMovies';

function App(): ReactElement {
  const { movies } = useMovies('Lord of the Rings');

  return (
    <div className="grid justify-items-center mt-10">
      <div className="rounded-lg shadow-md px-auto">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export { App };
