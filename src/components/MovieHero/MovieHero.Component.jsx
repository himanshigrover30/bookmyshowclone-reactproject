import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);
  return <div>MovieHero</div>;
};

export default MovieHero;
