import React from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MovieListTable = ({ data }) => {
  const createTableHeader = (text) => {
    return (
      <TableCell>
        <Typography className="table-header" component="span">
          {text}
        </Typography>
      </TableCell>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="movies table">
        <TableHead>
          <TableRow>
            {createTableHeader("Title")}
            {createTableHeader("Score")}
            {createTableHeader("Categories")}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell component="td" scope="row">
                <Link
                  to={`/movies/${movie.id}`}
                  state={{
                    movieName: movie.name,
                    movieOverview: movie.overview,
                    moviePoster: movie.poster,
                  }}
                >
                  <Typography component="span">{movie.name}</Typography>
                </Link>
              </TableCell>
              <TableCell>
                <Typography component="span">{movie.score}</Typography>
              </TableCell>
              <TableCell>
                {movie.genres.map((genre) => (
                  <Typography component="span" key={genre.name}>
                    {genre.name + ", "}
                  </Typography>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieListTable;
