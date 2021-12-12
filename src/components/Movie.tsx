import { ReactElement, useEffect } from 'react';
import { fetchMovieById } from '../utils/fetchMovieById';
import { useDidMount } from 'beautiful-react-hooks';

function Movie(): ReactElement {
  useDidMount(async () => {
    const movie = await fetchMovieById('tt0120737');
    console.log(movie);
  });

  return <p>ShowMovie</p>;
}

export { Movie };
