import { useParams } from "react-router-dom";
import "../../styles/scss/_detail.scss";
import Detail from "./Detail";
import useDetailMovie from "../../hooks/movies/useDetailMovie";
import Information from "./Information";
import ListSimilar from "./ListSimilar";
const DetailMovie = () => {
  const { id } = useParams();
  const { detailMovie, loading, isError } = useDetailMovie(id ? Number(id) : 0);

  if (isError) {
    return <div>Error loading movies.</div>;
  }

  return (
    <section className="movie-detail">
      <Detail detailMovie={detailMovie} />
      <Information detailMovie={detailMovie} />
      <ListSimilar />
    </section>
  );
};

export default DetailMovie;
