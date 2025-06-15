import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyImage from "../../components/LazyImage";
import type { Movie } from "../../types/movie";

const Detail = ({ detailMovie }: { detailMovie: Movie | undefined }) => {
  return (
    <div className="hero">
      {detailMovie && (
        <>
          <div className="backdrop">
            <LazyImage size="original" src={detailMovie.backdrop_path} />
          </div>
          <div className="container">
            <div className="content">
              <div className="poster">
                <LazyImage src={detailMovie.poster_path} size="w500" />
              </div>
              <div className="info">
                <h2 className="title">{detailMovie.title}</h2>
                <div className="runtime">
                  <FontAwesomeIcon icon={faClock} /> {detailMovie.runtime} Minutes
                </div>
                <div className="relase">
                  <FontAwesomeIcon icon={faCalendar} /> {detailMovie.release_date}
                </div>
                <div className="vote">
                  <FontAwesomeIcon icon={faStar} /> {detailMovie.vote_average.toFixed(1)}
                </div>
                <div className="btn-watch">
                  Watch Movie <FontAwesomeIcon icon={faPlay} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
