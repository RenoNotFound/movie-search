import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { Grid, Container } from "@mui/material";

import SearchBar from "./SearchBar";
import MovieList from "../movies/MovieList";
import { SEARCH_MOVIES } from "../movies/movieQueries";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [executeSearch, { loading, data }] = useLazyQuery(SEARCH_MOVIES); // handle error

  const handleSearch = () => {
    executeSearch({ variables: { title: searchQuery } });
  };

  return (
    <Container elevation={6} sx={{ my: 5 }}>
      <Grid container justifyContent="center" alignItems="center">
        <SearchBar
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <MovieList data={data} loading={loading} />
      </Grid>
    </Container>
  );
};

export default Home;
