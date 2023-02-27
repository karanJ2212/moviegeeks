import React from "react";
import { useSelector } from "react-redux";
import { getallMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

export default function MovieListing() {
  const movies = useSelector(getallMovies);

  let rendermovies = "";
  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie}></MovieCard>
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{rendermovies}</div>
      </div>
    </div>
  );
}
