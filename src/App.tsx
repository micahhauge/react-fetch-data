import { MovieList, LoadingPlaceholder, ErrorNotification } from './components';
import { useMovies } from './hooks/useMovies';

function App() {
  const { movies, loadingMovies, errorLoadingMovies } =
    useMovies('Lord of the Rings');

  if (loadingMovies) {
    return <LoadingPlaceholder />;
  }

  if (errorLoadingMovies) {
    return <ErrorNotification />;
  }

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export { App };
