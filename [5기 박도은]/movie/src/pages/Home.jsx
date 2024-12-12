import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const movies = [
    {
      id: 804150,
      title: "코카인 베어",
      backdrop: "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
    },
    {
      id: 603692,
      title: "존 윅 4",
      backdrop: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
    },
    {
      id: 315162,
      title: "장화신은 고양이",
      backdrop: "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
    },
  ];

  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      onClickItem={(index) => navigate(`/movie/${movies[index].id}`)}
    >
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop}`} alt={movie.title} />
          <p className="legend">{movie.title}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Home;
