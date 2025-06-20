import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/">HatPro</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/signin" className="nav-link nav-link-signin">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 