/**
 * Navigation.jsx
 * Navigation component
 */

// Node Modules
import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">
      Project Name
    </Link>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
