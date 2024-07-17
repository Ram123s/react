import React from 'react';
import './Header.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      </div>
      <div className="right-side">
        <select>
          <option value="english">English</option>
          <option value="hindi">हिंदी </option>
        </select>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
