import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MovieItemType } from "../types/movie";
import LazyImage from "./LazyImage";

const MovieItem = ({ movie }: { movie: MovieItemType }) => {
  return (
    <div className="movie-item">
      <LazyImage src={movie.poster_path} size="w500" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-vote">
          <FontAwesomeIcon icon={faStar} />
          {movie.vote_average.toFixed(1)}
        </p>
        <p className="movie-release">{movie.release_date}</p>
        <p className="movie-desc">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieItem;
