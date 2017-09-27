import React from 'react';

class ShowCase extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      pic: 'pictures'
    };
  }

  render () {
    return (
      <div>
        {this.state.pic}
      </div>
    )
  };
};

export default ShowCase;