import React from 'react';
import styles from './Home.css';

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      firstName: 'Johnny',
      lastName: 'Kwong',
    };
  };

  render () {
    return (
      <div>
        <h1>Welcome to my webpage!</h1>
          <img src='http://www.geekenstein.com/wp-content/uploads/2014/05/670px-06720360-MainPagePart3.png' alt="Pic of me" />
      </div>
    )
  };
};

export default Home;