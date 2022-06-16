import "./App.css";
import { Navigate, useRoutes } from "react-router-dom";
import MovieList from "./components/movies/MovieList";
import Movie from "./components/movies/Movie";
import Layout from "./components/Layout";
import PageNotFound from "./components/utils/PageNotFound";

const App = () => {
  const mainRoutes = {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <MovieList /> },
      { path: "/movies/:movieId", element: <Movie /> },
      { path: "404", element: <PageNotFound /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;
