import React, { useState } from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(" , ");

  const rentMovie = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovie = () => {
    setIsOpen(true);
    setPrice(999);
  };
  return (
    <>
      {/* <paymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price}/> */}
    </>
  );
};

export default MovieInfo;
