import { MovieItem } from './MovieItem';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => <MovieItem key={movie.imdbID} {...movie} />)
      ) : (
        <h5>Not found</h5>
      )}
    </div>
  );
}

export { Movies };
