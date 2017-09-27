import React from 'react';

class ContactMe extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      phone: '('925')'876'-'1331
    };
  };

  render () {
    return (
      <div>
        {this.state.phone}
      </div>
    )
  };
};

export default ContactMe;