import React from "react";

import { TextField, Button, Grid, Typography } from "@mui/material";

const SearchBar = ({ setSearchQuery, handleSearch }) => (
  <Grid
    container
    className="search-bar-container"
    direction="row"
    justifyContent="center"
  >
    <TextField
      className="search-bar"
      onInput={(e) => {
        setSearchQuery(e.target.value);
      }}
      onKeyDown={(e) => {
        e.key === "Enter" && handleSearch();
      }}
      variant="outlined"
      placeholder="Search..."
    />
    <Button size="large" variant="contained" onClick={handleSearch}>
      <Typography variant="subtitle1" component="div">
        Search
      </Typography>
    </Button>
  </Grid>
);

export default SearchBar;
