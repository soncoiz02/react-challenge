import { useEffect, useState } from "react";
import { movieServices } from "../../services/movieService";
import type { Movie } from "../../types/movie";

const useDetailMovie = (id: number) => {
  const [detailMovie, setDetailMovie] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleGetDetailMovie = async () => {
    try {
      setLoading(true);
      const data = await movieServices.getDetailMovie(id);
      setLoading(false);
      setDetailMovie(data);
      setIsError(false);
    } catch (error: unknown) {
      setIsError(true);
    }
  };

  useEffect(() => {
    handleGetDetailMovie();
  }, [id]);

  return { detailMovie, isError, loading };
};

export default useDetailMovie;
