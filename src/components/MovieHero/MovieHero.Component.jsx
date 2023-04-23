import React from "react";
import { useContext } from "react";
import { MovieContext } from "../../context/Movie.context";

const MovieHero = () => {
  const { movie } = useContext(MovieContext);

  const genres = movie.genres?.map(({ name }) => name).join(" , ");
  //   console.log(genres);

  return (
    <>
      <div>
        {/* Mobile and Tab Screen i.e. small and medium screen size */}
        <div className="lg:hidden w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="Cover Poster"
            className="m-4 rounded"
            style={{ width: "calc(100%-2rem)" }}
          />
        </div>
      </div>
    </>
  );
};

export default MovieHero;
