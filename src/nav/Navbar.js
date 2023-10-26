import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../nav/Navbar.css";

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className={`header ${isNavOpen ? 'nav-open' : ''}`}>
      <button className="nav-toggle" onClick={toggleNav}>
        
      </button>
      <Link to={"/"}>
        <h1>Shabna pk.</h1>
      </Link>

      <ul className={`nav-men ${isNavOpen ? 'nav-open' : ''}`}>
        <li>
          <Link to="/" onClick={toggleNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleNav}>
            About
          </Link>
        </li>
        <li>
          <Link to="/skills" onClick={toggleNav}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={toggleNav}>
            Project
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
