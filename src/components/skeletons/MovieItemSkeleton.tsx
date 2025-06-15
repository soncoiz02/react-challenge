import React from "react";
import "../../styles/scss/_skeleton.scss";
const MovieItemSkeleton = () => {
  return (
    <div className="movie-item-skeleton">
      <div className="movie-poster-skeleton skeleton"></div>
      <div className="movie-title-skeleton skeleton"></div>
      <div className="movie-desc-skeleton skeleton"></div>
    </div>
  );
};

export default MovieItemSkeleton;
