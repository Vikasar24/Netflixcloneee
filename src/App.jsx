import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
  <ThemeProvider>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </ThemeProvider>
); };
export default App;
