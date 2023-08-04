import React, { useState, useEffect } from "react";
import './NavBar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false); // State for hamburger menu visibility
  const [showAbout, setShowAbout] = useState(false); // State for showing the About component

  // Update windowWidth state on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle hamburger menu visibility
  const handleHamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  // Add event listener for hamburger menu visibility on window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowMenu(false); // Hide the off-canvas menu on window resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showHamburgerMenu = windowWidth < 700;
  
  return (

      <div className="header-content">
        <span className="header-text">PR Tracker</span>
        {showHamburgerMenu ? (
          <button
            className={`hamburger-menu ${showMenu ? "active" : ""}`}
            onClick={handleHamburgerClick}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        ) : (
          <nav className="header-links">
            <Link to="/">
              Home
            </Link>
            <Link to="/form">
              Team Registration
            </Link>
            <Link to="/search">
              Search
            </Link>
          </nav>
        )}
        {showMenu && (
          <div className={`off-canvas-menu ${showMenu ? "show-off-canvas-menu" : ""}`}>
            <Link to="/" className="list-links">
              Home
            </Link>
            <Link to="/form" className="list-links">
              Team Registration
            </Link>
            <Link to="/search" className="list-links">
              Search
            </Link>
          </div>
        )}
      </div>
     
  );
}

export default NavBar;