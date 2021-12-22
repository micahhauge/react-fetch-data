import { MovieList, LoadingPlaceholder, ErrorNotification } from './components';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies, loadingMovies, errorLoadingMovies } =
    useMovies('Lord of the Rings');

  console.log('rendering App component');

  if (errorLoadingMovies) {
    return <ErrorNotification />;
  }

  if (loadingMovies) {
    return <LoadingPlaceholder />;
  }

  return <MovieList movies={movies} />;
}

export { App };
