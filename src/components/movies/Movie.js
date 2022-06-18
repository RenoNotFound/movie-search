import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

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
        console.error(response.statusText); // make better error handling
      }
      setWikipediaQuery(response.data.query);
      console.log(response.data.query);
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
    <div>
      <p>{state.movieName}</p>
      <p>{state.movieOverview}</p>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <a
            href={`https://en.wikipedia.org/?curid=${wikipediaQuery.search[0].pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Wikipedia
          </a>
          <a
            href={`https://www.imdb.com/title/${imdbQuery.id}`}
            target="_blank"
            rel="noreferrer"
          >
            IMDB
          </a>
        </>
      )}
    </div>
  );
};

export default Movie;
