import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { dark } = useTheme();

  return (
    <footer
      className={`text-center py-4 mt-5 ${dark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      style={{ borderTop: '1px solid', borderColor: dark ? '#444' : '#ccc' }}
    >
      <div className="container">
        <p className="mb-1">🎬 MovieFlix &copy; {new Date().getFullYear()} All rights reserved.</p>
        <small>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
