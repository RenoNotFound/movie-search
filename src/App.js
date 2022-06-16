import "./App.css";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Movies from "./components/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movies" element={<Movies />}>
        <Route path=":movieId" element={<Movie />} />
      </Route>
    </Routes>
  );
}

export default App;
