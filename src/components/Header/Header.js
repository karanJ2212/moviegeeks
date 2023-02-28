import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";
export default function Header() {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie Geeks</Link>
      </div>
      <div className="searchbar">
        <form action="submit" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search movies or shows"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            {" "}
            <i className="fa fa-search"></i>{" "}
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
