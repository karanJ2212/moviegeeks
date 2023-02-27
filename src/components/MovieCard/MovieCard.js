import React from "react";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="class-top">
          <img src={data.Poster} alt={data.title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
