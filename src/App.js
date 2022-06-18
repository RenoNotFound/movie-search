import "./App.css";
import { Navigate, useRoutes } from "react-router-dom";

import Home from "./components/home/Home";
import Movie from "./components/movies/Movie";
import Layout from "./components/layout/Layout";
import PageNotFound from "./components/utils/PageNotFound";

const App = () => {
  const routes = {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <Home /> },
      { path: "/movies/:movieId", element: <Movie /> },
      { path: "404", element: <PageNotFound /> },
    ],
  };

  const routing = useRoutes([routes]);

  return <>{routing}</>;
};

export default App;
