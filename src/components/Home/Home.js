import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
// import { addMOvies } from "../../features/movies/movieSlice";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

export default function Home() {
  // const movietxt = "blood";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </>
  );
}
