import React from "react";
import logo from '../../images/cyf-logo.png';
import './Header.css';

const Header = ({ title }) => {

return (
    <header className="App-header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="CYF logo" />
      </div>
    </header>
)

}

export default Header;