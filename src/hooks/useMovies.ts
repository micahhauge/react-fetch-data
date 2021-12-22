import { useEffect, useState, ReactElement } from 'react';
import axios from 'axios';
import { FetchMoviesResponse, Movie } from '../types';

interface UseMoviesState {
  movies: Movie[];
  loadingMovies: boolean;
  errorLoadingMovies: boolean;
}

function useMovies(searchString: string): UseMoviesState {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [errorLoadingMovies, setErrorLoadingMovies] = useState(false);

  useEffect(() => {
    async function fetchMovies(searchString: string) {
      try {
        const response = await axios.get<FetchMoviesResponse>(
          'http://www.omdbapi.com/',
          {
            params: {
              apiKey: '87d9551a',
              type: 'movie',
              s: searchString,
            },
          }
        );
        setMovies(response.data.Search);
      } catch (error) {
        console.log('Encountered error fetching movies.');
        throw error;
      }
    }

    fetchMovies(searchString);
  }, [searchString]);

  return { movies, loadingMovies, errorLoadingMovies };
}

export { useMovies };
