import React from "react";
import logo from '../../images/cyf-logo.png';
import NavBar from '../NavBar/NavBar.jsx';
import './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Header = ({ title }) => {
return (
  <Router>
    <header className="App-header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="CYF logo" />
      </div>
      <NavBar />
    </header>
  </Router>
)
}

export default Header;