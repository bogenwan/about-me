import React from 'react';
import styles from './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div className={styles.container}>
      <h1 className={styles.logo}>Johnny Kwong</h1>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/show-case">Projects Showcase</Link></li>
            <li><Link to="/contact-me">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    )
  };
};

export default Nav;