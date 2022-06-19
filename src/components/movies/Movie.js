import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

import {
  Typography,
  Button,
  CircularProgress,
  Link,
  ButtonGroup,
  Grid,
  Container,
  Box,
} from "@mui/material";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [wikipediaQuery, setWikipediaQuery] = useState({});
  const [imdbQuery, setIMDBQuery] = useState({});

  const { movieId } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    const handleFetch = async (movieName) => {
      setLoading(true);
      await fetchFromWikipedia(movieName);
      await fetchFromIMDB(movieName);
      setLoading(false);
    };

    const fetchFromWikipedia = async (title) => {
      const url = createWikiUrl(title);
      const response = await axios.get(url);
      if (!response.ok) {
        console.error("Error message" + response.statusText); // make better error handling
      }
      setWikipediaQuery(response.data.query.search[0]);
    };

    const fetchFromIMDB = async (title) => {
      const url = `https://imdb-api.com/en/API/SearchMovie/k_o0lsh7aq/${title}`;
      const response = await axios.get(url);
      if (!response.ok) {
        console.error(response.statusText); // make better error handling
      }
      setIMDBQuery(response.data.results[0]);
    };

    handleFetch(state.movieName);
  }, [movieId, state]);

  const createWikiUrl = (title) => {
    let url = "https://en.wikipedia.org/w/api.php";

    const movieName = title.trim().toLowerCase();

    const params = {
      action: "query",
      list: "search",
      srsearch: movieName,
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    return url;
  };

  return (
    <Container style={{ width: "60%" }} sx={{ my: 5 }}>
      <Grid container alignItems="center" direction="column">
        <Grid item sx={{ mb: 2, width: "30%" }}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt={`${state.movieName} poster`}
            src={state.moviePoster.original}
          />
        </Grid>
        <Grid item sx={{ mb: 5 }}>
          <Typography variant="h4" component="h2">
            {state.movieName}
          </Typography>
        </Grid>
        <Grid item sx={{ mb: 5, width: "90%" }} alignSelf="center">
          <Typography variant="h6" component="div">
            {state.movieOverview}
          </Typography>
        </Grid>
        {loading ? (
          <Button size="large" variant="contained">
            <CircularProgress color="inherit" size="2rem" />
          </Button>
        ) : (
          <ButtonGroup variant="contained">
            <Button size="large" variant="contained">
              <Link
                underline="none"
                target="_blank"
                href={`https://en.wikipedia.org/?curid=${wikipediaQuery.pageid}`}
              >
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  color="#fff"
                >
                  Wikipedia
                </Typography>
              </Link>
            </Button>
            <Button size="large" variant="contained">
              <Link
                underline="none"
                target="_blank"
                href={`https://www.imdb.com/title/${imdbQuery.id}`}
              >
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  color="#fff"
                >
                  IMDB
                </Typography>
              </Link>
            </Button>
          </ButtonGroup>
        )}
      </Grid>
    </Container>
  );
};

export default Movie;
