import React from "react";
import { useQuery } from "@apollo/client";

import { CircularProgress } from "@mui/material";

import { GET_MOVIE } from "../movies/movieQueries";
import MovieListTable from "./MovieListTable";

const RelatedMovieList = ({ movieId }) => {
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { movieId: parseInt(movieId) },
  });

  if (loading) return <CircularProgress />;
  if (error) return <p>{error.message}</p>;

  return <MovieListTable data={data.movie.similar} />;
};

export default RelatedMovieList;
