import React from "react";
import type { Movie } from "../../types/movie";
import MovieTrailer from "./MovieTrailer";

const Information = ({ detailMovie }: { detailMovie: Movie | undefined }) => {
  return (
    <div className="movie-info">
      {detailMovie && (
        <div className="container">
          <div className="infomation">
            <h3>Infomations</h3>
            <p className="overview">{detailMovie.overview}</p>
            <p className="other-info">
              <span>Companies</span>: {detailMovie.production_companies.map((p) => p.name).join(" - ")}
            </p>
            <p className="other-info">
              <span>Genres</span>: {detailMovie.genres.map((p) => p.name).join(", ")}
            </p>
            <p className="other-info">
              <span>Languages</span>: {detailMovie.spoken_languages.map((p) => p.name).join(", ")}
            </p>
          </div>
          <div className="trailer">
            <h3>Watch Trailer</h3>
            <MovieTrailer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
