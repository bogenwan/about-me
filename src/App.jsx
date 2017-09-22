import React from 'react';
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
        {this.state.firstName}
        // <img src={this.state.laptop1} alt="Lap top" />
        // <img src={this.state.mypic} alt="Pic of me" />
      </div>
    )
  };
};

export default App;