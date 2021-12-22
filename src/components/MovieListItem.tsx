import { Movie } from '../types';

interface MovieListItemProps {
  movie: Movie;
}
function MovieListItem({ movie }: MovieListItemProps) {
  return (
    <article
      className="flex items-start space-x-6 p-6 w-full hover:bg-gray-100"
      role="button"
    >
      <img
        src={movie.Poster}
        alt=""
        width="60"
        height="88"
        className="flex-none rounded-sm bg-gray-100 w-20"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-gray-900 truncate pr-5">
          {movie.Title}
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>{movie.Year}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export { MovieListItem };
