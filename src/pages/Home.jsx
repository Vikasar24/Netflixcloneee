import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../utils/movies.json';
import '../styles/Home.css'; 
const Home = () => {
  const [genre, setGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [mainMovies, setMainMovies] = useState([]);
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    let filtered = moviesData;

    if (searchTerm) {
      filtered = filtered.filter(m =>
        m.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (genre !== 'All') {
      filtered = filtered.filter(m => m.genre === genre);
    }

    const main = filtered.filter(m => m.section === 'main');
    const other = filtered.filter(m => m.section === 'other');

    setMainMovies(main);
    setOtherMovies(other);
  }, [searchTerm, genre]);

  const slides = [
    {
      title: 'Welcome to MovieFlix',
      text: 'Stream your favorite movies, anytime, anywhere.',
      image: 'banner.jpg',
    },
    {
      title: 'HIT: The 3rd Case',
      text: 'A gripping thriller led by a brilliant cop.',
      image: 'Hit.jpg',
    },
    {
      title: 'Pathaan',
      text: 'An action-packed spy thriller starring Shah Rukh Khan.',
      image: 'Paat.jpeg',
    },
    {
      title: 'Paatal Lok',
      text: 'Dive into the dark underworld of crime and politics.',
      image: 'paatal_lok.jpg',
    },
  ];

  return (
    <>
      <div
  id="heroCarousel"
  className="carousel slide carousel-fade mb-5"
  data-bs-ride="carousel"
  data-bs-interval="3000"
>
  <div className="carousel-inner">
    {slides.map((item, index) => (
      <div
        key={index}
        className={`carousel-item ${index === 0 ? 'active' : ''}`}
        style={{ height: '100vh', maxHeight: '700px', position: 'relative' }}
      >
        <img
          src={item.image}
          className="d-block w-100 h-100"
          alt={item.title}
          style={{
            objectFit: 'cover',
            filter: 'brightness(65%)',
          }}
        />
        <div
          className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 ps-4 pe-4"
          style={{ textAlign: 'left' }}
        >
          <h1 className="fw-bold display-6 display-md-4">{item.title}</h1>
          <p className="lead d-none d-md-block">{item.text}</p>
        </div>
      </div>
    ))}
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#heroCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon"></span>
  </button>
</div>


      <div className="container mt-4">
        <h2>🎞 Latest Movies</h2>
        <div
          className="d-flex mb-3 flex-wrap align-items-center ms-auto"
          style={{ gap: '1rem', justifyContent: 'flex-end' }}
        >
          <input
            type="text"
            placeholder="Search movies..."
            className="form-control"
            style={{ width: '300px' }}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select
            className="form-select"
            style={{ width: '200px' }}
            onChange={e => setGenre(e.target.value)}
            value={genre}
          >
            <option value="All">All Genres</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
          </select>
        </div>

        <div className="row">
          {mainMovies.map(movie => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>

      {/* Other Movies */}
      <div className="container mt-5">
        <h2>📺 Other Movies & Series</h2>
        <div className="row">
          {otherMovies.map(movie => (
            <div className="col-md-3 mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
