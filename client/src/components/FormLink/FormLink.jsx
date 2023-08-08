import React from 'react';
import { Link } from 'react-router-dom';

const TeamNotRegistered = () => {
  const formLinkStyle = {
    backgroundColor: 'red',
    color: 'white',
    textDecoration: 'none',
    padding: '5px',
    borderRadius: '3px',
  };

  return (
    <div>
      <p>
        If you are unable to find your team,
        <Link to="/registration-form-link-here" style={formLinkStyle}>
          Please fill out this form
        </Link>
        to register your team.
      </p>
    </div>
  );
};

export default TeamNotRegistered;
