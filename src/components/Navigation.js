import React from 'react';
import { Link } from 'react-router-dom'

// using the 'link' feature of react router dom package
// to provide navigation around application
// 'to' prop specifies where we go to in the url
// returns whole navigation component
const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
