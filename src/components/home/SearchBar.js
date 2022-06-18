import "../movies/movies.css";
import React from "react";

import { TextField, Button, Grid, Typography } from "@mui/material";

const SearchBar = ({ setSearchQuery, handleSearch }) => (
  <Grid container direction="row" justifyContent="center" sx={{ mb: 5 }}>
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
      <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
        Search
      </Typography>
    </Button>
  </Grid>
);

export default SearchBar;
