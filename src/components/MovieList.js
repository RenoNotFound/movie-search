import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const SEARCH_MOVIES = gql`
  query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      score
      genres {
        name
      }
      overview
      releaseDate
    }
  }
`;

const MovieList = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [executeSearch, { loading, error, data }] = useLazyQuery(SEARCH_MOVIES);

  const handleSearch = () => {
    executeSearch({ variables: { title: movieTitle } });
  };

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error :(</p>;

  return (
    <>
      <div>
        Search
        <input
          type="text"
          onChange={(event) => setMovieTitle(event.target.value)}
          onKeyDown={(event) => {
            event.key === "Enter" && handleSearch();
          }}
        />
        <button onClick={handleSearch}>OK</button>
      </div>
      <ul>
        {data ? (
          <>
            {data.searchMovies.map((movie) => (
              <li key={movie.id}>
                <p>
                  <Link to={"/movies/" + movie.id}>{movie.name}</Link>
                </p>
                <span>Score: {movie.score}</span>
                <div>
                  {" "}
                  Categories:
                  {movie.genres.map((genre) => (
                    <span key={genre.name}>{genre.name}</span>
                  ))}
                </div>
              </li>
            ))}
          </>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          ""
        )}
      </ul>
    </>
  );
};

export default MovieList;
