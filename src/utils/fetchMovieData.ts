import axios from 'axios';

async function fetchMovieData() {
  const response = await axios.get(
    'http://www.omdbapi.com/?apikey=87d9551a&i=tt0120737'
  );

  console.log(response);
}

export { fetchMovieData };
