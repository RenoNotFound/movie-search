import React from "react";

import { CircularProgress } from "@mui/material";

import MovieListTable from "./MovieListTable";

const MovieList = ({ data, loading }) => {
  return (
    <>
      {data ? (
        <MovieListTable data={data} />
      ) : loading ? (
        <CircularProgress />
      ) : (
        <></>
      )}
    </>
  );
};

export default MovieList;
