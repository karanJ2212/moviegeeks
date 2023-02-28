import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getallDetails,
  removeselected,
} from "../../features/movies/movieSlice";

import "./MovieDetails.scss";

export default function MovieDetails() {
  const { imdbID } = useParams();
  console.log(imdbID);

  const dispatch = useDispatch();

  const detailsData = useSelector(getallDetails);
  console.log(detailsData);

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
    return () => {
      dispatch(removeselected());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(detailsData).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{detailsData.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>:
                {detailsData.imdbRating}
              </span>

              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i>:
                {detailsData.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>:{detailsData.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>:{detailsData.Year}
              </span>
            </div>

            <div className="movie-plot">{detailsData.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{detailsData.Director}</span>
              </div>
              <div>
                <span>Starring</span>
                <span>{detailsData.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{detailsData.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{detailsData.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{detailsData.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={detailsData.Poster} alt={detailsData.Title} />
          </div>
        </>
      )}
    </div>
  );
}
