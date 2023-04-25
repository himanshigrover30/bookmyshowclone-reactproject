import React from "react";

const Cast = (props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32">
          <img
            src={`https://image.tmdb.org/t/p/original${props.image}`}
            alt="Cast and Crew"
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <h1 className="text-xl text-gray-800">{props.castName}</h1>
        <h1 className="text-sm text-gray-500">{props.role}</h1>
      </div>
    </>
  );
};

export default Cast;
