import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Movie = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // 가데이터 사용
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          setLoading(false);
        });
    }, 1500);
  }, [type]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} isLoading={loading} />
      ))}
    </div>
  );
};

export default Movie;
