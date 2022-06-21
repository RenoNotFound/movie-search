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

export const GET_MOVIE = gql`
  query getMovie($movieId: ID!) {
    movie(id: $movieId) {
      id
      name
      similar {
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
  }
`;
