import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(data);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter(m => m.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updated));
    setFavorites(updated);
  };

  return (
    <div className="container mt-4">
      <h2>❤️ Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p className="text-muted">No favorites added yet.</p>
      ) : (
        <div className="row">
          {favorites.map(movie => (
            <div className="col-md-3 mb-3" key={movie.id}>
              <div 
                className="card h-100 shadow-sm"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.title}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h6 className="mb-2">{movie.title}</h6>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFavorite(movie.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
