import { gql } from "@apollo/client";

export const SEARCH_MOVIES = gql`
  query SearchMovies($title: String!) {
    searchMovies(query: $title) {
      id
      name
      score
      poster {
        original
        small
        medium
        large
      }
      genres {
        name
      }
      overview
      releaseDate
      similar {
        id
        name
        overview
        releaseDate
      }
    }
  }
`;
