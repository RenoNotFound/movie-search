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
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead color="primary">
          <TableRow>
            <TableCell>
              <Typography component="span">Title</Typography>
            </TableCell>
            <TableCell>
              <Typography component="span">Score</Typography>
            </TableCell>
            <TableCell>
              <Typography component="span">Categories</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.searchMovies.map((movie) => (
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
