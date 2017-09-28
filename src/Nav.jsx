import React from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="container">
  <h1>Johnny Kwong</h1>
    <nav>
      <ul className={styles.nav}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-me">About Me</Link></li>
        <li><Link to="/show-case">Projects Showcase</Link></li>
        <li><Link to="/contact-me">Contact Me</Link></li>
      </ul>
    </nav>
  </div>
);

export default Nav;