import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieServices } from "../../services/movieService";

const MovieTrailer = () => {
  const { id } = useParams();
  const [srcTrailer, setSrcTrailer] = useState<string>("");
  const [isError, setIsError] = useState(false);

  const handleGetTrailer = async (id: string) => {
    try {
      const res = await movieServices.getMovieVideos(Number(id));
      if (res.results.length > 0) {
        const trailer = res.results.find((p) => p.type === "Trailer" && p.site === "YouTube");

        if (trailer) {
          setSrcTrailer(`https://www.youtube.com/embed/${trailer.key}`);
        }
      }
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (id) {
      handleGetTrailer(id);
    }
  }, [id]);

  return (
    <div className="movie-trailer">
      {srcTrailer ? <iframe src={srcTrailer} loading="lazy"></iframe> : <h3>{isError ? "Error loading trailer." : "No trailer available."}</h3>}
    </div>
  );
};

export default MovieTrailer;
