import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Card = ({ movie, isLoading }) => {
  if (isLoading) {
    return (
      <div className="card">
        <Skeleton height={300} width={200} />
        <Skeleton height={30} width="60%" />
      </div>
    );
  }

  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.title}</p>
    </div>
  );
};

export default Card;
