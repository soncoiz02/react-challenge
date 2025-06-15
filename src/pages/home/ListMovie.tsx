import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import MovieItemSkeleton from "../../components/skeletons/MovieItemSkeleton";
import useListMovie from "../../hooks/movies/useListMovie";
import "../../styles/scss/_movie-list.scss";
import MovieItem from "../../components/MovieItem";

const ListMovie = ({ view }: { view: string }) => {
  const { isError, loading, listMovie, pagination } = useListMovie();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const onPageChange = (page: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: String(page) });
    window.scrollTo({ top: 0 });
  };

  const onMovieClick = (movieId: number) => {
    navigate(`detail/${movieId}`);
    window.scrollTo({ top: 0 });
  };

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  return (
    <>
      <div className={`movie-list-wrapper ${view}`}>
        {loading ? (
          <>
            {Array.from({ length: 10 }).map((_, i) => (
              <div className="item" key={i}>
                <MovieItemSkeleton />
              </div>
            ))}
          </>
        ) : (
          <>
            {listMovie && listMovie.length > 0 ? (
              <>
                {listMovie.map((movie) => (
                  <div className="item" key={movie.id} onClick={() => onMovieClick(movie.id)}>
                    <MovieItem movie={movie} />
                  </div>
                ))}
              </>
            ) : (
              <div className="no-movies">
                <h2>No movies found</h2>
              </div>
            )}
          </>
        )}
      </div>
      {pagination && <Pagination currentPage={pagination.page} totalPages={pagination.totalPage} onPageChange={onPageChange} />}
    </>
  );
};

export default ListMovie;
