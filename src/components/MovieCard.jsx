import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; 

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className="movie-card-custom"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img
  src={`${import.meta.env.BASE_URL}${movie.image.startsWith('/') ? movie.image.slice(1) : movie.image}`}
  alt={movie.title}
/>

      <div className="overlay">
        <h5>{movie.title}</h5>
        <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
        <p className="click-msg">Click to view more</p>
        <p className="desc">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
