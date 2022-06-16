import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams();
  return <div>Movie {movieId}</div>;
};

export default Movie;
