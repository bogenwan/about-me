import React from 'react';
import styles from './App.css'
// import laptop1 from '../laptop1.jpg';
// import mypic from '../mypic.jpg';

class App extends React.Component {
  constructor (prop) {
    super(prop);

    this.state = {
      firstName: 'Johnny',
      lastName: 'Kwong',
      // laptop1: laptop1,
      // mypic: mypic
    }
  };

  render () {
    return (
      <div>
        <nav>
          <ul className={styles.nav}>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Projects Showcase</a></li>
            <li><a href="#">Contact Me</a></li>
          </ul>
        </nav>
        {this.state.firstName}
        <img src={this.state.laptop1} alt="Lap top" />
        <img src={this.state.mypic} alt="Pic of me" />
        <img src='http://www.geekenstein.com/wp-content/uploads/2014/05/670px-06720360-MainPagePart3.png' alt="Pic of me" />
        <h2>Johnny Kwong</h2>
      </div>
    )
  };
};

export default App;