import React from "react";
import useSimilarMovie from "../../hooks/movies/useSimilarMovie";
import { useNavigate, useParams } from "react-router-dom";
import MovieItemSkeleton from "../../components/skeletons/MovieItemSkeleton";
import MovieItem from "../../components/MovieItem";

const ListSimilar = () => {
  const { id } = useParams();
  const { listMovie, isError, loading } = useSimilarMovie(Number(id));
  const navigate = useNavigate();

  const onMovieClick = (movieId: number) => {
    navigate(`/detail/${movieId}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="list-similar">
      <div className="container">
        <h3>Similar Movies</h3>
        {isError ? (
          <p>Error loading similar movies.</p>
        ) : (
          <div className="list">
            {loading ? (
              <>
                {Array.from({ length: 4 }).map((_, i) => (
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
        )}
      </div>
    </div>
  );
};

export default ListSimilar;
