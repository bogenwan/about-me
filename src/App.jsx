import React from 'react';

class App extends React.Component {
  constructor (prop) {
    super(prop);

    this.state = {
      firstName: 'Johnny',
      lastName: 'Kwong'
    }
  };

  render () {
    return (
      <div>
        {this.state.firstName}
      </div>
    )
  };
};

export default App;