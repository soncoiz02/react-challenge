import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { movieServices } from "../../services/movieService";
import type { MovieItemType, ParamsGetList } from "../../types/movie";

const useListMovie = () => {
  const [listMovie, setListMovie] = useState<MovieItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPage: 0,
  });

  const [searchParams] = useSearchParams();

  const handleGetListMovie = async () => {
    try {
      const page = searchParams.get("page");
      const type = searchParams.get("type");
      const query = searchParams.get("query");
      const params: ParamsGetList = {
        type: type ? type : "now_playing",
        page: page ? +page : 1,
        ...(query && { query }),
      };
      setLoading(true);
      const res = await movieServices.getListMovie(params);
      setLoading(false);
      setListMovie(res.results);
      setPagination({
        page: res.page,
        totalPage: res.total_pages,
      });
      setIsError(false);
    } catch (error: unknown) {
      setIsError(true);
    }
  };

  useEffect(() => {
    handleGetListMovie();
  }, [searchParams]);

  return { listMovie, loading, isError, pagination };
};

export default useListMovie;
