import { useEffect, useState } from "react";
import { movieServices } from "../../services/movieService";
import type { MovieItemType } from "../../types/movie";

const useSimilarMovie = (id: number) => {
  const [listMovie, setListMovie] = useState<MovieItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleGetListMovie = async () => {
    try {
      setLoading(true);
      const res = await movieServices.getSimilarMovies(id);
      setLoading(false);
      setListMovie(res.results);
      setIsError(false);
    } catch (error: unknown) {
      setIsError(true);
    }
  };

  useEffect(() => {
    handleGetListMovie();
  }, [id]);

  return { listMovie, loading, isError };
};

export default useSimilarMovie;
