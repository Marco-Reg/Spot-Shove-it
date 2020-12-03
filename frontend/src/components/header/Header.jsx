import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header id="info-header">
      <div id="log-box">

        <Link to="/">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5f7afb80257ef0330839c5e5/5fbbd46936d1b43c58e6acd5/667daae8ab79997e2a5ae5cf37bd385a/logo_size_invert.jpg"
            id="logo-spot"
            alt="logo"
          />
        </Link>

      </div>
      <div id="home-link">
        <Link to="/" id="homie">
          <p id="login">Login</p>
        </Link>

      </div>
      <div id="home-link">
        <Link to="/" id="homie">
          <p id="homie">home</p>
        </Link>

      </div>
      <div id="home-link">
        <Link to="/user/:id" id="homie">
          <p id="homie">Profile</p>
        </Link>

      </div>
      <div id="home-link">
        <Link to="/spot/5fc613befcb4ee1210e2578f" id="homie">
          <p id="homie">Spots</p>
        </Link>

      </div>

    </header>

  );
}
export default Header;
