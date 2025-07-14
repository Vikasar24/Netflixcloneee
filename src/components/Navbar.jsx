import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { toggleTheme, dark } = useTheme();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-3 py-2">
      <div className="container-fluid">
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="mx-auto order-0">
          <Link to="/" className="navbar-brand text-white fs-4 text-center">
            🎬 MovieFlix
          </Link>
        </div>

        
        <div className="collapse navbar-collapse justify-content-end order-lg-1" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex align-items-center gap-3">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/favorites">Favorites</Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-sm btn-outline-light"
                onClick={toggleTheme}
              >
                {dark ? '☀️ Light' : '🌙 Dark'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
