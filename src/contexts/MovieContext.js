import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  return (
    <MovieContext.Provider value={{ relatedMovies, setRelatedMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
