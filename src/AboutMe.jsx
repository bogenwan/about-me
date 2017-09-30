import React from 'react';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'My name is Johnny Kwong, I\'m a software engineer',
      touchedAboutMeReducer: true,
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