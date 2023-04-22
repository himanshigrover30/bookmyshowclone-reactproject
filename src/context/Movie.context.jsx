import React, { createContext } from "react";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};

export default MovieProvider;
