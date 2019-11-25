import React from 'react';
import { Environment, asset } from 'react-360';
import { connect } from 'react-redux';
import Cabin from './cabin';

class Location extends React.Component {
  render() {
    const location = this.props.location;
    if (location === 'cabin') {
      Environment.setBackgroundImage(asset('360mansion.jpg'));
      return <Cabin />;
    }
  }
}

const mapStateToProps = state => {
  console.log('mapping state to camera', state);
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps, null)(Location);
