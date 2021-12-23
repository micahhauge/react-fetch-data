import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieList, LoadingPlaceholder, ErrorNotification } from './components';
import { FetchMoviesResponse, Movie } from './types';

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false);

  useEffect(() => {
    axios
      .get<FetchMoviesResponse>('https://www.omdbapi.com/', {
        params: {
          apiKey: '87d9551a',
          type: 'movie',
          s: 'Lord of the Rings',
        },
      })
      .then((response) => {
        setMovies(response.data.Search);
        setLoadingMovies(false);
      })
      .catch((error) => {
        setLoadingMovies(false);
        setErrorLoadingMovies(true);
        throw error;
      });
  }, []);

  if (errorLoadingMovies) {
    return <ErrorNotification />;
  }

  if (loadingMovies) {
    return <LoadingPlaceholder />;
  }

  return <MovieList movies={movies} />;
}

export { App };
