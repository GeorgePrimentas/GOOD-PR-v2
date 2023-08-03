import React, { useState, useEffect } from "react";
import './NavBar.css';

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

    const handleAboutClick = () => {
    setShowMenu(false); // Close the off-canvas menu when About is clicked
    setShowAbout(!showAbout); // Toggle the About component display
  };

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
            <a href="#">Team Registration</a>
            <a href="#">Search</a>
            <a href="#" onClick={handleAboutClick}>About</a> {/* Add onClick event */}
          </nav>
        )}
        {showMenu && (
          <div className={`off-canvas-menu ${showMenu ? "show-off-canvas-menu" : ""}`}>
            <a href="#" onClick={() => setShowMenu(false)}>Team Registration</a>
            <a href="#" onClick={() => setShowMenu(false)}>Search</a>
            <a href="#" onClick={() => setShowMenu(false)}>About</a>
          </div>
        )}
         {showAbout && <div className="about-content">About Us - Some content here</div>} {/* Display the About component */}
      </div>
     
  );
}

export default NavBar;