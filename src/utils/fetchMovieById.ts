import axios from 'axios';
import { Movie } from '../types';

async function fetchMovieById(imbdId: string): Promise<Movie> {
  try {
    const response = await axios.get<Movie>('http://www.omdbapi.com', {
      params: {
        apiKey: '87d9551a',
        i: imbdId,
      },
    });

    return response.data;
  } catch (error) {
    console.log(`Error fetching movie with id ${imbdId}`);
    throw error;
  }
}

export { fetchMovieById };
