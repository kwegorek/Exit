import React from 'react';
import { Environment, asset } from 'react-360';
import { connect } from 'react-redux';
import Cabin from './cabin';

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.envChanger = this.envChanger.bind(this)
  }
  envChanger(imageUrl) {
    Environment.setBackgroundImage(asset(imageUrl))
  }
  render() {
    const location = this.props.location;
    if (location === 'cabin') {
      this.envChanger('360mansion.jpg')
      return <Cabin />;
    } else if (location === 'tutorial') {
      return null
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
