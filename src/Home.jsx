import React from 'react';
import styles from './Home.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { touchedHomeCounter } from './actions/homeActions'

class Home extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   firstName: 'Johnny',
    //   lastName: 'Kwong',
    //   touchedHomeReducer: this.props.touchedHome,
    // };
  };

  render () {
    return (
      <div>
        <h1>Welcome to my webpage!</h1>
          <img src='http://www.geekenstein.com/wp-content/uploads/2014/05/670px-06720360-MainPagePart3.png' alt="Pic of me" />
          <button type="button" onClick={this.props.touchedHomeCounter}>check redux Home</button>
          <h1>{this.props.touchedHome}</h1>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    touchedHome: state.home.touchedHomeReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({touchedHomeCounter}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);