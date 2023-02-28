import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
// import { addMOvies } from "../../features/movies/movieSlice";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const movietxt = "spider";
  const showtxt = "blood";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movietxt));
    dispatch(fetchAsyncSeries(showtxt));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing></MovieListing>
    </>
  );
}
