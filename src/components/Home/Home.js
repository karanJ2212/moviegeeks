import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import APIKEY from "../../common/apis/movieAPIkey";
import { useDispatch } from "react-redux";
import { addMOvies } from "../../features/movies/movieSlice";

export default function Home() {
  const movietxt = "rocky";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movietxt}&type=movie`)
        .catch((err) => {
          console.log("error", err);
        });
      dispatch(addMOvies(response.data));
      console.log("response fron  the api", response.data);
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
