import React from "react";

import { CircularProgress } from "@mui/material";

import MovieListTable from "./MovieListTable";

const MovieList = ({ data, loading, error }) => {
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : data ? (
        <MovieListTable data={data.searchMovies} />
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieList;
