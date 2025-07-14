import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../utils/movies.json';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  const recommended = movies.filter(
    m => m.genre === movie?.genre && m.id !== movie?.id
  );

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const addToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!existing.some(m => m.id === movie.id)) {
      existing.push(movie);
      localStorage.setItem('favorites', JSON.stringify(existing));
      alert('✅ Added to favorites!');
    }
  };

  if (!movie) return <div className="container mt-4">Movie not found.</div>;

  return (
    <div className="container mt-5">
  
      <div className="row align-items-center mb-5">
        <div className="col-md-5">
          <img
  src={`${import.meta.env.BASE_URL}${movie.image.startsWith('/') ? movie.image.slice(1) : movie.image}`}
  alt={movie.title} className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">{movie.title}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Rating:</strong> {movie.rating} ⭐</p>
          <p><strong>Release:</strong> {movie.releaseDate}</p>
          <p>{movie.description}</p>
          <button className="btn btn-danger mt-2" onClick={addToFavorites}>
            Add to Favorites
          </button>
        </div>
      </div>

      <div className="mb-5">
  <h4 style={{ color: 'red' }}>More About This Movie</h4>
  <p style={{ color: 'red', textAlign: 'justify' }}>
    <strong>{movie.title}</strong> is a shining example of Indian cinematic brilliance, blending storytelling,
    performance, and cultural depth into a compelling experience. Set against a backdrop of rich Indian heritage and
    contemporary themes, the film captivates the audience from the very first frame. It dives into complex human
    emotions — love, loss, vengeance, courage, and redemption — using characters that are deeply relatable and
    meticulously crafted. <br /><br />
    
    The narrative unfolds in layers, revealing unexpected twists and nuanced character development. The protagonist,
    portrayed with exceptional skill, takes viewers on an emotional rollercoaster that challenges the boundaries between
    good and evil. The direction masterfully combines cinematic techniques such as tight close-ups, atmospheric
    lighting, and symbolic metaphors to convey the psychological undertones of each scene.<br /><br />
    
    The soundtrack, composed with precision, adds an emotional rhythm that supports the mood of the story —
    from haunting melodies during moments of conflict to uplifting themes during redemption. Background scores never
    overpower the narrative; instead, they complement the visual journey and build tension where needed.<br /><br />
    
    Visually, <strong>{movie.title}</strong> is a treat. The cinematography captures breathtaking landscapes, intricate
    set designs, and the emotional expressions of its cast with equal finesse. The costume design and art direction
    enrich the narrative by staying true to the cultural context while pushing creative boundaries.<br /><br />
    
    The film also holds a mirror to society by addressing issues such as injustice, identity, and the pursuit of truth.
    Through its characters' moral dilemmas and growth arcs, the story speaks universally to audiences across all walks
    of life. Whether you're a fan of thrillers, dramas, or emotional sagas, this film has something to offer.<br /><br />
    
    In conclusion, <strong>{movie.title}</strong> isn’t just a movie — it’s an experience. It's one of those rare Indian
    masterpieces that manage to leave a lasting impact, inspiring conversations and reflection long after the credits
    roll. A must-watch for anyone who appreciates thoughtful, intense, and beautifully told cinema.
  </p>
</div>


     
      {movie.cast && (
        <div className="mb-5">
          <h4>Cast</h4>
          <div className="d-flex flex-wrap gap-3">
            {movie.cast.map((actor, index) => (
              <div className="text-center" key={index}>
                <img
                  src={actor.photo}
                  className="rounded-circle"
                  width="80"
                  height="80"
                  alt={actor.name}
                />
                <p className="mt-2">{actor.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Movies */}
      <div className="mb-5">
        <h4>Recommended in {movie.genre}</h4>
        <div className="row">
          {recommended.map(rec => (
            <div
              className="col-md-3 mb-4"
              key={rec.id}
              onClick={() => navigate(`/movie/${rec.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card h-100 shadow-sm movie-card">
                <img
                  src={rec.image}
                  className="card-img-top"
                  alt={rec.title}
                  style={{ height: '450px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h6>{rec.title}</h6>
                  <p>{rec.rating} ⭐</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
