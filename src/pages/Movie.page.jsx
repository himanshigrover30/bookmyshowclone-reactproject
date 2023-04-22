import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieLayoutHoc from "../layout/Movie.layout";

const MoviePage = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Cast
  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestsimilarMovies = async () => {
      const getsimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getsimilarMovies.data.results);
    };
    requestsimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();
  }, [id]);

  return <div>MoviePage</div>;
};

export default MovieLayoutHoc(MoviePage);
