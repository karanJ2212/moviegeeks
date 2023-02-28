import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDetails,
  getallDetails,
} from "../../features/movies/movieSlice";

export default function MovieDetails() {
  const { imdbID } = useParams();
  console.log(imdbID);

  const dispatch = useDispatch();

  const detailsData = useSelector(getallDetails);
  console.log(detailsData);

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
  }, [dispatch, imdbID]);
  return <div>MovieDetails</div>;
}
