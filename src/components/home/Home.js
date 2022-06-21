import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";

import { Grid, Container } from "@mui/material";

import SearchBar from "./SearchBar";
import MovieList from "../movies/MovieList";
import RelatedMovieList from "../movies/RelatedMovieList";
import { SEARCH_MOVIES } from "../movies/movieQueries";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [executeSearch, { loading, error, data }] = useLazyQuery(SEARCH_MOVIES);

  const navigate = useNavigate();
  const { movieId } = useParams();

  const handleSearch = () => {
    if (movieId) {
      navigate("/");
    }
    executeSearch({ variables: { title: searchQuery } });
  };

  return (
    <Container elevation={6} sx={{ my: 5 }}>
      <Grid container justifyContent="center" alignItems="center">
        <SearchBar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        {movieId ? (
          <RelatedMovieList movieId={movieId} />
        ) : (
          <MovieList data={data} loading={loading} error={error} />
        )}
      </Grid>
    </Container>
  );
};

export default Home;
