import React from 'react';

class AboutMe extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      text: 'My name is Johnny Kwong, I\'m a software engineer'
    };
  };

  render () {
    return (
      <div>
        {this.state.text}
      </div>
    )
  };
};

export default AboutMe;