import { ReactElement } from 'react';
import { fetchMovieData } from './utils/fetchMovieData';

import { Movie } from './components/Movie';
import { MovieList } from './components/MovieList';

function App(): ReactElement {
  return (
    <div className="grid justify-items-center mt-10">
      <div className="rounded-lg shadow-md px-auto">
        <MovieList>
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </MovieList>
      </div>
    </div>
  );
}

export { App };
