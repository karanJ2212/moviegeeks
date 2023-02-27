import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import APIKEY from "../../common/apis/movieAPIkey";

export default function Home() {
  const movietxt = "rocky";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movietxt}&type=movie`)
        .catch((err) => {
          console.log("error", err);
        });
      console.log("response fron  the api", response);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </>
  );
}
