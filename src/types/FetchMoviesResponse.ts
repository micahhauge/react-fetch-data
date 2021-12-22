import { Movie } from './Movie';

export interface FetchMoviesResponse {
  Search: Movie[];
  totalResults: number;
}
